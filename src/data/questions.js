// Banque de questions du test de niveau.
// Chaque question : niveau CECRL visé, énoncé, 4 options, index de la bonne réponse.

const READING_1 = `Last year, Maria moved from Lisbon to Manchester to start a new job at a design company. At first she found it hard: the weather was colder than she expected, and she didn't know anyone. To meet people, she joined a running club that trains every Tuesday and Saturday. Now she has several close friends and can run ten kilometres without stopping. She still misses her family, and she calls them every Sunday, but she says moving was the best decision she has ever made.`

const READING_2 = `For decades, urban planners assumed that building more roads would relieve congestion. The evidence, however, points the other way: new road capacity tends to attract additional drivers until traffic returns to its previous level, a phenomenon known as induced demand. Some cities have therefore reversed course, converting road space into cycle lanes and tram lines. Critics argue that such schemes penalise people who have no realistic alternative to driving, particularly in poorly connected suburbs. Supporters counter that the alternatives will never become realistic unless investment shifts first.`

const AUDIO_1 = `Hello, this is Tom. I'm calling about dinner on Friday. The restaurant is fully booked at seven, so I reserved a table for half past eight instead. See you there!`

const AUDIO_2 = `Attention passengers. The ten fifteen train to Edinburgh is delayed by approximately forty minutes due to a signal failure. Passengers with connecting services should speak to a member of staff at the information desk on platform two.`

const AUDIO_3 = `Although the trial results were encouraging, the researchers were careful not to overstate them. The sample was small, and the improvement, while measurable, might not persist over time. They have called for a larger study before any recommendations are made.`

