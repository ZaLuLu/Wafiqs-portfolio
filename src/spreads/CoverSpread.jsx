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

          {/* ══ LEFT: Portrait / Silhouette ══ */}
          <motion.div
            variants={animItemLeft}
            className="relative w-full lg:w-[34%] flex flex-col gap-5 items-center justify-center flex-shrink-0 py-4"
            style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '20px' }}
          >
            {/* Photo frame */}
            <div
              className="group relative"
              style={{
                width: '100%', maxWidth: '260px', aspectRatio: '3/4',
                borderRadius: '4px',
                border: '1px solid rgba(194, 159, 93, 0.25)',
                boxShadow: '0 24px 56px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                background: 'var(--midnight-navy)',
              }}
            >
              {/* Corner ticks */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 text-[var(--gold-ochre-vivid)] opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 4,14 L 4,4 L 14,4" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 86,4 L 96,4 L 96,14" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 4,86 L 4,96 L 14,96" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 86,96 L 96,96 L 96,86" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </svg>

              {/* Rotating target ring */}
              <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '90px', height: '90px', zIndex: 20, pointerEvents: 'none' }}
                className="flex items-center justify-center text-[var(--gold-ochre-vivid)] opacity-25">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_40s_linear_infinite]">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" />
                  <path d="M 50,0 L 50,15 M 50,85 L 50,100 M 0,50 L 15,50 M 85,50 L 100,50" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="absolute w-2 h-2 bg-[var(--restricted-red-vivid)] rounded-full animate-ping opacity-60" />
              </div>

              {/* Scanner */}
              <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--gold-ochre-vivid)] to-transparent opacity-20 z-10 pointer-events-none"
                style={{ animation: 'tactical-scan 4s cubic-bezier(0.4,0,0.2,1) infinite' }} />

              {/* Silhouette fill */}
              <div className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 200 260" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="cover-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(194,159,93,0.05)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cover-grid)" />
                  <path
                    d="M 100,50 C 75,50 60,65 60,95 C 60,115 65,130 70,140 C 50,165 40,195 40,230 L 160,230 C 160,195 150,165 130,140 C 135,130 140,115 140,95 C 140,65 125,50 100,50 Z"
                    fill="rgba(29, 32, 43, 0.7)" stroke="rgba(194, 159, 93, 0.2)" strokeWidth="1.2"
                  />
                  <rect x="25" y="85" width="150" height="24" rx="2" fill="var(--restricted-red)" />
                  <text x="100" y="99" fill="var(--ivory-warm)" fontFamily="var(--font-mono)" fontSize="7.5" fontWeight="bold" letterSpacing="0.1em" textAnchor="middle">[PHOTO RESTRICTED]</text>
                  <text x="100" y="107" fill="rgba(228,231,235,0.7)" fontFamily="var(--font-mono)" fontSize="5.5" letterSpacing="0.05em" textAnchor="middle">CLEARANCE REQUIRED</text>
                </svg>
              </div>
            </div>

            {/* Barcode */}
            <div className="flex flex-col gap-1.5 w-full max-w-[260px] p-3 border rounded-sm"
              style={{ background: 'rgba(29,32,43,0.45)', borderColor: 'rgba(194,159,93,0.15)' }}>
              <div className="flex justify-between items-center" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ivory-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                <span>Wafiq Nawaz</span>
                <span style={{ color: 'var(--gold-ochre-vivid)' }}>VERIFIED ✓</span>
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

          {/* ══ RIGHT: Document sheet ══ */}
          <motion.div variants={animItemRight} className="flex-grow flex flex-col relative">
            <PaperclipSVG />

            <div
              className="paper-sheet flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
              style={{ background: 'var(--paper-primary)', color: 'var(--ink-dark)' }}
            >
              <div>
                {/* Sheet header */}
                <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-4">
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#57534e', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Intelligence Dossier · Cover Sheet
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded border"
                    style={{ background: 'rgba(155,56,56,0.08)', borderColor: 'var(--restricted-red-vivid)', color: 'var(--restricted-red-vivid)' }}>
                    TOP SECRET
                  </span>
                </div>

                {/* HERO NAME — big */}
                <h1
                  className="font-display font-black italic uppercase leading-none"
                  style={{ fontSize: 'clamp(3.6rem, 7vw, 5.8rem)', letterSpacing: '-0.02em', color: 'var(--ink-dark)' }}
                >
                  Wafiq<br />
                  <span style={{ color: 'var(--restricted-red-vivid)' }}>Nawaz.</span>
                </h1>

                <div className="flex flex-wrap items-center gap-3 mt-4 mb-5">
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--restricted-red-vivid)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    ZALULU
                  </span>
                  <span style={{ color: '#78716c' }}>·</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 500, color: '#57534e' }}>
                    Full-Stack Developer &amp; Systems Architect
                  </span>
                </div>

                {/* Intel brief */}
                <div
                  className="mb-5 p-4 rounded-sm"
                  style={{
                    background: 'rgba(28,25,23,0.03)',
                    borderLeft: '4px solid var(--restricted-red-vivid)',
                    paddingLeft: '16px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--restricted-red-vivid)', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Command Field Brief
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: '#57534e', lineHeight: 1.65 }}>
                    Subject Nawaz operates with exceptional technical agency in full-stack architecture and secure API design. Demonstrates high operational speed in deploying{' '}
                    <span className="bg-stone-800 px-2 py-0.5 rounded text-transparent select-none">REDACTED</span>{' '}
                    modules, FastAPI setups, and React architectures. Validated asset in Bengaluru region.
                  </p>
                </div>

                {/* Table of Contents */}
                <div className="flex flex-col gap-0.5 rounded-sm p-3" style={{ background: 'rgba(28,25,23,0.02)', border: '1px solid rgba(28,25,23,0.06)' }}>
                  <div className="flex justify-between items-center pb-3 mb-1 border-b border-stone-300">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700, color: '#57534e', textTransform: 'uppercase', letterSpacing: '0.10em' }}>
                      Contents
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--restricted-red-vivid)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      [CLASSIFIED]
                    </span>
                  </div>

                  {TOC_ITEMS.map(item => (
                    <button
                      key={item.idx}
                      onClick={() => onNavigate(item.idx)}
                      className="group flex items-start gap-4 text-left cursor-pointer w-full py-2.5 px-2 rounded transition-all duration-300 hover:bg-stone-800/6"
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--restricted-red-vivid)', flexShrink: 0, paddingTop: '1px' }}>
                        {String(item.idx).padStart(2, '0')}
                      </span>
                      <div className="flex-grow min-w-0">
                        <div className="flex justify-between items-baseline gap-3">
                          <span
                            className="group-hover:text-[var(--restricted-red-vivid)] transition-colors duration-200"
                            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--text-md)', textTransform: 'uppercase', color: 'var(--ink-dark)' }}
                          >
                            {item.name}
                          </span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: '#a8a29e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0 }}>
                            {item.tag}
                          </span>
                        </div>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: '#78716c', marginTop: '2px', lineHeight: 1.5 }} className="group-hover:text-stone-700 transition-colors duration-200">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom action bar */}
              <div className="mt-5 pt-4 border-t border-stone-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: '#78716c', lineHeight: 1.6 }}>
                  Computer Science undergraduate at S-VYASA, Bengaluru.<br />
                  Available for 2026 internship roles — local or remote.
                </p>
                <a
                  href="/Wafiq_Nawaz_Resume.pdf"
                  download
                  className="btn-editorial-premium-red w-full sm:w-auto text-center justify-center flex-shrink-0 pointer-events-auto z-50"
                  style={{ border: '1px solid var(--restricted-red-vivid)', color: 'var(--ink-dark)', background: 'rgba(184,64,64,0.08)' }}
                >
                  <span>↓</span> Download CV
                </a>
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
