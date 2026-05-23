import React from 'react';
import { motion } from 'framer-motion';
import ColumnRule from '../ui/ColumnRule';
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

        {/* Spacious Spec Grid (V5 Luxury Japanese Editorial Menu) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.15fr_1.1fr] gap-12 my-auto py-8 items-stretch">
          
          {/* Left Side: Technical Core Engine Specs */}
          <div className="flex flex-col justify-center pr-2">
            <motion.div variants={itemVariants} className="flex flex-col gap-2 mb-6 select-none">
              <span className="font-meta text-[9.5px] tracking-[0.3em] text-[#DC684A] uppercase font-bold">
                ENGINEERING CORE
              </span>
              <h3 className="font-heading italic font-light text-[38px] leading-none text-[#1A1916]">
                Technical Specs
              </h3>
              <div className="w-12 h-[1px] bg-[#DC684A] mt-3" />
            </motion.div>

            <motion.div variants={itemVariants} className="spec-list">
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">React &amp; Frontend</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">High-Fidelity UI Architectures</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">JavaScript / ES6+</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Dynamic Dynamic Logic Engine</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">Python Systems</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Automation &amp; CTF Scripting</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">FastAPI / Backend</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Async Non-Blocking Pipelines</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">PostgreSQL / SQL</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Structured Schema Models</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">TailwindCSS</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Utility-First Design Tokens</span>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex justify-center items-center">
            <ColumnRule vertical={true} />
          </div>

          {/* Right Side: Soft Traits & System Operations Specs */}
          <div className="flex flex-col justify-center pl-0 md:pl-2 gap-6 mt-10 md:mt-0">
            <motion.div variants={itemVariants} className="flex flex-col gap-2 mb-2 select-none">
              <span className="font-meta text-[9.5px] tracking-[0.3em] text-[#DC684A] uppercase font-bold">
                SYSTEM &amp; PERSONAL APTITUDE
              </span>
              <h3 className="font-heading italic font-light text-[38px] leading-none text-[#1A1916]">
                Operations Specs
              </h3>
              <div className="w-12 h-[1px] bg-[#DC684A] mt-3" />
            </motion.div>

            <motion.div variants={itemVariants} className="spec-list">
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">Problem Solving</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Analytical Logic &amp; Auditing</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">Self-Learning</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Defensive Security Research</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">Git &amp; Remote</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Collaborative PR Versioning</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">Linux &amp; CLI</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Native Shell Administration</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">UI/UX Craft</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Muted Editorial Layouts</span>
              </div>
              <div className="spec-item">
                <span className="font-meta text-[11.5px] font-bold text-[#1A1916]">Web Security</span>
                <span className="spec-dot-leader" />
                <span className="font-meta text-[11px] text-[#7A746B] text-right">Vulnerability Audits</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-5 w-full">
          <Folio page={4} text="CAPABILITIES SPECIFICATIONS" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
