# Le Tableau de Bord / Check tes lumières

**Par Jean-François Lacasse | Mayday M'Aider**

![Mayday M'Aider](./public/images/Logo%20(fond%20noir).png)

## 🎯 Vue d'ensemble / Overview

**Français:**
Outil d'auto-évaluation de santé psychologique basé sur un système de 4 zones colorées. Les utilisateurs cochent les indicateurs qui leur correspondent et découvrent leur zone principale avec des stratégies adaptées.

**English:**
Mental health self-assessment tool based on a 4-zone color system. Users check indicators that apply to them and discover their primary zone with tailored strategies.

---

## 🚀 Démarrage Rapide / Quick Start

### Installation
```bash
npm install
```

### Lancer la version Mayday M'Aider / Run Mayday Version
```bash
# Option 1: Swap HTML files
mv index.html index-original.html
mv index-mayday.html index.html
npm run dev

# Option 2: Modify vite.config.js (see below)
```

### Build for Production
```bash
npm run build
```

---

## 📊 Le Système à 4 Zones / The 4-Zone System

### 🟢 Zone Verte - En Santé / Green Zone - Healthy
**Action:** JE CONTINUE! / I CONTINUE!
- 11 indicateurs de bien-être / 11 wellness indicators
- Stratégies de maintien / Maintenance strategies

### 🟡 Zone Jaune - En Réaction / Yellow Zone - Reacting
**Action:** JE FAIS ATTENTION! / I PAY ATTENTION!
- 11 signes de réaction au stress / 11 stress reaction signs
- Stratégies d'attention / Attention strategies

### 🟠 Zone Orange - Fragilisé(e) / Orange Zone - At Risk
**Action:** J'AGIS! / I ACT!
- 11 indicateurs de fragilité / 11 vulnerability indicators
- Stratégies d'action / Action strategies

### 🔴 Zone Rouge - En État Critique / Red Zone - Critical
**Action:** JE M'ARRÊTE! / I STOP!
- 11 signes critiques (incluant idées suicidaires) / 11 critical signs (including suicidal thoughts)
- **Détection de crise automatique** / **Automatic crisis detection**
- Stratégies d'urgence / Emergency strategies

---

## ✨ Fonctionnalités / Features

### Interface Bilingue / Bilingual Interface
- ✅ Français (par défaut / default)
- ✅ English (toggle en haut à droite / top-right toggle)
- ✅ Contenu complet dans les deux langues / Complete content in both languages

### Évaluation / Assessment
- ✅ 44 indicateurs au total (11 × 4 zones) / 44 total indicators (11 × 4 zones)
- ✅ Cochez tout ce qui s'applique / Check all that apply
- ✅ Calcul automatique de la zone dominante / Automatic dominant zone calculation
- ✅ Stockage local des réponses / Local storage of responses

### Intervention de Crise / Crisis Intervention
- ✅ Détection automatique des pensées suicidaires / Automatic suicidal thoughts detection
- ✅ Écran d'alerte avec ligne de crise 24/7 / Alert screen with 24/7 crisis line
- ✅ Numéro direct: 1-866-APPELLE
- ✅ Option de continuer (non recommandée) / Continue option (not recommended)

### Résultats / Results
- ✅ Affichage de la zone dominante / Display of dominant zone
- ✅ Répartition complète par zone / Complete breakdown by zone
- ✅ Stratégies personnalisées / Personalized strategies
- ✅ Capture d'email pour rappels mensuels / Email capture for monthly reminders

### Design
- ✅ Mobile-first responsive
- ✅ Dégradé bleu thématique / Blue gradient theme
- ✅ Logo Mayday M'Aider intégré / Integrated Mayday M'Aider logo
- ✅ Animations fluides / Smooth animations
- ✅ Interface claire et accessible / Clear, accessible interface

---

## 🎨 Identité Visuelle / Visual Identity

### Couleurs / Colors
- **Primary**: Bleu aviation / Aviation blue (#1e3a8a)
- **Zone Verte / Green**: #28a745
- **Zone Jaune / Yellow**: #ffc107
- **Zone Orange**: #ff8c00
- **Zone Rouge / Red**: #dc3545

### Logo
- Fichier: `public/images/Logo (fond noir).png`
- Fichier alternatif: `public/images/Logo (fond blanc).png`
- Fallback: Texte stylisé si l'image n'est pas trouvée / Styled text if image not found

---

## 🔧 Configuration Technique / Technical Setup

### Structure des Fichiers / File Structure
```
visuals/
├── src/
│   ├── MaydayDashboard.jsx        ← Composant principal / Main component
│   ├── main-mayday.jsx            ← Point d'entrée / Entry point
│   └── index.css                  ← Styles globaux / Global styles
├── public/images/
│   ├── Logo (fond noir).png       ← Logo principal / Main logo
│   └── Logo (fond blanc).png      ← Logo alternatif / Alternative logo
├── index-mayday.html              ← HTML pour Mayday / Mayday HTML
├── package.json
└── vite.config.js
```

### Modifier vite.config.js / Modify vite.config.js

Pour faire de la version Mayday la version par défaut:
To make the Mayday version the default:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index-mayday.html')
      }
    }
  }
})
```

---

## 📱 Utilisation Mobile / Mobile Usage

### Pour le Keynote du 11 Décembre / For December 11 Keynote
1. **Héberger / Host** sur Netlify, Vercel, ou similaire
2. **Créer un QR code** pointant vers l'URL
3. **Tester sur iOS Safari et Android Chrome**
4. **S'assurer** que l'interface est responsive

### URL Courte Recommandée / Recommended Short URL
- Utilisez un service comme Bitly ou TinyURL
- Format suggéré: `mayday.app/tableau` ou similaire
- Facilite la saisie manuelle si besoin / Easier manual entry if needed

---

## 🎯 Flux Utilisateur / User Flow

### 1. Écran de Bienvenue / Welcome Screen
- Introduction à l'outil / Introduction to the tool
- Instructions d'utilisation / Usage instructions
- Bouton "Commencer" / "Start" button

### 2. Évaluation / Assessment
- Affichage des 4 zones / Display of 4 zones
- 44 cases à cocher au total / 44 total checkboxes
- Compteur par zone / Counter per zone
- Bouton "Voir mes résultats" / "See my results" button

### 3. Détection de Crise (si applicable) / Crisis Detection (if applicable)
- Alerte immédiate / Immediate alert
- Numéro de crise / Crisis line number
- Option de continuer (non recommandée) / Continue option (not recommended)

### 4. Résultats / Results
- Zone dominante / Dominant zone
- Répartition complète / Complete breakdown
- Stratégies recommandées / Recommended strategies
- Capture d'email / Email capture
- Option de recommencer / Restart option

---

## 🔒 Confidentialité et Stockage / Privacy & Storage

### Stockage Local / Local Storage
- ✅ Toutes les données stockées localement / All data stored locally
- ✅ Aucune transmission au serveur / No server transmission
- ✅ Anonyme et confidentiel / Anonymous and confidential

### Clés de Stockage / Storage Keys
- `mayday_view` - Vue actuelle / Current view
- `mayday_lang` - Langue sélectionnée / Selected language
- `mayday_checked` - Cases cochées / Checked boxes
- `mayday_email` - Email pour rappels / Email for reminders

### Réinitialisation / Reset
- Bouton "Recommencer" efface toutes les données / "Restart" button clears all data
- localStorage.clear() est utilisé / localStorage.clear() is used

---

## 🌐 Internationalisation / Internationalization

### Langues Disponibles / Available Languages
- **Français (FR)** - Langue par défaut / Default language
- **English (EN)** - Traduction complète / Complete translation

### Toggle de Langue / Language Toggle
- Bouton fixe en haut à droite / Fixed button top-right
- Changement instantané / Instant switch
- Préférence sauvegardée / Preference saved

### Contenu / Content
- Tous les textes sont bilingues / All text is bilingual
- Structure: `{ fr: "...", en: "..." }`
- Facile d'ajouter d'autres langues / Easy to add more languages

---

## 📊 Logique de Calcul / Calculation Logic

### Détermination de la Zone Dominante / Dominant Zone Determination

```javascript
// Compte le nombre de cases cochées par zone
// Count checked boxes per zone
const counts = { green: 0, yellow: 0, orange: 0, red: 0 };

