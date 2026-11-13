import { useEffect, useMemo, useState } from 'react'
import { SECTIONS, buildQuestions } from './data/questions.js'
import { LEVELS, computeResult } from './scoring.js'

const STORAGE_KEY = 'speakup:last-result'
const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window

function loadLastResult() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY))
  } catch {
    return null
  }
}

function saveLastResult(result) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        level: result.level.code,
        correctCount: result.correctCount,
        questionCount: result.questionCount,
        date: new Date().toISOString(),
      }),
    )
  } catch {
    // stockage indisponible : le test fonctionne quand même
  }
}

export default function App() {
  const questions = useMemo(() => buildQuestions({ withListening: canSpeak }), [])
  const [screen, setScreen] = useState('home')
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [lastResult, setLastResult] = useState(loadLastResult)

  const start = () => {
    setAnswers({})
    setIndex(0)
    setScreen('test')
  }

  const finish = () => {
    const result = computeResult(questions, answers)
    saveLastResult(result)
    setLastResult(loadLastResult())
    setScreen('result')
  }

  return (
    <div className="app">
      <header className="topbar">
        <span className="brand">
          <img src="./favicon.svg" alt="" width="28" height="28" />
          SpeakUp
        </span>
        {screen === 'test' && (
          <button className="link" onClick={() => setScreen('home')}>
            Quitter
          </button>
        )}
      </header>

      <main className="card">
        {screen === 'home' && <Home questions={questions} lastResult={lastResult} onStart={start} />}
        {screen === 'test' && (
          <Test
            questions={questions}
            index={index}
            answers={answers}
            onAnswer={(id, choice) => setAnswers((a) => ({ ...a, [id]: choice }))}
            onMove={setIndex}
            onFinish={finish}
          />
        )}
        {screen === 'result' && <Result questions={questions} answers={answers} onRestart={start} />}
      </main>

      <footer className="footer">
        Résultat indicatif — il ne remplace pas un test officiel (IELTS, TOEFL, Cambridge).
      </footer>
    </div>
  )
}

function Home({ questions, lastResult, onStart }) {
  const sections = SECTIONS.filter((s) => questions.some((q) => q.sectionId === s.id))
  const minutes = Math.round(questions.length * 0.5)

  return (
    <>
      <h1>Quel est votre niveau d’anglais ?</h1>
      <p className="lead">
        {questions.length} questions, environ {minutes} minutes. À la fin, vous obtenez votre niveau CECRL (A1 à C2),
        une estimation IELTS et le détail de vos réponses.
      </p>

      <ul className="sections">
        {sections.map((s) => (
          <li key={s.id}>
            <strong>{s.title}</strong>
            <span>{s.questions.length} questions</span>
          </li>
        ))}
      </ul>

      {!canSpeak && (
        <p className="notice">
          Votre navigateur ne prend pas en charge la synthèse vocale : la partie compréhension orale est désactivée.
        </p>
      )}

      <ul className="tips">
        <li>Répondez sans dictionnaire ni traducteur.</li>
        <li>Si vous ne savez pas, passez la question plutôt que de deviner.</li>
        <li>Vous pouvez revenir en arrière avant de terminer.</li>
      </ul>

      <button className="primary" onClick={onStart}>
        Commencer le test
      </button>

      {lastResult && (
        <p className="last">
          Dernier résultat : <strong>{lastResult.level}</strong> ({lastResult.correctCount}/{lastResult.questionCount}) le{' '}
          {new Date(lastResult.date).toLocaleDateString('fr-FR')}
        </p>
      )}
    </>
  )
}

