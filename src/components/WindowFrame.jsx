import React from 'react';

const WindowFrame = ({ children }) => {
  return (
    <div className="min-h-screen relative z-10 flex flex-col font-display" style={{ backgroundColor: 'var(--bg-color)' }}>

      {/* Hazard tape border — yellow/dark on dark bg, thinner on mobile */}
      <div className="fixed inset-0 z-[100] pointer-events-none border-[6px] sm:border-[10px] md:border-[12px]" style={{
        borderImage: 'repeating-linear-gradient(45deg, #F0EDE4, #F0EDE4 20px, #F4FF1E 20px, #F4FF1E 40px) 12',
        borderStyle: 'solid'
      }} />

      {/* Noise texture overlay — subtle grain */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-screen" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
      }} />

      {/* Scan line drift — very subtle on dark */}
      <div className="fixed inset-0 z-40 pointer-events-none opacity-[0.06]" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)',
        backgroundSize: '100% 4px',
        animation: 'scanDrift 30s linear infinite'
      }} />

      {/* Content */}
      <div className="flex-1 relative z-20 flex flex-col">
        {children}
      </div>

      {/* Corner crosshair markers — light on dark */}
      {[
        { pos: 'top-8 left-8',    lines: [{ x1:12,y1:0,x2:12,y2:8 }, { x1:0,y1:12,x2:8,y2:12 }] },
        { pos: 'top-8 right-8',   lines: [{ x1:12,y1:0,x2:12,y2:8 }, { x1:16,y1:12,x2:24,y2:12 }] },
        { pos: 'bottom-8 left-8', lines: [{ x1:12,y1:16,x2:12,y2:24 }, { x1:0,y1:12,x2:8,y2:12 }] },
        { pos: 'bottom-8 right-8',lines: [{ x1:12,y1:16,x2:12,y2:24 }, { x1:16,y1:12,x2:24,y2:12 }] },
      ].map(({ pos, lines }, i) => (
        <div key={i} className={`fixed ${pos} z-[99] pointer-events-none hidden sm:block`} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4FF1E" strokeWidth="1.5" opacity="0.4">
            {lines.map((l, j) => <line key={j} {...l} />)}
            <circle cx="12" cy="12" r="1.5" fill="#F4FF1E" />
          </svg>
        </div>
      ))}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanDrift {
          from { background-position: 0 0; }
          to   { background-position: 0 100vh; }
        }
      `}} />
    </div>
  );
};

export default WindowFrame;