// Tri par nombre décroissant
// Sort by descending count
const sorted = counts.sort((a, b) => b - a);

// La zone avec le plus de cases cochées gagne
// Zone with most checks wins
const dominantZone = sorted[0];
```

### Détection de Crise / Crisis Detection
```javascript
// Indicateur spécial: Zone rouge, premier item (idées suicidaires)
// Special indicator: Red zone, first item (suicidal thoughts)
if (checked['red-0']) {
  // Afficher l'écran de crise
  // Display crisis screen
  setView('crisis');
}
```

---

## 🎨 Personnalisation / Customization

### Modifier les Couleurs / Modify Colors
Dans `MaydayDashboard.jsx`, ligne ~25:
In `MaydayDashboard.jsx`, line ~25:

```jsx
const ZONES: ZoneData[] = [
  {
    id: 'green',
    color: '#28a745', // ← Changez ici / Change here
    // ...
  }
];
```

### Ajouter des Indicateurs / Add Indicators
Dans l'objet `ZONES`, section `signs`:
In the `ZONES` object, `signs` section:

```jsx
signs: {
  fr: [
    'Indicateur 1',
    'Indicateur 2',
    // Ajoutez ici / Add here
  ],
  en: [
    'Indicator 1',
    'Indicator 2',
    // Add here
  ]
}
```

### Modifier le Logo / Modify Logo
Remplacez les fichiers dans:
Replace files in:
- `public/images/Logo (fond noir).png`
- `public/images/Logo (fond blanc).png`

---

## 📈 Analytics (Optionnel / Optional)

Pour le suivi d'utilisation (respectueux de la vie privée):
For usage tracking (privacy-respecting):

```javascript
// Exemple avec Plausible
// Example with Plausible
useEffect(() => {
  if (window.plausible) {
    window.plausible('Assessment Started');
  }
}, []);

