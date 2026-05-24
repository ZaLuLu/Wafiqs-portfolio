# ANTIGRAVITY OVERHAUL
### Full Layout & Visual Design Rework — wafiqnawaz.vercel.app
> Based on actual source audit of all 5 sections + shared components.
> Stack: React 19 · Framer Motion v12 · Lenis · Tailwind v4 · Bebas Neue · Playfair · JetBrains Mono

---

## WHAT THIS FILE IS

A section-by-section overhaul spec. Every idea references the exact file, exact class, or exact line it targets. Nothing generic. Each change is described with enough precision that you can implement it without guessing.

The design direction: **editorial gravity broken** — the site currently feels like a beautiful printed monograph lying flat on a table. The overhaul lifts it off the surface. Depth, tension, overlap, scale contrast, and deliberate wrongness (type bleeding out of containers, portrait overlapping sections, asymmetric columns that feel intentional, not accidental).

---

## SECTION 01 — HERO
> `Hero.jsx` · currently: two-name poster + centered portrait + marquee + bottom metadata

### PROBLEM
The layout is symmetrical and safe. `WAFIQ` left-aligned, `NAWAZ.` right-aligned, photo centered. It reads like a template. The parallax is there but subtle to the point of being invisible.

---

### CHANGE 1 — BLEED THE PORTRAIT OUT OF THE HERO
**What:** Remove the `absolute` centering of the portrait. Instead, let it sit in normal flow between the two name lines and give it `margin-bottom: -20vh`. It will physically bleed downward into the About section's top edge.

**Why:** This is the single highest-impact change on the site. The portrait crossing the section boundary creates immediate visual tension and signals to the viewer that this is not a standard scroll site. It anchors the whole editorial concept.

**Where:** `Hero.jsx` line 101–113 (the `motion.div` wrapping the portrait)

```jsx
// Remove: absolute, z-2, the centering positioning
// Replace with:
<motion.div
  variants={photoVariants}
  style={{ y: photoY }}
  className="relative z-10 w-[260px] sm:w-[340px] md:w-[400px] aspect-[3/4]
             overflow-visible mx-auto mb-[-20vh] border border-[#F2EDE4]/10
             shadow-[0_40px_80px_rgba(0,0,0,0.6)] rounded-[4px]"
>
```

**CSS needed in `index.css`:**
```css
/* Allow hero section overflow for portrait bleed */
#hero { overflow: visible; }
#about { position: relative; z-index: 10; }
```

**Note:** The About section's light `bg-[#F2EDE4]` background will naturally appear behind the bleeding portrait. The portrait's dark shadow drops onto the cream paper — this is the intended effect.

---

### CHANGE 2 — HERO TYPE SCALE: BREAK THE GRID
**What:** Currently both names share the same `clamp(4.5rem,14vw,11.5rem)` size. Make `NAWAZ.` 30% larger than `WAFIQ` and run it full-bleed past the right edge with `overflow: visible` on its container.

**Why:** Equal scale = no hierarchy = no tension. Making `NAWAZ.` dominate creates the deliberate imbalance that editorial design uses to signal craft.

**Where:** `Hero.jsx` line 117–123 (the `NAWAZ.` h1)

```jsx
// Change text size of NAWAZ only:
className="font-display text-[clamp(6rem,18vw,15rem)] leading-[0.82]
           tracking-[-0.02em] text-[#C9A96E] uppercase select-text
           translate-x-[3vw]"  // bleeds slightly right
```

---

### CHANGE 3 — REPLACE THE MARQUEE STRIP WITH A DIAGONAL TICKER
**What:** The horizontal marquee is standard. Rotate the entire strip `−2deg` and give it a `skewY(-1deg)`. It stays full-width but the tilt breaks the flat horizontal rhythm.

**Why:** Every other section has strict horizontal rules. One tilted element creates tension against all of them — it reads as intentional, not broken.

**Where:** `Marquee.jsx` — wrap the outer `div` in a `motion.div`:
```jsx
<motion.div
  initial={{ rotate: 0 }}
  animate={{ rotate: -1.5 }}
  style={{ transformOrigin: 'left center' }}
  className="w-full"
>
  {/* existing marquee div */}
</motion.div>
```

---

### CHANGE 4 — ADD A FLOATING ROLE LABEL BESIDE THE PORTRAIT
**What:** A vertically-written `writing-mode: vertical-rl` label that reads `FULL·STACK·DEV` positioned on the left edge of the portrait, like a spine on a book.

