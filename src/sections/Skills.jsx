import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Grain } from '../components/Grain';
import SectionLabel from '../components/SectionLabel';
import { skills } from '../data/skills';

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Render square block matrix based on 1-10 level (Change 9)
  const renderSquareBlocks = (level, isVisible) => {
    return (
      <div className="flex items-center gap-[1px]">
        {Array.from({ length: 10 }, (_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible
              ? { opacity: i < level ? 1 : 0.08, scale: 1 }
              : { opacity: 0, scale: 0 }
            }
            transition={{ delay: i * 0.04, duration: 0.2, ease: 'easeOut' }}
            className="inline-block text-[11px] leading-none font-mono"
            style={{ color: '#F5A623' }}
          >
            ■
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-[#0D0C09] text-[#F2EDE4] py-24 sm:py-32 px-6 sm:px-12 select-none overflow-hidden"
    >
      {/* Paper grain tactility overlay */}
      <Grain />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-[1200px] mx-auto flex flex-col gap-12 z-10 relative"
      >
        {/* Top Header Log */}
        <div className="flex justify-between items-center w-full border-b border-[#F2EDE4]/10 pb-5">
          <SectionLabel number="03" label="CAPABILITIES MATRIX" />
          <span className="font-mono text-[9px] tracking-widest text-[#F5A623] uppercase font-semibold">
            SYSTEM SPECIFICATION
          </span>
        </div>

        {/* Section Title */}
        <motion.h2
          variants={rowVariants}
          className="font-display text-[clamp(4.5rem,14vw,11.5rem)] leading-[0.8] tracking-[-0.01em] text-[#F5A623] uppercase select-text"
        >
          Skills.
        </motion.h2>

        {/* Technical & Soft Matrix Layout (Change 11) */}
        <div className="flex flex-col gap-16 mt-6">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              variants={categoryVariants}
              className="flex flex-col gap-6 w-full"
            >
              {/* Category Subtitle */}
              <div className="border-b border-[#F5A623]/25 pb-4 flex justify-between items-end">
                <h3 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wide text-[#F5A623] uppercase">
                  {cat.category}
                </h3>
                <span className="font-mono text-[8px] text-[#F2EDE4]/25 tracking-widest uppercase">
                  SECTOR // 0{idx + 1}
                </span>
              </div>

              {/* Grid of leader rows and block gauges — now full width */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {cat.items.map((item, rowIdx) => (
                  <motion.div
                    key={item.name}
                    variants={rowVariants}
                    custom={rowIdx}
                    className="flex flex-col gap-1.5"
                  >
                    {/* Typographic dot leader row */}
                    <div className="leader-row select-text">
                      <span className="leader-skill">{item.name}</span>
                      {/* Animated Leader line (Change 10) */}
                      <motion.div
                        className="leader-line"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: rowIdx * 0.06 }}
                        style={{ transformOrigin: 'left center' }}
                      />
                      <span className="leader-cat">{item.cat}</span>
                    </div>

                    {/* Monospaced block gauges */}
                    <div className="flex justify-between items-center select-none pt-0.5">
                      <span className="font-mono text-[8px] text-[#F2EDE4]/25 uppercase font-semibold">GAUGE</span>
                      {renderSquareBlocks(item.level, isInView)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
