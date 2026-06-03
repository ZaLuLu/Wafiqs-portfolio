import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

import CoverSpread    from './spreads/CoverSpread';
import AboutSpread    from './spreads/AboutSpread';
import SkillsSpread   from './spreads/SkillsSpread';
import ProjectsSpread from './spreads/ProjectsSpread';
import ServiceSpread  from './spreads/ServiceSpread';
import ContactSpread  from './spreads/ContactSpread';
import SpreadNav      from './components/SpreadNav';

const SECTIONS = [
  { id: 'cover',    label: 'Index',     title: 'Classification Sheet',    code: 'WN-00' },
  { id: 'about',    label: 'Dossier',   title: 'Operative Dossier',       code: 'WN-01' },
  { id: 'skills',   label: 'Matrix',    title: 'Capability Matrix',       code: 'WN-02' },
  { id: 'projects', label: 'Projects',  title: 'Operation Files',         code: 'WN-03' },
  { id: 'service',  label: 'Logistics', title: 'Service Record',          code: 'WN-04' },
  { id: 'contact',  label: 'Relay',     title: 'Secure Relay Terminal',   code: 'WN-05' },
];

// Shared entrance animation for each section panel
const sectionVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function App() {
  const containerRef = useRef(null);
  const sectionRefs  = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set([0]));

  // ── Observe which section is in view ─────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = sectionRefs.current.indexOf(entry.target);
          if (idx === -1) return;
          if (entry.isIntersecting) {
            setActiveIdx(idx);
            // Mark section as permanently visible (for entrance anim — once only)
            setVisibleSections(prev => new Set([...prev, idx]));
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.45,
      }
    );

    const current = sectionRefs.current;
    current.forEach((el) => { if (el) observer.observe(el); });
    return () => current.forEach((el) => { if (el) observer.unobserve(el); });
  }, []);

  // ── Scroll to a section by index ─────────────────────────────
  const scrollToSection = useCallback((idx) => {
    const el = sectionRefs.current[idx];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // ── Keyboard navigation (arrow keys) ─────────────────────────
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
      '%c  wafiqnawaz@outlook.com · github.com/ZaLuLu  ',
      'color:#B84040;font-size:12px;font-family:monospace;font-weight:600;'
    );
  }, []);

  const currentSection = SECTIONS[activeIdx];

  const SPREAD_COMPONENTS = [
    <CoverSpread key="cover" onNavigate={scrollToSection} />,
    <AboutSpread key="about" />,
    <SkillsSpread key="skills" />,
    <ProjectsSpread key="projects" />,
    <ServiceSpread key="service" />,
    <ContactSpread key="contact" />,
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: 'var(--midnight-deep)' }}>
      {/* Scrollbar suppression */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Grain texture overlay */}
      <div className="grain" />

      {/* ── FIXED TOP CHROME ─────────────────────────────── */}
      <div
        className="fixed inset-x-6 top-5 flex justify-between items-center z-50 pointer-events-none select-none"
      >
        {/* Left: back button or status */}
        {activeIdx > 0 ? (
          <button
            onClick={() => scrollToSection(0)}
            className="pointer-events-auto transition-all duration-300 hover:opacity-100 hover:-translate-x-0.5"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              fontWeight: 700,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'var(--restricted-red-vivid)',
              opacity: 0.85,
              borderBottom: '1px dashed rgba(184,64,64,0.45)',
              paddingBottom: '2px',
            }}
          >
            ← Cover
          </button>
        ) : (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            fontWeight: 700,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'var(--restricted-red-vivid)',
            opacity: 0.85,
          }}>
            De-Restricted Access
          </span>
        )}

        {/* Center: current section title */}
        <span className="hidden md:block" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ivory-dim)',
          opacity: 0.7,
        }}>
          {currentSection?.title}
        </span>

        {/* Right: file counter */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: 'var(--ivory-dim)',
          opacity: 0.75,
        }}>
          {currentSection?.code}
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
        {SPREAD_COMPONENTS.map((spread, idx) => (
          <div
            key={SECTIONS[idx].id}
            ref={(el) => { sectionRefs.current[idx] = el; }}
            style={{
              height: '100vh',
              scrollSnapAlign: 'start',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--midnight-deep)',
            }}
          >
            {/* Section entrance animation wrapper */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate={visibleSections.has(idx) ? 'visible' : 'hidden'}
              style={{ width: '100%', height: '100%' }}
            >
              {spread}
            </motion.div>
          </div>
        ))}
      </div>

      {/* ── RIGHT-SIDE DOSSIER TABS ───────────────────────── */}
      <SpreadNav
        sections={SECTIONS.slice(1)}
        activeIdx={activeIdx - 1}
        onDotClick={(i) => scrollToSection(i + 1)}
        visible={activeIdx > 0}
      />
    </div>
  );
}
