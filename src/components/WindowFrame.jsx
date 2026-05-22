import React from 'react';

const WindowFrame = ({ children }) => {
  return (
    <div className="min-h-screen relative z-10 flex flex-col font-display" style={{ backgroundColor: 'var(--bg-color)' }}>
      
      {/* Global Hazard Tape Border — thinner on mobile */}
      <div className="fixed inset-0 z-[100] pointer-events-none border-[6px] sm:border-[10px] md:border-[12px]" style={{
        borderImage: 'repeating-linear-gradient(45deg, var(--text-color), var(--text-color) 20px, var(--accent-color) 20px, var(--accent-color) 40px) 12',
        borderStyle: 'solid'
      }}></div>


      {/* Heavy Risograph / Printed Paper Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.06] mix-blend-multiply" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
      }}></div>

      {/* CMYK Halftone Dots Simulation Overlay (Very subtle) */}
      <div className="fixed inset-0 z-40 pointer-events-none opacity-[0.03] mix-blend-color-burn" style={{
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
        backgroundSize: '4px 4px'
      }}></div>

      {/* Slowly Drifting Scan Line Effect */}
      <div className="fixed inset-0 z-40 pointer-events-none opacity-20 mix-blend-overlay" style={{
        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 51%, transparent 51%)',
        backgroundSize: '100% 8px',
        animation: 'scanDrift 20s linear infinite'
      }}></div>

      {/* Content Area */}
      <div className="flex-1 relative z-20 flex flex-col">
        {children}
      </div>

      {/* Corner crosshair markers — blueprint aesthetic */}
      <div className="fixed top-8 left-8 z-[99] pointer-events-none hidden sm:block" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" opacity="0.3">
          <line x1="12" y1="0" x2="12" y2="8" />
          <line x1="0" y1="12" x2="8" y2="12" />
          <circle cx="12" cy="12" r="2" fill="black" />
        </svg>
      </div>
      <div className="fixed top-8 right-8 z-[99] pointer-events-none hidden sm:block" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" opacity="0.3">
          <line x1="12" y1="0" x2="12" y2="8" />
          <line x1="16" y1="12" x2="24" y2="12" />
          <circle cx="12" cy="12" r="2" fill="black" />
        </svg>
      </div>
      <div className="fixed bottom-8 left-8 z-[99] pointer-events-none hidden sm:block" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" opacity="0.3">
          <line x1="12" y1="16" x2="12" y2="24" />
          <line x1="0" y1="12" x2="8" y2="12" />
          <circle cx="12" cy="12" r="2" fill="black" />
        </svg>
      </div>
      <div className="fixed bottom-8 right-8 z-[99] pointer-events-none hidden sm:block" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" opacity="0.3">
          <line x1="12" y1="16" x2="12" y2="24" />
          <line x1="16" y1="12" x2="24" y2="12" />
          <circle cx="12" cy="12" r="2" fill="black" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanDrift {
          from { background-position: 0 0; }
          to { background-position: 0 100vh; }
        }
      `}} />
    </div>
  );
};

export default WindowFrame;
