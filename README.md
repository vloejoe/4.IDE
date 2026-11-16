# 4.IDE — un mini éditeur de code dans le navigateur

Trois onglets (HTML, CSS, JS) où l'on écrit du code, et un aperçu en direct qu'on peut afficher ou masquer.

## Pourquoi ce projet
Quatrième exercice de la série (septembre 2023) : mon premier usage de Redux, dans un petit éditeur de code.

## Ce que j'ai appris
- Gérer un état partagé avec Redux Toolkit : deux « slices », `tabs` et `preview` (`src/features/`), réunis dans `src/store.js`.
- Lire l'état dans les composants avec `useSelector`.
- Afficher du code écrit par l'utilisateur dans un `iframe` isolé (`srcDoc` et `sandbox="allow-scripts"`) (`Preview.jsx`).
- Découper l'interface en petits composants : `Tabs`, `CodeTab`, `ButtonTab`, `PreviewButton`, `Preview`.

## Stack
React 18, Redux Toolkit, React-Redux, Vite 4 (plugin React avec SWC), Tailwind CSS 3.

## Lancer en local
```bash
npm install
npm run dev      # serveur de développement (Vite)
npm run build    # version de production dans dist/
```

## Démo
Pas de démo en ligne.

## Crédits et transparence
Projet d'apprentissage personnel.
Code d'origine : 2023, exercice personnel. Novembre 2026 : README, charte de code et mise à jour des dépendances réalisés avec Claude Code (voir l'historique Git).

## État du projet
Entretien minimal (voir `AGENTS.md`). `npm run lint` ne fonctionne pas : le dépôt n'a pas de fichier de configuration ESLint.
