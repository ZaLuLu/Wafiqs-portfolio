import React from 'react';
import { IDENTITY, SOCIALS } from '../data/portfolio';

/**
 * CharacterCard — the "Player 1" dossier ID badge in the About section.
 *
 * Content is driven entirely by src/data/portfolio.js — see IDENTITY and SOCIALS exports.
 *
 * Displays name, alias, class, stats, and social links.
 * Hovering over the portrait triggers a glitch animation.
 *
 * Styles for .dymo-label and .hover-glitch are defined globally in index.css.
 */
const CharacterCard = () => {
  return (
    <div className="w-full max-w-[850px] mx-auto mt-8">
      <div className="relative w-full border-4 border-black bg-white shadow-[12px_12px_0px_#000] overflow-hidden flex flex-col md:flex-row p-6 transition-transform duration-300 hover:-translate-y-2 gap-8">

        {/* ── Left Column: Portrait ── */}
        <div className="flex flex-col gap-4 w-full md:w-[280px] shrink-0 relative z-10">

          {/* Portrait frame */}
          <div
            className="w-full aspect-[3/4] border-4 border-black bg-gray-100 relative overflow-hidden shadow-[4px_4px_0px_#000] flex items-center justify-center group cursor-pointer"
            role="img"
            aria-label="Wafiq Nawaz profile photo"
          >
            {/* Halftone texture overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none opacity-10"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px)' }}
              aria-hidden="true"
            />

            {/* Profile photo — cropped to portrait via object-fit */}
            <img
              src="/profile.jpg"
              alt="Wafiq Nawaz"
              className="absolute inset-0 w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: 'contrast(1.05) saturate(0.95)',
              }}
            />

            {/* Hover state: glitch overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black flex flex-col items-center justify-center pointer-events-none hover-glitch z-20" aria-hidden="true">
              <div className="text-white font-display text-[32px] tracking-[8px] font-bold mix-blend-difference z-20">
                WAFIQ.EXE
              </div>
              <div className="absolute top-1/4  left-0 w-full h-2 bg-neon-pink   mix-blend-exclusion" />
              <div className="absolute bottom-1/4 left-0 w-full h-4 bg-neon-blue  mix-blend-exclusion" />
              <div className="absolute top-1/2  left-0 w-full h-1 bg-neon-yellow mix-blend-exclusion" />
              {/* Scanlines */}
              <div
                className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }}
              />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="bg-neon-yellow text-black font-mono text-[14px] font-bold leading-[1.6] uppercase text-center p-4 shadow-[4px_4px_0px_#000] border-4 border-black mt-auto transform rotate-1">
            {IDENTITY.quote}
          </blockquote>
        </div>

        {/* ── Right Column: Details & Stats ── */}
        <div className="flex flex-col flex-1 relative z-10 justify-between">

          {/* Header */}
          <div className="flex flex-col border-b-4 border-black pb-4 mb-4 relative">
            {/* Tape decoration */}
            <div
              className="absolute -top-10 -right-4 w-16 h-8 rotate-12 z-20 pointer-events-none border-2 border-black/20"
              style={{ backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(2px)' }}
              aria-hidden="true"
            />

            <div className="flex justify-between items-start mb-4">
              <h2
                className="text-[52px] text-black leading-none m-0 transform -rotate-2 origin-bottom-left"
                style={{
                  fontFamily: "'Style Script', cursive",
                  textShadow: '4px 4px 0px var(--color-neon-blue)',
                }}
              >
                {IDENTITY.fullName}
              </h2>
              <div className="bg-neon-pink text-black font-mono px-3 py-1 text-[16px] uppercase tracking-wider font-bold shadow-[4px_4px_0px_#000] border-4 border-black transform rotate-3">
                {IDENTITY.statusBadge}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-start items-start gap-4 mt-4">
              <span className="dymo-label bg-black">Alias: {IDENTITY.alias}</span>
              <span className="dymo-label bg-neon-blue text-black" style={{ transform: 'rotate(2deg)' }}>Class: {IDENTITY.classLabel}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-4 flex-1">
            <div className="flex flex-col justify-center bg-white border-4 border-black p-4 shadow-[4px_4px_0px_#000] hover:bg-neon-blue transition-colors group">
              <span className="font-mono text-[14px] text-black uppercase mb-1 font-bold group-hover:text-white">Stack</span>
              <span className="font-display text-[32px] text-black leading-none mt-1 font-bold group-hover:text-white">REACT</span>
            </div>
            <div className="flex flex-col justify-center bg-white border-4 border-black p-4 shadow-[4px_4px_0px_#000] hover:bg-neon-pink transition-colors group">
              <span className="font-mono text-[14px] text-black uppercase mb-1 font-bold">Backend</span>
              <span className="font-display text-[32px] text-black leading-none mt-1 font-bold">PYTHON</span>
            </div>
            <div className="flex flex-col justify-center bg-white border-4 border-black p-4 shadow-[4px_4px_0px_#000] hover:bg-neon-yellow transition-colors group">
              <span className="font-mono text-[14px] text-black uppercase mb-1 font-bold">Domain</span>
              <span className="font-display text-[32px] text-black leading-none mt-1 font-bold">SECURITY</span>
            </div>

            {/* Socials */}
            <div className="flex flex-col justify-center bg-black border-4 border-black p-4 shadow-[4px_4px_0px_#000]">
              <span className="font-mono text-[14px] text-white uppercase mb-2 font-bold">Socials</span>
              <div className="flex gap-5 mt-auto items-center">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="text-white hover:text-neon-blue transition-colors transform hover:scale-110"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="text-white hover:text-neon-pink transition-colors transform hover:scale-110"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t-4 border-black pt-4 mt-2">
            <div className="flex flex-col">
              <span className="font-mono text-[12px] text-black uppercase mb-[2px] font-bold">Location</span>
              <span className="font-mono text-[14px] text-black font-bold tracking-[1px]">{IDENTITY.location}</span>
              <span className="font-mono text-[11px] text-black/60 font-bold mt-1">{IDENTITY.serialNumber}</span>
            </div>
            {/* Decorative barcode */}
            <div className="flex gap-1 h-8 group hover:scale-x-110 transition-transform origin-right" aria-hidden="true">
              <div className="w-1 bg-black" />
              <div className="w-2 bg-black" />
              <div className="w-1 bg-black" />
              <div className="w-3 bg-black" />
              <div className="w-1 bg-black" />
              <div className="w-2 bg-black" />
              <div className="w-1 bg-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
