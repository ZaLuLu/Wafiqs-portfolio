import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Classified Tactical Silhouette vector outline (No JPEGs, loads instantly)
const ClassifiedSilhouette = () => (
  <svg
    className="w-full h-full text-[var(--ivory-dim)] opacity-70 group-hover:opacity-90 transition-opacity duration-300"
    viewBox="0 0 200 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grid Background overlay within portrait box */}
    <defs>
      <pattern id="photo-grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(194, 159, 93, 0.06)" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#photo-grid)" />

    {/* Mysterious silhouette outline */}
    <path
      d="M 100,50 C 75,50 60,65 60,95 C 60,115 65,130 70,140 C 50,165 40,195 40,230 L 160,230 C 160,195 150,165 130,140 C 135,130 140,115 140,95 C 140,65 125,50 100,50 Z"
      fill="rgba(29, 32, 43, 0.6)"
      stroke="rgba(194, 159, 93, 0.25)"
      strokeWidth="1.5"
    />

    {/* Tactical coordinates lines and Target Lock border */}
    <rect x="52" y="42" width="96" height="110" rx="3" fill="none" stroke="rgba(194, 159, 93, 0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
    <path d="M 52,60 L 52,42 L 70,42" fill="none" stroke="var(--gold-ochre)" strokeWidth="1.2" />
    <path d="M 148,60 L 148,42 L 130,42" fill="none" stroke="var(--gold-ochre)" strokeWidth="1.2" />
    <path d="M 52,134 L 52,152 L 70,152" fill="none" stroke="var(--gold-ochre)" strokeWidth="1.2" />
    <path d="M 148,134 L 148,152 L 130,152" fill="none" stroke="var(--gold-ochre)" strokeWidth="1.2" />

    {/* Facial crosshair vectors */}
    <line x1="100" y1="30" x2="100" y2="160" stroke="rgba(194, 159, 93, 0.15)" strokeWidth="0.8" />
    <line x1="40" y1="95" x2="160" y2="95" stroke="rgba(194, 159, 93, 0.15)" strokeWidth="0.8" />

    {/* Stamped Red censor eye-tracking bar */}
    <rect x="25" y="85" width="150" height="24" rx="2" fill="var(--restricted-red)" />
    <text
      x="100"
      y="99"
      fill="var(--ivory-warm)"
      fontFamily="var(--font-mono)"
      fontSize="7.5"
      fontWeight="bold"
      letterSpacing="0.1em"
      textAnchor="middle"
    >
      [PHOTO RESTRICTED]
    </text>
    <text
      x="100"
      y="107"
      fill="rgba(228, 231, 235, 0.75)"
      fontFamily="var(--font-mono)"
      fontSize="5.5"
      letterSpacing="0.05em"
      textAnchor="middle"
    >
      SECURITY CLEARANCE REQ.
    </text>
  </svg>
);

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

