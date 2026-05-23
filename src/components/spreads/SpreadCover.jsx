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
    <div className="w-full h-full relative overflow-hidden bg-jp-obsidian text-[#F5F1EB] flex items-center justify-center">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.015]" />

      {/* Floating Spotlight backlight */}
      <div className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(209, 180, 140, 0.05) 0%, transparent 60%)'
        }}
      />

      {/* Fine technical blueprint grid lines and abstract diagonals (V5) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.025]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="cover-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5F1EB" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cover-grid)" />
          {/* Fine blueprint crop lines & crosshairs */}
          <line x1="20" y1="20" x2="20" y2="60" stroke="#F5F1EB" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="60" y2="20" stroke="#F5F1EB" strokeWidth="0.5" />
          <line x1="90%" y1="90%" x2="90%" y2="80%" stroke="#F5F1EB" strokeWidth="0.5" />
          <line x1="90%" y1="90%" x2="80%" y2="90%" stroke="#F5F1EB" strokeWidth="0.5" />
        </svg>
      </div>

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
              CREATIVE ARCHITECTURE
            </span>
          </div>
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-white/50 uppercase">
            THE DEVELOPER ISSUE // Bengaluru, IN
          </span>
        </motion.header>

        {/* Massive Centerpiece Branding (Clean, Spaced, No Overlaps - V5) */}
        <div className="my-auto flex flex-col items-center justify-center text-center py-10 relative select-none w-full">
          <motion.span 
            variants={itemVariants}
            className="font-meta text-[10px] tracking-[0.45em] text-[#DC684A] uppercase block mb-6 font-bold"
          >
            ◇ CHARACTER DOCUMENTARY ◇
          </motion.span>
          
          <div className="flex flex-col items-center justify-center w-full">
            {/* Elegant, clean calligraphic name centerpiece (Gold) */}
            <motion.h1 
              variants={itemVariants}
              className="font-cookie text-[96px] sm:text-[116px] md:text-[136px] text-[#D1B48C] leading-none tracking-wide normal-case font-normal select-text drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
            >
              {IDENTITY.fullName}
            </motion.h1>
            
            {/* Monospaced technical sub-heading */}
            <motion.span
              variants={itemVariants}
              className="font-meta text-[11px] tracking-[0.3em] text-white/40 uppercase block mt-3 font-medium"
            >
              {IDENTITY.role}
            </motion.span>
          </div>

          <motion.div 
            variants={itemVariants}
            className="w-16 h-[0.5px] bg-[#D1B48C]/30 my-8" 
          />
          
          <motion.p 
            variants={itemVariants}
            className="font-body italic text-[14.5px] text-[#F5F1EB]/75 max-w-[440px] leading-relaxed px-4"
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
