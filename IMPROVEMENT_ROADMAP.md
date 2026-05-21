# 🎯 PORTFOLIO IMPROVEMENT ROADMAP — To 10/10

> Sections are ordered by priority. Do Phase 1 before anything else — these are blockers.

---

## PHASE 1 — CRITICAL FIXES (Blockers)
> *Nothing else matters until these are done.*

### 1.1 — Real Contact Data
- [ ] Replace `zalulu@example.com` with your actual email in `ContactSection.jsx`
- [ ] Replace `github.com/zalulu` with your real GitHub profile URL
- [ ] Fix Twitter: make `@zalulu_sec` handle match the URL (`twitter.com/zalulu_sec`)
- [ ] Add LinkedIn keycard alongside Email / GitHub / Twitter

### 1.2 — Profile Photo
- [ ] Add your actual photo to `public/` (e.g. `profile.jpg`)
- [ ] Wire it into `CharacterCard.jsx` — currently renders a broken image box
- [ ] Use `object-fit: cover` with a square or portrait crop

### 1.3 — Real GitHub Links Per Project
- [ ] In `src/data/projects.js` — each project has `url: "https://github.com/zalulu"` (all the same!)
- [ ] Update each project's `url` to link to the **actual repo**, not just your profile page
- [ ] If a repo is private, link to a demo URL or a write-up instead

### 1.4 — Custom Favicon
- [ ] Design a simple favicon — a neon-yellow "Z" on black, or the asterisk from the Hero
- [ ] Replace `/vite.svg` in `index.html` with your actual favicon
- [ ] Add `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png` for full coverage

### 1.5 — Deploy It
- [ ] Push to GitHub
- [ ] Deploy on Vercel or Netlify (both are free, ~5 mins)
- [ ] Get a custom domain: `wafiq.dev` or `zalulu.dev` (~$10/yr on Namecheap)

---

## PHASE 2 — CONTENT (What Recruiters Actually Read)
> *The design gets them in. Content closes the deal.*

### 2.1 — Project Cards (`src/data/projects.js`)
- [ ] Add a `screenshot` field to each project for the VaultCard tooltip preview
- [ ] Add a `highlights` array with 2-3 **quantified** bullet points per project, e.g.:
  ```js
  highlights: [
    "Chains Nmap + Gobuster + Nikto into a single JSON report",
    "Reduced manual triage time by ~60% in lab environments",
    "Supports 15+ scan profiles via CLI flags"
  ]
  ```
- [ ] **Vulnerability Scanner** — add: number of findings categories, scan speed, any real usage
- [ ] **Neural Network Visualizer** — add: link to live demo if deployed, what it teaches
- [ ] **Secure File Drop** — add: encryption scheme detail (AES-256-GCM?), max file size
- [ ] **Zero-Day Research** — add: CVE number if assigned, vendor name (or "withheld"), disclosure timeline

### 2.2 — About Section
- [ ] In `AboutSection.jsx` → "CURRENT QUEST" card:
  - Remove or update "Senior Creative Developer @ DigitalVoid" if it's placeholder
  - Replace with your real current status: student, freelance, open to work, internship hunting, etc.
- [ ] Add your actual location (city/country) — recruiters need geography
- [ ] The EQUIPPED SKILLS list is hardcoded — move it to a data file for easier maintenance

### 2.3 — Add a Resume Link
- [ ] Put your PDF resume in `public/resume.pdf`
- [ ] Add a "DOWNLOAD_RESUME" button on the **Home screen** (next to the nav menu)
- [ ] Also add it in the Contact section
- [ ] Use `<a href="/resume.pdf" download>` — works out of the box with Vite

### 2.4 — Add Real CTF / Security Credibility
- [ ] Add a `certificates` section or a badge row to the About/Skills area:
  - TryHackMe / HackTheBox rank/profile link
  - Any certifications you have or are pursuing (Security+, eJPT, CEH, OSCP)
- [ ] If you have write-ups anywhere (Medium, blog, GitHub), link to them from projects

---

## PHASE 3 — UX & NAVIGATION (Make It Work Better)
> *Design is polished. These fixes remove friction.*

### 3.1 — URL Routing
- [ ] Install React Router: `npm install react-router-dom`
- [ ] Replace the `currentScreen` state machine in `App.jsx` with proper `<Routes>`
- [ ] Map: `/` → Home, `/about` → About, `/skills` → Skills, `/projects` → Projects, `/contact` → Contact
- [ ] This fixes: browser back button, deep-linking, bookmarks, Google indexing

### 3.2 — Fix Navigation Labels for Human Readability
- [ ] Consider adding a subtitle under the game-theme label:
  - `PLAYER 1 INFO` → sub-label "About Me"
  - `MULTIPLAYER` → sub-label "Contact"
  - `PROJECT ARCHIVE` → sub-label "Work"
  - `SKILL TREE` → sub-label "Skills"
- [ ] Or add a tooltip on hover showing the plain-english name
- *The game labels are cool, but a 3-second scan by a non-gamer recruiter might miss "MULTIPLAYER = Contact"*

### 3.3 — Mobile Layout
- [ ] Test on 375px (iPhone SE) and 390px (iPhone 14) widths
- [ ] The calligraphic name at `text-[80px]` on mobile currently overflows — add `overflow-hidden` or reduce breakpoint size
- [ ] The hazard-stripe WindowFrame border is very thick on mobile — consider reducing on `sm:` breakpoint
- [ ] VaultCard tooltip (`fixed` positioned cursor-trail) should be disabled on touch devices (it follows mouse only, on mobile it shows at last-touched coordinates)
- [ ] Contact keycards: on mobile the `translate-x` hover effect runs on tap — should trigger on click, not hover

