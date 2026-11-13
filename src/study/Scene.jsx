import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { MODULES } from './content.js'

const ORBIT_RADIUS = 9
const OVERVIEW = { position: new THREE.Vector3(0, 9, 21), target: new THREE.Vector3(0, 0, 0) }
const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Position fixe de chaque module sur l'orbite.
const PLANET_POSITIONS = Object.fromEntries(
  MODULES.map((module, i) => {
    const angle = (i / MODULES.length) * Math.PI * 2 - Math.PI / 2
    return [
      module.id,
      new THREE.Vector3(Math.cos(angle) * ORBIT_RADIUS, i % 2 === 0 ? 0.6 : -0.6, Math.sin(angle) * ORBIT_RADIUS),
    ]
  }),
)

function viewFor(moduleId) {
  if (!moduleId) return OVERVIEW
  const target = PLANET_POSITIONS[moduleId]
  const outward = target.clone().setY(0).normalize()
  return { target, position: target.clone().add(outward.multiplyScalar(8.5)).add(new THREE.Vector3(0, 6, 0)) }
}

// Déplace la caméra vers le module choisi, puis rend la main à l'utilisateur.
function CameraRig({ focusId, controls, shift, lift }) {
  const view = useMemo(() => viewFor(focusId), [focusId])
  const moving = useRef(true)
  const goal = useRef(new THREE.Vector3())
  const camera = useThree((state) => state.camera)
  const size = useThree((state) => state.size)

  // Décale le centre de l'image pour que la scène reste visible à côté des panneaux.
  useEffect(() => {
    camera.setViewOffset(size.width, size.height, -shift, lift, size.width, size.height)
    return () => camera.clearViewOffset()
  }, [camera, size, shift, lift])

  useEffect(() => {
    // Recule sur les fenêtres étroites pour garder le sujet entier dans la zone libre.
    const freeAspect = (size.width - 2 * Math.abs(shift)) / (size.height - 2 * lift)
    const pullBack = Math.max(1, (focusId ? 1 : 1.2) / freeAspect)
    goal.current.copy(view.position).sub(view.target).multiplyScalar(pullBack).add(view.target)
    moving.current = true
  }, [view, focusId, size, shift, lift])

  useEffect(() => {
    const c = controls.current
    if (!c) return
    const stop = () => (moving.current = false)
    c.addEventListener('start', stop)
    return () => c.removeEventListener('start', stop)
  }, [controls])

  useFrame((state, delta) => {
    const c = controls.current
    if (!moving.current || !c) return
    const k = reducedMotion ? 1 : 1 - Math.exp(-4 * delta)
    state.camera.position.lerp(goal.current, k)
    c.target.lerp(view.target, k)
    c.update()
    if (state.camera.position.distanceTo(goal.current) < 0.03) moving.current = false
  })

  return null
}

// Étiquette dessinée dans une texture : taille constante à l'écran, toujours face à la caméra.
function drawLabel(lines, color) {
  const scale = 3
  const fonts = ['600 15px system-ui, sans-serif', '500 12px system-ui, sans-serif']
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const widths = lines.map((line, i) => {
    ctx.font = fonts[Math.min(i, 1)]
    return ctx.measureText(line).width
  })
  const width = Math.ceil(Math.max(...widths) + 22)
  const height = lines.length > 1 ? 42 : 26
  canvas.width = width * scale
  canvas.height = height * scale
  ctx.scale(scale, scale)

  ctx.beginPath()
  ctx.roundRect(1, 1, width - 2, height - 2, (height - 2) / 2)
  ctx.fillStyle = 'rgba(10, 14, 26, 0.8)'
  ctx.fill()
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  lines.forEach((line, i) => {
    ctx.font = fonts[Math.min(i, 1)]
    ctx.fillStyle = i === 0 ? color : '#9aa2b5'
    ctx.fillText(line, width / 2, lines.length > 1 ? (i === 0 ? 14 : 30) : height / 2 + 1)
  })

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return { texture, width, height }
}

function Label({ text, sub, position, color = '#f1f5f9', opacity = 1 }) {
  const viewportHeight = useThree((state) => state.size.height)
  const fov = useThree((state) => state.camera.fov)
  const { texture, width, height } = useMemo(() => drawLabel(sub ? [text, sub] : [text], color), [text, sub, color])

  useEffect(() => () => texture.dispose(), [texture])

  // Sans atténuation, une échelle de 1 couvre la hauteur visible à une unité de distance.
  const unit = (2 * Math.tan(THREE.MathUtils.degToRad(fov) / 2)) / viewportHeight
  return (
    <sprite position={position} scale={[width * unit, height * unit, 1]} renderOrder={10}>
      <spriteMaterial map={texture} transparent opacity={opacity} depthTest={false} sizeAttenuation={false} />
    </sprite>
  )
}

function usePointerCursor() {
  return {
    onPointerOver: (e) => {
      e.stopPropagation()
      document.body.style.cursor = 'pointer'
    },
    onPointerOut: () => {
      document.body.style.cursor = ''
    },
  }
}

