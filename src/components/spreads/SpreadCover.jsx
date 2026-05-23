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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0D0C0A] text-[#F5F1EB] flex items-center justify-center">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.015]" />

      {/* Floating Spotlight backlight */}
      <div className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(209, 180, 140, 0.05) 0%, transparent 60%)'
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="page-spread-content relative z-10 flex flex-col justify-between h-full w-full"
      >
        
        {/* Top Header bar - Cinematic layout */}
        <motion.header 
          variants={itemVariants} 
          className="flex justify-between items-center border-b border-white/10 pb-6 w-full select-none"
        >
          <div className="flex items-center gap-3">
            <motion.div variants={starVariants}>
              <MastheadLogo />
            </motion.div>
            <span className="font-meta text-[9.5px] tracking-[0.35em] text-[#D1B48C] font-bold uppercase">
              CREATIVE LOGIC
            </span>
          </div>
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-white/50 uppercase">
            ISSUE 01 // Bengaluru, IN
          </span>
        </motion.header>

        {/* Massive Centerpiece Branding (Dazzling High-Fashion Overlap) */}
        <div className="my-auto flex flex-col items-center justify-center text-center py-8 relative select-none">
          <motion.span 
            variants={itemVariants}
            className="font-meta text-[9px] tracking-[0.45em] text-[#DC684A] uppercase block mb-5 font-bold"
          >
            ◇ CHARACTER DOCUMENTARY ◇
          </motion.span>
          
          <div className="relative flex flex-col items-center justify-center">
            {/* Outline title block - extremely giant & spaced */}
            <motion.h2 
              variants={itemVariants}
              className="font-heading font-outline-cream uppercase tracking-[0.25em] text-[76px] sm:text-[90px] md:text-[110px] leading-none mb-1 opacity-20 pointer-events-none"
              style={{ letterSpacing: '0.22em' }}
            >
              PORTFOLIO
            </motion.h2>
            
            {/* Calligraphic overlay name (Champagne gold) */}
            <motion.h1 
              variants={itemVariants}
              className="font-cookie text-[90px] sm:text-[110px] md:text-[130px] text-[#D1B48C] leading-none tracking-wide normal-case font-normal absolute top-[30%] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] select-text"
            >
              {IDENTITY.fullName}
            </motion.h1>
          </div>

          <motion.div 
            variants={itemVariants}
            className="w-12 h-[1px] bg-[#D1B48C] my-8 opacity-40" 
          />
          
          <motion.p 
            variants={itemVariants}
            className="font-body italic text-[14.5px] text-[#F5F1EB]/75 max-w-[420px] leading-relaxed"
          >
            "An editorial inquiry into secure full-stack architecture, systems development, and clean human interaction."
          </motion.p>
        </div>

        {/* Cover footer - minimal Lookbook details */}
        <motion.footer 
          variants={itemVariants} 
          className="flex justify-between items-end border-t border-white/10 pt-6 w-full select-none text-white/50"
        >
          <div className="flex flex-col text-left">
            <span className="font-meta text-[8.5px] tracking-widest text-[#D1B48C] font-bold uppercase mb-1.5">
              SPECIALTY
            </span>
            <span className="font-display text-[12px] text-white leading-none uppercase tracking-widest font-semibold">
              {IDENTITY.classLabel}
            </span>
          </div>
          
          {/* Subtle star glyph in center footer */}
          <div className="text-[#D1B48C] opacity-40 animate-spin" style={{ animationDuration: '40s' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
            </svg>
          </div>

          <div className="flex flex-col text-right">
            <span className="font-meta text-[8.5px] tracking-widest text-[#D1B48C] font-bold uppercase mb-1.5">
              Uptime Status
            </span>
            <span className="font-display text-[12px] text-white leading-none uppercase tracking-widest font-semibold">
              {IDENTITY.statusBadge}
            </span>
          </div>
        </motion.footer>

      </motion.div>
    </div>
  );
}