**Why:** The portrait has no annotation and floats context-free. The spine label ties it to the editorial metaphor without adding clutter.

**Where:** Inside `Hero.jsx` portrait `motion.div`, add a sibling:
```jsx
<div className="absolute -left-8 top-0 bottom-0 flex items-center">
  <span
    className="font-mono text-[8px] tracking-[0.3em] text-[#F2EDE4]/25 uppercase"
    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
  >
    FULL · STACK · DEV · 2026
  </span>
</div>
```

---

## SECTION 02 — ABOUT
> `About.jsx` · currently: polaroid left + pull quote + 2-col bio right · bg: `#F2EDE4`

### PROBLEM
The polaroid card is charming but it's just a card sitting in a column. The bio text is split into two columns with no visual hierarchy between them. The pull quote doesn't feel "pulled" — it has a left border but reads like a paragraph. The section is polite when it should be bold.

---

### CHANGE 5 — MAKE THE PULL QUOTE A FULL-WIDTH STATEMENT
**What:** Move the blockquote out of the right column entirely. Place it above the two-column grid as a full-width statement. Increase the size to `clamp(2rem, 5vw, 4rem)`. Let it run 85% width so it doesn't hit the edge. Remove the left border. Add the gold `#C9A96E` color to the first word only via a `<span>`.

**Why:** A pull quote that spans full width stops the reader. The current two-column pull quote is just a slightly larger paragraph. Full-width forces a beat before the bio — better pacing.

**Where:** `About.jsx` — extract the `motion.div` blockquote from inside the grid, place it above:

```jsx
{/* BEFORE the grid */}
<motion.div variants={itemVariants} className="w-full max-w-[85%] mt-2 mb-6">
  <blockquote className="font-serif italic font-light
    text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] text-[#0D0C09]">
    <span className="text-[#C9A96E]">"Discipline</span>
    {" & persistent iteration outperform ad-hoc intelligence."
  </blockquote>
</motion.div>

{/* Grid becomes photo-only left, bio-only right */}
```

---

### CHANGE 6 — POLAROID: TILT IT AND ADD A PINNED TAPE ELEMENT
**What:** Apply `rotate-[2.5deg]` to the polaroid card. Add two small `div` elements styled as washi tape strips crossing the top corners — semi-transparent cream rectangles at `−45deg` rotations.

**Why:** A perfectly upright polaroid looks digital. A slightly tilted one with tape corners looks physical — it triggers the editorial/zine aesthetic the site is going for without any additional content.

**Where:** `About.jsx` line 42 — the outer polaroid `motion.div`:
```jsx
// Add to className:
"rotate-[2.5deg] hover:rotate-[0deg] transition-transform duration-500"

// Add tape strips as absolute children before the image:
<div className="absolute -top-3 left-6 w-12 h-5 bg-[#E8E2D9]/70
                rotate-[-35deg] rounded-[1px] z-20 pointer-events-none" />
<div className="absolute -top-3 right-6 w-12 h-5 bg-[#E8E2D9]/70
                rotate-[35deg] rounded-[1px] z-20 pointer-events-none" />
```

---

### CHANGE 7 — BIO COLUMNS: STAGGERED VERTICAL OFFSET
**What:** The two bio columns currently sit at the same vertical baseline. Shift the right column down by `mt-8` so it starts lower. Add a thin vertical `1px` rule in `#0D0C09]/08` between the columns.

**Why:** Same-baseline two-column text reads as a table. Offset columns read as layout intention. The vertical rule reinforces the magazine-spread metaphor.

**Where:** `About.jsx` — the 2-col grid `div` inside the right column:
```jsx
// Right column wrapper: add mt-8
// Between columns: add a divider
<div className="hidden md:block w-[0.5px] bg-[#0D0C09]/10 self-stretch mx-4" />
```

---

### CHANGE 8 — ADD A STATS ROW BELOW THE BIO
**What:** A horizontal strip of 3–4 monospaced stat blocks: `03 PROJECTS IN PROD`, `02 YRS BUILDING`, `∞ COFFEES`. Separated by `·` dividers. Full width, `border-t` above it.

**Why:** The bio section has no quantified information. Stat blocks are a staple of high-end dev portfolios — they give recruiters anchor points without adding prose.

