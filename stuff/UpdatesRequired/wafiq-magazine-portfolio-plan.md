# WAFIQ NAWAZ — INTERACTIVE MAGAZINE PORTFOLIO
## Complete Build Plan: "The Editorial Experience"
### Version 2.0 | Direction: LIFE Magazine × Luxury Digital Publication

---

## ⚠️ DIRECTION RESET

Previous direction (Techwear Brutalism) is **REPLACED**.

New direction: **Interactive Editorial Magazine** — warm, cinematic, elegant.
Feels like opening a premium LIFE magazine about a developer.

> "A beautifully crafted interactive magazine documenting the identity,
> work, and creative journey of Wafiq Nawaz."

---

## 1. DESIGN ANALYSIS — LIFE MAGAZINE REFERENCE IMAGE

### What Makes the LIFE Magazine Aesthetic Work:

| Element | What It Is | How to Implement |
|---|---|---|
| **Masthead** | Bold LIFE logo — red square on white | Your initials in a red box, top-left of cover |
| **Cover typography** | Mixed large + small editorial type, some italic | Cormorant Garamond display, DM Serif body |
| **B&W photography** | High contrast, cinematic, full bleed on spreads | Desaturate/filter your project images |
| **Multi-column grid** | 3-col text with pull quotes breaking the grid | CSS Grid, 3 cols on spreads, breaks intentionally |
| **Page numbering** | Small bottom-edge folios | `font-size: 10px` mono at bottom of each spread |
| **Pull quotes** | Large italic text mid-column | `font-size: 2rem` italic Cormorant, indented |
| **Caption text** | Tiny, below images, factual | `font-size: 11px`, muted, spaced letters |
| **Section dividers** | Thin horizontal rules between columns | `border-top: 0.5px solid` |
| **Cover lines** | Short descriptive headline phrases | Right-side of cover, stacked vertically |
| **Paper warmth** | Off-white, slightly warm background | `#F8F5F0` — not pure white |

---

## 2. FINAL AESTHETIC IDENTITY

### Concept: **"The Wafiq Nawaz Issue"**

> Your portfolio IS the magazine. Not inspired by a magazine — it IS one.
> The visitor is a reader. Each section is a spread. Each project is a feature story.
> You are the subject of this issue.

### Personality of This Design:
- **Warm** — paper tones, not sterile white
- **Cinematic** — high-contrast photography, dramatic cropping
- **Tactile** — page flip physics, paper shadow
- **Editorial** — real typographic hierarchy, column structure
- **Quiet confidence** — not loud or flashy; speaks through craft

---

## 3. COLOR SYSTEM — "The Paper Palette"

```css
:root {
  /* ─── Backgrounds ─── */
  --c-paper:        #F8F5F0;   /* Warm paper — primary background */
  --c-paper-dark:   #EDE9E3;   /* Slightly deeper paper for spreads */
  --c-white:        #FDFCFB;   /* Near-white for cover */

  /* ─── Text ─── */
  --c-ink:          #1A1714;   /* Near-black — warm tinted ink */
  --c-ink-mid:      #4A4540;   /* Mid gray for body text */
  --c-ink-muted:    #8A847E;   /* Muted for captions, folios */
  --c-ink-faint:    #C4BFB9;   /* Very faint for rules, dividers */

  /* ─── Accents ─── */
  --c-red:          #C41E1E;   /* LIFE magazine red — masthead */
  --c-red-muted:    #9B2121;   /* Deeper red for hover states */
  --c-gold:         #8B7355;   /* Warm desaturated gold */
  --c-olive:        #5C6145;   /* Olive — secondary accent */

  /* ─── Structural ─── */
  --c-rule:         rgba(26, 23, 20, 0.15); /* Column rules */
  --c-shadow:       rgba(26, 23, 20, 0.12); /* Page shadow */
}
```

---

## 4. TYPOGRAPHY SYSTEM — "The Editorial Stack"

```css
/* ─── Font Imports ─── */
/*
  Google Fonts:
  Cormorant Garamond — Display headlines (editorial serif, dramatic, luxurious)
  DM Serif Display  — Section titles (confident, large-scale serif)
  Lora              — Body text (comfortable, readable, bookish)
  Libre Baskerville — Pull quotes (authoritative, classic)
  JetBrains Mono    — Captions, folios, metadata (technical footnotes)
*/

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Serif+Display:ital@0;1&family=Lora:ital,wght@0,400;0,500;1,400&family=Libre+Baskerville:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@300;400&display=swap');

:root {
  --font-display:   'Cormorant Garamond', Georgia, serif;
  --font-heading:   'DM Serif Display', Georgia, serif;
  --font-body:      'Lora', Georgia, serif;
  --font-quote:     'Libre Baskerville', Georgia, serif;
  --font-meta:      'JetBrains Mono', monospace;
}
```

### Typographic Scale (Magazine):
```css
/* Cover Masthead */
.masthead        { font: 700 clamp(60px, 12vw, 120px)/1 var(--font-display); }

/* Cover Headline */
.cover-headline  { font: 300 clamp(32px, 6vw, 64px)/1.1 var(--font-display); }

/* Section Titles (spread headers) */
.spread-title    { font: italic 400 clamp(48px, 8vw, 96px)/1 var(--font-heading); }

/* Pull Quotes */
.pull-quote      { font: italic 400 clamp(22px, 3vw, 32px)/1.35 var(--font-quote); }

/* Article Body */
.body-text       { font: 400 clamp(14px, 1.2vw, 16px)/1.75 var(--font-body); }

/* Caption Text */
.caption         { font: 300 11px/1.5 var(--font-meta); letter-spacing: 0.08em; }

/* Folio (page numbers) */
.folio           { font: 300 10px/1 var(--font-meta); letter-spacing: 0.2em; }

/* Cover Lines */
.cover-line      { font: 600 clamp(14px, 1.8vw, 18px)/1.2 var(--font-display); }
```

---

## 5. TECH STACK

```
Framework:        Next.js 14 (App Router)
Styling:          Tailwind CSS + custom CSS variables
Animations:       Framer Motion
Page Flip:        react-pageflip
Scroll:           @studio-freight/lenis (smooth scroll)
Advanced FX:      GSAP + ScrollTrigger (optional, for cover parallax)
Icons:            Phosphor Icons
Contact form:     React Hook Form + Resend (email API)
Deployment:       Vercel
```

