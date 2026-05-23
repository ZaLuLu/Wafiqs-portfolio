import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagazineViewer from './components/magazine/MagazineViewer';
import MastheadLogo from './components/ui/MastheadLogo';
import { IDENTITY } from './data/portfolio';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Console easter egg
  useEffect(() => {
    console.log('%c Wafiq Nawaz ', 'background:#C41E1E;color:#FFFFFF;font-size:20px;font-weight:bold;padding:4px 12px;');
    console.log('%c Full-Stack Developer · Cybersecurity Student · Open to Work 2026 ', 'color:#EDE9E3;font-size:12px;font-family:monospace;');
    console.log('%c wafiqnawaz@outlook.com · github.com/ZaLuLu ', 'color:#E8A020;font-size:11px;font-family:monospace;');
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#07140E] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!loaded ? (
          <motion.div
            key="intro"
            className="intro-screen"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Paper grain overlay for realism */}
            <div className="paper-grain-overlay opacity-[0.02]" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="intro-content flex flex-col items-center gap-6 z-10 px-6 max-w-md select-none"
            >
              {/* Masthead */}
              <div className="scale-125 mb-2">
                <MastheadLogo />
              </div>

              {/* Title Callout */}
              <div className="flex flex-col items-center">
                <span className="font-meta text-[10px] tracking-[0.4em] text-[#E8A020] uppercase font-bold">
                  THE DEVELOPER ISSUE
                </span>
                <h1 className="font-display font-light text-[40px] text-[#F8F5F0] leading-none mt-3 tracking-wide">
                  {IDENTITY.fullName.split(' ')[0]}
                  <span className="font-cookie text-[58px] text-[#E8A020] inline-block ml-2 normal-case font-normal">
                    {IDENTITY.fullName.split(' ')[1]}
                  </span>
                </h1>
                <p className="font-meta text-[9.5px] tracking-widest text-white/40 uppercase mt-2">
                  Bengaluru · Karnataka · India
                </p>
              </div>

              {/* Action Button */}
              <motion.button
                className="intro-open-btn mt-6"
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
            <MagazineViewer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
