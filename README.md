# SpeakUp

Test de niveau d'anglais en ligne, réalisé avec React et Vite.

En une quinzaine de minutes, le test estime votre niveau CECRL (A1 à C2) et son équivalent IELTS à partir de 36 questions réparties en quatre parties :

- Grammaire (12 questions)
- Vocabulaire (10 questions)
- Compréhension écrite (8 questions)
- Compréhension orale (6 questions, lues par la synthèse vocale du navigateur)

À la fin : niveau global, score par compétence et correction détaillée. Le dernier résultat est conservé dans le navigateur.

> Le résultat est indicatif et ne remplace pas un test officiel (IELTS, TOEFL, Cambridge).

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173.

Build de production :

```bash
npm run build
```

## Structure

- `src/data/questions.js` — banque de questions (niveau, énoncé, options, bonne réponse)
- `src/scoring.js` — calcul du score pondéré et correspondance avec les niveaux
- `src/App.jsx` — écrans d'accueil, de test et de résultat
- `src/styles.css` — styles (thème clair et sombre)

## Calcul du niveau

Chaque question vaut un nombre de points selon son niveau (A1 = 1 … C2 = 6). Le pourcentage de points obtenus détermine le niveau : A2 à partir de 15 %, B1 à 32 %, B2 à 52 %, C1 à 72 %, C2 à 90 %.
