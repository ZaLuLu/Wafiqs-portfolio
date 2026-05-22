# Wafiq Nawaz — Complete UI/UX Redesign Plan
### Inspired by Reference Images: Editorial Brutalism × Tech Data Card Aesthetic
**Website:** wafiqnawaz.vercel.app

---

## 🎨 DESIGN DIRECTION ANALYSIS FROM YOUR REFERENCE IMAGES

### What the 4 Images Tell Us:

| Reference | Style | Key Takeaway for Your Portfolio |
|---|---|---|
| **Image 1** (B&W Resume) | Swiss Editorial Brutalism | Oversized headers, B&W photography, structured grid with breathing room |
| **Image 2** (Red/Black/Cream) | Bold Brutalist Editorial | Massive display type, accent color (red), numbered sections, text-as-decoration |
| **Image 3** (Han Nguyen) | Retro-Modern Web Editorial | Dark forest green + warm orange/yellow, layered overlaps, personality-rich layout |
| **Image 4** (Windbreaker Card) | Japanese Data Card / Techwear | Info-dense technical card layout, barcode elements, stats as design elements, mixed scripts |

### Extracted Design DNA:
- ✅ **Brutalist Typography** — Massive, bold, condensed display type that bleeds off-edges
- ✅ **Limited but Bold Color Palette** — 2-3 colors max, one always being an aggressive accent
- ✅ **Editorial Grid-Breaking** — Headers that explode past the container, overlapping elements
- ✅ **Data Card Aesthetic** — Technical info displayed like product spec sheets
- ✅ **Text as Visual Element** — Giant text used decoratively in the background
- ✅ **High Contrast B&W Base** — With 1 hot accent color doing all the work
- ✅ **Mixed Typography Scales** — HUGE display paired with tiny mono body text
- ✅ **Rotated / Vertical Text** — Section labels rotated 90° on the left or right edge
- ✅ **Barcode / Metadata elements** — Numbers, codes, tags used as decoration
- ✅ **Photography as design element** — B&W or duotone, not just illustrative

---

## 🎯 FINAL AESTHETIC DECISION: "TECHWEAR EDITORIAL"

> **The Concept:** Your portfolio is a technical spec sheet for a high-performing developer. Like the Windbreaker card but for a human — structured, data-rich, brutally confident. Dark base, off-white type, ONE electric accent color (burnt orange `#FF5C1A`). Condensed grotesque display font slammed hard into every section header.

### Color Palette — "Carbon & Fire"
```
--color-bg:         #0C0C0C    /* Near-black carbon base */
--color-surface:    #141414    /* Slightly lifted surface for cards */
--color-surface-2:  #1E1E1E    /* Elevated card / hover state */
--color-cream:      #F0EBE1    /* Warm off-white — not pure white */
--color-accent:     #FF5C1A    /* Burnt orange — the ONLY color */
--color-accent-dim: #FF5C1A33  /* Accent at 20% opacity for glows/borders */
--color-muted:      #5A5A5A    /* Subdued gray for metadata text */
--color-line:       #2A2A2A    /* Subtle separator lines */
```

> **Why burnt orange `#FF5C1A`?** It bridges Image 2's aggressive red, Image 3's warm orange, and Image 4's amber lenses. It's associated with energy and technical confidence, not the clichéd blue/purple of developer portfolios.

### Typography System — "Editorial Mono Stack"
```
--font-display:   'Bebas Neue'          /* MASSIVE CONDENSED ALL-CAPS HEADERS */
--font-heading:   'Syne'               /* Bold, wide, personality — section titles */
--font-body:      'DM Sans'            /* Clean, readable body paragraphs */
--font-mono:      'JetBrains Mono'     /* Code, metadata, tags, technical labels */
--font-serif:     'Playfair Display'   /* Occasional editorial italic accent */
```

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;600&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
```

---

## 📐 LAYOUT SYSTEM

### Grid Foundation
```css
/* Base Grid */
.container {
  width: min(1440px, 100%);
  margin-inline: auto;
  padding-inline: clamp(1.5rem, 5vw, 6rem);
}

/* Editorial Grid — 12 columns */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
}

/* Section Padding — breathing room like Image 1 */
section {
  padding-block: clamp(5rem, 12vw, 10rem);
}
```

### Signature Layout Patterns (extracted from images):

**Pattern A — "Oversized Header Bleed"** (from Images 1, 2, 4)
```
┌────────────────────────────────────────┐
│ 01.                          [section] │
│                                        │
│ PROJECTS                               │ ← Font-size: clamp(100px, 20vw, 220px)
│ ─────────────────────────────────────  │ ← Runs full bleed
│  card  │  card  │  card                │
└────────────────────────────────────────┘
```

**Pattern B — "Data Card Grid"** (from Image 4)
```
┌──────────────────┬──────────────────────┐
│ WN.001           │ FULL-STACK DEV       │
│                  ├──────────────────────┤
│ [photo/image]    │ React  FastAPI  Py   │
│                  │ BENGALURU, IN        │
├──────────────────┤ ——————————————————   │
│ STATUS: OPEN     │ INTERNSHIP 2026 ▶    │
└──────────────────┴──────────────────────┘
```

**Pattern C — "Vertical Label + Horizontal Content"** (from Images 1, 2, 3)
```
│ A│  ← Rotated label on left edge
│ B│
│ O│  ← 90° rotated, monospace, small
│ U│
│ T│