export const SECTIONS = [
  {
    id: 'grammar',
    title: 'Grammaire',
    hint: 'Choisissez la réponse qui complète correctement la phrase.',
    questions: [
      { level: 'A1', prompt: 'She ___ a teacher.', options: ['are', 'is', 'am', 'be'], answer: 1 },
      { level: 'A1', prompt: 'I ___ coffee every morning.', options: ['drink', 'drinks', 'drinking', 'am drink'], answer: 0 },
      { level: 'A2', prompt: 'We ___ to Paris last summer.', options: ['go', 'have gone', 'went', 'were going to'], answer: 2 },
      { level: 'A2', prompt: 'This book is ___ than that one.', options: ['interestinger', 'most interesting', 'as interesting', 'more interesting'], answer: 3 },
      { level: 'B1', prompt: 'If it rains tomorrow, we ___ at home.', options: ['would stay', 'will stay', 'stayed', 'are staying yet'], answer: 1 },
      { level: 'B1', prompt: 'I have lived here ___ 2015.', options: ['since', 'for', 'from', 'during'], answer: 0 },
      { level: 'B2', prompt: 'If I had known about the meeting, I ___.', options: ['would come', 'will have come', 'would have come', 'had come'], answer: 2 },
      { level: 'B2', prompt: 'The report ___ by the time the manager arrived.', options: ['has finished', 'was finishing', 'had finished', 'had been finished'], answer: 3 },
      { level: 'C1', prompt: 'Not only ___ late, but he also forgot the documents.', options: ['he arrived', 'did he arrive', 'he did arrive', 'arrived he'], answer: 1 },
      { level: 'C1', prompt: "I'd rather you ___ in here.", options: ["didn't smoke", "don't smoke", 'not smoke', "wouldn't smoke"], answer: 0 },
      { level: 'C2', prompt: '___ as it may seem, the theory has never been disproved.', options: ['Strangely', 'However strange', 'Strange', 'Despite strange'], answer: 2 },
      { level: 'C2', prompt: 'Had it not been for her timely intervention, the deal ___ through.', options: ['had fallen', 'would fall', 'will have fallen', 'would have fallen'], answer: 3 },
    ],
  },
  {
    id: 'vocabulary',
    title: 'Vocabulaire',
    hint: 'Choisissez le mot ou l’expression qui convient le mieux.',
    questions: [
      { level: 'A1', prompt: "The opposite of 'hot' is ___.", options: ['big', 'cold', 'fast', 'old'], answer: 1 },
      { level: 'A2', prompt: 'I need to ___ an appointment with the dentist.', options: ['do', 'put', 'make', 'give'], answer: 2 },
      { level: 'A2', prompt: 'A person who repairs cars is a ___.', options: ['mechanic', 'chemist', 'plumber', 'clerk'], answer: 0 },
      { level: 'B1', prompt: 'The flight was ___ because of the storm.', options: ['refused', 'denied', 'avoided', 'cancelled'], answer: 3 },
      { level: 'B1', prompt: 'She ___ up smoking two years ago.', options: ['took', 'gave', 'made', 'put'], answer: 1 },
      { level: 'B2', prompt: 'The new law will have a significant ___ on small businesses.', options: ['impact', 'affect', 'outcome', 'consequence'], answer: 0 },
      { level: 'B2', prompt: "He's very ___; he never gets angry even when things go wrong.", options: ['stubborn', 'moody', 'easy-going', 'sensitive'], answer: 2 },
      { level: 'C1', prompt: 'The evidence was so ___ that the jury reached a verdict within an hour.', options: ['compulsive', 'compulsory', 'competent', 'compelling'], answer: 3 },
      { level: 'C1', prompt: 'The company had to ___ its expansion plans because of the recession.', options: ['shed', 'shelve', 'shield', 'shove'], answer: 1 },
      { level: 'C2', prompt: "His ___ remarks about the director's taste offended everyone at the table.", options: ['discerning', 'disarming', 'disparaging', 'dispassionate'], answer: 2 },
    ],
  },
  {
    id: 'reading',
    title: 'Compréhension écrite',
    hint: 'Lisez le texte, puis répondez à la question.',
    questions: [
      { level: 'A2', passage: READING_1, prompt: 'Why did Maria move to Manchester?', options: ['To study design', 'To start a new job', 'To join a running club', 'To live with her family'], answer: 1 },
      { level: 'A2', passage: READING_1, prompt: 'How often does the running club train?', options: ['Twice a week', 'Every day', 'Once a week', 'Every Sunday'], answer: 0 },
      { level: 'B1', passage: READING_1, prompt: 'What made the first months difficult for Maria?', options: ['Her job was too demanding', 'She could not speak English', 'She was lonely and the weather was cold', 'She was not fit enough to run'], answer: 2 },
      { level: 'B1', passage: READING_1, prompt: 'How does Maria feel about her decision now?', options: ['She regrets leaving Lisbon', 'She plans to move back soon', 'She is not sure it was right', 'She is glad she moved'], answer: 3 },
      { level: 'B2', passage: READING_2, prompt: 'According to the text, building more roads usually…', options: ['fails to reduce congestion in the long run', 'solves congestion permanently', 'reduces the number of drivers', 'is cheaper than building tram lines'], answer: 0 },
      { level: 'B2', passage: READING_2, prompt: "'Induced demand' refers to…", options: ['the public asking for more roads', 'drivers switching to public transport', 'the rising cost of road building', 'extra traffic created by extra road capacity'], answer: 3 },
      { level: 'C1', passage: READING_2, prompt: "What is the critics' main objection?", options: ['Cycle lanes are rarely used', 'The schemes are unfair to people who depend on cars', 'Tram lines cost too much to maintain', 'Induced demand has never been proven'], answer: 1 },
      { level: 'C1', passage: READING_2, prompt: "The supporters' reply implies that…", options: ['suburban residents should move closer to the centre', 'critics exaggerate how many people drive', 'the lack of alternatives is a result of where money has been spent', 'driving should be banned in city centres'], answer: 2 },
    ],
  },
  {
    id: 'listening',
    title: 'Compréhension orale',
    hint: 'Écoutez l’enregistrement (autant de fois que nécessaire), puis répondez.',
    questions: [
      { level: 'A1', audio: AUDIO_1, prompt: 'What day is the dinner?', options: ['Thursday', 'Saturday', 'Friday', 'Sunday'], answer: 2 },
      { level: 'A2', audio: AUDIO_1, prompt: 'What time is the table booked for?', options: ['8:30', '7:00', '7:30', '8:00'], answer: 0 },
      { level: 'B1', audio: AUDIO_2, prompt: 'Why is the train delayed?', options: ['Bad weather', 'A signal failure', 'A staff shortage', 'A late connecting service'], answer: 1 },
      { level: 'B1', audio: AUDIO_2, prompt: 'What should passengers with connecting services do?', options: ['Wait on platform two for the next train', 'Buy a new ticket', 'Take a different train to Edinburgh', 'Talk to staff at the information desk'], answer: 3 },
      { level: 'B2', audio: AUDIO_3, prompt: 'How do the researchers feel about their results?', options: ['Disappointed', 'Completely confident', 'Cautiously positive', 'Indifferent'], answer: 2 },
      { level: 'C1', audio: AUDIO_3, prompt: 'Which statement best reflects what the speaker says?', options: ['The improvement was too small to measure', 'It is unclear whether the improvement will last', 'The study will be recommended to doctors', 'A larger study has already confirmed the results'], answer: 1 },
    ],
  },
]

// Liste à plat, avec identifiant stable et rattachement à la section.
export function buildQuestions({ withListening }) {
  return SECTIONS.filter((s) => withListening || s.id !== 'listening').flatMap((section) =>
    section.questions.map((q, i) => ({
      ...q,
      id: `${section.id}-${i}`,
      sectionId: section.id,
      sectionTitle: section.title,
      hint: section.hint,
    })),
  )
}
