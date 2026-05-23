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
    <div className="page-spread-content h-full bg-jp-blue text-[#1A1916]">
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
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#DC684A] uppercase font-bold">
            CAPABILITIES
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-[#1A1916]/40 uppercase font-semibold">
            TECHNICAL MATRIX
          </span>
        </motion.header>

        {/* Single-Column Wabi-Sabi Spec Table (V5 Decluttered & Spacious) */}
        <div className="my-auto py-4 flex flex-col gap-6 max-w-[420px] mx-auto w-full">
          
          {/* Header block */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2 select-none text-center">
            <span className="font-meta text-[8.5px] tracking-[0.3em] text-[#DC684A] uppercase font-bold">
              ENGINEERING CORE
            </span>
            <h3 className="font-heading italic font-light text-[38px] leading-none text-[#1A1916]">
              Technical Specs
            </h3>
            <div className="w-12 h-[1px] bg-[#DC684A] mx-auto mt-3" />
          </motion.div>

          {/* Elegant monospaced spec table with dot leaders */}
          <motion.div variants={itemVariants} className="spec-list mt-2">
            <div className="spec-item">
              <span className="font-meta text-[11px] font-bold text-[#1A1916]">React &amp; Frontend</span>
              <span className="spec-dot-leader" />
              <span className="font-meta text-[10px] text-[#7A746B]">High-Fidelity Interfaces</span>
            </div>
            <div className="spec-item">
              <span className="font-meta text-[11px] font-bold text-[#1A1916]">JavaScript / ES6+</span>
              <span className="spec-dot-leader" />
              <span className="font-meta text-[10px] text-[#7A746B]">Dynamic Logic Systems</span>
            </div>
            <div className="spec-item">
              <span className="font-meta text-[11px] font-bold text-[#1A1916]">Python &amp; Systems</span>
              <span className="spec-dot-leader" />
              <span className="font-meta text-[10px] text-[#7A746B]">CTF Security Scripts</span>
            </div>
            <div className="spec-item">
              <span className="font-meta text-[11px] font-bold text-[#1A1916]">FastAPI / REST APIs</span>
              <span className="spec-dot-leader" />
              <span className="font-meta text-[10px] text-[#7A746B]">Async Service Pipelines</span>
            </div>
            <div className="spec-item">
              <span className="font-meta text-[11px] font-bold text-[#1A1916]">PostgreSQL / SQL</span>
              <span className="spec-dot-leader" />
              <span className="font-meta text-[10px] text-[#7A746B]">Structured Database Models</span>
            </div>
            <div className="spec-item">
              <span className="font-meta text-[11px] font-bold text-[#1A1916]">TailwindCSS</span>
              <span className="spec-dot-leader" />
              <span className="font-meta text-[10px] text-[#7A746B]">Responsive Design Tokens</span>
            </div>
            <div className="spec-item">
              <span className="font-meta text-[11px] font-bold text-[#1A1916]">Web Security</span>
              <span className="spec-dot-leader" />
              <span className="font-meta text-[10px] text-[#7A746B]">Defensive OWASP Auditing</span>
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
