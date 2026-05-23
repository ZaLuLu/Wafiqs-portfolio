# PRODUCT REQUIREMENTS DOCUMENT
## Wafiq Nawaz — Portfolio Website Overhaul v2.0
**Author:** Design Audit  
**Date:** May 2026  
**Status:** Ready for Build  
**IDE:** Antigravity (Monaco-based, Vite hot-reload)

---

## Table of Contents
1. [Vision & Aesthetic Direction](#1-vision--aesthetic-direction)
2. [Reference Analysis](#2-reference-analysis)
3. [Colour System](#3-colour-system)
4. [Typography System](#4-typography-system)
5. [Tech Stack](#5-tech-stack)
6. [Site Architecture](#6-site-architecture)
7. [Section Specifications](#7-section-specifications)
   - [7.1 Hero / Landing](#71-hero--landing)
   - [7.2 About Me](#72-about-me)
   - [7.3 Skills](#73-skills)
   - [7.4 Projects](#74-projects)
   - [7.5 Contact](#75-contact)
8. [Animation System](#8-animation-system)
9. [Layout Rules](#9-layout-rules)
10. [Font Setup](#10-font-setup)
11. [CSS Token File](#11-css-token-file)
12. [File & Folder Structure](#12-file--folder-structure)
13. [Component Inventory](#13-component-inventory)
14. [Implementation Phases](#14-implementation-phases)
15. [Do's and Don'ts](#15-dos-and-donts)

---

## 1. Vision & Aesthetic Direction

### The Core Idea
**"A developer portfolio that reads like a Japanese editorial magazine crossed with a retro anime poster."**

This is not a SaaS landing page. This is not a Tailwind UI template. This is a *personal publication* — every section feels like a spread in a magazine that happens to be about a developer. Think: Kinfolk meets Pocari Sweat campaign meets a 1990s anime film poster.

### Aesthetic Keywords
`editorial` · `typographic` · `retro-futuristic` · `japanese-influenced` · `bold` · `handcrafted` · `ink-and-paper` · `anime-magazine`

### The One Thing Someone Will Remember
**The typography does work that images usually do.** Giant letterforms, vertical text, overlapping glyphs, text as texture — the type IS the design.

### What This Is NOT
- ❌ Inter/Roboto/Space Grotesk on a #1a1a1a background
- ❌ Card grid with blue gradient accents
- ❌ Particle.js background
- ❌ Scroll-triggered counter animations
- ❌ "Full-Stack Developer" in a hero with a blinking cursor and three line bio

---

## 2. Reference Analysis

### Image 1 — Japanese Botanical Poster (White Flowers)
**What to steal:**
- Dark textured background (paper grain overlay, not flat black)
- Giant Kanji / display type bleeding off edges
- Horizontal text columns flanking a central photographic element
- Bottom pill/badge label: `· WHITE FLOWERS ·` with × marks
- Zebra stripe decorative band behind the subject
- Tiny body copy in two columns, all-caps, tightly set
- Section markers: `GRACEFUL · COLORFUL · PLACIDLY` in mono caps

**Apply to portfolio:**
- Use overscaled display type on hero
- Use small tight mono columns for bio/about text
- Use × and ◆ and · as decorative punctuation throughout
- Bottom of hero gets a pill badge: `· WAFIQ NAWAZ ·`
- Paper grain CSS texture on dark sections

### Image 2 — Retro Anime Summer 2025 Poster
**What to steal:**
- Year "2025" as ENORMOUS background type that the illustration lives inside
- Vertical stripe bars cutting through the illustration
- Mixed italic script + serif + bold grotesque in one composition
- Sky/haze colour as a section background (not flat)
- Quote in script italic: *"Welcome back, barefoot season."*
- Small boxed text label bottom right: `see / you / soon`
- Layered depth: type behind image, image in front, type on top

**Apply to portfolio:**
- "WAFIQ" as enormous background letterforms on hero — photo of Wafiq lives inside the letters
- Vertical bars cut through the about section
- Quote in calligraphy font for pull-quotes
- Boxed small labels for metadata

### Image 3 — Pocari Sweat Class of '24 Poster
**What to steal:**
- Massive bold all-caps type filling the full width with tight tracking
- Mixed scripts: English bold grotesque + Japanese characters = equals sign for two languages
- Vertical rotated sidebar text: "CHOREOGRAPHY BY SOCHING"
- Blue monochromatic palette with white type — one colour dominates, everything else serves it
- Anime illustration as central content, type wraps around it
- Dates as typographic elements: `2024//SATURDAY · 03.16`
- Ultra-tight line spacing on the main logotype

**Apply to portfolio:**
- Section headers fill 100% width with tight tracking
- Vertical sidebar labels on skills section
- Project dates formatted as `2026//LIVE`
- Single dominant colour per section (not rainbow)

---

## 3. Colour System

### Primary Palette

```css
:root {
  /* ── Foundations ── */
  --ink:        #0D0C09;   /* Near-black with warm undertone — not pure #000 */
  --paper:      #F2EDE4;   /* Aged paper cream — not pure white */
  --haze:       #1C1915;   /* Dark surface — cards, nav bg on scroll */

  /* ── Dominants (one per section, see Section Specs) ── */
  --cobalt:     #1A5EDB;   /* Hero section — Pocari blue */
  --cobalt-dim: rgba(26, 94, 219, 0.12);
  --cobalt-mid: #4A7FE8;   /* Lighter cobalt for gradients */

  --saffron:    #F5A623;   /* Skills section — warm golden yellow */
  --saffron-dim: rgba(245, 166, 35, 0.10);

  --sakura:     #C9A96E;   /* About section / accent — warm gold */
  --sakura-dim: rgba(201, 169, 110, 0.15);

  /* ── Typographic ── */
  --type-primary:   #F2EDE4;   /* Main text on dark */
  --type-secondary: rgba(242, 237, 228, 0.52);
  --type-tertiary:  rgba(242, 237, 228, 0.28);
  --type-ink:       #0D0C09;   /* Text on light sections */
  --type-ink-dim:   rgba(13, 12, 9, 0.55);

  /* ── Detail ── */
  --noise-opacity: 0.04;   /* Paper grain overlay intensity */
}
```

### Section Colour Map

| Section | Background | Dominant | Text |
|---|---|---|---|
| Hero | `--ink` (#0D0C09) | `--cobalt` | `--type-primary` |
| About | `--paper` (#F2EDE4) | `--sakura` | `--type-ink` |
| Skills | `--ink` (#0D0C09) | `--saffron` | `--type-primary` |
| Projects | `--haze` (#1C1915) | `--cobalt` | `--type-primary` |
| Contact | `--paper` (#F2EDE4) | `--ink` | `--type-ink` |

### Grain Texture (apply to all sections)

```css
/* Add to every section — pure CSS, zero cost */
.section::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  z-index: 1;
}
.section > * { position: relative; z-index: 2; }
```

---

## 4. Typography System

### The Core Rule
**Two font personalities. Not two fonts — two personalities. Each personality can use 1-2 actual families.**

- **Personality A — THE VOICE:** Calligraphy / script / display. Used for: your name, pull-quotes, section highlight words. Should feel like ink on paper.
- **Personality B — THE MACHINE:** Typewriter / mono / condensed bold. Used for: labels, metadata, nav, body text. Should feel like a telegram or printing press.

### Font Selections

#### Personality A — The Voice (Calligraphy)

**Primary:** `Playfair Display` — italic, weight 400–700. This is a high-contrast editorial serif that reads as calligraphy-adjacent without being illegible. The thin/thick stroke contrast is extreme and beautiful at large sizes.

**Signature font (About section only):** `Dancing Script` — weight 700. Used exclusively for the "Wafiq Nawaz" signature near the photo. This is the only place this font appears.

**Alternative if you want to go more Japanese:** `Shippori Mincho` — a Japanese-influenced serif available on Google Fonts. Combines beautifully with Latin type.

#### Personality B — The Machine (Typewriter)

**Primary:** `Courier Prime` — weight 400. This is the best typewriter font on Google Fonts. It has correct proportions, proper kerning, and looks genuinely like typed text.

**Display/Bold labels:** `Bebas Neue` — weight 400 (it only has one weight, all caps). Used for section headers that need to fill 100% width. This is the font that makes "POCARI SWEAT" and "SUMMER" look that way.

**Small caps / mono details:** `JetBrains Mono` — weight 300–400. Used for code, dates, metadata, page numbers.

### Google Fonts Link (add to index.html)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@700&family=JetBrains+Mono:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Shippori+Mincho:wght@400;700&display=swap" rel="stylesheet">
```

### Font Role Table

| Role | Font | Weight | Size | Where |
|---|---|---|---|---|
| Hero name (massive) | Bebas Neue | 400 | `clamp(5rem, 15vw, 12rem)` | Hero only |
| Section display | Bebas Neue | 400 | `clamp(3rem, 8vw, 7rem)` | Section headers |
| Pull quotes | Playfair Display | 400 italic | `clamp(1.5rem, 3vw, 2.25rem)` | About, Contact |
| Signature | Dancing Script | 700 | `clamp(1.75rem, 3vw, 2.5rem)` | About section ONLY |
| Body text | Courier Prime | 400 | `1rem` | Paragraphs |
| All labels/metadata | JetBrains Mono | 400 | `0.6875rem` | Nav, dates, tags |
| Japanese accent text | Shippori Mincho | 400 | varies | Decorative only |

### Type Scale

```css
:root {
  --type-display:  clamp(5rem, 15vw, 12rem);   /* Hero name, BIG */
  --type-headline: clamp(3rem, 8vw, 7rem);      /* Section fills */
  --type-h2:       clamp(1.75rem, 4vw, 3rem);   /* Sub-headings */
  --type-quote:    clamp(1.25rem, 2.5vw, 2rem); /* Pull quotes */
  --type-body:     1rem;                         /* Body */
  --type-caption:  0.8125rem;                    /* Captions */
  --type-label:    0.6875rem;                    /* Mono labels */
}
```

---

## 5. Tech Stack

### Core Framework

```
React 19 + Vite 8
```

Why: You're already on this. Hot-reload works perfectly in Antigravity. Don't change.

### Styling

```
Tailwind CSS v4  (CSS-first config via @theme)
```

**Critical Antigravity note:** Tailwind v4 uses a CSS-first config — no `tailwind.config.js`. All custom values go into your `src/index.css` under `@theme { }`. This means Antigravity's hot-reload applies to your design tokens instantly when you edit CSS.

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --font-display: 'Bebas Neue', sans-serif;
  --font-serif:   'Playfair Display', Georgia, serif;
  --font-body:    'Courier Prime', 'Courier New', monospace;
  --font-mono:    'JetBrains Mono', monospace;
  --font-sign:    'Dancing Script', cursive;
  --font-jp:      'Shippori Mincho', serif;
  --color-ink:    #0D0C09;
  --color-paper:  #F2EDE4;
  --color-cobalt: #1A5EDB;
  --color-saffron:#F5A623;
  --color-sakura: #C9A96E;
}
```

### Animation

```
Framer Motion 12  (already installed in your repo)
```

Specific hooks to use:
- `useScroll` + `useTransform` — parallax on hero text
- `useInView` — section entry animations
- `motion.div` with `variants` — staggered component reveals
- `AnimatePresence` — project card transitions
- `useSpring` — smooth scroll-linked values

### Routing

```
React Router v7  (if multi-page) OR single-page scroll (recommended)
```

**Recommendation: Single-page with smooth scroll.** The magazine feel requires continuous scrolling, not page transitions. Use `id` anchors and scroll-behavior: smooth.

### Icons

```
Phosphor Icons (@phosphor-icons/react) — already in your repo
```

Use sparingly. Let typography carry the weight.

### Form Handling (Contact)

```
Formspree (free tier, no backend needed)
OR
EmailJS (@emailjs/browser)
```

### Optional: Lenis (Smooth Scroll Library)

```
npm install lenis
```

Lenis gives you buttery smooth scrolling that makes the parallax effects feel cinematic. Works perfectly with Framer Motion.

### Package.json additions

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "lenis": "^1.1.14",
    "react-router-dom": "^7.5.0"
  }
}
```

---

## 6. Site Architecture

### Single-Page Scroll Structure

```
┌─────────────────────────────────────────────────────┐
│  NAV (fixed, transparent → frosted glass on scroll) │
├─────────────────────────────────────────────────────┤
│  SECTION 01 — HERO          (100vh, dark/cobalt)    │
├─────────────────────────────────────────────────────┤
│  SECTION 02 — ABOUT         (min 100vh, cream)      │
├─────────────────────────────────────────────────────┤
│  SECTION 03 — SKILLS        (auto, dark/saffron)    │
├─────────────────────────────────────────────────────┤
│  SECTION 04 — PROJECTS      (auto, haze/cobalt)     │
├─────────────────────────────────────────────────────┤
│  SECTION 05 — CONTACT       (min 80vh, cream)       │
└─────────────────────────────────────────────────────┘
```

### Scroll Rhythm
The site alternates: dark → cream → dark → dark → cream. This creates visual breathing and makes each section feel distinct without using different accent colours.

---

## 7. Section Specifications

---

### 7.1 Hero / Landing

**Vibe:** Pocari Sweat poster × Japanese botanical print. Enormous type. Photo lives inside the letters. Grain texture.

#### Layout
```
┌────────────────────────────────────────────────┐
│ [NAV]                               [01 / 05]  │ ← tiny mono label
│                                                │
│  W  A  F  I  Q        ← 15vw Bebas Neue        │
│  ┌─────────────────┐                           │
│  │   [PHOTO OF     │  NAWAZ  ← partially behind│
│  │    WAFIQ]       │         photo              │
│  └─────────────────┘                           │
│                                                │
│  ──────── · FULL-STACK · CYBERSECURITY · ─────  │ ← marquee
│                                                │
│  [2026//BENGALURU]    [OPEN TO INTERNSHIPS]    │ ← mono labels
│                                                │
│        ↓ SCROLL  (animated bouncing arrow)    │
└────────────────────────────────────────────────┘
```

#### Detailed Specs

**Background:** `--ink` (#0D0C09) + paper grain CSS overlay

**Name treatment (most important element):**
- "WAFIQ" — Bebas Neue, `clamp(6rem, 16vw, 13rem)`, letter-spacing: -0.02em
- "NAWAZ" — same but positioned 2-3rem lower, partially behind the photo
- Both lines fill near 100% viewport width
- On dark background, letters are `--paper` (#F2EDE4)
- A thin cobalt line (1px, `--cobalt`) under "NAWAZ"

**Photo treatment:**
- Circular or rectangular with `border-radius: 4px`
- Positioned at `z-index: 2` (in front of "WAFIQ", behind "NAWAZ")
- Light `box-shadow: 0 0 0 1px rgba(242,237,228,0.1)`
- Sepia/grainy filter: `filter: contrast(1.05) saturate(0.9)`
- Width: `clamp(200px, 30vw, 380px)`

**Horizontal marquee (below name):**
```
· FULL-STACK DEVELOPER · CYBERSECURITY STUDENT · REACT · FASTAPI · PYTHON · BENGALURU, IN ·
```
- Font: JetBrains Mono, 0.6875rem, uppercase, letter-spacing: 0.15em
- Colour: `--type-secondary`
- Infinite scroll animation (CSS `@keyframes marquee`)
- Thin 0.5px lines above and below

**Bottom metadata:**
```
LEFT:    2026//BENGALURU · SVYASA UNIVERSITY
RIGHT:   OPEN TO INTERNSHIPS ↗
```
- Font: JetBrains Mono, 0.625rem
- Colour: `--type-tertiary`

**Decorative elements:**
- Three `×` marks scattered in background, `--type-tertiary` colour, 0.6rem
- Vertical text on far right: `PORTFOLIO 01` rotated 90°, JetBrains Mono

**Framer Motion:**
```jsx
// Entry sequence on mount
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
}

// Each word slides up from below
const wordVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

// Photo fades in last
const photoVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 } }
}
```

**Scroll parallax (Framer Motion):**
```jsx
const { scrollYProgress } = useScroll()
// "WAFIQ" moves up slower than scroll speed
const wafiqY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-20%'])
// Photo moves at normal speed
// "NAWAZ" moves up faster
const nawazY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-30%'])
```

---

### 7.2 About Me

**Vibe:** Japanese botanical print (Image 1) — two-column text flanking a central photo. Cream background. Signature font for name.

#### Layout
```
┌────────────────────────────────────────────────┐
│  ABOUT                        ← Bebas Neue, full-width, --ink
├────────────────────────────────────────────────┤
│                                                │
│  ┌──────────────────────────────────────────┐  │
│  │  [PHOTO OF WAFIQ — full height, slight  │  │
│  │   sepia tint, grain overlay, border:     │  │
│  │   1px solid rgba(13,12,9,0.15)]          │  │
│  │                              Wafiq Nawaz  │  │ ← Dancing Script bottom-right
│  └──────────────────────────────────────────┘  │
│                                                │
│  ┌────────────────┐  ┌────────────────────────┐│
│  │ LEFT COLUMN    │  │ RIGHT COLUMN           ││
│  │ "DISCIPLINE    │  │ BIOGRAPHICAL           ││
│  │ & CRAFT"       │  │ ANCHOR                 ││
│  │ (Playfair      │  │ (body text Courier     ││
│  │  Display       │  │  Prime, tight columns) ││
│  │  italic)       │  │                        ││
│  │                │  │ Operates at the        ││
│  │                │  │ intersection of...     ││
│  └────────────────┘  └────────────────────────┘│
│                                                │
│  ──── · CSE STUDENT · BENGALURU, IN · 2026 ──  │
└────────────────────────────────────────────────┘
```

#### Detailed Specs

**Background:** `--paper` (#F2EDE4) + paper grain texture

**Section header "ABOUT":**
- Bebas Neue, `clamp(4rem, 12vw, 10rem)`, `--ink`
- Letter-spacing: -0.01em
- Bleeds slightly off left edge (negative margin-left: -0.02em)

**Photo container:**
```css
.about-photo {
  width: clamp(260px, 35vw, 440px);
  aspect-ratio: 3 / 4;
  object-fit: cover;
  filter: contrast(1.06) saturate(0.85) sepia(0.08);
  border: 1px solid rgba(13, 12, 9, 0.12);
  border-radius: 2px;
  position: relative;
}
```

**Signature (most important detail):**
```jsx
// Positioned absolutely at bottom-right of photo container
<div style={{
  position: 'absolute',
  bottom: '-1rem',
  right: '-0.5rem',
  fontFamily: "'Dancing Script', cursive",
  fontWeight: 700,
  fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
  color: '#0D0C09',
  lineHeight: 1,
  transform: 'rotate(-3deg)',   // slight tilt — makes it feel handwritten
  pointerEvents: 'none',
  userSelect: 'none',
  zIndex: 10,
}}>
  Wafiq Nawaz
</div>
```

**Left column — pull quote:**
```
"DISCIPLINE
& CRAFT"
```
- Playfair Display italic, `clamp(1.5rem, 3vw, 2.5rem)`, `--type-ink`
- Gold left border: `border-left: 3px solid var(--sakura)`
- Padding-left: 1.5rem
- Line-height: 1.15

**Right column — bio text:**
- Courier Prime 400, `1rem`, `line-height: 1.75`
- Colour: `rgba(13, 12, 9, 0.65)`
- 2 columns of text, tight (max-width: 65ch each)
- Use the existing bio copy from your current site

**Bottom bar:**
```
──── · CSE STUDENT · SVYASA UNIVERSITY · BENGALURU, IN · 2026 ────
```
- JetBrains Mono, `0.6875rem`, `--type-ink-dim`
- Thin 0.5px rules on either side

**Decorative elements (from Image 1 reference):**
- Three `×` marks, `--type-ink-dim`, scattered
- Small zebra/wave pattern SVG strip between header and photo (optional)

**Framer Motion:**
```jsx
// Photo slides in from left
// Text columns fade up staggered
// Signature has a special "write" animation — draw in using SVG stroke if possible
// OR: simple scale + fade from bottom-right
```

---

### 7.3 Skills

**Vibe:** This section gets its OWN identity — not a grid of pills. Think: a typographic matrix. Like the technical specs page from your magazine portfolio but now as its own full section.

**Key requirement:** Skills section gets its own visual system, separate from every other section.

#### Layout
```
┌────────────────────────────────────────────────┐
│ SKILLS                        ← full-width Bebas│
│ ─────────────────────────────────────────────   │
│                                                │
│ [VERTICAL SIDEBAR]  [MAIN SKILL MATRIX]        │
│ F                   ┌──────────────────────┐   │
│ R                   │ FRONTEND             │   │ ← Bebas, saffron
│ O  ← rotated        │ React / Vite         ···│  Core Stack
│ N  Courier Prime    │ Tailwind CSS         ···│  Pixel Precision
│ T                   │ HTML5 / Semantic     ···│  Artful Markup
│ E                   │ Framer Motion        ···│  Motion System
│ N                   └──────────────────────┘   │
│ D                   ┌──────────────────────┐   │
│                     │ BACKEND & SECURITY   │   │
│                     │ Python / FastAPI      ···│  API Engine
│                     │ PostgreSQL           ···│  Data Layer
│                     │ JWT Auth             ···│  Security Gate
│                     │ OWASP / Cryptography ···│  Defensive Ops
│                     └──────────────────────┘   │
│                     ┌──────────────────────┐   │
│                     │ ADAPTIVE             │   │
│                     │ Problem Solving      ···│  Resolution
│                     │ System Architecture  ···│  Blueprint Think
│                     └──────────────────────┘   │
│                                                │
│ [PROFICIENCY BAR — custom, not default pills]  │
└────────────────────────────────────────────────┘
```

#### Detailed Specs

**Background:** `--ink` (#0D0C09) + grain texture

**Section header "SKILLS":**
- Bebas Neue, `clamp(5rem, 14vw, 11rem)`, full width
- Colour: `--saffron` (#F5A623) — this is the ONLY section with saffron as text colour

**Vertical rotated sidebar labels:**
```css
.skill-sidebar {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  font-family: 'Courier Prime', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(242, 237, 228, 0.25);
  align-self: stretch;
  display: flex;
  align-items: center;
}
```

**Skill category headers:**
- Bebas Neue, `1.5rem`, `--saffron`
- Border-bottom: `1px solid rgba(245, 166, 35, 0.25)`
- Padding-bottom: 0.5rem, margin-bottom: 1rem

**Skill rows (leader line style from Image 1):**
```jsx
// Each row: skill name on left, dotted leader line, category label right
<div className="leader-row">
  <span className="leader-skill">React / Vite</span>
  <div className="leader-line" />  {/* CSS dotted border-bottom */}
  <span className="leader-cat">Core Stack</span>
</div>
```

```css
.leader-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 10px;
}
.leader-skill {
  font-family: 'Courier Prime', monospace;
  font-size: 0.9375rem;
  color: var(--type-primary);
  white-space: nowrap;
}
.leader-line {
  flex: 1;
  border-bottom: 1px dotted rgba(242, 237, 228, 0.18);
  margin-bottom: 4px;
}
.leader-cat {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.625rem;
  letter-spacing: 0.1em;
  color: var(--saffron);
  white-space: nowrap;
  text-transform: uppercase;
}
```

**Proficiency indicator (NOT a progress bar):**
Instead of a boring progress bar, use a row of squares:
```
REACT   ■ ■ ■ ■ ■ ■ ■ ■ □ □   Advanced
PYTHON  ■ ■ ■ ■ ■ ■ ■ □ □ □   Proficient
```
- Filled squares: `--saffron`
- Empty squares: `rgba(245, 166, 35, 0.15)`
- Label: JetBrains Mono, `0.625rem`, `--type-tertiary`

**Framer Motion:**
```jsx
// Skill categories stagger in from left
const skillCategoryVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: (i) => ({
    x: 0, opacity: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  })
}

// Individual leader rows stagger upward
const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4 }
  })
}
```

---

### 7.4 Projects

**Vibe:** Case study showcase like a magazine editorial spread. NOT a card grid. Each project gets a full-bleed row with generous empty/negative space. Images show as blank placeholder space with a textured border — the TEXT is the content.

**Key requirement:** "blank space" for project images. This means: project imagery is either absent or treated as a textured empty frame that hints at a screenshot without showing it clearly.

#### Layout (each project row)
```
┌────────────────────────────────────────────────┐
│ PROJECTS                     ← Bebas, full-width│
│ ──────────────────────────────────────────────  │
│                                                │
│ ┌─────── PROJECT ROW 01 ─────────────────────┐ │
│ │                                            │ │
│ │  [BLANK FRAME]           PROJECT INFO      │ │
│ │  ┌───────────────┐       01                │ │
│ │  │               │       RETAILMIND        │ │ ← Bebas
│ │  │  [empty space │       ─────────────     │ │
│ │  │   with grain  │       Full-stack demand │ │ ← Courier Prime
│ │  │   texture and │       forecasting with  │ │
│ │  │   thin border]│       AI integration.   │ │
│ │  │               │                         │ │
│ │  └───────────────┘       REACT · FASTAPI   │ │ ← JetBrains Mono
│ │                          POSTGRESQL · 2026  │ │
│ │                                            │ │
│ │                          [LIVE ↗] [SOURCE] │ │
│ └────────────────────────────────────────────┘ │
│                                                │
│ ┌─────── PROJECT ROW 02 ─────────────────────┐ │
│ │  (alternates: info on left, frame on right)│ │
└────────────────────────────────────────────────┘
```

#### Detailed Specs

**Background:** `--haze` (#1C1915) + grain texture

**Section header "PROJECTS":**
- Bebas Neue, `clamp(5rem, 14vw, 11rem)`, `--type-primary`
- Full-width, letter-spacing -0.01em
- Cobalt thin line below: `border-bottom: 1px solid rgba(26, 94, 219, 0.4)`

**Project index number:**
- Bebas Neue, `5rem`, opacity: 0.06, position: absolute, top-right
- Acts as a watermark/background element

**Blank image frame (THE KEY DETAIL):**
```css
.project-frame {
  width: 100%;
  aspect-ratio: 16 / 10;
  background:
    repeating-linear-gradient(
      135deg,
      rgba(242, 237, 228, 0.015) 0px,
      rgba(242, 237, 228, 0.015) 1px,
      transparent 1px,
      transparent 8px
    );
  border: 0.5px solid rgba(242, 237, 228, 0.12);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.project-frame::before {
  content: attr(data-project);  /* e.g. "RETAILMIND" */
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  color: rgba(242, 237, 228, 0.04);
  letter-spacing: -0.01em;
  pointer-events: none;
}
```

**On hover:** The frame reveals a faint screenshot or gets a cobalt tint overlay:
```css
.project-frame:hover {
  border-color: rgba(26, 94, 219, 0.4);
  background-color: rgba(26, 94, 219, 0.03);
  transition: all 0.3s ease;
}
```

**Project title:**
- Bebas Neue, `clamp(2rem, 5vw, 4rem)`, `--type-primary`
- Letter-spacing: -0.01em

**Project description:**
- Courier Prime, `0.9375rem`, `--type-secondary`
- Max-width: 45ch
- Line-height: 1.7

**Tech stack tags:**
```
REACT · FASTAPI · POSTGRESQL · 2026//LIVE
```
- JetBrains Mono, `0.625rem`, `--type-tertiary`
- Letter-spacing: 0.1em, text-transform: uppercase
- Dots (·) as separators, not pills/badges

**CTA links:**
- Primary: `EXECUTE PAYLOAD ↗` — cobalt (`--cobalt`), JetBrains Mono, underline on hover
- Secondary: `VIEW SOURCE` — `--type-tertiary`, same font, smaller

**Row divider between projects:**
```css
.project-divider {
  width: 100%;
  height: 0.5px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(242, 237, 228, 0.1) 20%,
    rgba(242, 237, 228, 0.1) 80%,
    transparent
  );
  margin: 4rem 0;
}
```

**Alternate layout:** Row 1: frame left, text right. Row 2: text left, frame right.

**Framer Motion:**
```jsx
// Each project row enters from bottom
// Frame: opacity 0 → 1, y: 30px → 0
// Text column: y: 20px → 0, stagger children

// On hover: frame gets subtle scale(1.01)
// Project number watermark: counter animates 00 → 01 → 02

whileHover={{ scale: 1.01 }}
transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
```

---

### 7.5 Contact

**Vibe:** Back to cream. Quiet closing spread. Editorial "back cover" energy.

#### Layout
```
┌────────────────────────────────────────────────┐
│                                                │
│  TRANSMIT                    ← Bebas, --ink     │
│  REQUEST                     ← second line      │
│                                                │
│  ─── "Every great product ───────────────────  │
│       starts with a                            │
│       conversation."         ← Playfair italic  │
│                                                │
│  [CONTACT GRID]                                │
│  ┌──────────────┐  ┌──────────────────────┐   │
│  │ OUTLOOK MAIL │  │ GMAIL                │   │
│  │ email...     │  │ email...             │   │
│  ├──────────────┤  ├──────────────────────┤   │
│  │ LINKEDIN     │  │ GITHUB               │   │
│  │ in/wafiq...  │  │ github.com/ZaLuLu   │   │
│  └──────────────┘  └──────────────────────┘   │
│                                                │
│  OR TRANSMIT A MESSAGE:                        │
│  Name: _____________________________           │
│  Email: ____________________________           │
│  Message: __________________________           │
│  ____________________________________          │
│                                                │
│  [TRANSMIT REGISTER →]       [↓ RÉSUMÉ]       │
│                                                │
│  ─────────────── · 2026 · ZaLuLu ────────────  │
└────────────────────────────────────────────────┘
```

**Background:** `--paper` + grain texture

**Header:** Bebas Neue, `clamp(4rem, 12vw, 10rem)`, `--ink`, broken across 2 lines for dramatic effect

**Pull quote:** Playfair Display italic, `clamp(1.25rem, 2.5vw, 1.75rem)`, gold left border

**Contact grid:** 2×2 grid, each cell has a JetBrains Mono label + Courier Prime value. Thin `0.5px solid rgba(13,12,9,0.12)` borders.

**Form inputs:** Same treatment as the contact inputs from your magazine portfolio — transparent, bottom-border only, Courier Prime.

**Submit button:**
```css
.submit-btn {
  border: 1px solid #0D0C09;
  background: transparent;
  color: #0D0C09;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 10px 24px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.submit-btn:hover {
  background: #0D0C09;
  color: #F2EDE4;
}
```

---

## 8. Animation System

### Philosophy
**"One slow breath per section."** Each section gets one major entrance animation — not seventeen micro-interactions. The scroll experience should feel like turning the pages of a heavy art book, not clicking through a SaaS demo.

### Global Motion Config

```jsx
// src/utils/motion.js
export const EASE = [0.16, 1, 0.3, 1]       // Premium spring-out easing
export const EASE_IN = [0.4, 0, 1, 1]        // For exits
export const EASE_STANDARD = [0.25, 0.46, 0.45, 0.94]  // For hovers

export const DUR = {
  fast:   0.18,
  base:   0.35,
  slow:   0.65,
  xslow:  0.9,
}

// Standard fade-up (used on almost everything)
export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: DUR.slow, ease: EASE } }
}

// Stagger container
export const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay, delayChildren: 0.1 } }
})

// Slide from left
export const slideLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR.slow, ease: EASE } }
}

// Scale in (for the photo, skill boxes)
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: DUR.xslow, ease: EASE } }
}
```

### Section-by-Section Animations

| Section | Entry Animation | Special |
|---|---|---|
| Hero | `fadeUp` staggered on each name word | Parallax scroll on name layers |
| About | `slideLeft` on photo, `fadeUp` on text | Signature "writes in" on delay |
| Skills | `slideLeft` on categories, row `fadeUp` stagger | Counter animation on skill squares |
| Projects | `fadeUp` per row, `whileInView` | Frame hover reveals subtle tint |
| Contact | `fadeUp` on all elements | Form inputs focus animation |

### Marquee (Hero)

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.marquee-inner {
  display: flex;
  white-space: nowrap;
  animation: marquee 28s linear infinite;
  /* Duplicate content inside so it loops seamlessly */
}
```

### Smooth Scroll with Lenis

```jsx
// src/main.jsx
import Lenis from 'lenis'
import { useEffect } from 'react'

const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
```

### Navigation — Scroll-triggered glass effect

```jsx
// Nav transitions from transparent to frosted glass on scroll
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 60)
  window.addEventListener('scroll', handler)
  return () => window.removeEventListener('scroll', handler)
}, [])

// Nav style when scrolled
const navStyle = scrolled ? {
  background: 'rgba(13, 12, 9, 0.85)',
  backdropFilter: 'blur(12px)',
  borderBottom: '0.5px solid rgba(242, 237, 228, 0.08)',
} : {
  background: 'transparent',
}
```

### Custom Cursor (optional but recommended)

```jsx
// A small dot that follows the mouse — feels editorial
// On hover over links: expands + gets a ring
```

---

## 9. Layout Rules

### Grid System

```css
:root {
  --grid-cols: 12;
  --grid-gutter: clamp(1rem, 3vw, 2rem);
  --content-max: 1200px;
  --section-padding: clamp(5rem, 12vw, 10rem);
}
```

### Section Structure

```jsx
// Every section follows this wrapper pattern
<section
  id="skills"
  className="section relative overflow-hidden"
  style={{ padding: 'var(--section-padding) var(--grid-gutter)' }}
>
  {/* Grain texture layer */}
  <div className="grain-overlay" aria-hidden="true" />
  
  {/* Content */}
  <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
    {/* Section content */}
  </div>
</section>
```

### Breaking The Grid (intentionally)

In editorial design, breaking the grid is the point. These elements should overflow their containers:

- Hero name ("WAFIQ") — bleeds to left edge
- Section headers — letter-spacing causes slight right overflow (use `overflow-x: hidden` on sections)
- The decorative index numbers in Projects — overflow their column
- Vertical sidebar text in Skills — outside the main column

### Responsive Breakpoints

```css
/* Mobile first */
/* sm: 640px — tablet  */
/* md: 768px — desktop start */
/* lg: 1024px — full layout */
/* xl: 1280px — wide */

/* Key layout changes at mobile: */
/* - Hero: name stacks vertically, no parallax */
/* - About: photo full-width, text below */
/* - Skills: sidebar hidden, full-width categories */
/* - Projects: frame full-width, text below */
```

---

## 10. Font Setup

### index.html — Full font preload

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Font preconnects -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- All portfolio fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Dancing+Script:wght@600;700&family=JetBrains+Mono:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Shippori+Mincho:wght@400;700&display=swap" rel="stylesheet">
  
  <title>Wafiq Nawaz — Full-Stack Developer</title>
</head>
```

### Remove from current index.html

```html
<!-- DELETE THESE — not needed anymore -->
<link ... Libre+Baskerville ... >
<link ... Lora ... >
<link ... DM+Serif+Display ... >
<link ... Cormorant+Garamond ... > <!-- only if moving away from magazine style -->
```

---

## 11. CSS Token File

### src/index.css — Full token block

```css
@import "tailwindcss";

/* ─────────────────────────────────────────────────────────── */
/* Tailwind v4 theme tokens                                    */
/* ─────────────────────────────────────────────────────────── */

@theme {
  /* Font families */
  --font-display:  'Bebas Neue', sans-serif;
  --font-serif:    'Playfair Display', Georgia, serif;
  --font-body:     'Courier Prime', 'Courier New', monospace;
  --font-mono:     'JetBrains Mono', monospace;
  --font-sign:     'Dancing Script', cursive;
  --font-jp:       'Shippori Mincho', serif;

  /* Colours */
  --color-ink:        #0D0C09;
  --color-paper:      #F2EDE4;
  --color-haze:       #1C1915;
  --color-cobalt:     #1A5EDB;
  --color-cobalt-mid: #4A7FE8;
  --color-saffron:    #F5A623;
  --color-sakura:     #C9A96E;
}

/* ─────────────────────────────────────────────────────────── */
/* Custom properties (used in inline styles + CSS)             */
/* ─────────────────────────────────────────────────────────── */

:root {
  /* Backgrounds */
  --ink:        #0D0C09;
  --paper:      #F2EDE4;
  --haze:       #1C1915;

  /* Accents */
  --cobalt:     #1A5EDB;
  --cobalt-dim: rgba(26, 94, 219, 0.12);
  --saffron:    #F5A623;
  --saffron-dim: rgba(245, 166, 35, 0.10);
  --sakura:     #C9A96E;
  --sakura-dim: rgba(201, 169, 110, 0.15);

  /* Text — dark pages */
  --type-primary:   #F2EDE4;
  --type-secondary: rgba(242, 237, 228, 0.52);
  --type-tertiary:  rgba(242, 237, 228, 0.28);

  /* Text — light pages */
  --type-ink:      #0D0C09;
  --type-ink-dim:  rgba(13, 12, 9, 0.55);
  --type-ink-off:  rgba(13, 12, 9, 0.30);

  /* Type scale */
  --type-display:  clamp(5rem, 15vw, 12rem);
  --type-headline: clamp(3rem, 8vw, 7rem);
  --type-h2:       clamp(1.75rem, 4vw, 3rem);
  --type-quote:    clamp(1.25rem, 2.5vw, 2rem);
  --type-body:     1rem;
  --type-caption:  0.8125rem;
  --type-label:    0.6875rem;

  /* Spacing */
  --section-pad: clamp(5rem, 12vw, 10rem);
  --content-max: 1200px;
  --gutter:      clamp(1.25rem, 4vw, 2.5rem);

  /* Motion */
  --ease:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-std:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --dur-fast:  180ms;
  --dur-base:  350ms;
  --dur-slow:  650ms;
}

/* ─────────────────────────────────────────────────────────── */
/* Base styles                                                 */
/* ─────────────────────────────────────────────────────────── */

* { box-sizing: border-box; }

html {
  background: var(--ink);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-family: 'Courier Prime', 'Courier New', monospace;
  color: var(--type-primary);
  overflow-x: hidden;
}

/* ─────────────────────────────────────────────────────────── */
/* Grain texture overlay                                       */
/* ─────────────────────────────────────────────────────────── */

.grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
}

