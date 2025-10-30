# SweetDrop Email Style Guide

**Last Updated:** October 30, 2025
**Purpose:** Complete reference for building SweetDrop newsletter emails

---

## 📧 Email Structure (Standard Order)

1. **Header** - SweetDrop branding with issue number
2. **Strategic Snapshot** - Personal story → strategic insight
3. **Quote Section** - Pull quote with gradient background
4. **Journey/Co-Evolution Stage** - Visual progress indicator (4 stages)
5. **Framework Spotlight** - Featured framework (OCDA, Gestalt, 5Ps, etc.)
6. **Tool of the Month** - Practical prompt/exercise with copy-paste sections
7. **Compliance Corner** - Canadian regulatory guidance
8. **BizzyBot Wisdom** - 3 quotes from different bots
9. **Human Connection** - Agency, Discernment, Flourishing
10. **Before I Let You Go** - Personal closing from Liz
11. **Your Next Move** - Clear action steps
12. **Edition Level Check** - Starter vs Advanced options
13. **Worth Sharing** - Forward prompt
14. **Footer** - Legal, contact, unsubscribe

---

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#1e3c72` → `#2a5298` (gradient)
- **Purple Quote Background:** `#667eea` → `#764ba2`
- **Green (Tools):** `#e8f5e9` border-left `#4caf50`
- **Yellow (Compliance):** `#fff3cd` or `#fff8e1` border-left `#e67e22` or `#ff9800`
- **Light Blue (Stages):** `#f0f8ff`
- **Gray Background:** `#f8f9fa`
- **Red Highlight:** `#e74c3c` (for key insights)

### Layout
- **Container Width:** 600px
- **Border Radius:** 12px (cards), 8px (inner boxes)
- **Box Shadow:** `0 4px 6px rgba(0,0,0,0.07)` on white cards
- **Padding:** 35px (desktop), 20px (mobile class="content")
- **Font:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

### Typography
- **H1 (Header):** 42px, white, font-weight 700
- **H2 (Section Titles):** 28px, #1e3c72, font-weight 600
- **H3 (Subsections):** 24px, varies by section
- **Body Text:** 16px, #2c3e50, line-height 1.7
- **Signature:** 16px italic, #666

### Mobile Styles
```css
@media screen and (max-width: 600px) {
  .mobile-hide { display: none !important; }
  .mobile-center { text-align: center !important; }
  .container { width: 100% !important; }
  .content { padding: 20px !important; }
  h1 { font-size: 28px !important; }
  h2 { font-size: 22px !important; }
  h3 { font-size: 20px !important; }
}
```

---

## ✍️ Writing Style & Tone

### Strategic Snapshot Pattern
1. **Opening:** Personal story or recent observation (2-3 paragraphs)
2. **Context:** What I thought vs. what actually happened
3. **Insight Build:** Connecting the dots (2-3 paragraphs)
4. **Key Insight:** Bold statement, often in red `color: #e74c3c`
5. **Strategic Lesson:** Broader application (1-2 paragraphs)
6. **Signature:** `— Liz`

### Voice Guidelines
- **Conversational but precise** - like talking to a colleague, not teaching a student
- **Story-driven** - always starts with a real experience
- **No fluff** - every sentence has purpose
- **Canadian context** - references CIRO, AMF, CSA
- **Honest about mistakes** - "I thought X, but actually Y"
- **Challenges assumptions** - "We've been taught... But the opposite is often true"

### Red Highlight Formula
Use red (`color: #e74c3c; font-weight: 600;`) for the ONE sentence that captures the core insight:
- "Clarity isn't a preference — it's the difference between momentum and rework."
- "Most of what we call 'urgent' is just proximity bias."
- "You don't need a Fortune 500 company to think like one."
- "Clarity compounds. Confusion multiplies problems."

---

## 📬 Subject Line Formula

**Pattern:** `SweetDrop Issue [#]: [Problem/Hook]. [Consequence]. [Reframe].`

**Examples:**
- `Beautiful Tools. Broken Systems. Let's Fix That.`
- `Proximity Is The Enemy Of Insight. Step Back.`
- `Too Many Roles. Not Enough Reflection. Step Out of the Center.`
- `Stop Trying to Be Your Own Board of Directors`
- `You Can't See Opportunities If You Haven't Named What You're Aiming For`

**Key Traits:**
- 3 short punchy phrases (or 2-3 sentences)
- Problem → Consequence → Solution
- Direct and slightly provocative
- No questions (statements only)

---

## 🧠 Framework Examples

### Co-Evolution Stages (Always Visual)
```
🔍 Explore → 🎯 Attune → ⚙️ Integrate → 🔄 Recalibrate
```
One stage highlighted with `background-color: #1e3c72` and white text.

### OCDA (4-box grid)
- 👁️ **OBSERVE** - Notice friction
- ⚖️ **CHOOSE** - Decide: people or system problem?
- ⚡ **DECIDE** - Pick ONE thing
- 🎯 **ACT** - Test, learn, iterate

### Gestalt (3-column or 3-row)
- 📚 **PAST** - What patterns need breaking?
- ⚡ **PRESENT** - What's the current friction?
- 🚀 **FUTURE** - What's trying to emerge?

### 5Ps
- 🎯 **PURPOSE** - Why you do this work
- 👥 **PEOPLE** - Who you serve best
- ⚙️ **PROCESS** - Your methods
- 📦 **PRODUCT** - Client experience
- 💰 **PROFIT** - Sustainable growth

