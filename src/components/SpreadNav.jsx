import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SpreadNav — vertical manila folder tab indicator for sections.
 * Fixed on the right edge of the viewport.
 *
 * Props:
 *   sections  — array of { id, label, title, code } (Dossier, Matrix, Projects, Logistics, Relay)
 *   activeIdx — 0-based index within the sections array (-1 means cover is active)
 *   onDotClick(i) — called with 0-based section index
 *   visible   — whether to show (false when cover is active)
 */
export default function SpreadNav({ sections, activeIdx, onDotClick, visible }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Dossier index tabs"
          style={{
            position: 'fixed',
            right: 0,
            top: '55%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
            zIndex: 100,
          }}
        >
          {sections.map((section, i) => {
            const isActive = i === activeIdx;
            const isHovered = i === hoveredIdx;
            const isOpen = isActive || isHovered;

            // Generate physical tab offsets to look slightly staggered
            const staggerOffset = i * 4; // slight cascade visual

            return (
              <button
                key={section.id}
                onClick={() => onDotClick(i)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                aria-label={`Open Dossier Section: ${section.label}`}
                title={section.title}
                className="relative flex items-center justify-start cursor-pointer select-none transition-all duration-300 group"
                style={{
                  height: '38px',
                  // Slide out when active or hovered
                  width: isOpen ? '150px' : '48px',
                  borderRadius: '6px 0 0 6px',
                  background: isActive ? 'var(--paper-soft)' : 'var(--smoked-indigo)',
                  border: isActive 
                    ? '1.5px solid var(--restricted-red)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRight: 'none',
                  color: isActive ? 'var(--ink-dark)' : 'var(--ivory-soft)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: isActive ? 700 : 500,
                  boxShadow: isActive 
                    ? '-6px 4px 16px rgba(0, 0, 0, 0.4)' 
                    : '-2px 2px 8px rgba(0, 0, 0, 0.25)',
                  outline: 'none',
                  padding: '0 0 0 12px',
                  transform: `translateX(${isOpen ? '0px' : '8px'})`,
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  marginTop: `${staggerOffset}px`,
                }}
              >
                {/* Active Restricted Red Left Accent Strip */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: 'var(--restricted-red)',
                      borderRadius: '4px 0 0 4px',
                    }}
                  />
                )}

                <div className="flex items-center gap-2 overflow-hidden w-full">
                  {/* Stamped Number Code */}
                  <span 
                    style={{ 
                      color: isActive ? 'var(--restricted-red)' : 'var(--ivory-dim)',
                      fontWeight: 700,
                      flexShrink: 0
                    }}
                  >
                    0{i + 1}
                  </span>

                  {/* Staggered folder label */}
                  {isOpen && (
                    <span 
                      className="uppercase tracking-wider truncate"
                      style={{
                        animation: 'fadeIn 0.2s ease-out forwards',
                        color: isActive ? 'var(--ink-dark)' : 'var(--ivory-warm)'
                      }}
                    >
                      {section.label}
                    </span>
                  )}
                </div>

                {/* Subtle paper tab diagonal outline */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '-1px',
                    right: '-1px',
                    height: '2px',
                    background: isActive ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.06)',
                    pointerEvents: 'none'
                  }}
                />
              </button>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
