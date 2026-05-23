import React from 'react';
import { motion } from 'framer-motion';
import Folio from '../ui/Folio';

const contentsData = [
  { page: "03", section: "SUBJECT DOSSIER", desc: "A cinematic profiling of Wafiq Nawaz — detailing biographical roots, design philosophy, and core focus." },
  { page: "04", section: "TECHNICAL CAPABILITIES", desc: "A comprehensive breakdown of core technical capabilities, database systems, and secure application architecture." },
  { page: "05", section: "ACADEMIC TIMELINE", desc: "A retrospective timeline of academic milestones, system architectures, and engineering achievements." },
  { page: "06", section: "RETAILMIND SHOWCASE", desc: "A high-fidelity case study on intelligent demand forecasting, async operations, and analytical pipelines." },
  { page: "07", section: "ZALULU PORTFOLIO", desc: "An in-depth review of interactive digital interfaces, lookbook architecture, and modern client engineering." },
  { page: "08", section: "CONTACT DIRECTORY", desc: "Direct network gateway and encrypted communication channels for professional inquiries." },
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
    <div className="page-spread-content page-left-gutter h-full bg-jp-sage text-[#1A1916] flex flex-col justify-between">
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
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#C9A96E] uppercase font-bold">
            INDEX DIRECTORY
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-[#1A1916]/40 uppercase font-semibold">
            TOC // SECTION LOGS
          </span>
        </motion.header>

        {/* Spacious Single-Column Content Area */}
        <div className="my-auto py-4 flex flex-col justify-center w-full max-w-[390px] mx-auto">
          
          {/* Header block with elegant italic tagline */}
          <div className="flex flex-col gap-1.5 select-none">
            <span className="font-meta text-[8.5px] tracking-[0.3em] text-[#C9A96E] uppercase font-bold block">
              VOLUME 1.0
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl tracking-tight text-[#1A1916] leading-none mb-1">
              CONTENTS
            </h1>
            <p className="font-body italic text-[12.5px] leading-relaxed text-[#383530]/80 border-b border-[#1A1916]/10 pb-4">
              This publication maps Wafiq Nawaz's technology products, engineering milestones, and security research dossiers in a borderless wabi-sabi lookbook format.
            </p>
          </div>

          {/* Chapter listings with no middle creasing squish */}
          <motion.ol variants={listVariants} className="flex flex-col mt-2 select-text">
            {contentsData.map((item) => (
              <motion.li
                key={item.page}
                variants={itemVariants}
                className="grid grid-cols-[32px_1fr] gap-4 py-2 sm:py-2.5 border-b border-[#1A1916]/10 hover:bg-[#C9A96E]/[0.025] transition-colors group cursor-pointer duration-300"
              >
                <span className="font-display font-light text-[22px] leading-none text-[#7A746B] group-hover:text-[#C9A96E] transition-colors self-center">
                  {item.page}
                </span>
                <div className="flex flex-col justify-center">
                  <span className="font-display font-bold text-[11.5px] tracking-widest text-[#1A1916] group-hover:text-[#C9A96E] transition-colors uppercase">
                    {item.section}
                  </span>
                  <span className="chapter-desc mt-0.5 font-light leading-normal text-[11px] text-[#383530]/75">
                    {item.desc}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ol>

        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-5 w-full">
          <Folio page={2} text="INDEX DIRECTORY" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