.grain + * { position: relative; z-index: 2; }

/* ─────────────────────────────────────────────────────────── */
/* Leader rows (Skills section)                               */
/* ─────────────────────────────────────────────────────────── */

.leader-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 10px;
}
.leader-skill {
  font-family: 'Courier Prime', monospace;
  font-size: 0.9375rem;
  color: var(--type-primary);
  white-space: nowrap;
}
.leader-line {
  flex: 1;
  border-bottom: 1px dotted rgba(242, 237, 228, 0.18);
  margin-bottom: 4px;
}
.leader-cat {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.625rem;
  letter-spacing: 0.1em;
  color: var(--saffron);
  white-space: nowrap;
  text-transform: uppercase;
}

/* ─────────────────────────────────────────────────────────── */
/* Project frame                                              */
/* ─────────────────────────────────────────────────────────── */

.project-frame {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: repeating-linear-gradient(
    135deg,
    rgba(242, 237, 228, 0.015) 0px,
    rgba(242, 237, 228, 0.015) 1px,
    transparent 1px,
    transparent 8px
  );
  border: 0.5px solid rgba(242, 237, 228, 0.1);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  transition: border-color var(--dur-base) var(--ease-std),
              background-color var(--dur-base) var(--ease-std);
}
.project-frame:hover {
  border-color: rgba(26, 94, 219, 0.35);
  background-color: rgba(26, 94, 219, 0.03);
}

