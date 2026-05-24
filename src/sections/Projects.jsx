import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Grain } from '../components/Grain';
import SectionLabel from '../components/SectionLabel';
import { projects } from '../data/projects';

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-[#1C1915] text-[#F2EDE4] py-24 sm:py-32 px-6 sm:px-12 select-none overflow-hidden"
    >
      {/* Tactile paper grain realism */}
      <Grain />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-[1200px] mx-auto flex flex-col gap-12 z-10 relative"
      >
        {/* Top Header Log */}
        <div className="flex justify-between items-center w-full border-b border-[#F2EDE4]/10 pb-5">
          <SectionLabel number="04" label="CASE FILE SHOWCASE" />
          <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase font-semibold">
            DEVELOPMENT VAULT
          </span>
        </div>

        {/* Section Title */}
        <motion.div variants={rowVariants} className="w-full border-b border-[#1A5EDB]/40 pb-6">
          <h2 className="font-display text-[clamp(4.5rem,14vw,11.5rem)] leading-[0.8] tracking-[-0.01em] uppercase select-text">
            Projects.
          </h2>
        </motion.div>

        {/* Alternate full-width projects list */}
        <div className="flex flex-col mt-8">
          {projects.map((project, idx) => {
            const isAlternate = idx % 2 === 1;
            return (
              <React.Fragment key={project.id}>
                <motion.div
                  variants={rowVariants}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 items-center relative"
                >
                  {/* Background index number watermark (Change 13) */}
                  <span className="absolute right-[-2rem] top-0 font-display text-[clamp(8rem,18vw,14rem)] text-[#F2EDE4] opacity-[0.055] select-none pointer-events-none z-0 leading-none">
                    {project.id}
                  </span>

                  {/* Left Column: Image Frame / Text info based on alternate layouts */}
                  <div 
                    className={`lg:col-span-6 w-full relative z-10 ${
                      isAlternate ? 'lg:order-2' : ''
                    }`}
                  >
                    {/* Typographic Poster Frame (Change 12) */}
                    <div className="project-frame select-none cursor-pointer group relative overflow-hidden">
                      {/* Large ghosted title */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-[clamp(3rem,9vw,7rem)] text-[#F2EDE4]/[0.07] tracking-wider group-hover:text-[#1A5EDB]/[0.10] transition-colors duration-500 text-center leading-none px-4">
                          {project.title}
                        </span>
                      </div>

                      {/* Foreground data block */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1 border-t border-[#F2EDE4]/[0.06] bg-gradient-to-t from-[#1C1915]/80 to-transparent text-left">
                        <span className="font-mono text-[8px] text-[#1A5EDB]/60 tracking-[0.2em] uppercase">
                          ── STACK ──────────────────
                        </span>
                        {project.stack.slice(0, 3).map(tech => (
                          <span key={tech} className="font-mono text-[9px] text-[#F2EDE4]/30">
                            › {tech}
                          </span>
                        ))}
                        <span className="font-mono text-[7px] text-[#C9A96E]/40 mt-1 tracking-widest">
                          {project.year} · {project.status}
                        </span>
                      </div>

                      {/* Corner brackets */}
                      <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#F2EDE4]/15 group-hover:border-[#1A5EDB]/50 transition-colors" />
                      <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#F2EDE4]/15 group-hover:border-[#1A5EDB]/50 transition-colors" />
                    </div>
                  </div>

                  {/* Right Column: Project Typographic Details */}
                  <div 
                    className={`lg:col-span-6 flex flex-col items-start gap-4 text-left relative z-10 ${
                      isAlternate ? 'lg:order-1' : ''
                    }`}
                  >
                    {/* Tech & Year Strip */}
                    <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.15em] text-[#F2EDE4]/30 uppercase font-semibold">
                      <span>{project.year}</span>
                      <span>·</span>
                      <span className="text-[#C9A96E]">{project.status}</span>
                    </div>

                    {/* Project Header (Change 14) */}
                    <div className="flex flex-col gap-0.5 select-text">
                      <h3 className="font-display text-[clamp(2.75rem,5vw,4.5rem)] tracking-tight leading-[0.95] text-[#F2EDE4] relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#1A5EDB] after:w-0 hover:after:w-full after:transition-all after:duration-400">
                        {project.title}
                      </h3>
                    </div>

                    {/* Paragraph description */}
                    <p className="font-body text-[13.5px] leading-[1.75] text-[#F2EDE4]/70 max-w-[46ch] select-text">
                      {project.description}
                    </p>

                    {/* Tech list tag leaders */}
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[9px] tracking-widest text-[#F2EDE4]/30 uppercase pt-2 select-none">
                      {project.stack.map((tech, techIdx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {techIdx < project.stack.length - 1 && <span className="text-[#1A5EDB]/40">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* CTAs Trigger keys */}
                    <div className="flex items-center gap-6 mt-4 select-none">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[10px] tracking-[0.18em] text-[#1A5EDB] font-bold hover:underline cursor-pointer uppercase"
                        >
                          EXECUTE PAYLOAD ↗
                        </a>
                      )}
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] tracking-[0.15em] text-[#F2EDE4]/40 hover:text-[#F2EDE4] transition-colors cursor-pointer uppercase"
                      >
                        VIEW SOURCE
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Styled Row Separator */}
                {idx < projects.length - 1 && (
                  <div className="project-divider" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
