import React from 'react';
import { motion } from 'framer-motion';
import ColumnRule from '../ui/ColumnRule';
import Folio from '../ui/Folio';
import { SKILL_CATEGORIES } from '../../data/portfolio';

export default function SpreadSkills() {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="page-spread-content h-full bg-[#F5F1EB] text-[#1A1916]">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.02]" />

      {/* Background outline typographic embellishment (from 3.jpg style) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[35%] right-[-10%] font-heading font-outline-cream text-[150px] opacity-[0.16] leading-none uppercase tracking-[0.25em] font-black rotate-[90deg]">
          SKILLS
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex flex-col justify-between relative z-10"
      >
        {/* Top Folio strip */}
        <motion.header 
          variants={itemVariants} 
          className="flex justify-between items-center border-b border-[#1A1916]/10 pb-5 select-none"
        >
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#DC684A] uppercase font-bold">
            CAPABILITIES
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-[#1A1916]/40 uppercase font-semibold">
            SKILLS MATRIX
          </span>
        </motion.header>

        {/* Spacious Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.15fr_1.1fr] gap-12 my-auto py-8 items-stretch">
          
          {/* Left Side: Technical & Systems Stack */}
          <div className="flex flex-col justify-center pr-2">
            <motion.div variants={itemVariants} className="flex flex-col gap-2 mb-8 select-none">
              <span className="font-meta text-[9.5px] tracking-[0.3em] text-[#DC684A] uppercase font-bold">
                ENGINEERING CORE
              </span>
              <h3 className="font-heading italic font-light text-[38px] leading-none text-[#1A1916]">
                Technical Skills
              </h3>
              <div className="w-12 h-[1px] bg-[#DC684A] mt-3" />
            </motion.div>

            <div className="flex flex-col gap-6">
              <motion.div variants={itemVariants} className="flex flex-col gap-3.5">
                <span className="font-meta text-[9px] tracking-widest text-[#7A746B] uppercase block font-semibold select-none">
                  SOFTWARE &amp; FRAMEWORKS
                </span>
                <motion.div variants={tagContainerVariants} className="flex flex-wrap gap-2">
                  {SKILL_CATEGORIES.technical.skills.slice(0, 4).map((skill) => (
                    <motion.span
                      key={skill.label}
                      variants={tagVariants}
                      className="font-meta text-[11px] tracking-wider uppercase px-4 py-2 border border-[#1A1916]/20 text-[#1A1916] hover:border-[#D1B48C] hover:bg-[#D1B48C]/10 transition-all cursor-default duration-300 rounded-[9999px] font-semibold"
                    >
                      {skill.label}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-3.5 mt-2">
                <span className="font-meta text-[9px] tracking-widest text-[#7A746B] uppercase block font-semibold select-none">
                  DATABASE &amp; SECURE SYSTEMS
                </span>
                <motion.div variants={tagContainerVariants} className="flex flex-wrap gap-2">
                  {SKILL_CATEGORIES.technical.skills.slice(4).map((skill) => (
                    <motion.span
                      key={skill.label}
                      variants={tagVariants}
                      className="font-meta text-[11px] tracking-wider uppercase px-4 py-2 border border-[#1A1916]/20 text-[#1A1916] hover:border-[#D1B48C] hover:bg-[#D1B48C]/10 transition-all cursor-default duration-300 rounded-[9999px] font-semibold"
                    >
                      {skill.label}
                    </motion.span>
                  ))}
                  <motion.span 
                    variants={tagVariants}
                    className="font-meta text-[11px] tracking-wider uppercase px-4 py-2 border border-[#1A1916]/20 text-[#1A1916] hover:border-[#D1B48C] hover:bg-[#D1B48C]/10 transition-all cursor-default duration-300 rounded-[9999px] font-semibold"
                  >
                    Web Security
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex justify-center items-center">
            <ColumnRule vertical={true} />
          </div>

          {/* Right Side: Soft traits & Operations */}
          <div className="flex flex-col justify-center pl-0 md:pl-2 gap-8 mt-10 md:mt-0">
            {/* Section A: Soft Skills */}
            <div className="flex flex-col gap-4">
              <motion.div variants={itemVariants} className="flex flex-col gap-2 select-none">
                <span className="font-meta text-[9px] tracking-widest text-[#7A746B] uppercase block font-semibold">
                  TRAITS &amp; APTITUDE
                </span>
                <h4 className="font-display font-bold text-[#1A1916] text-sm tracking-widest uppercase">
                  {SKILL_CATEGORIES.soft.name}
                </h4>
              </motion.div>

              <motion.div variants={tagContainerVariants} className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES.soft.skills.map((skill) => (
                  <motion.span
                    key={skill.label}
                    variants={tagVariants}
                    className="font-meta text-[11.5px] tracking-wider uppercase px-4.5 py-2.5 bg-[#FAF6F0] border border-[#1A1916]/5 text-[#383530] hover:border-[#D1B48C] hover:text-[#D1B48C] transition-all cursor-default duration-300 rounded-[9999px] font-semibold"
                  >
                    {skill.label}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Section B: Operational Tools */}
            <div className="flex flex-col gap-4">
              <motion.div variants={itemVariants} className="flex flex-col gap-2 select-none">
                <span className="font-meta text-[9px] tracking-widest text-[#7A746B] uppercase block font-semibold">
                  SYSTEM OPERATIONS
                </span>
                <h4 className="font-display font-bold text-[#1A1916] text-sm tracking-widest uppercase">
                  {SKILL_CATEGORIES.other.name}
                </h4>
              </motion.div>

              <motion.div variants={tagContainerVariants} className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES.other.skills.slice(0, 3).map((skill) => (
                  <motion.span
                    key={skill.label}
                    variants={tagVariants}
                    className="font-meta text-[11px] tracking-wider uppercase px-4 py-2 border border-[#1A1916]/20 text-[#1A1916] hover:border-[#D1B48C] hover:bg-[#D1B48C]/10 transition-all cursor-default duration-300 rounded-[9999px] font-semibold"
                  >
                    {skill.label}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-[#1A1916]/10 pt-5 w-full">
          <Folio page={4} text="SKILLS MATRIX" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
