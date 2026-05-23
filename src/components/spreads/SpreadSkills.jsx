import React from 'react';
import ColumnRule from '../ui/ColumnRule';
import Folio from '../ui/Folio';
import { SKILL_CATEGORIES } from '../../data/portfolio';

function getSkillLevel(percentage) {
  if (percentage >= 85) return 'Expert';
  if (percentage >= 75) return 'Advanced';
  if (percentage >= 65) return 'Proficient';
  return 'Competent';
}

export default function SpreadSkills() {
  const getTypographicBar = (percentage) => {
    // 20 total segments for typographic bars
    const totalSegments = 20;
    const filledSegments = Math.round((percentage / 100) * totalSegments);
    return '═'.repeat(filledSegments) + '┄'.repeat(totalSegments - filledSegments);
  };

  return (
    <div className="page-spread-content h-full bg-[#F8F5F0]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay" />

      {/* Top Folio strip */}
      <header className="flex justify-between items-center border-b border-[#1A1714]/10 pb-4 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#C41E1E] uppercase font-bold">
          INFOGRAPHIC ASSESSMENT
        </span>
        <span className="font-meta text-[9px] tracking-widest text-[#1A1714]/50">
          ENGINEERING SKILLS
        </span>
      </header>

      {/* Skills Grid */}
      <div className="flex flex-col gap-6 my-auto py-4">
        
        {/* Flagship Column: Technical Development */}
        <div className="border-b border-[#1A1714]/15 pb-4">
          <div className="flex items-center gap-4 mb-3 select-none">
            <h3 className="font-display font-bold text-sm tracking-widest text-[#0F2318] uppercase">
              {SKILL_CATEGORIES.technical.name} DEVELOPMENT
            </h3>
            <ColumnRule />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
            {SKILL_CATEGORIES.technical.skills.map((skill) => (
              <div key={skill.label} className="flex items-center justify-between py-2 border-b border-[#1A1714]/5">
                <span className="font-body font-medium text-[13.5px] text-[#1A1714] min-w-[150px]">
                  {skill.label}
                </span>
                
                {/* Typographic Fill Bar */}
                <span className="flex-1 mx-4 font-meta text-[9px] text-[#C41E1E]/70 select-none overflow-hidden whitespace-nowrap tracking-[2px]">
                  {getTypographicBar(skill.percentage)}
                </span>
                
                <span className="font-meta text-[9px] tracking-wider text-[#8A847E] uppercase select-none min-w-[70px] text-right">
                  {getSkillLevel(skill.percentage)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column split for Soft & Other skills */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.1fr_1fr] gap-6 items-stretch">
          
          {/* Column A: Soft Skills */}
          <div>
            <div className="flex items-center gap-4 mb-3 select-none">
              <h3 className="font-display font-bold text-xs tracking-wider text-[#0F2318] uppercase">
                {SKILL_CATEGORIES.soft.name}
              </h3>
              <ColumnRule />
            </div>

            <div className="flex flex-col gap-1">
              {SKILL_CATEGORIES.soft.skills.map((skill) => (
                <div key={skill.label} className="flex items-center justify-between py-2 border-b border-[#1A1714]/5">
                  <span className="font-body font-medium text-[13px] text-[#1A1714]">
                    {skill.label}
                  </span>
                  
                  {/* Subtle clean rule */}
                  <span className="flex-1 mx-3 border-b border-dashed border-[#1A1714]/15" />
                  
                  <span className="font-meta text-[9px] tracking-wider text-[#8A847E] uppercase select-none">
                    {getSkillLevel(skill.percentage)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Splitter */}
          <div className="hidden md:flex justify-center items-center">
            <ColumnRule vertical={true} />
          </div>

          {/* Column B: Operational Tools & Traits */}
          <div>
            <div className="flex items-center gap-4 mb-3 select-none">
              <h3 className="font-display font-bold text-xs tracking-wider text-[#0F2318] uppercase">
                {SKILL_CATEGORIES.other.name}
              </h3>
              <ColumnRule />
            </div>

            <div className="flex flex-col gap-1">
              {SKILL_CATEGORIES.other.skills.map((skill) => (
                <div key={skill.label} className="flex items-center justify-between py-2 border-b border-[#1A1714]/5">
                  <span className="font-body font-medium text-[13px] text-[#1A1714]">
                    {skill.label}
                  </span>
                  
                  {/* Subtle clean rule */}
                  <span className="flex-1 mx-3 border-b border-dashed border-[#1A1714]/15" />
                  
                  <span className="font-meta text-[9px] tracking-wider text-[#8A847E] uppercase select-none">
                    {getSkillLevel(skill.percentage)}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-[#1A1714]/10 pt-4 w-full">
        <Folio page={4} text="PORTFOLIO TECHNICAL ASSESSMENT" />
      </footer>
    </div>
  );
}