function Core({ onSelect, dimmed }) {
  const mesh = useRef()
  const cursor = usePointerCursor()
  useFrame((_, delta) => {
    if (!reducedMotion) mesh.current.rotation.y += delta * 0.15
  })

  return (
    <group>
      <mesh ref={mesh} onClick={() => onSelect(null)} {...cursor}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#fde68a" emissive="#f59e0b" emissiveIntensity={0.9} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshStandardMaterial color="#fde68a" emissive="#fbbf24" emissiveIntensity={1.4} />
      </mesh>
      <pointLight intensity={160} color="#ffe9b0" />
      <Label text="Objectif IELTS 7.0" position={[0, 2.4, 0]} color="#fde68a" opacity={dimmed ? 0.45 : 1} />
    </group>
  )
}

function Moons({ module, done, activeLessonId, onSelectLesson }) {
  const group = useRef()
  const cursor = usePointerCursor()
  const [hoverId, setHoverId] = useState(null)

  useFrame((_, delta) => {
    if (!reducedMotion && !hoverId && !activeLessonId) group.current.rotation.y += delta * 0.1
  })

  const perRing = 8
  return (
    <group ref={group}>
      {module.lessons.map((lesson, i) => {
        const ring = Math.floor(i / perRing)
        const inRing = Math.min(perRing, module.lessons.length - ring * perRing)
        const angle = ((i % perRing) / inRing) * Math.PI * 2 + ring * 0.4
        const radius = 2.4 + ring * 1.05
        const isDone = done.has(lesson.id)
        const isActive = lesson.id === activeLessonId
        const showTitle = hoverId === lesson.id || isActive
        return (
          <group key={lesson.id} position={[Math.cos(angle) * radius, ring * 0.4, Math.sin(angle) * radius]}>
            <mesh
              scale={isActive ? 1.35 : 1}
              onClick={(e) => {
                e.stopPropagation()
                onSelectLesson(lesson.id)
              }}
              onPointerOver={(e) => {
                cursor.onPointerOver(e)
                setHoverId(lesson.id)
              }}
              onPointerOut={() => {
                cursor.onPointerOut()
                setHoverId(null)
              }}
            >
              <sphereGeometry args={[0.3, 20, 20]} />
              <meshStandardMaterial
                color={isDone ? '#34d399' : '#f8fafc'}
                emissive={isDone ? '#34d399' : module.color}
                emissiveIntensity={isActive ? 1.2 : isDone ? 0.6 : 0.25}
              />
            </mesh>
            <Label text={showTitle ? lesson.title : String(i + 1)} position={[0, 0.62, 0]} />
          </group>
        )
      })}
    </group>
  )
}

function Planet({ module, focused, dimmed, done, activeLessonId, onSelect, onSelectLesson }) {
  const mesh = useRef()
  const cursor = usePointerCursor()
  const position = PLANET_POSITIONS[module.id]
  const completed = module.lessons.filter((l) => done.has(l.id)).length
  const ratio = completed / module.lessons.length

  useFrame((_, delta) => {
    if (!reducedMotion) mesh.current.rotation.y += delta * 0.2
  })

  return (
    <group position={position}>
      <mesh ref={mesh} onClick={(e) => (e.stopPropagation(), onSelect(module.id))} {...cursor}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial
          color={module.color}
          emissive={module.color}
          emissiveIntensity={focused ? 0.55 : 0.3}
          roughness={0.55}
          flatShading
          transparent
          opacity={dimmed ? 0.35 : 1}
        />
      </mesh>

      {/* Anneau de progression : l'arc vert représente les leçons terminées. */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.55, 0.025, 8, 64]} />
          <meshBasicMaterial color="#475569" transparent opacity={dimmed ? 0.2 : 0.7} />
        </mesh>
        {ratio > 0 && (
          <mesh>
            <torusGeometry args={[1.55, 0.06, 8, 64, Math.PI * 2 * ratio]} />
            <meshBasicMaterial color="#34d399" />
          </mesh>
        )}
      </group>

      {!focused && (
        <Label
          text={module.title}
          sub={`${completed}/${module.lessons.length}`}
          position={[0, 2.1, 0]}
          opacity={dimmed ? 0.45 : 1}
        />
      )}

      {focused && (
        <Moons module={module} done={done} activeLessonId={activeLessonId} onSelectLesson={onSelectLesson} />
      )}
    </group>
  )
}

export default function Scene({ focusId, activeLessonId, done, shift = 0, lift = 0, onSelectModule, onSelectLesson }) {
  const controls = useRef()

  useEffect(() => () => (document.body.style.cursor = ''), [])

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 14, 30], fov: 50 }} aria-label="Carte 3D des modules d’étude">
      <color attach="background" args={['#070a14']} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[10, 14, 8]} intensity={1.1} />
      <Stars radius={70} depth={40} count={2500} factor={3.5} fade speed={reducedMotion ? 0 : 0.6} />

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[ORBIT_RADIUS, 0.012, 6, 128]} />
        <meshBasicMaterial color="#334155" />
      </mesh>

      <Core onSelect={onSelectModule} dimmed={Boolean(focusId)} />
      {MODULES.map((module) => (
        <Planet
          key={module.id}
          module={module}
          focused={focusId === module.id}
          dimmed={Boolean(focusId) && focusId !== module.id}
          done={done}
          activeLessonId={activeLessonId}
          onSelect={onSelectModule}
          onSelectLesson={onSelectLesson}
        />
      ))}

      <OrbitControls
        ref={controls}
        enablePan={false}
        minDistance={4}
        maxDistance={70}
        maxPolarAngle={Math.PI * 0.62}
        enableDamping
      />
      <CameraRig focusId={focusId} controls={controls} shift={shift} lift={lift} />
    </Canvas>
  )
}
