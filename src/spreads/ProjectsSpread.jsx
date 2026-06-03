import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects } from '../data/projects';

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

export default function ProjectsSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeProj = projects[selectedIdx];

  const animContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  const animTab = {
    hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 60, damping: 16 } }
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
      }}>OPERATIONS</div>

      {/* Scanner */}
      <div
        className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--gold-ochre-vivid)] to-transparent opacity-10 z-10 pointer-events-none"
        style={{ animation: 'tactical-scan 8s cubic-bezier(0.4,0,0.2,1) infinite' }}
      />

      {/* ── SECTION HEADER ── */}
      <div className="spread-header">
        <div className="flex items-baseline gap-5">
          <span className="spread-header-numeral">III</span>
          <div>
            <div className="spread-header-title">Operational Mission Files</div>
            <div className="spread-header-subtitle">Case Reviews &amp; Live Deployments</div>
          </div>
        </div>
        <span className="spread-header-badge hidden sm:block">RESTRICTED // WORK FILES</span>
      </div>

      {/* ── FOLDER TABS ── */}
      <div className="flex items-end gap-1.5 z-20 relative px-1">
        {projects.map((proj, idx) => {
          const isActive = idx === selectedIdx;
          return (
            <motion.button
              key={proj.id}
              variants={animTab}
              onClick={() => setSelectedIdx(idx)}
              className="px-4 md:px-6 py-2.5 rounded-t-[6px] border border-b-0 cursor-pointer relative transition-all duration-300"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                fontWeight: isActive ? 700 : 500,
                background: isActive ? 'var(--paper-primary)' : 'var(--smoked-indigo)',
                color: isActive ? 'var(--ink-dark)' : 'var(--ivory-dim)',
                borderColor: isActive ? 'var(--restricted-red-vivid)' : 'rgba(255,255,255,0.08)',
                boxShadow: isActive ? '0 -4px 14px rgba(0,0,0,0.25)' : 'none',
                transform: isActive ? 'translateY(1px)' : 'translateY(4px)',
                zIndex: isActive ? 20 : 10,
              }}
            >
              {/* Active tab red top stripe */}
              {isActive && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--restricted-red-vivid)', borderRadius: '6px 6px 0 0' }} />
              )}
              {/* Active glow */}
              {isActive && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--restricted-red-vivid)', borderRadius: '6px 6px 0 0', filter: 'blur(4px)', opacity: 0.5 }} />
              )}

              <span className="flex items-center gap-2">
                <span style={{ color: isActive ? 'var(--restricted-red-vivid)' : 'var(--ivory-dim)' }}>
                  {String(parseInt(proj.id)).padStart(2, '0')}
                </span>
                <span>{proj.title}</span>
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* ── BINDER FRAME ── */}
      <div
        className="relative overflow-hidden flex-grow flex flex-col rounded-b-[6px] rounded-tr-[6px] z-10 -mt-[1px]"
        style={{ border: '1px solid var(--border-subtle)', background: 'rgba(20,22,31,0.25)', backdropFilter: 'blur(6px)', padding: '16px' }}
      >
        <PaperclipSVG />

        <div className="paper-sheet flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
          style={{ background: 'var(--paper-primary)', color: 'var(--ink-dark)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProj.id}
              initial={{ opacity: 0, x: -12, filter: 'blur(5px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 12, filter: 'blur(5px)' }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between h-full"
            >
              {/* Upper: stamps */}
              <div>
                <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-4">
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#78716c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Operational Evidence Dossier · Case {activeProj.id}
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <span
                      className="font-mono font-bold rounded px-2.5 py-1 text-[11px]"
                      style={{
                        background: activeProj.status === 'LIVE' ? 'rgba(95,107,83,0.15)' : 'rgba(155,56,56,0.12)',
                        borderWidth: 1, borderStyle: 'solid',
                        borderColor: activeProj.status === 'LIVE' ? 'var(--archive-olive)' : 'var(--restricted-red-vivid)',
                        color: activeProj.status === 'LIVE' ? 'var(--archive-olive)' : 'var(--restricted-red-vivid)',
                      }}
                    >
                      {activeProj.status}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e', fontWeight: 700 }}>
                      {String(parseInt(activeProj.id)).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}
                    </span>
                  </div>
                </div>

                {/* Operation title */}
                <div className="mb-5">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '6px' }}>
                    Operation Code:
                  </span>
                  <h2
                    className="font-display font-black italic uppercase leading-none"
                    style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--restricted-red-vivid)' }}
                  >
                    {activeProj.title}
                  </h2>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#78716c', marginTop: '6px' }}>
                    {activeProj.subtitle} · {activeProj.year}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-5">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '8px' }}>
                    Objective Statement:
                  </span>
                  <div
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.65, color: '#44403c', borderLeft: '3px solid rgba(120,113,108,0.4)', paddingLeft: '16px' }}
                  >
                    {activeProj.description}
                  </div>
                </div>

                {/* Stack tags */}
                <div className="mb-5">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '10px' }}>
                    Stack Assets:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProj.stack.map(tech => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700,
                          padding: '5px 12px', borderRadius: '4px',
                          border: '1px solid rgba(184,64,64,0.28)',
                          color: 'var(--restricted-red-vivid)',
                          background: 'rgba(184,64,64,0.07)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action links */}
              <div className="mt-6 pt-4 border-t border-stone-300 flex justify-between items-center">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e' }}>
                  WN-OPS-{activeProj.id}
                </span>
                <div className="flex gap-6">
                  {activeProj.liveUrl && (
                    <a href={activeProj.liveUrl} target="_blank" rel="noreferrer"
                      className="transition-all duration-300 hover:opacity-75 flex items-center gap-1.5"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--restricted-red-vivid)' }}>
                      ↗ Live Deployment
                    </a>
                  )}
                  {activeProj.sourceUrl && (
                    <a href={activeProj.sourceUrl} target="_blank" rel="noreferrer"
                      className="transition-all duration-300 hover:opacity-75 flex items-center gap-1.5"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-base)', fontWeight: 700, color: '#57534e' }}>
                      ⟨/⟩ Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
