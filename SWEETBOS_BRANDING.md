# SweetBOS Branded Aviation Dashboard

This document explains the SweetBOS-branded version of the Check Your Lights aviation dashboard.

## 🎨 Brand Integration

### SweetBOS Visual Identity

The branded version incorporates your complete design system:

#### **Color Palette**
```
Primary Blue:    #005A9C  (Trustworthy, Professional)
Primary Purple:  #7B2D8E  (Innovative, Premium)
Accent Cyan:     #00AEEF  (Modern, Tech-Forward)
Success Green:   #28a745  (Positive, Healthy)
Warning Yellow:  #ffc107  (Attention, Caution)
Danger Red:      #dc3545  (Alert, Critical)
Info Cyan:       #17a2b8  (Informative)
```

#### **Typography**
- **Headings**: Oswald (Bold, Impactful, Sans-serif)
- **Body Text**: Lato (Clean, Readable, Professional)
- **Data/Code**: Courier New (Monospace, Technical)

#### **Design Patterns**
- **Card Radius**: 13px (rounded-[13px])
- **Accent Borders**: 8px left border on key cards
- **Shadows**: Layered with color-tinted shadows
- **Backdrop Blur**: Glass morphism throughout
- **Gradient Background**: `linear-gradient(135deg, #005A9C 0%, #7B2D8E 100%)`

## 📦 Files Structure

```
visuals/
├── src/
│   ├── AviationDashboard.jsx           ← Original version (slate theme)
│   ├── AviationDashboardBranded.jsx    ← SweetBOS branded version ⭐
│   ├── main.jsx                        ← Original entry point
│   └── main-branded.jsx                ← Branded entry point ⭐
├── index.html                          ← Original HTML
├── index-branded.html                  ← Branded HTML with fonts ⭐
└── SWEETBOS_BRANDING.md               ← This file
```

## 🚀 Running the Branded Version

### Development
```bash
# Using Vite dev server with branded version
npm run dev -- --config vite.config.js --mode branded

# Or modify vite.config.js to point to index-branded.html
```

### Quick Switch
To use the branded version as default:

1. **Update vite.config.js:**
```js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index-branded.html')
      }
    }
  }
})
```

2. **Or rename files:**
```bash
mv index.html index-original.html
mv index-branded.html index.html
```

## 🎯 Brand Elements Applied

