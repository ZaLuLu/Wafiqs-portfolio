import React from 'react';
import { IDENTITY, HERO } from '../data/portfolio';

/**
 * HeroHeader — the main landing view.
 *
 * Content is driven entirely by src/data/portfolio.js — see IDENTITY and HERO exports.
 *
 * Features:
 *  - Floating brutalist geometry (spinning SVGs)
 *  - Auto-scrolling system-status marquee
 *  - Calligraphic name in "Style Script" font
 *  - Role subtitle and tagline badges
 *
 * Animation classes (.animate-marquee, .animate-spin-slow, etc.)
 * are defined globally in index.css.
 */
const HeroHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mb-12 mt-4 relative z-20">

      {/* ── Floating Brutalist Geometry (decorative, aria-hidden) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ minHeight: 300 }} aria-hidden="true">
        {/* Asterisk */}
        <div className="absolute top-10 left-[10%] animate-spin-slow opacity-80" style={{ animationDuration: '15s' }}>
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="8">
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="15" y1="30" x2="85" y2="70" />
            <line x1="15" y1="70" x2="85" y2="30" />
          </svg>
        </div>

        {/* Wireframe hexagon */}
        <div className="absolute bottom-10 right-[15%] animate-spin-reverse-slow opacity-80" style={{ animationDuration: '20s' }}>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="8" strokeLinejoin="bevel">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
            <line x1="50" y1="5"  x2="50" y2="50" />
            <line x1="10" y1="25" x2="50" y2="50" />
            <line x1="90" y1="25" x2="50" y2="50" />
            <line x1="50" y1="50" x2="50" y2="95" />
          </svg>
        </div>

        {/* Dashed circle */}
        <div className="absolute top-20 right-[25%] animate-spin-slow opacity-80" style={{ animationDuration: '10s' }}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="12" strokeDasharray="30 20">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
      </div>

      {/* ── System Status Marquee ── */}
      <div
        className="bg-neon-yellow border-4 border-black py-2 shadow-[4px_4px_0px_#000] mb-8 transform -rotate-2 hover:rotate-0 transition-transform w-[280px] overflow-hidden relative z-10"
        aria-label="System status: online"
        role="status"
      >
        <div className="whitespace-nowrap flex animate-marquee">
          {/* Duplicate span for seamless loop */}
          <span className="text-black font-mono font-bold text-[18px] tracking-[4px] uppercase px-4">
            {HERO.marqueeText}
          </span>
          <span className="text-black font-mono font-bold text-[18px] tracking-[4px] uppercase px-4" aria-hidden="true">
            {HERO.marqueeText}
          </span>
        </div>
      </div>

      {/* ── Calligraphic Name ── */}
      <div className="w-full flex justify-center mb-8 relative z-10">
        <h1
          className="text-[80px] sm:text-[100px] md:text-[140px] whitespace-nowrap text-black tracking-[2px] m-0 leading-none z-50 transform rotate-[-4deg] drop-shadow-[8px_8px_0px_var(--color-neon-blue)] hover:drop-shadow-[12px_12px_0px_var(--color-neon-blue)] hover:rotate-[-2deg] transition-all duration-300"
          style={{ fontFamily: "'Style Script', cursive" }}
        >
          {IDENTITY.fullName}
        </h1>
      </div>

      {/* ── Role Subtitle ── */}
      <div className="bg-neon-pink border-4 border-black px-4 py-2 mt-6 shadow-[4px_4px_0px_#000] relative z-10">
        <h2 className="font-display text-[24px] text-black tracking-[4px] uppercase font-bold m-0 leading-none">
          {IDENTITY.role}
        </h2>
      </div>

      {/* ── Tagline ── */}
      <div className="bg-white border-4 border-black px-6 py-3 mt-6 shadow-[4px_4px_0px_#000] transform rotate-1 relative z-10">
        <p className="font-mono text-[16px] font-bold text-black tracking-[2px] m-0 uppercase">
          {IDENTITY.tagline}
        </p>
      </div>
    </div>
  );
};

export default HeroHeader;
