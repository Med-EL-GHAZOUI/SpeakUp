// Contenu d'étude : notes de synthèse rédigées à partir des guides IELTS du dossier de révision.
// Chaque leçon renvoie au PDF et au chapitre d'origine pour l'étude approfondie.

const LEVELS = 'IELTSforFREE-english-levels.pdf'
const GRAMMAR = 'IELTSforFREE-grammar.pdf'
const VOCAB = 'IELTSforFREE-vocabulary.pdf'
const READING = 'IELTSforFREE-reading.pdf'
const SPEAKING = 'IELTSforFREE-speaking.pdf'
const GUIDE = 'The-Complete-IELTS-Preparation-Guide.pdf'

const src = (file, chapter) => ({ file, chapter })

export const MODULES = [
  {
    id: 'levels',
    title: 'Niveaux',
    subtitle: 'Du CECRL au score IELTS',
    color: '#e2e8f0',
    lessons: [
      {
        title: 'Quel niveau pour l’IELTS ?',
        source: src(LEVELS, 'Chapitre 01'),
        points: [
          "B1 est le plancher pour qu'une préparation IELTS soit utile ; B2 correspond à peu près à 5.5–6.5 et C1 à 7.0–8.0.",
          "À plus d'une bande de l'objectif, travaillez d'abord l'anglais ; à une demi-bande, la technique d'examen rapporte le plus vite.",
          'Comptez six à huit semaines de travail régulier pour gagner une demi-bande, davantage dans les bandes hautes.',
        ],
        quiz: {
          q: 'IELTS 7.0 corresponds roughly to which CEFR level?',
          options: ['B1', 'B2', 'C1', 'C2'],
          answer: 2,
          why: 'C1 couvre environ 7.0 à 8.0. La correspondance reste approximative.',
        },
      },
      {
        title: 'A1 et A2 : les bases',
        source: src(LEVELS, 'Chapitres 02–03'),
        points: [
          'A1 : se présenter, gérer des besoins simples, comprendre un débit lent. A2 : échanges courants sur des sujets familiers.',
          'Priorités : les mots les plus fréquents, des expressions entières plutôt que des mots isolés, le présent simple puis continu.',
          "La technique d'examen est inutile à ce stade : on construit la langue, et on parle dès la première semaine.",
        ],
      },
      {
        title: 'B1 : votre point de départ',
        source: src(LEVELS, 'Chapitre 04'),
        points: [
          'B1 ≈ IELTS 4.0–5.0 : vous gérez la plupart des situations de voyage et rédigez un texte suivi sur un sujet connu.',
          "L'écart avec 7.0 est d'environ deux bandes : vocabulaire et volume de lecture passent avant les tests blancs.",
          "On est rarement au même niveau partout : la lecture devance souvent l'oral. Ciblez la compétence la plus faible.",
        ],
        quiz: {
          q: 'You are at B1 and need 7.0. What should you do first?',
          options: ['Book the test', 'Do practice tests every day', 'Work on your English', 'Memorise model answers'],
          answer: 2,
          why: 'Avec deux bandes d’écart, la technique ne suffit pas : il faut d’abord élever le niveau de langue.',
        },
      },
      {
        title: 'B2 : le palier intermédiaire',
        source: src(LEVELS, 'Chapitre 05'),
        points: [
          'B2 ≈ IELTS 5.5–6.5 : suivre un texte complexe et défendre un point de vue.',
          "C'est le niveau exigé par la plupart des universités ; un doctorat compétitif demande souvent plus.",
          "Une fois ici, apprendre les types de questions et s'entraîner en temps limité devient rentable.",
        ],
      },
      {
        title: 'C1 et C2 : le niveau visé',
        source: src(LEVELS, 'Chapitres 06–07'),
        points: [
          "C1 ≈ 7.0–8.0 : utiliser l'anglais avec souplesse dans un cadre académique et professionnel.",
          "Au-delà de 6.5, la limite n'est plus la technique mais l'étendue de la langue employée avec précision.",
          'C2 ≈ 8.5–9.0 : presque tout comprendre et nuancer finement son expression.',
        ],
      },
    ],
  },
  {
    id: 'grammar',
    title: 'Grammaire',
    subtitle: 'Précision et variété',
    color: '#60a5fa',
    lessons: [
      {
        title: 'Comment la grammaire est notée',
        source: src(GRAMMAR, 'Chapitre 01'),
        points: [
          "Le critère juge à la fois la variété et l'exactitude : des phrases simples toujours justes plafonnent la note.",
          'Les erreurs répétées pèsent le plus. La plupart des candidats refont les trois mêmes : trouvez les vôtres.',
          "Dans le doute, simplifiez la phrase ; et relisez en ne cherchant qu'un seul type d'erreur à la fois.",
        ],
        quiz: {
          q: 'Which habit improves your grammar score most efficiently?',
          options: ['Studying every rule in the book', 'Finding and fixing your three repeated errors', 'Using only short sentences', 'Avoiding punctuation'],
          answer: 1,
          why: 'Ce sont les erreurs répétées qui révèlent le niveau ; les corriger rapporte plus que réviser toute la grammaire.',
        },
      },
      {
        title: 'Les articles',
        source: src(GRAMMAR, 'Chapitre 02'),
        points: [
          "Sens général : pas d'article avec un pluriel ou un indénombrable — « Governments should invest in education ».",
          'Chose précise ou unique : « the » — « the government of Singapore », « the environment », « the best solution ».',
          'Première mention « a », reprises « the ». Le choix a / an dépend du son : « an hour », « a university ».',
        ],
        quiz: {
          q: 'Which sentence is correct as a general claim?',
          options: ['The pollution is a serious problem.', 'Pollution is a serious problem.', 'A pollution is a serious problem.', 'Pollutions are a serious problem.'],
          answer: 1,
          why: '« Pollution » est indénombrable et pris au sens général : aucun article.',
        },
      },
      {
        title: 'Dénombrables et indénombrables',
        source: src(GRAMMAR, 'Chapitre 03'),
        points: [
          'Pièges classiques, toujours au singulier et sans « a » : information, advice, research, equipment, furniture, knowledge.',
          '« many / few / fewer / number of » avec les dénombrables ; « much / little / less / amount of » avec les indénombrables.',
          'Pour compter un indénombrable, ajoutez une unité : « a piece of advice », « two items of equipment ».',
        ],
        quiz: {
          q: 'Choose the correct sentence.',
          options: ['She gave me many advices.', 'She gave me much advices.', 'She gave me a lot of advice.', 'She gave me an advice.'],
          answer: 2,
          why: '« Advice » est indénombrable : ni pluriel, ni « an ».',
        },
      },
      {
        title: 'L’ordre des adjectifs',
        source: src(GRAMMAR, 'Chapitre 04'),
        points: [
          'Ordre : opinion, taille, âge, forme, couleur, origine, matière, usage, puis le nom.',
          "L'opinion vient toujours en premier ; l'usage colle toujours au nom — « a lovely old wooden dining table ».",
          'Deux adjectifs suffisent en général. En empiler plus sonne artificiel.',
        ],
        quiz: {
          q: 'Which phrase has the adjectives in the natural order?',
          options: ['a red big car', 'a big red car', 'a car big red', 'a red car big'],
          answer: 1,
          why: 'La taille précède la couleur.',
        },
      },
      {
        title: 'Les structures de la bande 7',
        source: src(GRAMMAR, 'Chapitre 05'),
        points: [
          'Quatre outils à maîtriser : propositions relatives, conditionnels, verbes modaux et passif.',
          'Nuancez plutôt que d’affirmer : « this may lead to… », « it could be argued that… ».',
          "Apprenez une structure à la fois et n'employez jamais une structure que vous ne savez pas ponctuer.",
        ],
        quiz: {
          q: 'Which sentence hedges a claim appropriately for an academic essay?',
          options: ['Technology destroys concentration.', 'Technology always destroys concentration.', 'Technology may reduce concentration in some learners.', 'Everybody knows technology destroys concentration.'],
          answer: 2,
          why: '« may » et « some » nuancent l’affirmation, ce qu’attend un essai académique.',
        },
      },
      {
        title: 'Les erreurs fréquentes',
        source: src(GRAMMAR, 'Chapitre 06'),
        points: [
          'Accord sujet-verbe : repérez le vrai sujet — « The number of students has increased ».',
          'Forme du mot et prépositions : apprenez le verbe avec sa préposition (depend on, result in, contribute to).',
          'Gardez un temps cohérent, évitez les doubles comparatifs (« more better ») et tenez une liste de vos erreurs.',
        ],
        quiz: {
          q: 'Which sentence is correct?',
          options: ['The number of cars have increased.', 'The number of cars has increased.', 'The number of cars are increasing.', 'The number of car has increased.'],
          answer: 1,
          why: 'Le sujet est « the number » (singulier), pas « cars ».',
        },
      },
    ],
  },
  {
    id: 'vocabulary',
    title: 'Vocabulaire',
    subtitle: 'Mots précis, bonnes associations',
    color: '#34d399',
    lessons: [
      {
        title: 'Ce que mesure le vocabulaire',
        source: src(VOCAB, 'Chapitre 01'),
        points: [
          "Le critère « Lexical Resource » récompense la précision : un mot juste vaut mieux qu'un mot rare mal employé.",
          'Les collocations comptent : « make a decision », « heavy traffic », « a significant increase ».',
          "L'orthographe compte en writing, et une faute coûte le point en reading et listening.",
        ],
        quiz: {
          q: 'Which collocation is natural English?',
          options: ['do a mistake', 'make a mistake', 'take a mistake', 'have a mistake'],
          answer: 1,
          why: 'On dit « make a mistake ». Les collocations s’apprennent comme des blocs.',
        },
      },
      {
        title: 'Éducation',
        source: src(VOCAB, 'Chapitre 02'),
        points: [
          'Distinguez les niveaux : primary, secondary, tertiary / higher education ; undergraduate, postgraduate.',
          'Collocations utiles : « attend university », « sit an exam », « meet a deadline », « tuition fees ».',
          'Apprenez la famille du mot : educate, education, educational, educated.',
        ],
        quiz: {
          q: 'A student doing a master’s degree is a ___ student.',
          options: ['secondary', 'undergraduate', 'postgraduate', 'primary'],
          answer: 2,
          why: 'Après la licence (undergraduate), on est « postgraduate ».',
        },
      },
      {
        title: 'Environnement',
        source: src(VOCAB, 'Chapitre 03'),
        points: [
          '« Global warming » désigne la hausse des températures ; « climate change » couvre l’ensemble des effets.',
          'Collocations : « carbon emissions », « renewable energy », « fossil fuels », « tackle pollution ».',
          'Maîtrisez nom et verbe : pollute / pollution, conserve / conservation, emit / emissions.',
        ],
        quiz: {
          q: 'Solar and wind power are examples of ___ energy.',
          options: ['fossil', 'renewable', 'nuclear', 'carbon'],
          answer: 1,
          why: '« Renewable energy » : des sources qui se renouvellent naturellement.',
        },
      },
      {
        title: 'Santé',
        source: src(VOCAB, 'Chapitre 04'),
        points: [
          '« Illness » décrit le fait de se sentir malade ; « disease » une pathologie identifiée.',
          'Le débat type oppose « public healthcare » et « private healthcare » : préparez des arguments des deux côtés.',
          'Mode de vie : « a balanced diet », « a sedentary lifestyle », « preventive medicine », « mental health ».',
        ],
        quiz: {
          q: 'Sitting all day with little exercise is a ___ lifestyle.',
          options: ['sedentary', 'balanced', 'preventive', 'chronic'],
          answer: 0,
          why: '« Sedentary » = avec très peu d’activité physique.',
        },
      },
      {
        title: 'Villes',
        source: src(VOCAB, 'Chapitre 05'),
        points: [
          '« Urban » = en ville ; « suburban » = en périphérie résidentielle ; « rural » = à la campagne.',
          '« Cosmopolitan » décrit le mélange de cultures, pas la taille de la ville.',
          'Collocations : « public transport », « traffic congestion », « affordable housing », « urban sprawl ».',
        ],
        quiz: {
          q: 'A city with people from many countries and cultures is ___.',
          options: ['suburban', 'overcrowded', 'cosmopolitan', 'industrial'],
          answer: 2,
          why: '« Cosmopolitan » parle de la diversité des habitants.',
        },
      },
      {
        title: 'Crime et justice',
        source: src(VOCAB, 'Chapitre 06'),
        points: [
          'À l’écrit formel, préférez « offender » à « criminal ».',
          'Arrêté n’est pas condamné : arrest → charge → trial → conviction → sentence.',
          'Deux mots structurent le débat : « deterrent » (dissuasion) et « rehabilitation » (réinsertion).',
        ],
        quiz: {
          q: 'A punishment that discourages people from committing crime is a ___.',
          options: ['conviction', 'deterrent', 'charge', 'verdict'],
          answer: 1,
          why: '« Deterrent » = ce qui dissuade.',
        },
      },
      {
        title: 'Verbes à particule et expressions',
        source: src(VOCAB, 'Chapitre 07'),
        points: [
          'Ils sont naturels à l’oral (Parts 1 et 3) mais déplacés dans un essai Task 2 formel.',
          'Quelques expressions : « a ballpark figure » (estimation), « let off steam », « play devil’s advocate », « jump on the bandwagon ».',
          'Ne forcez jamais une expression : mal placée, elle coûte plus qu’elle ne rapporte.',
        ],
        quiz: {
          q: 'Where are idioms least appropriate?',
          options: ['Speaking Part 1', 'Speaking Part 3', 'A Task 2 essay', 'A chat with friends'],
          answer: 2,
          why: 'L’essai Task 2 demande un registre formel.',
        },
      },
      {
        title: 'Erreurs courantes à l’écrit',
        source: src(VOCAB, 'Chapitre 08'),
        points: [
          'Les articles avec les noms généraux restent l’erreur numéro un : retirez le « the » superflu.',
          'Surveillez les majuscules en milieu de phrase, l’accord singulier / pluriel et les apostrophes possessives.',
          'Relisez l’essai une fois par type d’erreur, pas tout en même temps.',
        ],
        quiz: {
          q: 'Which is correct?',
          options: ['the students’ results', 'the student’s’ results', 'the students results’', 'the students result’s'],
          answer: 0,
          why: 'Pluriel possessif : l’apostrophe se place après le « s ».',
        },
      },
      {
        title: 'Orthographe',
        source: src(VOCAB, 'Chapitre 09'),
        points: [
          'Doublement de la consonne finale : plan → planning, begin → beginning, occur → occurred.',
          'Le « e » final tombe devant une voyelle (make → making) et reste devant une consonne (hope → hopeful).',
          'Orthographes britannique et américaine sont acceptées, mais n’en mélangez pas deux dans la même copie.',
        ],
        quiz: {
          q: 'Which spelling is correct?',
          options: ['begining', 'beginning', 'beggining', 'beginnning'],
          answer: 1,
          why: 'Syllabe finale accentuée : on double le « n ».',
        },
      },
      {
        title: 'Méthode pour apprendre',
        source: src(VOCAB, 'Chapitre 10'),
        points: [
          'Dix mots à la fois, chacun dans une phrase à vous, avec sa famille et ses collocations.',
          'Tenez une liste continue et revenez dessus chaque semaine : un mot jamais revu est perdu.',
          'À éviter : tout traduire, apprendre des mots inutiles, mémoriser des phrases toutes faites.',
        ],
        quiz: {
          q: 'What is the most effective way to keep a new word?',
          options: ['Read it once in a list', 'Translate it and move on', 'Write it in your own sentence and revisit it weekly', 'Memorise a model essay that contains it'],
          answer: 2,
          why: 'Produire sa propre phrase et réviser à intervalles réguliers ancre le mot.',
        },
      },
    ],
  },
  {
    id: 'reading',
    title: 'Reading',
    subtitle: 'Trouver vite, répondre juste',
    color: '#a78bfa',
    lessons: [
      {
        title: 'Le format de l’épreuve',
        source: src(READING, 'Chapitre 01'),
        points: [
          '60 minutes, trois textes, 40 questions, et aucun temps supplémentaire pour reporter les réponses.',
          'Ne lisez pas tout : les réponses viennent du texte seul, jamais de vos connaissances.',
          'Avancez sans vous bloquer, puis analysez sérieusement vos erreurs après chaque entraînement.',
        ],
        quiz: {
          q: 'How much extra time do you get to transfer answers in the reading test?',
          options: ['None', '5 minutes', '10 minutes', '15 minutes'],
          answer: 0,
          why: 'Contrairement au listening papier, le reading n’offre aucun temps de report.',
        },
      },
      {
        title: 'True / False / Not Given',
        source: src(READING, 'Chapitre 02'),
        points: [
          'TRUE : le texte dit la même chose. FALSE : le texte dit le contraire. NOT GIVEN : le texte ne permet pas de trancher.',
          'Trouvez d’abord l’endroit du texte, puis demandez-vous : le texte contredit-il l’affirmation ?',
          'Surveillez les mots qui restreignent (all, some, always, only) et ignorez ce que vous savez du sujet.',
        ],
        quiz: {
          q: 'Text: “Most trainees complete the course.” Statement: “All trainees complete the course.”',
          options: ['TRUE', 'FALSE', 'NOT GIVEN', 'YES'],
          answer: 1,
          why: '« Most » implique que certains ne terminent pas : le texte contredit « all ».',
        },
      },
      {
        title: 'Yes / No / Not Given',
        source: src(READING, 'Chapitre 03'),
        points: [
          'Même logique, mais sur les opinions de l’auteur et non sur les faits.',
          'Repérez le langage d’opinion : « I believe », « it is clear that », « unfortunately ».',
          'Écrire TRUE au lieu de YES fait perdre le point : relisez la consigne deux fois.',
        ],
        quiz: {
          q: 'Yes / No / Not Given questions test…',
          options: ['facts stated in the text', 'the writer’s views or claims', 'your own opinion', 'the meaning of single words'],
          answer: 1,
          why: 'Ces questions portent sur ce que pense ou affirme l’auteur.',
        },
      },
      {
        title: 'Associer des titres',
        source: src(READING, 'Chapitre 04'),
        points: [
          'Le titre résume l’idée principale du paragraphe, pas un détail ; il est toujours reformulé.',
          'Lisez les titres d’abord, puis la première et la dernière phrase de chaque paragraphe.',
          'Résumez le paragraphe avec vos mots, rayez les titres utilisés et gardez les difficiles pour la fin.',
        ],
        quiz: {
          q: 'A heading matches a paragraph when it expresses…',
          options: ['a word that appears in it', 'its first example', 'its main idea', 'its longest sentence'],
          answer: 2,
          why: 'Un mot identique est souvent un piège : c’est l’idée principale qui compte.',
        },
      },
      {
        title: 'Skimming et scanning',
        source: src(READING, 'Chapitre 05'),
        points: [
          'Skimming : parcourir vite pour saisir le sens général. Scanning : chercher un mot précis, un nom, une date.',
          'Ordre efficace : survoler une fois, lire les questions, souligner ce qui est repérable, puis scanner.',
          'Une fois le mot trouvé, lisez attentivement les phrases autour : la réponse est là.',
        ],
        quiz: {
          q: 'You need to find the year a law was passed. You should…',
          options: ['skim the whole passage again', 'scan for numbers', 'read every paragraph carefully', 'guess from the title'],
          answer: 1,
          why: 'Une date se repère en scannant : inutile de relire.',
        },
      },
      {
        title: 'Compléter un résumé',
        source: src(READING, 'Chapitre 06'),
        points: [
          'Le résumé ne couvre qu’une partie du texte et ses blancs suivent l’ordre du passage.',
          'Lisez tout le résumé, puis prédisez la nature de chaque mot manquant (nom, verbe, adjectif).',
          'Vérifiez que la phrase est grammaticalement correcte et respectez la limite de mots.',
        ],
        quiz: {
          q: '“The project was delayed because of a lack of ___.” The missing word is probably…',
          options: ['a verb', 'an adverb', 'a noun', 'a preposition'],
          answer: 2,
          why: 'Après « a lack of », on attend un nom.',
        },
      },
      {
        title: 'Compléter des phrases',
        source: src(READING, 'Chapitre 07'),
        points: [
          'Les mots viennent du texte, dans la limite indiquée, et les phrases suivent l’ordre du passage.',
          'Soulignez le mot repérable de la phrase, prédisez le type de mot, puis scannez.',
          'Méfiez-vous des distracteurs placés juste à côté, et comptez vos mots.',
        ],
        quiz: {
          q: 'The limit is “NO MORE THAN TWO WORDS”. Which answer is acceptable?',
          options: ['the heavy rainfall', 'heavy rainfall', 'very heavy rainfall', 'heavy rainfall last year'],
          answer: 1,
          why: 'Deux mots maximum : les autres réponses dépassent la limite.',
        },
      },
      {
        title: 'Réponses courtes',
        source: src(READING, 'Chapitre 08'),
        points: [
          'Lisez d’abord la consigne : « ONE WORD », « TWO WORDS AND/OR A NUMBER »… la limite change tout.',
          'Le mot interrogatif oriente la recherche : who → une personne, when → une date, where → un lieu.',
          'Reprenez les mots exacts du texte et vérifiez l’orthographe en recopiant.',
        ],
        quiz: {
          q: 'A question starts with “When…”. You should scan for…',
          options: ['a name', 'a place', 'a date or time', 'a reason'],
          answer: 2,
          why: '« When » appelle une date ou un moment.',
        },
      },
      {
        title: 'Questions de classification',
        source: src(READING, 'Chapitre 09'),
        points: [
          'On rattache des affirmations à des catégories ; la réponse est une lettre.',
          'Une catégorie peut servir plusieurs fois ou jamais, et l’ordre ne vous aide pas.',
          'Repérez où chaque catégorie est traitée et attendez-vous à des reformulations.',
        ],
        quiz: {
          q: 'In classification questions, an option…',
          options: ['is always used exactly once', 'may be used more than once', 'must be written out in full', 'follows the order of the text'],
          answer: 1,
          why: 'Une même catégorie peut correspondre à plusieurs affirmations.',
        },
      },
      {
        title: 'La paraphrase',
        source: src(READING, 'Chapitre 10'),
        points: [
          'La question redit le texte autrement : synonymes, autre famille de mot, structure modifiée, négation inversée.',
          'Une correspondance mot pour mot est souvent un piège.',
          'Reformulez la question avant de chercher, et constituez des séries de synonymes en révisant.',
        ],
        quiz: {
          q: '“The scheme was not a success.” Which paraphrase keeps the meaning?',
          options: ['The scheme succeeded.', 'The scheme failed.', 'The scheme was successful at first.', 'The scheme was never tried.'],
          answer: 1,
          why: '« Not a success » = « failed » : une négation transformée en mot contraire.',
        },
      },
      {
        title: 'Les mots de reprise',
        source: src(READING, 'Chapitre 11'),
        points: [
          'it, they, this, these, such, the former, the latter remplacent une idée déjà citée.',
          'Cherchez toujours en arrière, parfois loin, et accordez singulier avec singulier.',
          'Remplacez le pronom par votre candidat et relisez la phrase pour vérifier le sens.',
        ],
        quiz: {
          q: '“Cats and dogs are popular pets. The latter need more exercise.” “The latter” means…',
          options: ['cats', 'dogs', 'pets in general', 'owners'],
          answer: 1,
          why: '« The latter » renvoie au second élément cité.',
        },
      },
      {
        title: 'Vocabulaire en contexte',
        source: src(READING, 'Chapitre 12'),
        points: [
          'Décidez d’abord si le mot inconnu est nécessaire pour répondre ; souvent non.',
          'Appuyez-vous sur la phrase autour, les parties du mot (préfixe, suffixe) et sa nature.',
          'Lisez deux fois les négations : « highly unlikely », « it is a misconception that… ».',
        ],
        quiz: {
          q: '“It is a misconception that sharks hunt humans.” The writer thinks sharks…',
          options: ['often hunt humans', 'do not really hunt humans', 'are misunderstood by scientists', 'hunt only at night'],
          answer: 1,
          why: '« Misconception » = idée fausse : l’auteur rejette l’affirmation.',
        },
      },
    ],
  },
  {
    id: 'listening',
    title: 'Listening',
    subtitle: 'Une seule écoute',
    color: '#22d3ee',
    lessons: [
      {
        title: 'Format et écoute active',
        source: src(GUIDE, 'Sections 01–02 · Listening'),
        points: [
          '30 minutes, quatre sections, 40 questions de difficulté croissante, et chaque enregistrement ne passe qu’une fois.',
          'Écoute active : prédire la réponse, repérer les mots-clés et les synonymes, écrire en écoutant.',
          'Assurez d’abord les sections 1 à 3 ; entraînez-vous toujours en une seule écoute.',
        ],
        quiz: {
          q: 'How many times do you hear each recording in the test?',
          options: ['Once', 'Twice', 'Three times', 'As many as you need'],
          answer: 0,
          why: 'Une seule fois : l’entraînement doit reproduire cette contrainte.',
        },
      },
      {
        title: 'Formulaires, noms et chiffres',
        source: src(GUIDE, 'Section 02 · Form completion'),
        audio: ['Personal information', 'Listening for numbers'],
        points: [
          'Avant l’écoute, prédisez le type de réponse attendu : nom, date, prix, numéro de téléphone.',
          'Les noms épelés et les chiffres sont des pièges classiques : « fifteen / fifty », « double seven ».',
          'L’orthographe doit être parfaite et la limite de mots respectée.',
        ],
      },
      {
        title: 'Choix multiples',
        source: src(GUIDE, 'Section 02 · Multiple choice'),
        audio: ['Multiple choice'],
        points: [
          'Repérez le mot-clé qui distingue chaque option des autres.',
          'L’enregistrement emploie des synonymes, et mentionne souvent toutes les options avant de trancher.',
          'Écoutez le passage entier ; si vous ratez une question, passez immédiatement à la suivante.',
        ],
        quiz: {
          q: 'In a multiple-choice question, the first option you hear mentioned is…',
          options: ['always correct', 'never correct', 'possibly a distractor', 'the one to write down at once'],
          answer: 2,
          why: 'Les options sont souvent toutes citées : la réponse peut venir à la fin.',
        },
      },
      {
        title: 'Plans et schémas à légender',
        source: src(GUIDE, 'Section 02 · Labelling a map or plan'),
        audio: ['Labelling questions'],
        points: [
          'Avant l’écoute, situez l’entrée, les points cardinaux et les repères déjà nommés sur le plan.',
          'Suivez le langage de direction : « next to », « opposite », « at the far end », « on your left ».',
          'Gardez le doigt sur le plan et avancez au rythme du locuteur.',
        ],
      },
      {
        title: 'Réponses courtes et détails',
        source: src(GUIDE, 'Section 02 · Short answer'),
        audio: ['Short answer questions', 'Listening for details'],
        points: [
          'Soulignez le mot interrogatif : il annonce le type d’information à attraper.',
          'Le locuteur se corrige souvent (« no, sorry, Tuesday ») : gardez la dernière version.',
          'Notez en abrégé pendant l’écoute, soignez l’orthographe après.',
        ],
      },
      {
        title: 'Mots repères et prédiction',
        source: src(GUIDE, 'Section 02 · Matching, signposting'),
        audio: ['Signpost words', 'Matching and classifying', 'Predicting and anticipating', 'Meaning and intonation'],
        points: [
          'Les mots repères annoncent la suite : « firstly », « however », « on the other hand », « to sum up ».',
          '« However » ou « but » signalent souvent que la réponse arrive ou qu’elle change.',
          'L’intonation porte du sens : une voix montante exprime le doute ou une question.',
        ],
        quiz: {
          q: 'Which signpost word tells you a contrast is coming?',
          options: ['firstly', 'however', 'for example', 'in addition'],
          answer: 1,
          why: '« However » introduit une opposition avec ce qui précède.',
        },
      },
      {
        title: 'Tests complets',
        source: src(GUIDE, 'Section 02 · Stratégies par type de question'),
        audio: ['Listening test 1', 'Listening test 2', 'Listening test 3', 'Test day'],
        points: [
          'Enchaînez les quatre parties d’un test sans pause ni retour en arrière.',
          'Pendant l’écoute, notez ; ensuite seulement, réécoutez pour comprendre chaque erreur.',
          'Classez vos erreurs : mot non compris, synonyme manqué, orthographe, ou inattention.',
        ],
      },
    ],
  },
  {
    id: 'speaking',
    title: 'Speaking',
    subtitle: 'Parler longtemps et clairement',
    color: '#fb7185',
    lessons: [
      {
        title: 'Le déroulement de l’oral',
        source: src(SPEAKING, 'Chapitre 01'),
        points: [
          'Trois parties avec un examinateur : entretien (4–5 min), prise de parole longue (3–4 min), discussion (4–5 min).',
          'Quatre critères de poids égal : fluidité et cohérence, vocabulaire, grammaire, prononciation.',
          'Seul votre anglais est noté : ni vos opinions, ni la véracité de ce que vous dites. Un accent ne coûte rien.',
        ],
        quiz: {
          q: 'Which of these is NOT assessed in the speaking test?',
          options: ['Pronunciation', 'Whether your answers are true', 'Vocabulary range', 'Fluency'],
          answer: 1,
          why: 'Une réponse inventée mais fluide vaut mieux qu’une réponse vraie mal exprimée.',
        },
      },
      {
        title: 'Part 1 : questions familières',
        source: src(SPEAKING, 'Chapitre 02'),
        points: [
          'Sujets du quotidien : logement, études ou travail, loisirs, nourriture, météo.',
          'Répondez directement, puis ajoutez une raison ou un exemple : deux à trois phrases suffisent.',
          'Ne récitez pas : une réponse apprise par cœur s’entend et pénalise.',
        ],
        practice: 'Do you work or are you a student? Répondez à voix haute en trois phrases : réponse, raison, exemple.',
      },
      {
        title: 'Part 2 : la cue card',
        source: src(SPEAKING, 'Chapitre 03'),
        points: [
          'Une minute de préparation, puis jusqu’à deux minutes de parole sans interruption.',
          'Notez des mots-clés, pas des phrases ; suivez les points de la carte comme un plan.',
          'Racontez une histoire avec des détails concrets, et continuez jusqu’à ce que l’examinateur vous arrête.',
        ],
        practice: 'Describe a skill you would like to learn. Préparez une minute, puis parlez deux minutes en vous chronométrant.',
      },
      {
        title: 'Part 3 : la discussion',
        source: src(SPEAKING, 'Chapitre 04'),
        points: [
          'Questions plus abstraites, liées au thème de la Part 2 : la société en général, pas votre vie.',
          'Structure utile : opinion, raison, exemple, puis nuance ou point de vue opposé.',
          'C’est la partie où la langue doit être la plus développée et la plus formelle.',
        ],
        practice: 'Why do some adults find it hard to learn new skills? Répondez avec opinion, raison, exemple et nuance.',
      },
      {
        title: 'Développer ses réponses',
        source: src(SPEAKING, 'Chapitre 05'),
        points: [
          'Pour allonger une réponse : ajoutez pourquoi, un exemple, un contraste, ou une comparaison avec le passé.',
          'Connecteurs simples et naturels : « because », « for instance », « although », « whereas ».',
          'Une réponse courte ne laisse rien à évaluer : visez l’idée complète plutôt que la phrase parfaite.',
        ],
        practice: 'Do you like reading? Développez avec un pourquoi, un exemple et une comparaison avec votre enfance.',
      },
      {
        title: 'La fluidité',
        source: src(SPEAKING, 'Chapitre 06'),
        points: [
          'La fluidité vient de la production sous pression, pas de la lecture de modèles à voix haute.',
          'Hésiter pour chercher une idée est normal ; hésiter pour chercher un mot coûte plus : paraphrasez.',
          'Enregistrez-vous, réécoutez, et refaites la même réponse une seconde fois.',
        ],
        practice: 'Parlez une minute sans vous arrêter de votre journée d’hier, enregistrez-vous et réécoutez.',
      },
      {
        title: 'Prononciation et intonation',
        source: src(SPEAKING, 'Chapitre 07'),
        points: [
          'L’objectif est d’être facile à comprendre, pas d’effacer son accent.',
          'Travaillez l’accent de mot (PHOtograph, phoTOgraphy) et l’accentuation des mots importants de la phrase.',
          'Variez l’intonation : un ton monotone fait perdre le sens et l’intérêt.',
        ],
        practice: 'Lisez à voix haute : « I didn’t say he stole the money », en accentuant un mot différent à chaque fois.',
      },
      {
        title: 'Si vous ne comprenez pas',
        source: src(SPEAKING, 'Chapitre 08'),
        points: [
          'Demander de répéter est permis : « Sorry, could you repeat that, please? »',
          'En Part 3, vous pouvez demander de reformuler ; en Part 1, l’examinateur ne peut que répéter.',
          'Gagnez du temps naturellement : « That’s an interesting question, let me think. »',
        ],
        practice: 'Entraînez-vous à dire trois phrases pour demander de répéter ou gagner du temps.',
      },
      {
        title: 'Le jour de l’oral',
        source: src(SPEAKING, 'Chapitre 09'),
        points: [
          'L’oral peut avoir lieu un autre jour que l’écrit ; il est toujours enregistré.',
          'L’examinateur vérifie d’abord votre identité : cette partie n’est pas notée.',
          'Arrivez en avance, parlez anglais avant d’entrer pour vous échauffer.',
        ],
      },
      {
        title: 'Sujets familiers',
        source: src(SPEAKING, 'Chapitres 10–13'),
        points: [
          'Quatre thèmes reviennent sans cesse : votre ville, vos loisirs, vos goûts, les fêtes et célébrations.',
          'Variez les verbes de goût : « I’m keen on », « I’m not a big fan of », « I can’t stand ».',
          'Préparez du vocabulaire et des exemples, jamais des réponses entières.',
        ],
        practice: 'Tell me about your hometown. Décrivez l’endroit, ce que vous aimez, et ce qui a changé.',
      },
      {
        title: 'Décrire des personnes et des lieux',
        source: src(SPEAKING, 'Chapitres 14–15'),
        points: [
          'Personnes : dépassez « nice » avec « easy-going », « reliable », « outgoing », « stubborn ».',
          'Lieux : « bustling », « picturesque », « run-down », « off the beaten track ».',
          'Un adjectif précis suivi d’un exemple vaut mieux qu’une liste d’adjectifs.',
        ],
        practice: 'Describe a person who has influenced you : deux adjectifs précis, chacun illustré par un exemple.',
      },
      {
        title: 'Réponses modèles',
        source: src(SPEAKING, 'Chapitre 16'),
        points: [
          'Lisez les modèles pour repérer la structure et les expressions, pas pour les apprendre par cœur.',
          'Reprenez la même question avec vos propres idées, puis comparez la longueur et l’organisation.',
          'Notez trois expressions réutilisables par modèle et placez-les dans vos réponses.',
        ],
      },
    ],
  },
  {
    id: 'writing',
    title: 'Writing',
    subtitle: 'Task 2 : l’essai',
    color: '#f97316',
    lessons: [
      {
        title: 'Analyser la question',
        source: src(GUIDE, 'Section 06 · Task 2'),
        points: [
          'Identifiez le sujet général, le point précis à traiter et la consigne (agree, discuss, causes, solutions).',
          'Répondre à côté de la question est la première cause de note basse : chaque partie doit être traitée.',
          'Prenez quelques minutes pour planifier avant d’écrire : deux idées principales suffisent.',
        ],
        quiz: {
          q: 'How long should a Task 2 essay be, at minimum?',
          options: ['150 words', '200 words', '250 words', '400 words'],
          answer: 2,
          why: 'Task 2 demande au moins 250 mots, en environ 40 minutes.',
        },
      },
      {
        title: 'La structure en quatre paragraphes',
        source: src(GUIDE, 'Section 06 · Task 2'),
        points: [
          'Introduction : reformuler la question et annoncer clairement votre réponse.',
          'Deux paragraphes de développement, une idée principale chacun.',
          'Conclusion : résumer votre position, sans idée nouvelle.',
        ],
        quiz: {
          q: 'What belongs in the conclusion?',
          options: ['A new argument', 'A summary of your position', 'A long example', 'A question to the reader'],
          answer: 1,
          why: 'La conclusion reprend la position ; elle n’ajoute rien de nouveau.',
        },
      },
      {
        title: 'Construire un paragraphe',
        source: src(GUIDE, 'Section 06 · Task 2'),
        points: [
          'Trois temps : idée principale, explication, exemple précis.',
          'Une idée bien expliquée vaut mieux que trois idées juxtaposées.',
          'Reliez les phrases avec des connecteurs variés, sans en mettre à chaque ligne.',
        ],
      },
      {
        title: 'Les types d’essai',
        source: src(GUIDE, 'Section 07 · Structures'),
        points: [
          'Cinq familles : opinion, discussion de deux points de vue, avantages et inconvénients, problème et solution, double question.',
          'Chaque type a sa structure : identifiez-le avant de planifier.',
          'Dans un essai d’opinion, annoncez votre position dès l’introduction et tenez-la jusqu’au bout.',
        ],
        quiz: {
          q: '“Discuss both views and give your own opinion.” This is…',
          options: ['a problem and solution essay', 'a discussion essay', 'an advantages and disadvantages essay', 'a two-part question'],
          answer: 1,
          why: 'Il faut présenter les deux points de vue, puis donner le sien.',
        },
      },
      {
        title: 'La relecture ciblée',
        source: src(GRAMMAR, 'Chapitre 06'),
        points: [
          'Gardez deux minutes à la fin et relisez une fois par type d’erreur : articles, accords, temps.',
          'Vérifiez que chaque phrase a un sujet et un verbe conjugué.',
          'Reportez chaque erreur corrigée dans votre liste personnelle pour la séance suivante.',
        ],
      },
    ],
  },
]