**Where:** `About.jsx` — new `motion.div` after the bio columns:
```jsx
<motion.div variants={itemVariants}
  className="w-full border-t border-[#0D0C09]/10 pt-6 mt-4
             grid grid-cols-3 gap-4 select-none">
  {[
    { value: '03', label: 'PROJECTS IN PROD' },
    { value: '02+', label: 'YRS BUILDING' },
    { value: 'OPEN', label: 'FOR 2026 INTERNSHIPS' },
  ].map((stat) => (
    <div key={stat.label} className="flex flex-col gap-1">
      <span className="font-display text-[2.5rem] leading-none text-[#0D0C09]">
        {stat.value}
      </span>
      <span className="font-mono text-[8px] tracking-[0.2em] text-[#0D0C09]/40 uppercase">
        {stat.label}
      </span>
    </div>
  ))}
</motion.div>
```

---

## SECTION 03 — SKILLS
> `Skills.jsx` · currently: category blocks with vertical sidebar label + dotted leader rows + ■ block gauges · bg: `#0D0C09`

### PROBLEM
The `■` block gauges are the right instinct but they all appear static on load. The vertical sidebar label is a nice concept but 110px wide sidebar column is wasted space on most viewports. The category titles (`TECHNICAL`, `SOFT`) are small relative to the section display title `Skills.` — the hierarchy drops off a cliff.

---

### CHANGE 9 — ANIMATE THE ■ BLOCKS ON SECTION ENTER
**What:** On section enter (`isInView`), the ■ blocks should fill left-to-right with a stagger. Each filled block appears with `opacity: 0 → 1` and a `scale: 0 → 1` at `20ms` intervals per block.

**Why:** Static skill bars feel like a CV. Animated ones feel like a live system diagnostic. This is already the vibe the section goes for with `SYSTEM SPECIFICATION` — the animation completes the concept.

**Where:** `Skills.jsx` — refactor `renderSquareBlocks`:
```jsx
const renderSquareBlocks = (level, isVisible) => {
  return (
    <div className="flex items-center gap-[1px]">
      {Array.from({ length: 10 }, (_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible
            ? { opacity: i < level ? 1 : 0.08, scale: 1 }
            : { opacity: 0, scale: 0 }
          }
          transition={{ delay: i * 0.04, duration: 0.2, ease: 'easeOut' }}
          className="inline-block text-[11px] leading-none font-mono"
          style={{ color: '#F5A623' }}
        >
          ■
        </motion.span>
      ))}
    </div>
  );
};
// Pass `isInView` into renderSquareBlocks(item.level, isInView)
```

---

### CHANGE 10 — ANIMATE THE DOTTED LEADER LINES
**What:** Each `.leader-line` (the dotted horizontal rule between skill name and category tag) should animate `scaleX: 0 → 1` from left to right when the section enters view. Stagger each row by `60ms`.

**Why:** The leader lines are already the most elegant part of the Skills section. Animating them makes them feel "typed" in real time — a perfect fit for the `CAPABILITIES MATRIX` label.

**Where:** `index.css` + `Skills.jsx`:
```css
/* index.css — add initial state */
.leader-line {
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.leader-line.animate { transform: scaleX(1); }
```

In `Skills.jsx` — replace `<div className="leader-line" />` with:
```jsx
<motion.div
  className="leader-line"
  initial={{ scaleX: 0 }}
  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: rowIdx * 0.06 }}
  style={{ transformOrigin: 'left center' }}
/>
```

---

### CHANGE 11 — COLLAPSE THE SIDEBAR, EXPAND THE CATEGORY TITLE
**What:** Remove the `lg:grid-cols-[110px_1fr]` sidebar layout. Place the category label inline above the skill grid as a large display-font heading — `clamp(2rem, 4vw, 3.5rem)` in `#F5A623`. The rotated vertical label text moves to a thin left border annotation only visible on `xl:` screens.

**Why:** 110px sidebar column is eating usable grid space on laptop viewports. The category title in the current layout is `1.4rem` — far too small after an `11.5rem` section title. Closing the gap between them restores hierarchy.

**Where:** `Skills.jsx` — restructure the `motion.div` per category:
```jsx
<motion.div key={cat.category} variants={categoryVariants}
  className="flex flex-col gap-6 w-full">

  {/* Category large heading row */}
  <div className="border-b border-[#F5A623]/25 pb-4 flex justify-between items-end">
    <h3 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none
                   tracking-wide text-[#F5A623] uppercase">
      {cat.category}
    </h3>
    <span className="font-mono text-[8px] text-[#F2EDE4]/25 tracking-widest uppercase">
      SECTOR // 0{idx + 1}
    </span>
  </div>

  {/* Skill grid — now full width */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
    {/* existing item rows */}
  </div>
</motion.div>
```

