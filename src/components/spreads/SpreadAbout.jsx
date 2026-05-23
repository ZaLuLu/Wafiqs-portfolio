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
      <div className="page-spread-content h-full bg-[#F4ECE1] p-12 text-[#242D27]">
        {/* Paper grain realism overlay */}
        <div className="paper-grain-overlay opacity-[0.02]" />

        {/* Top Folio strip */}
        <header className="flex justify-between items-center border-b border-[#242D27]/10 pb-5 select-none">
          <span className="font-meta text-[9px] tracking-[0.25em] text-[#E25A38] uppercase font-bold">
            SUBJECT PROFILE
          </span>
          <span className="font-meta text-[9px] tracking-widest text-[#242D27]/40 uppercase">
            DOSSIER
          </span>
        </header>

        {/* Decluttered 2-Column layout on this single page */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr] gap-10 my-auto py-6 items-stretch">
          
          {/* Column 1: Flagship Portrait (The single and only time it is used!) */}
          <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#242D27]/10 pb-6 md:pb-0 pr-0 md:pr-6">
            <motion.div
              className="relative overflow-hidden cursor-pointer group shadow-lg border-[3px] border-white select-none"
              whileHover={{ scale: 1.015 }}
              onClick={() => setProfileOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Open detailed dossier overlay"
            >
              {/* Natural vibrant color as requested */}
              <img
                src="/profile.jpg"
                alt="Wafiq Nawaz portrait flagship representation"
                className="w-full aspect-[3/4] object-cover filter brightness-[0.98] contrast-[1.05] transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E4237]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <Caption><span className="text-[#FAF6F0] font-semibold">Open Dossier Details →</span></Caption>
              </div>
            </motion.div>
            <div className="mt-3 select-none text-left">
              <Caption>Subject: Wafiq Nawaz. Location: Bengaluru, IN.</Caption>
            </div>
          </div>

          {/* Column 2: Bio, stats & skills */}
          <div className="flex flex-col justify-between pl-0 md:pl-2">
            <div className="flex flex-col gap-3">
              <span className="font-meta text-[9px] tracking-[0.2em] text-[#E25A38] uppercase font-bold block">
                DEVELOPER DOSSIER
              </span>
              <h3 className="font-heading italic font-light text-[34px] leading-tight text-[#2E4237]">
                Discipline &amp; Craft
              </h3>
              <p className="font-body text-[13px] leading-relaxed text-[#3D4A40] mt-2">
                {ABOUT.bio}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="my-6">
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between items-baseline border-b border-[#242D27]/10 pb-1.5 text-xs">
                  <span className="font-meta text-[10px] text-[#738579] uppercase">Degree</span>
                  <span className="font-display font-bold text-[#242D27]">{IDENTITY.classLabel}</span>
                </li>
                <li className="flex justify-between items-baseline border-b border-[#242D27]/10 pb-1.5 text-xs">
                  <span className="font-meta text-[10px] text-[#738579] uppercase">University</span>
                  <span className="font-display font-medium text-[#242D27]">Svyasa University</span>
                </li>
                <li className="flex justify-between items-baseline text-xs">
                  <span className="font-meta text-[10px] text-[#738579] uppercase">Status</span>
                  <span className="font-display font-bold text-[#E25A38] uppercase tracking-wider">{IDENTITY.statusBadge}</span>
                </li>
              </ul>
            </div>

            {/* Interactive triggers */}
            <div className="select-none flex gap-4">
              <button
                onClick={() => setProfileOpen(true)}
                className="font-meta text-[10px] tracking-widest text-[#F4ECE1] bg-[#2E4237] hover:bg-[#E25A38] px-5 py-3 transition-colors duration-300 font-semibold uppercase rounded-[9999px]"
              >
                OPEN DOSSIER →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Folio */}
        <footer className="border-t border-[#242D27]/10 pt-5 w-full">
          <Folio page={3} text="SUBJECT DOSSIER" />
        </footer>
      </div>

      {/* Profile Card Dossier Overlay */}
      <AnimatePresence>
        {profileOpen && <ProfileCard onClose={() => setProfileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
