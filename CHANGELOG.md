# Papa Ninja 🥷 — Journal des versions

## V3.4 — Août 2026
- Fichier calendrier et guide PDF partagés via la feuille de partage iOS (`navigator.share`) plutôt que téléchargés
- En PWA installée, il n'y a aucune barre Safari donc aucun indicateur de téléchargement visible : le fichier partait dans Fichiers sans que rien ne le signale
- Repli automatique sur le téléchargement classique si le partage de fichiers n'est pas disponible, avec le chemin exact indiqué

## V3.3 — Août 2026
- Notifications web retirées : elles ne se déclenchaient que si l'app était déjà ouverte, ce qui était trompeur
- Bouton **📅 Ajouter à mon calendrier** : génère un fichier `.ics` avec un événement hebdomadaire récurrent par jour de séance
- Récurrence bornée à la fin de la phase en cours — pas de rappel obsolète après un changement de phase
- Identifiants d'événements stables par jour : régénérer le fichier met à jour les événements existants plutôt que d'en créer des doublons
- Repli des lignes conforme à la norme iCalendar (75 octets)

## V3.2 — Août 2026
- Nouvelle icône (ninja aux haltères), graduée dans les couleurs de l'app
- Icône Apple renommée `apple-touch-icon-v2.png` — iOS mémorise l'icône par nom de fichier, pas par son contenu
- Le guide PDF se télécharge au lieu d'ouvrir Safari, qui ne permettait aucun retour à l'app en PWA iOS
- Annonce vocale « Change de côté » à mi-parcours des Étirements des hanches
- Version du guide PDF corrigée, rubrique Mobilité quotidienne remplacée par une présentation de Morning Ninja

## V3.1 — Août 2026
- 4 fiches ajoutées : Étirements du dos et des hanches, Montées de genoux, Cercles d'épaules, Bascule du bassin
- 14 fiches au total, dans l'app et dans le guide PDF (25 pages)
- Toutes les illustrations recadrées pour que la posture remplisse le cadre
- Images à deux vignettes désormais empilées verticalement plutôt que côte à côte

## V3.0 — Juillet 2026
- Bouton **❔ Fiche** pendant la séance : consulte la fiche de l'exercice en cours sans interrompre le minuteur
- 12 exercices reconnus, variantes incluses
- Bouton masqué automatiquement sur les échauffements, marches et temps de repos

## V2.9 — Juillet 2026
- Écran Guide natif intégré à l'app : liste des exercices avec vignettes, fiche complète en un tap
- Illustrations dédiées, stockées localement pour le fonctionnement hors-ligne
- Le PDF complet reste accessible depuis l'écran Guide

## V2.8 — Juillet 2026
Version charnière : correctifs audio majeurs, archivée comme base stable et testée en conditions réelles.
- Correctif du bug de boucle vocale (verrou empêchant un double déclenchement de `speechSynthesis` sur iOS)
- Délai de sécurité après chaque annulation d'annonce, avant la suivante
- Sécurité supplémentaire sur le démarrage des minuteurs
- Voix désactivable dans Profil
- Mélodie de fin de séance (générée, aucun fichier son)
- Bouton Répéter l'annonce
- Minuteur qui change de couleur en fin de compte à rebours
- Badge « Tour X/Y » pendant les circuits
- Confirmation visuelle sur le bouton +1 répétition
- Transition douce entre les exercices
- Écran verrouillé en portrait
- Écran maintenu allumé pendant la séance
- Écran de confirmation audio avant le démarrage
- Mises à jour automatiques avec bannière et fenêtre Nouveautés
- Export et import des données (sauvegarde JSON)

## V2.2 – V2.7 — Juin – Juillet 2026
- Mise en place du système de mise à jour automatique de l'application
- Plusieurs itérations sur l'initialisation audio au premier lancement
- Tentative d'amélioration du son en Bluetooth sur iPhone, finalement abandonnée : c'est une limite du système iOS, pas un problème réparable dans l'application
- Retour à un système audio simple et stable

## V2.1 — Juin 2026
- Programme complet sur 7 jours : Renforcement A, Mobilité lombaire, Renforcement B, Récupération active, Full Body Ninja
- Sélecteur de jour dans l'écran Séance
- Suivi de l'effort et de la douleur lombaire après chaque séance
- Rapport hebdomadaire
- Progression automatique en 3 phases sur 12 semaines
- Réglages de voix (vitesse, tonalité, choix parmi les voix du téléphone)
- Bouton Apple Music intégré à l'écran Séance

## V2.0 — Mai 2026
- Passage en application installable (PWA) : icônes, fonctionnement hors-ligne
- Programme de 10 exercices avec minuteur et compteur de répétitions
- Assistant vocal
- Tableau de bord : score Ninja, badges, graphiques de progression
- Calendrier mensuel et historique des séances
- Rappels configurables
- Données 100 % locales, aucun compte requis

## V1.0 — Avril 2026
- Première version : un seul fichier, simple et autonome
- 10 exercices guidés par la voix
- Minuteur et compteur de répétitions
- Rapport de séance automatique

---

*Papa Ninja est un projet personnel, développé progressivement avec l'aide de Claude (Anthropic).*
