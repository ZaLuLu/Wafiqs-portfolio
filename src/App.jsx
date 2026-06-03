import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

import CoverSpread    from './spreads/CoverSpread';
import AboutSpread    from './spreads/AboutSpread';
import SkillsSpread   from './spreads/SkillsSpread';
import ProjectsSpread from './spreads/ProjectsSpread';
import ServiceSpread  from './spreads/ServiceSpread';
import ContactSpread  from './spreads/ContactSpread';
import SpreadNav      from './components/SpreadNav';

// Section metadata matching tactical folder indexing
const SECTIONS = [
  { id: 'cover',    label: 'Index',     title: 'CLASSIFICATION SHEET', code: 'WN-00' },
  { id: 'about',    label: 'Dossier',   title: 'I. DOSSIER RECORD',   code: 'WN-01' },
  { id: 'skills',   label: 'Matrix',    title: 'II. CAPABILITY MATRIX', code: 'WN-02' },
  { id: 'projects', label: 'Projects',  title: 'III. OPERATION FILES', code: 'WN-03' },
  { id: 'service',  label: 'Logistics', title: 'IV. SERVICE LOGISTICS', code: 'WN-04' },
  { id: 'contact',  label: 'Relay',     title: 'V. TRANSMISSION TERMINAL', code: 'WN-05' },
];

export default function App() {
  const containerRef = useRef(null);
  const sectionRefs  = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  // ── Observe which section is in view ─────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.55, // section must be >55% visible to count as active
      }
    );

    const current = sectionRefs.current;
    current.forEach((el) => { if (el) observer.observe(el); });
    return () => current.forEach((el) => { if (el) observer.unobserve(el); });
  }, []);

  // ── Scroll to a section by index ─────────────────────────────
  const scrollToSection = useCallback((idx) => {
    const el = sectionRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // ── Keyboard navigation (up/down arrows) ─────────────────────
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeIdx < SECTIONS.length - 1) scrollToSection(activeIdx + 1);
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (activeIdx > 0) scrollToSection(activeIdx - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, scrollToSection]);

  /* Recruiter easter egg */
  useEffect(() => {
    console.log(
      '%c  OPERATIVE: WAFIQ NAWAZ  ',
      'background:#111827;color:#F3EDE2;font-size:18px;font-weight:bold;padding:6px 16px;font-family:monospace;border-radius:4px;border:1px solid #8B3A3A;'
    );
    console.log(
      '%c  CLASSIFIED DOSSIER ARCHIVE // ACCESS GRANTED  ',
      'color:#8B3A3A;font-size:11px;font-family:monospace;font-weight:bold;'
    );
  }, []);

  const currentTitle = SECTIONS[activeIdx]?.title ?? '';

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#111827]">
      {/* Scrollbar suppression */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Grain texture */}
      <div className="grain" />

      {/* ── FIXED TOP CHROME ─────────────────────────────── */}
      <div
        className="fixed inset-x-6 top-6 flex justify-between items-center z-50
                   pointer-events-none select-none font-mono"
        style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.20em',
                 textTransform: 'uppercase', color: 'rgba(243, 237, 226, 0.6)' }}
      >
        {/* Left: back to cover (hidden on cover) */}
        {activeIdx > 0 ? (
          <button
            onClick={() => scrollToSection(0)}
            className="pointer-events-auto transition-opacity duration-300 hover:opacity-100"
            style={{ opacity: 0.8, borderBottom: '1px dashed var(--restricted-red)', paddingBottom: '2px', color: 'var(--restricted-red)' }}
          >
            ← INDEX // COVER
          </button>
        ) : (
          <span style={{ opacity: 0.8, color: 'var(--restricted-red)', fontWeight: 700 }}>
            DE-RESTRICTED ACCESS
          </span>
        )}

        {/* Center: section title */}
        <span className="hidden md:block" style={{ opacity: 0.5 }}>
          {currentTitle}
        </span>

        {/* Right: section counter */}
        <span style={{ opacity: 0.8, color: 'var(--ivory-dim)' }}>
          FILE NO. WN-0{activeIdx}
        </span>
      </div>

      {/* ── VERTICAL SNAP SCROLL CONTAINER ──────────────── */}
      <div
        ref={containerRef}
        style={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {/* Section 0 — Cover */}
        <div
          ref={(el) => { sectionRefs.current[0] = el; }}
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden',
            background: '#111827',
          }}
        >
          <CoverSpread onNavigate={scrollToSection} />
        </div>

        {/* Section 1 — About */}
        <div
          ref={(el) => { sectionRefs.current[1] = el; }}
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden',
            background: '#111827',
          }}
        >
          <AboutSpread />
        </div>

        {/* Section 2 — Skills */}
        <div
          ref={(el) => { sectionRefs.current[2] = el; }}
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden',
            background: '#111827',
          }}
        >
          <SkillsSpread />
        </div>

        {/* Section 3 — Projects */}
        <div
          ref={(el) => { sectionRefs.current[3] = el; }}
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden',
            background: '#111827',
          }}
        >
          <ProjectsSpread />
        </div>

        {/* Section 4 — Service */}
        <div
          ref={(el) => { sectionRefs.current[4] = el; }}
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden',
            background: '#111827',
          }}
        >
          <ServiceSpread />
        </div>

        {/* Section 5 — Contact */}
        <div
          ref={(el) => { sectionRefs.current[5] = el; }}
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden',
            background: '#111827',
          }}
        >
          <ContactSpread />
        </div>
      </div>

      {/* ── RIGHT-SIDE DOSSIER TABS ───────────────────────── */}
      <SpreadNav
        sections={SECTIONS.slice(1)} // About, Skills, Projects, Service, Contact
        activeIdx={activeIdx - 1}     // shift so 0 = About
        onDotClick={(i) => scrollToSection(i + 1)}
        visible={activeIdx > 0}
      />
    </div>
  );
}
