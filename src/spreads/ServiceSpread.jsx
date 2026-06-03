import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const LOG_ENTRIES = [
  {
    id: '01',
    date: '2024.09',
    title: 'OPERATIVE ENROLLMENT',
    subtitle: 'S-VYASA University Bengaluru',
    category: 'ACADEMIC LOG',
    classification: 'DE-CLASSIFIED',
    description: 'Enrolled in Computer Science undergraduate program. Initiated core technical training, security algorithms research, and systems analysis directives.',
    achievements: [
      'Top 5% of enrollment tier in logical architecture assays',
      'Completed network routing and cryptographic baselines',
      'Established defensive programming practices'
    ]
  },
  {
    id: '02',
    date: '2025-06',
    title: 'SECURE INFRASTRUCTURE INITIALIZATION',
    subtitle: 'Cryptographic Auth Assays',
    category: 'DEVELOPMENT LOG',
    classification: 'RESTRICTED',
    description: 'Began engineering secure backend dispatch networks. Authored FastAPI modules, custom cryptographically salted hashing schemes, and structured JSON-Web-Token pipeline checkpoints.',
    achievements: [
      'Designed OWASP Top-10 mitigation gateways',
      'Implemented performance-tuned database indexing profiles',
      'Established automated testing suites for backend APIs'
    ]
  },
  {
    id: '03',
    date: '2026-02',
    title: 'RETAILMIND ENGINE DEPLOYMENT',
    subtitle: 'FastAPI / Gemini AI Forecaster',
    category: 'OPERATIONAL DEPLOY',
    classification: 'ACTIVE',
    description: 'Successfully deployed the RetailMind demand forecasting case file. Integrated advanced Gemini AI model endpoints with robust asynchronous background queues and PostgreSQL analytical ledger arrays.',
    achievements: [
      'Automated batch CSV extraction and secure processing lines',
      'Built a low-latency React analytics dashboard interface',
      'Optimized pipeline queries for sub-second executive reviews'
    ]
  }
];

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
      opacity: 0.95,
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
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 58, damping: 20 } }
  };

  const animItemRight = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 48, damping: 18 } }
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
      {/* Background Stamped Text Watermark */}
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
        LOGISTICS
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
        className="flex justify-between items-end pb-4 w-full mb-6 relative z-10"
        style={{ borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="flex items-baseline gap-4">
          <span
            className="font-display italic font-black"
            style={{ fontSize: '2rem', lineHeight: 1, color: 'var(--restricted-red)' }}
          >
            IV
          </span>
          <div className="font-sans">
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ivory-warm)' }}>
              Service Record
            </div>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: '2px' }}>
              CHRONOLOGICAL LOGISTICS · OPERATIVE MILESTONES
            </div>
          </div>
        </div>
        <span
          className="font-sans hidden sm:block"
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--restricted-red)', opacity: 0.8 }}
        >
          RESTRICTED ACCESS // LOGISTICS
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
        <div className="flex flex-col md:flex-row gap-8 items-stretch w-full h-full z-10 relative pb-6 md:pb-0">
          
          {/* LEFT: Dated Entries Log Track */}
          <motion.div
            variants={animItemLeft}
            className="w-full md:w-[34%] flex flex-col gap-4 flex-shrink-0"
            style={{
              borderRight: '1px solid rgba(255, 255, 255, 0.05)',
              paddingRight: '20px',
            }}
          >
            <div
              className="font-mono pb-2"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--ivory-dim)',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              LOG ENTRY TARGETS
            </div>

            <div className="flex flex-col gap-3">
              {LOG_ENTRIES.map((entry, idx) => (
                <button
                  key={entry.id}
                  onClick={() => setActiveIdx(idx)}
                  className="text-left transition-all duration-400 cursor-pointer flex gap-4 items-start relative group"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '4px',
                    border: `1px solid ${idx === activeIdx ? 'rgba(155, 56, 56, 0.45)' : 'rgba(194, 159, 93, 0.08)'}`,
                    background: idx === activeIdx ? 'rgba(155, 56, 56, 0.06)' : 'rgba(29, 32, 43, 0.45)',
                  }}
                >
                  <div className="font-mono pt-1 text-xs font-bold" style={{ color: idx === activeIdx ? 'var(--restricted-red)' : 'var(--ivory-dim)' }}>
                    [{entry.date}]
                  </div>
                  <div>
                    <div
                      className="font-display font-bold uppercase text-sm tracking-wide"
                      style={{ color: idx === activeIdx ? 'var(--restricted-red)' : 'var(--ivory-warm)' }}
                    >
                      {entry.title}
                    </div>
                    <div className="font-sans text-xs mt-1 text-slate-400">
                      {entry.subtitle}
                    </div>
                  </div>
                  {/* Subtle red indicator dot */}
                  {idx === activeIdx && (
                    <div
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--restricted-red)',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tactical stamp overlay */}
            <div
              className="mt-auto hidden md:block"
              style={{
                border: '1px dashed rgba(155, 56, 56, 0.3)',
                borderRadius: '4px',
                padding: '14px 16px',
                background: 'rgba(155, 56, 56, 0.02)',
              }}
            >
              <div
                className="font-mono block"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--restricted-red)', marginBottom: '6px' }}
              >
                RECORD CLASSIFICATION: DE-RESTRICTED
              </div>
              <p
                className="font-sans italic text-slate-400"
                style={{ fontSize: '13px', lineHeight: 1.6 }}
              >
                Subject data is audited by human resources assets at Bengaluru. Operational compliance guaranteed.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Selected Log Sheet (Tactile Warm Paper Sheet) */}
          <motion.div
            variants={animItemRight}
            className="flex-grow flex flex-col relative"
          >
            {/* Folder paperclip overlay */}
            <PaperclipSVG />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeEntry.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="paper-sheet flex-1 p-6 md:p-8 flex flex-col justify-between"
                style={{ zIndex: 10 }}
              >
                {/* Header stamps */}
                <div>
                  <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-4">
                    <div className="font-mono text-xs text-stone-600 tracking-wider">
                      OPERATIVE SERVICE RECORD // LOG_{activeEntry.id}
                    </div>
                    <div
                      className="font-mono text-xs px-2.5 py-1 rounded"
                      style={{
                        background: 'rgba(155, 56, 56, 0.1)',
                        border: '1px solid var(--restricted-red)',
                        color: 'var(--restricted-red)',
                        fontWeight: 700,
                      }}
                    >
                      {activeEntry.classification}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-stone-500 uppercase tracking-widest block mb-1">
                    {activeEntry.category}
                  </span>
                  
                  <h2
                    className="font-display font-black text-2xl md:text-3xl tracking-tight leading-tight"
                    style={{ color: 'var(--ink-dark)' }}
                  >
                    {activeEntry.title}
                  </h2>

                  <div className="font-mono text-xs text-stone-600 mt-1 mb-6 font-bold">
                    LOCATION/UNIT: {activeEntry.subtitle} · ENTRY DATE: {activeEntry.date}
                  </div>

                  <div
                    className="font-sans text-[15px] leading-relaxed text-stone-800 border-l-2 border-stone-400 pl-4 mb-6"
                  >
                    <p>{activeEntry.description}</p>
                  </div>
                </div>

                {/* Achievements audit list */}
                <div>
                  <div className="font-mono text-[11px] font-bold text-stone-700 tracking-widest mb-3 uppercase border-t border-stone-300 pt-4">
                    FIELD LOGISTICS AUDIT INDEX
                  </div>
                  <ul className="flex flex-col gap-2.5 font-sans text-sm text-stone-800">
                    {activeEntry.achievements.map((ach, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-[var(--restricted-red)] font-bold mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Story Intercept Log */}
      <div className="w-full mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-slate-500 pointer-events-none text-left z-10 relative">
        [RECON NOTE // REF: WN-04]: Chronological analysis verifies uninterrupted skill acquisition timeline. Academic assets matching operational metrics.
      </div>
    </motion.div>
  );
}
