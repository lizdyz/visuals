# Check Your Lights ✈️

An aviation-themed mental health self-assessment dashboard designed to help individuals check their "instruments" across 11 vital life systems.

![Check Your Lights](./public/images/logo-black-bg.png)

## 🎯 Overview

**Check Your Lights** transforms mental health assessment into an intuitive aviation cockpit experience. Users evaluate 11 critical life systems (sleep, energy, mood, social connection, etc.) using aviation metaphors like "Fuel Gauge" for sleep and "Altimeter" for mood.

### Key Features

- **11 Aviation-Themed Gauges**: Each life system is represented by a familiar cockpit instrument
- **Visual Status System**: Color-coded zones (Green, Yellow, Orange, Red) provide instant feedback
- **Crisis Detection**: Automatic detection and intervention for critical mental health situations
- **Beautiful UI**: Smooth animations, glass morphism effects, and responsive design
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Privacy-First**: All data stored locally, completely anonymous and confidential
- **Mobile-Optimized**: Full touch support with haptic feedback

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd visuals

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Adding Your Logos

Place your logo images in the `public/images/` directory with these filenames:

1. **logo-white-bg.png** - Colorful brain logo with white background (for light mode)
2. **logo-black-bg.png** - Colorful brain logo with black background (for dark mode)
3. **sweetbot-logo.png** - Optional SweetBot branding logo

**Recommended specs:**
- Format: PNG with transparent background
- Size: 400x400px minimum
- Optimized for web (< 100KB)

The app will automatically use these images with graceful fallbacks if they're not present.

## 📊 The 11 Gauges

| Gauge | System | Icon | Assessment |
|-------|--------|------|------------|
| Master Warning | Mental State | 🚨 | Anxiety, depression, dark thoughts |
| Fuel Gauge | Sleep | ⛽ | Sleep quality and patterns |
| RPM Gauge | Energy | ⚡ | Physical energy levels |
| Altimeter | Mood & Attitude | ☁️ | Emotional state and outlook |
| Engine Temp | Physical Health | 🌡️ | Physical symptoms and wellness |
| Comms Radio | Social Connection | 📻 | Social engagement and relationships |
| Compass | Focus & Cognition | 🧭 | Mental clarity and concentration |
| Airspeed | Physical Activity | 📈 | Exercise and movement |
| Artificial Horizon | Work/Life Balance | ⚖️ | Work performance and balance |
| Landing Gear | Self-Confidence | 🛡️ | Self-trust and confidence |
| System Warning | Substance Use | ⚠️ | Substance use patterns |

## 🎮 User Flow

1. **Intro Screen**: Welcome and overview
2. **Safety Check**: Critical mental health screening (Master Warning)
3. **System Tour**: Assess remaining 10 gauges
4. **Results Dashboard**: Visual cockpit showing all systems
5. **Resources**: Crisis support and maintenance reminders

### Crisis Detection

If a user indicates critical mental health concerns (red zone on Master Warning), the app immediately:
- Displays a crisis intervention screen
- Provides direct access to 24/7 crisis hotlines
- Offers clear next steps for professional support

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **TypeScript/JSX** - Type safety

## 🎨 Design System

### Colors

```js
Green (Healthy):    #10b981
Yellow (Caution):   #facc15
Orange (Warning):   #f97316
Red (Critical):     #dc2626
```

### Animations

- Smooth gauge needle transitions (700ms cubic-bezier easing)
- Fade-in effects for content
- Pulse animations for status indicators
- Haptic feedback on mobile devices

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Privacy & Security

- **No server communication**: All data stored in browser localStorage
- **No tracking**: No analytics or third-party scripts
- **Anonymous**: No personal information collected
- **Offline-ready**: Works without internet connection after initial load

## ♿ Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader compatible
- High contrast mode support
- Reduced motion support
- Focus indicators

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🏥 Mental Health Resources

### Crisis Support (Canada)

- **Crisis Line**: 1-866-APPELLE (1-866-277-3553)
- **Talk Suicide Canada**: 1-833-456-4566
- **Kids Help Phone**: 1-800-668-6868

### International

- **USA**: 988 Suicide & Crisis Lifeline
- **UK**: 116 123 (Samaritans)
- **Australia**: 13 11 14 (Lifeline)

## 👥 Credits

**Crafted with ❤️ by SweetBot**

Special thanks to:
- Aviation industry for the inspiring metaphors
- Mental health professionals for guidance
- Open source community

## 📞 Support

For questions or support:
- Open an issue on GitHub
- Contact: [your-email]
- Website: [your-website]

---

**Remember**: This tool is for self-assessment and awareness. It is not a substitute for professional mental health care. If you're struggling, please reach out to a qualified mental health professional.

## 🗺️ Roadmap

- [ ] Multi-language support (French, Spanish)
- [ ] Data export functionality
- [ ] Historical tracking and trends
- [ ] Shareable anonymous results
- [ ] Progressive Web App (PWA) support
- [ ] Integration with mental health resources directory
- [ ] Customizable gauge selection
- [ ] Dark/Light theme toggle

## 📸 Screenshots

### Intro Screen
*Welcoming aviation-themed introduction*

### Gauge Assessment
*Interactive gauge with smooth animations*

### Results Dashboard
*Complete cockpit view of all systems*

### Crisis Intervention
*Immediate support for critical situations*

---

**Fly safe, check your lights regularly.** ✈️
