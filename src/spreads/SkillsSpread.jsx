import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/skills';

// SVG Paperclip asset to pin document page to binder
const PaperclipSVG = () => (
  <svg
    style={{
      position: 'absolute',
      top: '-18px',
      right: '48px',
      width: '32px',
      height: '60px',
      zIndex: 30,
      opacity: 0.9,
    }}
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 40V12C12 8.686 9.314 6 6 6C2.686 6 0 8.686 0 12V36C0 41.523 4.477 46 10 46C15.523 46 20 41.523 20 36V18C20 14.686 17.314 12 14 12C10.686 12 8 14.686 8 18V36"
      stroke="#5A677D"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SkillsSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const animContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.06 }
    }
  };

  const animHeader = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: 'spring', stiffness: 58, damping: 18 }
    }
  };

  const animCard = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: 'spring', stiffness: 48, damping: 18 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={animContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full min-h-full flex flex-col py-12 px-6 md:px-14 select-none relative overflow-hidden"
      style={{ color: 'var(--ivory-warm)', backgroundColor: 'var(--midnight-deep)' }}
    >
      {/* Background Watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          fontSize: '14vw',
          fontFamily: 'var(--font-display)',
          color: 'rgba(255, 255, 255, 0.007)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          lineHeight: 0.8,
          fontWeight: 900,
        }}
      >
        MATRIX
      </div>

      {/* Microfilm Scanner laser sweep */}
      <div
        className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--gold-ochre)] to-transparent opacity-10 z-10 pointer-events-none"
        style={{
          animation: 'tactical-scan 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        }}
      />

      {/* ── SECTION HEADER ── */}
      <div
        className="flex justify-between items-end pb-4 w-full mb-5 relative z-10"
        style={{ borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="flex items-baseline gap-4">
          <span
            className="font-display italic font-black"
            style={{ fontSize: '2rem', lineHeight: 1, color: 'var(--restricted-red)' }}
          >
            II
          </span>
          <div className="font-sans">
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ivory-warm)' }}>
              Capability Matrix
            </div>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: '2px' }}>
              TECHNICAL SYSTEMS & STACK MODULES
            </div>
          </div>
        </div>
        <span
          className="font-sans hidden sm:block"
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--restricted-red)', opacity: 0.8 }}
        >
          RESTRICTED // CAPABILITIES
        </span>
      </div>

      {/* ── UNIFIED TACTICAL BINDER CONTAINER FRAME ── */}
      <div
        className="relative overflow-hidden flex-1 flex flex-col rounded-[6px] z-10"
        style={{
          border: '1px solid var(--border-subtle)',
          background: 'rgba(20, 22, 31, 0.25)',
          backdropFilter: 'blur(6px)',
          padding: '16px',
        }}
      >
        {/* SVG paperclip pinning sheet to folder board */}
        <PaperclipSVG />

        {/* The physical printed warm sand document sheet */}
        <div 
          className="paper-sheet flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
          style={{
            background: 'var(--paper-primary)',
            color: 'var(--ink-dark)',
          }}
        >
          {/* HEADER BLOCK IN LEDGER SHEET */}
          <motion.div
            variants={animHeader}
            className="relative mb-6 pb-5 border-b border-stone-300"
          >
            <div className="flex justify-between items-center mb-4 text-stone-600 font-mono text-xs">
              <div className="tracking-wider uppercase">
                OPERATIVE FIELD CAPABILITIES LEDGER // REF: WN-02
              </div>
              <div className="font-bold text-[var(--restricted-red)] border border-[var(--restricted-red)] px-2 py-0.5 rounded uppercase">
                AUTHENTICATED MATRIX
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center justify-between z-10 gap-4">
              <div>
                <h2
                  className="font-display italic font-black uppercase"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                    color: 'var(--ink-dark)',
                  }}
                >
                  Capability Assets Matrix
                </h2>

                <div className="font-mono text-xs text-stone-600 mt-2 font-bold tracking-wider uppercase">
                  TACTICAL SYSTEMS ACCESS AUTHORIZATIONS · GRANTED ACCESS TIERS
                </div>
              </div>

              {/* Overview text */}
              <div
                className="max-w-[340px] md:text-right flex-shrink-0"
                style={{
                  borderRight: '3px double var(--restricted-red)',
                  paddingRight: '16px',
                }}
              >
                <span
                  className="font-mono block"
                  style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--restricted-red)' }}
                >
                  STABILITY CLASSIFICATION
                </span>
                <p
                  className="font-sans italic text-xs text-stone-700 mt-1 leading-relaxed"
                >
                  All modules verified by internship logistics standards. Full operational status authorized for deployment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════ */}
          {/* SKILLS MATRIX CATALOGUE (Ivory Parchment Slips on Sand Paper) */}
          {/* ══════════════════════════════════════════════════════ */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-1 pb-4 md:pb-0 flex-1 overflow-y-auto"
          >
            {skills.map((category, catIdx) => (
              <motion.div
                key={category.category}
                variants={animCard}
                className="flex flex-col gap-5 p-5 rounded-[4px] relative"
                style={{
                  border: '1px solid rgba(42, 42, 42, 0.08)',
                  background: 'var(--paper-soft)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
                  color: 'var(--ink-dark)',
                }}
              >
                {/* Corner bracket styling */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-stone-400/40" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-stone-400/40" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-stone-400/40" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-stone-400/40" />

                {/* Category Header */}
                <div
                  className="flex items-center justify-between pb-3 border-b border-stone-300"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="font-mono text-[10px] font-bold rounded"
                      style={{
                        color: 'var(--restricted-red)',
                        background: 'rgba(155, 56, 56, 0.08)',
                        border: '1px solid rgba(155, 56, 56, 0.2)',
                        padding: '2px 6px',
                      }}
                    >
                      AUTH-0{catIdx + 1}
                    </span>
                    <span
                      className="font-display italic font-bold uppercase text-[15px] tracking-wide text-stone-900"
                    >
                      {category.sidebar}
                    </span>
                  </div>
                  <span
                    className="font-mono text-[9px] tracking-wider text-stone-500 uppercase font-bold"
                  >
                    SECURE MODULE
                  </span>
                </div>

                {/* Skill items */}
                <div className="flex flex-col gap-4 flex-1 justify-center">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <div className="flex justify-between items-baseline gap-2 font-mono text-[10px] text-stone-500">
                        <span className="font-sans text-sm text-stone-900 font-semibold">{item.name}</span>
                        <span className="text-[var(--restricted-red)] font-bold tracking-wider">
                          GRANTED [0{item.level}/10]
                        </span>
                      </div>

                      {/* Segmented Typewriter Ratings (Ink Stamped Squares) */}
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="flex gap-1">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <span
                              key={i}
                              style={{
                                color: i < item.level ? 'var(--restricted-red)' : 'rgba(0,0,0,0.08)',
                                fontSize: '13px',
                                lineHeight: 1,
                              }}
                            >
                              ■
                            </span>
                          ))}
                        </div>
                        <span className="text-[9px] text-stone-500 font-mono ml-auto uppercase font-bold tracking-wider">
                          LVL 0{item.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Intercept Log */}
      <div className="w-full mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-slate-500 pointer-events-none text-left z-10 relative">
        [DIAGNOSTIC REPORT // REF: WN-02]: Capability modules active. Cryptographic algorithms and asynchronous execution loops verified within nominal tolerances.
      </div>
    </motion.div>
  );
}