### Installation:
```bash
npx create-next-app@latest wafiq-portfolio --typescript --tailwind --app
cd wafiq-portfolio

npm install framer-motion
npm install react-pageflip
npm install @studio-freight/lenis
npm install gsap
npm install react-hook-form
npm install @phosphor-icons/react
```

---

## 6. PROJECT FILE STRUCTURE

```
wafiq-portfolio/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, lenis smooth scroll
│   ├── page.tsx            ← Magazine container + page flip logic
│   └── globals.css         ← CSS variables, base styles, typography
│
├── components/
│   ├── magazine/
│   │   ├── MagazineViewer.tsx     ← Main page flip container
│   │   ├── Spread.tsx             ← Single spread wrapper
│   │   └── PageNav.tsx            ← Left/right page arrows + spread counter
│   │
│   ├── spreads/
│   │   ├── SpreadCover.tsx        ← SPREAD 1: Magazine cover
│   │   ├── SpreadContents.tsx     ← SPREAD 2: Table of contents
│   │   ├── SpreadAbout.tsx        ← SPREAD 3: About me feature
│   │   ├── SpreadSkills.tsx       ← SPREAD 4: Skills editorial
│   │   ├── SpreadProjects.tsx     ← SPREAD 5–6: Project features
│   │   ├── SpreadExperience.tsx   ← SPREAD 7: Experience timeline
│   │   └── SpreadContact.tsx      ← SPREAD 8: Contact / back cover
│   │
│   ├── overlays/
│   │   ├── ProfileCard.tsx        ← Click-on-portrait overlay
│   │   └── ProjectOverlay.tsx     ← Click-on-project detail overlay
│   │
│   └── ui/
│       ├── MastheadLogo.tsx       ← "WN" red-box masthead
│       ├── ColumnRule.tsx         ← Thin vertical divider between columns
│       ├── PullQuote.tsx          ← Styled italic pull quote block
│       ├── Caption.tsx            ← Image caption component
│       ├── Folio.tsx              ← Page number component
│       └── CoverLine.tsx          ← Cover line text unit
│
├── hooks/
│   ├── usePageFlip.ts      ← Page flip state management
│   └── useLenis.ts         ← Smooth scroll init
│
├── lib/
│   └── magazine-data.ts    ← All content (projects, skills, etc.)
│
└── public/
    ├── images/
    │   ├── portrait.jpg    ← Your photo (B&W recommended)
    │   ├── project-*.jpg   ← Project screenshots/mockups
    │   └── texture.png     ← Subtle paper grain texture
    └── fonts/              ← (if self-hosting)
```

---

## 7. SPREAD-BY-SPREAD BUILD SPECS

---

### SPREAD 1: THE COVER

**Reference:** LIFE magazine cover — bold masthead, full-bleed image, cover lines.

```
┌─────────────────────────────────────────────────────┐
│  [WN]  VOLUME I  ·  2026          THE DEVELOPER ISSUE│
│  ─────────────────────────────────────────────────── │
│                                                       │
│  ████████████████████████   FULL-STACK           │
│  ████████████████████████   DEVELOPER            │
│  ████                                             │
│  ████   [LARGE                   BUILDING         │
│  ████    B&W                     FOR THE          │
│  ████    PORTRAIT]               FUTURE           │
│  ████████████████████████                         │
│  ████████████████████████   WAFIQ                 │
│  ████████████████████████   NAWAZ                 │
│  ████████████████████████                         │
│             BENGALURU, INDIA · 2026               │
└─────────────────────────────────────────────────────┘
```

**Component:** `SpreadCover.tsx`

```tsx
export default function SpreadCover() {
  return (
    <div className="spread-cover">

      {/* Top bar — magazine header strip */}
      <header className="cover-header">
        <MastheadLogo />
        <span className="cover-issue-info">VOLUME I · 2026 · THE DEVELOPER ISSUE</span>
        <span className="cover-price">OPEN TO WORK</span>
      </header>

      {/* Full-bleed portrait */}
      <div className="cover-image-container">
        <img
          src="/images/portrait.jpg"
          alt="Wafiq Nawaz"
          className="cover-portrait"
        />
        {/* Subtle grain overlay */}
        <div className="paper-grain-overlay" />
      </div>

      {/* Cover lines — right side, stacked */}
      <aside className="cover-lines">
        <CoverLine label="FEATURE" text="Full-Stack Developer from Bengaluru" />
        <CoverLine label="INSIDE" text="React · Python · FastAPI · Security" />
        <CoverLine label="STORY" text="Building secure, scalable web apps" />
        <CoverLine label="PLUS" text="12+ projects · Available for internship" />
      </aside>

      {/* Name — large, bottom-left like LIFE's cover subject */}
      <div className="cover-name-block">
        <h1 className="cover-name">
          <span>WAFIQ</span>
          <span className="cover-name-italic">Nawaz</span>
        </h1>
        <p className="cover-location">Bengaluru, India</p>
      </div>

      {/* Bottom folio strip */}
      <footer className="cover-footer">
        <Folio page={1} total={16} />
        <span className="cover-tagline">wafiqnawaz.vercel.app</span>
        <div className="cover-barcode-minimal" />
      </footer>

    </div>
  );
}
```

**CSS for Cover:**
```css
.spread-cover {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--c-white);
  overflow: hidden;
  display: grid;
  grid-template-rows: 52px 1fr 80px;
}

.cover-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 0.5px solid var(--c-rule);
  z-index: 10;
}

.cover-issue-info {
  font: 300 10px/1 var(--font-meta);
  letter-spacing: 0.2em;
  color: var(--c-ink-muted);
  text-transform: uppercase;
}

.cover-image-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.cover-portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  filter: grayscale(30%) contrast(1.1) brightness(0.92);
}

/* Warm paper grain — subtle realism */
.paper-grain-overlay {
  position: absolute;
  inset: 0;
  background-image: url('/images/texture.png');
  background-size: 200px 200px;
  opacity: 0.04;
  mix-blend-mode: multiply;
  pointer-events: none;
}

.cover-lines {
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 180px;
}

.cover-name-block {
  position: absolute;
  bottom: 90px;
  left: 2.5rem;
  z-index: 10;
}

.cover-name {
  font: 300 clamp(48px, 8vw, 80px)/0.95 var(--font-display);
  color: var(--c-white);
  text-shadow: 0 2px 20px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
}

.cover-name-italic {
  font-style: italic;
  font-weight: 300;
}

.cover-footer {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  height: 44px;
  background: var(--c-ink);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 10;
}

.cover-tagline {
  font: 300 10px/1 var(--font-meta);
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.2em;
}
```