function Test({ questions, index, answers, onAnswer, onMove, onFinish }) {
  const question = questions[index]
  const selected = answers[question.id]
  const isLast = index === questions.length - 1
  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div className="progress-fill" style={{ transform: `scaleX(${(index + 1) / questions.length})` }} />
      </div>
      <p className="meta">
        <span>{question.sectionTitle}</span>
        <span>
          Question {index + 1} / {questions.length}
        </span>
      </p>
      <p className="hint">{question.hint}</p>

      {question.passage && <blockquote className="passage">{question.passage}</blockquote>}
      {question.audio && <AudioPlayer key={question.audio} text={question.audio} />}

      <h2 className="prompt">{question.prompt}</h2>

      <div className="options" role="radiogroup" aria-label="Réponses">
        {question.options.map((option, i) => (
          <button
            key={option}
            role="radio"
            aria-checked={selected === i}
            className={selected === i ? 'option selected' : 'option'}
            onClick={() => onAnswer(question.id, i)}
          >
            <span className="letter">{'ABCD'[i]}</span>
            {option}
          </button>
        ))}
      </div>

      <div className="nav">
        <button className="secondary" disabled={index === 0} onClick={() => onMove(index - 1)}>
          Précédent
        </button>
        {isLast ? (
          <button className="primary" onClick={onFinish}>
            Terminer ({answeredCount}/{questions.length} répondues)
          </button>
        ) : (
          <button className="primary" onClick={() => onMove(index + 1)}>
            {selected === undefined ? 'Passer' : 'Suivant'}
          </button>
        )}
      </div>
    </>
  )
}

function AudioPlayer({ text }) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => () => window.speechSynthesis.cancel(), [])

  const toggle = () => {
    const synth = window.speechSynthesis
    if (playing) {
      synth.cancel()
      setPlaying(false)
      return
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-GB'
    utterance.rate = 0.92
    const voice = synth.getVoices().find((v) => v.lang.startsWith('en'))
    if (voice) utterance.voice = voice
    utterance.onend = () => setPlaying(false)
    utterance.onerror = () => setPlaying(false)
    synth.cancel()
    synth.speak(utterance)
    setPlaying(true)
  }

  return (
    <button className="audio" onClick={toggle}>
      <span aria-hidden="true">{playing ? '■' : '▶'}</span>
      {playing ? 'Arrêter' : 'Écouter l’enregistrement'}
    </button>
  )
}

function Result({ questions, answers, onRestart }) {
  const result = useMemo(() => computeResult(questions, answers), [questions, answers])
  const [showReview, setShowReview] = useState(false)
  const { level } = result

  return (
    <>
      <p className="meta">
        <span>Votre résultat</span>
        <span>
          {result.correctCount} / {result.questionCount} bonnes réponses
        </span>
      </p>

      <div className="level">
        <span className="level-code">{level.code}</span>
        <div>
          <h1>{level.name}</h1>
          <p>Équivalent IELTS estimé : {level.ielts}</p>
        </div>
      </div>

      <ol className="scale" aria-label="Échelle CECRL">
        {LEVELS.map((l) => (
          <li key={l.code} className={l.code === level.code ? 'current' : ''}>
            {l.code}
          </li>
        ))}
      </ol>

      <p className="lead">{level.description}</p>

      <h2 className="subtitle">Par compétence</h2>
      <ul className="bars">
        {result.sections.map((s) => (
          <li key={s.id}>
            <span>{s.title}</span>
            <div className="bar" aria-hidden="true">
              <div className="bar-fill" style={{ width: `${(s.correct / s.count) * 100}%` }} />
            </div>
            <span className="bar-value">
              {s.correct}/{s.count}
            </span>
          </li>
        ))}
      </ul>

      <div className="nav">
        <button className="secondary" onClick={() => setShowReview((v) => !v)}>
          {showReview ? 'Masquer la correction' : 'Voir la correction'}
        </button>
        <button className="primary" onClick={onRestart}>
          Refaire le test
        </button>
      </div>

      {showReview && (
        <ol className="review">
          {questions.map((q) => {
            const given = answers[q.id]
            const correct = given === q.answer
            return (
              <li key={q.id} className={correct ? 'ok' : 'ko'}>
                <p className="review-head">
                  <span className="tag">{q.level}</span>
                  <span className="tag muted">{q.sectionTitle}</span>
                  <span className="verdict">{correct ? 'Correct' : given === undefined ? 'Sans réponse' : 'Incorrect'}</span>
                </p>
                {q.audio && <p className="transcript">« {q.audio} »</p>}
                <p className="review-prompt">{q.prompt}</p>
                {!correct && given !== undefined && (
                  <p className="yours">Votre réponse : {q.options[given]}</p>
                )}
                <p className="right">Bonne réponse : {q.options[q.answer]}</p>
              </li>
            )
          })}
        </ol>
      )}
    </>
  )
}