// Au submit
// On submit
const handleSubmit = () => {
  if (window.plausible) {
    window.plausible('Assessment Completed', {
      props: { dominantZone }
    });
  }
  // ...
};
```

---

## 🚀 Déploiement / Deployment

### Recommandations / Recommendations
- **Netlify** (recommandé / recommended)
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**

### Build Production
```bash
npm run build
# Le dossier dist/ contient les fichiers à déployer
# The dist/ folder contains files to deploy
```

### Variables d'Environnement / Environment Variables
Aucune requise pour le fonctionnement de base.
None required for basic functionality.

---

## 📞 Support & Resources

### Ligne de Crise / Crisis Line
- **Canada (Québec)**: 1-866-APPELLE (1-866-277-3553)
- **Available 24/7**
- **Gratuit et confidentiel / Free and confidential**

### Crédits / Credits
- **Outil original / Original tool**: Programme d'aide aux médecins du Québec
- **Adaptation (2020)**: Rachel Thibeault, Ph.D.
- **Adaptation aviation / Aviation adaptation (2025)**: Jean-François Lacasse
- **Développement numérique / Digital development**: Built with love by SweetBot

---

## 📝 Notes de Lancement / Launch Notes

### Keynote du 11 Décembre 2025 / December 11, 2025 Keynote
- ✅ Version française prioritaire / French version priority
- ✅ Mobile-first (participants utilisent leurs téléphones / participants use phones)
- ✅ QR code pour accès rapide / QR code for quick access
- ✅ Pas de bugs - c'est le lancement en direct! / No bugs - it's live debut!
- ✅ Email capture pour suivi mensuel / Email capture for monthly follow-up

### Phase 2 (Janvier 2026 / January 2026)
- Ajouter visuels aviation optionnels / Add optional aviation visuals
- Tests A/B version simple vs thématique / A/B test simple vs themed version
- Analytics d'utilisation / Usage analytics

---

## 🎯 Licence & Attribution / License & Attribution

**© 2025 Jean-François Lacasse | Mayday M'Aider**

Adapté avec permission du Programme d'aide aux médecins du Québec.
Adapted with permission from Programme d'aide aux médecins du Québec.

---

**Prêt à décoller! / Ready for takeoff!** ✈️

Pour questions techniques / For technical questions:
Built with React + Vite + Tailwind CSS
