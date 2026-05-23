import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Folio from '../ui/Folio';
import Caption from '../ui/Caption';
import ProfileCard from '../overlays/ProfileCard';
import { IDENTITY, ABOUT } from '../../data/portfolio';

export default function SpreadAbout() {
  const [profileOpen, setProfileOpen] = useState(false);

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
    <>
      <div className="page-spread-content h-full bg-[#F5F1EB] text-[#1A1916]">
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

          {/* Spacious High-Fashion Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr] gap-12 my-auto py-6 items-center">
            
            {/* Column 1: Vibrant Flagship Portrait */}
            <motion.div 
              variants={photoVariants}
              className="flex flex-col justify-center select-none"
            >
              <motion.div
                className="relative overflow-hidden cursor-pointer group shadow-2xl border-[4px] border-white max-w-[360px] mx-auto w-full"
                whileHover={{ scale: 1.02 }}
                onClick={() => setProfileOpen(true)}
                role="button"
                tabIndex={0}
                aria-label="Open detailed dossier overlay"
              >
                {/* Natural vibrant color centerpiece */}
                <img
                  src="/profile.jpg"
                  alt="Wafiq Nawaz portrait centerpiece"
                  className="w-full aspect-[3/4] object-cover filter brightness-[0.98] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A]/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center p-4">
                  <Caption><span className="text-[#F5F1EB] font-bold tracking-widest uppercase">Open Dossier Details →</span></Caption>
                </div>
              </motion.div>
              <div className="mt-3 text-center md:text-left md:pl-2">
                <Caption>Subject: Wafiq Nawaz. Core Location: Bengaluru, IN.</Caption>
              </div>
            </motion.div>

            {/* Column 2: Bio, stats & details */}
            <div className="flex flex-col justify-between h-full py-2">
              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                <span className="font-meta text-[9px] tracking-[0.25em] text-[#DC684A] uppercase font-bold block select-none">
                  BIOGRAPHICAL ANCHOR
                </span>
                <h3 className="font-heading italic font-light text-[38px] leading-tight text-[#1A1916] select-none">
                  Discipline &amp; Craft
                </h3>
                <p className="font-body text-[13.5px] leading-relaxed text-[#383530] mt-1 select-text">
                  {ABOUT.bio}
                </p>
              </motion.div>

              {/* Svyasa University Stats */}
              <motion.div variants={itemVariants} className="my-8 select-none">
                <ul className="flex flex-col gap-3">
                  <li className="flex justify-between items-baseline border-b border-[#1A1916]/10 pb-2 text-xs">
                    <span className="font-meta text-[9.5px] text-[#7A746B] uppercase font-semibold">Degree</span>
                    <span className="font-display font-bold text-[#1A1916] tracking-wider">{IDENTITY.classLabel}</span>
                  </li>
                  <li className="flex justify-between items-baseline border-b border-[#1A1916]/10 pb-2 text-xs">
                    <span className="font-meta text-[9.5px] text-[#7A746B] uppercase font-semibold">University</span>
                    <span className="font-display font-medium text-[#1A1916] tracking-wider">Svyasa University</span>
                  </li>
                  <li className="flex justify-between items-baseline text-xs">
                    <span className="font-meta text-[9.5px] text-[#7A746B] uppercase font-semibold">Status</span>
                    <span className="font-display font-bold text-[#DC684A] uppercase tracking-widest">{IDENTITY.statusBadge}</span>
                  </li>
                </ul>
              </motion.div>

              {/* Action trigger button */}
              <motion.div variants={itemVariants} className="select-none flex gap-4 mt-2">
                <button
                  onClick={() => setProfileOpen(true)}
                  className="font-meta text-[10px] tracking-widest text-[#F5F1EB] bg-[#1A1916] hover:bg-[#DC684A] px-6 py-3.5 transition-all duration-300 font-bold uppercase rounded-[9999px] border-none cursor-pointer shadow-md hover:shadow-lg"
                >
                  OPEN DOSSIER →
                </button>
              </motion.div>
            </div>

          </div>

          {/* Bottom Folio */}
          <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-5 w-full">
            <Folio page={3} text="SUBJECT DOSSIER" />
          </motion.footer>
        </motion.div>
      </div>

      {/* Profile Card Dossier Overlay */}
      <AnimatePresence>
        {profileOpen && <ProfileCard onClose={() => setProfileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
