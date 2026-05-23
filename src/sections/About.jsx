import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Grain } from '../components/Grain';
import SectionLabel from '../components/SectionLabel';
import { ABOUT } from '../data/portfolio';
import heroPhoto from '../assets/WafiqNawaz.jpeg';

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const photoVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#F2EDE4] text-[#0D0C09] py-24 sm:py-32 px-6 sm:px-12 select-none overflow-hidden"
    >
      {/* Paper grain tactility overlay */}
      <Grain />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-[1200px] mx-auto flex flex-col gap-12 z-10 relative"
      >
        {/* Top Header Log */}
        <div className="flex justify-between items-center w-full border-b border-[#0D0C09]/10 pb-5">
          <SectionLabel number="02" label="SUBJECT DOSSIER" theme="light" />
          <span className="font-mono text-[9px] tracking-widest text-[#0D0C09]/40 uppercase font-semibold">
            TRANSIT FILE
          </span>
        </div>

        {/* Massive Section Logotype */}
        <motion.h2 
          variants={itemVariants}
          className="font-display text-[clamp(4.5rem,14vw,11.5rem)] leading-[0.8] tracking-[-0.01em] text-[#0D0C09] uppercase select-text"
        >
          About.
        </motion.h2>

        {/* Center Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 sm:gap-16 items-start mt-4">
          
          {/* Left Column: High-Fashion Polaroid Centerpiece */}
          <div className="flex flex-col items-center w-full">
            <motion.div 
              variants={photoVariants}
              className="bg-[#FAF6F0] p-4 pb-12 border border-[#0D0C09]/12 shadow-[0_25px_50px_rgba(13,12,9,0.12)] rounded-[2px] w-full max-w-[340px] flex flex-col items-center relative group"
            >
              {/* Image box with card border */}
              <div className="relative overflow-hidden w-full aspect-[3/4] border border-[#0D0C09]/10 bg-[#EFE9DF]">
                <img
                  src="/profile.jpg" // Using static public profile.jpg for About portrait
                  alt="Wafiq Nawaz portrait centerpiece"
                  className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.96] sepia-[0.08] transition-transform duration-700 group-hover:scale-103"
                />
                {/* Subtle glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>

              {/* Polaroid stamp caption */}
              <div className="mt-4 w-full flex justify-between px-1 font-mono text-[8.5px] text-[#7A746B] tracking-wider uppercase font-semibold select-none">
                <span>ZN-001</span>
                <span className="text-[#C9A96E] font-bold">ACTIVE SYSTEM</span>
              </div>

              {/* Tilted Cursive Calligraphic Signature in bottom right */}
              <div 
                className="absolute bottom-[-0.75rem] right-[-0.75rem] select-none pointer-events-none z-10"
                style={{ transform: 'rotate(-4deg)' }}
              >
                <span className="font-sign text-[clamp(2rem,3.25vw,2.75rem)] text-[#0D0C09] leading-none block font-bold drop-shadow-[0_2px_4px_rgba(242,237,228,0.8)]">
                  Wafiq Nawaz
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Typographic Text Grid */}
          <div className="flex flex-col gap-10 w-full">
            
            {/* Pull Quote Row */}
            <motion.div 
              variants={itemVariants}
              className="border-left-3 border-[#C9A96E] pl-6 py-1 select-none"
            >
              <blockquote className="font-serif italic font-light text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.2] text-[#0D0C09] max-w-[20ch]">
                "Discipline &amp; persistent iteration outperform ad-hoc intelligence."
              </blockquote>
            </motion.div>

            {/* Typewriter Biography Columns (2-column on wide screens) */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body text-[13.5px] leading-[1.8] text-[#0D0C09]/75 select-text"
            >
              <div className="flex flex-col gap-4">
                <p>
                  Operating at the intersection of robust full-stack engineering and modern web security, I specialize in crafting performant digital products with high-fidelity design aesthetics.
                </p>
                <p>
                  A Computer Science student at Svyasa University, Bengaluru, I translate intricate system constraints and security models into clean, resilient, and beautifully structured user experiences.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p>
                  My engineering journey focuses on secure web protocols, backend pipeline optimizations, and responsive interface details. Every project is approached as an editorial publication — requiring typographic restraint, structural grids, and wabi-sabi balance.
                </p>
                <p className="font-mono text-[10px] tracking-wider text-[#C9A96E] uppercase font-bold border-t border-[#0D0C09]/10 pt-4 mt-2 select-none">
                  ◆ CSE STUDENT // BENGALURU, IN · 2026
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
