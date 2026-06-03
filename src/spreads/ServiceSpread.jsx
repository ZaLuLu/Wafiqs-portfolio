import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const LOG_ENTRIES = [
  {
    id: '01',
    date: '2024.09',
    title: 'OPERATIVE ENROLLMENT',
    subtitle: 'S-VYASA University, Bengaluru',
    category: 'Academic Log',
    classification: 'DE-CLASSIFIED',
    description: 'Enrolled in Computer Science undergraduate program. Initiated core technical training, security algorithms research, and systems analysis directives.',
    achievements: [
      'Top 5% of enrollment tier in logical architecture assays',
      'Completed network routing and cryptographic baselines',
      'Established defensive programming practices',
    ]
  },
  {
    id: '02',
    date: '2025.06',
    title: 'SECURE INFRASTRUCTURE BUILD',
    subtitle: 'Cryptographic Auth Systems',
    category: 'Development Log',
    classification: 'RESTRICTED',
    description: 'Began engineering secure backend dispatch networks. Authored FastAPI modules, custom cryptographically salted hashing schemes, and structured JWT pipeline checkpoints.',
    achievements: [
      'Designed OWASP Top-10 mitigation gateways',
      'Implemented performance-tuned database indexing profiles',
      'Established automated testing suites for backend APIs',
    ]
  },
  {
    id: '03',
    date: '2026.02',
    title: 'RETAILMIND DEPLOYMENT',
    subtitle: 'FastAPI / Gemini AI Forecaster',
    category: 'Operational Deploy',
    classification: 'ACTIVE',
    description: 'Successfully deployed the RetailMind demand forecasting engine. Integrated advanced Gemini AI model endpoints with robust async background queues and PostgreSQL analytical arrays.',
    achievements: [
      'Automated batch CSV extraction and secure processing pipelines',
      'Built a low-latency React analytics dashboard',
      'Optimized pipeline queries for sub-second executive reviews',
    ]
  },
];

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

