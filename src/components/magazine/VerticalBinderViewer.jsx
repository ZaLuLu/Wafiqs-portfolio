import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
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
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor viewport size for mobile layout fallback
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Use 1024px to ensure enough screen space for double pages
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
  }, [isMobile]);

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  // ─── MOBILE VIEW (Elegant Scrollable Feed) ───
  if (isMobile) {
    const mobilePages = [
      { component: <SpreadCover />, id: "cover", classes: "bg-jp-obsidian shadow-2xl" },
      { component: <SpreadContents />, id: "contents", classes: "bg-jp-sage shadow-2xl" },
      { component: <SpreadAbout />, id: "about", classes: "bg-jp-oyster shadow-2xl" },
      { component: <SpreadSkills />, id: "skills", classes: "bg-jp-blue shadow-2xl" },
      { component: <SpreadExperience />, id: "experience", classes: "bg-jp-ochre shadow-2xl" },
      { component: <SpreadProjects projectIndex={0} />, id: "retailmind", classes: "bg-jp-granite shadow-2xl" },
      { component: <SpreadProjects projectIndex={1} />, id: "portfolio", classes: "bg-jp-rose shadow-2xl" },
      { component: <SpreadContact />, id: "contact", classes: "bg-jp-obsidian shadow-2xl" },
    ];

    return (
      <div className="binder-stage flex flex-col gap-12 py-16 px-4 overflow-y-auto min-h-screen">
        <div className="binder-glow" />
        <div className="w-full max-w-[640px] flex flex-col gap-12 z-10 mx-auto">
          {mobilePages.map((page) => (
            <div
              key={page.id}
              className={`relative w-full overflow-hidden border border-black/5 rounded-[2px] ${page.classes}`}
              style={{ minHeight: '680px' }}
            >
              {page.component}
            </div>
          ))}
        </div>
        <footer className="text-center font-meta text-[10px] text-white/40 tracking-widest pt-6 select-none uppercase z-10">
          ZALULU PORTFOLIO · MOBILE ARCHIVE
        </footer>
      </div>
    );
  }

  // ─── DESKTOP VIEW (Tactile Page Flip Magazine) ───
  return (
    <div className="magazine-stage">
      {/* Floating pulsing spotlight */}
      <div className="binder-glow" />

      {/* Main Magazine Frame */}
      <div className="magazine-wrap select-none relative">
        {/* Realistic spine crease down the center seam of the open book */}
        {currentPage > 0 && currentPage < TOTAL_PAGES - 1 && (
          <div className="magazine-spine" />
        )}

        <HTMLFlipBook
          ref={bookRef}
          width={550}
          height={750}
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
          className="magazine-book"
          style={{ background: 'transparent' }}
        >
          {/* Page 1: Cover (Volcanic Obsidian) */}
          <div className="page bg-jp-obsidian" data-density="hard">
            <SpreadCover />
          </div>
          {/* Page 2: Table of Contents (Moss Sage Green) */}
          <div className="page bg-jp-sage">
            <SpreadContents />
          </div>
          {/* Page 3: About Dossier (Wabi-Sabi Oyster) */}
          <div className="page bg-jp-oyster">
            <SpreadAbout />
          </div>
          {/* Page 4: Capabilities / Skills (Steel Blue) */}
          <div className="page bg-jp-blue">
            <SpreadSkills />
          </div>
          {/* Page 5: Academic Timeline (Amber Ochre) */}
          <div className="page bg-jp-ochre">
            <SpreadExperience />
          </div>
          {/* Page 6: RetailMind (Dark Volcanic Granite) */}
          <div className="page bg-jp-granite">
            <SpreadProjects projectIndex={0} />
          </div>
          {/* Page 7: Zalulu Portfolio (Muted Coral Rose) */}
          <div className="page bg-jp-rose">
            <SpreadProjects projectIndex={1} />
          </div>
          {/* Page 8: Contact Close (Volcanic Obsidian) */}
          <div className="page bg-jp-obsidian" data-density="hard">
            <SpreadContact />
          </div>
        </HTMLFlipBook>
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
