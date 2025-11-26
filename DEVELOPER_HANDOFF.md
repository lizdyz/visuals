# Developer Handoff Documentation

**Project**: Le Tableau de Bord / Check Your Lights - Aviation Mental Health Dashboards
**Date**: November 26, 2025
**Launch Deadline**: December 11, 2025 (15 days)
**Client**: Jean-François Lacasse / Mayday M'Aider

---

## Executive Summary

This repository contains **three complete versions** of an aviation-themed mental health self-assessment tool. Your primary focus should be **Version 1: Le Tableau de Bord (Mayday M'Aider)** which launches December 11, 2025 at Jean-François Lacasse's keynote.

### Three Versions Overview

| Version | Status | Use Case | Files |
|---------|--------|----------|-------|
| **1. Le Tableau de Bord** | ✅ **CORRECT - USE THIS** | JF's Dec 11 keynote | `MaydayDashboard.jsx`, `main-mayday.jsx`, `index-mayday.html` |
| 2. Check Your Lights (Original) | Built by mistake, kept for reference | White-label gauge version | `AviationDashboard.jsx`, `main.jsx`, `index.html` |
| 3. Check Your Lights (SweetBOS) | Built by mistake, kept for reference | Branded gauge version | `AviationDashboardBranded.jsx`, `main-branded.jsx`, `index-branded.html` |

**Key Point**: Versions 2 and 3 were built incorrectly based on misunderstood requirements. Version 1 is the actual project for the December 11 launch.

---

## Why Three Versions Exist (Important Context)

### The Mistake
Initial development misunderstood the project requirements and built a **gauge-based system** (11 individual animated gauges) instead of the actual requirement: a **4-zone checklist system** (44 indicators).

### The Correction
When actual project files were uploaded:
- `DASHBOARD_COMPLETE_CONTENT.md` - All 44 indicators in FR/EN
- `DEVELOPER_HANDOFF_SPECS.md` - Actual specifications
- `QUICK_REFERENCE_FOR_OPUS.md` - Context about Jean-François Lacasse
- Logo files: `Logo (fond noir).png`, `Logo (fond blanc).png`

The correct **Le Tableau de Bord** was built with the proper 4-zone checklist format.

### Client Decision
Client chose to keep all three versions: "i think we should keep both versions"

**Your Focus**: Build from scratch using Version 1 as reference. Versions 2 & 3 can be ignored or used for component ideas.

---

## Project Requirements - Le Tableau de Bord

### Core Features (MVP for Dec 11)

#### 1. 4-Zone Checklist System
- **Green Zone** (En Santé / Healthy): 11 wellness indicators
- **Yellow Zone** (En Réaction / Reacting): 11 stress reaction indicators
- **Orange Zone** (Fragilisé(e) / At Risk): 11 vulnerability indicators
- **Red Zone** (État Critique / Critical): 11 crisis indicators

**Total**: 44 checkboxes (11 per zone × 4 zones)

#### 2. Bilingual Support
- French PRIMARY (default language)
- English secondary (toggle in top-right corner)
- All content duplicated: UI text, indicators, strategies, crisis messages

#### 3. Crisis Detection
- **Trigger**: Red zone, first indicator = suicidal thoughts
- **Action**: Immediate redirect to crisis intervention screen
- **Crisis Line**: 1-866-APPELLE (1-866-277-3553) - 24/7, free, confidential
- **User Agency**: Option to continue (not recommended) but allows choice

#### 4. Results & Scoring
- Count checked boxes per zone
- Determine dominant zone (highest count)
- Display breakdown with strategies for that zone
- Email capture for monthly reminders (optional)

#### 5. Mobile-First Design
- **Why**: Keynote attendees will use phones (QR code access)
- **Targets**: iOS Safari 14+, Android Chrome 90+
- **Performance**: <3s load time on 4G
- **Touch**: Minimum 44px touch targets

#### 6. Privacy & Security
- All data in localStorage (no server)
- No tracking, no analytics (by default)
- Anonymous and confidential
- GDPR compliant

---

## Technical Stack

```json
{
  "framework": "React 18",
  "buildTool": "Vite 5",
  "styling": "Tailwind CSS 3",
  "icons": "Lucide React",
  "storage": "localStorage API",
  "language": "JSX/JavaScript"
}
```

### Dependencies (from package.json)
```bash
npm install react react-dom lucide-react
npm install -D @vitejs/plugin-react tailwindcss postcss autoprefixer vite
```

---

## File Structure

```
visuals/
├── src/
│   ├── MaydayDashboard.jsx         ← PRIMARY FILE - 850+ lines
│   ├── main-mayday.jsx             ← Entry point for Mayday
│   ├── AviationDashboard.jsx       ← Reference only (gauge version)
│   ├── AviationDashboardBranded.jsx ← Reference only (branded gauges)
│   ├── main.jsx                    ← Reference only
│   ├── main-branded.jsx            ← Reference only
│   └── index.css                   ← Shared Tailwind base
│
├── public/images/
│   ├── Logo (fond noir).png        ← Brain logo (dark background)
│   └── Logo (fond blanc).png       ← Brain logo (light background)
│
├── index-mayday.html               ← HTML for Mayday version
├── index.html                      ← Reference only
├── index-branded.html              ← Reference only
│
├── DASHBOARD_COMPLETE_CONTENT.md   ← SOURCE CONTENT (all 44 indicators)
├── DEVELOPER_HANDOFF_SPECS.md      ← ORIGINAL SPECS (read this!)
├── QUICK_REFERENCE_FOR_OPUS.md     ← Context about Jean-François
│
├── MAYDAY_README.md                ← Complete Mayday guide
├── README.md                       ← Overview of all 3 versions
├── SETUP_GUIDE.md                  ← General setup instructions
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Key Code Patterns

### 1. Bilingual Content Structure

**Pattern**: All text uses object format `{ fr: "texte", en: "text" }`

```jsx
// Zone data structure
const ZONES = [
  {
    id: 'green',
    color: '#28a745',
    name: {
      fr: 'En Santé',
      en: 'Healthy'
    },
    action: {
      fr: 'JE CONTINUE!',
      en: 'I CONTINUE!'
    },
    signs: {
      fr: [
        'Être posé(e), calme',
        'Sens de l\'humour',
        // ... 11 indicators in French
      ],
      en: [
        'Calm and steady',
        'Sense of humour',
        // ... 11 indicators in English
      ]
    },
    strategies: {
      fr: [/* French strategies */],
      en: [/* English strategies */]
    }
  },
  // ... yellow, orange, red zones
];

// Usage in component
<h2>{zone.name[lang]}</h2>
<p>{zone.action[lang]}</p>
```

**Why This Pattern**:
- Easy to add more languages
- Type-safe with TypeScript
- Clear content organization
- No external i18n library needed

---

### 2. Language State Management

```jsx
// State with localStorage persistence
const [lang, setLang] = useSafeStorage('mayday_lang', 'fr');

// Toggle component
const LanguageToggle = ({ lang, setLang }) => (
  <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1">
    <button
      onClick={() => setLang('fr')}
      className={`px-4 py-2 rounded-full transition-all ${
        lang === 'fr' ? 'bg-blue-600 text-white' : 'text-white/60'
      }`}
    >
      FR
    </button>
    <button
      onClick={() => setLang('en')}
      className={`px-4 py-2 rounded-full transition-all ${
        lang === 'en' ? 'bg-blue-600 text-white' : 'text-white/60'
      }`}
    >
      EN
    </button>
  </div>
);
```

---

### 3. Safe localStorage Hook

**Problem**: localStorage can throw errors in sandboxed/private browsing environments.

**Solution**: Wrapper hook with try-catch

```jsx
function useSafeStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === 'undefined') return initialValue;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
```

**localStorage Keys Used**:
- `mayday_view` - Current view ('welcome', 'assessment', 'crisis', 'results')
- `mayday_lang` - Selected language ('fr' or 'en')
- `mayday_checked` - Object of checked indicators `{ 'green-0': true, ... }`
- `mayday_email` - User email for monthly reminders

---

### 4. Crisis Detection Logic

**Critical Indicator**: Red zone, first item (index 0) = "Avoir des idées suicidaires" / "Having suicidal thoughts"

```jsx
const handleSubmit = () => {
  // Check if crisis indicator is checked
  if (checked['red-0']) {
    setView('crisis'); // Show crisis intervention screen
    return;
  }

  // Otherwise calculate results
  setView('results');
};
```

**Crisis Screen Content**:
```jsx
const CrisisScreen = ({ lang, onContinue }) => (
  <div className="min-h-screen flex items-center justify-center p-4 bg-red-600">
    <div className="bg-white rounded-2xl p-8 max-w-2xl shadow-2xl">
      <AlertTriangle className="w-20 h-20 text-red-600 mx-auto mb-6" />

      <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
        {lang === 'fr' ? 'ALERTE - BESOIN D\'AIDE IMMÉDIAT' : 'ALERT - IMMEDIATE HELP NEEDED'}
      </h1>

      <p className="text-lg mb-6">
        {lang === 'fr'
          ? 'Vous avez indiqué avoir des pensées suicidaires. Votre vie est précieuse.'
          : 'You indicated having suicidal thoughts. Your life is precious.'}
      </p>

      <div className="bg-red-50 border-2 border-red-600 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-red-800 mb-3">
          {lang === 'fr' ? 'Ligne de crise 24/7' : '24/7 Crisis Line'}
        </h2>
        <a
          href="tel:1-866-277-3553"
          className="text-4xl font-bold text-red-600 hover:text-red-700"
        >
          1-866-APPELLE
        </a>
        <p className="text-sm text-gray-600 mt-2">
          {lang === 'fr' ? 'Gratuit et confidentiel' : 'Free and confidential'}
        </p>
      </div>

      <button
        onClick={onContinue}
        className="w-full py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
      >
        {lang === 'fr' ? 'Continuer vers les résultats (non recommandé)' : 'Continue to results (not recommended)'}
      </button>
    </div>
  </div>
);
```

---

### 5. Scoring Algorithm

```jsx
// Count checked indicators per zone
const calculateResults = () => {
  const counts = {
    green: 0,
    yellow: 0,
    orange: 0,
    red: 0
  };

  // Count all checked boxes
  Object.keys(checked).forEach(key => {
    if (checked[key]) {
      const [zone] = key.split('-'); // key format: "green-0", "yellow-5", etc.
      counts[zone]++;
    }
  });

  // Find dominant zone (highest count)
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const dominantZone = sorted[0][0];

  return { counts, dominantZone };
};
```

**Tie-Breaking**: In case of equal counts, the first one in sorted order wins (more critical zones should be prioritized if implementing tie-breaking logic).

---

### 6. Logo Integration with Fallback

**Problem**: Logo filename has spaces: "Logo (fond noir).png"

**Solution**: Use exact path with proper fallback

```jsx
const Logo = ({ lang }) => {
  const [error, setError] = useState(false);
  const logoUrl = "/images/Logo (fond noir).png";

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      {!error ? (
        <img
          src={logoUrl}
          alt="Mayday M'Aider"
          className="h-24 w-auto object-contain drop-shadow-2xl"
          onError={() => setError(true)}
        />
      ) : (
        // Text fallback if image fails to load
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Mayday M'Aider
          </h1>
          <p className="text-xl text-blue-200">
            {lang === 'fr' ? 'Check tes lumières' : 'Check Your Lights'}
          </p>
        </div>
      )}
    </div>
  );
};
```

---

### 7. View State Management

**Four Views**: welcome → assessment → crisis (optional) → results

```jsx
const [view, setView] = useSafeStorage('mayday_view', 'welcome');