### 1. **Color System**
- ✅ SweetBOS blue gradient background (#005A9C → #7B2D8E)
- ✅ Cyan accent (#00AEEF) for CTAs and highlights
- ✅ Gauge colors map to brand palette
- ✅ Status colors match SweetBOS system (Green #28a745, Yellow #ffc107, Red #dc3545)

### 2. **Typography**
- ✅ Oswald for all headings (H1, H2, buttons, labels)
- ✅ Lato for body text and descriptions
- ✅ Bold uppercase tracking for labels
- ✅ Proper font weight hierarchy (400-700)

### 3. **Component Styling**
- ✅ **Cards**: 13px radius, glass morphism, left accent borders
- ✅ **Buttons**: Oswald font, uppercase, bold, proper shadows
- ✅ **Gauge Needle**: Gradient from cyan to purple (brand colors)
- ✅ **Progress Bar**: Cyan to green gradient
- ✅ **Input Fields**: Backdrop blur, cyan focus rings
- ✅ **Status Badges**: Brand-colored backgrounds

### 4. **Logo Integration**
- ✅ Primary brain logo (from public/images/logo-black-bg.png)
- ✅ SweetBot logo below (from public/images/sweetbot-logo.png)
- ✅ Graceful fallback with branded gradient animation
- ✅ "Powered by SweetBot" footer branding

## 🎭 Visual Differences

| Element | Original | SweetBOS Branded |
|---------|----------|------------------|
| Background | Slate-950 solid | Blue→Purple gradient |
| Primary Color | Sky Blue (#3b82f6) | Cyan (#00AEEF) |
| Accent | Various blues | Purple (#7B2D8E) |
| Headings | Default sans-serif | Oswald (bold) |
| Body Text | System font stack | Lato |
| Button Style | Rounded-2xl | Rounded-[13px] |
| Cards | Dark slate | Glass morphism + gradient |
| Borders | 2px standard | 2px + 8px left accent |
| Shadows | Neutral | Color-tinted (brand) |
| Gauge Needle | Slate gradient | Cyan→Purple gradient |
| Gauge Border | Slate | SweetBOS Blue |
| Tick Marks | White/Slate | Cyan active |
| Status Text | Simple caps | Oswald bold caps |
| Footer | Simple text | "POWERED BY SWEETBOT" |

## 🎨 Design Philosophy

### Original Version
- **Theme**: Minimal, dark, aviation cockpit
- **Feel**: Serious, professional, clinical
- **Target**: General mental health awareness
- **Branding**: Neutral, universal appeal

### SweetBOS Branded Version
- **Theme**: Premium, modern, tech-forward
- **Feel**: Empowering, innovative, supportive
- **Target**: SweetBOS clients and partners
- **Branding**: Strong identity, memorable, polished

## 📱 Brand Consistency

### Matches SweetBOS Design System
- ✅ Color palette exactly matched
- ✅ Typography fonts (Oswald + Lato)
- ✅ Border radius standards (13px, 8px)
- ✅ Gradient backgrounds
- ✅ Glass morphism effects
- ✅ Left-border accent pattern
- ✅ Shadow and glow treatments
- ✅ Badge styling
- ✅ Button treatments
- ✅ Card layouts

### Maintains Aviation Metaphor
- ✅ All 11 gauges with original metaphors
- ✅ Cockpit instrument panel
- ✅ Flight status terminology
- ✅ Pilot-focused language
- ✅ Gauge animations
- ✅ Crisis intervention flow

## 🚁 Use Cases

### When to Use Original Version
- White-label deployments
- Partners who want neutral branding
- General mental health initiatives
- Open-source distributions
- Contexts where brand-agnostic is preferred

### When to Use Branded Version
- SweetBOS platform integration
- Client-facing tools
- Marketing and demos
- SweetBOS workshops
- Branded white-label for clients
- Internal tools

## 🔧 Customization

### To Create Your Own Brand Version

1. **Update Color Constants:**
```jsx
const BRAND_COLORS = {
  primary: '#YOUR_PRIMARY',
  secondary: '#YOUR_SECONDARY',
  accent: '#YOUR_ACCENT',
  // ...
};
```

2. **Change Fonts:**
```html
<!-- In index-branded.html -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

```jsx
// In component
style={{ fontFamily: 'YOUR_FONT, sans-serif' }}
```

3. **Update Gradient:**
```jsx
background: 'linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%)'
```

4. **Logo Paths:**
```jsx
const brainLogoUrl = "/images/YOUR_LOGO.png";
const brandLogoUrl = "/images/YOUR_BRAND.png";
```

## 🎯 Brand Guidelines Met

✅ **Visual Consistency**: Matches SweetBOS HTML docs
✅ **Color Accuracy**: Hex codes exactly matched
✅ **Typography**: Oswald + Lato implemented
✅ **Component Patterns**: Card styles, borders, shadows
✅ **User Experience**: Maintains original functionality
✅ **Accessibility**: All WCAG standards preserved
✅ **Performance**: No impact from branding changes
✅ **Mobile**: Fully responsive with brand integrity

## 📊 Technical Details

### Font Loading
- Uses Google Fonts CDN
- Preconnect for performance
- Display=swap for FOUT prevention
- Weights: Lato (300, 400, 700, 900), Oswald (400-700)

### Color Implementation
- Custom Tailwind classes with brand colors
- Inline styles for gradient backgrounds
- CSS custom properties could be added for easier theming

### Storage Keys
- Branded version uses different localStorage keys
- Prevents conflict between versions
- `cyl_view_branded`, `cyl_index_branded`, `cyl_answers_branded`

### Build Optimization
- Fonts loaded async
- Images optimized
- Same bundle size as original
- No additional dependencies

## 🎉 Result

A premium, branded mental health assessment tool that:
- Maintains all original functionality
- Feels distinctly "SweetBOS"
- Looks professional and polished
- Reinforces brand identity
- Creates memorable user experience
- Builds trust through design consistency

---

**Ready to fly with SweetBOS style!** ✈️

*Powered by SweetBot*
