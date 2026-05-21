import React from 'react';

/**
 * BrutalistCursor — replaces the default OS cursor with a custom crosshair.
 *
 * – Default state : crosshair (+) shape
 * – Hover state   : tilted neon square with pinging dot
 * – Click         : square ripple burst at click position
 *
 * Global styles (cursor:none, .ripple, @keyframes ripple-effect)
 * are defined in index.css.
 */
import { useState, useEffect } from 'react';

const BrutalistCursor = () => {
  const [position,   setPosition]   = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples,    setRipples]    = useState([]);

  useEffect(() => {
    // ── Position tracker ────────────────────────────────────────────────────
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });

    // ── Hover-state detector — checks for interactive elements ───────────────
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === 'button'  ||
        target.tagName.toLowerCase() === 'a'       ||
        !!target.closest('button')                 ||
        !!target.closest('a')                      ||
        target.classList.contains('cursor-pointer')||
        !!target.closest('.cursor-pointer');
      setIsHovering(isClickable);
    };

    // ── Click ripple ─────────────────────────────────────────────────────────
    const handleClick = (e) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 500);
    };

    // { passive: true } — these listeners never call preventDefault, so marking
    // them passive allows the browser to optimise scroll performance.
    window.addEventListener('mousemove', updatePosition,  { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('click',     handleClick,     { passive: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click',     handleClick);
    };
  }, []);

  // Shared translate string for both cursor layers
  const translate = `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`;

  return (
    <>
      {/* ── Click ripples ── */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
          aria-hidden="true"
        />
      ))}

      {/* ── Primary cursor ── */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{ transform: translate }}
        aria-hidden="true"
      >
        {isHovering ? (
          // Hover: tilted neon square with pinging dot
          <div
            className="w-10 h-10 border-4 border-black flex items-center justify-center rotate-12 shadow-[4px_4px_0px_#000] transition-all duration-150"
            style={{
              backgroundColor: 'var(--accent-color)',
              borderColor:     'var(--text-color)',
              boxShadow:       '4px 4px 0px var(--text-color)',
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: 'var(--text-color)' }}
            />
          </div>
        ) : (
          // Default: crosshair
          <div className="relative flex items-center justify-center transition-all duration-150">
            <div className="absolute w-8 h-1 bg-black" style={{ backgroundColor: 'var(--text-color)' }} />
            <div className="absolute w-1 h-8 bg-black" style={{ backgroundColor: 'var(--text-color)' }} />
            <div
              className="w-3 h-3 bg-white border-2 border-black z-10"
              style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--card-bg)' }}
            />
          </div>
        )}
      </div>

      {/* ── Ghost trailing cursor (lagged by 300ms transition) ── */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-30 transition-all duration-300 ease-out"
        style={{ transform: translate }}
        aria-hidden="true"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-8 h-1 bg-black" style={{ backgroundColor: 'var(--text-color)' }} />
          <div className="absolute w-1 h-8 bg-black" style={{ backgroundColor: 'var(--text-color)' }} />
        </div>
      </div>
    </>
  );
};

export default BrutalistCursor;