[Content flows right with full space]
```

**Pattern D — "Stacked Massive + Tiny"** (from all images)
```
EXPERIENCE                    ← 140px Bebas Neue
———————————————————
COMPANY NAME        2022-23   ← 12px JetBrains Mono
Job / Position Title          ← 16px DM Sans
Description text here...      ← 14px DM Sans Light
```

---

## 🧩 SECTION-BY-SECTION REDESIGN SPEC

---

### SECTION 0: `<head>` — Meta & Foundations

```html
<!-- Fonts -->
<link href="[Google Fonts string above]" rel="stylesheet">

<!-- Custom cursor — editorial feel -->
<style>
  * { cursor: none; }
  .cursor { 
    width: 12px; height: 12px;
    background: var(--color-accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
  }
  .cursor-follower {
    width: 36px; height: 36px;
    border: 1px solid var(--color-accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
</style>
```

---

### SECTION 1: NAVIGATION

**Concept:** Ultra-minimal floating bar. Numbered links like Image 1. Accent-colored CTA button like Image 3's "Get in touch" button.

```
┌─────────────────────────────────────────────────────┐
│  [WN] ▪──────────────────────────── [RESUME ↗]     │
│  ← logo: "WN." in Bebas + accent dot                │
│  Links: 01_ABOUT  02_WORK  03_SKILLS  04_CONTACT    │
│  Resume: pill button, accent fill                   │
└─────────────────────────────────────────────────────┘
```

**CSS Spec:**
```css
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  padding: 1.25rem clamp(1.5rem, 5vw, 6rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  /* No background by default — fades in on scroll */
  background: transparent;
  transition: background 0.4s ease;
}

.navbar.scrolled {
  background: rgba(12, 12, 12, 0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-line);
}

.logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--color-cream);
  letter-spacing: 0.05em;
}

.logo span { color: var(--color-accent); }

.nav-links {
  display: flex;
  gap: 3rem;
  list-style: none;
}

.nav-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover { color: var(--color-cream); }

.nav-link .num {
  color: var(--color-accent);
  margin-right: 0.4em;
}

.nav-resume {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-bg);
  background: var(--color-accent);
  padding: 0.65rem 1.5rem;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-resume:hover {
  background: var(--color-cream);
  transform: translateY(-1px);
}
```

---

### SECTION 2: HERO — "Data Card Identity"

**Concept:** Inspired directly by Image 4 (Windbreaker card) + Image 3 (Han Nguyen overlapping layout). Your identity presented like a technical character sheet. A massive bleed photo or graphic on the left, data card grid on the right.

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│  ██████████████  │  WN. —————————————————  BENGALURU/IN      │
│  ██████████████  │                                            │
│  ██████████████  │  WAFIQ                                     │← 200px Bebas
│  ██[PHOTO/ART]█  │  NAWAZ                                     │← bleeds right
│  ██████████████  │  ___________________________________________│
│  ██████████████  │  FULL-STACK DEV  ·  CYBERSECURITY STUDENT  │← 11px mono
│  ██████████████  │                                            │
│                  │  React  ·  Python  ·  FastAPI  ·  AI/ML    │
│ [OPEN TO WORK]   │                                            │
│  ————————————    │  [VIEW PROJECTS ↘]    [DOWNLOAD CV ↗]      │
│  STATUS: ACTIVE  │                                            │
│                  │  001/ENG ——————— INTERNSHIP 2026           │
└───────────────────────────────────────────────────────────────┘
```

**HTML Structure:**
```html
<section class="hero" id="home">
  <div class="hero-inner">

    <!-- Left: Identity Card (Image 4 inspired) -->
    <div class="hero-card">
      <div class="hero-card-header">
        <span class="hero-id">WN.001</span>
        <span class="hero-tag">BENGALURU / IN</span>
      </div>

      <div class="hero-photo-wrap">
        <img src="/assets/photo.jpg" alt="Wafiq Nawaz" class="hero-photo">
        <div class="hero-photo-overlay">
          <span class="status-badge">● OPEN TO WORK</span>
        </div>
      </div>

      <div class="hero-card-footer">
        <div class="meta-row">
          <span class="meta-label">STATUS</span>
          <span class="meta-val">ACTIVELY SEEKING INTERNSHIP</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">YEAR</span>
          <span class="meta-val">2026</span>
        </div>
        <!-- Barcode element like Image 4 -->
        <div class="barcode-wrap">
          <div class="barcode"></div>
          <span class="barcode-text">FULL-STACK · SECURITY · AI</span>
        </div>
      </div>
    </div>

    <!-- Right: Name + Text Content -->
    <div class="hero-content">
      <!-- Decorative ghost text behind — like Image 3's "PORTFOLIO TFOLIO" -->
      <div class="hero-ghost-text" aria-hidden="true">DEV</div>

      <div class="hero-name-block">
        <h1 class="hero-name">
          <span class="name-line">WAFIQ</span>
          <span class="name-line accent-underline">NAWAZ</span>
        </h1>

        <p class="hero-role">
          Full-Stack Developer
          <em class="role-separator"> — </em>
          Cybersecurity Student
        </p>
      </div>

      <p class="hero-bio">
        Building secure, scalable web applications from Bengaluru.
        I work at the intersection of modern web development, 
        AI integration, and application security.
      </p>

      <!-- Skill tags — like Image 3's pill tags -->
      <div class="hero-tags">
        <span class="tag">React</span>
        <span class="tag">Python</span>
        <span class="tag">FastAPI</span>
        <span class="tag">AI/ML</span>
        <span class="tag">Security</span>
      </div>

      <div class="hero-actions">
        <a href="#projects" class="btn-primary">
          View Projects <span class="btn-arrow">↘</span>
        </a>
        <a href="/resume.pdf" class="btn-secondary" target="_blank">
          Download CV <span class="btn-arrow">↗</span>
        </a>
      </div>

      <!-- Bottom metadata row like Image 4 -->
      <div class="hero-meta-bar">
        <span class="meta-item">001/ENG</span>
        <span class="meta-divider">——</span>
        <span class="meta-item">CSE STUDENT</span>
        <span class="meta-divider">——</span>
        <span class="meta-item accent">INTERNSHIP 2026</span>
      </div>
    </div>

  </div>
</section>
```

**CSS Spec:**
```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--color-bg);
  padding: 8rem clamp(1.5rem, 5vw, 6rem) 4rem;
  position: relative;
  overflow: hidden;
}

/* Subtle grain overlay — Image 4 has this paper texture */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.03;
  pointer-events: none;
}

.hero-inner {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: clamp(3rem, 6vw, 8rem);
  align-items: center;
  width: 100%;
}

/* ── LEFT CARD ── */
.hero-card {
  background: var(--color-surface);
  border: 1px solid var(--color-line);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.hero-card-header {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-line);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-muted);
}

.hero-photo-wrap {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%) contrast(1.1);
  transition: filter 0.5s ease;
}

.hero-card:hover .hero-photo {
  filter: grayscale(0%) contrast(1.05);
}

.hero-photo-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.status-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: #4ade80;
  letter-spacing: 0.1em;
}

.hero-card-footer {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.meta-row {
  display: flex;
  gap: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
}

.meta-label { color: var(--color-muted); min-width: 60px; }
.meta-val { color: var(--color-cream); }

.barcode-wrap {
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-line);
}

/* CSS barcode — decorative like Image 4 */
.barcode {
  height: 28px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-cream) 0px,
    var(--color-cream) 2px,
    transparent 2px,
    transparent 4px,
    var(--color-cream) 4px,
    var(--color-cream) 5px,
    transparent 5px,
    transparent 8px,
    var(--color-cream) 8px,
    var(--color-cream) 10px,
    transparent 10px,
    transparent 13px
  );
  opacity: 0.6;
  margin-bottom: 0.3rem;
}

.barcode-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: var(--color-muted);
  letter-spacing: 0.2em;
}

/* ── RIGHT CONTENT ── */
.hero-content {
  position: relative;
}

/* Ghost text — decorative background like Image 3 */
.hero-ghost-text {
  position: absolute;
  top: -0.2em;
  right: -0.1em;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(100px, 22vw, 260px);
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 92, 26, 0.08);
  line-height: 1;
  user-select: none;
  pointer-events: none;
}

.hero-name-block {
  position: relative;
  z-index: 1;
  margin-bottom: 1.5rem;
}

.hero-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(64px, 12vw, 140px);
  line-height: 0.92;
  letter-spacing: 0.02em;
  color: var(--color-cream);
  margin: 0;
  display: flex;
  flex-direction: column;
}

.accent-underline {
  position: relative;
  display: inline-block;
}

/* Accent bar under second name line — like Images 1 & 2 */
.accent-underline::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1) 0.2s;
}

.hero.loaded .accent-underline::after { transform: scaleX(1); }

.hero-role {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(0.7rem, 1.2vw, 0.85rem);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin: 1.25rem 0 0.5rem;
}

.role-separator { color: var(--color-accent); margin-inline: 0.5em; }

.hero-bio {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  font-weight: 300;
  line-height: 1.7;
  color: rgba(240, 235, 225, 0.65);
  max-width: 500px;
  margin-block: 1.5rem;
}

/* Tags — pill shape like Image 3 */
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  color: var(--color-muted);
  transition: all 0.25s;
}

.tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background: var(--color-accent-dim);
}

/* Buttons */
.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn-primary {
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-bg);
  background: var(--color-accent);
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--color-cream);
  transform: translate(2px, -2px);
  box-shadow: -3px 3px 0 var(--color-accent);
}

.btn-secondary {
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-cream);
  background: transparent;
  border: 1px solid var(--color-line);
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* Bottom meta bar — Image 4 data strip */
.hero-meta-bar {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-muted);
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-line);
}

.meta-divider { opacity: 0.3; }
.meta-item.accent { color: var(--color-accent); }
```

---

### SECTION 3: ABOUT — "Spec Sheet Layout"

**Concept:** Image 1's "ABOUT ME" + Image 4's technical metadata. A two-column layout with big rotated label on the left edge.

```
│      │  
│ABOUT │  WAFIQ NAWAZ IS A —————————————————
│  ME  │  
│      │  Computer Science student at [Uni Name]
│      │  specializing in full-stack development
│      │  and web security.
│      │  
│  03  │  ┌─────────┬─────────┬─────────┐
│      │  │ STACK   │ FOCUS   │ STATUS  │
│      │  │ React   │ Secure  │ OPEN    │
│      │  │ Python  │ Web Dev │ TO WORK │
│      │  │ FastAPI │ AI/ML   │         │
│      │  └─────────┴─────────┴─────────┘
```

```html
<section class="about" id="about">
  <div class="section-label-vertical" aria-hidden="true">ABOUT</div>

  <div class="container">
    <div class="section-header">
      <span class="section-num">01.</span>
      <h2 class="section-title">ABOUT ME</h2>
    </div>

    <div class="about-grid">
      <div class="about-text">
        <p class="about-lead">
          Computer Science student at <strong>[University Name]</strong>, 
          building at the intersection of full-stack web development, 
          AI integration, and application security.
        </p>
        <p class="about-body">
          I approach every project with an engineering mindset — 
          obsessing over performance, security, and user experience equally. 
          Whether it's a React frontend, a FastAPI backend, or a 
          security audit tool, I build things that work in production.
        </p>
        <p class="about-body">
          Currently based in Bengaluru, seeking Summer 2026 internship 
          opportunities where I can contribute meaningfully from day one.
        </p>
      </div>

      <!-- Spec grid — Image 4's data card grid -->
      <div class="about-spec-grid">
        <div class="spec-card">
          <span class="spec-label">STACK</span>
          <ul class="spec-list">
            <li>React / Next.js</li>
            <li>Python / FastAPI</li>
            <li>PostgreSQL / Redis</li>
            <li>Docker / Vercel</li>
          </ul>
        </div>

        <div class="spec-card">
          <span class="spec-label">FOCUS</span>
          <ul class="spec-list">
            <li>Full-Stack Dev</li>
            <li>App Security</li>
            <li>AI Integration</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div class="spec-card accent-border">
          <span class="spec-label">STATUS</span>
          <div class="spec-status">
            <span class="status-dot"></span>
            <span class="status-text">OPEN TO WORK</span>
          </div>
          <p class="spec-note">Available for internships &amp; freelance.</p>
          <a href="mailto:your@email.com" class="spec-link">
            your@email.com →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.about {
  position: relative;
  padding-block: clamp(6rem, 12vw, 10rem);
  overflow: hidden;
}

/* Vertical label — Image 1 & 2 aesthetic */
.section-label-vertical {
  position: absolute;
  left: clamp(0.5rem, 2vw, 2rem);
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.4em;
  color: var(--color-line);
  text-transform: uppercase;
  white-space: nowrap;
  user-select: none;
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--color-line);
  padding-bottom: 1rem;
}

.section-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--color-accent);
  letter-spacing: 0.1em;
}

/* MASSIVE Bebas section titles — Images 1 & 2 */
.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 7rem);
  color: var(--color-cream);
  letter-spacing: 0.02em;
  line-height: 1;
  margin: 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-lead {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  color: var(--color-cream);
  line-height: 1.4;
  margin-bottom: 1.5rem;
}

.about-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: rgba(240, 235, 225, 0.65);
  line-height: 1.8;
  margin-bottom: 1rem;
}

/* Spec cards — Image 4 data grid */
.about-spec-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid var(--color-line);
}

.spec-card {
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-line);
  border-right: 1px solid var(--color-line);
}

.spec-card:nth-child(2n) { border-right: none; }
.spec-card:last-child { 
  grid-column: span 2; 
  border-bottom: none; 
}

.spec-card.accent-border {
  border-top: 2px solid var(--color-accent);
}

.spec-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  color: var(--color-accent);
  display: block;
  margin-bottom: 1rem;
}

.spec-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.spec-list li {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: rgba(240, 235, 225, 0.7);
  padding-block: 0.35rem;
  border-bottom: 1px solid var(--color-line);
}

.spec-list li:last-child { border-bottom: none; }

.spec-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.status-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.status-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #4ade80;
  letter-spacing: 0.1em;
}

.spec-note {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-bottom: 0.75rem;
}

.spec-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--color-accent);
  text-decoration: none;
  transition: letter-spacing 0.3s;
}

.spec-link:hover { letter-spacing: 0.1em; }
```

---

### SECTION 4: PROJECTS — "Numbered Editorial Cards"

**Concept:** Image 1 and 2's numbered projects with heavy type. Cards that feel like magazine editorial spreads. Featured project takes full width like Image 2's WORKS section.

```
PROJECTS ————————————————————————    02.
──────────────────────────────────────────

WK-001  ─────────────────────────────────
[IMAGE / MOCKUP]           TECH STACK
                           React · FastAPI
PROJECT TITLE              YEAR: 2025
Description text here...   [↗ LIVE]  [⌥ CODE]

WK-002  WK-003   (smaller side-by-side)
```

**CSS Spec (key parts):**
```css
.projects { padding-block: clamp(6rem, 12vw, 10rem); }

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Featured project — full bleed */
.project-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border-top: 1px solid var(--color-line);
  padding-block: 4rem;
  position: relative;
  transition: background 0.3s;
}

.project-item:hover { background: var(--color-surface); }

/* Project number — huge background like Image 4 */
.project-number {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(60px, 10vw, 100px);
  color: transparent;
  -webkit-text-stroke: 1px var(--color-line);
  line-height: 1;
  user-select: none;
  pointer-events: none;
}

.project-image-wrap {
  aspect-ratio: 16/10;
  overflow: hidden;
  border-radius: 2px;
  position: relative;
}

.project-image-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: grayscale(30%);
  transition: all 0.5s ease;
}

.project-item:hover .project-image-wrap img {
  filter: grayscale(0%);
  transform: scale(1.03);
}

.project-meta {
  padding: 2rem 0 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-id {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

/* Big project title — Syne bold */
.project-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--color-cream);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.project-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(240, 235, 225, 0.6);
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* Tech stack tags — Image 4 style */
.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2rem;
}

.stack-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  padding: 0.3rem 0.75rem;
  background: var(--color-surface-2);
  border: 1px solid var(--color-line);
  border-radius: 2px;
  color: var(--color-muted);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-cream);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s;
}

.project-link:hover { color: var(--color-accent); }

.project-link.primary {
  color: var(--color-accent);
}

/* Bottom: smaller 2-column project cards */
.projects-grid-small {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0;
  margin-top: 1px;
}

.project-card-small {
  border: 1px solid var(--color-line);
  padding: 2rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.project-card-small::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.project-card-small:hover::before { transform: scaleX(1); }
.project-card-small:hover { background: var(--color-surface); }
```

---

### SECTION 5: SKILLS — "Technical Spec Table"

**Concept:** Image 2's "TECHNICAL SKILLS" section with big percentages, but refined. Image 4's data-dense layout. No boring progress bars — use a grid table like a product spec sheet instead.

```
SKILLS ——————————————————————  03.
──────────────────────────────────────
                                
  FRONTEND         BACKEND          TOOLS
  ─────────────    ─────────────    ──────────
  React       ●●●●○  Python    ●●●●●  Git    ●●●●●
  TypeScript  ●●●○○  FastAPI   ●●●●○  Docker ●●●○○
  Next.js     ●●●●○  SQL       ●●●○○  Linux  ●●●○○
  
  [ADVANCED]       [ADVANCED]       [INTERMEDIATE]
```

```html
<section class="skills" id="skills">
  <div class="container">
    <div class="section-header">
      <span class="section-num">03.</span>
      <h2 class="section-title">SKILLS</h2>
    </div>

    <div class="skills-table">
      <div class="skills-col">
        <h3 class="skills-col-title">FRONTEND</h3>
        <div class="skill-rows">
          <div class="skill-row">
            <span class="skill-name">React</span>
            <div class="skill-dots">
              <span class="dot filled"></span>
              <span class="dot filled"></span>
              <span class="dot filled"></span>
              <span class="dot filled"></span>
              <span class="dot"></span>
            </div>
          </div>
          <!-- ... more skills -->
        </div>
      </div>

      <div class="skills-col">
        <h3 class="skills-col-title">BACKEND</h3>
        <!-- ... -->
      </div>

      <div class="skills-col">
        <h3 class="skills-col-title">TOOLS & SECURITY</h3>
        <!-- ... -->
      </div>
    </div>
  </div>
</section>
```

```css
.skills-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--color-line);
}

.skills-col {
  padding: 2.5rem;
  border-right: 1px solid var(--color-line);
}

.skills-col:last-child { border-right: none; }

.skills-col-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: var(--color-accent);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-line);
}

.skill-rows {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 235, 225, 0.8);
}

.skill-dots {
  display: flex;
  gap: 5px;
}

/* Dot rating — cleaner than progress bars */
.dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  border: 1px solid var(--color-muted);
  background: transparent;
  transition: background 0.3s, border-color 0.3s;
}

.dot.filled {
  background: var(--color-accent);
  border-color: var(--color-accent);
}
```

---

### SECTION 6: EXPERIENCE / EDUCATION — "Timeline Spec Sheet"

**Concept:** Images 1 & 2's EXPERIENCE sections with numbered items. Image 3's timeline on the left. Clean, readable, technical.

```html
<section class="experience" id="experience">
  <div class="container">
    <div class="section-header">
      <span class="section-num">04.</span>
      <h2 class="section-title">EXPERIENCE</h2>
    </div>

    <div class="exp-grid">
      <!-- Timeline item — numbered like Images 1 & 2 -->
      <article class="exp-item">
        <div class="exp-num">A</div>
        <div class="exp-content">
          <div class="exp-meta">
            <span class="exp-company">COMPANY NAME</span>
            <span class="exp-date">2024 – PRESENT</span>
          </div>
          <h3 class="exp-title">Job / Role Title</h3>
          <p class="exp-desc">Description of your responsibilities and achievements.</p>
          <div class="exp-tags">
            <span class="exp-tag">React</span>
            <span class="exp-tag">Python</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
```

```css
.exp-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.exp-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 2rem;
  padding-block: 3rem;
  border-top: 1px solid var(--color-line);
  transition: background 0.3s;
}

.exp-item:hover { 
  background: var(--color-surface); 
  padding-inline: 1.5rem;
}

/* Lettered node — Image 1 & 2 style */
.exp-num {
  width: 48px; height: 48px;
  border: 1px solid var(--color-line);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--color-accent);
  flex-shrink: 0;
  transition: all 0.3s;
}

.exp-item:hover .exp-num {
  background: var(--color-accent);
  color: var(--color-bg);
  border-color: var(--color-accent);
}

.exp-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.exp-company {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: var(--color-accent);
}

.exp-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: var(--color-muted);
  letter-spacing: 0.1em;
}

.exp-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 700;
  color: var(--color-cream);
  margin-block: 0.5rem;
}

.exp-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(240, 235, 225, 0.6);
  line-height: 1.7;
  max-width: 600px;
}

.exp-tags {
  display: flex; 
  gap: 0.5rem; 
  margin-top: 1rem; 
  flex-wrap: wrap;
}

.exp-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: var(--color-muted);
  border: 1px solid var(--color-line);
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
}
```

---

### SECTION 7: CONTACT — "GET IN TOUCH"

**Concept:** Image 1 & 2's "GET IN TOUCH" / "CONTACT US" sections. Clean, confident. Big display type, clean form, direct links.

```html
<section class="contact" id="contact">
  <div class="contact-inner">
    <!-- Left: Decorative big type like Image 2 -->
    <div class="contact-display">
      <h2 class="contact-big">GET IN<br>TOUCH.</h2>
      <p class="contact-sub">
        Currently open to internship opportunities, 
        freelance projects, and interesting conversations.
      </p>
      <div class="contact-links">
        <a href="mailto:your@email.com" class="contact-method">
          <span class="cm-label">EMAIL</span>
          <span class="cm-value">your@email.com →</span>
        </a>
        <a href="https://linkedin.com/in/yourprofile" class="contact-method">
          <span class="cm-label">LINKEDIN</span>
          <span class="cm-value">/in/wafiqnawaz →</span>
        </a>
        <a href="https://github.com/yourusername" class="contact-method">
          <span class="cm-label">GITHUB</span>
          <span class="cm-value">@wafiqnawaz →</span>
        </a>
      </div>
    </div>

    <!-- Right: Form -->
    <form class="contact-form" id="contactForm" onsubmit="handleSubmit(event)">
      <div class="form-row">
        <div class="field">
          <label class="field-label">NAME</label>
          <input type="text" name="name" class="field-input" placeholder="Your name" required>
        </div>
        <div class="field">
          <label class="field-label">EMAIL</label>
          <input type="email" name="email" class="field-input" placeholder="your@email.com" required>
        </div>
      </div>
      <div class="field">
        <label class="field-label">SUBJECT</label>
        <input type="text" name="subject" class="field-input" placeholder="Internship / Project / etc.">
      </div>
      <div class="field">
        <label class="field-label">MESSAGE</label>
        <textarea name="message" class="field-input field-textarea" rows="6" placeholder="Tell me about it..." required></textarea>
      </div>
      <button type="submit" class="btn-primary form-submit">
        SEND MESSAGE <span>↗</span>
      </button>
    </form>
  </div>
</section>
```

```css
.contact {
  padding-block: clamp(6rem, 12vw, 10rem);
  background: var(--color-surface);
  border-top: 1px solid var(--color-line);
}

.contact-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: clamp(1.5rem, 5vw, 6rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
}

.contact-big {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(60px, 10vw, 110px);
  color: var(--color-cream);
  line-height: 0.9;
  margin: 0 0 2rem;
  letter-spacing: 0.02em;
}

.contact-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: rgba(240, 235, 225, 0.6);
  line-height: 1.7;
  max-width: 360px;
  margin-bottom: 3rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.contact-method {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.25rem;
  border-top: 1px solid var(--color-line);
  text-decoration: none;
  transition: all 0.3s;
}

.contact-method:last-child { border-bottom: 1px solid var(--color-line); }
.contact-method:hover .cm-value { color: var(--color-accent); transform: translateX(6px); }

.cm-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--color-muted);
}

.cm-value {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--color-cream);
  transition: all 0.3s;
  display: inline-block;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--color-muted);
}

.field-input {
  background: var(--color-bg);
  border: 1px solid var(--color-line);
  border-radius: 2px;
  padding: 0.875rem 1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--color-cream);
  outline: none;
  transition: border-color 0.25s;
}

.field-input::placeholder { color: var(--color-muted); }
.field-input:focus { border-color: var(--color-accent); }

.field-textarea {
  resize: vertical;
  min-height: 160px;
  font-family: 'DM Sans', sans-serif;
}

.form-submit {
  align-self: flex-start;
  margin-top: 0.5rem;
}
```

---

### SECTION 8: FOOTER

**Concept:** Clean, like the back of Image 4's card — metadata bar with barcode element.

```html
<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-left">
        <span class="footer-logo">WN.</span>
        <span class="footer-copy">© 2026 Wafiq Nawaz. Built with React.</span>
      </div>
      <div class="footer-center">
        <div class="footer-barcode"></div>
        <span class="footer-barcode-text">WAFIQ-NAWAZ.DEV — 2026</span>
      </div>
      <div class="footer-right">
        <a href="https://github.com/yourusername" class="footer-link">GH</a>
        <a href="https://linkedin.com/in/yourprofile" class="footer-link">LI</a>
        <a href="mailto:your@email.com" class="footer-link">EM</a>
      </div>
    </div>
  </div>
</footer>
```

```css
.footer {
  padding-block: 2rem;
  border-top: 1px solid var(--color-line);
  background: var(--color-bg);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.footer-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--color-accent);
  margin-right: 1rem;
}

.footer-copy {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  color: var(--color-muted);
  letter-spacing: 0.1em;
}

.footer-center {
  text-align: center;
}

.footer-barcode {
  height: 18px;
  width: 120px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-muted) 0px, var(--color-muted) 2px,
    transparent 2px, transparent 5px,
    var(--color-muted) 5px, var(--color-muted) 6px,
    transparent 6px, transparent 9px
  );
  opacity: 0.4;
  margin: 0 auto 0.3rem;
}

.footer-barcode-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.5rem;
  color: var(--color-muted);
  letter-spacing: 0.2em;
}

.footer-right {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover { color: var(--color-accent); }
```

---

## ⚡ JAVASCRIPT ESSENTIALS

### Scroll-triggered Reveal Animation
```javascript
// Entrance animations on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 80}ms`;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.project-item, .exp-item, .spec-card, .skill-row, .contact-method'
).forEach(el => observer.observe(el));
```

```css
/* Base hidden state */
.project-item,
.exp-item,
.spec-card,
.skill-row,
.contact-method {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

### Custom Cursor
```javascript
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 6 + 'px';
  cursor.style.top = e.clientY - 6 + 'px';
  
  setTimeout(() => {
    follower.style.left = e.clientX - 18 + 'px';
    follower.style.top = e.clientY - 18 + 'px';
  }, 80);
});

// Hover states
document.querySelectorAll('a, button, .project-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    follower.style.transform = 'scale(1.5)';
    follower.style.borderColor = 'var(--color-cream)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    follower.style.transform = 'scale(1)';
    follower.style.borderColor = 'var(--color-accent)';
  });
});
```

### Scroll Progress + Sticky Nav
```javascript
// Nav background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Hero load class for accent underline animation
document.querySelector('.hero').classList.add('loaded');
```

### Typing Effect for Role (optional)
```javascript
const roles = [
  'Full-Stack Developer',
  'Cybersecurity Student',
  'React Engineer',
  'Python Developer',
];

let i = 0, j = 0, current = '', del = false;
const el = document.querySelector('.hero-role-type');

function type() {
  current = roles[i];
  if (!del) {
    el.textContent = current.slice(0, ++j);
    if (j === current.length) {
      del = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, --j);
    if (j === 0) {
      del = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(type, del ? 40 : 80);
}
type();
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile: Stack everything, reduce font sizes */
@media (max-width: 640px) {
  .hero-inner,
  .about-grid,
  .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
  
  .hero-card { max-width: 300px; margin: 0 auto; }
  .about-spec-grid { grid-template-columns: 1fr; }
  .skills-table { grid-template-columns: 1fr; }
  .project-item { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .nav-links { display: none; }
}

/* Tablet */
@media (max-width: 1024px) {
  .hero-inner { grid-template-columns: 280px 1fr; gap: 3rem; }
  .skills-table { grid-template-columns: 1fr 1fr; }
  .project-item { grid-template-columns: 1fr; }
  .project-meta { padding: 2rem 0 0; }
}
```

---

## 📦 COMPLETE DEPENDENCY LIST

```html
<!-- In <head> -->

<!-- 1. Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;600&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">

<!-- 2. No other dependencies needed! Pure HTML/CSS/JS -->
<!-- For React version, use: -->
<!--   npm install gsap (for advanced animations) -->
<!--   npm install @studio-freight/lenis (for smooth scroll) -->
```

### Optional but Impactful:
```bash
# Smooth scroll library (gives buttery scroll like portfolio sites)
npm install @studio-freight/lenis

# GSAP for scroll-triggered section reveals
npm install gsap
```

---

## 🚀 KIRO PROMPT TEMPLATES

Use these exact prompts with Kiro for best results:

### Full Rebuild:
```
"Build a complete portfolio website for Wafiq Nawaz using this design system:
- Aesthetic: Techwear Editorial Brutalism (like an anime character data card meets Swiss editorial magazine)
- Colors: #0C0C0C background, #F0EBE1 cream text, #FF5C1A burnt orange accent only
- Fonts: Bebas Neue (display headers), Syne (subheadings), DM Sans (body), JetBrains Mono (code/meta)
- Layout: Use the spec grid system — cards with thin borders, no rounded corners, editorial grid-breaking headers
- Follow all CSS specs in the ui-ux-redesign-plan.md file section by section"
```

### Hero Section Only:
```
"Build the hero section exactly as described in the SECTION 2: HERO spec. 
Include: identity card left (with barcode element), name right (with ghost text), 
tag pills, two CTA buttons, and the metadata bar at the bottom. 
Colors: --color-bg: #0C0C0C, --color-accent: #FF5C1A, --color-cream: #F0EBE1.
Fonts: Bebas Neue for the name, JetBrains Mono for metadata."
```

### Projects Section:
```
"Build the projects section from the spec: full-width featured project row 
with image left and metadata right, numbered ghost background number, 
grayscale image that colorizes on hover. Below: smaller card grid.
Use the same color system: dark bg, cream text, orange accent."
```

### Skills Section:
```
"Build the skills section as a bordered spec table — 3 columns (Frontend/Backend/Tools), 
each column has dotted skill ratings (5 dots, filled in orange = proficiency). 
Thin single-pixel borders between columns, no rounded corners. 
Font: JetBrains Mono for labels, DM Sans for skill names."
```

---

## ✅ DESIGN QUALITY CHECKLIST

Before shipping, verify every item:

### Typography
- [ ] Bebas Neue headings — no tracking compression, pure majesty
- [ ] JetBrains Mono for ALL metadata, labels, numbers, tags
- [ ] DM Sans for body text, 300 weight for descriptions
- [ ] Font sizes use `clamp()` for fluid responsiveness
- [ ] No Inter, Roboto, or Arial anywhere

### Color
- [ ] `#FF5C1A` is the ONLY accent color used throughout
- [ ] Background is `#0C0C0C` not pure black `#000`
- [ ] Text is `#F0EBE1` not pure white `#fff`
- [ ] No blue, purple, or green as accents (those are clichéd)

### Layout
- [ ] Section titles use Bebas Neue at `clamp(3rem, 8vw, 7rem)+`
- [ ] Borders use `1px solid var(--color-line)` — thin and precise
- [ ] Grid uses `border: 1px` between items, not gap-only separators
- [ ] At least one ghost text element (decorative background type)
- [ ] Vertical rotated label on at least one section

### Image 4 Specific Elements (Data Card feel)
- [ ] Barcode decoration in hero and/or footer
- [ ] `WN.001`-style IDs on project cards
- [ ] Metadata strip at bottom of hero
- [ ] Lettered nodes (A, B, C) on experience timeline

### Image 1 & 2 Specific Elements (Editorial feel)
- [ ] Oversized section headers that are 3x+ bigger than body text
- [ ] Numbered sections (01. 02. 03.)
- [ ] Full-bleed horizontal divider lines between projects
- [ ] B&W base with accent doing ALL the color work

### Micro-interactions
- [ ] Cards lift + accent border on hover
- [ ] Nav links have underline sweep animation
- [ ] Buttons translate(2px, -2px) + box-shadow on hover
- [ ] Status dot pulses (the green "open to work" dot)
- [ ] Custom cursor (circle + dot, accent colored)

### Performance
- [ ] Images use `loading="lazy"` and WebP format
- [ ] Fonts use `font-display: swap`
- [ ] Animations use `transform` and `opacity` only (GPU composited)
- [ ] IntersectionObserver used for scroll reveals (not scroll events)

---

*This plan is designed to produce a portfolio that looks like a professional piece of art — not a generic dev portfolio. Execute it fully and it will stand out to every recruiter who sees it.*

**File created:** May 22, 2026 | **For use with:** Kiro AI Agent
