/**
 * ============================================================
 *  portfolio.js — THE SINGLE SOURCE OF TRUTH
 * ============================================================
 *
 *  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR PORTFOLIO.
 *  No JSX. No components. Just plain data.
 *
 *  HOW TO USE:
 *  ─────────────────────────────────────────────────────────
 *  1. Find the section you want to update (use Ctrl+F to search).
 *  2. Change the text between the quote marks " ".
 *  3. Save the file (Ctrl+S).
 *  4. The browser will hot-reload instantly — done!
 *
 *  RULES TO AVOID BREAKING THINGS:
 *  ─────────────────────────────────────────────────────────
 *  ✅ DO:   Change values between quotes → "Your New Text"
 *  ✅ DO:   Add/remove items in an array [ ] by copying an existing item
 *  ✅ DO:   Change numbers like percentage: 90 → percentage: 95
 *
 *  ❌ DON'T: Remove commas between items
 *  ❌ DON'T: Delete { curly braces } or [ square brackets ]
 *  ❌ DON'T: Change the property names (the words before the colon)
 *            e.g. don't change "label:" to "name:" — that will break things
 *
 *  QUICK REFERENCE — what lives where:
 *  ─────────────────────────────────────────────────────────
 *  IDENTITY   → your name, alias, role, tagline, quote
 *  SOCIALS    → GitHub, LinkedIn, Twitter/X URLs
 *  CONTACT    → email, displayed contact cards
 *  HERO       → marquee text shown on the landing banner
 *  ABOUT      → bio paragraph, alias story, current goals
 *  SKILLS     → equipped skills badges, passive trait badges
 *  SKILL_BARS → the animated progress bar categories
 *  PROJECTS   → project vault cards
 * ============================================================
 */


// ─────────────────────────────────────────────────────────────
//  IDENTITY — your core personal info, used in multiple places
// ─────────────────────────────────────────────────────────────
export const IDENTITY = {
  /** Your real full name (shown in Hero h1 and CharacterCard) */
  fullName: 'Wafiq Nawaz',

  /** Your online handle / alias */
  alias: 'Zalulu',

  /** Short badge label on the CharacterCard (e.g. "CSE STUDENT", "FREELANCER") */
  classLabel: 'CSE STUDENT',

  /** Badge stamp shown top-right of CharacterCard (e.g. "PROTOTYPE", "FINAL BOSS") */
  statusBadge: 'PROTOTYPE',

  /**
   * Your role — shown below your name in the Hero section.
   */
  role: 'cybersecurity student & developer',

  /**
   * Short punchy tagline — shown in the white box below your role.
   */
  tagline: '3 projects deployed · React · Python · FastAPI · open to 2026 internships',

  /**
   * Quote shown on the yellow card in the CharacterCard portrait area.
   */
  quote: '"Evolving through time, discipline, and relentless consistency."',

  /**
   * The serial number shown at the bottom of the CharacterCard.
   */
  serialNumber: 'ZN-001-DEV',

  /** Location — shown in About section */
  location: 'Bengaluru, India',

  /** Current status — shown in About section */
  status: 'CSE Student · Open to Work · Internship Hunting',
};


// ─────────────────────────────────────────────────────────────
//  SOCIALS — all external profile links in one place
// ─────────────────────────────────────────────────────────────
export const SOCIALS = {
  /** Your full GitHub profile URL */
  github: 'https://github.com/ZaLuLu',

  /** Your full LinkedIn profile URL — set to '' to hide */
  linkedin: '',

  /** Your Twitter/X profile URL — set to '' to hide */
  twitter: '',

  /** Your displayed Twitter/X handle */
  twitterHandle: '',
};


// ─────────────────────────────────────────────────────────────
//  CONTACT — email + the 3 contact keycards
// ─────────────────────────────────────────────────────────────

/**
 * Your email — split into two parts to deter scraper bots.
 * The app joins them as: EMAIL_USER + "@" + EMAIL_DOMAIN
 */