---

## SECTION 04 — PROJECTS
> `Projects.jsx` · currently: alternating 6/6 grid rows with blank `project-frame` placeholder + text block · bg: `#1C1915`

### PROBLEM
The `project-frame` is a placeholder with a diagonal CSS hatch — it exists because there are no screenshots yet. This is the biggest gap visually. Beyond that, the alternating layout is correct but the text side feels loose — too much vertical stacking of small elements without a strong anchor point. The large watermark index number (`opacity-[0.03]`) is barely visible.

---

### CHANGE 12 — REPLACE BLANK FRAMES WITH TYPOGRAPHIC POSTER FRAMES
**What:** Since screenshots don't exist yet, lean into the absence as a design decision. Replace the blank frame content with a large monospaced "code block" style representation of the project — print the project title in `clamp(3rem,8vw,6rem)` Bebas Neue at `opacity-[0.12]` as a background, then overlay a structured data block in the foreground showing: stack items as `KEY: VALUE` pairs in JetBrains Mono, a horizontal progress-style bar made from `─────` characters, and the year.

**Why:** "No screenshot" portfolios that use typographic frames look intentional. Blank hatched boxes look unfinished. This is the difference between Virgil Abloh's work and a broken website.

**Where:** `Projects.jsx` — replace the inner content of `.project-frame`:
```jsx
<div className="project-frame select-none cursor-pointer group relative overflow-hidden">

  {/* Large ghosted title */}
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="font-display text-[clamp(3rem,9vw,7rem)] text-[#F2EDE4]/[0.07]
                     tracking-wider group-hover:text-[#1A5EDB]/[0.10] transition-colors duration-500
                     text-center leading-none px-4">
      {project.title}
    </span>
  </div>

  {/* Foreground data block */}
  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1
                  border-t border-[#F2EDE4]/[0.06] bg-gradient-to-t
                  from-[#1C1915]/80 to-transparent">
    <span className="font-mono text-[8px] text-[#1A5EDB]/60 tracking-[0.2em] uppercase">
      ── STACK ──────────────────
    </span>
    {project.stack.slice(0, 3).map(tech => (
      <span key={tech} className="font-mono text-[9px] text-[#F2EDE4]/30">
        › {tech}
      </span>
    ))}
    <span className="font-mono text-[7px] text-[#C9A96E]/40 mt-1 tracking-widest">
      {project.year} · {project.status}
    </span>
  </div>

  {/* Corner brackets */}
  <div className="absolute top-4 left-4 w-5 h-5 border-t border-l
                  border-[#F2EDE4]/15 group-hover:border-[#1A5EDB]/50 transition-colors" />
  <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r
                  border-[#F2EDE4]/15 group-hover:border-[#1A5EDB]/50 transition-colors" />
</div>
```

---

### CHANGE 13 — INCREASE THE WATERMARK INDEX NUMBER OPACITY
**What:** Change `opacity-[0.03]` to `opacity-[0.055]` on the watermark span, and shift it to `top-0 right-[-2rem]` so it clips at the section right edge.

**Why:** At `0.03` it's invisible. At `0.055` it reads as intentional depth without competing with the content. Clipping at the edge reinforces the bleed-out-of-bounds design language.

**Where:** `Projects.jsx` line — the `<span>` with `absolute right-0 top-6`:
```jsx
className="absolute right-[-1rem] top-0 font-display
           text-[clamp(8rem,18vw,14rem)] text-[#F2EDE4]
           opacity-[0.055] select-none pointer-events-none z-0 leading-none"
```

---

### CHANGE 14 — PROJECT TEXT BLOCK: PIN THE TITLE LARGER
**What:** The project `h3` is `text-[2.5rem]`. Increase to `clamp(2.75rem, 5vw, 4.5rem)`. Add a thin `1px` underline in `#1A5EDB` that draws in on hover using a CSS `::after` pseudo with `width: 0 → 100%` transition. Remove the italic subtitle — it adds noise.

**Why:** The project title is the most important identifier in the row. At `2.5rem` it doesn't hold up next to the section's `11.5rem` heading. The animated underline replaces the current crude `hover:underline` on the CTA links.

