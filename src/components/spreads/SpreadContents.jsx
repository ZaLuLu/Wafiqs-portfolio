import React from 'react';
import { motion } from 'framer-motion';
import ColumnRule from '../ui/ColumnRule';
import Folio from '../ui/Folio';

const contentsData = [
  { page: "03", section: "SUBJECT DOSSIER", desc: "Flagship bio with our subject's primary full-color portrait" },
  { page: "04", section: "TECHNICAL CAPABILITIES", desc: "Equipped engineering stack, databases, and secure systems matrix" },
  { page: "05", section: "ACADEMIC TIMELINE", desc: "Academic milestones, educational dossier, and system history" },
  { page: "06", section: "RETAILMIND SHOWCASE", desc: "AI demand forecasting, async FastAPI, and JWT-authenticated routes" },
  { page: "07", section: "ZALULU PORTFOLIO", desc: "High-end digital lookbook review engineered in React and Vite" },
  { page: "08", section: "CONTACT DIRECTORY", desc: "Secure message transmitter and direct network access" },
];

export default function SpreadContents() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
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
            INDEX DIRECTORY
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-[#1A1916]/40 uppercase font-semibold">
            TOC // SECTION LOGS
          </span>
        </motion.header>

        {/* Spacious Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.15fr_1.4fr] gap-12 my-auto py-8 items-stretch">
          
          {/* Left Side: Editorial Typography & Whitespace */}
          <div className="flex flex-col justify-between pr-4 select-none">
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <span className="font-meta text-[9px] tracking-[0.3em] text-[#DC684A] uppercase font-bold block mb-1">
                VOLUME 1.0
              </span>
              <h2 className="font-heading italic font-light text-[62px] sm:text-[72px] leading-[0.8] text-[#1A1916]">
                CON<br/>TENTS
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="border-t border-[#1A1916]/10 pt-6 mt-8 md:mt-0">
              <span className="font-meta text-[8.5px] tracking-[0.35em] text-[#1A1916]/50 block uppercase mb-3 font-semibold">
                CREATIVE BLUEPRINT
              </span>
              <p className="font-body text-[13px] leading-relaxed text-[#383530]">
                This publication maps Wafiq Nawaz's technology products, engineering milestones, and security research dossiers in a borderless lookbook format.
              </p>
            </motion.div>
          </div>

          {/* Column Divider */}
          <div className="hidden md:flex justify-center items-center">
            <ColumnRule vertical={true} />
          </div>

          {/* Right Side: Spacious Page Listings */}
          <div className="flex flex-col justify-center pl-0 md:pl-4 gap-1">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4 select-none">
              <span className="font-meta text-[9.5px] tracking-[0.35em] text-[#1A1916]/40 uppercase font-semibold">
                IN THIS ISSUE
              </span>
              <ColumnRule />
            </motion.div>

            <motion.ol variants={listVariants} className="flex flex-col">
              {contentsData.map((item) => (
                <motion.li
                  key={item.page}
                  variants={itemVariants}
                  className="grid grid-cols-[44px_1fr] gap-6 py-4.5 border-b border-[#1A1916]/10 hover:bg-[#DC684A]/[0.025] transition-colors group cursor-pointer duration-300"
                >
                  <span className="font-display font-light text-[34px] leading-none text-[#7A746B] group-hover:text-[#DC684A] transition-colors self-center">
                    {item.page}
                  </span>
                  <div className="flex flex-col justify-center">
                    <span className="font-display font-bold text-[14px] tracking-widest text-[#1A1916] group-hover:text-[#DC684A] transition-colors uppercase">
                      {item.section}
                    </span>
                    <span className="font-meta text-[11px] text-[#7A746B] mt-1 font-light leading-normal">
                      {item.desc}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>

        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-5 w-full">
          <Folio page={2} text="INDEX DIRECTORY" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
