import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpreadCover from '../spreads/SpreadCover';
import SpreadContents from '../spreads/SpreadContents';
import SpreadAbout from '../spreads/SpreadAbout';
import SpreadSkills from '../spreads/SpreadSkills';
import SpreadExperience from '../spreads/SpreadExperience';
import SpreadProjects from '../spreads/SpreadProjects';
import SpreadContact from '../spreads/SpreadContact';
import PageNav from './PageNav';

const TOTAL_PAGES = 8;

export default function VerticalBinderViewer() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor viewport size for mobile layout fallback
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextPage = () => {
    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // List of page components
  const pages = [
    { component: <SpreadCover />, id: "cover" },
    { component: <SpreadContents />, id: "contents" },
    { component: <SpreadAbout />, id: "about" },
    { component: <SpreadSkills />, id: "skills" },
    { component: <SpreadExperience />, id: "experience" },
    { component: <SpreadProjects projectIndex={0} />, id: "retailmind" },
    { component: <SpreadProjects projectIndex={1} />, id: "portfolio" },
    { component: <SpreadContact />, id: "contact" },
  ];

  // ─── MOBILE VIEW (Elegant Scrollable Feed) ───
  if (isMobile) {
    return (
      <div className="binder-stage flex flex-col gap-10 py-12 px-4 overflow-y-auto min-h-screen">
        <div className="binder-glow" />
        <div className="w-full max-w-[600px] flex flex-col gap-10 z-10 mx-auto">
          {pages.map((page, idx) => (
            <div
              key={page.id}
              className="binder-page relative w-full shadow-2xl"
              style={{ position: 'relative' }}
            >
              {page.component}
            </div>
          ))}
        </div>
        <footer className="text-center font-meta text-[10px] text-white/40 tracking-widest pt-4 select-none uppercase z-10">
          ZALULU PORTFOLIO · MOBILE ARCHIVE
        </footer>
      </div>
    );
  }

  // ─── DESKTOP VIEW (3D Top-Bound Notebook Flipbook) ───
  return (
    <div className="binder-stage">
      {/* Warm ambient studio lighting backdrop */}
      <div className="binder-glow" />

      {/* Main Magazine Frame */}
      <div className="binder-wrap">
        
        {/* Top binder Seam & Clips */}
        <div className="binder-seam select-none pointer-events-none">
          <div className="binder-ring" />
          <div className="binder-ring" />
          <div className="binder-ring" />
          <div className="binder-ring" />
          <div className="binder-ring" />
          <div className="binder-ring" />
        </div>

        {/* Dynamic 3D stacked pages */}
        {pages.map((page, index) => {
          const isFlipped = index < currentPage;
          const isActive = index === currentPage;
          
          // Z-indexing calculation:
          // - Active page is on top (zIndex = 100)
          // - Flipped pages are at the bottom, stacked sequentially
          // - Underneath pages are stacked sequentially beneath active
          let zIndex = 10;
          if (isActive) {
            zIndex = 100;
          } else if (isFlipped) {
            zIndex = 20 + index;
          } else {
            zIndex = 90 - index;
          }

          // Depth offset styling for sheets layered flat underneath
          const depthOffset = !isFlipped && !isActive 
            ? (index - currentPage) * 1.5 
            : 0;
          
          const scaleOffset = !isFlipped && !isActive
            ? 1 - (index - currentPage) * 0.004
            : 1;

          return (
            <motion.div
              key={page.id}
              className="binder-page"
              style={{
                zIndex,
                pointerEvents: isActive ? 'auto' : 'none',
                transformOrigin: 'top center',
              }}
              initial={false}
              animate={{
                rotateX: isFlipped ? -135 : 0, // -135deg keeps it flipped back in 3D but readable from top angle if needed
                y: isFlipped ? -15 : depthOffset,
                scale: scaleOffset,
                opacity: isFlipped ? 0 : 1, // Soft fade out as it flips over to avoid visual clutter
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1], // premium custom ease-out
              }}
            >
              {/* Soft dark shadow sheet overlay that darkens lower pages under active page */}
              {!isActive && !isFlipped && (
                <motion.div 
                  className="absolute inset-0 bg-black/40 pointer-events-none z-[101]"
                  animate={{ opacity: (index - currentPage) * 0.15 }}
                  transition={{ duration: 0.85 }}
                />
              )}

              {/* Flipped page shadow simulation */}
              {isFlipped && (
                <div className="absolute inset-0 bg-[#0D0C0A]/85 pointer-events-none z-[101]" />
              )}

              {page.component}
            </motion.div>
          );
        })}
      </div>

      {/* Floating Tactical Navigation controls */}
      <PageNav
        onPrev={prevPage}
        onNext={nextPage}
        current={currentPage}
        total={TOTAL_PAGES}
      />
    </div>
  );
}
