import React from 'react';
import { motion } from 'framer-motion';
import Folio from '../ui/Folio';
import Caption from '../ui/Caption';
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="page-spread-content h-full bg-jp-oyster text-[#1A1916]">
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
          className="flex justify-between items-center border-b border-[#1A1916]/10 pb-5 select-none"
        >
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#DC684A] uppercase font-bold">
            SUBJECT PROFILE
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-[#1A1916]/40 uppercase font-semibold">
            DOSSIER FILE
          </span>
        </motion.header>

        {/* Single-Column Wabi-Sabi Flow (V5 Decluttered) */}
        <div className="my-auto py-4 flex flex-col gap-6 items-center w-full">
          
          {/* Card Portrait centerpiece with Slanted Signature */}
          <motion.div 
            variants={photoVariants}
            className="bg-[#FAF6F0] p-4 border border-[#1A1916]/10 shadow-2xl rounded-[1px] max-w-[210px] w-full flex flex-col items-center cursor-pointer group"
            onClick={onOpenDossier}
            role="button"
            tabIndex={0}
            aria-label="Open detailed dossier overlay"
            whileHover={{ scale: 1.025, rotate: -1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Card-like border */}
            <div className="relative overflow-hidden w-full aspect-[3/4] border border-[#1A1916]/10">
              <img
                src="/profile.jpg"
                alt="Wafiq Nawaz portrait centerpiece"
                className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.03] transition-all duration-700 group-hover:scale-103"
              />
            </div>
            
            {/* Slanted Signature Name underneath in Cookie script */}
            <div className="mt-4 pt-1 pb-1 select-none flex flex-col items-center">
              <span className="font-cookie text-[34px] text-[#DC684A] leading-none font-normal -rotate-4 block transform origin-center select-none text-center">
                Wafiq Nawaz
              </span>
            </div>
          </motion.div>

          {/* Biographical Anchor */}
          <div className="flex flex-col gap-3 text-center px-4 max-w-[440px]">
            <span className="font-meta text-[8.5px] tracking-[0.25em] text-[#DC684A] uppercase font-bold block select-none">
              BIOGRAPHICAL ANCHOR
            </span>
            <h3 className="font-heading italic font-light text-[32px] leading-tight text-[#1A1916] select-none">
              Discipline &amp; Craft
            </h3>
            <p className="font-body text-[12.5px] leading-relaxed text-[#383530] select-text">
              {ABOUT.bio}
            </p>
          </div>

          {/* Sleek Underline Button (Micro-animating Hover) */}
          <motion.div variants={itemVariants} className="select-none mt-2">
            <button
              onClick={onOpenDossier}
              className="font-meta text-[10px] tracking-widest text-[#1A1916] hover:text-[#DC684A] pb-1 transition-all duration-300 font-bold uppercase border-b border-[#1A1916] hover:border-[#DC684A] cursor-pointer bg-transparent border-none outline-none"
            >
              OPEN SYSTEM DOSSIER →
            </button>
          </motion.div>
        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-5 w-full">
          <Folio page={3} text="SUBJECT DOSSIER" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