---

### SPREAD 2: TABLE OF CONTENTS

**Reference:** LIFE magazine contents pages — thumbnail grid, issue overview.

```
┌──────────────────┬──────────────────────────────────┐
│                  │  IN THIS ISSUE                   │
│  CONTENTS        │  ─────────────────────────────   │
│                  │  03  ABOUT ME                    │
│  [small portrait │      Developer, student, builder  │
│   thumbnail]     │                                  │
│                  │  04  TECHNICAL SKILLS             │
│  [Editor's note  │      React, Python, FastAPI, etc. │
│   1 paragraph]   │                                  │
│                  │  06  FEATURED PROJECTS            │
│                  │      12+ live deployments         │
│                  │                                  │
│                  │  08  EXPERIENCE                   │
│                  │      Timeline of work             │
│                  │                                  │
│                  │  10  CONTACT                     │
│                  │      Let's build something        │
└──────────────────┴──────────────────────────────────┘
```

**Component:** `SpreadContents.tsx`
```tsx
const contents = [
  { page: "03", section: "ABOUT ME", desc: "Developer, student, builder from Bengaluru" },
  { page: "04", section: "TECHNICAL SKILLS", desc: "React, Python, FastAPI, Security, AI/ML" },
  { page: "06", section: "FEATURED PROJECTS", desc: "12+ live deployments, production apps" },
  { page: "08", section: "EXPERIENCE", desc: "Internships, freelance, open source" },
  { page: "10", section: "CONTACT", desc: "Available for Summer 2026 internship" },
];

export default function SpreadContents() {
  return (
    <div className="spread-contents">
      <div className="contents-left">
        <div className="contents-title-block">
          <span className="spread-label">ISSUE NO. 01</span>
          <h2 className="spread-title">CON<br/>TENTS</h2>
        </div>

        <div className="editor-portrait">
          <img src="/images/portrait.jpg" alt="Wafiq Nawaz" />
          <Caption>Wafiq Nawaz, 2026</Caption>
        </div>

        <div className="editors-note">
          <span className="note-label">EDITOR'S NOTE</span>
          <p className="note-body">
            "This issue documents my work, my tools, and my thinking.
             I build things that solve real problems — and this is the story of how."
          </p>
          <span className="note-sig">— W.N.</span>
        </div>
      </div>

      <div className="contents-right">
        <div className="contents-header">
          <span className="contents-header-label">IN THIS ISSUE</span>
          <ColumnRule />
        </div>

        <ol className="contents-list">
          {contents.map((item) => (
            <li key={item.page} className="contents-item">
              <span className="contents-page">{item.page}</span>
              <div className="contents-info">
                <span className="contents-section">{item.section}</span>
                <span className="contents-desc">{item.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
```

```css
.spread-contents {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  height: 100%;
  background: var(--c-paper);
}

.contents-left {
  padding: 3rem 2.5rem;
  border-right: 0.5px solid var(--c-rule);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.spread-label {
  font: 300 10px/1 var(--font-meta);
  letter-spacing: 0.25em;
  color: var(--c-red);
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.75rem;
}

/* Massive italic display title like LIFE spreads */
.spread-title {
  font: italic 300 clamp(52px, 8vw, 80px)/0.9 var(--font-heading);
  color: var(--c-ink);
}

.editor-portrait {
  flex-shrink: 0;
}

.editor-portrait img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
}

.editors-note {
  border-top: 0.5px solid var(--c-rule);
  padding-top: 1.5rem;
}

.note-label {
  font: 300 9px/1 var(--font-meta);
  letter-spacing: 0.3em;
  color: var(--c-ink-muted);
  text-transform: uppercase;
  display: block;
  margin-bottom: 1rem;
}

.note-body {
  font: italic 400 clamp(13px, 1.2vw, 15px)/1.7 var(--font-body);
  color: var(--c-ink-mid);
}

.note-sig {
  font: italic 300 clamp(14px, 1.5vw, 16px)/1 var(--font-display);
  color: var(--c-ink-muted);
  display: block;
  margin-top: 0.75rem;
}

.contents-right {
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
}

.contents-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.contents-header-label {
  font: 300 10px/1 var(--font-meta);
  letter-spacing: 0.3em;
  color: var(--c-ink-muted);
  white-space: nowrap;
}

.contents-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.contents-item {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 1.5rem;
  padding-block: 1.75rem;
  border-bottom: 0.5px solid var(--c-rule);
  cursor: pointer;
  transition: background 0.3s;
}

.contents-item:hover {
  background: rgba(196, 30, 30, 0.03);
}

.contents-page {
  font: 300 clamp(28px, 4vw, 40px)/1 var(--font-display);
  color: var(--c-ink-faint);
  align-self: center;
}

.contents-section {
  font: 600 clamp(14px, 1.4vw, 17px)/1 var(--font-display);
  color: var(--c-ink);
  display: block;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.contents-desc {
  font: 400 12px/1.5 var(--font-meta);
  color: var(--c-ink-muted);
  letter-spacing: 0.05em;
}
```

---

### SPREAD 3: ABOUT ME

**Reference:** LIFE's profile feature stories — 3-column text, large portrait, pull quote.

```
┌─────────────────────────────────────────────────────┐
│  ABOUT ME                              p. 03        │
│  ─────────────────────────────────────────────────  │
│  col 1           │  col 2             │  col 3      │
│                  │                   │             │
│  [portrait       │  bio text         │  bio cont.  │
│   spanning       │  bio text         │             │
│   col 1+2]       │  bio text         │  "quoted    │
│                  │                   │   pull      │
│  click portrait  │  ─────────────    │   quote     │
│  → profile card  │  QUICK FACTS      │   here"     │
│  opens           │  • University     │             │
│                  │  • Year           │  tags:      │
│                  │  • Location       │  React      │
│                  │  • Interests      │  Python     │
└─────────────────────────────────────────────────────┘
```

