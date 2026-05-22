import React, { useState, useEffect, useRef, useCallback } from 'react';

const VaultCard = ({ project, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos]   = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
      rafRef.current = null;
    });
  }, []);

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  const isLive = project.url && !project.url.includes('github.com');

  return (
    <>
      <div
        className="w-full transition-all duration-300 cursor-pointer outline-none relative flex flex-col"
        style={{
          backgroundColor: isActive ? '#1a1a1a' : '#161616',
          border: `3px solid ${isActive ? '#F4FF1E' : '#333'}`,
          boxShadow: isActive ? '10px 10px 0px #F4FF1E' : '4px 4px 0px #222',
          transform: isActive ? 'translateY(-4px)' : isHovered ? 'translateY(-2px)' : 'none',
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onKeyDown={e => { if (e.key === 'Enter') onClick(); }}
        tabIndex={0}
        role="button"
        aria-expanded={isActive}
        aria-label={`Project: ${project.title}`}
      >
        {/* Tape decoration */}
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5 rotate-2 z-30 pointer-events-none"
          style={{ backgroundColor: 'rgba(240,237,228,0.15)', border: '1px solid #333' }}
          aria-hidden="true"
        />

        {/* Main content */}
        <div className="relative w-full p-5 flex flex-col min-h-[220px]">

          {/* Header row */}
          <div className="flex justify-between items-start mb-3 pb-2" style={{ borderBottom: '1px solid #333' }}>
            <div className="flex items-center gap-2">
              <span
                className="font-mono text-[11px] font-bold px-2 py-1 uppercase"
                style={{ backgroundColor: '#F0EDE4', color: '#000' }}
              >
                {project.type}
              </span>
              {isLive && (
                <span
                  className="font-mono text-[9px] font-bold px-2 py-1 uppercase animate-pulse"
                  style={{ backgroundColor: '#F4FF1E', color: '#000', border: '1px solid #000' }}
                >
                  ● LIVE
                </span>
              )}
            </div>
            <span className="font-mono text-[12px] font-bold" style={{ color: '#555' }}>
              [{project.year}]
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-[22px] sm:text-[24px] font-bold leading-tight mb-2 uppercase" style={{ color: '#F0EDE4' }}>
            {project.title}
          </h3>

          {/* Tech */}
          <div className="font-mono text-[11px] font-bold mb-3" style={{ color: '#F4FF1E' }}>
            ► {project.tech}
          </div>

          {/* Description */}
          <p className="font-mono text-[12px] sm:text-[13px] leading-[1.65] mt-auto" style={{ color: '#888' }}>
            {project.desc}
          </p>

          {/* Barcode decoration */}
          {!isActive && (
            <div className="absolute bottom-4 right-4 flex gap-[2px] h-4 opacity-20" aria-hidden="true">
              {[1,2,1,3,1,2,1].map((w, i) => (
                <div key={i} style={{ width: `${w * 2}px`, backgroundColor: '#F0EDE4' }} />
              ))}
            </div>
          )}
        </div>

        {/* Expanded dossier */}
        {isActive && (
          <div
            className="w-full relative overflow-hidden animate-unroll origin-top pb-5"
            style={{ borderTop: '2px solid #F4FF1E', backgroundColor: '#0f0f0f' }}
          >
            {/* File tab */}
            <div
              className="absolute top-0 right-0 font-mono text-[9px] font-bold px-3 py-1 uppercase"
              style={{ backgroundColor: '#F4FF1E', color: '#000' }}
            >
              FILE_NO: {project.id ?? '00'}
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">

              {/* Tech stack */}
              <div
                className="p-3 transform -rotate-1 hover:rotate-0 transition-transform"
                style={{ backgroundColor: '#161616', border: '2px solid #F4FF1E' }}
              >
                <div className="font-mono text-[9px] uppercase mb-2 font-bold flex justify-between" style={{ color: '#F4FF1E' }}>
                  <span>TECH_STACK</span><span>[V.2]</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tech.split(',').map(t => (
                    <span
                      key={t.trim()}
                      className="font-mono text-[10px] font-bold px-2 py-1 uppercase"
                      style={{ backgroundColor: '#0a0a0a', color: '#F0EDE4', border: '1px solid #333' }}
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Execution log */}
              <div
                className="p-3 transform rotate-1 hover:rotate-0 transition-transform"
                style={{ backgroundColor: '#0a0a0a', border: '2px solid #FF1EC7' }}
              >
                <div className="font-mono text-[9px] uppercase mb-2 font-bold" style={{ color: '#FF1EC7' }}>
                  EXECUTION_LOG
                </div>
                <div className="font-mono text-[11px] space-y-1 overflow-hidden h-[56px]" style={{ color: '#00E5FF' }} aria-live="polite">
                  <div className="animate-typewriter-1">&gt; Initializing...</div>
                  <div className="animate-typewriter-2">&gt; Accessing Repo...</div>
                  <div className="animate-typewriter-3">&gt; Build: 100%</div>
                  <div className="animate-pulse">&gt; Ready_</div>
                </div>
              </div>

              {/* CTA button */}
              <div className="col-span-1 sm:col-span-2 mt-1">
                <a
                  href={project.url ?? '#'}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${project.title}`}
                  className="block w-full p-4 text-center font-display text-[22px] font-bold uppercase transition-all group"
                  style={{
                    backgroundColor: '#F4FF1E',
                    color: '#000',
                    border: '3px solid #F0EDE4',
                    boxShadow: '5px 5px 0px #F0EDE4',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#FF1EC7'; e.currentTarget.style.boxShadow = '5px 5px 0px #FF1EC7'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F4FF1E'; e.currentTarget.style.boxShadow = '5px 5px 0px #F0EDE4'; }}
                >
                  {isLive ? 'VIEW LIVE ↗' : 'EXECUTE PAYLOAD'}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cursor tooltip — desktop hover only */}
      {isHovered && !isActive && (
        <div
          className="fixed pointer-events-none z-[100] p-2 flex items-center justify-center animate-pop-in"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20,
            width: 220,
            height: 140,
            transform: 'rotate(2deg)',
            backgroundColor: '#161616',
            border: '3px solid #F4FF1E',
            boxShadow: '6px 6px 0px #F4FF1E',
          }}
          aria-hidden="true"
        >
          <div className="font-display text-[18px] font-bold uppercase tracking-[2px] text-center" style={{ color: '#F0EDE4' }}>
            {project.title}<br />
            <span style={{ color: '#F4FF1E', fontSize: '14px' }}>
              {isLive ? '● LIVE' : '[ PREVIEW_NA ]'}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default VaultCard;
