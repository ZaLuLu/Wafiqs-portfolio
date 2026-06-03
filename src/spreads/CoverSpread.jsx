import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

// ── TACTICAL RADAR HUD VISUAL ────────────────────────────────

const RadarHUD = () => (
  <svg viewBox="0 0 200 260" fill="none" className="w-full h-full font-mono text-[6px] text-stone-500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="cover-grid" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(184,64,64,0.06)" strokeWidth="0.5"/>
      </pattern>
      <linearGradient id="sweep-gradient" x1="100" y1="130" x2="150" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--restricted-red-vivid)" stopOpacity="0" />
        <stop offset="100%" stopColor="var(--restricted-red-vivid)" stopOpacity="0.45" />
      </linearGradient>
    </defs>
    
    {/* Grid background */}
    <rect width="100%" height="100%" fill="url(#cover-grid)" />
    
    {/* Outer diagnostic frame */}
    <rect x="6" y="6" width="188" height="248" rx="2" stroke="rgba(184, 64, 64, 0.15)" strokeWidth="0.8" strokeDasharray="3 5" />
    
    {/* Concentric scope circles centered at (100, 130) */}
    <circle cx="100" cy="130" r="100" stroke="rgba(184, 64, 64, 0.04)" strokeWidth="0.5" />
    <circle cx="100" cy="130" r="75" stroke="rgba(184, 64, 64, 0.08)" strokeWidth="0.6" strokeDasharray="2 3" />
    <circle cx="100" cy="130" r="50" stroke="rgba(184, 64, 64, 0.12)" strokeWidth="0.8" />
    <circle cx="100" cy="130" r="25" stroke="rgba(184, 64, 64, 0.18)" strokeWidth="1" strokeDasharray="4 2" />
    
    {/* Axis lines */}
    <line x1="100" y1="15" x2="100" y2="245" stroke="rgba(184, 64, 64, 0.08)" strokeWidth="0.5" />
    <line x1="10" y1="130" x2="190" y2="130" stroke="rgba(184, 64, 64, 0.08)" strokeWidth="0.5" />
    
    {/* Degree ticks */}
    <path d="M 100,10 L 100,15 M 100,250 L 100,245 M 10,130 L 15,130 M 190,130 L 185,130" stroke="rgba(184,64,64,0.3)" strokeWidth="1" />
    
    {/* Technical Text overlays */}
    <text x="12" y="18" fill="var(--ivory-dim)" fontWeight="bold" letterSpacing="0.08em">HUD_SYS_V8.0</text>
    <text x="12" y="26" fill="var(--restricted-red-vivid)" fontWeight="bold">SCANNING: ACTIVE</text>
    
    <text x="12" y="238" fill="var(--ivory-dim)">AZ: 218.45°</text>
    <text x="12" y="246" fill="var(--ivory-dim)">EL: 12.04°</text>
    
    <text x="188" y="18" textAnchor="end" fill="var(--ivory-dim)">RANGE: 400m</text>
    <text x="188" y="26" textAnchor="end" fill="var(--restricted-red-vivid)" fontWeight="bold">LOCK_READY</text>
    
    <text x="188" y="246" textAnchor="end" fill="var(--ivory-dim)">WN-REF: 0x2A9</text>

    {/* Target markers (pulse animation) */}
    <g className="animate-pulse">
      {/* Target 1 */}
      <rect x="55" y="85" width="6" height="6" fill="none" stroke="var(--restricted-red-vivid)" strokeWidth="0.8" />
      <line x1="58" y1="83" x2="58" y2="93" stroke="var(--restricted-red-vivid)" strokeWidth="0.5" />
      <line x1="53" y1="88" x2="63" y2="88" stroke="var(--restricted-red-vivid)" strokeWidth="0.5" />
      <text x="64" y="89" fill="var(--restricted-red-vivid)" fontSize="5">TGT_01 // SECURE</text>

      {/* Target 2 */}
      <rect x="135" y="165" width="6" height="6" fill="none" stroke="var(--restricted-red-vivid)" strokeWidth="0.8" />
      <line x1="138" y1="163" x2="138" y2="173" stroke="var(--restricted-red-vivid)" strokeWidth="0.5" />
      <line x1="133" y1="168" x2="143" y2="168" stroke="var(--restricted-red-vivid)" strokeWidth="0.5" />
      <text x="144" y="169" fill="var(--restricted-red-vivid)" fontSize="5">TGT_02 // SYSTEM</text>
    </g>
    
    {/* Rotating sweep container */}
    <g className="animate-[spin_7s_linear_infinite]" style={{ transformOrigin: '100px 130px' }}>
      {/* Sweep Line */}
      <line 
        x1="100" y1="130" x2="185" y2="70" 
        stroke="var(--restricted-red-vivid)" 
        strokeWidth="1.2" 
        opacity="0.8"
      />
      {/* Sweep Trail */}
      <path 
        d="M 100,130 L 185,70 A 100,100 0 0,0 130,32 Z" 
        fill="url(#sweep-gradient)" 
      />
    </g>
    
    {/* Centered scope labels */}
    <rect x="45" y="122" width="110" height="16" rx="2" fill="rgba(11, 12, 15, 0.9)" stroke="rgba(184, 64, 64, 0.4)" strokeWidth="0.8" />
    <text x="100" y="132" fill="var(--ivory-warm)" fontSize="7" fontWeight="bold" letterSpacing="0.08em" textAnchor="middle">WAFIQ NAWAZ // SC-00</text>

    {/* Crop corner marks */}
    <path d="M 6,18 L 6,6 L 18,6" fill="none" stroke="var(--restricted-red-vivid)" strokeWidth="0.8" />
    <path d="M 182,6 L 194,6 L 194,18" fill="none" stroke="var(--restricted-red-vivid)" strokeWidth="0.8" />
    <path d="M 6,242 L 6,254 L 18,254" fill="none" stroke="var(--restricted-red-vivid)" strokeWidth="0.8" />
    <path d="M 182,254 L 194,254 L 194,242" fill="none" stroke="var(--restricted-red-vivid)" strokeWidth="0.8" />
  </svg>
);