**Where:** `Projects.jsx` — the `h3` element + subtitle `span`:
```jsx
// Replace h3 className:
className="font-display text-[clamp(2.75rem,5vw,4.5rem)] tracking-tight
           leading-[0.95] text-[#F2EDE4] relative inline-block
           after:content-[''] after:absolute after:bottom-0 after:left-0
           after:h-[1px] after:bg-[#1A5EDB] after:w-0
           hover:after:w-full after:transition-all after:duration-400"

// Remove the subtitle span entirely (it's redundant with the description para)
```

---

## SECTION 05 — CONTACT
> `Contact.jsx` · currently: pull quote + 2×2 channel cards + resume download (left) · form (right) · bg: `#F2EDE4`

### PROBLEM
The form is functional but visually identical to any modern contact form — it has no personality. The channel cards (`OUTLOOK MAIL`, `GMAIL MAIL`) use the same visual language as the project cards in `Projects.jsx` but the background is different, making them look copy-pasted. The section heading `Transmit Request.` breaks across a `<br>` which on some viewports creates awkward orphans.

---

### CHANGE 15 — CHANNEL CARDS: ADD AN ICON COLUMN + HOVER SLIDE
**What:** Add a `→` arrow character on the right of each channel card that starts at `opacity-0 translateX(-8px)` and transitions to `opacity-1 translateX(0)` on hover. Add a `·` prefix icon specific to each channel type using Phosphor icons (already in `package.json`): `EnvelopeSimple` for email, `LinkedinLogo` for LinkedIn, `GithubLogo` for GitHub.

**Why:** The cards currently have no directional affordance — nothing tells the user they're clickable links. The hover arrow makes the intent unmistakable without adding a "click here" label.

**Where:** `Contact.jsx` — each anchor `<a>` inside the channel grid:
```jsx
import { EnvelopeSimple, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

// Inside each card:
<a href="..." className="... group relative overflow-hidden">
  <span className="font-mono text-[8px] text-[#C9A96E] ... flex items-center gap-1.5">
    <EnvelopeSimple size={10} weight="bold" />
    OUTLOOK MAIL
  </span>
  <span className="font-body text-[12px] ...">wafiqnawaz@outlook.com</span>

  {/* Hover arrow */}
  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[14px]
                   text-[#C9A96E] opacity-0 -translate-x-2
                   group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-300">
    →
  </span>
</a>
```

---

### CHANGE 16 — FORM INPUTS: ADD ANIMATED CHARACTER COUNTERS
**What:** Below the `message` textarea, show a live character count: `{n} / 500` in `font-mono text-[9px] text-[#0D0C09]/30`. It updates on `onChange`. At 450+ chars it shifts to `text-[#C9A96E]`.

**Why:** Character counters make the form feel like a real product UI rather than a static HTML form. It adds interactivity with zero visual weight.

**Where:** `Contact.jsx` — after the `<textarea>`:
```jsx
<span className={`font-mono text-[9px] text-right block mt-1 transition-colors
  ${formState.message.length > 450 ? 'text-[#C9A96E]' : 'text-[#0D0C09]/30'}`}>
  {formState.message.length} / 500
</span>
```

---

### CHANGE 17 — HEADING: REMOVE THE `<br>`, LET IT RUN WIDE
**What:** Remove `<br className="hidden sm:inline" />` from the `Transmit Request.` heading. Let it run as one line at full `clamp(4.5rem,14vw,11.5rem)`. On mobile it will wrap naturally. On desktop it reads as one commanding full-width statement.

**Why:** The `<br>` was added to force a two-line layout. But at `14vw` the text spans the full width on one line on any screen over 750px, making it more imposing.

**Where:** `Contact.jsx` — the `h2`:
```jsx
<h2 className="font-display text-[clamp(4.5rem,14vw,11.5rem)] leading-[0.8]
               tracking-[-0.01em] text-[#0D0C09] uppercase select-text">
  Transmit Request.
</h2>
```

---

## GLOBAL CHANGES
> Affects all sections. Touch `App.jsx`, `index.css`, `Nav.jsx`.

---

### CHANGE 18 — CUSTOM CURSOR (Context-Aware)
**What:** A 14px circle, `border: 1.5px solid #C9A96E`, `background: transparent`, follows mouse with Framer Motion spring lag (`stiffness: 200, damping: 28`). On hover over any `<a>` or `<button>`, it scales to `2.5×` and fills `rgba(201,169,110,0.15)`. On hover over the project frames, it morphs to a `+` crosshair label that reads `VIEW`. System cursor hidden on non-touch devices via `cursor: none` on `html`.

