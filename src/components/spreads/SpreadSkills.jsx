import React from 'react';
import ColumnRule from '../ui/ColumnRule';
import Folio from '../ui/Folio';
import { SKILL_CATEGORIES } from '../../data/portfolio';

export default function SpreadSkills() {
  return (
    <div className="page-spread-content h-full bg-[#F5F1EB] p-12 text-[#1A1916]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.02]" />

      {/* Top Folio strip */}
      <header className="flex justify-between items-center border-b border-[#1A1916]/10 pb-5 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#DC684A] uppercase font-bold">
          CAPABILITIES
        </span>
        <span className="font-meta text-[9px] tracking-widest text-[#1A1916]/40 uppercase">
          SKILLS MATRIX
        </span>
      </header>

      {/* Background outline typographic embellishment (from 3.jpg style) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[35%] right-[-10%] font-heading font-outline-cream text-[140px] opacity-[0.18] leading-none uppercase tracking-[0.2em] font-black rotate-[90deg]">
          SKILLS
        </div>
      </div>

      {/* Decluttered Spacious Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.15fr_1.1fr] gap-10 my-auto py-8 items-stretch relative z-10">
        
        {/* Left Side: Technical & Systems Stack */}
        <div className="flex flex-col justify-center pr-2">
          <div className="flex flex-col gap-2 mb-6 select-none">
            <span className="font-meta text-[9.5px] tracking-[0.3em] text-[#DC684A] uppercase font-bold">
              ENGINEERING CORE
            </span>
            <h3 className="font-heading italic font-light text-[38px] leading-none text-[#1A1916]">
              Technical Skills
            </h3>
            <div className="w-12 h-[1px] bg-[#DC684A] mt-3" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <span className="font-meta text-[9px] tracking-widest text-[#7A746B] uppercase block font-semibold select-none">
                SOFTWARE &amp; FRAMEWORKS
              </span>
              <div className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES.technical.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill.label}
                    className="font-meta text-[11px] tracking-wide uppercase px-4 py-2 border border-[#1A1916]/20 text-[#1A1916] hover:border-[#D1B48C] hover:bg-[#D1B48C]/10 transition-all cursor-default duration-300 rounded-[9999px] font-medium"
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <span className="font-meta text-[9px] tracking-widest text-[#7A746B] uppercase block font-semibold select-none">
                DATABASE &amp; SECURE SYSTEMS
              </span>
              <div className="flex flex-wrap gap-2">
                {SKILL_CATEGORIES.technical.skills.slice(4).map((skill) => (
                  <span
                    key={skill.label}
                    className="font-meta text-[11px] tracking-wide uppercase px-4 py-2 border border-[#1A1916]/20 text-[#1A1916] hover:border-[#D1B48C] hover:bg-[#D1B48C]/10 transition-all cursor-default duration-300 rounded-[9999px] font-medium"
                  >
                    {skill.label}
                  </span>
                ))}
                <span className="font-meta text-[11px] tracking-wide uppercase px-4 py-2 border border-[#1A1916]/20 text-[#1A1916] hover:border-[#D1B48C] hover:bg-[#D1B48C]/10 transition-all cursor-default duration-300 rounded-[9999px] font-medium">
                  Web Security
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:flex justify-center items-center">
          <ColumnRule vertical={true} />
        </div>

        {/* Right Side: Soft traits & Operations */}
        <div className="flex flex-col justify-center pl-2 gap-8">
          {/* Section A: Soft Skills */}
          <div>
            <div className="flex flex-col gap-2 mb-4 select-none">
              <span className="font-meta text-[9px] tracking-widest text-[#7A746B] uppercase block font-semibold">
                TRAITS &amp; APTITUDE
              </span>
              <h4 className="font-display font-bold text-[#1A1916] text-sm tracking-widest uppercase">
                {SKILL_CATEGORIES.soft.name}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {SKILL_CATEGORIES.soft.skills.map((skill) => (
                <span
                  key={skill.label}
                  className="font-meta text-[11.5px] tracking-wide uppercase px-4.5 py-2.5 bg-[#FAF6F0] border border-[#1A1916]/5 text-[#383530] hover:border-[#D1B48C] hover:text-[#D1B48C] transition-all cursor-default duration-300 rounded-[9999px] font-medium"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Section B: Operational Tools */}
          <div>
            <div className="flex flex-col gap-2 mb-4 select-none">
              <span className="font-meta text-[9px] tracking-widest text-[#7A746B] uppercase block font-semibold">
                SYSTEM OPERATIONS
              </span>
              <h4 className="font-display font-bold text-[#1A1916] text-sm tracking-widest uppercase">
                {SKILL_CATEGORIES.other.name}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {SKILL_CATEGORIES.other.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill.label}
                  className="font-meta text-[11px] tracking-wide uppercase px-4 py-2 border border-[#1A1916]/20 text-[#1A1916] hover:border-[#D1B48C] hover:bg-[#D1B48C]/10 transition-all cursor-default duration-300 rounded-[9999px] font-medium"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-[#1A1916]/10 pt-5 w-full">
        <Folio page={4} text="SKILLS MATRIX" />
      </footer>
    </div>
  );
}
