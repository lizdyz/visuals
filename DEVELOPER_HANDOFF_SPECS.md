# DEVELOPER HANDOFF - DECEMBER 11 DASHBOARD BUILD
*Complete specifications for Wisdom*

## PROJECT OVERVIEW

**Project Name:** Le Tableau de Bord / Check Your Lights Digital Assessment
**Client:** Jean-François Lacasse (Mayday M'Aider)
**Launch Date:** December 11, 2025 (live keynote debut)
**Timeline:** 16 days from Nov 25
**Primary Goal:** Working mobile-first assessment that captures emails

---

## RECOMMENDED APPROACH: OPTION C (PHASED)

### Phase 1 (December 1-11): Simple MVP
Build minimal viable version with aviation LANGUAGE only, zero visual theming.

### Phase 2 (January): Add aviation visual layer as optional feature

### Phase 3 (February): A/B test both versions, let data decide primary

**This document covers Phase 1 specifications.**

---

## TECHNICAL REQUIREMENTS

### Platform
- Mobile-first responsive design
- Works on iOS Safari, Android Chrome
- Progressive Web App (PWA) optional but nice to have
- No app store deployment needed

### Performance
- Load time: <3 seconds on 4G
- Works offline after initial load (optional)
- Minimal external dependencies
- Optimized images/assets

### Browser Support
- iOS Safari 14+
- Android Chrome 90+
- Desktop Chrome, Firefox, Safari (secondary)

### Hosting
- TBD (recommend Vercel, Netlify, or similar)
- SSL required
- Custom domain TBD (short URL for keynote QR code)

---

## USER FLOW

### Entry Point
1. User scans QR code at keynote OR clicks link
2. Lands on welcome screen
3. Reads brief instructions
4. Begins assessment

### Assessment Flow
1. See all 44 indicators organized by zone
2. Check any/all that apply
3. Submit when complete
4. See results (dominant zone + strategies)
5. Optional: Enter email for monthly reminders

### Exit Points
- Download/screenshot results (optional)
- Share on social (optional for Phase 2)
- Return to check monthly (via email link)

---

## SCREEN-BY-SCREEN SPECIFICATIONS

### SCREEN 1: Welcome/Instructions

**Purpose:** Set context, explain how to use

**Content (French - English optional for Dec 11):**

**Headline:** 
"COMMENT FAIRE LA LECTURE DE SON TABLEAU DE BORD ?"

**Body Text:**
"La lecture de son tableau de bord est primordiale pour sa santé psychologique. Prendre le temps de s'arrêter et de vérifier comment l'on se sent constitue un bon point de départ pour prendre soin de sa santé."

**Instructions Box:**
"Comment utiliser cet outil :"
1. Pensez aux 2 dernières semaines
2. Cochez chaque indicateur qui vous correspond
3. Vous pouvez cocher dans plusieurs zones - c'est normal
4. L'outil identifiera votre zone principale automatiquement

**CTA Button:** "COMMENCER LA VÉRIFICATION" (Start Check)

**Design Notes:**
- Clean, minimal design
- Use brand colors if available (TBD)
- Airplane icon/logo at top (provided by client)
- Mobile-optimized text size
- Single column layout

---

### SCREEN 2: Assessment (Core Interaction)

**Layout Options:**

**OPTION A (Recommended for mobile):**
Vertical scroll, one zone at a time with clear visual separation

**OPTION B:**
All zones visible, accordion-style (tap to expand each zone)

**OPTION C:**
Paginated (one zone per screen with progress indicator)

**Recommendation:** Option A for simplicity and mobile UX

**Structure:**

For each zone (4 total):

```
[COLOR INDICATOR] 🟢/🟡/🟠/🔴
ZONE NAME: EN SANTÉ / EN RÉACTION / FRAGILISÉ(E) / EN ÉTAT CRITIQUE
Action: JE CONTINUE! / JE FAIS ATTENTION! / J'AGIS! / JE M'ARRÊTE!

SIGNES:
☐ Indicator 1
☐ Indicator 2
☐ Indicator 3
[... all 11 indicators as checkboxes]

[Divider line]
```

**Interaction:**
- Tap checkbox to check/uncheck
- Multiple selections allowed
- No validation (can check zero items)
- Checkboxes persist if user scrolls away and returns

**Visual Design:**
- Color-code each zone section with header bar
- Use clear checkbox UI (not tiny)
- Ensure adequate tap targets (44px minimum)
- Visual separator between zones
- Sticky submit button at bottom

**Bottom Section:**
- Submit button: "VOIR MES RÉSULTATS" (See My Results)
- Small disclaimer text: "Ceci n'est pas un outil diagnostic. Pour une évaluation professionnelle, consultez un professionnel de la santé."

---

### SCREEN 3: Results

**Purpose:** Show dominant zone and strategies

**Layout:**

**Header:**
"VOTRE STATUT: [ZONE NAME]"
Examples:
- "VOTRE STATUT: EN SANTÉ" (green background)
- "VOTRE STATUT: EN RÉACTION" (yellow background)
- "VOTRE STATUT: FRAGILISÉ(E)" (orange background)
- "VOTRE STATUT: EN ÉTAT CRITIQUE" (red background)

**Subheader:**
"Vous avez coché:
🟢 X indicateurs verts
🟡 X indicateurs jaunes  
🟠 X indicateurs oranges
🔴 X indicateurs rouges

Votre zone principale est: [COLOR] [ZONE NAME]"

**Strategies Section:**
"STRATÉGIES RECOMMANDÉES:"
[List strategies for their zone - see content doc]

**Optional (if not crisis):**
"CHOISISSEZ 1-3 ACTIONS À ESSAYER:"
☐ Strategy 1
☐ Strategy 2
☐ Strategy 3
[etc.]

**Email Capture (if not crisis):**
"Recevez un rappel mensuel pour vérifier vos lumières:"
[Email input field]
[Submit button: "M'INSCRIRE"]
[Checkbox: "J'accepte de recevoir des rappels mensuels"]

**If Crisis Indicator Checked:**
Override normal results screen with:

**CRISIS SCREEN:**
[Red background]
"VOUS AVEZ INDIQUÉ UN INDICATEUR DE CRISE"

"Vous avez coché un signe qui peut indiquer une situation de crise en santé mentale. Cet outil ne peut pas évaluer la gravité de votre situation, mais il est très important de parler à un professionnel ou un service de crise rapidement."

**RESSOURCES:**
- Ligne québécoise de prévention du suicide: 1-866-APPELLE (1-866-277-3553)
- Info-Social 811
- Urgence: 911

[Button: "J'AI BESOIN D'AIDE MAINTENANT"]
[Button: "VOIR MES RÉSULTATS COMPLETS"]

---

### SCREEN 4: Thank You / Next Steps (Optional)

After email submitted:

"MERCI!"

"Vous recevrez un rappel mensuel pour vérifier vos lumières.

En attendant, n'oubliez pas d'appliquer 1-3 stratégies que vous avez choisies."

[Button: "TERMINER"]

---

## SCORING LOGIC

### Simple Counting Algorithm

```javascript
// Pseudocode
function calculateZone(checkedIndicators) {
  // Initialize counters
  let greenCount = 0;
  let yellowCount = 0;
  let orangeCount = 0;
  let redCount = 0;
  let crisisChecked = false;
  
  // Count indicators per zone
  checkedIndicators.forEach(indicator => {
    if (indicator.zone === 'green') greenCount++;
    if (indicator.zone === 'yellow') yellowCount++;
    if (indicator.zone === 'orange') orangeCount++;
    if (indicator.zone === 'red') redCount++;
    
    // Check for crisis indicator
    if (indicator.isCrisis === true) {
      crisisChecked = true;
    }
  });
  
  // Crisis override
  if (crisisChecked) {
    return {
      zone: 'red',
      isCrisis: true,
      counts: { green: greenCount, yellow: yellowCount, orange: orangeCount, red: redCount }
    };
  }
  
  // Find max count
  const maxCount = Math.max(greenCount, yellowCount, orangeCount, redCount);
  
  // Handle no selections
  if (maxCount === 0) {
    return {
      zone: 'none',
      counts: { green: 0, yellow: 0, orange: 0, red: 0 }
    };
  }
  
  // Determine dominant zone (tie-breaker: more severe wins)
  if (redCount === maxCount) return { zone: 'red', counts: {...} };
  if (orangeCount === maxCount) return { zone: 'orange', counts: {...} };
  if (yellowCount === maxCount) return { zone: 'yellow', counts: {...} };
  return { zone: 'green', counts: {...} };
}
```

### Tie-Breaker Rule
If counts are equal between zones, choose more severe:
**Red > Orange > Yellow > Green**

### Crisis Indicator
Only **ONE** indicator is marked as crisis:
- French: "Anxiété constante, dépression, idées suicidaires" (Red Zone #1)
- English: "Excessive anxiety, depression or suicidal thoughts" (Red Zone #1)

If checked → Override all other results → Show crisis screen

---

## DATA STRUCTURE

### Indicators JSON Structure

```json
{
  "zones": [
    {
      "id": "green",
      "name_fr": "EN SANTÉ",
      "name_en": "HEALTHY",
      "action_fr": "JE CONTINUE!",
      "action_en": "I CONTINUE!",
      "color": "#00A86B",
      "indicators": [
        {
          "id": "green_1",
          "text_fr": "Être posé(e), calme",
          "text_en": "Calm and steady",
          "isCrisis": false
        },
        // ... 10 more indicators
      ],
      "strategies": [
        {
          "text_fr": "Maintenir ses activités, avoir une routine",
          "text_en": "Maintain current activities"
        },
        // ... more strategies
      ]
    },
    // ... 3 more zones
  ]
}
```

**CRITICAL:** Red zone indicator #1 must have `"isCrisis": true`

---

## EMAIL CAPTURE

### Requirements
- Capture email address
- Capture consent checkbox
- Store in database with:
  - Email
  - Zone result
  - Timestamp
  - Indicator counts
  - Language preference
  - Consent status

### Integration Options
**Option 1:** Direct Mastermind.com API integration (if API available)
**Option 2:** Export CSV for manual import
**Option 3:** Webhook to Zapier/Make → Mastermind.com
**Option 4:** Store in own database, sync later

**Recommendation:** Start with Option 3 or 4 for speed, migrate to Option 1 later

### Email Validation
- Basic format check (contains @, valid domain)
- No verification email required for MVP
- Store even if invalid for follow-up

---

## ANALYTICS & TRACKING

### Required Metrics (December 11)
- Total visits (unique + returning)
- Started assessment (reached Screen 2)
- Completed assessment (reached results)
- Email capture rate
- Time to complete
- Zone distribution (% in each color)
- Crisis indicator rate
- Drop-off points (where do people abandon?)

### Recommended Tool
- Google Analytics 4 (free, easy)
- Or Mixpanel (more detailed)
- Or custom event logging

### Critical Events to Track
```javascript
// Event: page_view (automatic)
// Event: assessment_started
// Event: assessment_completed
// Event: email_captured
// Event: crisis_detected
// Event: zone_result (properties: zone, counts)
```

---

## DESIGN SPECIFICATIONS

### Colors (Phase 1 - Minimal)
- Green zone: #00A86B or similar
- Yellow zone: #FFD700 or similar
- Orange zone: #FF8C00 or similar
- Red zone: #DC143C or similar
- Background: White or light gray
- Text: Dark gray or black
- Buttons: Blue or brand color (TBD)

### Typography
- Sans-serif font (system fonts for speed)
- Heading: 24-28px, bold
- Body: 16-18px, regular
- Small text: 14px

### Spacing
- Generous padding around touch targets
- Minimum 44px tap target size
- Clear visual separation between zones
- White space between elements

### Mobile Optimization
- Single column layout
- No horizontal scrolling
- Sticky submit button
- Large, tappable checkboxes
- Readable text without zooming

---

## CONTENT FILES TO USE

All content extracted and provided in:
`DASHBOARD_COMPLETE_CONTENT.md`

**French version is primary for December 11 launch.**
English version optional (can add post-launch).

---

## TESTING CHECKLIST

### Before December 11

**Functional Testing:**
☐ All 44 checkboxes work
☐ Scoring logic correct for all combinations
☐ Crisis indicator triggers properly
☐ Email capture functional
☐ Form submission works
☐ Results display correctly
☐ No console errors

**Device Testing:**
☐ iPhone (Safari)
☐ Android (Chrome)
☐ iPad (optional)
☐ Desktop (secondary)

**Edge Cases:**
☐ Zero indicators checked
☐ All indicators checked
☐ Only crisis indicator checked
☐ Tie scenarios (equal counts)
☐ Invalid email format
☐ No consent checkbox

**Performance:**
☐ Loads under 3 seconds
☐ Smooth scrolling
☐ No lag on checkbox interactions
☐ Works on slower connections

---

## DEPLOYMENT

### QR Code Requirements
- Generate short URL (bit.ly or custom domain)
- QR code must be high resolution for printing
- Test QR code before keynote
- Provide multiple formats (PNG, SVG)

### Backup Plan
- Paper version available at keynote
- Instructions for manual data entry if system fails
- Contact info for technical support during event

### Launch Checklist
☐ Domain/URL configured
☐ SSL certificate active
☐ QR code generated and tested
☐ Analytics configured
☐ Email capture working
☐ Crisis resources verified (phone numbers correct)
☐ Mobile testing complete
☐ Backup plan ready

---

## POST-LAUNCH

### Monitoring (December 11)
- Real-time analytics dashboard open during keynote
- Monitor for errors/crashes
- Track completion rates
- Be ready for quick fixes

### Data Collection
- Export all results after keynote
- Analyze zone distribution
- Review completion rates
- Collect qualitative feedback

### Iteration Plan
- Week of Dec 16: Fix any bugs found
- January: Add email reminder system
- January: Consider aviation visual layer
- February: A/B test if warranted

---

## OPEN QUESTIONS FOR CLIENT

1. **Branding assets:**
   - Logo files?
   - Brand colors (hex codes)?
   - Any specific fonts?

2. **Domain/hosting:**
   - Custom domain desired?
   - Who manages hosting?
   - SSL certificate?

3. **Email system:**
   - Mastermind.com API access?
   - Preferred integration method?
   - Monthly reminder email copy?

4. **Crisis resources:**
   - Verify Quebec crisis hotline numbers
   - Any specific resources to include?

5. **Analytics:**
   - Existing Google Analytics account?
   - Access needed?

6. **Post-launch:**
   - Who handles data exports?
   - Frequency of data analysis?

---

## TIMELINE

### Recommended Schedule (16 days)

**November 25-26 (2 days):**
- Review specs with client
- Finalize design decisions
- Gather branding assets
- Set up development environment

**November 27-December 1 (5 days):**
- Build core assessment interface
- Implement scoring logic
- Create results screens
- Set up crisis protocols

**December 2-5 (4 days):**
- Email capture integration
- Analytics setup
- Mobile optimization
- Testing on devices

**December 6-9 (4 days):**
- Bug fixes
- Edge case testing
- Performance optimization
- QR code generation

**December 10 (1 day):**
- Final testing
- Deploy to production
- Verify QR code works
- Backup plan ready

**December 11:**
- **LAUNCH DAY**
- Monitor in real-time
- Be available for issues

---

## NICE-TO-HAVES (Post-MVP)

If time allows or for January iteration:

- Download results as PDF
- Share results on social (pre-filled text)
- Progress bar during assessment
- Animations on results reveal
- Comparison to previous checks (if repeat user)
- Tips/explanations for each indicator
- Multi-language toggle (French/English)
- Dark mode
- Keyboard navigation
- Screen reader optimization

---

## TECHNICAL STACK RECOMMENDATIONS

**Frontend:**
- React (for flexibility and JF already familiar)
- Or vanilla HTML/CSS/JS (fastest for MVP)
- Tailwind CSS (utility-first styling)

**Backend:**
- Node.js + Express (simple API)
- Or serverless functions (Vercel/Netlify)
- PostgreSQL or MongoDB (data storage)
- Or Airtable (quick MVP database)

**Hosting:**
- Vercel (recommended - easy deploys)
- Or Netlify
- Or traditional hosting

**Email:**
- Webhook to Zapier → Mastermind.com
- Or direct API if available
- Or store in DB for manual sync

---

## BUDGET CONSIDERATIONS

Client mentioned **$1,000-$2,000 available** for development assistance if needed.

**Cost breakdown if outsourcing parts:**
- Design: $200-500
- Development: $500-1,000  
- Testing: $100-200
- Deployment: $50-100
- Buffer: $150-350

**Free/cheap tools:**
- Hosting: Vercel (free tier)
- Database: Airtable (free tier) or Supabase (free tier)
- Analytics: Google Analytics (free)
- Email: Zapier (free tier) or Make (free tier)

---

## SUCCESS CRITERIA

### December 11 Launch Success:
✅ Zero critical bugs
✅ >80% completion rate (of those who start)
✅ >50% email capture rate
✅ <3 second load time
✅ Works flawlessly on iPhone + Android
✅ Crisis protocol functions correctly
✅ Jean-François can demo it confidently

### January Success:
✅ >30% monthly return rate
✅ Email reminders sending automatically
✅ Basic analytics dashboard for JF
✅ Feedback collected for improvements

---

## CONTACT & SUPPORT

**During development:**
- Elizabeth Dykes (project manager)
- Jean-François Lacasse (client/content)

**During launch (Dec 11):**
- Wisdom (developer) - be available for real-time issues
- Have backup contact method if main fails

---

*This spec represents the complete handoff for Phase 1 (Simple MVP). Refer to DREAM_TEAM_ANALYSIS.md for context on phased approach and DASHBOARD_COMPLETE_CONTENT.md for all indicators/strategies content.*
