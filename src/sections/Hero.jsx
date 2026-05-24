import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Grain } from '../components/Grain';
import Marquee from '../components/Marquee';
import SectionLabel from '../components/SectionLabel';
import heroPhoto from '../assets/WafiqNawaz.jpeg';

export default function Hero() {
  const containerRef = useRef(null);

  // Parallax scroll progress hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Layered vertical parallax shifts
  const wafiqY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const nawazY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const nameWordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }
    }
  };

  const marqueeItems = [
    "FULL-STACK DEVELOPER",
    "CYBERSECURITY STUDENT",
    "REACT UI ARCHITECTURE",
    "FASTAPI BACKEND SYSTEM",
    "PYTHON & JAVA DEFI",
    "BENGALURU, IN",
    "OPEN FOR INTERNSHIPS"
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0D0C09] pt-24 pb-8 px-6 sm:px-12 select-none"
    >
      {/* Tactile paper grain realism */}
      <Grain />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: opacityFade }}
        className="w-full max-w-[1200px] mx-auto flex-1 flex flex-col justify-between z-10 relative"
      >
        {/* Top Header Label */}
        <div className="flex justify-between items-center w-full">
          <SectionLabel number="01" label="HERO INDEX" />
          <span className="font-mono text-[9px] tracking-widest text-[#F2EDE4]/30 uppercase font-semibold">
            EST. 2026
          </span>
        </div>

        {/* Massive Typographic Poster Core */}
        <div className="my-auto py-8 relative flex flex-col items-center justify-center w-full min-h-[460px] md:min-h-[580px]">
          
          {/* First Name Layer (W A F I Q) - Slides up from bottom */}
          <div className="overflow-hidden w-full text-left relative z-1">
            <motion.h1
              variants={nameWordVariants}
              style={{ y: wafiqY }}
              className="font-display text-[clamp(4.5rem,14vw,11.5rem)] leading-[0.85] tracking-[-0.02em] text-[#F2EDE4] select-text uppercase"
            >
              Wafiq
            </motion.h1>
          </div>

          {/* Central Portrait Container (Layered Depth) */}
          <motion.div
            variants={photoVariants}
            style={{ y: photoY }}
            className="relative z-10 w-[260px] sm:w-[340px] md:w-[400px] aspect-[3/4] overflow-visible mx-auto mb-[-20vh] border border-[#F2EDE4]/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] rounded-[4px] bg-[#1C1A16] filter contrast-[1.04] brightness-[0.94] transition-all duration-500 hover:scale-[1.02]"
          >
            <img
              src={heroPhoto}
              alt="Wafiq Nawaz flagship hero portrait"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-103"
            />
            {/* Subtle glass spotlight reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            
            {/* Floating Role Spine Label (Change 4) */}
            <div className="absolute -left-8 top-0 bottom-0 flex items-center">
              <span
                className="font-mono text-[8px] tracking-[0.3em] text-[#F2EDE4]/25 uppercase"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                FULL · STACK · DEV · 2026
              </span>
            </div>
          </motion.div>

          {/* Last Name Layer (N A W A Z) - Slides up, positioned lower & z-index: 3 */}
          <div className="overflow-hidden w-full text-right relative z-3 mt-12 sm:mt-16 md:mt-24 pointer-events-none">
            <motion.h1
              variants={nameWordVariants}
              style={{ y: nawazY }}
              className="font-display text-[clamp(6rem,18vw,15rem)] leading-[0.82] tracking-[-0.02em] text-[#C9A96E] uppercase select-text translate-x-[3vw]"
            >
              Nawaz.
            </motion.h1>
          </div>
        </div>

        {/* Infinite Scrolling Ribbon */}
        <div className="w-full py-2">
          <Marquee items={marqueeItems} speed={24} />
        </div>

        {/* Bottom Metadata Block */}
        <div className="flex justify-between items-center w-full border-t border-[#F2EDE4]/10 pt-5 font-mono text-[9.5px] tracking-widest text-[#F2EDE4]/40 uppercase select-none">
          <span>2026 // BENGALURU · SVYASA</span>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#C9A96E] hover:underline flex items-center gap-1 cursor-pointer"
          >
            OPEN PORTFOLIO ↓
          </a>
        </div>
      </motion.div>
    </section>
  );
}
