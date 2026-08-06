# 🥷 Papa Ninja V3.1

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

Les jours de rappel s'ajustent seuls au passage d'une phase à l'autre.

---

## Fonctionnalités

### Pendant la séance
- **Assistant vocal** — annonces des exercices, consignes, encouragements, mélodie de fin. Désactivable.
- **Écran GO** — l'audio s'initialise d'abord, aucun minuteur ne démarre avant le tap
- **Minuteur animé** — cercle de progression, vert → orange → rouge dans les 10 dernières secondes
- **Répétitions** — grand bouton +1 avec flash de confirmation, compteur par côté
- **Badge de tour** — indicateur Tour X/Y avec points de progression pendant les circuits
- **❔ Fiche** — consulte la fiche de l'exercice en cours sans interrompre le minuteur
- **🔁 Répéter** — réénonce la consigne à la demande
- **Écran maintenu allumé** pendant tout l'entraînement

### Guide
- **14 fiches intégrées** — illustration, muscles, dose, respiration, déroulé, erreurs, variante lombaires
- **Guide PDF 25 pages** — règles d'or, plan 12 semaines, récupération, à lire ou imprimer

### Suivi
- **Tableau de bord** — score Ninja, assiduité, séries, progression par semaine
- **Calendrier & Historique** — séances cochées, taux de réussite
- **Effort et douleur** — notés après chaque séance, avec alerte si la douleur monte
- **Bilan hebdomadaire** et **badges** de progression

### Technique
- **Export / Import JSON** — sauvegarde et restauration complètes
- **Mises à jour automatiques** — bannière dès qu'une nouvelle version est en ligne
- **Verrouillage portrait**
- **Hors-ligne** — fonctionne sans connexion après la première visite
- **Données 100 % locales** — aucun compte, rien n'est envoyé sur internet

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
│   ├── guide/
│   │   └── Papa-Ninja-Guide-2026.pdf     Guide 25 pages
│   └── exercices/
│       └── ex-01…ex-14.jpg               Illustrations des fiches
└── Icônes (icon-192.png, icon-512.png, icon-512-maskable.png…)
```

---

## Crédits

Illustrations des exercices générées avec Google Gemini.
Conception et développement réalisés avec Claude (Anthropic).

*Projet personnel · 2026*