**Why:** The site has custom type, custom grain, custom everything — and then hands control of the pointer back to the OS. The cursor is the one element the user interacts with on every pixel they visit. Making it match the palette takes 40 lines and is immediately noticeable.

**Where:** New file `src/components/Cursor.jsx`, mounted in `App.jsx` above `<Nav />`:
```jsx
// App.jsx
import Cursor from './components/Cursor';
// In return:
<Cursor />
```

```jsx
// Cursor.jsx skeleton:
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 200, damping: 28 });
  const y = useSpring(my, { stiffness: 200, damping: 28 });

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX - 7); my.set(e.clientY - 7); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-[14px] h-[14px] rounded-full z-[9999]
                 border border-[#C9A96E] pointer-events-none mix-blend-difference"
    />
  );
}
```

**CSS in `index.css`:**
```css
@media (pointer: fine) {
  html, * { cursor: none !important; }
}
```

---

### CHANGE 19 — `GoldRule` ANIMATED DRAW-IN
**What:** Convert both gradient `div` lines in `GoldRule.jsx` to `motion.div`. Animate `scaleX: 0 → 1` on mount, with `transformOrigin: 'right'` on the left line and `'left'` on the right line. The `◆` fades in after both lines complete (`delay: 0.4`).

**Why:** `GoldRule` appears between every major section. Animating it makes every section boundary feel like a page turning instead of content appearing.

**Where:** `GoldRule.jsx` — full replacement:
```jsx
import { motion } from 'framer-motion';

export default function GoldRule({ label = '◆' }) {
  return (
    <div className="flex items-center gap-4 w-full select-none my-6">
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'right' }}
        className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent to-[#C9A96E]/25"
      />
      <motion.span
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="font-mono text-[9px] tracking-[0.2em] text-[#C9A96E]"
      >
        {label}
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left' }}
        className="flex-1 h-[0.5px] bg-gradient-to-r from-[#C9A96E]/25 to-transparent"
      />
    </div>
  );
}
```

---

### CHANGE 20 — NAV: ACTIVE INDICATOR ABOVE NOT BELOW
**What:** The `layoutId="activeNavUnderline"` currently renders as `bottom-0` (underline). Move it to `top-0` (overline). Change `h-[1.5px]` to `h-[1px]`. This is a small detail but overlines are rarer and feel more editorial — they sit like a header rule rather than a Wikipedia link.

**Where:** `Nav.jsx` — the `motion.div` with `layoutId`:
```jsx
// Change: bottom-0 → top-0
// Change: h-[1.5px] → h-[1px]
className="absolute top-0 left-0 right-0 h-[1px] bg-[#C9A96E]"
```

---

## IMPLEMENTATION ORDER

Shortest path to the biggest visual jump, in sequence:

| # | Change | File | Time Est. |
|---|--------|------|-----------|
| 1 | Portrait bleed out of Hero | `Hero.jsx` + `index.css` | 20 min |
| 18 | Custom cursor | new `Cursor.jsx` + `App.jsx` + `index.css` | 30 min |
| 19 | GoldRule draw-in | `GoldRule.jsx` | 10 min |
| 9 | Animated ■ blocks | `Skills.jsx` | 20 min |
| 10 | Leader line draw-in | `Skills.jsx` + `index.css` | 20 min |
| 12 | Typographic project frames | `Projects.jsx` | 25 min |
| 5 | Full-width pull quote | `About.jsx` | 10 min |
| 6 | Polaroid tilt + tape | `About.jsx` | 10 min |
| 8 | Stats row | `About.jsx` | 15 min |
| 2 | NAWAZ type scale break | `Hero.jsx` | 5 min |
| 15 | Channel cards hover arrow | `Contact.jsx` | 15 min |
| 20 | Nav overline indicator | `Nav.jsx` | 3 min |

**Total estimated time: ~3 hours for all 20 changes.**

---

## WHAT NOT TO TOUCH

- `Lenis` config in `App.jsx` — it's well-tuned, leave `duration: 1.2` alone
- The `Grain` overlay — it's doing exactly the right job at `opacity: 0.04`
- The color palette — `#0D0C09` / `#F2EDE4` / `#C9A96E` / `#1A5EDB` is coherent and distinctive, don't add new colors
- `SectionLabel` component — it's clean, the only improvement is the animated line draw (covered in Change 10)
- The `--type-display: clamp(5rem,15vw,12rem)` token — the scale is correct for the editorial format

---

*ANTIGRAVITY OVERHAUL v1.0 — generated against actual source audit May 2026*
