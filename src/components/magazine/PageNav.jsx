import React from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function PageNav({ onPrev, onNext, current, total }) {
  const currentPageNum = current + 1;

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
        <span className="nav-current">{String(currentPageNum).padStart(2, '0')}</span>
        <span className="opacity-30 mx-1.5">/</span>
        <span>{String(total).padStart(2, '0')}</span>
      </div>

      {/* Next button */}
      <motion.button
        className="nav-arrow nav-arrow--right"
        onClick={onNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={current === total - 1}
        aria-label="Flip forward"
      >
        <ArrowRight size={16} weight="bold" />
      </motion.button>

    </div>
  );
}