**Component:** `SpreadAbout.tsx`
```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from '../overlays/ProfileCard';

export default function SpreadAbout() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <div className="spread-about">
        {/* Header */}
        <div className="spread-header">
          <h2 className="spread-eyebrow">ABOUT ME</h2>
          <div className="spread-header-rule" />
          <Folio page={3} />
        </div>

        {/* Three-column body */}
        <div className="about-columns">

          {/* Column 1: Portrait (clickable → profile card) */}
          <div className="about-col about-col--portrait">
            <motion.div
              className="about-portrait-wrap"
              whileHover={{ scale: 1.01 }}
              onClick={() => setProfileOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Click to view profile card"
            >
              <img
                src="/images/portrait.jpg"
                alt="Wafiq Nawaz"
                className="about-portrait"
              />
              <div className="portrait-caption-overlay">
                <Caption>Click to open profile →</Caption>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Bio + Quick Facts */}
          <div className="about-col">
            <p className="about-intro">
              Computer Science student at <strong>[University Name]</strong>,
              building full-stack web applications and security tools
              from Bengaluru, India.
            </p>
            <p className="about-body">
              I work at the intersection of modern web development,
              AI integration, and application security. Every project
              I build is designed to work in production — fast, secure,
              and maintainable.
            </p>

            <div className="quick-facts">
              <span className="facts-label">QUICK FACTS</span>
              <ul className="facts-list">
                <li><span className="fact-key">University</span><span className="fact-val">[Name]</span></li>
                <li><span className="fact-key">Year</span><span className="fact-val">3rd Year CSE</span></li>
                <li><span className="fact-key">Based in</span><span className="fact-val">Bengaluru, India</span></li>
                <li><span className="fact-key">Focus</span><span className="fact-val">Full-Stack + Security</span></li>
                <li><span className="fact-key">Status</span><span className="fact-val" style={{color:'var(--c-red)'}}>Open to Work</span></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Pull quote + skill tags */}
          <div className="about-col">
            <PullQuote>
              "I build things that solve real problems — fast, secure, and built to last."
            </PullQuote>

            <p className="about-body">
              Seeking Summer 2026 internship opportunities in full-stack
              development, AI engineering, or cybersecurity.
            </p>

            <div className="about-tags">
              {['React', 'Python', 'FastAPI', 'Security', 'AI/ML', 'Docker'].map(t => (
                <span key={t} className="editorial-tag">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Profile Card Overlay */}
      <AnimatePresence>
        {profileOpen && <ProfileCard onClose={() => setProfileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
```

```css
.spread-about {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--c-paper);
  padding: 2rem 2.5rem;
}

.spread-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1.5px solid var(--c-ink);
  margin-bottom: 2rem;
}

.spread-eyebrow {
  font: 700 clamp(10px, 1.2vw, 13px)/1 var(--font-meta);
  letter-spacing: 0.3em;
  color: var(--c-ink);
  text-transform: uppercase;
  white-space: nowrap;
}

.spread-header-rule {
  flex: 1;
  height: 0.5px;
  background: var(--c-rule);
}

.about-columns {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  flex: 1;
  overflow: hidden;
}

.about-col {
  padding: 0 2rem;
  border-right: 0.5px solid var(--c-rule);
}

.about-col:first-child { padding-left: 0; }
.about-col:last-child { padding-right: 0; border-right: none; }

.about-portrait-wrap {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.about-portrait {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.08);
  display: block;
  transition: filter 0.5s ease;
}

.about-portrait-wrap:hover .about-portrait {
  filter: grayscale(30%) contrast(1.05);
}

.portrait-caption-overlay {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  padding: 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.about-portrait-wrap:hover .portrait-caption-overlay { opacity: 1; }

.about-intro {
  font: 500 clamp(15px, 1.5vw, 17px)/1.6 var(--font-body);
  color: var(--c-ink);
  margin-bottom: 1.25rem;
}

.about-body {
  font: 400 clamp(13px, 1.2vw, 14px)/1.75 var(--font-body);
  color: var(--c-ink-mid);
  margin-bottom: 1.25rem;
}

.quick-facts {
  margin-top: 2rem;
  border-top: 0.5px solid var(--c-rule);
  padding-top: 1.25rem;
}

.facts-label {
  font: 300 9px/1 var(--font-meta);
  letter-spacing: 0.35em;
  color: var(--c-red);
  text-transform: uppercase;
  display: block;
  margin-bottom: 1rem;
}

.facts-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.facts-list li {
  display: flex;
  justify-content: space-between;
  font: 400 12px/1 var(--font-meta);
  padding-bottom: 0.6rem;
  border-bottom: 0.5px solid var(--c-rule);
}

.fact-key { color: var(--c-ink-muted); }
.fact-val { color: var(--c-ink); }

/* Pull quote — centerpiece of right column */
.pull-quote-component {
  position: relative;
  padding: 1.5rem 0 1.5rem 1.5rem;
  margin-bottom: 2rem;
  border-left: 3px solid var(--c-red);
}

.pull-quote-text {
  font: italic 400 clamp(18px, 2vw, 22px)/1.4 var(--font-quote);
  color: var(--c-ink);
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.5rem;
}

.editorial-tag {
  font: 300 10px/1 var(--font-meta);
  letter-spacing: 0.12em;
  padding: 0.4rem 0.75rem;
  border: 0.5px solid var(--c-ink-faint);
  color: var(--c-ink-mid);
  text-transform: uppercase;
  transition: all 0.25s;
}

.editorial-tag:hover {
  border-color: var(--c-red);
  color: var(--c-red);
  background: rgba(196, 30, 30, 0.04);
}
```

---

### SPREAD 4: SKILLS

**Reference:** LIFE's infographic spreads — visual, readable, airy.

```
┌──────────────────────────────────────────────────────┐
│  TECHNICAL SKILLS                          p. 04    │
│  ───────────────────────────────────────────────    │
│                                                      │
│  FRONTEND DEVELOPMENT                               │
│  ─────────────────────────────────────────          │
│  React      ════════════════════ Expert             │
│  Next.js    ═══════════════════  Advanced           │
│  TypeScript ════════════════     Proficient          │
│                                                      │
│  │  BACKEND DEVELOPMENT        │  SECURITY & TOOLS  │
│  │  ─────────────────────────  │  ─────────────     │
│  │  Python    Expert           │  Pentesting        │
│  │  FastAPI   Advanced         │  OWASP Top 10      │
│  │  SQL       Proficient       │  Docker / Git      │
└──────────────────────────────────────────────────────┘
```

