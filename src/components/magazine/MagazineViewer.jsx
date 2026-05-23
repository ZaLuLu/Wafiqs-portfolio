import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import SpreadCover from '../spreads/SpreadCover';
import SpreadContents from '../spreads/SpreadContents';
import SpreadAbout from '../spreads/SpreadAbout';
import SpreadSkills from '../spreads/SpreadSkills';
import SpreadProjects from '../spreads/SpreadProjects';
import SpreadExperience from '../spreads/SpreadExperience';
import SpreadContact from '../spreads/SpreadContact';
import PageNav from './PageNav';

const TOTAL_PAGES = 10;

export default function MagazineViewer() {
  const bookRef = useRef(null);
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
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  // ─── MOBILE VIEW (Elegant Scrollable Feed) ───
  if (isMobile) {
    return (
      <div className="magazine-stage flex flex-col gap-10 py-12 px-4 overflow-y-auto">
        <div className="magazine-glow" />
        <div className="w-full max-w-[600px] flex flex-col gap-12 z-10">
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadCover /></div>
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadContents /></div>
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadAbout /></div>
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadSkills /></div>
          
          {/* Projects spreads */}
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadProjects projectIndex={0} side="left" /></div>
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadProjects projectIndex={0} side="right" /></div>
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadProjects projectIndex={1} side="left" /></div>
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadProjects projectIndex={1} side="right" /></div>
          
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadExperience /></div>
          <div className="page shadow-xl border border-black/10 aspect-[550/780] min-h-[600px]"><SpreadContact /></div>
        </div>
        <footer className="text-center font-meta text-[10px] text-white/40 tracking-widest pt-4 select-none uppercase">
          WN PORTFOLIO · MOBILE EDITORIAL VIEW
        </footer>
      </div>
    );
  }

  // ─── DESKTOP VIEW (Tactile Page Flip Magazine) ───
  return (
    <div className="magazine-stage">
      {/* Warm ambient studio lighting backdrop */}
      <div className="magazine-glow" />

      {/* Main Magazine Frame */}
      <motion.div
        className="magazine-wrap"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        <HTMLFlipBook
          ref={bookRef}
          width={550}
          height={780}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          flippingTime={800}
          usePortrait={false}
          startPage={0}
          drawShadow={true}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="magazine-book select-none"
        >
          {/* Page 1 (Front Cover) */}
          <div className="page border-r border-[#1A1714]/10"><SpreadCover /></div>
          
          {/* Page 2 & 3 (Contents & About) */}
          <div className="page border-l border-[#1A1714]/10"><SpreadContents /></div>
          <div className="page border-r border-[#1A1714]/10"><SpreadAbout /></div>
          
          {/* Page 4 & 5 (Skills & Project 1 Ingestion) */}
          <div className="page border-l border-[#1A1714]/10"><SpreadSkills /></div>
          <div className="page border-r border-[#1A1714]/10"><SpreadProjects projectIndex={0} side="left" /></div>
          
          {/* Page 6 & 7 (Project 1 Review & Project 2 Blueprint) */}
          <div className="page border-l border-[#1A1714]/10"><SpreadProjects projectIndex={0} side="right" /></div>
          <div className="page border-r border-[#1A1714]/10"><SpreadProjects projectIndex={1} side="left" /></div>
          
          {/* Page 8 & 9 (Project 2 Review & Milestones) */}
          <div className="page border-l border-[#1A1714]/10"><SpreadProjects projectIndex={1} side="right" /></div>
          <div className="page border-r border-[#1A1714]/10"><SpreadExperience /></div>
          
          {/* Page 10 (Back Cover / Contact) */}
          <div className="page border-l border-[#1A1714]/10"><SpreadContact /></div>
        </HTMLFlipBook>
      </motion.div>

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