// View routing
const renderView = () => {
  switch (view) {
    case 'welcome':
      return <WelcomeScreen onStart={() => setView('assessment')} />;
    case 'assessment':
      return <AssessmentScreen onSubmit={handleSubmit} />;
    case 'crisis':
      return <CrisisScreen onContinue={() => setView('results')} />;
    case 'results':
      return <ResultsScreen onRestart={handleRestart} />;
    default:
      return <WelcomeScreen onStart={() => setView('assessment')} />;
  }
};

const handleRestart = () => {
  localStorage.clear(); // Clear all stored data
  setView('welcome');
  setChecked({});
};
```

---

### 8. Responsive Design Patterns

**Mobile-First Tailwind Classes**:

```jsx
// Container
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8">

// Card
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl">

// Grid for zones
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

// Sticky submit button
<button className="sticky bottom-4 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-lg transition-all">
```

**Touch Targets**: All buttons/checkboxes minimum 44px height for mobile tapping.

---

## Critical Technical Decisions

### 1. Why React (Not Vue/Svelte/Vanilla)
- **Client Ecosystem**: May integrate with SweetBOS platform (React-based)
- **Component Reusability**: Easy to extract components for other tools
- **Developer Familiarity**: Wider talent pool
- **Tooling**: Excellent dev experience with Vite

### 2. Why Vite (Not Create React App/Next.js)
- **Speed**: Instant dev server startup, fast HMR
- **Simplicity**: No backend needed (static site)
- **Modern**: ESM-native, optimized builds
- **Lightweight**: No Next.js overhead for simple SPA

### 3. Why Tailwind (Not CSS Modules/Styled Components)
- **Rapid Development**: Utility-first for quick iteration
- **Consistency**: Design system in config
- **Mobile-First**: Built-in responsive utilities
- **Bundle Size**: PurgeCSS removes unused styles

### 4. Why localStorage (Not Backend/Database)
- **Privacy**: No server = no data leaks
- **Simplicity**: No API, no auth, no hosting costs
- **Offline**: Works without internet after first load
- **Anonymous**: True confidentiality for mental health tool

### 5. Why No TypeScript
- **Speed**: Faster initial development
- **Simplicity**: Lower barrier for contributions
- **Trade-off**: Could add TypeScript later for type safety

**Note**: Original code has TypeScript syntax (`: Type`) that should be removed if building in pure JavaScript.

---

## Deployment Checklist for December 11

### Pre-Deployment

- [ ] Test on iOS Safari (primary target)
- [ ] Test on Android Chrome
- [ ] Verify all 44 indicators display correctly
- [ ] Test French and English toggle
- [ ] Verify crisis detection triggers correctly
- [ ] Test email capture (if implementing backend)
- [ ] Check logo displays properly
- [ ] Verify mobile responsive on real devices
- [ ] Test offline capability (PWA optional)
- [ ] Run `npm run build` and verify dist/

### Hosting Options (Recommended)

**Option 1: Netlify (Easiest)**
```bash
npm run build
# Drag dist/ folder to Netlify drop zone
# Or connect GitHub repo
```

**Option 2: Vercel**
```bash
npm install -g vercel
vercel --prod
```

**Option 3: GitHub Pages**
```bash
npm run build
# Configure vite.config.js with base: '/repo-name/'
# Push dist/ to gh-pages branch
```

### Post-Deployment

- [ ] Create short URL (bit.ly, tinyurl.com)
  - Suggested: `mayday.app/tableau` or similar
- [ ] Generate QR code pointing to URL
  - Use qr-code-generator.com or similar
  - Test QR code with phone camera
- [ ] Test deployed URL on multiple devices
- [ ] Prepare backup plan (printed URLs, etc.)
- [ ] Monitor on launch day (check uptime)

### Launch Day (December 11, 2025)

- [ ] Have QR code ready for slides
- [ ] Display short URL on screen
- [ ] Monitor real-time usage if analytics added
- [ ] Be ready to fix issues quickly
- [ ] Capture feedback from attendees

---

## Known Issues & Future Enhancements

### Known Issues (None Critical)

1. **Logo Filename Spaces**: "Logo (fond noir).png" works but URL-encoding might be cleaner
   - Solution: Rename to `logo-dark.png` and `logo-light.png`

2. **No Input Validation**: Email capture doesn't validate format
   - Solution: Add regex validation: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

3. **No Loading States**: Immediate state changes could use transitions
   - Solution: Add framer-motion for smoother animations

4. **No Analytics**: Can't track usage without backend
   - Solution: Add Plausible Analytics (privacy-friendly)

### Phase 2 Enhancements (Post-Launch)

1. **Aviation Visuals** (JF wants to test simple version first)
   - Plane icons per zone
   - Animated flight path
   - Cockpit dashboard theme

2. **Email Backend** (Currently just captures, doesn't send)
   - Mailchimp/ConvertKit integration
   - Monthly reminder emails
   - Progress tracking over time

3. **Results Visualization**
   - Radar chart showing all 4 zones
   - Historical comparison (if returning user)
   - Downloadable PDF report

4. **Accessibility Improvements**
   - Screen reader optimization
   - Keyboard navigation (tab order)
   - High contrast mode
   - WCAG AAA compliance (currently AA)

5. **PWA Features**
   - Offline mode
   - Add to home screen
   - Push notifications for monthly check-ins

6. **Multi-Language Expansion**
   - Spanish (es)
   - Portuguese (pt)
   - German (de)
   - Easy with existing structure

---

## Testing Strategy

### Manual Testing Checklist

**Functional Tests**:
- [ ] Check each of the 44 indicators (11 × 4 zones)
- [ ] Verify counter increments per zone
- [ ] Test "Submit" button enables/disables correctly
- [ ] Check crisis detection with red-0 indicator
- [ ] Verify results calculation (dominant zone)
- [ ] Test restart functionality (clears all data)
- [ ] Check language toggle FR ↔ EN
- [ ] Verify email capture saves to localStorage

**UI/UX Tests**:
- [ ] Welcome screen displays correctly
- [ ] All zones visible without scrolling (desktop)
- [ ] Mobile: zones stack vertically
- [ ] Touch targets ≥44px on mobile
- [ ] Submit button stays visible (sticky)
- [ ] Logo displays or fallback text shows
- [ ] Language toggle always accessible
- [ ] Results screen readable and clear

**Cross-Browser Tests**:
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & iOS)
- [ ] Firefox
- [ ] Edge
- [ ] Samsung Internet

**Performance Tests**:
- [ ] Load time <3s on 4G
- [ ] No console errors
- [ ] No memory leaks (stay on page 5+ min)
- [ ] Smooth animations (60fps)

### Automated Testing (Optional)

**If adding tests later**:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

**Example Test**:
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import MaydayDashboard from './MaydayDashboard';

test('crisis detection triggers with red-0 indicator', () => {
  render(<MaydayDashboard />);

  // Start assessment
  fireEvent.click(screen.getByText(/Commencer/i));

  // Check suicidal thoughts indicator
  const crisisCheckbox = screen.getByLabelText(/idées suicidaires/i);
  fireEvent.click(crisisCheckbox);

  // Submit
  fireEvent.click(screen.getByText(/Voir mes résultats/i));

  // Verify crisis screen appears
  expect(screen.getByText(/ALERTE/i)).toBeInTheDocument();
  expect(screen.getByText(/1-866-APPELLE/i)).toBeInTheDocument();
});
```