```css
/* Skills spread uses the same 3-column editorial grid */
/* Progress shown as typographic fill bars — no chunky UI bars */

.skill-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-block: 0.875rem;
  border-bottom: 0.5px solid var(--c-rule);
}

.skill-name {
  font: 500 clamp(13px, 1.2vw, 15px)/1 var(--font-body);
  color: var(--c-ink);
  min-width: 120px;
}

/* Fill bar made from repeated characters — editorial feel */
.skill-bar {
  flex: 1;
  margin-inline: 1rem;
  font: 300 8px/1 var(--font-meta);
  color: var(--c-red);
  letter-spacing: 3px;
  overflow: hidden;
  white-space: nowrap;
}

.skill-level {
  font: 300 10px/1 var(--font-meta);
  letter-spacing: 0.15em;
  color: var(--c-ink-muted);
  text-transform: uppercase;
}
```

---

### SPREAD 5–6: FEATURED PROJECTS

**Reference:** LIFE's feature story spreads — one story per two-page spread.

**Each project gets half a spread (or a full spread for flagship projects).**

```
LEFT PAGE:                    RIGHT PAGE:
──────────────────────────────────────────────────
                              PROJECT TITLE
  [LARGE PROJECT IMAGE        
   full-bleed, B&W,           "Pull quote about
   cinematic crop]             what this project
                               does / its impact"
                              
                              ──────────────────
                              Tech stack: React · FastAPI
                              Year: 2025
                              Status: Live ↗
                              
                              Description in
                              two columns of
                              body text here...
                              
                              [small detail images]
```

```tsx
// SpreadProjects.tsx — project feature spread
interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  stack: string[];
  description: string;
  pullQuote: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  detailImages?: string[];
  status: 'Live' | 'In Progress' | 'Archive';
}

const projects: Project[] = [
  {
    id: "WK-001",
    title: "PROJECT TITLE",
    subtitle: "Full-Stack Security Dashboard",
    year: "2025",
    stack: ["React", "FastAPI", "PostgreSQL", "Docker"],
    description: "Describe what it does, who it's for, and what problem it solves. Write this like a magazine paragraph — clear, confident, interesting.",
    pullQuote: "\"The project that showed me what production-ready really means.\"",
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    image: "/images/project-1.jpg",
    status: "Live"
  },
  // Add more projects...
];
```

```css
.project-spread {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  background: var(--c-paper);
}

.project-image-page {
  position: relative;
  overflow: hidden;
}

.project-image-page img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%) contrast(1.1);
  transition: filter 0.6s ease;
}

.project-image-page:hover img {
  filter: grayscale(0%) contrast(1.05);
}

/* Project ID — bottom-left of image page */
.project-id-label {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  font: 300 10px/1 var(--font-meta);
  letter-spacing: 0.25em;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
}

.project-text-page {
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  border-left: 0.5px solid var(--c-rule);
}

.project-eyebrow {
  font: 300 9px/1 var(--font-meta);
  letter-spacing: 0.3em;
  color: var(--c-red);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.project-title-editorial {
  font: italic 300 clamp(32px, 5vw, 52px)/0.95 var(--font-heading);
  color: var(--c-ink);
  margin-bottom: 2rem;
}

/* Two-column description text — real magazine layout */
.project-body-columns {
  column-count: 2;
  column-gap: 1.5rem;
  column-rule: 0.5px solid var(--c-rule);
  margin-block: 1.5rem;
  flex: 1;
}

.project-body-text {
  font: 400 clamp(12px, 1.1vw, 14px)/1.75 var(--font-body);
  color: var(--c-ink-mid);
}

.project-meta-strip {
  display: flex;
  gap: 2rem;
  padding-top: 1.5rem;
  border-top: 0.5px solid var(--c-rule);
  flex-wrap: wrap;
}

.meta-unit { display: flex; flex-direction: column; gap: 0.3rem; }
.meta-unit-label {
  font: 300 9px/1 var(--font-meta);
  letter-spacing: 0.25em;
  color: var(--c-ink-muted);
  text-transform: uppercase;
}
.meta-unit-value {
  font: 500 clamp(12px, 1.1vw, 14px)/1 var(--font-display);
  color: var(--c-ink);
}

.project-links-editorial {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.project-link-editorial {
  font: 300 10px/1 var(--font-meta);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-red);
  text-decoration: none;
  border-bottom: 0.5px solid var(--c-red);
  padding-bottom: 2px;
  transition: opacity 0.2s;
}

.project-link-editorial:hover { opacity: 0.7; }
```

---

### SPREAD 7: EXPERIENCE

**Reference:** LIFE's numbered feature articles, timeline layouts.

```
LEFT PAGE:                    RIGHT PAGE:
──────────────────────────────────────────────────
EXPERIENCE                    [large B&W photo
                               related to work]
 2024 ────────────────────
 COMPANY NAME                 Caption text below
 Role Title                   the image.
 
 Description of work          EDUCATION
 here in editorial style.
                              2022 ────────────
 2023 ────────────────────    UNIVERSITY NAME
 Another role here.           Computer Science
 Description...               Expected 2026
```

```css
/* Experience uses single-column left, image right */
.experience-spread {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  height: 100%;
  background: var(--c-paper);
}

.experience-page {
  padding: 3rem 2.5rem;
  border-right: 0.5px solid var(--c-rule);
  overflow-y: auto;
}

.exp-entry {
  padding-block: 2rem;
  border-top: 0.5px solid var(--c-rule);
}

.exp-year {
  font: 300 11px/1 var(--font-meta);
  letter-spacing: 0.2em;
  color: var(--c-red);
  margin-bottom: 0.5rem;
}

.exp-company {
  font: 600 clamp(15px, 1.4vw, 18px)/1.2 var(--font-display);
  color: var(--c-ink);
  letter-spacing: 0.05em;
}

.exp-role {
  font: italic 400 clamp(13px, 1.2vw, 15px)/1 var(--font-body);
  color: var(--c-ink-mid);
  margin-top: 0.25rem;
  margin-bottom: 0.875rem;
}

.exp-description {
  font: 400 clamp(12px, 1.1vw, 14px)/1.7 var(--font-body);
  color: var(--c-ink-mid);
}
```

---

### SPREAD 8: CONTACT — BACK COVER

