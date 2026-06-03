import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects } from '../data/projects';

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

export default function ProjectsSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeProj = projects[selectedIdx];

  const animContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const animTab = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 15 } }
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
      {/* Distressed Operation Watermark */}
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
        OPERATIONS
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
            III
          </span>
          <div className="font-sans">
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ivory-warm)' }}>
              Operational Mission Files
            </div>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: '2px' }}>
              SECTION WN-03 · CASE REVIEWS & DEPLOYMENTS
            </div>
          </div>
        </div>
        <span
          className="font-sans hidden sm:block"
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--restricted-red)', opacity: 0.8 }}
        >
          RESTRICTED // WORK DIRECTIVE
        </span>
      </div>

      {/* ── STAGGERED HORIZONTAL MANILA FOLDER TABS ── */}
      <div className="flex items-end gap-1.5 z-20 relative px-2">
        {projects.map((proj, idx) => {
          const isActive = idx === selectedIdx;
          return (
            <motion.button
              key={proj.id}
              variants={animTab}
              onClick={() => setSelectedIdx(idx)}
              className="px-4 md:px-6 py-2.5 font-mono text-[11px] font-bold rounded-t-[6px] border border-b-0 cursor-pointer flex items-center gap-2.5 transition-all duration-300 relative"
              style={{
                background: isActive ? 'var(--paper-primary)' : 'var(--smoked-indigo)',
                color: isActive ? 'var(--ink-dark)' : 'var(--ivory-dim)',
                borderColor: isActive ? 'var(--restricted-red)' : 'rgba(255,255,255,0.08)',
                boxShadow: isActive ? '0 -4px 10px rgba(0,0,0,0.2)' : 'none',
                // Active folder tab pops up slightly and merges with the page
                transform: isActive ? 'translateY(1px)' : 'translateY(4px)',
                zIndex: isActive ? 20 : 10,
              }}
            >
              {/* Active Tab Red Stripe */}
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--restricted-red)',
                    borderRadius: '6px 6px 0 0',
                  }}
                />
              )}
              
              <span style={{ color: isActive ? 'var(--restricted-red)' : 'var(--ivory-dim)' }}>
                [FILE_0{proj.id}]
              </span>
              <span>{proj.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* ── UNIFIED TACTICAL BINDER CONTAINER FRAME ── */}
      <div
        className="relative overflow-hidden flex-grow flex flex-col rounded-[6px] z-10 -mt-[1px]"
        style={{
          border: '1px solid var(--border-subtle)',
          background: 'rgba(20, 22, 31, 0.25)',
          backdropFilter: 'blur(6px)',
          padding: '16px',
        }}
      >
        {/* SVG paperclip pinning sheet to folder board */}
        <PaperclipSVG />

        <div className="paper-sheet flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col justify-between h-full"
            >
              
              {/* UPPER SECTION: Evidence Record stamps */}
              <div>
                <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-4 font-mono text-xs text-stone-600">
                  <div className="tracking-wider">
                    OPERATIONAL EVIDENCE DOSSIER // RE: CASE_{activeProj.id}
                  </div>
                  <div className="flex gap-2">
                    <span 
                      className="px-2 py-0.5 border rounded uppercase font-bold text-[9px]"
                      style={{
                        background: activeProj.status === 'LIVE' ? 'rgba(95, 107, 83, 0.15)' : 'rgba(139, 58, 58, 0.15)',
                        borderColor: activeProj.status === 'LIVE' ? 'var(--archive-olive)' : 'var(--restricted-red)',
                        color: activeProj.status === 'LIVE' ? 'var(--archive-olive)' : 'var(--restricted-red)',
                      }}
                    >
                      {activeProj.status}
                    </span>
                    <span className="font-bold">WN-OPS-0{activeProj.id}</span>
                  </div>
                </div>

                {/* Operation Code block */}
                <div className="mb-4">
                  <span className="font-mono text-xs text-stone-500 uppercase tracking-widest block mb-1">
                    OPERATION CODE:
                  </span>
                  <h2
                    className="font-display font-black italic uppercase text-2xl md:text-3xl tracking-tight leading-none"
                    style={{ color: 'var(--restricted-red)' }}
                  >
                    OPERATION: {activeProj.title}
                  </h2>
                  <div className="font-mono text-[10px] text-stone-600 mt-1 font-bold">
                    MISSION CLASSIFIED: INTERNAL AUDIT · CODENAME "{activeProj.subtitle}" · YEAR: {activeProj.year}
                  </div>
                </div>

                {/* Objective statement */}
                <div className="mb-6">
                  <span className="font-mono text-xs text-stone-500 uppercase tracking-widest block mb-2">
                    OBJECTIVE STATEMENT:
                  </span>
                  <div
                    className="font-sans text-[15px] leading-relaxed text-stone-800 border-l-2 border-stone-400 pl-4"
                  >
                    <p>{activeProj.description}</p>
                  </div>
                </div>

                {/* Intel Stack */}
                <div className="mb-6">
                  <span className="font-mono text-xs text-stone-500 uppercase tracking-widest block mb-3">
                    INTEL/STACK ASSETS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProj.stack.map(tech => (
                      <span 
                        key={tech} 
                        className="font-mono text-[10px] font-bold px-2.5 py-1 border border-stone-300 rounded text-stone-700 bg-stone-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Typewriter Comments */}
                <div 
                  className="p-4 rounded border border-stone-300 font-mono text-xs text-stone-700 relative overflow-hidden"
                  style={{
                    background: 'rgba(95, 107, 83, 0.03)',
                  }}
                >
                  <div className="absolute top-2 right-2 text-[9px] font-bold text-stone-400">
                    CLASSIFIED COMMENTS
                  </div>
                  <span className="block font-bold text-[10px] text-stone-500 mb-2 uppercase">
                    COMMENTS / SYSTEM ARCHITECTURE NOTES:
                  </span>
                  <p className="leading-relaxed">
                    Operative successfully implemented OWASP security benchmarks. System telemetry confirms asynchronous processing loops operate at optimal speeds. No data leaks detected. Deployments verified via high-availability automated health checks.
                  </p>
                </div>
              </div>

              {/* ACTION LINKS BLOCK */}
              <div className="mt-8 pt-4 border-t border-stone-300 flex justify-between items-center font-mono text-[11px] font-bold">
                <div className="text-stone-500">
                  REF://ACCESS_LEDGER_{activeProj.id}
                </div>
                <div className="flex gap-6">
                  {activeProj.liveUrl && (
                    <a
                      href={activeProj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--restricted-red)] transition-all duration-300 hover:opacity-80 flex items-center gap-1"
                    >
                      ↗ LIVE_DEPLOYMENT
                    </a>
                  )}
                  {activeProj.sourceUrl && (
                    <a
                      href={activeProj.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-stone-700 transition-all duration-300 hover:opacity-80 flex items-center gap-1"
                    >
                      ⟨/⟩ SOURCE_REPOSITORY
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Story Intercept Log */}
      <div className="w-full mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-slate-500 pointer-events-none text-left z-10 relative">
        [RECON FILE // REF: WN-03]: Decrypting operational payload. 3 targets active. Project RetailMind systems architecture fully extracted.
      </div>
    </motion.div>
  );
}
