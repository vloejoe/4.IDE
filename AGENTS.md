# AGENTS.md — charte de code de `4.IDE`

Ce fichier est lu par l'IA (et par moi) avant toute modification. Il décrit la façon dont ce dépôt est écrit.

## Statut
Exercice d'apprentissage, **entretien minimal** : on garde le projet en ligne et à jour, on ne le transforme pas.

## Structure
- `src/store.js` : le store Redux.
- `src/features/` : un fichier par « slice » (`tabs.js`, `preview.js`).
- `src/components/` : un composant par fichier.
Un fichier, un rôle.

## Écriture du code
- Nouveau code : noms de variables, de fonctions et de composants en anglais.
- Commentaires en français, qui expliquent le *pourquoi* plutôt que le *quoi*.
- Ne pas réécrire l'exercice : on corrige ou on étend, on ne remplace pas la logique d'origine.

## Git
- Une idée = une branche = une pull request. Jamais de commit direct sur `main`.
- Commits courts, une notion par commit, préfixés d'un gitmoji.
- Tout commit écrit avec l'IA porte la mention `Co-Authored-By`.

## Qualité
- `npm run build` doit passer avant toute pull request.
- `npm run lint` ne fonctionne pas encore (pas de configuration ESLint) : à ajouter dans une issue dédiée.

## Dépendances
- Mises à jour compatibles (`npm update`) : autorisées, avec build vérifié.
- Changement de version majeure (React, Vite, Tailwind, Redux...) : seulement sur une issue dédiée.

## Secrets
- Aucun fichier `.env` versionné. Si une clé devient nécessaire : un `.env.example` sans valeur.

## Sécurité
L'aperçu exécute le code saisi dans un `iframe` avec l'attribut `sandbox="allow-scripts"`. Ne pas l'élargir (par exemple `allow-same-origin`) sans issue dédiée.
