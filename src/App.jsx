import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VerticalBinderViewer from './components/magazine/VerticalBinderViewer';
import MastheadLogo from './components/ui/MastheadLogo';
import { IDENTITY } from './data/portfolio';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Console easter egg
  useEffect(() => {
    console.log('%c Wafiq Nawaz ', 'background:#D1B48C;color:#0D0C0A;font-size:20px;font-weight:bold;padding:4px 12px;');
    console.log('%c Full-Stack Developer · Cybersecurity Student · Open to Work 2026 ', 'color:#F5F1EB;font-size:12px;font-family:monospace;');
    console.log('%c wafiqnawaz@outlook.com · github.com/ZaLuLu ', 'color:#DC684A;font-size:11px;font-family:monospace;');
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0D0C0A] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!loaded ? (
          <motion.div
            key="intro"
            className="intro-screen"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Paper grain overlay for realism */}
            <div className="paper-grain-overlay opacity-[0.015]" />

            {/* Abstract background vector details */}
            <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
              <div className="absolute top-[25%] left-[20%] text-[#D1B48C] opacity-35 animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              <div className="absolute bottom-[25%] right-[20%] text-[#D1B48C] opacity-25">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="intro-content flex flex-col items-center gap-6 z-10 px-6 max-w-md select-none relative"
            >
              {/* Masthead */}
              <div className="scale-[1.5] mb-4">
                <MastheadLogo />
              </div>

              {/* Title Callout */}
              <div className="flex flex-col items-center">
                <span className="font-meta text-[10px] tracking-[0.4em] text-white/50 uppercase font-medium">
                  THE DEVELOPER ISSUE
                </span>
                
                {/* Outline Portfolio title stamp */}
                <h2 className="font-heading font-outline-cream uppercase tracking-[0.2em] text-[48px] leading-none mt-4 opacity-50">
                  PORTFOLIO
                </h2>
                
                <h1 className="font-cookie text-[64px] text-[#D1B48C] leading-none tracking-wide normal-case font-normal mt-[-5px]">
                  {IDENTITY.fullName}
                </h1>
                
                <p className="font-meta text-[9.5px] tracking-widest text-[#D1B48C] uppercase mt-4 font-semibold">
                  {IDENTITY.location}
                </p>
              </div>

              {/* Action Button */}
              <motion.button
                className="intro-open-btn mt-8"
                onClick={() => setLoaded(true)}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.985 }}
              >
                OPEN PORTFOLIO
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="magazine"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65 }}
            className="w-full min-h-screen"
          >
            <VerticalBinderViewer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