**Reference:** LIFE back cover — clean, confident close.

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  LET'S BUILD                                        │
│  SOMETHING.                                         │
│                                                     │
│  ──────────────────────────────────────────────     │
│                                                     │
│  EMAIL      your@email.com                          │
│  LINKEDIN   /in/wafiqnawaz                          │
│  GITHUB     @wafiqnawaz                             │
│  LOCATION   Bengaluru, India                        │
│                                                     │
│  [Contact form — clean, minimal, editorial]         │
│                                                     │
│  ──────────────────────────────────────────────     │
│  [WN] WAFIQ NAWAZ · BENGALURU · 2026                │
└─────────────────────────────────────────────────────┘
```

---

## 8. PROFILE CARD OVERLAY

```tsx
// overlays/ProfileCard.tsx
import { motion } from 'framer-motion';

export default function ProfileCard({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="profile-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Card header strip */}
        <div className="pc-header">
          <span className="pc-issue">THE DEVELOPER ISSUE · 2026</span>
          <button className="pc-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* Portrait + name */}
        <div className="pc-identity">
          <img src="/images/portrait.jpg" alt="Wafiq Nawaz" className="pc-portrait" />
          <div className="pc-name-block">
            <h2 className="pc-name">WAFIQ<br/><em>Nawaz</em></h2>
            <span className="pc-role">Full-Stack Developer · Cybersecurity Student</span>
          </div>
        </div>

        {/* Divider rule */}
        <div className="pc-rule" />

        {/* Details grid */}
        <div className="pc-details">
          <div className="pc-col">
            <span className="pc-section-label">PROFILE</span>
            <p className="pc-bio">
              Computer Science student building production-ready applications.
              Passionate about secure, elegant code.
            </p>
          </div>
          <div className="pc-col">
            <span className="pc-section-label">INTERESTS</span>
            <ul className="pc-list">
              <li>Full-Stack Development</li>
              <li>Application Security</li>
              <li>AI / Machine Learning</li>
              <li>Open Source</li>
            </ul>
          </div>
          <div className="pc-col">
            <span className="pc-section-label">TOOLS</span>
            <ul className="pc-list">
              <li>React · Next.js</li>
              <li>Python · FastAPI</li>
              <li>Docker · Vercel</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>

        {/* Philosophy pull quote */}
        <div className="pc-philosophy">
          <PullQuote>"Code is a craft. I build things that are fast, secure, and maintainable."</PullQuote>
        </div>

        {/* Footer */}
        <div className="pc-footer">
          <span className="pc-footer-text">BENGALURU, INDIA</span>
          <span className="pc-footer-text">OPEN TO WORK · 2026</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
```

```css
.profile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26, 23, 20, 0.65);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.profile-card {
  background: var(--c-paper);
  max-width: 900px;
  width: 100%;
  border: 0.5px solid var(--c-ink-faint);
  box-shadow:
    0 40px 80px rgba(26, 23, 20, 0.3),
    0 8px 32px rgba(26, 23, 20, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.pc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 0.5px solid var(--c-rule);
  background: var(--c-ink);
}

.pc-issue {
  font: 300 10px/1 var(--font-meta);
  letter-spacing: 0.3em;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
}

.pc-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  transition: color 0.2s;
  line-height: 1;
}

.pc-close:hover { color: white; }

.pc-identity {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  align-items: flex-start;
  border-bottom: 0.5px solid var(--c-rule);
}

.pc-portrait {
  width: 140px;
  height: 175px;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
  flex-shrink: 0;
}

.pc-name {
  font: italic 300 clamp(40px, 5vw, 60px)/0.9 var(--font-heading);
  color: var(--c-ink);
  margin: 0 0 1rem;
}

.pc-name em { font-style: italic; font-weight: 300; }

.pc-role {
  font: 400 12px/1.5 var(--font-meta);
  letter-spacing: 0.08em;
  color: var(--c-ink-muted);
  text-transform: uppercase;
}

.pc-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  padding: 0;
}

.pc-col {
  padding: 1.75rem 2rem;
  border-right: 0.5px solid var(--c-rule);
}

.pc-col:last-child { border-right: none; }

.pc-section-label {
  font: 300 9px/1 var(--font-meta);
  letter-spacing: 0.35em;
  color: var(--c-red);
  text-transform: uppercase;
  display: block;
  margin-bottom: 1rem;
}

.pc-bio {
  font: 400 clamp(12px, 1.1vw, 14px)/1.65 var(--font-body);
  color: var(--c-ink-mid);
}

.pc-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pc-list li {
  font: 400 clamp(12px, 1.1vw, 13px)/1 var(--font-meta);
  color: var(--c-ink-mid);
  padding-block: 0.4rem;
  border-bottom: 0.5px solid var(--c-rule);
}

.pc-philosophy {
  padding: 1.5rem 2rem;
  border-top: 0.5px solid var(--c-rule);
  background: var(--c-paper-dark);
}

.pc-footer {
  display: flex;
  justify-content: space-between;
  padding: 0.875rem 2rem;
  border-top: 1.5px solid var(--c-ink);
  background: var(--c-ink);
}

.pc-footer-text {
  font: 300 9px/1 var(--font-meta);
  letter-spacing: 0.3em;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
}
```

---

## 9. MAGAZINE VIEWER — PAGE FLIP ENGINE

```tsx
// components/magazine/MagazineViewer.tsx
'use client';
import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import SpreadCover from '../spreads/SpreadCover';
import SpreadContents from '../spreads/SpreadContents';
import SpreadAbout from '../spreads/SpreadAbout';
import SpreadSkills from '../spreads/SpreadSkills';
import SpreadProjects from '../spreads/SpreadProjects';
import SpreadExperience from '../spreads/SpreadExperience';
import SpreadContact from '../spreads/SpreadContact';
import PageNav from './PageNav';

const TOTAL_PAGES = 16;

