import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import wafiqImage from '../assets/Wafiq.jpeg';

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

export default function AboutSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const animContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.06 } }
  };

  const animItemLeft = {
    hidden: { opacity: 0, x: -28, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 55, damping: 22 } }
  };

  const animItemRight = {
    hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 48, damping: 20 } }
  };

  const STATS = [
    { label: 'Availability', value: 'Actively Seeking', accent: true },
    { label: 'Projects Deployed', value: '3 Major Works' },
    { label: 'Experience', value: '2+ Years Coding' },
  ];

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
      }}>OPERATIVE</div>

      {/* Scanner sweep */}
      <div
        className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[var(--gold-ochre-vivid)] to-transparent opacity-10 z-10 pointer-events-none"
        style={{ animation: 'tactical-scan 8s cubic-bezier(0.4,0,0.2,1) infinite' }}
      />

      {/* ── SECTION HEADER ── */}
      <div className="spread-header">
        <div className="flex items-baseline gap-4">
          <span className="spread-header-numeral">[ 01 ]</span>
          <div>
            <div className="spread-header-title">Operative Dossier</div>
            <div className="spread-header-subtitle">Biographical Record</div>
          </div>
        </div>
        <span className="spread-header-badge hidden sm:block">RESTRICTED // PROFILE</span>
      </div>

      {/* ── BINDER FRAME ── */}
      <div
        className="relative overflow-hidden flex-1 flex flex-col rounded-[6px] z-10"
        style={{ border: '1px solid var(--border-subtle)', background: 'rgba(20,22,31,0.25)', backdropFilter: 'blur(6px)', padding: '16px' }}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full h-full relative z-10">

          {/* ══ LEFT: Photo Column ══ */}
          <motion.div
            variants={animItemLeft}
            className="relative w-full lg:w-[32%] flex flex-col gap-5 items-center justify-center flex-shrink-0 py-4"
            style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '20px' }}
          >
            {/* Full-color photo — fixed from broken SVG filter approach */}
            <div
              className="group relative"
              style={{
                width: '100%', maxWidth: '280px', aspectRatio: '3/4',
                borderRadius: '6px',
                border: '1px solid rgba(194,159,93,0.28)',
                boxShadow: '0 28px 60px rgba(0,0,0,0.55), inset 0 0 30px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                background: 'var(--midnight-navy)',
              }}
            >
              {/* Corner ticks */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 text-[var(--gold-ochre-vivid)] opacity-55" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 4,14 L 4,4 L 14,4" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 86,4 L 96,4 L 96,14" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 4,86 L 4,96 L 14,96" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M 86,96 L 96,96 L 96,86" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </svg>

              {/* Rotating target ring */}
              <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '90px', height: '90px', zIndex: 20, pointerEvents: 'none' }}
                className="flex items-center justify-center text-[var(--gold-ochre-vivid)] opacity-20 group-hover:opacity-50 transition-opacity duration-500">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_40s_linear_infinite]">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" />
                  <path d="M 50,0 L 50,15 M 50,85 L 50,100 M 0,50 L 15,50 M 85,50 L 100,50" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="absolute w-2 h-2 bg-[var(--restricted-red-vivid)] rounded-full animate-ping opacity-60" />
              </div>

              {/* Scanner */}
              <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--gold-ochre-vivid)] to-transparent opacity-15 z-10 pointer-events-none"
                style={{ animation: 'tactical-scan 4s cubic-bezier(0.4,0,0.2,1) infinite' }} />

              {/* The actual photo — full color, no broken SVG filter */}
              <img
                src={wafiqImage}
                alt="Wafiq Nawaz — operative photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />

              {/* Vignette overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(11,12,15,0.45) 100%)', pointerEvents: 'none', zIndex: 15 }} />
            </div>

            {/* Identity block below photo */}
            <div className="w-full max-w-[280px]">
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--ivory-warm)', lineHeight: 1.1 }}>
                Wafiq Nawaz
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--gold-ochre-vivid)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: '4px' }}>
                Full-Stack Developer
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--ivory-dim)', marginTop: '6px' }}>
                Bengaluru, India · 2026
              </div>
            </div>
          </motion.div>

          {/* ══ RIGHT: Paper Sheet ══ */}
          <motion.div variants={animItemRight} className="flex-grow flex flex-col relative z-10">
            <PaperclipSVG />

            <div
              className="paper-sheet flex-1 p-6 md:p-8 flex flex-col justify-between"
              style={{ background: 'var(--paper-primary)', color: 'var(--ink-dark)' }}
            >
              <div>
                {/* Paper header */}
                <div className="flex justify-between items-center mb-6 border-b border-stone-300 pb-4">
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#57534e', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Intelligence Personnel Record · WN-01
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded border"
                    style={{ background: 'rgba(155,56,56,0.08)', borderColor: 'var(--restricted-red-vivid)', color: 'var(--restricted-red-vivid)' }}>
                    TOP SECRET
                  </span>
                </div>

                {/* Big title */}
                <h2
                  className="font-display font-black italic uppercase leading-none"
                  style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', letterSpacing: '-0.02em', color: 'var(--ink-dark)' }}
                >
                  Systems Architect &<br />
                  <span style={{ color: 'var(--restricted-red-vivid)' }}>Web Operative.</span>
                </h2>

                {/* Quote blockquote */}
                <blockquote
                  style={{
                    fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                    fontSize: 'var(--text-md)', lineHeight: 1.65, color: '#57534e',
                    borderLeft: '4px solid var(--restricted-red-vivid)',
                    paddingLeft: '18px', margin: '20px 0',
                    maxWidth: '520px',
                  }}
                >
                  "Tasked with engineering high-availability full-stack web platforms, optimizing asynchronous background workers, and authoring cryptographic gateway access points."
                </blockquote>

                <div className="w-full border-t border-stone-300 my-4" />

                {/* Body paragraphs */}
                <div
                  className="md:columns-2 gap-8 text-stone-800"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.7, textAlign: 'justify' }}
                >
                  <p className="mb-4">
                    Wafiq Nawaz is an exceptionally capable software engineer currently pursuing a Computer Science degree at S-VYASA University in Bengaluru. Proven expert in modular development and backend reliability protocols.
                  </p>
                  <p>
                    Specializations include secure API systems via Python and FastAPI, frontend logic in React, and granular authorization workflows using JWT arrays. Highly proficient in rapid analytical data deployments and AI-integrated tools.
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-end gap-8 pt-5 mt-6 border-t border-stone-300">
                {STATS.map(stat => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700, color: '#78716c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {stat.label}
                    </span>
                    <span
                      className="font-display italic font-black uppercase"
                      style={{ fontSize: 'var(--text-lg)', color: stat.accent ? 'var(--restricted-red-vivid)' : '#1c1c1d' }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
