// src/utils/motion.js
export const EASE = [0.16, 1, 0.3, 1];       // Premium spring-out easing
export const EASE_IN = [0.4, 0, 1, 1];        // For exits
export const EASE_STANDARD = [0.25, 0.46, 0.45, 0.94];  // For hovers

export const DUR = {
  fast:   0.18,
  base:   0.35,
  slow:   0.65,
  xslow:  0.9,
};

// Standard fade-up (used on almost everything)
export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: DUR.slow, ease: EASE } }
};

// Stagger container
export const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay, delayChildren: 0.1 } }
});

// Slide from left
export const slideLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR.slow, ease: EASE } }
};

// Scale in (for the photo, skill boxes)
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: DUR.xslow, ease: EASE } }
};
