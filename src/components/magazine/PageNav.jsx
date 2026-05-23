import React from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function PageNav({ onPrev, onNext, current, total }) {
  // Translate react-pageflip page indexes into double-spread units
  // total = 10 pages. If current is 0, it's cover (spread 1).
  // If current is 1 or 2, it's spread 2.
  // If current is 3 or 4, it's spread 3, etc.
  const currentSpread = current === 0 ? 1 : Math.floor((current - 1) / 2) + 2;
  const totalSpreads = Math.floor((total - 2) / 2) + 2; // Math.floor(8 / 2) + 2 = 6 spreads total

  return (
    <div className="page-nav select-none">
      
      {/* Prev button */}
      <motion.button
        className="nav-arrow nav-arrow--left"
        onClick={onPrev}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        disabled={current === 0}
        aria-label="Flip backward"
      >
        <ArrowLeft size={18} weight="bold" />
      </motion.button>

      {/* Counter */}
      <div className="nav-counter">
        <span className="nav-current">{String(currentSpread).padStart(2, '0')}</span>
        <span className="opacity-30 mx-1.5">/</span>
        <span>{String(totalSpreads).padStart(2, '0')}</span>
      </div>

      {/* Next button */}
      <motion.button
        className="nav-arrow nav-arrow--right"
        onClick={onNext}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        disabled={current >= total - 2}
        aria-label="Flip forward"
      >
        <ArrowRight size={18} weight="bold" />
      </motion.button>

    </div>
  );
}