---

## How to Use This Handoff

### For Building from Scratch

1. **Read These Files First** (Priority Order):
   - `DEVELOPER_HANDOFF_SPECS.md` - Original requirements
   - `DASHBOARD_COMPLETE_CONTENT.md` - All 44 indicators (source of truth)
   - `QUICK_REFERENCE_FOR_OPUS.md` - Context about Jean-François
   - `MAYDAY_README.md` - Complete feature documentation
   - This file - Technical patterns and decisions

2. **Reference Implementation**:
   - `src/MaydayDashboard.jsx` - Complete working example (850+ lines)
   - Copy patterns, don't copy-paste entire file
   - Understand the logic, then rewrite in your style

3. **Set Up Fresh Project**:
   ```bash
   npm create vite@latest mayday-dashboard -- --template react
   cd mayday-dashboard
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Build Components Incrementally**:
   - Step 1: Static welcome screen
   - Step 2: Assessment with 4 zones (hardcode 2-3 indicators first)
   - Step 3: Add all 44 indicators from DASHBOARD_COMPLETE_CONTENT.md
   - Step 4: Scoring logic
   - Step 5: Results screen
   - Step 6: Crisis detection
   - Step 7: Bilingual support
   - Step 8: localStorage persistence
   - Step 9: Mobile responsive
   - Step 10: Logo integration

5. **Test Against Original**:
   - Run original: `npm run dev` (after swapping to index-mayday.html)
   - Compare behavior side-by-side
   - Ensure feature parity

### For Understanding Architecture

- **View Flow**: Study `view` state management pattern
- **Data Structure**: Examine `ZONES` array structure
- **State Management**: Review `useSafeStorage` hook pattern
- **Conditional Logic**: Understand crisis detection flow
- **Responsive Design**: Analyze Tailwind breakpoints

### For Debugging Issues

- **localStorage not working?** Check useSafeStorage implementation
- **Logo not displaying?** Verify file path and onError handler
- **Language not persisting?** Check localStorage key 'mayday_lang'
- **Crisis screen not showing?** Verify checked['red-0'] logic
- **Styles not applying?** Check Tailwind config and index.css imports

---

## Quick Start (Running Original Code)

```bash
# 1. Clone/download repository
git clone <repo-url>
cd visuals

