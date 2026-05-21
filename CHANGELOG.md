# Project Changelog

All notable changes to this project will be documented in this file.

## [2026-05-07] — Centralized Content Layer (`portfolio.js`)

### Added
- **`src/data/portfolio.js` — Single Source of Truth**: Created a unified content data file that consolidates every editable string, link, and list across the entire portfolio into one place. Organized into clearly commented sections: `IDENTITY`, `SOCIALS`, `EMAIL_USER`/`EMAIL_DOMAIN`, `CONTACTS`, `HERO`, `ABOUT`, `SKILL_CATEGORIES`, and `PROJECTS`.
- **Inline instructions in `portfolio.js`**: The file contains a full how-to header explaining what to change, what not to touch, and a quick-reference map of which section controls which part of the UI. No prior code knowledge required to update content.

### Changed
- **`HeroHeader.jsx`**: Now imports `IDENTITY` (name, role, tagline) and `HERO` (marquee text) from `portfolio.js`. All hardcoded strings removed.
- **`CharacterCard.jsx`**: Now imports `IDENTITY` (name, alias, class label, status badge, quote, serial number) and `SOCIALS` (GitHub, LinkedIn URLs) from `portfolio.js`. All hardcoded strings removed.
- **`AboutSection.jsx`**: Now imports `ABOUT` (bio, alias origin, current quests, equipped skills, passive traits) from `portfolio.js`. Quest list and skill/trait badge arrays are fully data-driven — add or remove items in `portfolio.js` with no JSX edits required.
- **`SkillsTerminal.jsx`**: Now imports `SKILL_CATEGORIES` from `portfolio.js`. The previously hardcoded `CATEGORIES` constant has been removed. Skill labels and percentages are now updated exclusively in `portfolio.js`.
- **`ContactSection.jsx`**: Now imports `CONTACTS`, `EMAIL_USER`, and `EMAIL_DOMAIN` from `portfolio.js`. Contact keycards are fully data-driven — the component contains no content.
- **`src/data/projects.js`**: Converted to a thin re-export shim (`export { PROJECTS as projectsData } from './portfolio'`) to preserve backward compatibility with existing `ProjectsSection` imports.

---

## [2026-05-04] — Code Quality Upgrade Pass

### Security
- **Email obfuscation**: Split email address into `EMAIL_USER` + `EMAIL_DOMAIN` constants in `ContactSection.jsx` to block naive regex scrapers while preserving full `mailto:` usability.
- **Clipboard fallback**: Added `execCommand` fallback in `copyToClipboard` for environments without `navigator.clipboard` (non-HTTPS / older browsers).
- **`noopener,noreferrer`**: All `window.open()` calls now pass both flags to prevent tab-napping attacks.
- **Eliminated `dangerouslySetInnerHTML`**: Removed every inline `<style dangerouslySetInnerHTML>` block across 5 components (`BrutalistCursor`, `HeroHeader`, `VaultCard`, `CharacterCard`, `ContactSection`) — styles moved to `index.css`.

### Changed
- **CSS consolidated into `index.css`**: All `@keyframes`, shared component styles (`.dymo-label`, `.ripple`, `.btn-brutalist`), and animation utility classes are now defined in a single file — no more scattered duplicates.
- **Dead theme CSS removed**: Deleted unused `.theme-cyber` and `.theme-industrial` rulesets from `index.css`.
- **`useSound.js` stale closure fix**: `toggleMute` now reads/writes a `useRef` instead of closed-over state, eliminating the off-by-one mute toggle bug.
- **`useEffect` dependency fix**: Audio context init effect changed from `[isMuted]` to `[]` — listeners no longer re-register every time mute is toggled.
- **`mousemove` throttled in `VaultCard`**: Mouse tracking now runs through `requestAnimationFrame`, limiting React re-renders to once per frame instead of once per pixel.
- **`createOscillator` helper extracted**: Shared Web Audio oscillator logic deduplicated into a single internal helper in `useSound.js`.
- **`projects.js` `url` field added**: All 4 project entries now have a `url` property so the "EXECUTE PAYLOAD" button links to real pages.
- **`console.clear()` removed**: Replaced with a passive `console.log` easter egg that no longer wipes legitimate browser warnings in DevTools.
- **Mute button `aria-label`**: Replaced `title` attribute with a dynamic `aria-label` (`"Mute sound effects"` / `"Unmute sound effects"`) for proper screen reader support.