// ── MAIN COVER SPREAD COMPONENT ─────────────────────────────

export default function CoverSpread({ onNavigate }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      setTime(`${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())} // ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const animContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.12 } }
  };

  const animItemLeft = {
    hidden: { opacity: 0, x: -36, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 60, damping: 22 } }
  };

  const animItemRight = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 55, damping: 20 } }
  };

  const TOC_ITEMS = [
    { idx: 1, name: 'Operative Dossier',     tag: 'ABOUT',     desc: 'Personal background, objectives, and tactical profile.' },
    { idx: 2, name: 'Capability Matrix',      tag: 'SKILLS',    desc: 'Verified software engineering and systems modules.' },
    { idx: 3, name: 'Operation Files',        tag: 'PROJECTS',  desc: 'Live deployments and case files.' },
    { idx: 4, name: 'Service Logistics',      tag: 'EXPERIENCE',desc: 'Education milestones and professional timeline.' },
    { idx: 5, name: 'Secure Relay',           tag: 'CONTACT',   desc: 'Direct dispatch for immediate communication.' },
  ];

  return (
    <motion.div
      variants={animContainer}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex flex-col justify-between py-10 px-6 md:px-14 select-none relative overflow-hidden"
      style={{ color: 'var(--ivory-warm)', backgroundColor: 'var(--midnight-deep)' }}
    >
      {/* Background Watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%) rotate(-90deg)',
        fontFamily: 'var(--font-display)', fontSize: '22vw', fontWeight: 900,
        color: 'rgba(255, 255, 255, 0.008)', zIndex: 0,
        pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap', letterSpacing: '0.08em',
      }}>
        WAFIQ
      </div>

      {/* Scanner sweep */}
      <div
        className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--gold-ochre-vivid)] to-transparent opacity-10 z-10 pointer-events-none"
        style={{ animation: 'tactical-scan 8s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
      />

      {/* ── TOP BAR — Live Clock + Status ── */}
      <div className="flex justify-between items-center pb-4 w-full mb-4 relative z-10 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--archive-olive)] animate-pulse flex-shrink-0" />
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ivory-dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Portfolio — Recruitment Dossier
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--restricted-red-vivid)', fontWeight: 700, marginTop: '2px', letterSpacing: '0.06em' }}>
              {time || 'INITIALIZING...'}
            </div>
          </div>
        </div>
        <span className="tag-restricted hidden sm:block">CLASSIFIED</span>
      </div>

      {/* ── MAIN BINDER FRAME ── */}
      <div
        className="relative overflow-hidden flex-1 flex flex-col rounded-[6px] z-10"
        style={{
          border: '1px solid var(--border-subtle)',
          background: 'rgba(20, 22, 31, 0.25)',
          backdropFilter: 'blur(6px)',
          padding: '16px',
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full h-full relative z-10">

          {/* ══ LEFT: Radar Scope (Widened) ══ */}
          <motion.div
            variants={animItemLeft}
            className="relative w-full lg:w-[38%] flex flex-col gap-5 items-center justify-center flex-shrink-0 py-4"
            style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '20px' }}
          >
            {/* Photo frame containing custom Scope HUD (Wider 310px) */}
            <div
              className="group relative"
              style={{
                width: '100%', maxWidth: '310px', aspectRatio: '3/4',
                borderRadius: '4px',
                border: '1px solid rgba(184, 64, 64, 0.28)',
                boxShadow: '0 24px 56px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                background: '#07080B',
              }}
            >
              <RadarHUD />
            </div>

            {/* Barcode (Aligned to 310px width) */}
            <div className="flex flex-col gap-1.5 w-full max-w-[310px] p-3 border rounded-sm"
              style={{ background: 'rgba(29,32,43,0.45)', borderColor: 'rgba(184, 64, 64, 0.15)' }}>
              <div className="flex justify-between items-center" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ivory-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                <span>Wafiq Nawaz</span>
                <span style={{ color: 'var(--restricted-red-vivid)' }}>VERIFIED ✓</span>
              </div>
              <div className="flex items-end justify-between h-5 w-full py-1 opacity-50">
                {[2,1,3,1,4,2,1,2,4,1,3,2,1,4,1,2,3,1,4,2,1,2,4,1,3,2,1,4,1,2].map((w,i) => (
                  <div key={i} className="bg-stone-400" style={{ width:`${w}px`, height:'100%', opacity: i%3===0?0.35:i%5===0?0.85:0.6 }} />
                ))}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ivory-dim)', letterSpacing: '0.08em' }}>
                Full-Stack Developer · Bengaluru 2026
              </div>
            </div>
          </motion.div>

          {/* ══ RIGHT: Document sheet (Split two-column visual) ══ */}
          <motion.div variants={animItemRight} className="flex-grow flex flex-col relative">
            <PaperclipSVG />

            <div
              className="paper-sheet flex-grow flex flex-col justify-between overflow-y-auto p-6 md:p-8"
              style={{ background: 'var(--paper-primary)', color: 'var(--ink-dark)', height: 'calc(100% - 2px)' }}
            >
              {/* Sheet header */}
              <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-4 flex-shrink-0">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#57534e', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Intelligence Dossier · Cover Sheet
                </div>
                <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded border"
                  style={{ background: 'rgba(155,56,56,0.08)', borderColor: 'var(--restricted-red-vivid)', color: 'var(--restricted-red-vivid)' }}>
                  TOP SECRET
                </span>
              </div>

              {/* Two-Column split for sheet contents (prevents inner scrolling) */}
              <div className="flex-1 flex flex-col lg:flex-row gap-6 md:gap-8 justify-between min-h-0">
                
                {/* Column 1: Profile Brief & Action Link */}
                <div className="flex-grow flex flex-col justify-between min-w-0 h-full">
                  <div>
                    {/* HERO NAME — side-by-side tracked sans-serif */}
                    <h1
                      className="font-sans font-extrabold uppercase leading-none tracking-widest"
                      style={{ fontSize: 'clamp(2.0rem, 4.2vw, 3.2rem)', color: 'var(--ink-dark)', letterSpacing: '0.06em' }}
                    >
                      WAFIQ <span style={{ color: 'var(--restricted-red-vivid)' }}>NAWAZ</span>
                    </h1>

                    <div className="flex items-center gap-2 mt-3 mb-4">
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--restricted-red-vivid)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        ZALULU
                      </span>
                      <span style={{ color: '#78716c' }}>·</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 500, color: '#57534e' }}>
                        Full-Stack Developer
                      </span>
                    </div>

                    {/* Intel brief */}
                    <div
                      className="mb-4 p-4 rounded-sm"
                      style={{
                        background: 'rgba(28,25,23,0.03)',
                        borderLeft: '4px solid var(--restricted-red-vivid)',
                        paddingLeft: '14px',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--restricted-red-vivid)', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        Command Field Brief
                      </div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: '#57534e', lineHeight: 1.6 }}>
                        Subject Nawaz operates with high technical agency in secure API design and full-stack systems. Demonstrates quick turnaround in deploying complex React, FastAPI, and Postgres modules.
                      </p>
                    </div>
                  </div>

                  {/* Immediate Action: Download Resume */}
                  <div className="pt-4 border-t border-stone-300 flex flex-col gap-3">
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: '#78716c', lineHeight: 1.5 }}>
                      Undergraduate at S-VYASA, Bengaluru. Open for 2026 internships.
                    </p>
                    <a
                      href="/Wafiq_Nawaz_Resume.pdf"
                      download
                      className="btn-editorial-premium-red w-full text-center justify-center pointer-events-auto"
                      style={{ border: '1px solid var(--restricted-red-vivid)', color: 'var(--ink-dark)', background: 'rgba(184,64,64,0.08)', padding: '10px 20px' }}
                    >
                      <span>↓</span> Download CV Dossier
                    </a>
                  </div>
                </div>

                {/* Column 2: Table of Contents (Contents List) */}
                <div className="w-full lg:w-[48%] xl:w-[50%] flex flex-col justify-stretch h-full border-t lg:border-t-0 lg:border-l border-stone-300 pt-6 lg:pt-0 lg:pl-6 xl:pl-8">
                  <div className="flex flex-col gap-0.5 h-full justify-between">
                    <div className="flex justify-between items-center pb-2.5 mb-2 border-b border-stone-300">
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700, color: '#57534e', textTransform: 'uppercase', letterSpacing: '0.10em' }}>
                        Dossier Contents
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--restricted-red-vivid)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        [CLASSIFIED]
                      </span>
                    </div>

                    <div className="flex-grow flex flex-col gap-1 overflow-y-auto pr-1">
                      {TOC_ITEMS.map(item => (
                        <button
                          key={item.idx}
                          onClick={() => onNavigate(item.idx)}
                          className="group flex items-start gap-3.5 text-left cursor-pointer w-full py-1.5 px-2 rounded transition-all duration-300 hover:bg-stone-850/5"
                        >
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--restricted-red-vivid)', flexShrink: 0, paddingTop: '1px' }}>
                            {String(item.idx).padStart(2, '0')}
                          </span>
                          <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-baseline gap-2">
                              <span
                                className="group-hover:text-[var(--restricted-red-vivid)] transition-colors duration-200"
                                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--text-base)', textTransform: 'uppercase', color: 'var(--ink-dark)' }}
                              >
                                {item.name}
                              </span>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#a8a29e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0 }}>
                                {item.tag}
                              </span>
                            </div>
                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: '#78716c', marginTop: '1px', lineHeight: 1.4 }} className="group-hover:text-stone-700 transition-colors duration-200 truncate">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="w-full flex justify-between items-center mt-4 pt-3 border-t border-white/[0.05] relative z-10">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ivory-dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Wafiq Nawaz · Portfolio 2026
        </span>
        <div className="hidden lg:flex items-center gap-3" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ivory-dim)', letterSpacing: '0.10em', textTransform: 'uppercase' }}>
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>↓</motion.span>
          <span>Scroll to access</span>
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut', delay: 0.4 }}>↓</motion.span>
        </div>
      </div>
    </motion.div>
  );
}
