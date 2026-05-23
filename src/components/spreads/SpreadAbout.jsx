import React from 'react';
import { motion } from 'framer-motion';
import Folio from '../ui/Folio';
import { IDENTITY, ABOUT } from '../../data/portfolio';

export default function SpreadAbout({ onOpenDossier }) {
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

  const photoVariants = {
    hidden: { opacity: 0, scale: 1.03 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="page-spread-content page-right-gutter h-full bg-jp-oyster text-[#1A1916] relative flex flex-col justify-between">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.02]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex flex-col justify-between"
      >
        {/* Top Folio strip */}
        <motion.header 
          variants={itemVariants} 
          className="flex justify-between items-center border-b border-[#1A1916]/10 pb-4 select-none"
        >
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#DC684A] uppercase font-bold">
            SUBJECT PROFILE
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-[#1A1916]/40 uppercase font-semibold">
            DOSSIER FILE
          </span>
        </motion.header>

        {/* Spacious Single-Column Flow (V6 Polaroid & Slanted Signature) */}
        <div className="my-auto py-4 flex flex-col gap-6 items-center w-full relative">
          
          {/* Polaroid Card Portrait Centerpiece */}
          <motion.div 
            variants={photoVariants}
            className="bg-[#FAF6F0] p-3 pb-8 border border-[#1A1916]/12 shadow-[0_20px_40px_rgba(0,0,0,0.12)] rounded-[2px] max-w-[230px] w-full flex flex-col items-center cursor-pointer group relative"
            onClick={onOpenDossier}
            role="button"
            tabIndex={0}
            aria-label="Open detailed dossier overlay"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Card-like border around image */}
            <div className="relative overflow-hidden w-full aspect-[3/4] border border-[#1A1916]/10 bg-[#EFE9DF]">
              <img
                src="/profile.jpg"
                alt="Wafiq Nawaz portrait centerpiece"
                className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.03] transition-all duration-700 group-hover:scale-103"
              />
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>

            {/* Polaroid caption / stamp code */}
            <div className="mt-3 w-full flex justify-between px-1 select-none">
              <span className="font-meta text-[8px] text-[#7A746B] tracking-wider uppercase font-semibold">ZN-001</span>
              <span className="font-meta text-[8px] text-[#DC684A] font-bold">ACTIVE SYSTEM</span>
            </div>
          </motion.div>

          {/* Biography Block - High Premium Editorial Text */}
          <div className="flex flex-col gap-2.5 text-center px-4 max-w-[390px] mt-2">
            <span className="font-meta text-[8px] tracking-[0.25em] text-[#DC684A] uppercase font-bold block select-none">
              BIOGRAPHICAL ANCHOR
            </span>
            <h3 className="font-heading italic font-light text-[28px] leading-tight text-[#1A1916] select-none">
              Discipline &amp; Craft
            </h3>
            <p className="font-body text-[12.5px] leading-relaxed text-[#383530] select-text">
              {ABOUT.bio}
            </p>
          </div>
        </div>

        {/* Slanted Calligraphic Signature in bottom right */}
        <div className="absolute bottom-[3.25rem] right-[2.5rem] select-none pointer-events-none z-20">
          <span className="font-cookie text-[42px] text-[#DC684A] leading-none block -rotate-6 transform origin-bottom-right select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            Wafiq Nawaz
          </span>
        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-4 w-full relative z-10">
          <Folio page={3} text="SUBJECT DOSSIER" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