### Personal Board of Directors (5 roles)
- 🪞 **THE MIRROR** - Shows blind spots
- ⚡ **THE CHALLENGER** - Questions assumptions
- ⚓ **THE ANCHOR** - Grounds in values
- 🏗️ **THE ARCHITECT** - Structures next steps
- 🎲 **THE WILDCARD** - Lateral thinking

---

## 🛠️ Tool of the Month Structure

**Standard Format:**
```markdown
🛠️ Tool of the Month: [Name]

**Use Class:** Internal Only (or Client-Facing)
**Time Investment:** [X] minutes
**What it solves:** [One-line problem statement]

### Step 1: [Action] ([time])
[Instructions with bullet points or numbered steps]

### Step 2: [Action] ([time])
[Often includes a prompt in a code-style box]

[PROMPT BOX with monospace font, light background]

### Step 3: [Action] ([time])
[What to do with the results]

💡 Pro tip: [Bonus insight]
```

**Prompt Box Styling:**
- Background: `#f5f5f5`
- Border-left: `3px solid [section color]`
- Font: `'Courier New', Courier, monospace`
- Font-size: 13-14px
- Padding: 20-25px
- Border-radius: 6-8px

---

## 🤖 BizzyBot Wisdom

**Format:** 3 bots, color-coded boxes with left border

**Standard Bots:**
- ⚖️ **GROUNDLINK** - `#ff6b6b` or `#e74c3c` - Reality checks
- ⚙️ **BIZBOT** - `#4ecdc4` - Systems strategy
- 💡 **PROMPTMASTER** - `#f39c12` - Execution tactics
- 🎯 **STRATBOT** - `#8b5cf6` - Strategic vision
- 🌱 **LIFEOPTIMIZER** - `#4ecdc4` - Human energy
- 📊 **DATABITS** - varies - Pattern recognition
- 💬 **SWEETBOT** - varies - Definition architect

**Quote Structure:**
```html
<div style="background-color:#fff; border-left:5px solid [COLOR]; padding:25px; border-radius:0 8px 8px 0;">
  <p style="margin:0 0 10px; font-size:18px; font-weight:600;">[EMOJI] [BOT NAME] WISDOM</p>
  <p style="margin:0 0 10px; font-size:20px; font-style:italic; line-height:1.4;">"[Quote]"</p>
  <p style="margin:0; color:#7f8c8d; font-size:14px;">— [Bot Name], [Role]</p>
</div>
```

---

## ⚖️ Compliance Corner

**Canadian Focus:**
- References: CIRO, AMF, CSA, provincial regulators
- Common topics: CRM3, fee disclosure, suitability documentation, evidence trails
- Tone: Practical, not preachy
- Format: Yellow/orange box with border-left accent

**Standard Pattern:**
1. State the regulation/requirement
2. Explain why it matters (not just compliance, but practice improvement)
3. Give ONE actionable approach
4. Connect to the issue's theme

---

## 💜 Human Connection (3 Elements)

Always in this order:
1. **🎯 AGENCY** - You have choice/control
2. **🧠 DISCERNMENT** - Ability to see clearly
3. **🌱 FLOURISHING** - Long-term growth/impact

Each 2-3 sentences, connecting the issue's theme to human capacity.

---

## 👤 Before I Let You Go

**Pattern:**
- 3-5 paragraphs, personal tone
- Brings back the opening story or introduces a related story
- Deepens the strategic insight
- Often asks a question or poses a challenge
- Always signed: `— Liz Dykes` `Founder, SweetBot`

---

## 🎬 Your Next Move

**Format:**
- Clear bulleted action steps (3-5 items)
- "Then hit reply and tell me: [specific question]"
- "I read every response." (optional)

---

## 📧 Technical Details

### Preview Text
Hidden div at top of email, 1px font, shows in inbox preview:
```html
<div style="display:none; font-size:1px; color:#f8f9fa; line-height:1px;
     max-height:0; max-width:0; opacity:0; overflow:hidden;">
  [One-sentence hook that continues the subject line]
</div>
```

### Responsive Tables
Use role="presentation" and cellspacing="0" cellpadding="0" border="0" for all layout tables.

### Accessibility
- Include alt text for emoji in critical spots
- Use semantic HTML where possible
- role="article" on outer div
- Proper heading hierarchy (h1→h2→h3)

---

## 📊 Issue Archive Reference

**Issue 01:** Beautiful Tools / Friction Finder / OCDA
**Issue 02:** Distance Creates Intelligence / Expertise Extraction / Gestalt
**Issue 03:** Personal Board of Directors / Advisory Circle Builder / 5 Board Seats
**Issue 04:** Clarity Compounds / Professional Evolution Timeline / 5Ps
**Issue 05:** One Undeniable Thing / Weekly Evidence Tracking / Gestalt

---

## 🎯 Quick Reference Checklist

Before sending, verify:
- [ ] Strategic Snapshot tells a personal story
- [ ] ONE key insight highlighted in red
- [ ] Pull quote is tweet-worthy
- [ ] Framework is visual and clear
- [ ] Tool has copy-paste prompt in monospace
- [ ] Compliance Corner is Canadian-specific
- [ ] 3 BizzyBot quotes with proper color coding
- [ ] Human Connection has all 3 elements
- [ ] "Before I Let You Go" is signed by Liz
- [ ] Mobile-responsive CSS included
- [ ] Preview text matches subject line theme
- [ ] Footer has legal disclaimer + unsubscribe

---

**For November emails:** Copy this structure, adapt the content, maintain the voice. Keep it personal, practical, and Canadian.
