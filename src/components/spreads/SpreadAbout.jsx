import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PullQuote from '../ui/PullQuote';
import Folio from '../ui/Folio';
import Caption from '../ui/Caption';
import ProfileCard from '../overlays/ProfileCard';
import { IDENTITY, ABOUT } from '../../data/portfolio';

export default function SpreadAbout() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <div className="page-spread-content h-full bg-[#F8F5F0]">
        {/* Paper grain realism overlay */}
        <div className="paper-grain-overlay" />

        {/* Top Folio strip */}
        <header className="flex justify-between items-center border-b border-[#1A1714]/10 pb-4 select-none">
          <span className="font-meta text-[9px] tracking-[0.25em] text-[#C41E1E] uppercase font-bold">
            THE SUBJECT DOSSIER
          </span>
          <span className="font-meta text-[9px] tracking-widest text-[#1A1714]/50">
            PROFILE
          </span>
        </header>

        {/* Three-Column Editorial Spread */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr_1.1fr] gap-8 my-auto py-6 items-stretch">
          
          {/* Column 1: Clickable Portrait (in FULL COLOR as requested) */}
          <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#1A1714]/10 pb-6 md:pb-0 pr-0 md:pr-4">
            <motion.div
              className="relative overflow-hidden cursor-pointer group shadow-lg border-2 border-white select-none"
              whileHover={{ scale: 1.015 }}
              onClick={() => setProfileOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Open Wafiq Nawaz profile details card"
            >
              <img
                src="/profile.jpg"
                alt="Wafiq Nawaz portrait"
                className="w-full aspect-[3/4] object-cover filter brightness-[0.97] contrast-[1.03] transition-all duration-500 group-hover:scale-105"
              />
              {/* Tap / Hover Overlay indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <Caption><span className="text-white font-medium">Click to open dossier →</span></Caption>
              </div>
            </motion.div>
            <div className="mt-3 select-none text-center md:text-left">
              <Caption>Subject: Wafiq Nawaz. Photo taken 2026.</Caption>
            </div>
          </div>

          {/* Column 2: Bio & Quick Facts Table */}
          <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1A1714]/10 pb-6 md:pb-0 px-0 md:px-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-lg text-[#0F2318] leading-tight select-none">
                BUILDING THE SECURE MODERN WEB
              </h3>
              <p className="font-body text-[13px] leading-relaxed text-[#4A4540]">
                {ABOUT.bio}
              </p>
              <p className="font-body text-[13px] leading-relaxed text-[#4A4540] italic border-l-2 border-[#0F2318]/25 pl-3">
                {ABOUT.aliasOrigin}
              </p>
            </div>

            {/* Quick Facts Section */}
            <div className="mt-6">
              <span className="font-meta text-[9px] tracking-[0.35em] text-[#C41E1E] font-bold block mb-3 select-none">
                QUICK STATS
              </span>
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between items-baseline border-b border-[#1A1714]/10 pb-1 text-xs">
                  <span className="font-meta text-[10px] text-[#8A847E] uppercase">BASED IN</span>
                  <span className="font-display font-medium text-[#1A1714]">{IDENTITY.location}</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-[#1A1714]/10 pb-1 text-xs">
                  <span className="font-meta text-[10px] text-[#8A847E] uppercase">EDUCATION</span>
                  <span className="font-display font-medium text-[#1A1714]">{IDENTITY.classLabel}</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-[#1A1714]/10 pb-1 text-xs">
                  <span className="font-meta text-[10px] text-[#8A847E] uppercase">DESIGN SYSTEM</span>
                  <span className="font-display font-medium text-emerald-800 font-semibold">Forest & Paper</span>
                </li>
                <li className="flex justify-between items-baseline text-xs">
                  <span className="font-meta text-[10px] text-[#8A847E] uppercase">STATUS</span>
                  <span className="font-display font-bold text-[#C41E1E] uppercase">{IDENTITY.statusBadge}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Pull Quote & Skill Chips */}
          <div className="flex flex-col justify-between pl-0 md:pl-4">
            <div className="select-none">
              <PullQuote>
                {IDENTITY.quote}
              </PullQuote>
            </div>

            <p className="font-body text-[13.5px] leading-relaxed text-[#4A4540] mt-3">
              Actively searching for internship or entry-level positions in full-stack development, DevSecOps, or application security for Summer 2026.
            </p>

            <div className="mt-6">
              <span className="font-meta text-[9px] tracking-[0.35em] text-[#C41E1E] font-bold block mb-3 select-none">
                SKILLS EQUIPPED
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ABOUT.equippedSkills.slice(0, 7).map((skill) => (
                  <span
                    key={skill}
                    className="font-meta text-[10px] tracking-wider uppercase px-2.5 py-1 border border-[#D2CDC6] text-[#4A4540] hover:border-[#C41E1E] hover:text-[#C41E1E] hover:bg-[#C41E1E]/5 transition-colors cursor-default duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Folio */}
        <footer className="border-t border-[#1A1714]/10 pt-4 w-full">
          <Folio page={3} text="PORTFOLIO ABOUT ME" />
        </footer>
      </div>

      {/* Profile Card Overlay Popup */}
      <AnimatePresence>
        {profileOpen && <ProfileCard onClose={() => setProfileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
