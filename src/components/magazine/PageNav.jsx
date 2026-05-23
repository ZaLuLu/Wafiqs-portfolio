import React from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function PageNav({ onPrev, onNext, current, total }) {
  // Translate react-pageflip page indexes into double-spread units for 8 pages total
  // Index 0: Cover (Spread 1)
  // Index 1, 2: Contents & About (Spread 2)
  // Index 3, 4: Skills & Experience (Spread 3)
  // Index 5, 6: Projects (Spread 4)
  // Index 7: Contact Back Cover (Spread 5)
  const currentSpread = current === 0 
    ? 1 
    : current === total - 1 
      ? 5 
      : Math.floor((current - 1) / 2) + 2;
  
  const totalSpreads = 5;

  return (
    <div className="page-nav select-none">
      
      {/* Prev button */}
      <motion.button
        className="nav-arrow nav-arrow--left"
        onClick={onPrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={current === 0}
        aria-label="Flip backward"
      >
        <ArrowLeft size={16} weight="bold" />
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={current >= total - 2}
        aria-label="Flip forward"
      >
        <ArrowRight size={16} weight="bold" />
      </motion.button>

    </div>
  );
}
