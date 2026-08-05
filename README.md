# 🥷 Papa Ninja V2.8

Application de coaching sportif personnel orientée remise en forme douce et protection des lombaires.
Conçue pour iPhone, installable comme une vraie application (PWA).

---

## Programme 7 jours

| Jour | Séance | Durée |
|---|---|---|
| Lundi | Renforcement A — Circuit ×2 | ~18 min |
| Mardi | Mobilité lombaire | ~15 min |
| Mercredi | Renforcement B — Circuit ×2 | ~18 min |
| Jeudi | Récupération active | ~15 min |
| Vendredi | Full Body Ninja — Circuit ×3 | ~20 min |
| Samedi | Activité libre | 15–30 min |
| Dimanche | Repos | — |

## Progression automatique

| Phase | Semaines | Évolution | Rappels |
|---|---|---|---|
| Phase 1 | 1–4 | Programme de base | L · Me · V |
| Phase 2 | 5–8 | +1 tour par circuit | L · Ma · J · V |
| Phase 3 | 9–12 | +2 répétitions | L · Ma · Me · J · V |

---

## Fonctionnalités

- **Assistant vocal** — annonces automatiques des exercices, consignes, encouragements, mélodie de fin
- **Minuteur animé** — cercle de progression, couleur orange → rouge dans les 10 dernières secondes
- **Répétitions** — bouton +1 avec flash de confirmation, compteur par côté (Bird Dog, Dead Bug…)
- **Badge de tour** — indicateur visuel Tour X/Y pendant les circuits
- **Écran GO** — l'audio s'initialise avant le démarrage, aucun timer ne part avant le tap
- **Historique & Calendrier** — suivi des séances, taux de réussite, streaks
- **Tableau de bord** — score Ninja, assiduité, progression par semaine
- **Badges** — récompenses de progression
- **Guide PDF** — accès intégré au guide Papa Ninja 2026
- **Export / Import JSON** — sauvegarde et restauration des données
- **Verrouillage portrait** — l'écran ne pivote pas pendant les séances
- **Hors-ligne** — fonctionne sans connexion après la première installation

---

## Installation sur iPhone

1. Ouvrir **https://72100sj-creator.github.io/papa-ninja/** dans Safari
2. Icône de partage → **Sur l'écran d'accueil**
3. L'app s'ouvre en plein écran comme une vraie application

---

## Structure du projet

```
papa-ninja/
├── index.html          Application complète (HTML/CSS/JS autonome)
├── manifest.json       Configuration PWA
├── service-worker.js   Cache hors-ligne
├── CHANGELOG.md        Historique des versions
├── assets/
│   └── guide/
│       └── Papa-Ninja-Guide-2026.pdf
└── Icônes (icon-192.png, icon-512.png, icon-512-maskable.png…)
```

---

*Projet personnel — Seb · 2026*
