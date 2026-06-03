import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import wafiqImage from '../assets/Wafiq.jpeg';

// Classified Tactical Silhouette vector outline with Operative Photo
const ClassifiedSilhouette = () => (
  <svg
    className="w-full h-full text-[var(--ivory-dim)] opacity-70 group-hover:opacity-95 transition-opacity duration-300"
    viewBox="0 0 200 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grid Background overlay within portrait box */}
    <defs>
      <pattern id="about-photo-grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(194, 159, 93, 0.06)" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#about-photo-grid)" />

    {/* Actual image of Wafiq, grayscale to color on hover */}
    <image
      href={wafiqImage}
      x="0"
      y="0"
      width="200"
      height="260"
      preserveAspectRatio="xMidYMid slice"
      className="filter grayscale contrast-[1.1] brightness-[0.95] group-hover:filter-none transition-all duration-500"
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

    {/* Stamped Red censor eye-tracking bar (fades out on hover) */}
    <g className="transition-opacity duration-500 group-hover:opacity-0">
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
    </g>
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

export default function AboutSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const animContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.06 }
    }
  };

  const animItemLeft = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
      opacity: 1, scale: 1, y: 0,
      transition: { type: 'spring', stiffness: 55, damping: 20 }
    }
  };

  const animItemRight = {
    hidden: { opacity: 0, y: 40 },
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
        OPERATIVE
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
            I
          </span>
          <div className="font-sans">
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ivory-warm)' }}>
              Operative Dossier
            </div>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: '2px' }}>
              SECTION WN-01 · BIOGRAPHICAL RECORD
            </div>
          </div>
        </div>
        <span
          className="font-sans hidden sm:block"
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--restricted-red)', opacity: 0.8 }}
        >
          RESTRICTED // PROFILE
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
                maxWidth: '220px',
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
                  width: '80px',
                  height: '80px',
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
                <div className="absolute w-1.5 h-1.5 bg-[var(--restricted-red)] rounded-full animate-ping" />
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
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--archive-olive)] animate-pulse" />
                REF: WN-WN01
              </div>
            </div>

            {/* Specialization Stamp Block */}
            <div
              className="w-full max-w-[220px] font-mono text-[9px] p-3 text-center uppercase border border-dashed rounded-sm"
              style={{
                borderColor: 'var(--restricted-red)',
                background: 'rgba(155, 56, 56, 0.05)',
                color: 'var(--restricted-red)',
                fontWeight: 700,
                letterSpacing: '0.12em',
              }}
            >
              <div>CLASSIFIED EVALUATION</div>
              <div className="text-white mt-1">STATUS: FULL CLEARANCE</div>
              <div className="text-[8px] text-stone-500 mt-0.5">NSA ARCHIVE DIRECTIVE-6A</div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════ */}
          {/* RIGHT: Biography document on warm paper sheet      */}
          {/* ══════════════════════════════════════════════════ */}
          <motion.div
            variants={animItemRight}
            className="flex-grow flex flex-col relative z-10"
          >
            {/* SVG paperclip pinning sheet to folder board */}
            <PaperclipSVG />

            {/* The warm paper sheet */}
            <div 
              className="paper-sheet flex-1 p-6 md:p-8 flex flex-col justify-between"
              style={{
                background: 'var(--paper-primary)',
                color: 'var(--ink-dark)',
              }}
            >
              <div>
                {/* Official dossier tracking header stamp */}
                <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-3">
                  <div className="font-mono text-xs text-stone-600 tracking-wider">
                    INTELLIGENCE PERSONNEL DATA SHEETS // SUBJECT: WN-01
                  </div>
                  <div className="font-mono text-[10px] font-bold text-[var(--restricted-red)] border border-[var(--restricted-red)] px-2 py-0.5 rounded">
                    TOP SECRET
                  </div>
                </div>

                {/* Subject Title display serif */}
                <h2
                  className="font-display font-black italic uppercase leading-none"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    letterSpacing: '-0.02em',
                    color: 'var(--ink-dark)',
                  }}
                >
                  Systems Architect &<br />
                  <span style={{ color: 'var(--restricted-red)' }}>Web Operative.</span>
                </h2>

                {/* Core Objective blockquote inside paper sheet */}
                <div
                  className="font-serif italic leading-relaxed text-stone-800"
                  style={{
                    fontSize: '15px',
                    maxWidth: '520px',
                    borderLeft: '3px solid var(--restricted-red)',
                    paddingLeft: '16px',
                    marginTop: '16px',
                    marginBottom: '20px',
                  }}
                >
                  "Tasked with engineering high-availability full-stack web platforms, optimizing asynchronous background workers, and authoring cryptographic gateway access points."
                </div>

                {/* Table separator logistics line */}
                <div className="w-full border-t border-stone-300 my-4" />

                {/* Columns layout inside warm paper sheet */}
                <div
                  className="font-sans leading-relaxed md:columns-2 gap-8 text-stone-800 text-[14px]"
                  style={{
                    columnGap: '2rem',
                    textAlign: 'justify',
                  }}
                >
                  <p className="mb-4">
                    Wafiq Nawaz is an exceptionally capable software engineer currently pursuing computer science undergraduate diagnostics at S-VYASA University in Bengaluru. Proven expert in modular development and backend reliability protocols.
                  </p>
                  <p>
                    Specialization parameters include secure API systems structured via Python and FastAPI, frontend logic constructed using React, and granular authorization workflows using JWT arrays. Highly proficient in rapid analytical data deployments.
                  </p>
                </div>
              </div>

              {/* Dossier status metrics grid row */}
              <div
                className="flex flex-wrap items-end gap-8 pt-5 mt-6 border-t border-stone-300 font-sans"
              >
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-mono text-[11px] font-bold text-stone-600 tracking-wider uppercase"
                  >
                    AVAILABILITY STATUS
                  </span>
                  <span
                    className="font-display italic font-black uppercase text-xl text-[var(--restricted-red)]"
                  >
                    ACTIVE INTERN
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-mono text-[11px] font-bold text-stone-600 tracking-wider uppercase"
                  >
                    DEPLOYED CORE ASSETS
                  </span>
                  <span
                    className="font-display italic font-black text-xl text-stone-900"
                  >
                    3 MAJOR FILES
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-mono text-[11px] font-bold text-stone-600 tracking-wider uppercase"
                  >
                    DIAGNOSTICS EXP
                  </span>
                  <span
                    className="font-display italic font-black text-xl text-stone-900"
                  >
                    2+ YEARS IN CODES
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Story Intercept Log */}
      <div className="w-full mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-slate-500 pointer-events-none text-left">
        [INTEL NOTE // REF: WN-01]: Target demonstrates high analytical velocity and absolute structural focus. Background evaluation confirms excellence in modular execution.
      </div>
    </motion.div>
  );
}
