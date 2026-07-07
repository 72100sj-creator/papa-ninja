## V2.7 — Juin 2026
- ✅ Rubrique Guide : accès au PDF Papa Ninja 2026 depuis l'accueil et la navigation
- ✅ Comportement élégant si le PDF est absent (message + bouton Retour)
- ✅ PDF mis en cache automatiquement par le Service Worker à la première ouverture
- ✅ Vérification de présence via fetch HEAD (fonctionne aussi hors connexion)
- ✅ Service Worker mis à jour (cache papa-ninja-v2.7)

## V2.6 — Juin 2026
- ✅ Écran intermédiaire "Audio prêt / GO" avant le premier exercice
- ✅ Aucun timer ni annonce ne démarre avant l'appui sur GO
- ✅ Résout le risque de première annonce perdue pendant l'initialisation audio
- ✅ Service Worker mis à jour (cache papa-ninja-v2.6)

## V2.5 — Juin 2026
- ✅ Retour à la base V2.2 stable (audio simplifié, fiable, sans expérimentations)
- ✅ Mises à jour automatiques (SW update banner, SKIP_WAITING)
- ✅ Wake Lock (écran allumé pendant la séance)
- ✅ Service Worker network-first HTML, cache papa-ninja-v2.5
- ✅ Version V2.5 affichée en pied de page
- ✅ Modal Nouveautés affiché à chaque mise à jour

## V2.5 — Juin 2026
- ✅ Version stable consolidée — base V2.2 (auto-updates, Wake Lock, version display)
- ✅ Audio simplifié : retrait de tous les correctifs expérimentaux (warmup, timeout, logs, attente voix)
- ✅ speak() conserve uniquement le verrou fired (prévention double callback iOS)
- ✅ Aucun changement fonctionnel — programme, progression, historique, stats intacts
- ✅ Service Worker mis à jour (cache papa-ninja-v2.5)

## V2.4 — Juin 2026
- ✅ Correctif démarrage audio : pré-chauffe du moteur TTS iOS (AVSpeechSynthesizer) + délai 750 ms
- ✅ Première annonce vocale de séance toujours jouée en entier
- ✅ speechSynthesis.cancel() au démarrage pour vider toute file résiduelle
- ✅ Voix sélectionnée dès l'unlock pour éviter le délai async de getVoices()
- ✅ Service Worker mis à jour (cache papa-ninja-v2.4)

# Papa Ninja 🥷 — Journal des versions

## V2.3 — Juin 2026
- ✅ Audio stabilisé : suppression du correctif Bluetooth expérimental (interrompait Apple Music)
- ℹ️  Bluetooth PWA standalone iOS : limitation Apple non contournable en JavaScript
- ✅ Bluetooth fonctionne normalement en mode Safari
- ✅ Service Worker mis à jour (cache papa-ninja-v2.3)

## V2.2 — Juin 2026
- ✅ Gestion automatique des mises à jour (détection, bannière, installation sans manipulation)
- ✅ Amélioration Bluetooth : keepalive audio pour maintenir la session active durant toute la séance
- ✅ Wake Lock : écran maintenu allumé pendant l'entraînement
- ✅ Service Worker revu : network-first pour index.html, suppression automatique des anciens caches
- ✅ Affichage de la version (V2.2) en bas du tableau de bord
- ✅ Écran "Nouveautés" affiché automatiquement à chaque mise à jour
- ✅ Optimisation de la compatibilité iPhone Safari / PWA / Android Chrome

## V2.1 — Juin 2026
- ✅ Programme 7 jours : Renforcement A/B, Mobilité, Récupération, Full Body Ninja
- ✅ Sélecteur de jours dans l'écran Séance
- ✅ Suivi effort (1–10) et douleur lombaire (0–10) après chaque séance
- ✅ Rapport hebdomadaire avec alertes douleur
- ✅ Progression automatique en 3 phases (semaines 1–4, 5–8, 9–12)
- ✅ Voix féminine prioritaire, paramètres vitesse/tonalité
- ✅ Bouton Apple Music intégré dans l'écran Séance

## V2.0 — Mai 2026
- ✅ PWA complète avec manifest.json et service worker
- ✅ Icônes personnalisées (ninja sur fond vert)
- ✅ Programme 10 exercices avec minuteur et compteur de répétitions
- ✅ Assistant vocal (Web Speech API)
- ✅ Tableau de bord : score Ninja, badges, graphiques
- ✅ Calendrier mensuel et historique des séances
- ✅ Notifications de rappel configurables
- ✅ Données 100 % locales, aucun compte requis

## V1.0 — Avril 2026
- ✅ Version MVP HTML autonome
- ✅ 10 exercices guidés par la voix
- ✅ Timer et compteur de répétitions
- ✅ Rapport de séance automatique
