import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * VaultCard — a project entry in the "Project Archive" section.
 *
 * Click to expand a "Bento Dossier" with tech stack, execution log,
 * and a link button. Hovering shows a cursor-trailing preview tooltip.
 */
const VaultCard = ({ project, isActive, onClick }) => {
  const [isHovered,   setIsHovered]   = useState(false);
  const [mousePos,    setMousePos]    = useState({ x: 0, y: 0 });
  // Use a ref to throttle mousemove updates to once per animation frame
  const rafRef = useRef(null);

  // ── Throttled mouse tracking — avoids a re-render on every pixel ──────────
  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) return; // already scheduled, skip
    rafRef.current = requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
      rafRef.current = null;
    });
  }, []);

  // Cancel any pending RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        className={`
          w-full transition-all duration-300 cursor-pointer outline-none relative
          bg-white border-4 border-black flex flex-col
          ${isActive
            ? 'shadow-[12px_12px_0px_#000] -translate-y-2 z-20 bg-neon-yellow'
            : 'shadow-[4px_4px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-1 z-10'
          }
        `}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
        tabIndex={0}
        role="button"
        aria-expanded={isActive}
        aria-label={`Project: ${project.title}`}
      >
        {/* Tape decoration */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 border-2 border-black/20 rotate-2 z-30 pointer-events-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(2px)' }}
        />

        {/* ── Main Card Content (always visible) ── */}
        <div className="relative w-full p-6 flex flex-col min-h-[240px]">
          {/* Header */}
          <div className="flex justify-between items-start mb-4 border-b-4 border-black pb-2">
            <div className="flex items-center gap-2">
              <div className="font-mono text-[12px] font-bold text-white bg-black px-2 py-1 uppercase">
                {project.type}
              </div>
              {/* LIVE badge — shown when URL is a deployed site (not just github.com) */}
              {project.url && !project.url.includes('github.com') && (
                <div className="font-mono text-[10px] font-bold text-black bg-neon-yellow border-2 border-black px-2 py-1 uppercase animate-pulse">
                  ● LIVE
                </div>
              )}
            </div>
            <div className="font-mono text-[14px] text-black font-bold">
              [{project.year}]
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-[24px] font-bold text-black leading-tight mb-2 uppercase">
            {project.title}
          </h3>

          {/* Tech Stack */}
          <div className="font-mono text-[12px] font-bold text-black mb-4">
            ► {project.tech}
          </div>

          {/* Description */}
          <p className="font-mono text-[14px] text-black font-medium leading-[1.6] mt-auto">
            {project.desc}
          </p>

          {/* Decorative barcode (hidden when expanded) */}
          {!isActive && (
            <div className="absolute bottom-4 right-4 flex gap-1 h-4 opacity-30" aria-hidden="true">
              <div className="w-1 bg-black" />
              <div className="w-2 bg-black" />
              <div className="w-1 bg-black" />
              <div className="w-[2px] bg-black" />
              <div className="w-2 bg-black" />
            </div>
          )}
        </div>

        {/* ── Bento Dossier — expanded view ── */}
        {isActive && (
          <div className="w-full bg-[#f1e4c0] border-t-4 border-black relative overflow-hidden animate-unroll origin-top pb-6">
            {/* Folder Tab */}
            <div className="absolute top-0 right-0 w-24 h-6 bg-black text-white text-[10px] font-mono font-bold flex items-center justify-center uppercase tracking-tighter">
              FILE_NO: {project.id ?? '00'}
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Project ID block */}
              <div className="col-span-1 sm:col-span-2 bg-white border-4 border-black p-3 shadow-[4px_4px_0px_#000] relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-neon-pink rotate-45 border-b-4 border-l-4 border-black" aria-hidden="true" />
                <div className="font-mono text-[10px] text-gray-500 uppercase mb-1 font-bold">Project Identification</div>
                <div className="font-display text-[22px] text-black font-bold uppercase tracking-tight">
                  {project.title}
                </div>
              </div>

              {/* Tech Stack block */}
              <div className="bg-neon-blue border-4 border-black p-3 shadow-[4px_4px_0px_#000] transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="font-mono text-[10px] text-black/60 uppercase mb-2 font-bold flex justify-between">
                  <span>Tech_Stack</span>
                  <span>[V.2]</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(',').map((t) => (
                    <span key={t.trim()} className="bg-white border-2 border-black px-2 py-1 text-[11px] font-mono font-bold uppercase">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Execution Log block */}
              <div className="bg-black border-4 border-black p-3 shadow-[4px_4px_0px_var(--color-neon-pink)] transform rotate-1 hover:rotate-0 transition-transform">
                <div className="font-mono text-[10px] text-neon-pink uppercase mb-2 font-bold">Execution_Log</div>
                <div className="font-mono text-[11px] text-[#0f0] space-y-1 overflow-hidden h-[60px]" aria-live="polite">
                  <div className="animate-typewriter-1">&gt; Initializing...</div>
                  <div className="animate-typewriter-2">&gt; Accessing Repo...</div>
                  <div className="animate-typewriter-3">&gt; Build Success: 100%</div>
                  <div className="animate-pulse">&gt; Ready_</div>
                </div>
              </div>

              {/* Action button */}
              <div className="col-span-1 sm:col-span-2 mt-2">
                <a
                  href={project.url ?? '#'}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${project.title} in a new tab`}
                  className="block w-full bg-neon-pink border-4 border-black p-4 text-center font-display text-[24px] font-bold uppercase shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all group"
                >
                  <span className="group-hover:tracking-widest transition-all">
                    {project.url && !project.url.includes('github.com') ? 'VIEW LIVE ↗' : 'EXECUTE PAYLOAD'}
                  </span>
                </a>
              </div>

              {/* Approved stamp */}
              <div className="absolute bottom-[-10px] right-[10px] pointer-events-none opacity-20 transform -rotate-12" aria-hidden="true">
                <div className="border-[6px] border-red-600 px-6 py-2 rounded-lg">
                  <span className="text-red-600 font-display text-[40px] font-bold uppercase tracking-[8px]">
                    APPROVED
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Cursor-trailing preview tooltip (only when hovered, not expanded) ── */}
      {isHovered && !isActive && (
        <div
          className="fixed pointer-events-none z-[100] border-4 border-black bg-neon-blue shadow-[8px_8px_0px_#000] p-2 flex items-center justify-center animate-pop-in"
          style={{
            left:      mousePos.x + 20,
            top:       mousePos.y + 20,
            width:     240,
            height:    160,
            transform: 'rotate(2deg)',
          }}
          aria-hidden="true"
        >
          {/* Hatching overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-20"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px)' }}
          />
          <div className="font-display text-[20px] font-bold text-black uppercase tracking-[2px] text-center">
            {project.title}<br />[ PREVIEW_NA ]
          </div>
        </div>
      )}
    </>
  );
};

export default VaultCard;