/* ─────────────────────────────────────────────────────────── */
/* Marquee                                                    */
/* ─────────────────────────────────────────────────────────── */

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-inner {
  display: flex;
  white-space: nowrap;
  animation: marquee 30s linear infinite;
}
.marquee-inner:hover {
  animation-play-state: paused;
}

/* ─────────────────────────────────────────────────────────── */
/* Buttons                                                    */
/* ─────────────────────────────────────────────────────────── */

.btn-ghost-dark {
  display: inline-block;
  border: 1px solid rgba(242, 237, 228, 0.3);
  color: var(--type-primary);
  background: transparent;
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--type-label);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 9px 22px;
  cursor: pointer;
  transition: background var(--dur-fast), border-color var(--dur-fast);
}
.btn-ghost-dark:hover {
  background: rgba(242, 237, 228, 0.06);
  border-color: rgba(242, 237, 228, 0.6);
}

.btn-ghost-light {
  border-color: rgba(13, 12, 9, 0.4);
  color: var(--type-ink);
}
.btn-ghost-light:hover {
  background: rgba(13, 12, 9, 0.06);
  border-color: var(--ink);
}
```

---

## 12. File & Folder Structure

```
src/
├── assets/
│   ├── wafiq-photo.jpg          ← Import this, don't use raw path string
│   ├── wafiq-photo-about.jpg    ← Separate crop for About section
│   └── og-image.jpg
│
├── components/
│   ├── Nav.jsx                  ← Fixed nav with scroll glass effect
│   ├── Grain.jsx                ← Reusable grain overlay component
│   ├── GoldRule.jsx             ← Decorative divider (can be used across sections)
│   ├── Marquee.jsx              ← Infinite scrolling text strip
│   └── SectionLabel.jsx         ← "01 / HERO" mono label used on each section
│
├── sections/
│   ├── Hero.jsx                 ← Section 01
│   ├── About.jsx                ← Section 02
│   ├── Skills.jsx               ← Section 03
│   ├── Projects.jsx             ← Section 04
│   └── Contact.jsx              ← Section 05
│
├── data/
│   ├── skills.js                ← Skill data (name, category, proficiency 1-10)
│   └── projects.js              ← Project data (title, desc, stack, url, year)
│
├── utils/
│   ├── motion.js                ← All Framer Motion variants & config
│   └── lenis.js                 ← Lenis smooth scroll setup
│
├── App.jsx                      ← Imports all sections, sets up Lenis
├── index.css                    ← All tokens + base styles (see section 11)
└── main.jsx                     ← React entry point
```

---

## 13. Component Inventory

### Nav.jsx

```jsx
// Fixed position, transparent → glass on scroll
// Left: WAFIQ (Bebas Neue, small)
// Right: mono links — ABOUT · SKILLS · PROJECTS · CONTACT
// Active section: underline the current link
// Mobile: hamburger → full-screen overlay menu
```

### Grain.jsx

```jsx
export function Grain() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,...")`,
        opacity: 0.04,
      }}
    />
  )
}
```

### Marquee.jsx

```jsx
// Props: items (string[]), speed (number), direction ('left' | 'right')
// Duplicates items array for seamless loop
// Pause on hover
```

### SectionLabel.jsx

```jsx
// Props: number (string e.g. "01"), label (string e.g. "HERO"), total (string e.g. "05")
// Renders: "01 / 05" in JetBrains Mono, positioned top-right of section
```

### skills.js (data file)

```js
export const skills = [
  {
    category: 'FRONTEND',
    sidebar: 'FRONTEND DEV',
    items: [
      { name: 'React / Vite',        cat: 'Core Stack',      level: 9 },
      { name: 'Tailwind CSS',         cat: 'Pixel Precision', level: 8 },
      { name: 'HTML5 / Semantic',     cat: 'Artful Markup',   level: 9 },
      { name: 'Framer Motion',        cat: 'Motion System',   level: 7 },
      { name: 'JavaScript / ES6+',    cat: 'Render Engine',   level: 8 },
    ]
  },
  {
    category: 'BACKEND & SECURITY',
    sidebar: 'BACKEND OPS',
    items: [
      { name: 'Python / FastAPI',     cat: 'API Engine',      level: 8 },
      { name: 'PostgreSQL',           cat: 'Data Layer',      level: 7 },
      { name: 'JWT Authentication',   cat: 'Security Gate',   level: 7 },
      { name: 'OWASP / Cryptography', cat: 'Defensive Ops',   level: 6 },
      { name: 'Gemini AI API',        cat: 'AI Integration',  level: 7 },
    ]
  },
  {
    category: 'ADAPTIVE',
    sidebar: 'SOFT SKILLS',
    items: [
      { name: 'Problem Solving',      cat: 'Resolution',      level: 9 },
      { name: 'System Architecture',  cat: 'Blueprint Think', level: 7 },
    ]
  },
]
```

### projects.js (data file)

```js
export const projects = [
  {
    id: '01',
    title: 'RETAILMIND',
    subtitle: 'Demand Forecasting Engine',
    description: 'An intelligent demand forecasting and analytical engine for small and medium businesses. Automates CSV exports, async FastAPI pipelines, PostgreSQL analytics, and Gemini AI summaries.',
    stack: ['REACT', 'FASTAPI', 'POSTGRESQL', 'GEMINI AI'],
    year: '2026',
    status: 'LIVE',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: '02',
    title: 'ZALULU PORTFOLIO',
    subtitle: 'Tactile Magazine Interface',
    description: 'An interactive lookbook portfolio challenging the boundaries of digital editorial design. Horizontal page-flipping physics, wabi-sabi colour blocks, typographic restraint.',
    stack: ['REACT', 'TAILWIND CSS', 'VITE'],
    year: '2026',
    status: 'LIVE',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: '03',
    title: 'FASTAPI SECURITY',
    subtitle: 'Backend Security Research',
    description: 'Web security pipelines, cryptographic helpers, and JWT-authenticated route nodes. Full OWASP-aligned implementation.',
    stack: ['PYTHON', 'FASTAPI', 'JWT', 'OWASP'],
    year: '2025',
    status: 'RESEARCH',
    liveUrl: null,
    sourceUrl: '#',
  },
]
```

---

## 14. Implementation Phases

### Phase 1 — Foundation (2 hours)
1. Update `index.html` — add all new Google Fonts, remove old ones
2. Paste full token block into `src/index.css`
3. Create folder structure (components/, sections/, data/, utils/)
4. Create `motion.js` utility file with all variants
5. Set up Lenis smooth scroll in `main.jsx`
6. Create `Grain.jsx` component
7. Install Lenis: `npm install lenis`

**Verification:** Hot-reload in Antigravity — fonts should switch immediately when you change `font-family` references.

### Phase 2 — Nav (30 min)
1. Build `Nav.jsx` with scroll glass effect
2. Implement active section detection with IntersectionObserver

### Phase 3 — Hero (2 hours, most important)
1. Build massive name treatment
2. Import photo correctly (`import heroPhoto from '../assets/...'`)
3. Add grain texture
4. Add marquee strip
5. Add bottom metadata
6. Add entry animations
7. Add scroll parallax

### Phase 4 — About (1.5 hours)
1. Build photo container with correct sizing
2. Add signature positioned bottom-right of photo
3. Build two-column text layout
4. Add pull quote with gold border
5. Add entry animations

### Phase 5 — Skills (1.5 hours)
1. Build leader row CSS
2. Map skills.js data to leader rows
3. Add skill level squares
4. Add vertical sidebar labels
5. Add stagger entrance animations

### Phase 6 — Projects (1.5 hours)
1. Build project frame component
2. Map projects.js data to rows
3. Alternate layout (frame left/right)
4. Add project number watermarks
5. Add CTA button hierarchy
6. Add hover animations

### Phase 7 — Contact (1 hour)
1. Build contact grid
2. Style form inputs
3. Connect to Formspree or EmailJS
4. Add entrance animations

### Phase 8 — Polish (1 hour)
1. Mobile responsive check at 375px, 768px
2. Add custom cursor (optional)
3. Test all animations
4. Check font rendering on both Antigravity dev and Vercel preview
5. Update vercel.json if needed

---

## 15. Do's and Don'ts

### Do ✅

- Use `import img from '../assets/img.jpg'` — never raw string paths in Vite
- Keep Bebas Neue for ALL section headers — consistency is the system
- Use grain texture on every section — it unifies the dark and light pages
- Use `once: true` in `whileInView` — elements don't re-animate on scroll back
- Use CSS `clamp()` for all font sizes — never fixed px on display type
- Keep Dancing Script to the signature ONLY — one appearance makes it special
- Use the dotted leader line for skills — it's the most editorial element available
- Keep project images as blank frames — the restraint IS the statement
- Test Framer Motion with `reducedMotion` — `useReducedMotion()` hook

### Don't ❌

- Don't use Inter, Roboto, or Space Grotesk anywhere
- Don't use a card grid for projects — it's the most generic layout possible
- Don't add purple gradients or geometric particles
- Don't use skill progress bars — use the square indicator instead
- Don't center-align hero text — editorial type is left-aligned or bleeds to edges
- Don't add a testimonials or "what I bring to the table" section
- Don't animate width or height properties — use scaleX/scaleY (GPU-accelerated)
- Don't use `transition: all` — specify exact properties
- Don't use `box-shadow` for depth — use background level differences
- Don't use the same background colour for two adjacent sections
- Don't make the contact form the hero of the contact section — the pull quote is

---

*PRD v2.0 — Wafiq Nawaz Portfolio Overhaul · May 2026*  
*Design direction: Japanese editorial magazine × retro anime poster × typographic poster art*
MDEOF