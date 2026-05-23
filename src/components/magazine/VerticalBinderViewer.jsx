import React, { useState, useEffect } from 'react';
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
  const [direction, setDirection] = useState(0); // 1 = forward, -1 = backward
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
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isMobile) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Space') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isMobile]);

  // List of page components
  const pages = [
    { component: <SpreadCover />, id: "cover", dark: true },
    { component: <SpreadContents />, id: "contents" },
    { component: <SpreadAbout />, id: "about" },
    { component: <SpreadSkills />, id: "skills" },
    { component: <SpreadExperience />, id: "experience" },
    { component: <SpreadProjects projectIndex={0} />, id: "retailmind" },
    { component: <SpreadProjects projectIndex={1} />, id: "portfolio" },
    { component: <SpreadContact />, id: "contact", dark: true },
  ];

  // ─── MOBILE VIEW (Elegant Scrollable Feed) ───
  if (isMobile) {
    return (
      <div className="binder-stage flex flex-col gap-10 py-12 px-4 overflow-y-auto min-h-screen">
        <div className="binder-glow" />
        <div className="w-full max-w-[600px] flex flex-col gap-10 z-10 mx-auto">
          {pages.map((page) => (
            <div
              key={page.id}
              className={`binder-page relative w-full shadow-2xl ${page.dark ? 'binder-page-cover' : ''}`}
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

  // ─── DESKTOP VIEW (Cinematic 3D Parallax Slideshow) ───
  const activePage = pages[currentPage];

  // Transition variants for highly cinematic 3D folder slide
  const pageVariants = {
    enter: (dir) => ({
      y: dir > 0 ? '100%' : '-100%',
      rotateX: dir > 0 ? -25 : 25,
      scale: dir > 0 ? 1.05 : 0.95,
      opacity: 0,
    }),
    center: {
      y: 0,
      rotateX: 0,
      scale: 1,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 90, damping: 20 },
        rotateX: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5 },
      },
    },
    exit: (dir) => ({
      y: dir > 0 ? '-100%' : '100%',
      rotateX: dir > 0 ? 25 : -25,
      scale: dir > 0 ? 0.95 : 1.05,
      opacity: 0,
      transition: {
        y: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        rotateX: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <div className="binder-stage">
      {/* Floating pulsing spotlight */}
      <div className="binder-glow" />

      {/* Main Slideshow Frame */}
      <div className="binder-wrap">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`binder-page ${activePage.dark ? 'binder-page-cover' : ''}`}
            style={{
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
            }}
          >
            {activePage.component}
          </motion.div>
        </AnimatePresence>
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
