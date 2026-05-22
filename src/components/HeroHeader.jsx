import React from 'react';
import { IDENTITY, HERO } from '../data/portfolio';

const HeroHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mb-8 mt-4 relative z-20 px-4">

      {/* ── Floating geometry — light stroke on dark bg, hidden on mobile ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden sm:block" style={{ minHeight: 300 }} aria-hidden="true">
        <div className="absolute top-10 left-[8%] animate-spin-slow opacity-30" style={{ animationDuration: '18s' }}>
          <svg width="56" height="56" viewBox="0 0 100 100" fill="none" stroke="#F4FF1E" strokeWidth="6">
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="15" y1="30" x2="85" y2="70" />
            <line x1="15" y1="70" x2="85" y2="30" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-[12%] animate-spin-reverse-slow opacity-20" style={{ animationDuration: '22s' }}>
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" stroke="#FF1EC7" strokeWidth="6" strokeLinejoin="bevel">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
            <line x1="50" y1="5"  x2="50" y2="50" />
            <line x1="10" y1="25" x2="50" y2="50" />
            <line x1="90" y1="25" x2="50" y2="50" />
            <line x1="50" y1="50" x2="50" y2="95" />
          </svg>
        </div>
        <div className="absolute top-16 right-[22%] animate-spin-slow opacity-25" style={{ animationDuration: '12s' }}>
          <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="#00E5FF" strokeWidth="10" strokeDasharray="28 18">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
      </div>

      {/* ── Status marquee — dark bg, yellow text ── */}
      <div
        className="border-2 py-2 shadow-[4px_4px_0px_#F4FF1E] mb-6 transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform w-full max-w-[340px] sm:max-w-[420px] overflow-hidden relative z-10"
        style={{ backgroundColor: '#111', borderColor: '#F4FF1E' }}
        aria-label="System status: online"
        role="status"
      >
        <div className="whitespace-nowrap flex animate-marquee">
          <span className="font-mono font-bold text-[12px] sm:text-[14px] tracking-[3px] uppercase px-4" style={{ color: '#F4FF1E' }}>
            {HERO.marqueeText}
          </span>
          <span className="font-mono font-bold text-[12px] sm:text-[14px] tracking-[3px] uppercase px-4" style={{ color: '#F4FF1E' }} aria-hidden="true">
            {HERO.marqueeText}
          </span>
        </div>
      </div>

      {/* ── Calligraphic name — single line, warm white on dark ── */}
      <div className="w-full flex justify-center mb-5 relative z-10 overflow-hidden px-2">
        <h1
          className="whitespace-nowrap tracking-[2px] m-0 leading-none z-50 transform rotate-[-3deg] sm:rotate-[-4deg] hover:rotate-[-2deg] transition-all duration-300"
          style={{
            fontFamily: "'Style Script', cursive",
            fontSize: 'clamp(38px, 10vw, 130px)',
            color: '#F0EDE4',
            filter: 'drop-shadow(4px 4px 0px #F4FF1E)',
          }}
        >
          {IDENTITY.fullName}
        </h1>
      </div>

      {/* ── Role badge — pink on dark ── */}
      <div
        className="border-3 px-3 sm:px-5 py-2 mt-3 relative z-10 max-w-full"
        style={{
          backgroundColor: '#FF1EC7',
          border: '3px solid #F0EDE4',
          boxShadow: '4px 4px 0px #F0EDE4',
        }}
      >
        <h2 className="font-display text-[15px] sm:text-[20px] md:text-[24px] text-black tracking-[3px] sm:tracking-[5px] uppercase font-bold m-0 leading-none">
          {IDENTITY.role}
        </h2>
      </div>

      {/* ── Tagline — dark card, light text ── */}
      <div
        className="px-4 sm:px-6 py-3 mt-4 transform rotate-1 relative z-10 max-w-[95%] sm:max-w-none"
        style={{
          backgroundColor: '#161616',
          border: '3px solid #F0EDE4',
          boxShadow: '4px 4px 0px #F0EDE4',
        }}
      >
        <p className="font-mono text-[11px] sm:text-[13px] md:text-[14px] font-bold tracking-[1px] sm:tracking-[2px] m-0 uppercase leading-snug" style={{ color: '#F0EDE4' }}>
          {IDENTITY.tagline}
        </p>
      </div>

      {/* ── Status strip — open to work ── */}
      <div className="mt-5 relative z-10 flex items-center gap-3">
        <span
          className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[3px] uppercase px-3 py-1"
          style={{ backgroundColor: '#F4FF1E', color: '#000', border: '2px solid #000' }}
        >
          ● OPEN TO WORK
        </span>
        <span className="font-mono text-[10px] sm:text-[11px]" style={{ color: '#888' }}>
          Bengaluru · 2026 Internships
        </span>
      </div>
    </div>
  );
};

export default HeroHeader;
