import { MODULES, PLAN } from './content.js'
import { useStoredSet } from './useStoredSet.js'

const TASK_COUNT = PLAN.reduce((n, phase) => n + phase.tasks.length, 0)

export default function PlanView({ onOpenModule }) {
  const [done, toggle] = useStoredSet('speakup:plan-done')

  return (
    <div className="app">
      <main className="card">
        <h1>Plan de préparation en 12 semaines</h1>
        <p className="lead">
          Du niveau B1 vers le niveau académique, en quatre phases. {done.size} / {TASK_COUNT} tâches cochées.
        </p>

        <ol className="phases">
          {PLAN.map((phase) => (
            <li key={phase.id}>
              <p className="meta">
                <span>{phase.weeks}</span>
              </p>
              <h2 className="phase-title">{phase.title}</h2>
              <ul className="tasks">
                {phase.tasks.map((task, i) => {
                  const id = `${phase.id}-${i}`
                  return (
                    <li key={id}>
                      <label>
                        <input type="checkbox" checked={done.has(id)} onChange={() => toggle(id)} />
                        <span>{task}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
              <div className="chips">
                {phase.modules.map((id) => {
                  const module = MODULES.find((m) => m.id === id)
                  return (
                    <button key={id} className="chip" onClick={() => onOpenModule(id)}>
                      {module.title} →
                    </button>
                  )
                })}
              </div>
            </li>
          ))}
        </ol>
      </main>
      <footer className="footer">
        Frais, scores exigés et dates limites changent : vérifiez toujours la page officielle avant de vous inscrire.
      </footer>
    </div>
  )
}
