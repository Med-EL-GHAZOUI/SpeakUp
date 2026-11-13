import { Component, useEffect, useState } from 'react'
import { LESSON_COUNT, MODULES } from './content.js'
import { useStoredSet } from './useStoredSet.js'
import Scene from './Scene.jsx'
import LessonPanel from './LessonPanel.jsx'

// PDF et enregistrements servis par le serveur de développement ; absents une fois le site publié.
function useLocalFiles() {
  const [files, setFiles] = useState({ pdf: [], audio: [] })
  useEffect(() => {
    let cancelled = false
    fetch('/local/index.json')
      .then((r) => (r.ok && r.headers.get('content-type')?.includes('json') ? r.json() : null))
      .then((data) => {
        if (data && !cancelled) setFiles(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])
  return files
}

// Décalage horizontal (px) du centre de la scène : moitié de la différence entre
// la largeur occupée à gauche (liste) et à droite (leçon). Nul sur petit écran.
function sceneShift(lessonOpen) {
  const width = window.innerWidth
  if (width <= 760) return 0
  if (!lessonOpen) return 143
  // Entre 760 et 1100 px, la liste se masque quand une leçon est ouverte.
  return width < 1100 ? -218 : -75
}

// Sur petit écran, la liste occupe le bas : la scène remonte d'autant (px).
function sceneLift() {
  return window.innerWidth <= 760 ? Math.round(window.innerHeight * 0.17) : 0
}

class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (this.state.failed) {
      return <p className="scene-fallback">La vue 3D n’a pas pu démarrer sur cet appareil. Utilisez la liste des modules.</p>
    }
    return this.props.children
  }
}

export default function StudySpace({ startModule }) {
  const [done, toggleDone] = useStoredSet('speakup:lessons-done')
  const [focusId, setFocusId] = useState(startModule ?? null)
  const [lessonId, setLessonId] = useState(null)
  const files = useLocalFiles()

  const module = MODULES.find((m) => m.id === focusId)
  const lessonIndex = module ? module.lessons.findIndex((l) => l.id === lessonId) : -1
  const lesson = lessonIndex >= 0 ? module.lessons[lessonIndex] : null

  const selectModule = (id) => {
    setFocusId(id)
    setLessonId(null)
  }

  return (
    <div className={lesson ? 'study lesson-open' : 'study'}>
      <div className="study-canvas">
        <SceneBoundary>
          <Scene
            focusId={focusId}
            activeLessonId={lessonId}
            done={done}
            shift={sceneShift(Boolean(lesson))}
            lift={sceneLift()}
            onSelectModule={selectModule}
            onSelectLesson={setLessonId}
          />
        </SceneBoundary>
      </div>

      <aside className="study-nav" aria-label="Modules">
        <div className="overall">
          <span>Progression</span>
          <strong>
            {done.size} / {LESSON_COUNT} leçons
          </strong>
          <div className="bar" aria-hidden="true">
            <div className="bar-fill" style={{ width: `${(done.size / LESSON_COUNT) * 100}%` }} />
          </div>
        </div>

        {!module && (
          <ul className="nav-list">
            {MODULES.map((m) => (
              <li key={m.id}>
                <button onClick={() => selectModule(m.id)}>
                  <span className="dot" style={{ background: m.color }} />
                  <span className="nav-text">
                    <strong>{m.title}</strong>
                    <small>{m.subtitle}</small>
                  </span>
                  <span className="count">
                    {m.lessons.filter((l) => done.has(l.id)).length}/{m.lessons.length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {module && (
          <>
            <button className="back" onClick={() => selectModule(null)}>
              ← Tous les modules
            </button>
            <h2 className="nav-title">
              <span className="dot" style={{ background: module.color }} />
              {module.title}
            </h2>
            <ol className="nav-list">
              {module.lessons.map((l, i) => (
                <li key={l.id}>
                  <button className={l.id === lessonId ? 'current' : ''} onClick={() => setLessonId(l.id)}>
                    <span className="num">{i + 1}</span>
                    <span className="nav-text">{l.title}</span>
                    {done.has(l.id) && (
                      <span className="check" aria-label="terminée">
                        ✓
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ol>
          </>
        )}
      </aside>

      {lesson ? (
        <LessonPanel
          key={lesson.id}
          module={module}
          lesson={lesson}
          index={lessonIndex}
          files={files}
          isDone={done.has(lesson.id)}
          onToggleDone={() => toggleDone(lesson.id)}
          onClose={() => setLessonId(null)}
          onGo={(offset) => setLessonId(module.lessons[lessonIndex + offset].id)}
        />
      ) : (
        <p className="study-help">
          {module
            ? 'Cliquez une lune pour ouvrir la leçon'
            : 'Glissez pour tourner · molette pour zoomer · cliquez une planète'}
        </p>
      )}
    </div>
  )
}
