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

// ── CUSTOM SCHEMATIC VISUALS FOR PROJECTS ──────────────────

// 1. RetailMind: analytical demand graph & metrics
const RetailMindVisual = () => (
  <div className="w-full h-full flex flex-col justify-between p-5 rounded bg-[#0E0F13] border border-stone-400/30 relative overflow-hidden font-mono text-[11px] text-[#8C95A5]">
    {/* Halftone grid pattern */}
    <div className="absolute inset-0 bg-halftone-grid opacity-10 pointer-events-none" />
    
    <div>
      <div className="flex justify-between border-b border-stone-800 pb-2.5 mb-4 text-[10px] uppercase tracking-wider text-stone-500 font-bold">
        <span>ASSET: RETAILMIND-01</span>
        <span className="text-[var(--archive-olive)]">SYS_ACTIVE</span>
      </div>
      <div className="mb-3 font-bold text-stone-200">DEMAND FORECAST GRAPHICS</div>
      
      {/* Mock SVG Line Chart */}
      <div className="w-full h-28 my-3 relative border-b border-l border-stone-800 flex items-end">
        <svg className="w-full h-full text-[var(--gold-ochre-vivid)]" viewBox="0 0 100 50" preserveAspectRatio="none">
          <path d="M 0 42 Q 15 48 30 22 T 60 8 T 80 32 T 100 12" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 0 42 Q 15 48 30 22 T 60 8 T 80 32 T 100 12 L 100 50 L 0 50 Z" fill="rgba(212,181,106,0.06)" />
        </svg>
        <span className="absolute bottom-1.5 right-1.5 text-[8px] text-stone-600 font-bold">t+30d</span>
        <span className="absolute top-1.5 left-1.5 text-[8px] text-stone-600 font-bold">qty_vol</span>
      </div>
    </div>
    
    <div className="space-y-2 border-t border-stone-800/80 pt-4">
      <div className="flex justify-between">
        <span>ENGINE RATING:</span>
        <span className="text-stone-300">GEMINI-1.5-PRO</span>
      </div>
      <div className="flex justify-between">
        <span>FORECAST CONFIDENCE:</span>
        <span className="text-[var(--archive-olive)]">98.4% (HIGH)</span>
      </div>
      <div className="flex justify-between">
        <span>INTEGRATION CDC:</span>
        <span className="text-stone-300">PG_PIPELINE_08</span>
      </div>
    </div>

    {/* APPROVED Outline Stamp */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] pointer-events-none select-none border-2 border-[var(--archive-olive)] text-[var(--archive-olive)] font-black uppercase text-[14px] px-3 py-1 rounded opacity-25 tracking-widest font-sans">
      APPROVED
    </div>
  </div>
);

// 2. Zalulu Portfolio: blueprint layout coordinates & crop marks
const ZaluluPortfolioVisual = () => (
  <div className="w-full h-full flex flex-col justify-between p-5 rounded bg-[#0E0F13] border border-stone-400/30 relative overflow-hidden font-mono text-[11px] text-[#8C95A5]">
    {/* Halftone grid pattern */}
    <div className="absolute inset-0 bg-halftone-grid opacity-10 pointer-events-none" />
    
    <div>
      <div className="flex justify-between border-b border-stone-800 pb-2.5 mb-4 text-[10px] uppercase tracking-wider text-stone-500 font-bold">
        <span>ASSET: ZALULU-02</span>
        <span className="text-[var(--gold-ochre-vivid)]">SYS_STAGE</span>
      </div>
      <div className="mb-3 font-bold text-stone-200">MONOGRAPH LAYOUT WIREFRAME</div>
      
      {/* Schematic Layout wireframe */}
      <div className="w-full h-28 my-3 border border-dashed border-stone-800 p-2 flex flex-col justify-between relative bg-black/15">
        <div className="absolute inset-x-0 top-1/2 border-t border-stone-900/60" />
        <div className="absolute inset-y-0 left-1/3 border-l border-stone-900/60" />
        
        <div className="flex justify-between items-start text-[8px] text-stone-600 font-bold">
          <span>[SPREAD_FOLD]</span>
          <span>48:52_RATIO</span>
        </div>
        
        <div className="self-end flex flex-col gap-1 w-14 text-[7px] border-l border-stone-800 pl-1.5 text-stone-500">
          <div className="border border-stone-800 px-0.5">W-01</div>
          <div className="bg-stone-850 text-stone-300 px-0.5 font-bold">W-02</div>
          <div className="border border-stone-800 px-0.5">W-03</div>
        </div>

        {/* Technical Crop Marks */}
        <div className="absolute top-1 left-1 border-t border-l border-stone-700 w-2 h-2" />
        <div className="absolute top-1 right-1 border-t border-r border-stone-700 w-2 h-2" />
        <div className="absolute bottom-1 left-1 border-b border-l border-stone-700 w-2 h-2" />
        <div className="absolute bottom-1 right-1 border-b border-r border-stone-700 w-2 h-2" />
      </div>
    </div>
    
    <div className="space-y-2 border-t border-stone-800/80 pt-4">
      <div className="flex justify-between">
        <span>RENDER CORE:</span>
        <span className="text-stone-300">VITE_REACT_8.0</span>
      </div>
      <div className="flex justify-between">
        <span>GRID SYSTEM:</span>
        <span className="text-stone-300">ASYMMETRIC_SNAP</span>
      </div>
      <div className="flex justify-between">
        <span>STYLE COMPILER:</span>
        <span className="text-stone-300">TAILWIND_V4.0</span>
      </div>
    </div>

    {/* STAGED Outline Stamp */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] pointer-events-none select-none border-2 border-[var(--restricted-red-vivid)] text-[var(--restricted-red-vivid)] font-black uppercase text-[14px] px-3 py-1 rounded opacity-25 tracking-widest font-sans">
      RELEASED
    </div>
  </div>
);

