import React from 'react';
import MastheadLogo from '../ui/MastheadLogo';
import Folio from '../ui/Folio';
import { IDENTITY } from '../../data/portfolio';

export default function SpreadCover() {
  return (
    <div className="spread-cover w-full h-full relative overflow-hidden bg-[#FDFCFB]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay" />

      {/* Full-bleed Portrait (Full Color, Boosted Contrast as requested) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/profile.jpg"
          alt="Wafiq Nawaz"
          className="w-full h-full object-cover object-top select-none pointer-events-none"
          style={{ filter: 'contrast(1.08) brightness(0.95)' }}
        />
        {/* Cinematic gradient fading text zones */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 z-1" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-1" />
      </div>

      {/* Foreground Content Stack */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 text-[#F8F5F0]">
        
        {/* Top Header bar */}
        <header className="flex justify-between items-center border-b border-white/15 pb-4 w-full">
          <MastheadLogo />
          <span className="font-meta text-[10px] tracking-[0.25em] text-white/80 uppercase">
            PORTFOLIO ISSUE · VOL I · 2026
          </span>
          <span className="font-meta text-[10px] tracking-[0.15em] text-rose-500 font-semibold uppercase">
            OPEN TO WORK
          </span>
        </header>

        {/* Cover Lines Panel (Middle Right) */}
        <div className="flex justify-between items-end w-full my-auto">
          {/* Left spacer to push cover lines right */}
          <div className="flex-1" />
          
          <aside className="flex flex-col gap-6 max-w-[200px] text-right mr-2 select-none">
            <div className="border-r-2 border-rose-600 pr-3">
              <span className="font-meta text-[9px] tracking-widest text-rose-500 block font-bold">FEATURE</span>
              <p className="font-display font-medium text-base text-white leading-tight">
                Full-Stack Developer from Bengaluru
              </p>
            </div>
            <div className="border-r-2 border-rose-600 pr-3">
              <span className="font-meta text-[9px] tracking-widest text-rose-500 block font-bold">INSIDE</span>
              <p className="font-display font-medium text-sm text-white/90 leading-tight">
                React · Python · FastAPI · Web Security
              </p>
            </div>
            <div className="border-r-2 border-rose-600 pr-3">
              <span className="font-meta text-[9px] tracking-widest text-rose-500 block font-bold">THEME</span>
              <p className="font-display font-medium text-sm text-emerald-400 leading-tight">
                Warm Editorial & Luxury Forest Green
              </p>
            </div>
            <div className="border-r-2 border-rose-600 pr-3">
              <span className="font-meta text-[9px] tracking-widest text-rose-500 block font-bold">PLUS</span>
              <p className="font-display font-medium text-sm text-white/90 leading-tight">
                Production-Ready AI Deployments
              </p>
            </div>
          </aside>
        </div>

        {/* Name Block and Location (Bottom Left) */}
        <div className="mb-4">
          <h1 className="font-display font-light text-[68px] leading-[0.85] text-white flex flex-col tracking-tight drop-shadow-lg">
            <span className="font-cookie text-[85px] text-[#E8A020] normal-case pr-4 -mb-4 tracking-normal font-normal">
              {IDENTITY.fullName.split(' ')[0]}
            </span>
            <span className="font-heading italic font-normal text-[52px] text-white ml-8">
              {IDENTITY.fullName.split(' ')[1]}
            </span>
          </h1>
          <p className="font-meta text-[11px] tracking-widest text-white/60 mt-3 ml-8 uppercase">
            {IDENTITY.location}
          </p>
        </div>

        {/* Bottom Folio bar */}
        <footer className="flex justify-between items-center border-t border-white/10 pt-4 w-full text-white/60">
          <span className="font-meta text-[9px] tracking-widest">
            {IDENTITY.serialNumber}
          </span>
          <span className="font-meta text-[9px] tracking-widest text-rose-500 uppercase font-semibold">
            {IDENTITY.classLabel}
          </span>
          <span className="font-meta text-[9px] tracking-[0.2em] font-semibold">
            P. 01
          </span>
        </footer>

      </div>
    </div>
  );
}
