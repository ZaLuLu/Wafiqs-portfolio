# Wafiq Portfolio — Full Fix Guide
**Site:** wafiqnawaz.vercel.app · **Repo:** ZaLuLu/Wafiqs-portfolio  
**Stack:** React 19 + Vite 8 + Tailwind v4 + Framer Motion 12 + react-pageflip  
**Aesthetic target:** Typographic editorial magazine — think Kinfolk, Bloomberg Businessweek, Monocle

---

## Table of Contents
1. [Diagnosis — What's Actually Wrong](#1-diagnosis--whats-actually-wrong)
2. [Colour System — The Full Swap](#2-colour-system--the-full-swap)
3. [Typography — Strict Role Assignment](#3-typography--strict-role-assignment)
4. [Page 1 — Cover (Hero)](#4-page-1--cover-hero)
5. [Page 2 — Contents Spread](#5-page-2--contents-spread)
6. [Page 3 — Technical Specs](#6-page-3--technical-specs)
7. [Page 4 — Projects Spread](#7-page-4--projects-spread)
8. [Page 5 — Contact](#8-page-5--contact)
9. [index.css — Full Token Block](#9-indexcss--full-token-block)
10. [Reusable Components](#10-reusable-components)
11. [Build Sequence](#11-build-sequence)
12. [Do's and Don'ts](#12-dos-and-donts)

---

## 1. Diagnosis — What's Actually Wrong

You've done something genuinely interesting with the magazine spread format — `react-pageflip` as a portfolio is rare and memorable. The problems aren't conceptual, they're execution. Here's the honest breakdown:

### Cover (Page 1)
- **The script font is wrong.** What's rendering as "Wafiq Nawaz" looks like Pacifico or Dancing Script — a font not declared in your `index.html`. It's likely coming from a cached Google Fonts request or a leftover class. This makes the cover look like a Canva wedding invite, not an editorial publication.
- **The left half is black.** Your photo isn't rendering — either the `src` path is broken after Vite build, or it's hidden behind an overlay with `z-index` issues.
- **Metadata labels float.** "CREATIVE ARCHITECTURE · THE DEVELOPER ISSUE // CHARACTER DOCUMENTARY" have no visual anchor — they drift in the top right with no container relationship to the name or the image.

### Contents (Page 2)
- **Text is being clipped.** The chapter descriptions are cut at the column edge — react-pageflip forces `overflow: hidden` on its pages, and your columns overflow into it.
- **The "CONTENTS" logotype is in the wrong font.** It's in a condensed grotesque (looks like Barlow Condensed or similar), not in your declared serif stack. It looks copy-pasted from a different project.
- **The photo watermark is illegible.** "Wafiq Nawaz" overlaid in italic on the bottom of the photo is invisible against the dark lower half of the image.

### Technical Specs (Page 3)
- **Red accent implies error.** The section labels (BACKEND & CYBER SECURITY, FRONTEND DEVELOPMENT, ADAPTIVE SOFT SKILLS) are in red — in web UI, red = danger/error. Replace with gold.
- **The dotted leader lines are inconsistent.** Some rows have more dots than others because you're using hardcoded characters (`···`). CSS `border-bottom: dotted` will make them perfectly even.
- **Education card is too heavy.** The bordered box around the degree information has too much visual weight for supporting content.

### Projects (Page 4)
- **Both CTAs look identical.** "EXECUTE PAYLOAD ↗" and "VIEW SOURCE" have the same visual weight — no hierarchy between primary and secondary actions.
- **Right page text is centred.** The RetailMind left page is left-aligned; the Zalulu Portfolio right page is centred. Inconsistent alignment on a spread looks like a bug.
- **Right page thumbnail is too small.** It floats in the centre of the page without filling the space.

### Contact (Page 5)
- **Left page is completely empty.** Half of the final spread is dead black. No content, no texture, no intention.
- **Form inputs are unstyled.** Browser defaults on a dark background look broken.
- **"DOWNLOAD IIM-STYLE RESUME"** — IIM is an Indian business school reference that international visitors won't understand. Rename it.

---

## 2. Colour System — The Full Swap

### The Problem
You have two accent colours competing: a warm gold (`#C9A96E`) used on the cover, and a red (`#ef4444` or similar Tailwind `text-red-*`) used on the skills/spec pages. They don't belong to the same system. Red reads as an error state. Gold is the correct editorial accent.

### New Palette

```css
/* Backgrounds — three levels */
--bg-dark:    #0C0C0C;   /* Cover, dark left pages, contact background */
--bg-bridge:  #1C1A16;   /* Transition surface — never used alone, as a card background on dark pages */
--bg-cream:   #F0EBE0;   /* Contents, technical specs, right project pages */

/* Accent — ONE colour */
--gold:       #C9A96E;   /* The only accent. Used sparingly. */
--gold-dim:   rgba(201, 169, 110, 0.20);  /* Borders, dividers, tags */
--gold-ghost: rgba(201, 169, 110, 0.07);  /* Hover backgrounds */

/* Text — context-sensitive */
--text-light:     #F5F0E8;              /* Primary text on dark pages */
--text-light-dim: rgba(245, 240, 232, 0.50);  /* Secondary text on dark pages */
--text-dark:      #3A3020;             /* Primary text on cream pages */
--text-dark-dim:  rgba(58, 48, 32, 0.55);    /* Secondary text on cream pages */
```

### What to Replace Immediately

Do a global find-and-replace across all JSX and CSS files:

| Find | Replace |
|---|---|
| `text-red-400`, `text-red-500`, `text-red-600` | `text-[#C9A96E]` or `style={{ color: 'var(--gold)' }}` |
| `color: red`, `color: #dc2626`, `color: #ef4444` | `color: var(--gold)` |
| `background: white`, `bg-white`, `background: #fff` | `background: var(--bg-cream)` (on light pages only) |
| Pure `color: black` on cream pages | `color: var(--text-dark)` |
| Pure `color: white` on dark pages | `color: var(--text-light)` |

### Colour Usage Rules

- **Gold on dark backgrounds:** borders, underlines, italic accents in headings, CTA button borders, divider diamonds, section labels
- **Gold on cream backgrounds:** section category labels only (replaces red)
- **Never:** gold as a large fill, gold text on cream without sufficient contrast check, two accent colours simultaneously

---

## 3. Typography — Strict Role Assignment

### The Core Problem

You have 5 font families declared in `index.html` — Cormorant Garamond, DM Serif Display, Lora, Libre Baskerville, JetBrains Mono. The cover is rendering a 6th (a script font). You're also probably not assigning roles strictly in CSS, so they bleed into each other.

**Kill Libre Baskerville.** You have Lora, which is better and serves the same role. Remove this line from `index.html`:

```html
<!-- DELETE THIS LINE -->
family=Libre+Baskerville:ital,wght@0,400;1,400
```

### Font Role Table

| Font | Role | Where | Weight | Size |
|---|---|---|---|---|
| **Cormorant Garamond** | Display | Cover name, pull quotes only | 300 italic | `clamp(3.5rem, 10vw, 7rem)` |
| **DM Serif Display** | Section titles | "CONTENTS", "Technical Specs", "Case Study Showcase" | 400 | `clamp(1.75rem, 4vw, 3rem)` |
| **Lora** | Body | Paragraphs, project descriptions, bio | 400 | `1rem` |
| **JetBrains Mono** | UI | Page numbers, tags, metadata, nav | 400 | `0.6875rem` |

**Two fonts max visible at once in any section.** If you're using Cormorant for a headline, the labels and body text around it should be Lora and JetBrains Mono only. Never all four in the same viewport.

### The Cover Name Fix

Replace whatever script is rendering with:

```jsx
// In your CoverPage / Page1 component
<h1 style={{
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
  fontStyle: 'italic',
  fontSize: 'clamp(3.5rem, 10vw, 7rem)',
  lineHeight: 0.95,
  letterSpacing: '-0.01em',
  color: '#F5F0E8',
}}>
  Wafiq<br />
  <span style={{ color: '#C9A96E' }}>Nawaz.</span>
</h1>
```

### The "CONTENTS" Fix

The current font looks like a condensed grotesque. Replace:

```css
.contents-logotype {
  font-family: 'DM Serif Display', Georgia, serif;
  font-weight: 400;
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: #3A3020;
}
```

### Type Scale

```css
:root {
  --type-display:  clamp(3.5rem, 10vw, 7rem);    /* Cover name only */
  --type-headline: clamp(1.75rem, 4vw, 3rem);     /* Spread titles */
  --type-title:    clamp(1.25rem, 2.5vw, 1.75rem); /* Project names */
  --type-body:     1rem;                            /* Paragraphs */
  --type-caption:  0.8125rem;                       /* Captions, metadata */
  --type-label:    0.6875rem;                       /* Nav, tags, page numbers */
}
```

---

## 4. Page 1 — Cover (Hero)

### Fix 1 — The Black Image Rectangle

The left half of your cover is a black void. This is almost certainly a broken asset path after Vite's build process.

**The problem:** If you write `src="./assets/photo.jpg"` in JSX, Vite won't process the path — it works in dev but breaks in build output.

**The fix:** Always import images explicitly:

```jsx
// At the top of your CoverPage.jsx
import heroPhoto from '../assets/your-photo-name.jpg'

// Then in JSX
<img src={heroPhoto} alt="Wafiq Nawaz" style={{ ... }} />
// OR as a background
<div style={{ backgroundImage: `url(${heroPhoto})` }} />
```

Check: open DevTools → Network tab → filter by Img. If your photo shows as 404, this is the issue.

### Fix 2 — Replace Script Font (critical)

See Typography section above. Remove whatever is applying a script font. If it's a Tailwind class like `font-['Dancing_Script']` or similar, delete it globally.

### Fix 3 — Anchor the Floating Metadata

The labels at the top right need a container structure:

```jsx
<div style={{
  position: 'absolute',
  top: '2rem',
  right: '2.5rem',
  textAlign: 'right',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.625rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(245, 240, 232, 0.45)',
  lineHeight: 1.8,
}}>
  <div style={{ color: '#C9A96E', marginBottom: '4px' }}>◆ THE DEVELOPER ISSUE</div>
  <div>Creative Architecture</div>
  <div>Bengaluru, IN</div>
  <div>Character Documentary</div>
</div>
```

### Fix 4 — Gold Rule Above Pagination

```jsx
<div style={{
  position: 'absolute',
  bottom: '2.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
}}>
  <div style={{ flex: 1, height: '0.5px', background: 'rgba(201,169,110,0.3)' }} />
  <span style={{
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.6875rem',
    letterSpacing: '0.15em',
    color: 'rgba(245,240,232,0.4)',
  }}>
    01 / 08
  </span>
  <div style={{ flex: 1, height: '0.5px', background: 'rgba(201,169,110,0.3)' }} />
</div>
```

---

## 5. Page 2 — Contents Spread

### Fix 1 — Overflow Clipping on Chapter Descriptions (critical)

react-pageflip forces `overflow: hidden` on page elements. Your two-column grid is overflowing. Fix:

```css
/* In your Page2 / ContentsPage styles */
.contents-spread {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  overflow: hidden; /* required by pageflip */
}

.contents-left {
  padding: 3rem 2rem 3rem 3rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.chapter-item {
  border-top: 0.5px solid rgba(58, 48, 32, 0.2);
  padding: 1rem 0;
}

.chapter-desc {
  font-family: 'Lora', serif;
  font-size: 0.8125rem;
  color: rgba(58, 48, 32, 0.6);
  line-height: 1.6;
  /* Clamp text to 3 lines to prevent overflow */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

### Fix 2 — CONTENTS Logotype

Replace with DM Serif Display (see Typography section). The split "CON / TENTS" across two lines is a great choice — keep it, just fix the font:

```jsx
<h1 className="contents-logotype">
  CON<br />TENTS
</h1>
```

### Fix 3 — Remove the Photo Watermark Overlay

The "Wafiq Nawaz" italic text overlaid on the bottom of the photo is illegible. Remove it. Instead, add a clean caption below the image:

```jsx
{/* Remove: the overlaid italic watermark text */}

{/* Add below the image: */}
<div style={{
  marginTop: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.625rem',
  letterSpacing: '0.12em',
  color: 'rgba(58, 48, 32, 0.45)',
  textTransform: 'uppercase',
}}>
  <span>ZN-001</span>
  <span>Active System</span>
</div>
```

### Fix 4 — "Discipline & Craft" Pull Quote

The italic headline under the photo is good — it just needs more space above it and the right font:

```jsx
<h2 style={{
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: '#3A3020',
  lineHeight: 1.2,
  margin: '1.5rem 0 0.75rem',
}}>
  Discipline &amp; Craft
</h2>
```

---

## 6. Page 3 — Technical Specs

### Fix 1 — Replace Red with Gold (critical, but easy)

Find every instance of red in this component. This is likely:
- A Tailwind class: `text-red-500`, `text-rose-500`, `text-[#dc2626]`
- An inline style: `color: 'red'` or `color: '#ef4444'`
- A CSS class with `color: red`

Replace all with `color: #C9A96E` (gold). This single change transforms the feel of this page.

### Fix 2 — CSS Leader Lines (replaces hardcoded dots)

Remove the hardcoded `·····` or `......` between skill names and categories. Replace with:

```css
.leader-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;
}

.leader-skill {
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: #3A3020;
  white-space: nowrap;
}

.leader-line {
  flex: 1;
  border-bottom: 1px dotted rgba(58, 48, 32, 0.25);
  margin-bottom: 4px; /* align to text baseline */
}

.leader-category {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  color: rgba(58, 48, 32, 0.5);
  white-space: nowrap;
}
```

```jsx
// JSX structure for each skill row
<div className="leader-row">
  <span className="leader-skill">Python / Java / Networks</span>
  <div className="leader-line" />
  <span className="leader-category">Core Systems</span>
</div>
```

### Fix 3 — Education Card Treatment

Replace the heavy bordered box with a left-border-only editorial style:

```css
.education-card {
  border-left: 2px solid #C9A96E;
  border-radius: 0; /* remove any border-radius */
  padding: 12px 16px;
  background: rgba(201, 169, 110, 0.05);
  margin-bottom: 12px;
}

.education-card-title {
  font-family: 'DM Serif Display', serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #3A3020;
  letter-spacing: 0.02em;
  margin-bottom: 2px;
}

.education-card-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.625rem;
  letter-spacing: 0.1em;
  color: rgba(58, 48, 32, 0.5);
  text-transform: uppercase;
  margin-bottom: 8px;
}
```

### Fix 4 — Project List Date Alignment

The dates (2026, 2025) are too far right and feel disconnected. Use a flex layout with a defined date column:

```css
.project-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-year {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6875rem;
  color: #C9A96E;
  white-space: nowrap;
  flex-shrink: 0;
}
```

---

## 7. Page 4 — Projects Spread

### Fix 1 — CTA Button Hierarchy (critical)

Both "EXECUTE PAYLOAD ↗" and "VIEW SOURCE" look identical. Establish visual hierarchy:

```css
/* Primary action */
.cta-primary {
  display: inline-block;
  border: 1px solid #C9A96E;
  color: #C9A96E;
  background: transparent;
  padding: 7px 18px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease;
}

.cta-primary:hover {
  background: rgba(201, 169, 110, 0.08);
}

/* Secondary action */
.cta-secondary {
  display: inline-block;
  color: rgba(245, 240, 232, 0.45);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
```

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1.5rem' }}>
  <a href={liveUrl} className="cta-primary">Execute Payload ↗</a>
  <a href={sourceUrl} className="cta-secondary">View Source</a>
</div>
```

### Fix 2 — Left-Align the Right Project Page

The Zalulu Portfolio page has centred text. Make it match the RetailMind left page:

```jsx
// In your right project page component, find text-center or textAlign: 'center' and remove it
// Or add: textAlign: 'left'
```

### Fix 3 — Scale Up the Right Page Thumbnail

```css
.project-thumbnail-right {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border: 0.5px solid rgba(245, 240, 232, 0.1);
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
```

---

## 8. Page 5 — Contact

### Fix 1 — Fill the Empty Left Page (critical)

The entire left dark page is empty. Add a quote and availability panel:

```jsx
// LeftContactPage.jsx
export function ContactLeftPage() {
  return (
    <div style={{
      height: '100%',
      background: '#0C0C0C',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '4rem 3rem',
      position: 'relative',
    }}>
      {/* Gold top bar */}
      <div style={{ width: '40px', height: '1px', background: '#C9A96E', marginBottom: '2rem' }} />

      {/* Quote */}
      <blockquote style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontStyle: 'italic',
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        color: '#F5F0E8',
        lineHeight: 1.3,
        maxWidth: '20ch',
        marginBottom: '2.5rem',
      }}>
        "Every great product starts with a conversation."
      </blockquote>

      {/* Availability */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        border: '0.5px solid rgba(201,169,110,0.3)',
        padding: '6px 14px',
        borderRadius: '2px',
        alignSelf: 'flex-start',
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A96E' }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.625rem',
          letterSpacing: '0.15em',
          color: '#C9A96E',
          textTransform: 'uppercase',
        }}>
          Open to 2026 Internships
        </span>
      </div>

      {/* Bottom page number */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '3rem',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.625rem',
        letterSpacing: '0.12em',
        color: 'rgba(245,240,232,0.25)',
        textTransform: 'uppercase',
      }}>
        Collaboration · P. 08
      </div>
    </div>
  )
}
```

### Fix 2 — Styled Form Inputs

```css
.contact-form input,
.contact-form textarea {
  background: transparent;
  border: none;
  border-bottom: 0.5px solid rgba(201, 169, 110, 0.35);
  padding: 8px 0;
  width: 100%;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #F5F0E8;
  outline: none;
  margin-bottom: 1rem;
  transition: border-bottom-color 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom-color: #C9A96E;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(245, 240, 232, 0.28);
  font-style: italic;
}

.contact-form textarea {
  resize: none;
  min-height: 80px;
}
```

### Fix 3 — Rename Resume Button

```jsx
// Before
<button>DOWNLOAD IIM-STYLE RESUME</button>

// After
<button className="cta-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex', gap: '8px', alignItems: 'center' }}>
  <i style={{ fontSize: '14px' }}>↓</i>
  DOWNLOAD RÉSUMÉ
</button>
```

---

## 9. index.css — Full Token Block

Paste this at the very top of `src/index.css`. Everything below it can reference these variables.

```css
/* ─────────────────────────────────────────────────────── */
/* Design Tokens — Wafiq Portfolio                         */
/* ─────────────────────────────────────────────────────── */

:root {
  /* Backgrounds */
  --bg-dark:     #0C0C0C;
  --bg-bridge:   #1C1A16;
  --bg-cream:    #F0EBE0;

  /* Accent */
  --gold:        #C9A96E;
  --gold-dim:    rgba(201, 169, 110, 0.20);
  --gold-ghost:  rgba(201, 169, 110, 0.07);

  /* Text — dark pages */
  --text-light:     #F5F0E8;
  --text-light-dim: rgba(245, 240, 232, 0.50);
  --text-light-off: rgba(245, 240, 232, 0.28);

  /* Text — cream pages */
  --text-dark:     #3A3020;
  --text-dark-dim: rgba(58, 48, 32, 0.55);
  --text-dark-off: rgba(58, 48, 32, 0.35);

  /* Typography */
  --font-display:  'Cormorant Garamond', Georgia, serif;
  --font-heading:  'DM Serif Display',   Georgia, serif;
  --font-body:     'Lora',               Georgia, serif;
  --font-ui:       'JetBrains Mono',     monospace;

  /* Type scale */
  --type-display:  clamp(3.5rem, 10vw, 7rem);
  --type-headline: clamp(1.75rem, 4vw, 3rem);
  --type-title:    clamp(1.25rem, 2.5vw, 1.75rem);
  --type-body:     1rem;
  --type-caption:  0.8125rem;
  --type-label:    0.6875rem;

  /* Motion */
  --ease:     cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 180ms;
  --dur-base: 320ms;
}

/* ─ Base resets ─────────────────────────────────────────── */

* { box-sizing: border-box; }

html {
  background-color: var(--bg-dark);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: var(--font-display);
  font-weight: 300;
}

h2 {
  font-family: var(--font-heading);
  font-weight: 400;
}

h3 {
  font-family: var(--font-heading);
  font-weight: 400;
}

p {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.75;
}

/* ─ Utility classes ─────────────────────────────────────── */

.gold       { color: var(--gold); }
.font-ui    { font-family: var(--font-ui); }
.font-body  { font-family: var(--font-body); }

.text-label {
  font-family:    var(--font-ui);
  font-size:      var(--type-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* ─ CTA Buttons ─────────────────────────────────────────── */

.cta-primary {
  display: inline-block;
  border: 1px solid var(--gold-dim);
  color: var(--gold);
  background: transparent;
  padding: 7px 18px;
  font-family: var(--font-ui);
  font-size: var(--type-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background var(--dur-fast), border-color var(--dur-fast);
}

.cta-primary:hover {
  background: var(--gold-ghost);
  border-color: var(--gold);
}

.cta-secondary {
  display: inline-block;
  color: var(--text-light-dim);
  font-family: var(--font-ui);
  font-size: var(--type-label);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  transition: color var(--dur-fast);
}

.cta-secondary:hover {
  color: var(--text-light);
}

/* ─ Leader rows (Technical Specs page) ──────────────────── */

.leader-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;
}

.leader-skill {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-dark);
  white-space: nowrap;
}

.leader-line {
  flex: 1;
  border-bottom: 1px dotted var(--text-dark-off);
  margin-bottom: 4px;
}

.leader-category {
  font-family: var(--font-ui);
  font-size: var(--type-label);
  letter-spacing: 0.08em;
  color: var(--text-dark-dim);
  white-space: nowrap;
}

/* ─ Education card ──────────────────────────────────────── */

.education-card {
  border-left: 2px solid var(--gold);
  padding: 10px 14px;
  background: rgba(201, 169, 110, 0.05);
  margin-bottom: 12px;
  border-radius: 0;
}

/* ─ Contact form ─────────────────────────────────────────── */

.contact-input {
  background: transparent;
  border: none;
  border-bottom: 0.5px solid var(--gold-dim);
  padding: 8px 0;
  width: 100%;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: var(--text-light);
  outline: none;
  margin-bottom: 1rem;
  transition: border-bottom-color var(--dur-fast);
}

.contact-input:focus {
  border-bottom-color: var(--gold);
}

.contact-input::placeholder {
  color: var(--text-light-off);
  font-style: italic;
}
```

---

## 10. Reusable Components

### GoldRule.jsx

```jsx
export function GoldRule({ label = '◇' }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: '1.5rem 0',
    }}>
      <div style={{
        flex: 1,
        height: '0.5px',
        background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4))',
      }} />
      <span style={{
        color: '#C9A96E',
        fontSize: '0.625rem',
        letterSpacing: '0.2em',
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        {label}
      </span>
      <div style={{
        flex: 1,
        height: '0.5px',
        background: 'linear-gradient(90deg, rgba(201,169,110,0.4), transparent)',
      }} />
    </div>
  )
}
```

### PageLabel.jsx — Top-left magazine header

```jsx
export function PageLabel({ section, subLabel, page }) {
  const style = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.625rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '0.5px solid rgba(58,48,32,0.15)',
      paddingBottom: '8px',
      marginBottom: '2rem',
    }}>
      <div>
        <span style={{ ...style, color: '#C9A96E' }}>{section}</span>
        {subLabel && (
          <span style={{ ...style, color: 'rgba(58,48,32,0.4)', marginLeft: '16px' }}>
            {subLabel}
          </span>
        )}
      </div>
      <span style={{ ...style, color: 'rgba(58,48,32,0.4)' }}>P. {page}</span>
    </div>
  )
}
```

### SkillCategory.jsx — Technical specs leader rows

```jsx
const skills = [
  { name: 'Python / Java / Networks', category: 'Core Systems' },
  { name: 'Cybersecurity / Cryptography', category: 'Defensive Audits' },
  // ...
]

export function SkillCategory({ title, skills }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.625rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#C9A96E',     /* was red — now gold */
        marginBottom: '0.75rem',
      }}>
        {title}
      </div>
      {skills.map(s => (
        <div key={s.name} className="leader-row">
          <span className="leader-skill">{s.name}</span>
          <div className="leader-line" />
          <span className="leader-category">{s.category}</span>
        </div>
      ))}
    </div>
  )
}
```

---

## 11. Build Sequence

Work in this exact order. Each phase is a deployable improvement.

### Phase 1 — Token foundation (30 min)
1. Paste the `:root` CSS variable block at the top of `src/index.css`
2. Add base `h1`, `h2`, `p` font assignments
3. Delete the Libre Baskerville `<link>` from `index.html`
4. Hot-reload check — fonts shift immediately

### Phase 2 — Colour sweep (45 min)
1. Global search: every `text-red-*`, `color: red`, `color: #ef4444` → replace with gold
2. Cream page backgrounds: every `bg-white` or `background: #fff` on light pages → `var(--bg-cream)`
3. Check both: cream page text should be `var(--text-dark)`, dark page text should be `var(--text-light)`

### Phase 3 — Cover fix (1 hour, highest impact)
1. Fix image import path (use `import heroImg from '../assets/...'`)
2. Replace script font with Cormorant Garamond italic
3. Wrap floating metadata labels in a positioned container
4. Add gold rule above pagination

### Phase 4 — Contents page overflow (45 min)
1. Apply the `grid-template-columns: 1fr 1fr` + `overflow: hidden` layout
2. Add `-webkit-line-clamp: 3` to chapter descriptions
3. Replace CONTENTS logotype font with DM Serif Display
4. Remove watermark overlay, add clean caption below photo

### Phase 5 — Technical specs polish (30 min)
1. Replace hardcoded dots with CSS `.leader-line` approach
2. Swap red labels → gold (Phase 2 may have already caught these)
3. Reduce education card to left-border-only style

### Phase 6 — Project hierarchy (30 min)
1. Apply `.cta-primary` / `.cta-secondary` distinction on both project pages
2. Remove `text-align: center` from the right project page
3. Scale up the right page thumbnail

### Phase 7 — Contact completion (1 hour)
1. Add the `ContactLeftPage` component to fill the empty left spread
2. Apply `.contact-input` styles to form fields
3. Rename resume button

---

## 12. Do's and Don'ts

### Do

- ✅ Keep the react-pageflip magazine format — it's your strongest differentiator
- ✅ Use gold exclusively as your accent — don't add a second colour
- ✅ Keep the dotted leader lines on the tech specs page — genuinely great editorial choice
- ✅ Use `import imgSrc from './assets/...'` for all images — never raw string paths in Vite
- ✅ Use `clamp()` for display type sizes — prevents overflow on small viewports
- ✅ Test page flipping on mobile — react-pageflip has mobile touch quirks at small sizes
- ✅ Use `-webkit-font-smoothing: antialiased` on `html` — serif fonts need it on dark backgrounds

### Don't

- ❌ Don't use the script font (Pacifico/Dancing Script) anywhere — replace with Cormorant Garamond italic
- ❌ Don't use red as an accent colour — it reads as error state in UI contexts
- ❌ Don't use `text-align: center` on text inside spread pages — only centre when both pages are centred
- ❌ Don't hardcode font strings in inline styles — always reference CSS variables
- ❌ Don't use pure `#000000` or `#ffffff` — use `--bg-dark` and `--text-light`
- ❌ Don't leave pages half-empty — react-pageflip punishes empty pages by making the whole spread feel unfinished
- ❌ Don't add a third font family to any single page — maximum two visible at once
- ❌ Don't use `font-weight: 700` (bold) in Cormorant Garamond — it loses the editorial elegance; 300 or 400 only

---

*Generated May 2026 — wafiqnawaz.vercel.app full redesign audit*