// Check icon for achievements
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function ServiceSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [activeIdx, setActiveIdx] = useState(0);

  const activeEntry = LOG_ENTRIES[activeIdx];

  const animContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.10, delayChildren: 0.06 } }
  };

  const animItemLeft = {
    hidden: { opacity: 0, x: -24, filter: 'blur(6px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 55, damping: 22 } }
  };

  const animItemRight = {
    hidden: { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 48, damping: 20 } }
  };

  const achievementAnim = {
    hidden: { opacity: 0, x: -12 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, type: 'spring', stiffness: 60, damping: 16 } })
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
      }}>LOGISTICS</div>

      {/* Scanner */}
      <div
        className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--gold-ochre-vivid)] to-transparent opacity-10 z-10 pointer-events-none"
        style={{ animation: 'tactical-scan 8s cubic-bezier(0.4,0,0.2,1) infinite' }}
      />

      {/* ── SECTION HEADER ── */}
      <div className="spread-header">
        <div className="flex items-baseline gap-4">
          <span className="spread-header-numeral">[ 04 ]</span>
          <div>
            <div className="spread-header-title">Service Record</div>
            <div className="spread-header-subtitle">Chronological Logistics · Operative Milestones</div>
          </div>
        </div>
        <span className="spread-header-badge hidden sm:block">RESTRICTED // LOGISTICS</span>
      </div>

      {/* ── BINDER FRAME ── */}
      <div
        className="relative overflow-hidden flex-1 flex flex-col rounded-[6px] z-10"
        style={{ border: '1px solid var(--border-subtle)', background: 'rgba(20,22,31,0.25)', backdropFilter: 'blur(6px)', padding: '16px' }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-stretch w-full h-full z-10 relative pb-6 md:pb-0">

          {/* LEFT: Timeline entries */}
          <motion.div
            variants={animItemLeft}
            className="w-full md:w-[34%] flex flex-col gap-4 flex-shrink-0 relative"
            style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '20px' }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ivory-dim)',
              paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)',
            }}>
              Timeline
            </div>

            {/* Vertical timeline line */}
            <div className="absolute left-[28px] top-[52px]" style={{ width: '1px', background: 'rgba(255,255,255,0.07)', bottom: '28px' }} />

            <div className="flex flex-col gap-3">
              {LOG_ENTRIES.map((entry, idx) => (
                <button
                  key={entry.id}
                  onClick={() => setActiveIdx(idx)}
                  className="text-left cursor-pointer flex gap-4 items-start relative group transition-all duration-300"
                  style={{
                    padding: '14px 16px 14px 40px',
                    borderRadius: '4px',
                    border: `1px solid ${idx === activeIdx ? 'rgba(184,64,64,0.4)' : 'rgba(194,159,93,0.08)'}`,
                    background: idx === activeIdx ? 'rgba(184,64,64,0.05)' : 'rgba(29,32,43,0.45)',
                    position: 'relative',
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)',
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: idx === activeIdx ? 'var(--restricted-red-vivid)' : 'var(--smoked-indigo)',
                    border: `2px solid ${idx === activeIdx ? 'var(--restricted-red-vivid)' : 'rgba(255,255,255,0.15)'}`,
                    zIndex: 2,
                  }} />

                  <div style={{ flex: 1 }}>
                    {/* Date badge */}
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700,
                      color: idx === activeIdx ? 'var(--restricted-red-vivid)' : 'var(--gold-ochre-vivid)',
                      marginBottom: '4px', letterSpacing: '0.06em',
                    }}>
                      {entry.date}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700,
                      fontSize: 'var(--text-base)', textTransform: 'uppercase', letterSpacing: '0.04em',
                      color: idx === activeIdx ? 'var(--restricted-red-vivid)' : 'var(--ivory-warm)',
                      lineHeight: 1.2,
                    }}>
                      {entry.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--ivory-dim)', marginTop: '3px' }}>
                      {entry.subtitle}
                    </div>
                  </div>

                  {/* Active indicator dot */}
                  {idx === activeIdx && (
                    <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', width: '7px', height: '7px', borderRadius: '50%', background: 'var(--restricted-red-vivid)' }} />
                  )}
                </button>
              ))}
            </div>

            {/* Classification block */}
            <div className="mt-auto hidden md:block"
              style={{ border: '1px dashed rgba(184,64,64,0.28)', borderRadius: '4px', padding: '14px 16px', background: 'rgba(184,64,64,0.02)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--restricted-red-vivid)', marginBottom: '8px' }}>
                Record Classification: De-Restricted
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: 'var(--ivory-dim)', fontSize: 'var(--text-base)', lineHeight: 1.55 }}>
                Subject data audited at Bengaluru. Operational compliance confirmed.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Detail paper sheet */}
          <motion.div variants={animItemRight} className="flex-grow flex flex-col relative">
            <PaperclipSVG />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeEntry.id}
                initial={{ opacity: 0, x: -10, filter: 'blur(5px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 10, filter: 'blur(5px)' }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="paper-sheet flex-1 p-6 md:p-8 flex flex-col justify-between"
                style={{ background: 'var(--paper-primary)', color: 'var(--ink-dark)', zIndex: 10 }}
              >
                <div>
                  {/* Header stamps */}
                  <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-4">
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#78716c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Operative Service Record · Log {activeEntry.id}
                    </div>
                    <span className="font-mono font-bold rounded px-2.5 py-1 text-[11px]"
                      style={{ background: 'rgba(184,64,64,0.08)', border: '1px solid var(--restricted-red-vivid)', color: 'var(--restricted-red-vivid)' }}>
                      {activeEntry.classification}
                    </span>
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#78716c', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' }}>
                    {activeEntry.category}
                  </div>

                  <h2
                    className="font-display font-black italic uppercase leading-tight"
                    style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--ink-dark)', marginBottom: '6px' }}
                  >
                    {activeEntry.title}
                  </h2>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#78716c', marginBottom: '20px' }}>
                    {activeEntry.subtitle} · {activeEntry.date}
                  </div>

                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.65, color: '#44403c', borderLeft: '3px solid rgba(120,113,108,0.4)', paddingLeft: '16px', marginBottom: '24px' }}>
                    {activeEntry.description}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700, color: '#57534e', textTransform: 'uppercase', letterSpacing: '0.10em', marginBottom: '14px', paddingTop: '16px', borderTop: '1px solid rgb(214,211,209)' }}>
                    Field Audit Index
                  </div>
                  <ul className="flex flex-col gap-3">
                    {activeEntry.achievements.map((ach, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={achievementAnim}
                        initial="hidden"
                        animate="visible"
                        className="flex gap-3 items-start"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: '#44403c', lineHeight: 1.55 }}
                      >
                        <span style={{ color: 'var(--restricted-red-vivid)', marginTop: '2px', flexShrink: 0 }}>
                          <CheckIcon />
                        </span>
                        {ach}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
