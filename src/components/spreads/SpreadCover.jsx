import React from 'react';
import { motion } from 'framer-motion';
import MastheadLogo from '../ui/MastheadLogo';
import { IDENTITY } from '../../data/portfolio';

export default function SpreadCover() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-jp-obsidian text-[#F5F0E8] flex flex-col justify-between p-8 select-none">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.015]" />

      {/* Elegant geometric frame lines (dossier / structural blueprint feel) */}
      <div className="absolute inset-4 border border-white/[0.03] pointer-events-none select-none" />
      <div className="absolute top-8 bottom-8 left-[50%] w-[0.5px] bg-white/[0.02] pointer-events-none" />
      <div className="absolute left-8 right-8 top-[50%] h-[0.5px] bg-white/[0.02] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex flex-col justify-between relative z-10"
      >
        {/* Top Header bar with custom anchored metadata */}
        <motion.header 
          variants={itemVariants} 
          className="flex justify-between items-start border-b border-white/10 pb-5 w-full select-none"
        >
          <div className="flex items-center gap-2">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="cursor-pointer"
            >
              <MastheadLogo />
            </motion.div>
            <span className="font-meta text-[8.5px] tracking-[0.25em] text-[#C9A96E] font-bold uppercase">
              CREATIVE ARCHITECTURE
            </span>
          </div>

          {/* Anchored Top-Right Metadata Labels Container */}
          <div className="text-right font-meta text-[8.5px] tracking-widest text-[#F5F0E8]/45 uppercase leading-relaxed mt-0.5">
            <div className="text-[#C9A96E] font-bold mb-0.5">◆ THE DEVELOPER ISSUE</div>
            <div>Bengaluru, IN</div>
          </div>
        </motion.header>

        {/* Massive Centerpiece Branding (Kinfolk / Editorial Monograph style) */}
        <div className="my-auto flex flex-col items-center text-center py-6 w-full relative max-w-[420px] mx-auto">
          <motion.span 
            variants={itemVariants}
            className="font-meta text-[8.5px] tracking-[0.4em] text-[#C9A96E] uppercase block mb-6 font-bold"
          >
            ◇ CHARACTER DOCUMENTARY ◇
          </motion.span>
          
          <div className="flex flex-col items-center w-full">
            {/* Elegant, clean calligraphic name centerpiece (Cormorant Garamond 300 Italic) */}
            <motion.h1 
              variants={itemVariants}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.01em',
                color: '#F5F0E8',
              }}
              className="select-text text-center"
            >
              Wafiq<br />
              <span style={{ color: '#C9A96E' }}>Nawaz.</span>
            </motion.h1>
            
            {/* Monospaced technical sub-heading */}
            <motion.span
              variants={itemVariants}
              className="font-meta text-[9.5px] tracking-[0.25em] text-white/40 uppercase block mt-5 font-semibold"
            >
              {IDENTITY.role}
            </motion.span>
          </div>

          <motion.div 
            variants={itemVariants}
            className="w-10 h-[0.5px] bg-[#C9A96E]/40 my-6" 
          />
          
          <motion.p 
            variants={itemVariants}
            className="font-body italic text-[13.5px] text-[#F5F0E8]/75 leading-relaxed select-text"
          >
            "An editorial inquiry into secure full-stack architecture, systems development, and clean human interaction."
          </motion.p>
        </div>

        {/* Gold Rule Above Pagination */}
        <motion.footer 
          variants={itemVariants}
          className="w-full flex items-center gap-3 select-none"
        >
          <div className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent to-[#C9A96E]/30" />
          <span className="font-meta text-[8.5px] tracking-widest text-[#F5F0E8]/40">
            01 / 10
          </span>
          <div className="flex-1 h-[0.5px] bg-gradient-to-r from-[#C9A96E]/30 to-transparent" />
        </motion.footer>

      </motion.div>
    </div>
  );
}