# 2. Install dependencies
npm install

# 3. Swap to Mayday version
mv index.html index-original.html
mv index-mayday.html index.html

# 4. Run development server
npm run dev

# 5. Open browser
# Go to http://localhost:3000
```

---

## Contact & Resources

### Original Work
- **Built by**: Claude Code (AI Assistant)
- **Client**: Jean-François Lacasse
- **Brand**: Mayday M'Aider
- **Launch**: December 11, 2025

### Key Documents in Repo
- `/DASHBOARD_COMPLETE_CONTENT.md` - All 44 indicators
- `/DEVELOPER_HANDOFF_SPECS.md` - Original requirements
- `/MAYDAY_README.md` - Complete user/dev guide
- `/src/MaydayDashboard.jsx` - Reference implementation

### External Resources
- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

### Mental Health Resources
- **Crisis Line (Quebec)**: 1-866-APPELLE (1-866-277-3553)
- **Website**: [Include Mayday M'Aider website if available]
- **Jean-François Contact**: [Include if appropriate]

---

## Final Notes

### Philosophy
This is a **mental health tool** launching at a **live keynote** in **15 days**. Priorities:

1. **Accuracy**: All 44 indicators must be correct (source: DASHBOARD_COMPLETE_CONTENT.md)
2. **Reliability**: Must work flawlessly on mobile (iOS Safari primary)
3. **Privacy**: All data local, completely anonymous
4. **Accessibility**: Clear, simple, everyone can use it
5. **Speed**: Fast load, smooth interactions

### Success Criteria
- ✅ Attendees can complete assessment on phones
- ✅ French speakers can use it (primary language)
- ✅ Crisis detection works (lives depend on it)
- ✅ Results are meaningful and actionable
- ✅ No bugs during live demo

### Why This Matters
Jean-François Lacasse is using aviation metaphors to destigmatize mental health conversations. This tool will be used by real people facing real challenges. Build it with care.

---

## Questions for Your Developer

1. **Timeline**: Can you build from scratch in 15 days? (Consider using existing code as base)
2. **Approach**: Building from scratch or adapting MaydayDashboard.jsx?
3. **Backend**: Do you need email capture backend or localStorage only for MVP?
4. **Design**: Following existing design or creating new?
5. **Testing**: What's your testing strategy before Dec 11?
6. **Deployment**: Netlify, Vercel, or custom hosting?
7. **Analytics**: Want usage tracking (Plausible) or pure privacy (no tracking)?

---

**Ready to build?** Start with `DEVELOPER_HANDOFF_SPECS.md` and `DASHBOARD_COMPLETE_CONTENT.md`. Reference `MaydayDashboard.jsx` for implementation patterns. You've got this! 🚀

**Questions?** All context is in this repository. Everything your developer needs is documented.

**Launch Date**: December 11, 2025 - T-minus 15 days! ⏰

---

*Document prepared November 26, 2025*
*For: Jean-François Lacasse / Mayday M'Aider*
*By: Previous development team*
