import React from 'react';
import { motion } from 'framer-motion';

export default function SpreadContactLeft() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="page-spread-content page-left-gutter h-full bg-jp-obsidian text-[#F5F0E8] relative flex flex-col justify-between select-none">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.015]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex flex-col justify-between relative z-10"
      >
        {/* Top Folio strip */}
        <motion.header 
          variants={itemVariants} 
          className="flex justify-between items-center border-b border-white/10 pb-4 w-full"
        >
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#C9A96E] uppercase font-bold">
            AVAILABILITY
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-white/40 uppercase font-semibold">
            TRANSIT FILE
          </span>
        </motion.header>

        {/* Center Quote & Status Block */}
        <div className="my-auto py-8 flex flex-col items-start gap-8 w-full">
          {/* Gold top bar */}
          <motion.div 
            variants={itemVariants} 
            className="w-10 h-[1.5px] bg-[#C9A96E]" 
          />

          {/* Large Editorial Quote */}
          <motion.blockquote 
            variants={itemVariants}
            className="font-display italic text-[24px] sm:text-[28px] text-[#F5F0E8] leading-snug font-light max-w-[18ch]"
          >
            "Every great product starts with a conversation."
          </motion.blockquote>

          {/* Active Availability Badge with Gold Pulse Dot */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 border border-[#C9A96E]/30 bg-[#C9A96E]/[0.02] px-3.5 py-2 rounded-[2px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A96E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A96E]"></span>
            </span>
            <span className="font-meta text-[8.5px] tracking-[0.15em] text-[#C9A96E] uppercase font-bold">
              Open to 2026 Internships
            </span>
          </motion.div>
        </div>

        {/* Bottom Folio */}
        <motion.footer 
          variants={itemVariants} 
          className="border-t border-white/10 pt-4 w-full"
        >
          <div className="flex justify-between items-center font-meta text-[9.5px] tracking-widest text-[#F5F0E8]/40 uppercase select-none">
            <span>Collaboration</span>
            <span>P. 08</span>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}