### 3.4 — Focus Management
- [ ] When a section loads (e.g., you click "PROJECT ARCHIVE"), move focus to the section heading
- [ ] Add `tabIndex={-1}` + `ref` to each section's `<h2>` and call `.focus()` after `handleLoadingComplete()`
- [ ] This makes keyboard-only and screen-reader navigation work correctly

---

## PHASE 4 — VISUAL POLISH (From Great to Perfect)
> *The 1% details that make it feel premium.*

### 4.1 — Hero Marquee
- [ ] The status marquee currently clips mid-text at some viewport widths
- [ ] Fix: make the container `width: 100%` or `min-width: 380px` instead of fixed `w-[280px]`
- [ ] Or replace with a wider, full-width bar at the top of the WindowFrame

### 4.2 — VaultCard Preview Tooltip
- [ ] Replace `[ PREVIEW_NA ]` with real project screenshots
- [ ] Even a 240×160 PNG screenshot of the project/UI is enough
- [ ] Add `screenshot` field to `projects.js`, render as `<img>` in the tooltip div in `VaultCard.jsx`

### 4.3 — Skills Section Layout
- [ ] The TECHNICAL category list is partially cut at the top — the section header seems to scroll off
- [ ] Add a sticky or fixed category sidebar header so it's always visible
- [ ] Animate the progress bars on section load (fill from 0% to final value over 800ms)

### 4.4 — About → CharacterCard Stats
- [ ] The "LOCKED" stat blocks on the CharacterCard are placeholder
- [ ] Fill them in: stat ideas → `PWR: REACT`, `SPD: PYTHON`, `DEF: OPSEC`, `STR: C/C`
- [ ] Or unlock them visually with a glitch-reveal animation on hover

### 4.5 — Loading Overlay
- [ ] Add a section-specific loading message in `LoadingOverlay.jsx`:
  - Projects → `> ACCESSING VAULT...`
  - About → `> LOADING DOSSIER...`
  - Contact → `> ESTABLISHING LINK...`
  - Skills → `> SCANNING SKILL TREE...`
- [ ] The current overlay presumably shows generic text — customize per section for immersion

### 4.6 — Console Easter Egg
- [ ] Wrap the `console.log` ASCII art in `if (import.meta.env.DEV)` OR keep it for prod (it's intentional)
- [ ] Add: `console.log("%c Open to work — wafiq@youremail.com", "color: #F4FF1E; background: #000; font-size: 14px; padding: 4px 8px;")` — devs who open console should get your contact too

---

## PHASE 5 — SEO & META (15 mins, big impact)

- [ ] In `index.html`, add:
  ```html
  <meta name="description" content="Wafiq Nawaz (ZaLuLu) — Cybersecurity student & creative developer. Portfolio of security tools, web apps, and vulnerability research." />
  <meta property="og:title" content="Wafiq Nawaz — Portfolio" />
  <meta property="og:description" content="Cybersecurity student & developer. Security tools, neural visualizers, encrypted file systems." />
  <meta property="og:image" content="https://yourdomain.com/og-preview.png" />
  <meta property="og:url" content="https://yourdomain.com" />
  <meta name="twitter:card" content="summary_large_image" />
  ```
- [ ] Create `public/og-preview.png` — a 1200×630 image of your hero screen (screenshot it)
- [ ] Change `<title>` from "Zalulu's Portfolio" to "Wafiq Nawaz — Cybersecurity & Creative Dev"

---

## PHASE 6 — CODE CLEANUP
> *Not visible, but matters for credibility if someone views source.*

- [ ] **Remove `dangerouslySetInnerHTML` style blocks** from `AboutSection.jsx` (lines 92–100) and `ProjectsSection.jsx` (lines 42–58) — these `@keyframes` already exist in `index.css`
- [ ] **Fix the dead CSS class conflict** in `AboutSection.jsx` — `bg-neon-blue` / `bg-neon-pink` classes are overridden by inline `style` props on the same element. Pick one approach.
- [ ] Move hardcoded skill arrays from `AboutSection.jsx` and `SkillsTerminal.jsx` into `src/data/skills.js`
- [ ] Move hardcoded contact definitions from `ContactSection.jsx` into `src/data/contacts.js`
- [ ] Add `<title>` per-route once React Router is set up (different titles per section)

---

## SUMMARY CHECKLIST

| Phase | Est. Time | Impact |
|---|---|---|
| Phase 1 — Critical Fixes | 2–3 hours | 🔴 Enables basic functionality |
| Phase 2 — Content | 3–4 hours | 🔴 Determines if you get interviews |
| Phase 3 — UX & Nav | 2–3 hours | 🟠 Fixes professional UX gaps |
| Phase 4 — Visual Polish | 2–3 hours | 🟡 Elevates to premium feel |
| Phase 5 — SEO/Meta | 15–30 mins | 🟡 Enables discoverability |
| Phase 6 — Code Cleanup | 1 hour | ⚪ Professional code hygiene |
| **TOTAL** | **~12–14 hours** | **10/10 portfolio** |

---

*Last reviewed: 2026-05-05*
