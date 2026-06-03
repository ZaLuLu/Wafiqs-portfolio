import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SpreadNav — dual mode navigation:
 *  - Desktop: vertical manila folder tabs on right edge
 *  - Mobile: horizontal bottom bar
 *
 * Props:
 *   sections  — array of { id, label, title, code }
 *   activeIdx — 0-based index (-1 = cover)
 *   onDotClick(i) — 0-based section index
 *   visible   — show/hide
 */
export default function SpreadNav({ sections, activeIdx, onDotClick, visible }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── DESKTOP: Vertical folder tabs (right edge) ── */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Dossier index tabs"
            className="hidden md:flex"
            style={{
              position: 'fixed',
              right: 0,
              top: '55%',
              transform: 'translateY(-50%)',
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
              const staggerOffset = i * 4;

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
                    height: '42px',
                    width: isOpen ? '160px' : '52px',
                    borderRadius: '6px 0 0 6px',
                    background: isActive ? 'var(--paper-soft)' : 'var(--smoked-indigo)',
                    border: isActive
                      ? '1.5px solid var(--restricted-red-vivid)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRight: 'none',
                    color: isActive ? 'var(--ink-dark)' : 'var(--ivory-soft)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: isActive ? 700 : 500,
                    boxShadow: isActive
                      ? '-6px 4px 16px rgba(0, 0, 0, 0.4)'
                      : '-2px 2px 8px rgba(0, 0, 0, 0.25)',
                    outline: 'none',
                    padding: '0 0 0 14px',
                    transform: `translateX(${isOpen ? '0px' : '10px'})`,
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    marginTop: `${staggerOffset}px`,
                  }}
                >
                  {/* Active left red accent strip */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', left: 0, top: 0, bottom: 0,
                      width: '4px',
                      background: 'var(--restricted-red-vivid)',
                      borderRadius: '4px 0 0 4px',
                    }} />
                  )}

                  <div className="flex items-center gap-2.5 overflow-hidden w-full">
                    {/* Number */}
                    <span style={{
                      color: isActive ? 'var(--restricted-red-vivid)' : 'var(--ivory-dim)',
                      fontWeight: 700, flexShrink: 0
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Label — fade in when open */}
                    {isOpen && (
                      <span
                        className="uppercase tracking-wider truncate"
                        style={{
                          animation: 'fade-in 0.22s ease-out forwards',
                          color: isActive ? 'var(--ink-dark)' : 'var(--ivory-warm)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {section.label}
                      </span>
                    )}
                  </div>

                  {/* Top highlight stripe */}
                  <div style={{
                    position: 'absolute', top: '-1px', left: '-1px', right: '-1px', height: '2px',
                    background: isActive ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.05)',
                    pointerEvents: 'none',
                  }} />
                </button>
              );
            })}
          </motion.nav>

          {/* ── MOBILE: Horizontal bottom bar ── */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Dossier navigation"
            className="flex md:hidden"
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 100,
              background: 'rgba(13, 14, 17, 0.92)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 -8px 30px rgba(0,0,0,0.4)',
            }}
          >
            {sections.map((section, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={section.id}
                  onClick={() => onDotClick(i)}
                  aria-label={`Navigate to ${section.label}`}
                  className="flex flex-col items-center justify-center flex-1 py-3 gap-1 cursor-pointer select-none transition-all duration-250"
                  style={{ outline: 'none', border: 'none', background: 'transparent' }}
                >
                  {/* Active top line */}
                  <div style={{
                    height: '2.5px',
                    width: isActive ? '24px' : '6px',
                    borderRadius: '2px',
                    background: isActive ? 'var(--restricted-red-vivid)' : 'rgba(255,255,255,0.12)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    marginBottom: '4px',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    fontWeight: isActive ? 700 : 500, letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--ivory-warm)' : 'var(--ivory-dim)',
                    transition: 'color 0.25s',
                  }}>
                    {section.label}
                  </span>
                  {isActive && (
                    <div style={{
                      width: '3px', height: '3px', borderRadius: '50%',
                      background: 'var(--restricted-red-vivid)',
                      animation: 'glow-pulse 2s ease-in-out infinite',
                    }} />
                  )}
                </button>
              );
            })}
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
