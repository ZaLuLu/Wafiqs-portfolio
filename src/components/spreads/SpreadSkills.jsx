import React from 'react';
import { motion } from 'framer-motion';
import Folio from '../ui/Folio';

export default function SpreadSkills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="page-spread-content page-left-gutter h-full bg-jp-blue text-[#1A1916]">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.02]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex flex-col justify-between relative z-10"
      >
        {/* Top Folio strip */}
        <motion.header 
          variants={itemVariants} 
          className="flex justify-between items-center border-b border-[#1A1916]/10 pb-5 select-none"
        >
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#C9A96E] uppercase font-bold">
            CAPABILITIES
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-[#1A1916]/40 uppercase font-semibold">
            TECHNICAL MATRIX
          </span>
        </motion.header>

        {/* Single-Column Wabi-Sabi Spec Table (V6 Clean Specifications) */}
        <div className="my-auto py-3 flex flex-col gap-5 max-w-[420px] mx-auto w-full">
          
          {/* Header block */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1 select-none text-center">
            <span className="font-meta text-[8.5px] tracking-[0.3em] text-[#C9A96E] uppercase font-bold">
              ENGINEERING CORE
            </span>
            <h3 className="font-heading italic font-light text-[32px] leading-none text-[#1A1916]">
              Technical Specs
            </h3>
            <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-2" />
          </motion.div>

          {/* Dotted Spec Matrices */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5 mt-1 select-none">
            
            {/* Backend & Cyber Security */}
            <div className="flex flex-col gap-1.5">
              <span className="font-meta text-[8px] tracking-[0.2em] text-[#C9A96E] font-bold uppercase">BACKEND &amp; CYBER SECURITY</span>
              <div className="flex flex-col gap-0.5">
                <div className="leader-row">
                  <span className="leader-skill">Python / Java / Networks</span>
                  <div className="leader-line" />
                  <span className="leader-category">Core Systems</span>
                </div>
                <div className="leader-row">
                  <span className="leader-skill">Cybersecurity / Cryptography</span>
                  <div className="leader-line" />
                  <span className="leader-category">Defensive Audits</span>
                </div>
                <div className="leader-row">
                  <span className="leader-skill">OWASP Top 10 / Vuln Assessment</span>
                  <div className="leader-line" />
                  <span className="leader-category">Security Auditing</span>
                </div>
              </div>
            </div>

            {/* Frontend Development */}
            <div className="flex flex-col gap-1.5">
              <span className="font-meta text-[8px] tracking-[0.2em] text-[#C9A96E] font-bold uppercase">FRONTEND DEVELOPMENT</span>
              <div className="flex flex-col gap-0.5">
                <div className="leader-row">
                  <span className="leader-skill">JavaScript / ES6+ / React UI</span>
                  <div className="leader-line" />
                  <span className="leader-category">Render Engines</span>
                </div>
                <div className="leader-row">
                  <span className="leader-skill">CSS Grid &amp; Flex / Tailwind</span>
                  <div className="leader-line" />
                  <span className="leader-category">Pixel Precision</span>
                </div>
                <div className="leader-row">
                  <span className="leader-skill">Semantic HTML5 / Lookbook Design</span>
                  <div className="leader-line" />
                  <span className="leader-category">Artful UX</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="flex flex-col gap-1.5">
              <span className="font-meta text-[8px] tracking-[0.2em] text-[#C9A96E] font-bold uppercase">ADAPTIVE SOFT SKILLS</span>
              <div className="flex flex-col gap-0.5">
                <div className="leader-row">
                  <span className="leader-skill">Problem Solving / Analysis</span>
                  <div className="leader-line" />
                  <span className="leader-category">Resolution</span>
                </div>
                <div className="leader-row">
                  <span className="leader-skill">Time Management / Crisis Comms</span>
                  <div className="leader-line" />
                  <span className="leader-category">Operations</span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-5 w-full">
          <Folio page={4} text="CAPABILITIES SPECIFICATIONS" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