// Identifiant stable par leçon.
for (const module of MODULES) {
  module.lessons.forEach((lesson, i) => {
    lesson.id = `${module.id}-${i + 1}`
  })
}

export const LESSON_COUNT = MODULES.reduce((n, m) => n + m.lessons.length, 0)

// Plan de préparation sur douze semaines, du niveau B1 vers le niveau académique.
export const PLAN = [
  {
    id: 'p1',
    weeks: 'Semaines 1–3',
    title: 'Fondations',
    modules: ['levels', 'vocabulary', 'grammar'],
    tasks: [
      '15 à 20 mots académiques par jour',
      'Lecture de textes techniques',
      'Écoute de conférences et de contenus académiques',
      'Révision de la grammaire',
      'Petites productions écrites',
    ],
  },
  {
    id: 'p2',
    weeks: 'Semaines 4–6',
    title: 'Les quatre compétences',
    modules: ['reading', 'listening', 'speaking', 'writing'],
    tasks: [
      'Reading : compréhension et gestion du temps',
      'Listening : prise de notes',
      'Speaking : réponses chronométrées et enregistrées',
      'Writing : structure, argumentation et correction',
    ],
  },
  {
    id: 'p3',
    weeks: 'Semaines 7–9',
    title: 'Tests blancs',
    modules: ['listening', 'reading'],
    tasks: [
      'Un test blanc complet chaque semaine',
      'Analyse des erreurs',
      'Travail ciblé sur les deux compétences les plus faibles',
      'Amélioration de la vitesse',
    ],
  },
  {
    id: 'p4',
    weeks: 'Semaines 10–12',
    title: 'Conditions réelles',
    modules: ['writing', 'speaking'],
    tasks: [
      'Deux simulations complètes par semaine si possible',
      'Conditions réelles et gestion du temps',
      'Révision des erreurs récurrentes',
      'Réserver l’examen lorsque les résultats sont stables',
    ],
  },
]