// 3. FastAPI Security: technical terminal log watcher
const FastAPISecurityVisual = () => {
  const [logs, setLogs] = useState([
    'SECURE RELAY INITIALIZED...',
    'SALT KEY STRENGTH: SHA-256',
    'MIDDLEWARE POLICY: ENFORCED',
    'OWASP COMPLIANCE VET: NOMINAL',
  ]);

  React.useEffect(() => {
    const logInterval = setInterval(() => {
      const extraLogs = [
        'INCOMING REQ: /api/v1/auth/verify',
        'AUTH STATUS: JWT SIGNATURE VERIFIED',
        'XSS FILTER: PAYLOAD SANITIZED',
        'CRYPT PIPELINE: INTEGRITY CONFIRMED',
        'MIDDLEWARE: CSRF HEADER VALIDATED',
      ];
      const randomLog = extraLogs[Math.floor(Math.random() * extraLogs.length)];
      setLogs(prev => [...prev.slice(1), randomLog]);
    }, 2800);
    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-5 rounded bg-[#07080B] border border-stone-400/30 relative overflow-hidden font-mono text-[11px] text-[#8C95A5]">
      {/* Halftone grid pattern */}
      <div className="absolute inset-0 bg-halftone-grid opacity-15 pointer-events-none" />
      
      <div>
        <div className="flex justify-between border-b border-stone-850 pb-2.5 mb-4 text-[10px] uppercase tracking-wider text-stone-500 font-bold">
          <span>SECURE CORE TERMINAL</span>
          <span className="text-[var(--restricted-red-vivid)] animate-pulse">● LIVE_MONITOR</span>
        </div>
        
        {/* Terminal panel */}
        <div className="w-full h-28 my-3 bg-black/60 p-3 border border-stone-900 rounded text-[9px] text-[#5e6654] font-mono leading-relaxed overflow-hidden">
          {logs.map((log, i) => (
            <div key={i} className="truncate">
              <span className="text-stone-700 select-none">$&gt; </span>
              <span className={i === logs.length - 1 ? "text-stone-300" : ""}>{log}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2 border-t border-stone-850 pt-4">
        <div className="flex justify-between">
          <span>CIPHER MECHANISM:</span>
          <span className="text-stone-300">HS256 / SHA-256</span>
        </div>
        <div className="flex justify-between">
          <span>SECURITY RATING:</span>
          <span className="text-[var(--archive-olive)]">A+_VETTED</span>
        </div>
        <div className="flex justify-between">
          <span>THREAT MATRIX:</span>
          <span className="text-[var(--restricted-red-vivid)]">LEVEL_05 (MAX)</span>
        </div>
      </div>

      {/* CLASSIFIED Outline Stamp */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] pointer-events-none select-none border-2 border-[var(--restricted-red-vivid)] text-[var(--restricted-red-vivid)] font-black uppercase text-[14px] px-3 py-1 rounded opacity-25 tracking-widest font-sans">
        RESTRICTED
      </div>
    </div>
  );
};

// Main selector helper
const renderVisualAsset = (id) => {
  switch (id) {
    case '01':
      return <RetailMindVisual />;
    case '02':
      return <ZaluluPortfolioVisual />;
    case '03':
      return <FastAPISecurityVisual />;
    default:
      return null;
  }
};

// ── MAIN PROJECTS SPREAD COMPONENT ──────────────────────────

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
        <div className="flex items-baseline gap-4">
          <span className="spread-header-numeral">[ 03 ]</span>
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

        <div className="paper-sheet flex-grow flex flex-col justify-between overflow-y-auto"
          style={{ background: 'var(--paper-primary)', color: 'var(--ink-dark)', height: 'calc(100% - 2px)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProj.id}
              initial={{ opacity: 0, x: -12, filter: 'blur(5px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 12, filter: 'blur(5px)' }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between h-full p-6 md:p-8"
            >
              {/* ══ LEFT COLUMN: Project Details ══ */}
              <div className="flex-1 flex flex-col justify-between h-full min-w-0">
                <div>
                  {/* Evidence Dossier line */}
                  <div className="flex justify-between items-center mb-5 border-b border-stone-350 pb-3">
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
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e', fontWeight: 700 }} className="hidden sm:inline">
                        {String(parseInt(activeProj.id)).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}
                      </span>
                    </div>
                  </div>

                  {/* Operation Code & Title */}
                  <div className="mb-4">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '4px' }}>
                      Operation Code:
                    </span>
                    <h2
                      className="font-display font-black italic uppercase leading-none"
                      style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: 'var(--restricted-red-vivid)' }}
                    >
                      {activeProj.title}
                    </h2>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#78716c', marginTop: '4px' }}>
                      {activeProj.subtitle} · {activeProj.year}
                    </div>
                  </div>

                  {/* Objective Statement */}
                  <div className="mb-4">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '6px' }}>
                      Objective Statement:
                    </span>
                    <div
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: '#44403c', borderLeft: '3px solid rgba(120,113,108,0.4)', paddingLeft: '14px' }}
                    >
                      {activeProj.description}
                    </div>
                  </div>

                  {/* Stack Assets */}
                  <div className="mb-4">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.10em', display: 'block', marginBottom: '8px' }}>
                      Stack Assets:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProj.stack.map(tech => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700,
                            padding: '4px 10px', borderRadius: '4px',
                            border: '1px solid rgba(184,64,64,0.25)',
                            color: 'var(--restricted-red-vivid)',
                            background: 'rgba(184,64,64,0.06)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="mt-5 pt-3 border-t border-stone-300/80 flex justify-between items-center">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#a8a29e' }}>
                    WN-OPS-{activeProj.id}
                  </span>
                  <div className="flex gap-5">
                    {activeProj.liveUrl && (
                      <a href={activeProj.liveUrl} target="_blank" rel="noreferrer"
                        className="transition-all duration-300 hover:opacity-75 flex items-center gap-1"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--restricted-red-vivid)' }}>
                        ↗ Live Deployment
                      </a>
                    )}
                    {activeProj.sourceUrl && (
                      <a href={activeProj.sourceUrl} target="_blank" rel="noreferrer"
                        className="transition-all duration-300 hover:opacity-75 flex items-center gap-1"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700, color: '#57534e' }}>
                        ⟨/⟩ Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* ══ RIGHT COLUMN: Technical Schematic Evidence Asset ══ */}
              <div className="hidden lg:flex w-full lg:w-[320px] xl:w-[370px] flex-shrink-0 flex-col justify-stretch h-full border-l border-stone-300/70 pl-6 xl:pl-8 relative">
                {/* Visual Attachment wrapper */}
                <div className="flex-1 flex flex-col justify-between relative bg-black/5 p-4 rounded border border-stone-300/40 shadow-inner">
                  {/* Clipped layout sticker */}
                  <div className="absolute -top-2.5 left-6 bg-[rgba(212,181,106,0.95)] text-stone-900 px-3 py-0.5 rounded font-mono text-[9px] font-bold tracking-widest shadow-sm uppercase">
                    ATTACHMENT // CASE_{activeProj.id}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center py-2 h-full">
                    {renderVisualAsset(activeProj.id)}
                  </div>

                  <div className="mt-3 text-center text-[9px] font-mono text-stone-500 uppercase tracking-widest">
                    EXHIBIT EVIDENCE FILE WN-REF-{activeProj.id}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
