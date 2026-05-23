# Wafiq Portfolio — UI/UX Redesign Plan

> **Stack:** React + Vite + Tailwind v4 + Framer Motion + Phosphor Icons  
> **IDE:** Antigravity (Monaco-based, hot-reload CSS variables)  
> **Live site:** [wafiqnawaz.vercel.app](https://wafiqnawaz.vercel.app)  
> **Repo:** [github.com/ZaLuLu/Wafiqs-portfolio](https://github.com/ZaLuLu/Wafiqs-portfolio)

---

## Table of Contents

1. [Diagnosis — What's Wrong Now](#1-diagnosis--whats-wrong-now)
2. [Design Direction](#2-design-direction)
3. [Colour System](#3-colour-system)
4. [Typography System](#4-typography-system)
5. [Texture & Depth Layers](#5-texture--depth-layers)
6. [CSS Variables Setup (index.css)](#6-css-variables-setup-indexcss)
7. [Section-by-Section Changes](#7-section-by-section-changes)
   - [Nav Bar](#71-nav-bar)
   - [Hero Section](#72-hero-section)
   - [About Section](#73-about-section)
   - [Skills Section](#74-skills-section)
   - [Projects Section](#75-projects-section)
   - [Contact / Footer](#76-contact--footer)
8. [Framer Motion Animation System](#8-framer-motion-animation-system)
9. [Tailwind v4 Config Additions](#9-tailwind-v4-config-additions)
10. [Implementation Order](#10-implementation-order)
11. [Do's and Don'ts](#11-dos-and-donts)

---

## 1. Diagnosis — What's Wrong Now

| Problem | Why It Feels Bland |
|---|---|
| Flat `#0C0C0C` across every section | No visual rhythm — sections don't breathe or separate |
| All text in same font family / weight | No typographic contrast = no hierarchy |
| No texture or depth layer | Looks like a rough draft, not a finished product |
| Pill/tag components all styled identically | Skills and nav tags are indistinguishable |
| No section personality | Hero, About, Projects all feel like the same template |
| Hover states are minimal | Feels static, not interactive |
| Pure white text on pure black | Too harsh — kills the premium feel |

**Root cause:** The fonts, background levels, and component styles are too uniform. Premium sites use *contrast* — contrast of scale, weight, texture, and colour — to create a sense of craft.

---

## 2. Design Direction

**Aesthetic:** Dark editorial luxury — think a high-end tech magazine cover merged with a developer portfolio.

**References to keep in mind:**
- [linear.app](https://linear.app) — dark, minimal, purposeful motion
- [rauno.me](https://rauno.me) — typographic restraint, editorial feel
- High-end watch brand sites — gold accents, serif type, negative space

**Three core principles:**
1. **Two fonts max visible at once** — mixing four families in one section kills luxury.
2. **Three levels of background darkness** — creates depth without adding colour.
3. **One accent colour, used sparingly** — gold (#C9A96E), never more than 15% of any visible surface.

---

## 3. Colour System

### Palette

```css
/* Backgrounds — three levels of dark */
--bg-base:      #0C0C0C;   /* page base — keep as-is */
--bg-surface-1: #141210;   /* alternate sections */
--bg-surface-2: #1C1915;   /* cards, elevated elements */

/* Accent */
--gold:         #C9A96E;   /* primary accent — use sparingly */
--gold-dim:     rgba(201, 169, 110, 0.15);  /* for borders, glows */
--gold-hover:   rgba(201, 169, 110, 0.08);  /* for hover backgrounds */

/* Text */
--text-primary:   #F5F0E8;   /* warm white — softer than pure #fff */
--text-secondary: rgba(245, 240, 232, 0.55);
--text-tertiary:  rgba(245, 240, 232, 0.30);

/* Steel blue — for code/tech contexts only */
--tech-blue:    #3B4F6E;
--tech-blue-dim: rgba(59, 79, 110, 0.12);
```

### Usage Rules

- `--bg-base` → page background, hero
- `--bg-surface-1` → every other section (About, Contact)
- `--bg-surface-2` → individual cards, nav (when scrolled)
- `--gold` → accent lines, hover states, italic name text, CTA borders
- `--text-primary` → headings only
- `--text-secondary` → body paragraphs
- `--text-tertiary` → labels, metadata, dates

### What NOT to do

- ❌ Don't add a second accent colour (no purple, no green)
- ❌ Don't use pure `#ffffff` for text
- ❌ Don't use gold as a fill on large areas — borders and underlines only

---

## 4. Typography System

### Font Roles (strict assignment)

Your `index.html` already loads all four Google Fonts. The problem is they need strict role assignment:

| Font | Role | Where Used | Weight |
|---|---|---|---|
| **Cormorant Garamond** | Display / Hero | H1, pull quotes, large name | 300 (light), 600 italic |
| **DM Serif Display** | Section headings | H2, section titles | 400 |
| **Lora** | Body text | Paragraphs, project descriptions | 400 |
| **JetBrains Mono** | UI labels | Nav, tags, dates, metadata | 300, 400 |

### Scale

```css
/* Display — hero name only */
.text-display   { font-size: clamp(3rem, 8vw, 6rem); font-weight: 300; line-height: 1.0; letter-spacing: -0.01em; }

/* Section title */
.text-heading   { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 400; line-height: 1.15; }

/* Pull quote */
.text-quote     { font-size: clamp(1.25rem, 2.5vw, 1.6rem); font-weight: 300; font-style: italic; line-height: 1.4; }

/* Body */
.text-body      { font-size: 1rem; font-weight: 400; line-height: 1.75; }

/* UI / mono labels */
.text-label     { font-size: 0.6875rem; font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; }
```

### The Pairing Rule

> **At any given section, maximum two font families should be visible simultaneously.**

Correct pairings per section:
- Hero → Cormorant Garamond + JetBrains Mono
- About → Cormorant Garamond (quote) + Lora (body)
- Skills → DM Serif Display (heading) + JetBrains Mono (tags)
- Projects → DM Serif Display (heading) + Lora (descriptions)
- Contact → Cormorant Garamond (headline) + JetBrains Mono (CTA label)

---

## 5. Texture & Depth Layers

Use CSS backgrounds — zero performance cost, no extra packages needed.

### Layer 1 — Grid overlay (hero)

```css
.texture-grid {
  background-image:
    repeating-linear-gradient(
      0deg, transparent, transparent 39px,
      rgba(255, 255, 255, 0.03) 40px
    ),
    repeating-linear-gradient(
      90deg, transparent, transparent 39px,
      rgba(255, 255, 255, 0.03) 40px
    );
}
```

### Layer 2 — Ambient glow blobs (about, skills)

```css
.texture-glow {
  background-image:
    radial-gradient(circle at 15% 50%, rgba(201, 169, 110, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 20%, rgba(59, 79, 110, 0.08) 0%, transparent 50%);
}
```

### Layer 3 — Diagonal hatch (project cards)

```css
.texture-hatch {
  background-image: repeating-linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.012) 0px,
    rgba(255, 255, 255, 0.012) 1px,
    transparent 1px,
    transparent 8px
  );
}
```

### Layer 4 — Gold border card

```css
.card-gold-border {
  background: linear-gradient(180deg, #141210 0%, #0C0C0C 100%);
  border: 0.5px solid rgba(201, 169, 110, 0.2);
  border-radius: 12px;
}
```

### Stacking Rule

> **Never combine more than 2 texture layers on the same element.**

Valid combinations:
- Hero → `texture-grid` + ambient glow (via absolute pseudo-element)
- Cards → `texture-hatch` alone
- About section → `texture-glow` alone

---

## 6. CSS Variables Setup (index.css)

Paste this at the very top of `src/index.css`. In Antigravity IDE, the hot-reload will apply changes to every component instantly.

```css
/* ─── Design Tokens ─────────────────────────────────────── */
:root {
  /* Backgrounds */
  --bg-base:        #0C0C0C;
  --bg-surface-1:   #141210;
  --bg-surface-2:   #1C1915;

  /* Accent */
  --gold:           #C9A96E;
  --gold-dim:       rgba(201, 169, 110, 0.15);
  --gold-hover:     rgba(201, 169, 110, 0.08);
  --gold-glow:      rgba(201, 169, 110, 0.06);

  /* Text */
  --text-primary:   #F5F0E8;
  --text-secondary: rgba(245, 240, 232, 0.55);
  --text-tertiary:  rgba(245, 240, 232, 0.30);

  /* Tech accent */
  --tech-blue:      #3B4F6E;
  --tech-blue-dim:  rgba(59, 79, 110, 0.12);

  /* Typography */
  --font-display:   'Cormorant Garamond', Georgia, serif;
  --font-heading:   'DM Serif Display', Georgia, serif;
  --font-body:      'Lora', Georgia, serif;
  --font-ui:        'JetBrains Mono', 'Fira Code', monospace;

  /* Layout */
  --section-padding: clamp(4rem, 10vw, 8rem);
  --content-width:   1100px;

  /* Motion */
  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 200ms;
  --duration-base: 350ms;
}

/* ─── Base Styles ────────────────────────────────────────── */
* {
  box-sizing: border-box;
}

html {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 { font-family: var(--font-display); font-weight: 300; color: var(--text-primary); }
h2 { font-family: var(--font-heading); font-weight: 400; color: var(--text-primary); }
h3 { font-family: var(--font-heading); font-weight: 400; color: var(--text-primary); }
p  { font-family: var(--font-body);    font-weight: 400; color: var(--text-secondary); line-height: 1.75; }

/* ─── Utility Classes ────────────────────────────────────── */
.font-ui    { font-family: var(--font-ui); }
.font-body  { font-family: var(--font-body); }
.gold       { color: var(--gold); }
.text-label {
  font-family: var(--font-ui);
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

/* ─── Gold Divider ───────────────────────────────────────── */
.gold-rule {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--gold);
  font-size: 0.75rem;
}
.gold-rule::before,
.gold-rule::after {
  content: '';
  flex: 1;
  height: 0.5px;
  background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
}
```

---

## 7. Section-by-Section Changes

---

### 7.1 Nav Bar

**Goal:** Transparent on load, glass on scroll, typographic hover states.

**Changes:**
- Background: transparent → `backdrop-filter: blur(12px)` + `--bg-surface-2` at 80% opacity on scroll
- Logo: Switch to Cormorant Garamond italic, add `--gold` colour for the last name initial
- Nav links: JetBrains Mono, 11px, uppercase, `letter-spacing: 0.12em`
- Hover: thin gold underline that animates in from left (Framer Motion `scaleX` from 0 to 1)
- Active state: static gold underline

**Code snippet — nav link with animated underline:**

```jsx
// NavLink.jsx
import { motion } from 'framer-motion'

export function NavLink({ children, href }) {
  return (
    <a href={href} className="relative group font-ui text-label text-secondary hover:text-primary transition-colors duration-200">
      {children}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-px bg-gold w-full origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </a>
  )
}
```

**Tailwind classes to use:**

```
font-[family-name:var(--font-ui)] tracking-[0.12em] uppercase text-[11px]
```

---

### 7.2 Hero Section

**Goal:** Cinematic first impression — large display type, layered texture, animated subtitle.

**Layout:** Two-column on desktop — left: text, right: decorative geometric element (pure CSS circles/rings, no images needed).

**Changes:**
- Background: `--bg-base` + grid overlay texture + ambient glow pseudo-element
- Name: Cormorant Garamond 300, `clamp(3.5rem, 8vw, 6rem)`, first name regular, last name gold italic
- Role subtitle: JetBrains Mono, typewriter animation
- Tags (React, Python, FastAPI): gold-bordered pills, `--font-ui`, 11px
- CTA button: ghost style — transparent fill, `1px solid --gold`, hover fills with `--gold-dim`
- Right column: CSS-only abstract — concentric circles with partial opacity rings in gold

**Hero JSX structure:**

```jsx
<section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--bg-base)' }}>
  {/* Texture layers */}
  <div className="absolute inset-0 texture-grid opacity-100 pointer-events-none" />
  <div className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(circle at 10% 60%, var(--gold-glow) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(59,79,110,0.07) 0%, transparent 45%)`
    }} />

  <div className="relative z-10 max-w-[1100px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* Left — text */}
    <div>
      <p className="text-label mb-6">Full-Stack Developer · Cybersecurity · Bengaluru</p>

      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.0 }}>
        Wafiq<br />
        <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Nawaz.</em>
      </h1>

      {/* Typewriter subtitle — see animation section */}
      <TypewriterText />

      {/* Gold rule */}
      <div className="gold-rule my-8">◇</div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {['React', 'Python', 'FastAPI', 'PostgreSQL'].map(tag => (
          <span key={tag} className="font-ui text-[11px] tracking-wider uppercase px-3 py-1.5"
            style={{ border: '0.5px solid var(--gold-dim)', color: 'var(--gold)', borderRadius: '40px' }}>
            {tag}
          </span>
        ))}
      </div>

      <a href="#contact" className="ghost-cta">Let's build something</a>
    </div>

    {/* Right — decorative rings */}
    <DecorativeRings />
  </div>
</section>
```

**Ghost CTA button CSS:**

```css
.ghost-cta {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--gold-dim);
  padding: 0.875rem 2rem;
  border-radius: 2px;
  transition: background var(--duration-base) var(--ease-premium),
              border-color var(--duration-base) var(--ease-premium);
}
.ghost-cta:hover {
  background: var(--gold-hover);
  border-color: var(--gold);
}
```

---

### 7.3 About Section

**Goal:** A quiet, readable section with editorial presence. Different from the hero — warmer, more personal.

**Changes:**
- Background: `--bg-surface-1` (#141210) — breaks the visual flow from hero
- Add a large pull-quote in Cormorant Garamond italic (a one-liner about your philosophy)
- Body text in Lora 400 at 1rem, `line-height: 1.8`
- Add a gold diamond rule (`◇`) as a section break
- Ambient glow positioned top-right (subtle, `var(--gold-glow)`)
- Section label ("About") in JetBrains Mono uppercase above the H2

**Pull quote example:**

```jsx
<blockquote style={{
  fontFamily: 'var(--font-display)',
  fontWeight: 300,
  fontStyle: 'italic',
  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
  color: 'var(--text-primary)',
  lineHeight: 1.45,
  borderLeft: '2px solid var(--gold)',
  paddingLeft: '1.5rem',
  margin: '2rem 0'
}}>
  "I don't just build features — I build systems I'd trust."
</blockquote>
```

---

### 7.4 Skills Section

**Goal:** Replace flat pill lists with a structured, grouped layout that signals depth.

**Changes:**
- Background: `--bg-base` (alternates back from About)
- Group skills into 3 categories: **Frontend**, **Backend & APIs**, **Security & Tools**
- Each group gets its own card (`--bg-surface-2` background + hatch texture)
- Group title in DM Serif Display 400, ~1.1rem
- Individual skill tags: `--font-ui`, gold border, transparent fill
- Cards appear staggered using Framer Motion `staggerChildren`

**Skill card structure:**

```jsx
<div style={{
  background: 'var(--bg-surface-2)',
  border: '0.5px solid rgba(255,255,255,0.07)',
  borderRadius: '8px',
  padding: '1.5rem',
  backgroundImage: `repeating-linear-gradient(
    135deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px,
    transparent 1px, transparent 8px)`
}}>
  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
    Frontend
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    {skills.map(s => <SkillTag key={s}>{s}</SkillTag>)}
  </div>
</div>
```

**Skill tag:**

```css
.skill-tag {
  font-family: var(--font-ui);
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border: 0.5px solid var(--gold-dim);
  border-radius: 4px;
  color: var(--text-secondary);
  transition: color var(--duration-fast), border-color var(--duration-fast);
}
.skill-tag:hover {
  color: var(--gold);
  border-color: var(--gold);
}
```

---

### 7.5 Projects Section

**Goal:** This is the most important section — it needs to feel like a curated gallery, not a card grid.

**Changes:**
- Background: `--bg-surface-1`
- Layout: vertical list (not grid) — each project takes a full row, giving space for detail
- Large decorative index number (01, 02…) in Cormorant Garamond, ~6rem, `opacity: 0.06`, positioned behind the card title
- Project title: DM Serif Display, 1.4rem
- Description: Lora, `--text-secondary`
- Tags: `--font-ui`, 10px, very subtle
- Hover state: left border animates in (`scaleY` from 0) in `--gold`, card background subtly lifts to `--bg-surface-2`
- Each card has a slightly unique background tint (rotate between `--bg-base`, `--bg-surface-1`, `--bg-surface-2`)

**Project card component:**

```jsx
<motion.div
  className="project-card"
  whileHover={{ backgroundColor: 'var(--bg-surface-2)' }}
  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
  style={{ position: 'relative', padding: '2rem', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}
>
  {/* Decorative index */}
  <span style={{
    position: 'absolute', top: '1rem', right: '1.5rem',
    fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 300,
    color: 'var(--text-primary)', opacity: 0.04, lineHeight: 1, userSelect: 'none'
  }}>
    01
  </span>

  {/* Gold left border on hover */}
  <motion.div
    initial={{ scaleY: 0, originY: 0 }}
    whileHover={{ scaleY: 1 }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    style={{
      position: 'absolute', left: 0, top: 0, bottom: 0,
      width: '2px', background: 'var(--gold)'
    }}
  />

  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
    <div style={{ flex: 1 }}>
      <p className="text-label" style={{ marginBottom: '0.5rem' }}>Full-Stack · 2025</p>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
        Project Name
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '55ch' }}>
        Brief project description here — what it does, the problem it solves, your role.
      </p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '1rem', flexWrap: 'wrap' }}>
        {['React', 'FastAPI', 'PostgreSQL'].map(t => (
          <span key={t} className="skill-tag">{t}</span>
        ))}
      </div>
    </div>
    <a href="#" style={{ color: 'var(--gold)', fontFamily: 'var(--font-ui)', fontSize: '11px', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
      View →
    </a>
  </div>
</motion.div>
```

---

### 7.6 Contact / Footer

**Goal:** Memorable last impression — cinematic, editorial, a clear invitation.

**Changes:**
- Background: `--bg-surface-2` — the darkest panel, signals the end
- Layout: full-width centred, generous vertical padding
- Headline: Cormorant Garamond 300 italic, very large (`clamp(2.5rem, 6vw, 4.5rem)`)
- Sub-copy: Lora `--text-secondary`, 1rem
- CTA: ghost button as per Section 7.2
- Social links: JetBrains Mono, underline-on-hover, spaced horizontally
- Footer line: `--text-tertiary`, JetBrains Mono 10px, `letter-spacing: 0.1em`
- Gold ambient glow top-centre for warmth

**Contact headline:**

```jsx
<h2 style={{
  fontFamily: 'var(--font-display)',
  fontWeight: 300,
  fontStyle: 'italic',
  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
  color: 'var(--text-primary)',
  lineHeight: 1.1,
  marginBottom: '1.5rem'
}}>
  Let's build something<br />
  <em style={{ color: 'var(--gold)' }}>worth remembering.</em>
</h2>
```

---

## 8. Framer Motion Animation System

All animations use the same easing and are fast — slow animations feel cheap.

```js
// src/utils/motion.js

export const EASE = [0.16, 1, 0.3, 1]          // spring-like ease-out
export const DURATION_FAST = 0.2
export const DURATION_BASE = 0.35
export const DURATION_SLOW = 0.5

// Fade up — use on every section entry
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION_BASE, ease: EASE } }
}

// Stagger container — use on skill grid, project list
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
}

// Stagger child
export const staggerChild = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,  transition: { duration: DURATION_BASE, ease: EASE } }
}

// Page entry — wrap entire App
export const pageEntry = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION_SLOW, ease: EASE } }
}
```

**Standard section wrapper:**

```jsx
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
  {/* section content */}
</motion.section>
```

**Typewriter component:**

```jsx
// src/components/TypewriterText.jsx
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const phrases = ['Full-Stack Developer', 'Cybersecurity Student', 'Open to 2026 Internships']

export function TypewriterText() {
  // Simple approach with Framer Motion's animate
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const run = async () => {
      for (let i = 0; i < phrases.length; i++) {
        await animate(scope.current, { opacity: 1 }, { duration: 0.3 })
        // type out — set text character by character
        for (let j = 0; j <= phrases[i].length; j++) {
          scope.current.textContent = phrases[i].slice(0, j) + '|'
          await new Promise(r => setTimeout(r, 55))
        }
        await new Promise(r => setTimeout(r, 1200))
        await animate(scope.current, { opacity: 0 }, { duration: 0.2 })
      }
    }
    run()
  }, [])

  return (
    <p ref={scope} style={{
      fontFamily: 'var(--font-ui)',
      fontSize: '0.875rem',
      letterSpacing: '0.1em',
      color: 'var(--text-tertiary)',
      marginTop: '1.25rem',
      minHeight: '1.5rem'
    }} />
  )
}
```

---

## 9. Tailwind v4 Config Additions

Since you're on Tailwind v4 (CSS-first config), add these to your `src/index.css` under `@theme`:

```css
@theme {
  /* Custom colours */
  --color-gold:         #C9A96E;
  --color-gold-dim:     rgba(201, 169, 110, 0.15);
  --color-surface-1:    #141210;
  --color-surface-2:    #1C1915;
  --color-text-warm:    #F5F0E8;
  --color-tech-blue:    #3B4F6E;

  /* Custom font families */
  --font-display:  'Cormorant Garamond', Georgia, serif;
  --font-heading:  'DM Serif Display', Georgia, serif;
  --font-body:     'Lora', Georgia, serif;
  --font-ui:       'JetBrains Mono', monospace;

  /* Custom spacing */
  --spacing-section: clamp(4rem, 10vw, 8rem);
}
```

This lets you use Tailwind classes like `text-gold`, `bg-surface-1`, `font-display` directly.

---

## 10. Implementation Order

Work in this sequence to avoid breaking the site mid-redesign:

### Phase 1 — Foundations (30 min)
1. Add all CSS variables to `index.css` (Section 6)
2. Add `@theme` block to Tailwind config (Section 9)
3. Update `html` base styles — swap `#ffffff` text for `var(--text-primary)`
4. Add the utility classes (`.text-label`, `.gold-rule`, `.ghost-cta`)
5. Hot-reload check — everything should look slightly warmer immediately

### Phase 2 — Typography (1 hour)
1. Apply `h1 { font-family: var(--font-display) }` globally
2. Apply `h2 { font-family: var(--font-heading) }` globally
3. Apply `p { font-family: var(--font-body) }` globally
4. Apply `.font-ui` class to nav links, tags, labels
5. Increase hero H1 font size to display scale

### Phase 3 — Textures & Backgrounds (45 min)
1. Alternate section backgrounds (hero → surface-1 → base → surface-1)
2. Add grid overlay texture to hero
3. Add ambient glow to about section
4. Add hatch texture to skill cards and project cards

### Phase 4 — Components (2 hours)
1. Redesign nav links with animated underline
2. Redesign hero layout (two-column + decorative element)
3. Redesign skill section (grouped cards)
4. Redesign project cards (list layout + decorative numbers)
5. Redesign contact section (editorial centred layout)

### Phase 5 — Animation (1 hour)
1. Add `motion.js` utility file
2. Wrap all sections in `whileInView` fade-up
3. Add stagger to skill grid
4. Add typewriter to hero
5. Add project card hover animations

---

## 11. Do's and Don'ts

### Do

- ✅ Use `--gold` only on borders, underlines, italic text, and hover states
- ✅ Keep animations under 400ms — fast = premium
- ✅ Use `once: true` on `whileInView` — elements don't re-animate on scroll back
- ✅ Use `clamp()` for font sizes — never fixed px for display type
- ✅ Test on mobile — Cormorant Garamond at large sizes can overflow on 375px
- ✅ Use `-webkit-font-smoothing: antialiased` on `html` — serifs need it on dark backgrounds

### Don't

- ❌ Don't add a second accent colour
- ❌ Don't use all four font families in the same section
- ❌ Don't add `box-shadow` or `drop-shadow` for depth — use background level differences instead
- ❌ Don't animate `width` or `height` — animate `scaleX`/`scaleY` instead (GPU-accelerated)
- ❌ Don't set `transition: all` — always be explicit about which properties transition
- ❌ Don't use pure `#000000` or `#ffffff` anywhere — use `--bg-base` and `--text-primary`
- ❌ Don't put more than 2 texture layers on the same element

---

*Generated May 2026 — for Wafiq Nawaz's portfolio redesign*
