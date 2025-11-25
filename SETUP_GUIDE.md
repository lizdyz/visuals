# Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- React 18
- Vite (dev server & build tool)
- Tailwind CSS
- Lucide React (icons)
- All necessary dev dependencies

### Step 2: Add Your Logos

Place your logo images in `public/images/`:

1. **logo-white-bg.png** - Your colorful brain logo (white background version)
2. **logo-black-bg.png** - Your colorful brain logo (black background version)
3. **sweetbot-logo.png** - (Optional) SweetBot branding

**Don't have the images yet?** No problem! The app works with beautiful animated fallbacks.

### Step 3: Run the Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:3000` and you're ready to fly! ✈️

---

## 📦 What's Included

```
visuals/
├── public/
│   └── images/          # Place your logos here
├── src/
│   ├── AviationDashboard.jsx  # Main component (100+ improvements!)
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with animations
├── index.html           # HTML shell with meta tags
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind theme (custom animations)
├── postcss.config.js    # PostCSS setup
├── README.md            # Full documentation
├── IMPROVEMENTS.md      # Detailed changelog
└── SETUP_GUIDE.md       # This file
```

---

## 🎯 Key Features You'll See

### 1. **Intro Screen**
- Animated gradient background
- Your logo prominently displayed
- Clear call-to-action
- Privacy indicators

### 2. **Safety Check (Master Warning)**
- Critical mental health screening
- Automatic crisis detection
- Immediate intervention if needed

### 3. **11 Gauge Tour**
- Beautiful animated gauges
- Smooth needle transitions
- Color-coded zones (green → yellow → orange → red)
- Real-time visual feedback
- Haptic feedback on mobile

### 4. **Results Dashboard**
- Complete cockpit view
- Color-coded stats grid
- 11-gauge instrument panel
- Share functionality
- Crisis resources
- Newsletter signup

### 5. **Crisis Intervention** (if triggered)
- Prominent crisis hotline access
- 24/7 support information
- Option to continue or get help

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      // Add your brand colors here
      brand: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### Modify Gauges
Edit the `GAUGES` array in `src/AviationDashboard.jsx` to:
- Change questions
- Adjust zone descriptions
- Reorder gauges
- Add/remove gauges

### Adjust Animations
Modify animation speeds in `tailwind.config.js`:

```js
extend: {
  animation: {
    'fadeIn': 'fadeIn 0.5s ease-out forwards', // Change 0.5s
  }
}
```

---

## 🏗️ Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Cloudflare Pages

---

## 🧪 Testing Checklist

Before deploying, test these scenarios:

- [ ] Desktop browser (Chrome, Firefox, Safari)
- [ ] Mobile browser (iOS Safari, Chrome Mobile)
- [ ] Tablet view
- [ ] Complete a full assessment
- [ ] Trigger crisis mode (select red on Master Warning)
- [ ] Reset functionality
- [ ] Share button (may not work in localhost)
- [ ] Accessibility (keyboard navigation, screen reader)

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
# Vite will automatically try the next available port
# Or specify a different port in vite.config.js
```

### Logos not showing?
1. Check file names match exactly (case-sensitive!)
2. Check files are in `public/images/` not `src/`
3. Clear browser cache and hard reload (Cmd/Ctrl + Shift + R)

### Styles not applying?
```bash
# Rebuild Tailwind
npm run dev
# Or clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?
The component uses JSX with TypeScript-style annotations but doesn't require TypeScript. If you see errors:
- Rename `AviationDashboard.jsx` to `AviationDashboard.tsx`
- Or remove type annotations (`: Type` syntax)

---

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **All Improvements**: See `IMPROVEMENTS.md` (100+ changes!)
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vitejs.dev
- **Lucide Icons**: https://lucide.dev

---

## 🚁 Next Steps

1. **Customize Content**: Update gauge questions and descriptions
2. **Add Your Branding**: Place logos and adjust colors
3. **Test Thoroughly**: Run through all user flows
4. **Deploy**: Build and deploy to your hosting service
5. **Share**: Let people check their lights! ✈️

---

## 💡 Pro Tips

- **Logo Optimization**: Use tools like TinyPNG to compress images
- **Lighthouse Audit**: Run Chrome's Lighthouse for performance insights
- **Analytics**: Add privacy-respecting analytics (Plausible, Fathom)
- **PWA**: Consider adding a service worker for offline support
- **Translations**: Externalize strings for easy i18n

---

**Questions?** Check the README.md or open an issue on GitHub.

**Ready to fly?** Run `npm run dev` and check your lights! ✈️

---

Crafted with ❤️ by SweetBot
