# Aviation-Themed Mental Health Dashboards ✈️

Three complete mental health self-assessment tools with aviation metaphors, built with React + Vite + Tailwind CSS.

![Mayday M'Aider](./public/images/Logo%20(fond%20noir).png)

---

## 🎯 Three Versions Available

### 1. **Le Tableau de Bord** (Mayday M'Aider) ⭐ **NEW**
**For: Jean-François Lacasse | December 11, 2025 Keynote Launch**

4-zone checklist mental health assessment tool.
- ✅ **French primary, English toggle**
- ✅ **44 indicators** (11 per zone × 4 zones)
- ✅ **Crisis detection** (automatic intervention for suicidal thoughts)
- ✅ **Mobile-first** responsive design
- ✅ **Bilingual** (FR/EN with instant toggle)
- ✅ **Mayday M'Aider branding** with brain logo integration

**Files**: `MaydayDashboard.jsx`, `main-mayday.jsx`, `index-mayday.html`
**Documentation**: See `MAYDAY_README.md` for complete guide

---

### 2. **Check Your Lights** (Original)
Clean, minimal dark theme with universal appeal.
- ✅ **11 aviation-themed gauges** (one per life system)
- ✅ **English language**
- ✅ **Neutral branding** for white-label use
- ✅ **Smooth gauge animations** and visual feedback

**Files**: `AviationDashboard.jsx`, `main.jsx`, `index.html`

---

### 3. **Check Your Lights** (SweetBOS Branded)
Premium brand-integrated version with SweetBOS design system.
- ✅ **11 aviation-themed gauges**
- ✅ **SweetBOS colors** (#005A9C, #7B2D8E, #00AEEF)
- ✅ **Oswald + Lato fonts** (Google Fonts)
- ✅ **Glass morphism** and modern effects
- ✅ **English language**

**Files**: `AviationDashboardBranded.jsx`, `main-branded.jsx`, `index-branded.html`
**Documentation**: See `SWEETBOS_BRANDING.md` for brand integration details

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Choose Your Version

#### Option 1: Le Tableau de Bord (Mayday - For Dec 11 Launch)
```bash
# Swap HTML files
mv index.html index-original.html
mv index-mayday.html index.html
npm run dev
```

#### Option 2: Check Your Lights (Original)
```bash
npm run dev
# Uses index.html by default
```

#### Option 3: Check Your Lights (SweetBOS Branded)
```bash
# Swap HTML files
mv index.html index-original.html
mv index-branded.html index.html
npm run dev
```

The app will open at `http://localhost:3000`

---

## 🎨 Shared Features (All Versions)

- ✅ **Crisis Detection**: Automatic detection and intervention for critical mental health situations
- ✅ **Privacy-First**: All data stored locally, completely anonymous and confidential
- ✅ **Mobile-First**: Responsive design optimized for phones and tablets
- ✅ **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- ✅ **Beautiful UI**: Smooth animations and professional design
- ✅ **Email Capture**: Optional monthly reminder signups

---

## 📊 Version Comparison

| Feature | Mayday M'Aider | Original | SweetBOS Branded |
|---------|---------------|----------|------------------|
| **Format** | Checklist | Gauges | Gauges |
| **Indicators** | 44 (11×4 zones) | 11 individual | 11 individual |
| **Languages** | FR/EN toggle | EN only | EN only |
| **Brand** | Mayday M'Aider | Neutral | SweetBOS |
| **Colors** | Blue gradient | Slate dark | Blue/Purple gradient |
| **Typography** | System fonts | System fonts | Oswald + Lato |
| **Logo** | Brain logos | Plane icon fallback | Custom logos |
| **Use Case** | JF's keynotes | White-label | SweetBOS platform |
| **Launch** | Dec 11, 2025 | General use | General use |

---

## 📁 Project Structure

```
visuals/
├── src/
│   ├── MaydayDashboard.jsx         ← Mayday M'Aider version
│   ├── AviationDashboard.jsx       ← Original version
│   ├── AviationDashboardBranded.jsx ← SweetBOS version
│   ├── main-mayday.jsx             ← Mayday entry point
│   ├── main.jsx                    ← Original entry point
│   ├── main-branded.jsx            ← SweetBOS entry point
│   └── index.css                   ← Shared styles
├── public/images/
│   ├── Logo (fond noir).png        ← Mayday M'Aider logo
│   └── Logo (fond blanc).png       ← Mayday M'Aider logo (alt)
├── index-mayday.html               ← Mayday HTML
├── index.html                      ← Original HTML
├── index-branded.html              ← SweetBOS HTML
├── MAYDAY_README.md               ← Mayday documentation
├── SWEETBOS_BRANDING.md           ← SweetBOS documentation
├── SETUP_GUIDE.md                 ← General setup guide
└── README.md                       ← This file
```

---

## 📚 Documentation

### For Each Version

1. **Mayday M'Aider** → See `MAYDAY_README.md`
   - Complete French/English guide
   - 4-zone system details
   - Crisis intervention specs
   - Deployment for Dec 11 keynote

2. **Original** → See `SETUP_GUIDE.md`
   - Quick start guide
   - Gauge system details
   - White-label deployment

3. **SweetBOS Branded** → See `SWEETBOS_BRANDING.md`
   - Brand integration details
   - Color and typography specs
   - Design system implementation

### General Documentation

- `IMPROVEMENTS.md` - All 100+ enhancements made
- `VISUAL_COMPARISON.md` - Visual differences between versions
- `SUMMARY.md` - Complete project overview

---

## 🎯 When to Use Each Version

### Use **Mayday M'Aider** When:
- ✅ For Jean-François Lacasse's keynotes
- ✅ French-speaking audience
- ✅ Need simple checklist format
- ✅ Want Mayday M'Aider branding
- ✅ Mobile-first priority (keynote attendees)
- ✅ Need bilingual support (FR/EN)

### Use **Original** When:
- ✅ White-label deployments
- ✅ Partner integrations
- ✅ Neutral branding preferred
- ✅ Want gauge visualizations
- ✅ English-only audience

### Use **SweetBOS Branded** When:
- ✅ SweetBOS platform integration
- ✅ Client-facing SweetBOS tools
- ✅ Marketing and demos
- ✅ Want premium brand appearance
- ✅ Need SweetBOS design consistency

---

## 🔧 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
# Output in dist/ directory
```

### Recommended Hosting
- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**

### For December 11 Keynote (Mayday Version)
1. Build production version
2. Deploy to hosting service
3. Create QR code pointing to URL
4. Test on iOS Safari and Android Chrome
5. Use short URL service (bit.ly, tinyurl, etc.)

---

## 🌐 Languages

| Version | Languages | Default | Toggle |
|---------|-----------|---------|--------|
| Mayday | FR + EN | FR | ✅ Yes (top-right) |
| Original | EN only | EN | ❌ No |
| SweetBOS | EN only | EN | ❌ No |

---

## 📱 Mobile Optimization

All versions are mobile-first and optimized for:
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+
- ✅ Touch interactions
- ✅ Responsive layouts
- ✅ Fast loading (<3s on 4G)

---

## 🔒 Privacy & Security

All versions:
- ✅ **No server communication** - all data stored locally
- ✅ **No tracking** - no analytics by default
- ✅ **Anonymous** - no personal information required
- ✅ **Secure** - HTTPS deployment recommended
- ✅ **GDPR compliant** - no cookies, no tracking

---

## 🎨 Customization

Each version can be customized:
- **Colors**: Modify zone colors in component files
- **Content**: Update indicator text and strategies
- **Branding**: Replace logos and fonts
- **Languages**: Add more languages (Mayday version)

See individual documentation files for customization guides.

---

## 📊 Technical Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Oswald + Lato for SweetBOS)
- **Storage**: localStorage API
- **Languages**: TypeScript/JSX

---

## 🏥 Mental Health Resources

### Canada (Québec)
- **Crisis Line**: 1-866-APPELLE (1-866-277-3553)
- **24/7**: Yes
- **Free**: Yes
- **Confidential**: Yes

### International
- **USA**: 988 Suicide & Crisis Lifeline
- **UK**: 116 123 (Samaritans)
- **Australia**: 13 11 14 (Lifeline)

---

## 👥 Credits

### Mayday M'Aider Version
- **Creator**: Jean-François Lacasse
- **Brand**: Mayday M'Aider
- **Original Tool**: Programme d'aide aux médecins du Québec
- **Adaptation (2020)**: Rachel Thibeault, Ph.D.
- **Aviation Adaptation (2025)**: Jean-François Lacasse
- **Digital Development**: Built with ❤️ by SweetBot

### Check Your Lights Versions
- **Concept**: Aviation-themed mental health awareness
- **Development**: Claude Code
- **SweetBOS Integration**: Complete design system implementation

---

## 📄 License

This project is provided for mental health awareness and education.

**Mayday M'Aider content** © 2025 Jean-François Lacasse
**SweetBOS branding** © SweetBot
**Original assessment framework** adapted with permission from Programme d'aide aux médecins du Québec

---

## 🚀 Next Steps

### For Jean-François (Dec 11 Launch)
1. Review Mayday version: `MAYDAY_README.md`
2. Test on your phone
3. Provide feedback on translations
4. Approve for deployment
5. Create QR code for keynote

### For Developers
1. Choose your version
2. Read specific documentation
3. Customize as needed
4. Deploy to hosting
5. Share with users!

### For All Users
1. Clone repository
2. Install dependencies
3. Run development server
4. Test all three versions
5. Choose the one that fits your needs

---

**Three tools, one goal: Better mental health awareness through aviation metaphors.** ✈️

*Need help? Check the specific README for your version or open an issue on GitHub.*
