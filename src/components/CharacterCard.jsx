import React from 'react';
import { IDENTITY, SOCIALS } from '../data/portfolio';

const CharacterCard = () => {
  return (
    <div className="w-full max-w-[850px] mx-auto mt-8">
      <div
        className="relative w-full overflow-hidden flex flex-col md:flex-row p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1 gap-6 sm:gap-8"
        style={{
          backgroundColor: '#161616',
          border: '3px solid #F0EDE4',
          boxShadow: '10px 10px 0px #F4FF1E',
        }}
      >
        {/* ── Left: Portrait ── */}
        <div className="flex flex-col gap-4 w-full md:w-[260px] shrink-0 relative z-10">
          <div
            className="w-full aspect-[3/4] relative overflow-hidden flex items-center justify-center group cursor-pointer"
            style={{ border: '3px solid #F0EDE4', boxShadow: '4px 4px 0px #F4FF1E' }}
            role="img"
            aria-label="Wafiq Nawaz profile photo"
          >
            {/* Halftone overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none opacity-[0.06]"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #F4FF1E 0px, #F4FF1E 1px, transparent 1px, transparent 6px)' }}
              aria-hidden="true"
            />
            <img
              src="/profile.jpg"
              alt="Wafiq Nawaz"
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'contrast(1.08) saturate(0.9)' }}
            />
            {/* Glitch hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black flex flex-col items-center justify-center pointer-events-none hover-glitch z-20" aria-hidden="true">
              <div className="font-display text-[28px] tracking-[8px] font-bold mix-blend-difference z-20" style={{ color: '#F4FF1E' }}>
                WAFIQ.EXE
              </div>
              <div className="absolute top-1/4  left-0 w-full h-2 mix-blend-exclusion" style={{ backgroundColor: '#FF1EC7' }} />
              <div className="absolute bottom-1/4 left-0 w-full h-4 mix-blend-exclusion" style={{ backgroundColor: '#00E5FF' }} />
              <div className="absolute top-1/2  left-0 w-full h-1 mix-blend-exclusion" style={{ backgroundColor: '#F4FF1E' }} />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }} />
            </div>
          </div>

          {/* Quote */}
          <blockquote
            className="font-mono text-[12px] font-bold leading-[1.6] uppercase text-center p-3 transform rotate-1"
            style={{ backgroundColor: '#F4FF1E', color: '#000', border: '3px solid #F0EDE4', boxShadow: '3px 3px 0px #F0EDE4' }}
          >
            {IDENTITY.quote}
          </blockquote>
        </div>

        {/* ── Right: Details ── */}
        <div className="flex flex-col flex-1 relative z-10 justify-between">

          {/* Header */}
          <div className="flex flex-col pb-4 mb-4 relative" style={{ borderBottom: '2px solid #333' }}>
            <div className="flex justify-between items-start mb-3">
              <h2
                className="text-[42px] sm:text-[52px] leading-none m-0 transform -rotate-2 origin-bottom-left"
                style={{ fontFamily: "'Style Script', cursive", color: '#F0EDE4', textShadow: '3px 3px 0px #F4FF1E' }}
              >
                {IDENTITY.fullName}
              </h2>
              <div
                className="font-mono px-3 py-1 text-[13px] uppercase tracking-wider font-bold transform rotate-3 shrink-0"
                style={{ backgroundColor: '#FF1EC7', color: '#000', border: '2px solid #F0EDE4', boxShadow: '3px 3px 0px #F0EDE4' }}
              >
                {IDENTITY.statusBadge}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <span className="dymo-label" style={{ backgroundColor: '#F4FF1E' }}>Alias: {IDENTITY.alias}</span>
              <span className="dymo-label" style={{ backgroundColor: '#1F6BED', transform: 'rotate(2deg)' }}>Class: {IDENTITY.classLabel}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4 flex-1">
            {[
              { label: 'Stack',   value: 'REACT',    hover: '#F4FF1E' },
              { label: 'Backend', value: 'PYTHON',   hover: '#FF1EC7' },
              { label: 'Domain',  value: 'SECURITY', hover: '#00E5FF' },
            ].map(({ label, value, hover }) => (
              <div
                key={label}
                className="flex flex-col justify-center p-4 transition-all duration-200 group"
                style={{ backgroundColor: '#1a1a1a', border: '2px solid #333', boxShadow: '3px 3px 0px #222' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = hover; e.currentTarget.style.borderColor = hover; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.borderColor = '#333'; }}
              >
                <span className="font-mono text-[11px] uppercase mb-1 font-bold" style={{ color: '#888' }}>{label}</span>
                <span className="font-display text-[28px] leading-none mt-1 font-bold" style={{ color: '#F0EDE4' }}>{value}</span>
              </div>
            ))}

            {/* Socials */}
            <div className="flex flex-col justify-center p-4" style={{ backgroundColor: '#0a0a0a', border: '2px solid #333' }}>
              <span className="font-mono text-[11px] uppercase mb-2 font-bold" style={{ color: '#888' }}>Socials</span>
              <div className="flex gap-4 mt-auto items-center">
                <a href={SOCIALS.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile"
                  className="transition-all hover:scale-110" style={{ color: '#F0EDE4' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F4FF1E'}
                  onMouseLeave={e => e.currentTarget.style.color = '#F0EDE4'}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 mt-2" style={{ borderTop: '2px solid #333' }}>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] uppercase mb-[2px] font-bold" style={{ color: '#888' }}>Location</span>
              <span className="font-mono text-[13px] font-bold" style={{ color: '#F0EDE4' }}>{IDENTITY.location}</span>
              <span className="font-mono text-[10px] mt-1" style={{ color: '#555' }}>{IDENTITY.serialNumber}</span>
            </div>
            <div className="flex gap-1 h-7 opacity-30" aria-hidden="true">
              {[1,2,1,3,1,2,1].map((w, i) => (
                <div key={i} style={{ width: `${w * 4}px`, backgroundColor: '#F4FF1E' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