export default function CoverSpread({ onNavigate }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const yr = now.getFullYear();
      const mo = pad(now.getMonth() + 1);
      const dy = pad(now.getDate());
      const hr = pad(now.getHours());
      const mi = pad(now.getMinutes());
      const sc = pad(now.getSeconds());
      setTime(`${yr}.${mo}.${dy} // ${hr}:${mi}:${sc}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const animContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.12 }
    }
  };

  const animItemLeft = {
    hidden: { opacity: 0, x: -36 },
    visible: {
      opacity: 1, x: 0,
      transition: { type: 'spring', stiffness: 65, damping: 20 }
    }
  };

  const animItemRight = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: 'spring', stiffness: 55, damping: 18 }
    }
  };

  return (
    <motion.div
      variants={animContainer}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex flex-col justify-between py-12 px-6 md:px-14 select-none relative overflow-hidden"
      style={{ color: 'var(--ivory-warm)', backgroundColor: 'var(--midnight-deep)' }}
    >
      {/* Immersive Background Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          fontFamily: 'var(--font-display)',
          fontSize: '22vw',
          fontWeight: 900,
          color: 'rgba(255, 255, 255, 0.009)',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          letterSpacing: '0.08em',
        }}
      >
        WAFIQ
      </div>

      {/* Microfilm Scanner laser line sweep (sweeps entire background) */}
      <div
        className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--gold-ochre)] to-transparent opacity-10 z-10 pointer-events-none"
        style={{
          animation: 'tactical-scan 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        }}
      />

      {/* Level 4 Security Operational Status Watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.35em',
          color: 'rgba(194, 159, 93, 0.03)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          textTransform: 'uppercase',
        }}
      >
        OPERATIVE DATA SHEETS // DIRECTIVE GHOST-99 // LEVEL 4 DE-RESTRICTED STATUS
      </div>

      {/* ── TOP CORNER TACTICAL INFO ── */}
      <div className="flex justify-between items-end pb-4 w-full mb-6 relative z-10 font-mono text-[9px] text-[var(--ivory-dim)] pointer-events-none border-b border-white/5">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--archive-olive)] animate-pulse" />
            <span>DIRECT DOSSIER BINDER // DE-CLASSIFIED FOR RECRUITMENT</span>
          </div>
          <div style={{ color: 'var(--restricted-red)', fontWeight: 700, marginTop: '2px' }}>SYS_TIME: {time || 'CALCULATING...'}</div>
        </div>
        <div className="text-right">
          <div>LOC. COORDINATES: 12.9716° N, 77.5946° E [BLR_SEC]</div>
          <div>TACTICAL GATEWAY STATUS: OPERATIONAL // BINDER_INDEX_ON</div>
        </div>
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
        <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full h-full relative z-10">

          {/* ══════════════════════════════════════════════════ */}
          {/* LEFT: Tactical Silhouette Target Card (Operative Profile) */}
          {/* ══════════════════════════════════════════════════ */}
          <motion.div
            variants={animItemLeft}
            className="relative w-full lg:w-[35%] flex flex-col gap-6 items-center justify-center flex-shrink-0 py-6"
            style={{
              borderRight: '1px solid rgba(255, 255, 255, 0.05)',
              paddingRight: '20px',
            }}
          >
            {/* Target Reticle Image Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '240px',
                aspectRatio: '3/4',
                borderRadius: '4px',
                border: '1px solid rgba(194, 159, 93, 0.22)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.4), inset 0 0 30px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                background: 'var(--midnight-deep)',
              }}
              className="group"
            >
              {/* Fine Inner Double hairline */}
              <div
                style={{
                  position: 'absolute',
                  inset: '2px',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  pointerEvents: 'none',
                  zIndex: 10,
                }}
              />

              {/* Target Reticle Corner Ticks */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20 text-[var(--gold-ochre)] opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M 4,14 L 4,4 L 14,4" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 86,4 L 96,4 L 96,14" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 4,86 L 4,96 L 14,96" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 86,96 L 96,96 L 96,86" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </svg>

              {/* Central Orbital Target Ring Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90px',
                  height: '90px',
                  pointerEvents: 'none',
                  zIndex: 20,
                }}
                className="flex items-center justify-center text-[var(--gold-ochre)] opacity-30 group-hover:opacity-75 transition-all duration-500 scale-95 group-hover:scale-105"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_40s_linear_infinite]">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <path d="M 50,0 L 50,15 M 50,85 L 50,100 M 0,50 L 15,50 M 85,50 L 100,50" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="absolute w-1 h-1 bg-[var(--restricted-red)] rounded-full animate-ping" />
              </div>

              {/* Laser scanning sweep line (local overlay) */}
              <div
                className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--gold-ochre)] to-transparent opacity-20 z-10 pointer-events-none"
                style={{
                  animation: 'tactical-scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                }}
              />

              {/* Custom Classified Silhouette Vector */}
              <ClassifiedSilhouette />

              {/* Tracking coordinates stamps */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '7.5px',
                  letterSpacing: '0.12em',
                  color: 'var(--gold-ochre)',
                  zIndex: 20,
                  background: 'rgba(11, 12, 15, 0.9)',
                  padding: '2px 5px',
                  borderRadius: '1px',
                  border: '1px solid rgba(194, 159, 93, 0.15)',
                }}
              >
                OP_LOC // BLR.SEC.12
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '7.5px',
                  letterSpacing: '0.12em',
                  color: 'var(--archive-olive)',
                  zIndex: 20,
                  background: 'rgba(11, 12, 15, 0.9)',
                  padding: '2px 5px',
                  borderRadius: '1px',
                  border: '1px solid rgba(94, 102, 84, 0.2)',
                }}
                className="flex items-center gap-1"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--archive-olive)] animate-pulse" />
                SYS_REF: WN-2026-FPR
              </div>
            </div>

            {/* Premium CSS Barcode Signature */}
            <div
              className="flex flex-col gap-1 w-full max-w-[240px] p-3 border rounded-sm"
              style={{
                background: 'rgba(29, 32, 43, 0.45)',
                borderColor: 'rgba(194, 159, 93, 0.15)',
              }}
            >
              <div className="flex justify-between items-center font-mono text-[8px] text-stone-500 font-bold uppercase tracking-wider">
                <span>ENCRYPTED TARGET SIGNATURE</span>
                <span className="text-[var(--gold-ochre)]">SECURE VERIFIED</span>
              </div>
              
              {/* Flex custom CSS barcode lines */}
              <div className="flex items-end justify-between h-5 w-full py-1 opacity-55">
                {[2, 1, 3, 1, 4, 2, 1, 2, 4, 1, 3, 2, 1, 4, 1, 2, 3, 1, 4, 2, 1, 2, 4, 1, 3, 2, 1, 4, 1, 2].map((w, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-400"
                    style={{
                      width: `${w}px`,
                      height: '100%',
                      opacity: idx % 3 === 0 ? 0.35 : idx % 5 === 0 ? 0.85 : 0.6,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Stamped restricted badge */}
            <div
              className="w-full max-w-[240px] font-mono text-[9px] px-3 py-1.5 border border-dashed text-center tracking-[0.16em] uppercase rounded-sm"
              style={{
                color: 'var(--restricted-red)',
                borderColor: 'rgba(155, 56, 56, 0.45)',
                background: 'rgba(155, 56, 56, 0.05)',
                fontWeight: 700,
              }}
            >
              TOP SECRET // LEVEL 4 CLASSIFIED
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════ */}
          {/* RIGHT: Document printed on Warm Sand Paper Sheet  */}
          {/* ══════════════════════════════════════════════════ */}
          <motion.div
            variants={animItemRight}
            className="flex-grow flex flex-col relative"
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
              <div>
                {/* Official dossier tracking header stamp */}
                <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-3">
                  <div className="font-mono text-xs text-stone-600 tracking-wider">
                    INTELLIGENCE DOSSIER BINDER // INDEX SHEET: WN-COVER
                  </div>
                  <div className="font-mono text-[10px] font-bold text-[var(--restricted-red)] border border-[var(--restricted-red)] px-2 py-0.5 rounded uppercase">
                    TOP SECRET
                  </div>
                </div>

                {/* Subject Title display serif */}
                <h1
                  className="font-display font-black italic uppercase leading-none"
                  style={{
                    fontSize: 'clamp(3.2rem, 6.5vw, 5.2rem)',
                    letterSpacing: '-0.02em',
                    color: 'var(--ink-dark)',
                  }}
                >
                  Wafiq<br />
                  <span style={{ color: 'var(--restricted-red)' }}>Nawaz.</span>
                </h1>

                <div className="flex items-center gap-3 mt-3 font-mono text-stone-600 text-xs font-semibold">
                  <span className="text-[var(--restricted-red)] font-bold">CODENAME: ZALULU</span>
                  <span>·</span>
                  <span>SYSTEMS ARCHITECT & WEB OPERATIVE</span>
                </div>

                {/* Captain Price Commander Field Assessment & Redactions */}
                <div
                  className="my-5 p-4 border rounded-sm font-mono text-[11px] leading-relaxed text-stone-700"
                  style={{
                    background: 'rgba(28, 25, 23, 0.03)',
                    borderColor: 'rgba(28, 25, 23, 0.08)',
                    borderLeft: '3px solid var(--brass-accent)',
                  }}
                >
                  <div className="text-[9px] text-[var(--restricted-red)] font-bold mb-1.5 tracking-widest uppercase">
                    // COMMAND FIELD INTEL BRIEF [EXCERPT DECRYPTED]
                  </div>
                  <div>
                    Subject Nawaz operates with exceptional technical agency in full-stack architecture and cryptographic gate defense. Demonstrates absolute operational speed in deploying highly secure <span className="bg-stone-800 px-2 py-0.5 rounded text-transparent select-none">REDACTED</span> modules, high-concurrency FastAPI setups, and React system architectures within <span className="bg-stone-800 px-2.5 py-0.5 rounded text-transparent select-none">REDACTED</span> sector. Validated as a primary tech asset in Bengaluru region. Highly capable field asset.
                  </div>
                </div>

                {/* Folder Table of Contents styled as printed typewriter logs */}
                <div 
                  className="my-3 flex flex-col gap-1.5 rounded-sm p-4"
                  style={{
                    background: 'rgba(28, 25, 23, 0.02)',
                    border: '1px solid rgba(28, 25, 23, 0.05)',
                  }}
                >
                  <div
                    className="font-mono pb-2 text-[9px] font-bold tracking-[0.24em] text-stone-600 uppercase border-b border-stone-300 flex justify-between"
                  >
                    <span>DOSSIER RECORD SHEETS INDEX</span>
                    <span style={{ color: 'var(--restricted-red)' }}>[CLASSIFIED]</span>
                  </div>

                  {[
                    { idx: 1, name: 'I. Dossier Record', tag: 'DOSSIER', desc: 'Narrative biography, personal objectives, and tactical background.' },
                    { idx: 2, name: 'II. Capability Matrix', tag: 'MATRIX', desc: 'Authenticated software engineering and systems architecture modules.' },
                    { idx: 3, name: 'III. Operation Files', tag: 'WORK', desc: 'Confidential web application case files and live deployments.' },
                    { idx: 4, name: 'IV. Service Logistics', tag: 'LOGISTICS', desc: 'Timeline log of education milestones and professional milestones.' },
                    { idx: 5, name: 'V. Secure Relay', tag: 'CONNECT', desc: 'Secure encryption dispatch form for immediate communication.' },
                  ].map(item => (
                    <button
                      key={item.idx}
                      onClick={() => onNavigate(item.idx)}
                      className="group flex items-start gap-4 text-left transition-all duration-300 cursor-pointer w-full py-2 px-2 rounded hover:bg-stone-800/5"
                    >
                      <span
                        className="font-mono pt-0.5 text-[11px] font-bold text-[var(--restricted-red)]"
                      >
                        0{item.idx}
                      </span>
                      <div className="flex-grow min-w-0">
                        <div className="flex justify-between items-baseline gap-3">
                          <span
                            className="font-display italic font-bold uppercase group-hover:text-[var(--restricted-red)] transition-colors duration-200 text-[15px] text-[var(--ink-dark)]"
                          >
                            {item.name}
                          </span>
                          <span
                            className="font-mono text-[9px] tracking-wider text-stone-500 font-bold"
                          >
                            [{item.tag}]
                          </span>
                        </div>
                        <p
                          className="font-sans text-[11.5px] text-stone-600 mt-0.5 leading-relaxed group-hover:text-stone-800 transition-colors duration-200"
                        >
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Dossier logistics line bar */}
              <div
                className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-4 border-t border-stone-300 font-mono text-[10px] text-stone-600"
              >
                <div className="font-sans text-xs leading-relaxed text-stone-600">
                  Subject is a high-performing Computer Science undergraduate at Bengaluru Sector.<br />
                  Audit records verify excellence in modern Javascript stack & FastAPI logistics.
                </div>

                <a
                  href="/Wafiq_Nawaz_Resume.pdf"
                  download
                  className="btn-editorial-premium-red w-full sm:w-auto text-center justify-center pointer-events-auto z-50 flex-shrink-0"
                  style={{
                    border: '1px solid var(--restricted-red)',
                    color: 'var(--ink-dark)',
                    background: 'rgba(155, 56, 56, 0.08)',
                  }}
                >
                  <span>↓</span> DOWNLOAD ARCHIVE PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Story Intercept Log and Scroll indicators */}
      <div className="w-full flex justify-between items-center mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-slate-500 pointer-events-none">
        <div>
          [FIELD INTERCEPT LOG // BENGALURU SEC]: TARGET RECONNAISSANCE ONLINE. SYS_STATUS: OPERATIONAL.
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <motion.span animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}>●</motion.span>
          <span className="tracking-[0.24em] uppercase">SCROLL DOWN TO ACCESS RECORD</span>
          <motion.span animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.7 }}>●</motion.span>
        </div>
      </div>
    </motion.div>
  );
}
