import { useState } from 'react'

const fileUrl = (kind, name) => `/local/${kind}/${encodeURIComponent(name)}`

function Quiz({ quiz }) {
  const [choice, setChoice] = useState(null)
  const answered = choice !== null

  return (
    <section className="block">
      <h3>Question</h3>
      <p className="quiz-q">{quiz.q}</p>
      <div className="quiz-options">
        {quiz.options.map((option, i) => {
          let state = ''
          if (answered && i === quiz.answer) state = 'right'
          else if (answered && i === choice) state = 'wrong'
          return (
            <button key={option} className={`quiz-option ${state}`} disabled={answered} onClick={() => setChoice(i)}>
              {option}
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={choice === quiz.answer ? 'feedback right' : 'feedback wrong'}>
          <strong>{choice === quiz.answer ? 'Correct.' : 'Pas tout à fait.'}</strong> {quiz.why}{' '}
          {choice !== quiz.answer && (
            <button className="retry" onClick={() => setChoice(null)}>
              Réessayer
            </button>
          )}
        </p>
      )}
    </section>
  )
}

function Recordings({ prefixes, available }) {
  const tracks = available.filter((name) => prefixes.some((p) => name.startsWith(p)))

  return (
    <section className="block">
      <h3>Enregistrements</h3>
      {tracks.length === 0 ? (
        <p className="muted">
          Les enregistrements se lisent en local, une fois l’archive audio extraite dans le dossier de révision.
        </p>
      ) : (
        <>
          <p className="muted">
            Écoutez une seule fois en prenant des notes, puis réécoutez pour vérifier ce que vous avez compris.
          </p>
          <ul className="tracks">
            {tracks.map((name) => (
              <li key={name}>
                <span>{name.replace(/\s*\.mp3$/i, '').replace(' audio file', ' ·')}</span>
                <audio controls preload="none" src={fileUrl('audio', name)} />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default function LessonPanel({ module, lesson, index, files, isDone, onToggleDone, onClose, onGo }) {
  const { file, chapter } = lesson.source
  const hasPdf = files.pdf.includes(file)

  return (
    <article className="lesson" aria-label={lesson.title}>
      <header className="lesson-head">
        <span className="lesson-module" style={{ color: module.color }}>
          {module.title} · {index + 1}/{module.lessons.length}
        </span>
        <button className="close" onClick={onClose} aria-label="Fermer la leçon">
          ×
        </button>
      </header>

      <h2>{lesson.title}</h2>

      <p className="source">
        Source : {chapter},{' '}
        {hasPdf ? (
          <a href={fileUrl('pdf', file)} target="_blank" rel="noreferrer">
            {file}
          </a>
        ) : (
          file
        )}
      </p>

      <section className="block">
        <h3>À retenir</h3>
        <ul className="points">
          {lesson.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      {lesson.audio && <Recordings prefixes={lesson.audio} available={files.audio} />}

      {lesson.practice && (
        <section className="block">
          <h3>À vous</h3>
          <p className="practice">{lesson.practice}</p>
        </section>
      )}

      {lesson.quiz && <Quiz quiz={lesson.quiz} />}

      <footer className="lesson-foot">
        <button className={isDone ? 'done-toggle is-done' : 'done-toggle'} onClick={onToggleDone}>
          {isDone ? '✓ Leçon terminée' : 'Marquer comme terminée'}
        </button>
        <div className="pager">
          <button disabled={index === 0} onClick={() => onGo(-1)}>
            Précédente
          </button>
          <button disabled={index === module.lessons.length - 1} onClick={() => onGo(1)}>
            Suivante
          </button>
        </div>
      </footer>
    </article>
  )
}
