import React from 'react';
import { motion } from 'framer-motion';
import Caption from '../ui/Caption';
import Folio from '../ui/Folio';
import { PROJECTS } from '../../data/portfolio';

export default function SpreadProjects({ projectIndex }) {
  const project = PROJECTS[projectIndex];

  if (!project) return null;

  // Page Numbers:
  // Project 1 (index 0) is P.06
  // Project 2 (index 1) is P.07
  const pageNum = 6 + projectIndex;
  const isDark = projectIndex === 0;

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

  const svgVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  // Vector graphics matching the Han Nguyen style
  const renderAbstractGraphic = () => {
    if (projectIndex === 0) {
      // RetailMind
      return (
        <div className="w-full h-full bg-[#1C1A17] flex flex-col justify-between p-4 text-[#F5F1EB] border border-[#C9A96E]/20 select-none">
          <div className="flex justify-between items-start">
            <span className="font-meta text-[8px] tracking-widest text-[#C9A96E] font-semibold">INGESTION PIPELINE</span>
            <span className="font-meta text-[8px] text-[#C9A96E] font-bold">VOL I · 001</span>
          </div>
          
          <div className="my-auto flex flex-col items-center gap-2 text-center py-2">
            <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A96E] stroke-[0.75] fill-none opacity-90 animate-pulse">
              <motion.circle cx="50" cy="50" r="40" strokeDasharray="3 3" variants={svgVariants} />
              <motion.circle cx="50" cy="50" r="24" variants={svgVariants} />
              <motion.rect x="38" y="38" width="24" height="24" strokeDasharray="2 1" variants={svgVariants} />
              <motion.line x1="10" y1="50" x2="90" y2="50" variants={svgVariants} />
              <motion.line x1="50" y1="10" x2="50" y2="90" variants={svgVariants} />
              <motion.circle cx="50" cy="50" r="4" fill="#C9A96E" stroke="none" />
            </svg>
            <h4 className="font-heading italic text-lg text-[#C9A96E] mt-1">RetailMind</h4>
          </div>
        </div>
      );
    } else {
      // Zalulu Portfolio
      return (
        <div className="w-full h-full bg-[#E5DBD7] flex flex-col justify-between p-4 text-[#1A1916] border border-[#C9A96E]/25 select-none">
          <div className="flex justify-between items-start">
            <span className="font-meta text-[8px] tracking-widest text-[#C9A96E] font-semibold">TACTILE DESIGN</span>
            <span className="font-meta text-[8px] text-[#C9A96E] font-bold">VOL I · 002</span>
          </div>
          
          <div className="my-auto flex flex-col items-center gap-2 text-center py-2">
            <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-[#C9A96E] stroke-[0.75] fill-none opacity-90 animate-pulse">
              <motion.rect x="15" y="22" width="70" height="56" rx="2" variants={svgVariants} />
              <motion.line x1="50" y1="22" x2="50" y2="78" strokeWidth="1" stroke="#3D4A3E" variants={svgVariants} />
              <motion.line x1="22" y1="35" x2="42" y2="35" strokeDasharray="1 1" variants={svgVariants} />
              <motion.line x1="58" y1="35" x2="78" y2="35" strokeDasharray="1 1" variants={svgVariants} />
            </svg>
            <h4 className="font-heading italic text-lg text-[#1A1916] mt-1">Zalulu Issue</h4>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={`page-spread-content ${isDark ? 'page-left-gutter' : 'page-right-gutter'} h-full ${isDark ? 'bg-jp-granite text-[#F5F1EB]' : 'bg-jp-rose text-[#1A1916]'}`}>
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.02]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex flex-col justify-between"
      >
        {/* Top Header */}
        <motion.header 
          variants={itemVariants} 
          className={`flex justify-between items-center border-b ${isDark ? 'border-white/10' : 'border-[#1A1916]/10'} pb-4 select-none`}
        >
          <span className="font-meta text-[9px] tracking-[0.25em] text-[#C9A96E] uppercase font-bold">
            CASE STUDY SHOWCASE
          </span>
          <span className={`font-meta text-[9px] tracking-widest ${isDark ? 'text-white/40' : 'text-[#1A1916]/40'} uppercase font-semibold`}>
            PROJECT {String(projectIndex + 1).padStart(2, '0')}
          </span>
        </motion.header>

        {/* Single-Column Wabi-Sabi Flow (V6 Spacious Case Studies) */}
        <div className="my-auto py-3 flex flex-col gap-4 max-w-[420px] mx-auto w-full">
          
          {/* Centered Technical Graphic Card */}
          <motion.div variants={itemVariants} className="w-full max-w-[340px] mx-auto aspect-[16/9] shadow-lg">
            {renderAbstractGraphic()}
          </motion.div>

          {/* Project description stack (Left-aligned as instructed in Phase 6) */}
          <div className="flex flex-col gap-1.5 text-left mt-1 px-2">
            <span className="font-meta text-[8px] tracking-[0.2em] text-[#C9A96E] block font-bold uppercase select-none">
              {project.type}
            </span>
            <h3 className="font-heading italic font-light text-[26px] leading-tight select-none">
              {project.title}
            </h3>
            <p className={`font-body text-[12px] leading-relaxed ${isDark ? 'text-[#F5F0E8]/80' : 'text-[#3A3020]/80'} mt-1 select-text`}>
              {project.desc}
            </p>
          </div>

          {/* Technical Specs meta bar */}
          <div className={`pt-2.5 border-t ${isDark ? 'border-white/10' : 'border-[#1A1916]/10'} flex justify-between items-center select-none text-xs px-2`}>
            <div className="flex flex-col text-left">
              <span className={`font-meta text-[8px] tracking-widest ${isDark ? 'text-white/45' : 'text-[#7A746B]'} uppercase mb-0.5 font-bold`}>STACK</span>
              <span className="font-meta text-[9.5px] font-semibold">{project.tech.split(', ').slice(0, 3).join(', ')}</span>
            </div>
            <div className="flex flex-col text-right">
              <span className={`font-meta text-[8px] tracking-widest ${isDark ? 'text-white/45' : 'text-[#7A746B]'} uppercase mb-0.5 font-bold`}>YEAR</span>
              <span className="font-display font-bold">{project.year}</span>
            </div>
          </div>

          {/* Action triggers styled as sleek hierarchical CTA keys (cta-primary vs cta-secondary) */}
          <motion.div variants={itemVariants} className="flex justify-start items-center gap-6 mt-1 px-2 select-none">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="cta-primary"
            >
              EXECUTE PAYLOAD ↗
            </a>
            <a
              href="https://github.com/ZaLuLu"
              target="_blank"
              rel="noreferrer"
              className="cta-secondary"
            >
              VIEW SOURCE
            </a>
          </motion.div>

        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className={`border-t ${isDark ? 'border-white/10' : 'border-[#1A1916]/10'} pt-4 w-full`}>
          <Folio page={pageNum} text={`PROJECT: ${project.title}`} />
        </motion.footer>
      </motion.div>
    </div>
  );
}