export const EMAIL_USER   = 'wafiqnawaz';
export const EMAIL_DOMAIN = 'outlook.com';

/**
 * The 3 contact keycards shown in the Contact section.
 * Each card needs:
 *   id     — unique key (keep lowercase, no spaces)
 *   label  — the big display text on the card
 *   value  — the smaller detail text (e.g. the actual email or URL)
 *   color  — accent bar color (use a CSS variable from the list below)
 *   type   — tiny badge label (MSG, SRC, X, etc.)
 *   kind   — 'copy' copies the value to clipboard, 'link' opens a URL
 *   url    — only needed when kind is 'link'
 *
 * Available color variables:
 *   'var(--color-neon-pink)'
 *   'var(--color-neon-blue)'
 *   'var(--color-neon-yellow)'
 */
export const CONTACTS = [
  {
    id:    'email',
    label: 'EMAIL_COMMS',
    value: `${EMAIL_USER}@${EMAIL_DOMAIN}`,
    color: 'var(--color-neon-pink)',
    type:  'MSG',
    kind:  'copy',
  },
  {
    id:    'github',
    label: 'GIT_REPOSITORY',
    value: 'github.com/ZaLuLu',
    color: 'var(--color-neon-blue)',
    type:  'SRC',
    kind:  'link',
    url:   SOCIALS.github,
  },
  {
    id:    'resume',
    label: 'RESUME_DOWNLOAD',
    value: 'Wafiq_Nawaz_Resume.pdf',
    color: 'var(--color-neon-yellow)',
    type:  'PDF',
    kind:  'download',
    url:   '/resume.pdf',
  },
];


// ─────────────────────────────────────────────────────────────
//  HERO — the landing section content
// ─────────────────────────────────────────────────────────────
export const HERO = {
  /**
   * The scrolling status marquee text.
   * Keep it in the [ TAG: VALUE ] format for aesthetics.
   * The text loops automatically — no need to repeat it.
   */
  marqueeText: '[ SYS_ID: PORTFOLIO ] [ UPTIME: 99.9% ] [ STATUS: ONLINE ] [ VERSION: 2.0 ]',
};


// ─────────────────────────────────────────────────────────────
//  ABOUT — the player dossier section
// ─────────────────────────────────────────────────────────────
export const ABOUT = {
  bio: 'I\'m a Computer Science student and security enthusiast based in Bengaluru, India. I build full-stack web applications and security tools, merging brutalist aesthetics with modern engineering. Currently open to internships and entry-level roles in development or cybersecurity.',

  aliasOrigin: 'ZaLuLu started as a low-level encryption handle in the early days of forum-based CTFs. It has since evolved into a personal brand representing the intersection of chaos (Zal) and logic (Lu).',

  currentQuests: [
    'CSE Student · Bengaluru, India',
    'Open to Work · Internship Hunting',
    'Building projects in web dev & security',
  ],

  equippedSkills: [
    'React',
    'JavaScript',
    'Python',
    'FastAPI',
    'TailwindCSS',
    'Node.js',
    'PostgreSQL',
    'Git / GitHub',
  ],

  passiveTraits: [
    'Gaming',
    'Anime',
    'Cyberpunk Lore',
    'Reading',
    'CTF Challenges',
  ],
};


// ─────────────────────────────────────────────────────────────
//  SKILL BARS — the animated progress bar section
// ─────────────────────────────────────────────────────────────
/**
 * Three skill categories: 'technical', 'soft', 'other'.
 * Don't rename the category keys — they are used internally.
 *
 * Each skill needs:
 *   label      — the displayed skill name
 *   percentage — a number from 0–100
 */
