import React from 'react';
import { motion } from 'framer-motion';
import Folio from '../ui/Folio';

const milestoneData = [
  {
    year: "2026",
    title: "AI Spikes & demand analytics — RetailMind",
    desc: "Ingested CSV reports using FastAPI, developed async SQLAlchemy operations, and structured automated critical insights via the Gemini AI API."
  },
  {
    year: "2026",
    title: "Tactile Magazine spread Portfolio",
    desc: "Designed and engineered an 8-page interactive print-style magazine interface utilizing Vite, React 19, and Tailwind v4."
  },
  {
    year: "2025",
    title: "FastAPI Backend & Security Research",
    desc: "Engineered web security pipelines, cryptographic helpers, and JWT-authenticated route nodes."
  },
  {
    year: "2023 – Present",
    title: "Academic Focus at Svyasa University",
    desc: "Specializing in Computer Science Engineering core systems, networks, data structures, and secure development."
  }
];

export default function SpreadExperience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="page-spread-content page-right-gutter h-full bg-jp-ochre text-[#1A1916]">
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
            ACADEMIC MILESTONES
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-[#1A1916]/40 uppercase font-semibold">
            HISTORY LOGS
          </span>
        </motion.header>

        {/* Single-Column Wabi-Sabi Flow (V5 Decluttered) */}
        <div className="my-auto py-4 flex flex-col gap-6 max-w-[420px] mx-auto w-full">
          
          {/* Alma Mater education card */}
          <motion.div 
            variants={itemVariants}
            className="p-5 border border-[#1A1916]/12 bg-[#FAF6F0]/80 shadow-md border-l-[3px] border-[#1A1916] flex flex-col gap-3"
          >
            <span className="font-meta text-[8px] tracking-[0.3em] text-[#DC684A] font-bold block select-none">
              ALMA MATER
            </span>
            
            <div className="flex flex-col gap-0.5">
              <h4 className="font-display font-bold text-[#1A1916] text-[14px] leading-tight uppercase tracking-wider">
                B.E. Computer Science Engineering
              </h4>
              <span className="font-body text-[11px] text-[#383530] italic">
                Svyasa University · Bengaluru, IN
              </span>
            </div>

            <p className="font-body text-[11px] leading-relaxed text-[#7A746B] font-light">
              Expected Graduation: <strong>Summer 2026</strong>. Focus on software development frameworks, network security, and database modeling.
            </p>
          </motion.div>

          {/* Timeline Milestones stacked cleanly */}
          <motion.div variants={timelineVariants} className="flex flex-col gap-3">
            <span className="font-meta text-[8px] tracking-[0.3em] text-[#DC684A] uppercase font-bold select-none block mb-1">
              SYSTEM HISTORY
            </span>
            
            {milestoneData.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="pb-2 border-b border-[#1A1916]/10 last:border-b-0 flex flex-col gap-1 hover:bg-[#DC684A]/[0.01] pl-2 transition-colors duration-300"
              >
                <div className="flex justify-between items-baseline">
                  <span className="font-display font-bold text-[12.5px] text-[#1A1916] leading-snug">
                    {item.title}
                  </span>
                  <span className="font-meta text-[9px] text-[#DC684A] font-bold tracking-widest pl-2">
                    {item.year}
                  </span>
                </div>
                <p className="font-body text-[11.5px] leading-relaxed text-[#5A544E] font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-5 w-full">
          <Folio page={5} text="ACADEMIC TIMELINE" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