### Added
- **JSDoc comments**: Every component now has a top-level block comment describing its purpose and noting where its CSS lives.
- **Keyboard accessibility**: Keycard buttons in `ContactSection` now respond to `Enter` / `Space` keypresses via `onKeyDown`, with `role="button"` and `tabIndex={0}`.
- **`aria-hidden` on decorative elements**: All purely visual elements (barcodes, scanlines, floating geometry, ripples) are marked `aria-hidden="true"`.
- **`aria-label` on social icon links**: GitHub and LinkedIn SVG icons in `CharacterCard` now have descriptive `aria-label` attributes.

### Removed
- **Duplicate `@keyframes`**: `VaultCard.jsx` previously defined `unroll` and `popIn` animations twice — both duplicate blocks deleted.

---

## [2026-05-04] — Contact Section & UX Declutter



### Added
- **Tactile Sound System**: Implemented a low-latency Web Audio API engine in `useSound.js` providing synthesized blips, clicks, and typing feedback.
- **Global Sound Control**: Added a mute/unmute toggle button in the main header for global audio management.
- **Brutalist Cursor 2.0**: Added a square "brutalist" ripple effect on click and theme-aware crosshair styling.
- **Interactive Workspace (V1)**: Implemented `Draggable` component for movable desktop-style UI elements (later removed for UX clarity).

### Changed
- **UI Decluttering**: Removed drag-and-drop workspace mechanics in favor of a clean, stable page flow to reduce visual clutter.
- **Layout Refactor**: Transitioned Projects section from a floating staggered layout to a responsive, structured 2-column grid.
- **Navigation Refined**: Centered all section contents and ensured responsive stability across all screen sizes.
- **Theme Standardization**: Unified all components under the "Classic Brutalist" (Mellow Yellow) theme for a cohesive brand identity.

### Removed
- **Theme Switching**: Removed the theme-cycling system (Cyber/Industrial) and the 'P' key listener to maintain a focused visual aesthetic.
- **Draggable Logic**: Deleted `Draggable.jsx` and removed its wrappers from all core sections (About, Skills, Projects, Contact).
- **Placeholder Cleanup**: Replaced all remaining lorem-ipsum and template text in the About section with real biographical data.


## [2026-05-03]
### Added
- Initiated project changelog to track all future modifications, additions, and updates.
- Proposed 4 new design concepts (Terminal, Arcade Accordion, Mech HUD, Angled Data-Shard) to replace the existing Skills Section.
- Built interactive mockups for the `Terminal Command Interface` (`SkillsTerminal.jsx`) and the `Mech HUD` (`SkillsMechHUD.jsx`) and rendered them side-by-side in `App.jsx` for visual comparison.

### Changed
- Replaced the `Mech HUD` concept with the `Arcade Accordion` (`SkillsArcadeAccordion.jsx`) and `Data Shard` (`SkillsDataShard.jsx`) concepts in `App.jsx` based on user feedback.
- Pivoted from Dark Mode "Funky Terminal" to a **Neo-Brutalist Light Theme** based on user feedback to escape the overused dark theme trends.
- Revamped `SkillsTerminal.jsx` into a high-contrast "Data Dossier" featuring stark white backgrounds, heavy 4px pitch-black borders, solid drop shadows (`#000`), and blazing neon accent colors.

### Removed
- Deleted unused component files (`SkillsSection.jsx`, `SkillsMechHUD.jsx`, `SkillsArcadeAccordion.jsx`, `SkillsDataShard.jsx`) to clean up the codebase.
