import { Suspense, lazy, useEffect, useState } from 'react'
import LevelTest from './LevelTest.jsx'
import PlanView from './study/PlanView.jsx'

// La scène 3D est chargée à la demande pour ne pas alourdir le test et le plan.
const StudySpace = lazy(() => import('./study/StudySpace.jsx'))

const VIEWS = [
  { id: 'study', label: 'Espace 3D' },
  { id: 'plan', label: 'Plan' },
  { id: 'test', label: 'Test de niveau' },
]

const viewFromHash = () => VIEWS.find((v) => `#${v.id}` === window.location.hash)?.id ?? 'study'

export default function App() {
  const [view, setView] = useState(viewFromHash)
  const [startModule, setStartModule] = useState(null)

  useEffect(() => {
    const onHashChange = () => setView(viewFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const go = (id, moduleId = null) => {
    setStartModule(moduleId)
    window.location.hash = id
    setView(id)
  }

  return (
    <div className={view === 'study' ? 'shell dark' : 'shell'}>
      <header className="topbar">
        <span className="brand">
          <img src="./favicon.svg" alt="" width="28" height="28" />
          SpeakUp
        </span>
        <nav className="tabs" aria-label="Sections">
          {VIEWS.map((v) => (
            <button key={v.id} className={v.id === view ? 'tab current' : 'tab'} onClick={() => go(v.id)}>
              {v.label}
            </button>
          ))}
        </nav>
      </header>

      {view === 'study' && (
        <Suspense fallback={<p className="loading">Chargement de l’espace 3D…</p>}>
          <StudySpace key={startModule ?? 'overview'} startModule={startModule} />
        </Suspense>
      )}
      {view === 'plan' && <PlanView onOpenModule={(id) => go('study', id)} />}
      {view === 'test' && <LevelTest />}
    </div>
  )
}
