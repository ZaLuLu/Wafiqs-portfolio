import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/skills';

// SVG Paperclip
const PaperclipSVG = () => (
  <svg
    style={{ position: 'absolute', top: '-18px', right: '48px', width: '32px', height: '60px', zIndex: 30, opacity: 0.9 }}
    viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 40V12C12 8.686 9.314 6 6 6C2.686 6 0 8.686 0 12V36C0 41.523 4.477 46 10 46C15.523 46 20 41.523 20 36V18C20 14.686 17.314 12 14 12C10.686 12 8 14.686 8 18V36"
      stroke="#5A677D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

// Category icons
const CATEGORY_ICONS = {
  FRONTEND: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  BACKEND: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  'SOFT SKILLS': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

export default function SkillsSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const animContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.06 } }
  };

  const animCard = {
    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 50, damping: 20 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={animContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full min-h-full flex flex-col py-10 px-6 md:px-14 select-none relative overflow-hidden"
      style={{ color: 'var(--ivory-warm)', backgroundColor: 'var(--midnight-deep)' }}
    >
      {/* Background Watermark */}
      <div style={{
        position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '14vw',
        fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.007)',
        pointerEvents: 'none', userSelect: 'none', zIndex: 0, lineHeight: 0.8, fontWeight: 900,
      }}>MATRIX</div>

      {/* Scanner */}
      <div
        className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--gold-ochre-vivid)] to-transparent opacity-10 z-10 pointer-events-none"
        style={{ animation: 'tactical-scan 8s cubic-bezier(0.4,0,0.2,1) infinite' }}
      />

      {/* ── SECTION HEADER ── */}
      <div className="spread-header">
        <div className="flex items-baseline gap-4">
          <span className="spread-header-numeral">[ 02 ]</span>
          <div>
            <div className="spread-header-title">Capability Matrix</div>
            <div className="spread-header-subtitle">Technical Systems & Stack Modules</div>
          </div>
        </div>
        <span className="spread-header-badge hidden sm:block">RESTRICTED // CAPABILITIES</span>
      </div>

      {/* ── BINDER FRAME ── */}
      <div
        className="relative overflow-hidden flex-1 flex flex-col rounded-[6px] z-10"
        style={{ border: '1px solid var(--border-subtle)', background: 'rgba(20,22,31,0.25)', backdropFilter: 'blur(6px)', padding: '16px' }}
      >
        <PaperclipSVG />

        {/* Paper sheet */}
        <div
          className="paper-sheet flex-1 p-6 md:p-8 flex flex-col overflow-y-auto"
          style={{ background: 'var(--paper-primary)', color: 'var(--ink-dark)' }}
        >
          {/* Paper header */}
          <div className="relative mb-6 pb-5 border-b border-stone-300">
            <div className="flex justify-between items-center mb-4">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#78716c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Operative Field Capabilities · Ref: WN-02
              </div>
              <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded border"
                style={{ background: 'rgba(155,56,56,0.08)', borderColor: 'var(--restricted-red-vivid)', color: 'var(--restricted-red-vivid)' }}>
                AUTHENTICATED
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2
                  className="font-display font-black italic uppercase"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 0.9, letterSpacing: '-0.02em', color: 'var(--ink-dark)' }}
                >
                  Capability Assets Matrix
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: '#78716c', marginTop: '8px' }}>
                  All modules verified — full operational status authorized.
                </p>
              </div>
              <div style={{ borderRight: '3px double var(--restricted-red-vivid)', paddingRight: '16px', maxWidth: '300px', textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--restricted-red-vivid)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block' }}>
                  Stability Classification
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: 'var(--text-base)', color: '#78716c', marginTop: '4px', lineHeight: 1.5 }}>
                  Internship-grade, production-ready deployment standards.
                </p>
              </div>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
            {skills.map((category, catIdx) => (
              <motion.div
                key={category.category}
                variants={animCard}
                className="flex flex-col gap-4 p-5 rounded-[4px] relative hover:shadow-lg transition-shadow duration-300"
                style={{
                  border: '1px solid rgba(42,42,42,0.09)',
                  background: 'var(--paper-soft)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  color: 'var(--ink-dark)',
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-stone-400/35" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-stone-400/35" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-stone-400/35" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-stone-400/35" />

                {/* Category header */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-300">
                  <div className="flex items-center gap-2.5">
                    <span style={{ color: 'var(--restricted-red-vivid)', background: 'rgba(184,64,64,0.08)', border: '1px solid rgba(184,64,64,0.2)', borderRadius: '4px', padding: '4px 8px', display: 'flex', alignItems: 'center' }}>
                      {CATEGORY_ICONS[category.sidebar] || CATEGORY_ICONS['SOFT SKILLS']}
                    </span>
                    <span
                      className="font-display italic font-bold uppercase"
                      style={{ fontSize: 'var(--text-lg)', color: '#1c1c1d', letterSpacing: '0.02em' }}
                    >
                      {category.sidebar}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: '#a8a29e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    AUTH-0{catIdx + 1}
                  </span>
                </div>

                {/* Skill items */}
                <div className="flex flex-col gap-4 flex-1 justify-center">
                  {category.items.map((item, itemIdx) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-baseline gap-2 mb-2">
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 600, color: '#1c1c1d' }}>
                          {item.name}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--restricted-red-vivid)', fontWeight: 700, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                          {item.level}/10
                        </span>
                      </div>

                      {/* CSS bar blocks — replaces unreliable ■ character */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            style={{
                              flex: 1, height: '7px', borderRadius: '2px',
                              background: i < item.level ? 'var(--restricted-red-vivid)' : 'rgba(0,0,0,0.09)',
                              transformOrigin: 'left',
                              animation: inView
                                ? `bar-fill 0.4s cubic-bezier(0.16,1,0.3,1) ${(catIdx * 200) + (itemIdx * 80) + (i * 35)}ms both`
                                : 'none',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