export default function MagazineViewer() {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => bookRef.current?.pageFlip().flipNext();
  const prevPage = () => bookRef.current?.pageFlip().flipPrev();

  const onFlip = (e: any) => setCurrentPage(e.data);

  return (
    <div className="magazine-stage">
      {/* Ambient light effect behind book */}
      <div className="magazine-glow" />

      <motion.div
        className="magazine-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <HTMLFlipBook
          ref={bookRef}
          width={550}
          height={780}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          flippingTime={800}
          usePortrait={false}
          startPage={0}
          drawShadow={true}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="magazine-book"
        >
          {/* Each Page is one side of a spread */}
          <div className="page"><SpreadCover /></div>
          <div className="page page-right"><SpreadContents /></div>
          <div className="page"><SpreadAbout /></div>
          <div className="page page-right"><SpreadSkills /></div>
          <div className="page"><SpreadProjects projectIndex={0} side="left" /></div>
          <div className="page page-right"><SpreadProjects projectIndex={0} side="right" /></div>
          <div className="page"><SpreadProjects projectIndex={1} side="left" /></div>
          <div className="page page-right"><SpreadProjects projectIndex={1} side="right" /></div>
          <div className="page"><SpreadExperience /></div>
          <div className="page page-right"><SpreadContact /></div>
        </HTMLFlipBook>
      </motion.div>

      {/* Navigation */}
      <PageNav
        onPrev={prevPage}
        onNext={nextPage}
        current={currentPage}
        total={TOTAL_PAGES}
      />
    </div>
  );
}
```

```css
/* Main stage — dark background behind the magazine */
.magazine-stage {
  width: 100vw;
  height: 100vh;
  background: var(--c-ink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Warm ambient glow behind the book — cinematic */
.magazine-glow {
  position: absolute;
  width: 80vw;
  height: 60vh;
  background: radial-gradient(
    ellipse at center,
    rgba(139, 115, 85, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.magazine-wrap {
  position: relative;
  z-index: 1;
  max-width: 95vw;
}

/* The book container — react-pageflip */
.magazine-book {
  box-shadow:
    0 60px 100px rgba(0, 0, 0, 0.7),
    0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Individual pages */
.page {
  background: var(--c-paper);
  overflow: hidden;
  border-right: 0.5px solid var(--c-rule);
}

.page-right {
  border-right: none;
  border-left: 0.5px solid var(--c-rule);
}
```

---

## 10. PAGE NAVIGATION COMPONENT

```tsx
// components/magazine/PageNav.tsx
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function PageNav({ onPrev, onNext, current, total }) {
  return (
    <div className="page-nav">
      {/* Left arrow */}
      <motion.button
        className="nav-arrow nav-arrow--left"
        onClick={onPrev}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={current === 0}
        aria-label="Previous spread"
      >
        <ArrowLeft size={20} />
      </motion.button>

      {/* Spread counter */}
      <div className="nav-counter">
        <span className="nav-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="nav-sep"> / </span>
        <span className="nav-total">{String(Math.ceil(total / 2)).padStart(2, '0')}</span>
      </div>

      {/* Right arrow */}
      <motion.button
        className="nav-arrow nav-arrow--right"
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={current >= total - 2}
        aria-label="Next spread"
      >
        <ArrowRight size={20} />
      </motion.button>
    </div>
  );
}
```

```css
.page-nav {
  position: fixed;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 100;
  background: rgba(26, 23, 20, 0.8);
  backdrop-filter: blur(8px);
  border: 0.5px solid rgba(255,255,255,0.1);
  padding: 0.875rem 2rem;
}

.nav-arrow {
  background: none;
  border: none;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.nav-arrow:hover { color: var(--c-paper); }
.nav-arrow:disabled { opacity: 0.2; cursor: not-allowed; }

.nav-counter {
  font: 300 12px/1 var(--font-meta);
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.5);
  min-width: 80px;
  text-align: center;
}

.nav-current { color: rgba(255,255,255,0.9); }
```

---

## 11. MASTHEAD LOGO COMPONENT

```tsx
// ui/MastheadLogo.tsx — the "WN" red box, like LIFE's red square
export default function MastheadLogo() {
  return (
    <div className="masthead-logo">
      <span className="masthead-letters">WN</span>
    </div>
  );
}
```

```css
.masthead-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 36px;
  background: var(--c-red);
  flex-shrink: 0;
}

.masthead-letters {
  font: 700 18px/1 var(--font-display);
  color: white;
  letter-spacing: 0.05em;
}
```

---

## 12. LOADING / INTRO ANIMATION

```tsx
// app/page.tsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagazineViewer from '@/components/magazine/MagazineViewer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="intro-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="intro-content"
            >
              <MastheadLogo />
              <motion.p
                className="intro-tagline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                THE DEVELOPER ISSUE
              </motion.p>
              <motion.button
                className="intro-open-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={() => setLoaded(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                OPEN MAGAZINE
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {loaded && <MagazineViewer />}
    </>
  );
}
```

```css
.intro-screen {
  position: fixed;
  inset: 0;
  background: var(--c-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.intro-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.intro-tagline {
  font: 300 11px/1 var(--font-meta);
  letter-spacing: 0.4em;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
}

.intro-open-btn {
  font: 300 11px/1 var(--font-meta);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--c-paper);
  background: none;
  border: 0.5px solid rgba(248, 245, 240, 0.3);
  padding: 1rem 2.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.intro-open-btn:hover {
  background: var(--c-red);
  border-color: var(--c-red);
}
```

---

## 13. MOBILE ADAPTATION

```css
/* On mobile, magazine becomes vertical scroll */
@media (max-width: 768px) {
  .magazine-stage {
    overflow-y: auto;
    height: auto;
    min-height: 100vh;
    padding: 4rem 0;
  }

  .magazine-book {
    /* react-pageflip enters portrait mode */
    /* Each "spread" renders as a single vertical page */
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }

  .about-columns,
  .project-spread,
  .experience-spread,
  .contact-spread {
    grid-template-columns: 1fr;
  }

  .pc-details {
    grid-template-columns: 1fr;
  }

  .page-nav {
    bottom: 1rem;
    padding: 0.75rem 1.25rem;
    gap: 1.25rem;
  }
}
```

---

## 14. CONTENT TO FILL IN (`lib/magazine-data.ts`)

```typescript
export const portfolioData = {
  personal: {
    name: "Wafiq Nawaz",
    title: "Full-Stack Developer",
    subtitle: "Cybersecurity Student",
    university: "[Your University Name]",
    year: "3rd Year, Computer Science Engineering",
    location: "Bengaluru, Karnataka, India",
    email: "your@email.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/wafiqnawaz",
    bio: "[Write 2-3 paragraph bio here]",
    philosophy: "[Your personal/professional philosophy in one sentence]",
    status: "Open to internships — Summer 2026",
  },

  skills: {
    frontend: [
      { name: "React", level: 5, label: "Expert" },
      { name: "Next.js", level: 4, label: "Advanced" },
      { name: "TypeScript", level: 4, label: "Advanced" },
      { name: "Tailwind CSS", level: 5, label: "Expert" },
    ],
    backend: [
      { name: "Python", level: 5, label: "Expert" },
      { name: "FastAPI", level: 4, label: "Advanced" },
      { name: "Node.js", level: 3, label: "Intermediate" },
      { name: "PostgreSQL", level: 4, label: "Advanced" },
    ],
    tools: [
      { name: "Git / GitHub", level: 5, label: "Expert" },
      { name: "Docker", level: 3, label: "Intermediate" },
      { name: "Linux", level: 4, label: "Advanced" },
      { name: "Web Security", level: 3, label: "Intermediate" },
    ],
  },

  projects: [
    {
      id: "WK-001",
      title: "[Project Title]",
      subtitle: "[One-line description]",
      year: "2025",
      stack: ["React", "FastAPI", "PostgreSQL"],
      description: "[3-4 sentence description written in editorial style]",
      pullQuote: '"[Most impressive/interesting thing about this project]"',
      liveUrl: "https://...",
      githubUrl: "https://github.com/...",
      image: "/images/project-1.jpg",
      status: "Live",
    },
    // Add more projects...
  ],

  experience: [
    {
      year: "2024 – Present",
      company: "[Company Name]",
      role: "[Job Title]",
      description: "[Editorial-style description of what you did]",
      type: "work", // 'work' | 'education' | 'freelance'
    },
    // Add more entries...
  ],
};
```

---

## 15. KIRO PROMPTS — IMPLEMENTATION SEQUENCE

Use these prompts in order for the cleanest build:

### Step 1 — Project Setup:
```
"Create a Next.js 14 project with Tailwind CSS, Framer Motion, and react-pageflip. 
Set up the file structure exactly as in the wafiq-magazine-plan.md.
Initialize the CSS variables from the color system section.
Install all dependencies from the tech stack section."
```

### Step 2 — Foundations:
```
"Create the globals.css with all CSS variables (colors, fonts, typography scale) 
from the magazine plan. Import the Google Fonts. Set base styles — 
paper background, warm ink text, column rule color.
Build the MastheadLogo, ColumnRule, PullQuote, Caption, Folio UI components."
```

### Step 3 — Cover Spread:
```
"Build SpreadCover.tsx exactly as the magazine plan spec. 
Full-bleed portrait, top header bar, cover lines on the right,
name block bottom-left, dark footer strip with URL.
The portrait should be grayscale with warm filter. Paper grain overlay included."
```

### Step 4 — Page Flip Viewer:
```
"Build MagazineViewer.tsx using react-pageflip, with all spreads 
as children pages. Book dimensions: 550x780. Dark stage background 
with warm ambient glow. PageNav component fixed at the bottom center."
```

### Step 5 — About Spread + Profile Card:
```
"Build SpreadAbout.tsx as a 3-column editorial layout.
Column 1: Clickable portrait. Column 2: Bio + Quick Facts grid.
Column 3: Pull quote + editorial tags.
Build ProfileCard.tsx overlay with Framer Motion fade-in animation.
Profile card has dark header strip, portrait, 3-column details grid."
```

### Step 6 — Projects Spread:
```
"Build SpreadProjects.tsx as a two-page spread.
Left page: full-bleed project image with B&W filter and hover color reveal.
Right page: 2-column body text, pull quote, meta strip, editorial links.
Map over the projects array in magazine-data.ts."
```

### Step 7 — Skills, Experience, Contact:
```
"Build SpreadSkills, SpreadExperience, SpreadContact following the 
magazine plan specs. Skills: 3-column spec table with dot ratings.
Experience: timeline list, right side B&W photo.
Contact: large italic display headline, form, back-cover footer strip."
```

### Step 8 — Intro + Polish:
```
"Add the intro loading screen from section 12 of the plan.
Add Lenis smooth scroll. Add paper grain texture overlay to all spreads.
Ensure all Framer Motion animations are smooth and editorial-paced (800ms+).
Test mobile — ensure portrait mode works in react-pageflip."
```

---

## 16. DESIGN QUALITY CHECKLIST

### Typography
- [ ] Cormorant Garamond on ALL display headlines
- [ ] DM Serif Display on section spread titles (italic)
- [ ] Lora on ALL body text
- [ ] JetBrains Mono on ALL metadata, labels, captions, folios
- [ ] No Inter, Roboto, or sans-serif on anything that isn't metadata

### Color
- [ ] Background is warm `#F8F5F0` not cold white
- [ ] Text is warm near-black `#1A1714` not pure `#000`
- [ ] Red `#C41E1E` used ONLY as accent — masthead, red lines, labels, links
- [ ] No bright colors; everything is warm and desaturated

### Photography
- [ ] Portrait photo: B&W or highly desaturated with contrast boost
- [ ] Project images: grayscale 20-30%, colorize on hover
- [ ] Paper grain overlay: 3-5% opacity on all images

### Magazine Elements
- [ ] Masthead "WN" red box on every spread (at least cover)
- [ ] Folio page numbers at bottom of each spread
- [ ] Column rules (0.5px) between text columns
- [ ] Pull quotes on About, Projects, Contact
- [ ] Captions under all editorial images
- [ ] Spread header: eyebrow label + full-width rule + page number

### Page Flip
- [ ] `drawShadow: true` on react-pageflip
- [ ] Flip time: 800ms (slow enough to feel tactile)
- [ ] Dark ambient stage behind book
- [ ] Warm radial glow behind book
- [ ] Navigation arrows: subtle, never distracting

### Profile Card
- [ ] Triggered by clicking portrait on About spread
- [ ] ESC key closes it
- [ ] Click outside closes it
- [ ] Framer Motion enter/exit animation (slide + fade)
- [ ] Backdrop blur on overlay

### Mobile
- [ ] react-pageflip portrait mode enabled
- [ ] Columns collapse to single column
- [ ] Touch swipe works for page turns
- [ ] Font sizes use `clamp()` throughout

---

*This is your complete blueprint. Execute spread by spread, section by section.*
*The result will feel like opening a beautifully printed magazine — warm, editorial, unforgettable.*

---

**Plan Version:** 2.0 | **Reference:** LIFE Magazine × Luxury Editorial  
**Tech Stack:** Next.js · Tailwind · Framer Motion · react-pageflip  
**Target:** wafiqnawaz.vercel.app | **Date:** May 2026
