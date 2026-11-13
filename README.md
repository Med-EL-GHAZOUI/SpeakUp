# SpeakUp

Espace de préparation à l'IELTS, réalisé avec React, Vite et Three.js.

## Ce que contient le site

- **Espace 3D** — une carte en trois dimensions : sept planètes (Niveaux, Grammaire, Vocabulaire, Reading, Listening, Speaking, Writing) autour de l'objectif. Chaque planète porte ses leçons sous forme de lunes : 57 leçons au total, avec les points à retenir, une question ou un exercice oral, et le renvoi au chapitre du PDF d'origine. La progression est conservée dans le navigateur.
- **Plan** — le programme de 12 semaines en quatre phases, avec des tâches à cocher.
- **Test de niveau** — 36 questions (grammaire, vocabulaire, compréhension écrite et orale) qui estiment le niveau CECRL de A1 à C2.

> Les notes de leçon sont des synthèses ; les guides d'origine restent la référence. Le résultat du test est indicatif.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173.

## PDF et enregistrements

Les guides PDF et les enregistrements audio ne sont pas dans le dépôt. En développement, le serveur les lit dans le dossier parent du projet :

```
dossier-de-révision/
├── *.pdf                     guides
├── audio/Audio-files/*.mp3   enregistrements
└── SpeakUp/                  ce projet
```

S'ils sont présents, chaque leçon propose un lien vers son PDF et les leçons de Listening affichent leurs lecteurs audio. Sinon, le site fonctionne sans.

## Structure

- `src/study/content.js` — modules, leçons, questions et plan
- `src/study/Scene.jsx` — scène 3D (planètes, lunes, caméra, étiquettes)
- `src/study/StudySpace.jsx`, `LessonPanel.jsx`, `PlanView.jsx` — interface d'étude
- `src/LevelTest.jsx`, `src/data/questions.js`, `src/scoring.js` — test de niveau
- `vite.config.js` — configuration et accès local aux PDF et à l'audio
