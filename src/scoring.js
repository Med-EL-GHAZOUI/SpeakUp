// Une question vaut d'autant plus de points que son niveau est élevé.
const WEIGHT = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 }

// Seuils sur le score pondéré (0–1) -> niveau CECRL.
export const LEVELS = [
  {
    code: 'A1',
    min: 0,
    name: 'Débutant',
    ielts: '1.0 – 2.5',
    description:
      'Vous comprenez des mots et des phrases très simples. Priorité : le vocabulaire de base, le présent simple et les phrases courtes du quotidien.',
  },
  {
    code: 'A2',
    min: 0.15,
    name: 'Élémentaire',
    ielts: '3.0 – 3.5',
    description:
      'Vous vous débrouillez dans des situations simples et familières. Priorité : les temps du passé, les comparatifs et l’écoute de dialogues courts.',
  },
  {
    code: 'B1',
    min: 0.32,
    name: 'Intermédiaire',
    ielts: '4.0 – 5.0',
    description:
      'Vous comprenez l’essentiel sur des sujets familiers. Priorité : les conditionnels, le present perfect, les verbes à particule et la lecture d’articles.',
  },
  {
    code: 'B2',
    min: 0.52,
    name: 'Intermédiaire avancé',
    ielts: '5.5 – 6.5',
    description:
      'Vous suivez une argumentation et vous vous exprimez avec aisance. Priorité : les structures complexes, le vocabulaire académique et les textes argumentatifs.',
  },
  {
    code: 'C1',
    min: 0.72,
    name: 'Avancé',
    ielts: '7.0 – 8.0',
    description:
      'Vous comprenez des textes longs et exigeants. Priorité : les nuances, l’inversion, les collocations et la précision du vocabulaire.',
  },
  {
    code: 'C2',
    min: 0.9,
    name: 'Maîtrise',
    ielts: '8.5 – 9.0',
    description:
      'Vous comprenez pratiquement tout sans effort. Il vous reste à entretenir ce niveau et à affiner le style.',
  },
]

export function computeResult(questions, answers) {
  let earned = 0
  let total = 0
  let correctCount = 0
  const sections = new Map()

  for (const q of questions) {
    const weight = WEIGHT[q.level]
    const correct = answers[q.id] === q.answer
    total += weight
    if (correct) {
      earned += weight
      correctCount += 1
    }
    const s = sections.get(q.sectionId) ?? { id: q.sectionId, title: q.sectionTitle, correct: 0, count: 0 }
    s.count += 1
    if (correct) s.correct += 1
    sections.set(q.sectionId, s)
  }

  const ratio = total === 0 ? 0 : earned / total
  const level = [...LEVELS].reverse().find((l) => ratio >= l.min)

  return {
    ratio,
    level,
    correctCount,
    questionCount: questions.length,
    sections: [...sections.values()],
  }
}
