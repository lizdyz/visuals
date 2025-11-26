# Quick Start for Developers

**Project**: Le Tableau de Bord (Mayday M'Aider)
**Launch**: December 11, 2025 (15 days!)
**Stack**: React 18 + Vite 5 + Tailwind CSS 3

---

## 5-Minute Overview

### What You're Building
A **4-zone checklist** mental health assessment tool for Jean-François Lacasse's keynote. Users check indicators across 4 colored zones, see their dominant zone, and get personalized strategies.

### Critical Features
1. **44 checkboxes** (11 per zone: Green/Yellow/Orange/Red)
2. **Bilingual** (French primary, English toggle)
3. **Crisis detection** (automatic intervention for suicidal thoughts)
4. **Mobile-first** (keynote attendees use phones via QR code)
5. **Privacy** (all data local, no server)

### Three Versions in Repo
| Version | Status | Files |
|---------|--------|-------|
| **Le Tableau de Bord** | ✅ USE THIS | `MaydayDashboard.jsx`, `main-mayday.jsx`, `index-mayday.html` |
| Check Your Lights (Original) | ❌ Mistake, ignore | `AviationDashboard.jsx` |
| Check Your Lights (SweetBOS) | ❌ Mistake, ignore | `AviationDashboardBranded.jsx` |

**Note**: Versions 2 & 3 were built incorrectly (gauge system instead of checklist). Focus on Version 1.

---

## Essential Reading (Priority Order)

1. **`DEVELOPER_HANDOFF_SPECS.md`** - Original requirements (15 min read)
2. **`DASHBOARD_COMPLETE_CONTENT.md`** - All 44 indicators, source of truth (10 min read)
3. **`DEVELOPER_HANDOFF.md`** - Complete technical guide (30 min read)
4. **`src/MaydayDashboard.jsx`** - Working reference implementation (study this)

---

## Run Existing Code (2 Minutes)

```bash
# 1. Install dependencies
npm install

# 2. Swap to Mayday version
mv index.html index-original.html
mv index-mayday.html index.html

# 3. Run dev server
npm run dev

# 4. Open http://localhost:3000
```

**Test it**: Click through entire flow to understand UX.

---

## Key Technical Patterns

### 1. Bilingual Content
```jsx
const ZONES = [
  {
    name: { fr: 'En Santé', en: 'Healthy' },
    signs: {
      fr: ['Être posé(e), calme', /* ... */],
      en: ['Calm and steady', /* ... */]
    }
  }
];

// Usage: {zone.name[lang]}
```

### 2. Crisis Detection
```jsx
// Red zone, first indicator = suicidal thoughts
if (checked['red-0']) {
  setView('crisis'); // Show 1-866-APPELLE screen
}
```

### 3. Safe localStorage
```jsx
// Handles private browsing/sandboxed errors
const [view, setView] = useSafeStorage('mayday_view', 'welcome');
```

### 4. Scoring
```jsx
// Count per zone, find highest
const counts = { green: 0, yellow: 0, orange: 0, red: 0 };
Object.keys(checked).forEach(key => {
  if (checked[key]) counts[key.split('-')[0]]++;
});
const dominantZone = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
```

---

## Build from Scratch (Recommended Steps)

### Phase 1: Core Structure (1-2 days)
1. Set up fresh React + Vite project
2. Add Tailwind CSS
3. Create 4-view structure: Welcome → Assessment → Results (skip Crisis for now)
4. Hardcode 2-3 indicators per zone to test flow

### Phase 2: Content (1 day)
5. Add all 44 indicators from `DASHBOARD_COMPLETE_CONTENT.md`
6. Implement scoring logic
7. Add strategies for each zone

### Phase 3: Critical Features (2-3 days)
8. Add crisis detection + crisis screen
9. Implement bilingual toggle
10. Add logo with fallback

### Phase 4: Polish (2-3 days)
11. Mobile responsive design
12. localStorage persistence
13. Email capture (optional)
14. Animations and transitions

### Phase 5: Test & Deploy (2-3 days)
15. Test on iOS Safari, Android Chrome
16. Deploy to Netlify/Vercel
17. Create QR code and short URL
18. Final testing

**Total**: ~10-12 days (leaves 3-5 days buffer before Dec 11)

---

## Critical Files Reference

### Source Content
- **`DASHBOARD_COMPLETE_CONTENT.md`** - All 44 indicators (copy-paste this)
- **`public/images/Logo (fond noir).png`** - Brain logo to display

### Reference Implementation
- **`src/MaydayDashboard.jsx`** - Complete working code (850 lines)
  - Copy patterns, not entire file
  - Study: bilingual structure, crisis logic, scoring algorithm

### Documentation
- **`MAYDAY_README.md`** - Feature specs and user guide
- **`DEVELOPER_HANDOFF.md`** - Complete technical documentation
- **`DEVELOPER_HANDOFF_SPECS.md`** - Original requirements

---

## Deployment Checklist

### Before Dec 11
- [ ] Test on real iOS device (Safari)
- [ ] Test on real Android device (Chrome)
- [ ] Verify all 44 indicators correct
- [ ] Test French ↔ English toggle
- [ ] Verify crisis detection works
- [ ] Deploy to production
- [ ] Create QR code (qr-code-generator.com)
- [ ] Create short URL (bit.ly, tinyurl)
- [ ] Share URL with Jean-François for approval

### Hosting Options
1. **Netlify** (easiest): Drag `dist/` folder to netlify.com/drop
2. **Vercel**: `npm install -g vercel && vercel --prod`
3. **GitHub Pages**: Push `dist/` to gh-pages branch

---

## FAQs

**Q: Should I use the existing MaydayDashboard.jsx or build from scratch?**
A: Your choice. Existing code works and is well-tested. Building from scratch gives you ownership but takes longer. Consider adapting existing code if tight on time.

**Q: What about the gauge versions (AviationDashboard.jsx)?**
A: Ignore them. They were built by mistake. Can reference for component ideas if needed.

**Q: Do I need a backend for email capture?**
A: Not for MVP. Store email in localStorage for now. Can add Mailchimp integration later.

**Q: What if I find bugs in the reference code?**
A: Fix them! The code is a reference, not production-ready. Test thoroughly.

**Q: Can I change the design?**
A: Check with Jean-François first. He approved current design. Focus on functionality for Dec 11.

**Q: What about TypeScript?**
A: Existing code has some TS syntax that can be removed. Pure JS is fine for MVP.

---

## Red Flags to Avoid

1. ❌ **Wrong Format**: Don't build gauge system (that was the mistake)
2. ❌ **English-First**: French must be default/primary language
3. ❌ **Missing Crisis Detection**: Lives depend on this feature
4. ❌ **Desktop-Only**: Must work perfectly on mobile
5. ❌ **Server Required**: Must work with only localStorage
6. ❌ **Wrong Indicators**: All 44 must match DASHBOARD_COMPLETE_CONTENT.md exactly

---

## Success Criteria

✅ All 44 indicators correct (source: DASHBOARD_COMPLETE_CONTENT.md)
✅ French primary language, English toggle works
✅ Crisis detection triggers on red-0 indicator
✅ Mobile-responsive (iOS Safari, Android Chrome)
✅ Scoring calculates dominant zone correctly
✅ Results show strategies for dominant zone
✅ Works offline after first load
✅ No console errors
✅ Loads in <3 seconds on 4G

---

## Need Help?

1. **Read**: `DEVELOPER_HANDOFF.md` (comprehensive technical guide)
2. **Study**: `src/MaydayDashboard.jsx` (working reference code)
3. **Source**: `DASHBOARD_COMPLETE_CONTENT.md` (exact indicators to use)
4. **Context**: `QUICK_REFERENCE_FOR_OPUS.md` (about Jean-François)

---

## Timeline

- **Today**: Setup project, read docs, test existing code
- **Days 1-3**: Core structure + content
- **Days 4-6**: Critical features (crisis, bilingual, mobile)
- **Days 7-9**: Polish, test, deploy
- **Days 10-12**: QA, fix bugs, final testing
- **Days 13-15**: Buffer for issues
- **December 11**: Launch! 🚀

---

**You've got 15 days. The reference code works. Focus on understanding requirements, testing thoroughly, and delivering on time. Good luck!** 💪

---

*Last Updated: November 26, 2025*
*Next Milestone: December 11, 2025*
