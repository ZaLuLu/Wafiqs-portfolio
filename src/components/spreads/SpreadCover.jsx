import React from 'react';
import MastheadLogo from '../ui/MastheadLogo';
import { IDENTITY } from '../../data/portfolio';

export default function SpreadCover() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#2E4237] flex flex-col justify-between p-12 text-[#F4ECE1]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.015]" />

      {/* Abstract outline lines and gold stars in background (from 3.jpg style) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Large faint outline PORTFOLIO stamps repeated */}
        <div className="absolute top-[20%] left-[-10%] rotate-[-15deg] font-heading font-outline-cream text-[110px] opacity-[0.05] leading-none uppercase tracking-widest font-black">
          PORTFOLIO
        </div>
        <div className="absolute bottom-[25%] right-[-5%] rotate-[10deg] font-heading font-outline-cream text-[90px] opacity-[0.04] leading-none uppercase tracking-widest font-black">
          ZALULU
        </div>
        
        {/* Decorative gold stars */}
        <div className="absolute top-[35%] left-[25%] text-[#FFA726] opacity-40">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-[35%] right-[20%] text-[#FFA726] opacity-30">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>

        {/* Thin minimalist geometric outline grid lines */}
        <div className="absolute top-12 bottom-12 left-12 right-12 border border-white/5" />
        <div className="absolute top-16 bottom-16 left-16 right-16 border border-white/[0.02]" />
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full">
        
        {/* Top Header bar */}
        <header className="flex justify-between items-center border-b border-white/10 pb-5 w-full">
          <div className="flex items-center gap-2">
            <MastheadLogo />
            <span className="font-meta text-[10px] tracking-[0.25em] text-[#FFA726] font-bold uppercase">
              CREATIVE LOGIC
            </span>
          </div>
          <span className="font-meta text-[10px] tracking-[0.2em] text-white/50 uppercase">
            ISSUE NO. 01 · 2026
          </span>
        </header>

        {/* Massive Centerpiece Branding (Outline typography + Calligraphy) */}
        <div className="my-auto flex flex-col items-center justify-center text-center py-8 select-none">
          <span className="font-meta text-[10px] tracking-[0.4em] text-white/60 uppercase block mb-3">
            INTERACTIVE DEVELOPMENT RECORD
          </span>
          
          <div className="relative">
            {/* Outline title block from 3.jpg */}
            <h2 className="font-heading font-outline-cream uppercase tracking-[0.18em] text-[74px] md:text-[84px] leading-none mb-1 opacity-80">
              PORTFOLIO
            </h2>
            
            {/* Calligraphic overlay name */}
            <h1 className="font-cookie text-[85px] text-[#FFA726] leading-none tracking-wide normal-case font-normal mt-[-10px] drop-shadow-md select-text">
              {IDENTITY.fullName}
            </h1>
          </div>

          <div className="w-16 h-[1.5px] bg-[#FFA726] my-6" />
          
          <p className="font-body italic text-[14px] text-[#F4ECE1]/85 max-w-[340px] leading-relaxed">
            "An editorial inquiry into full-stack architecture, secure systems engineering, and modern user experience."
          </p>
        </div>

        {/* Cover footer */}
        <footer className="flex justify-between items-end border-t border-white/10 pt-5 w-full select-none text-white/50">
          <div className="flex flex-col text-left">
            <span className="font-meta text-[8.5px] tracking-widest text-[#FFA726] font-bold uppercase mb-1">
              ROLE & SPECIALTY
            </span>
            <span className="font-display text-[12px] text-white leading-none uppercase tracking-wider font-semibold">
              {IDENTITY.classLabel}
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-meta text-[8.5px] tracking-widest text-[#FFA726] font-bold uppercase mb-1">
              CURRENT STATUS
            </span>
            <span className="font-display text-[12px] text-white leading-none uppercase tracking-wider font-semibold">
              {IDENTITY.statusBadge}
            </span>
          </div>
        </footer>

      </div>
    </div>
  );
}
