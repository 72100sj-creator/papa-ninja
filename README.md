# 🥷 Papa Ninja V3.4

Application de coaching sportif personnel orientée remise en forme douce et protection des lombaires.
Conçue pour iPhone, installable comme une vraie application (PWA).

---

## Programme 7 jours

| Jour | Séance | Durée |
|---|---|---|
| Lundi | Renforcement A — Circuit | ~18 min |
| Mardi | Mobilité lombaire | ~15 min |
| Mercredi | Renforcement B — Circuit | ~18 min |
| Jeudi | Récupération active | ~15 min |
| Vendredi | Full Body Ninja — Circuit | ~20 min |
| Samedi | Activité libre | 15–30 min |
| Dimanche | Repos | — |

## Progression automatique

| Phase | Semaines | Évolution | Rappels |
|---|---|---|---|
| Phase 1 | 1–4 | Circuit ×2, programme de base | Lundi · Mercredi · Vendredi |
| Phase 2 | 5–8 | Circuit ×3 (+1 tour) | + Mardi · Jeudi |
| Phase 3 | 9–12 | Circuit ×3, +2 répétitions | + Mercredi (5 jours) |

Les jours de rappel s'ajustent automatiquement au changement de phase.

---

## Fonctionnalités

### Pendant la séance
- **Assistant vocal** — annonces des exercices, consignes, décomptes, mélodie de fin. Désactivable dans Profil.
- **Écran GO** — l'audio s'initialise avant le démarrage, aucun minuteur ne part avant le tap.
- **❔ Fiche** — consulte la fiche de l'exercice en cours sans interrompre le minuteur.
- **🔁 Répéter** — réénonce la consigne à la demande.
- **Minuteur animé** — cercle de progression, vert → orange → rouge dans les 10 dernières secondes.
- **Répétitions** — grand bouton +1 avec flash de confirmation, compteur par côté.
- **Badge de tour** — indicateur Tour X/Y avec points de progression pendant les circuits.
- **Écran maintenu allumé** pendant tout l'entraînement (Wake Lock).
- **Verrouillage portrait** — l'écran ne pivote pas en paysage.

### Guide
- **14 fiches intégrées** dans l'app — illustration, muscles ciblés, respiration, déroulé, erreurs fréquentes, variante lombaires sensibles, dose réelle par phase.
- **Guide PDF 25 pages** — règles d'or, plan sur 12 semaines, récupération, citations. Partagé via la feuille de partage iOS.

### Suivi
- **Tableau de bord** — score Ninja, assiduité, séries, progression par semaine.
- **Calendrier & Historique** — séances cochées, taux de réussite, rapport hebdomadaire.
- **Effort et douleur** — notés après chaque séance (1–10 et 0–10), avec alerte si la douleur monte.
- **Badges** de progression (9 à débloquer).

### Rappels
- **Fichier calendrier (.ics)** — un événement hebdomadaire récurrent par jour de séance, avec alerte, ouvert via la feuille de partage iOS. La récurrence s'arrête à la fin de la phase en cours.

### Technique
- **Export / Import JSON** — sauvegarde et restauration complètes des données.
- **Mises à jour automatiques** — bannière dès qu'une nouvelle version est en ligne.
- **Hors-ligne** — fonctionne sans connexion après la première visite.
- **Données 100 % locales** — aucun compte, rien n'est envoyé sur internet.

---

## Installation sur iPhone

1. Ouvrir **https://72100sj-creator.github.io/papa-ninja/** dans Safari
2. Icône de partage → **Sur l'écran d'accueil**
3. L'app s'ouvre en plein écran comme une vraie application

---

## Structure du projet

```
papa-ninja/
├── index.html                Application complète (HTML/CSS/JS autonome)
├── manifest.json              Configuration PWA
├── service-worker.js          Cache hors-ligne
├── CHANGELOG.md                Historique des versions
├── README.md                   Ce fichier
├── assets/
│   ├── guide/
│   │   └── Papa-Ninja-Guide-2026.pdf     Guide 25 pages
│   └── exercices/
│       └── ex-01…ex-14.jpg               14 illustrations des fiches
├── icon-192.png
├── icon-512.png
├── icon-512-maskable.png
├── apple-touch-icon-v2.png
└── favicon.png
```

---

## Crédits

Illustrations des exercices générées avec Google Gemini.
Conception et développement réalisés avec Claude (Anthropic).

*Projet personnel · 2026*