export const SKILL_CATEGORIES = {
  technical: {
    name: 'TECHNICAL',
    color: '#F4FF1E',   /* neon yellow */
    skills: [
      { label: 'React & Frontend',    percentage: 85 },
      { label: 'JavaScript / ES6+',   percentage: 80 },
      { label: 'Python',              percentage: 75 },
      { label: 'FastAPI / Backend',   percentage: 70 },
      { label: 'PostgreSQL / SQL',    percentage: 65 },
      { label: 'TailwindCSS',         percentage: 80 },
    ],
  },
  soft: {
    name: 'SOFT SKILLS',
    color: '#FF1EC7',   /* hot pink */
    skills: [
      { label: 'Problem Solving', percentage: 90 },
      { label: 'Communication',   percentage: 80 },
      { label: 'Adaptability',    percentage: 85 },
      { label: 'Self-Learning',   percentage: 90 },
    ],
  },
  other: {
    name: 'OTHER SKILLS',
    color: '#00E5FF',   /* cyan */
    skills: [
      { label: 'Git / GitHub',      percentage: 85 },
      { label: 'Linux / CLI',       percentage: 70 },
      { label: 'UI/UX Design',      percentage: 70 },
      { label: 'Responsive Design', percentage: 85 },
    ],
  },
};


// ─────────────────────────────────────────────────────────────
//  PROJECTS — the vault cards
// ─────────────────────────────────────────────────────────────
/**
 * Each project needs:
 *   id    — unique number (just increment for new ones)
 *   title — displayed in ALL CAPS on the card
 *   type  — badge label (TOOL, WEB APP, SYSTEM, RESEARCH, etc.)
 *   tech  — comma-separated tech stack string
 *   year  — 4-digit year string
 *   url   — link for the "EXECUTE PAYLOAD" button (GitHub repo, live site, etc.)
 *   desc  — 1–2 sentence description
 *
 * TO ADD A PROJECT: copy one block from { to }, paste it after the last },
 * and give it the next id number.
 *
 * TO REMOVE A PROJECT: delete the entire block from { to } (including the comma).
 */
export const PROJECTS = [
  {
    id:    1,
    title: 'RETAILMIND',
    type:  'WEB APP · LIVE',
    tech:  'REACT, FASTAPI, POSTGRESQL, GEMINI AI',
    year:  '2026',
    url:   'https://retailmind-zalulus-projects.vercel.app/',
    desc:  'SMB owners waste hours manually analysing sales data. RetailMind ingests raw CSV exports and surfaces demand spikes, dead stock, and margin erosion in seconds — with a Gemini AI headline summarising the most critical insight. Full JWT auth, async SQLAlchemy, Sentry monitoring.',
  },
  {
    id:    2,
    title: 'DOCUMIND',
    type:  'WEB APP',
    tech:  'REACT, FASTAPI, POSTGRESQL, GEMINI AI, OCR',
    year:  '2026',
    url:   'https://github.com/ZaLuLu',
    desc:  'Manual expense tracking is tedious and error-prone. DocuMind uses Gemini OCR to extract vendor, amount, date, and category from uploaded receipts automatically. Includes anomaly detection (2× historical average), monthly budget tracking, and a context-aware AI financial advisor.',
  },
  {
    id:    3,
    title: 'ZALULU PORTFOLIO',
    type:  'WEB APP · LIVE',
    tech:  'REACT, TAILWINDCSS, VITE',
    year:  '2026',
    url:   'https://wafiqnawaz.vercel.app',
    desc:  'Built this portfolio as a design challenge — neo-brutalist game aesthetic with custom cursor, Web Audio API sound effects, animated ASCII skill bars, and a vault-style project archive. Single data-file architecture means all content updates in one place.',
  },
  {
    id:    4,
    title: 'MORE COMING SOON',
    type:  'IN PROGRESS',
    tech:  'TBD',
    year:  '2026',
    url:   'https://github.com/ZaLuLu',
    desc:  'Currently building new projects in web development and cybersecurity. Follow on GitHub for updates — next up: a security-focused tool and an ML-integrated web app.',
  },
];
