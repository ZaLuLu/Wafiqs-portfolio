import React from 'react';
import ColumnRule from '../ui/ColumnRule';
import Caption from '../ui/Caption';
import Folio from '../ui/Folio';
import { IDENTITY } from '../../data/portfolio';

const milestoneData = [
  {
    year: "2026",
    title: "AI Project Deployment — RetailMind",
    desc: "Ingested CSV files using FastAPI, performed analytics, and summarized critical inventory/dead stock warnings using the Gemini AI API."
  },
  {
    year: "2026",
    title: "Editorial Portfolio Redesign",
    desc: "Developed a custom interactive magazine concept utilizing Vite, React 19, and Tailwind v4 to represent digital craft."
  },
  {
    year: "2025",
    title: "Security Tooling & FastAPI Research",
    desc: "Built security pipelines, JWT authentication handlers, and asynchronous PostgreSQL schemas with SQLAlchemy."
  },
  {
    year: "2023 – Present",
    title: "Computer Science Engineering Core",
    desc: "Deepened foundations in data structures, algorithms, network security, and secure software development."
  }
];

export default function SpreadExperience() {
  return (
    <div className="page-spread-content h-full bg-[#F8F5F0]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay" />

      {/* Top Folio strip */}
      <header className="flex justify-between items-center border-b border-[#1A1714]/10 pb-4 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#C41E1E] uppercase font-bold">
          ACADEMIC & PROFESSIONAL HISTORY
        </span>
        <span className="font-meta text-[9px] tracking-widest text-[#1A1714]/50">
          TIMELINE
        </span>
      </header>

      {/* Experience Spread Columns */}
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.1fr_1.1fr] gap-6 my-auto py-4 items-stretch">
        
        {/* Left Page: Timeline Milestones */}
        <div className="flex flex-col justify-center pr-2">
          <div className="flex items-center gap-4 mb-4 select-none">
            <h3 className="font-display font-bold text-sm tracking-widest text-[#0F2318] uppercase">
              MILESTONES & CERTIFICATIONS
            </h3>
            <ColumnRule />
          </div>

          <div className="flex flex-col">
            {milestoneData.map((item, index) => (
              <div
                key={index}
                className="py-3 border-b border-[#1A1714]/10 last:border-b-0 flex flex-col gap-1 hover:bg-[#C41E1E]/[0.01] transition-colors pl-2"
              >
                <span className="font-meta text-[10px] text-[#C41E1E] font-bold tracking-wider">
                  {item.year}
                </span>
                <span className="font-display font-bold text-sm text-[#1A1714] leading-snug">
                  {item.title}
                </span>
                <p className="font-body text-[12px] leading-relaxed text-[#4A4540]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column Divider */}
        <div className="hidden md:flex justify-center items-center">
          <ColumnRule vertical={true} />
        </div>

        {/* Right Page: Photo Feature & Education block */}
        <div className="flex flex-col justify-between pl-2 gap-6">
          
          {/* Large Editorial Photo block (Full color, contrast as requested) */}
          <div className="flex flex-col gap-2 select-none">
            <div className="overflow-hidden border border-[#1A1714]/15 shadow-md">
              <img
                src="/profile.jpg"
                alt="Wafiq Nawaz working session"
                className="w-full aspect-[16/10] object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <Caption>Fig 4.2: Development iteration, cybersecurity practice, and code craft in Bengaluru.</Caption>
          </div>

          {/* Education Block (Forest style) */}
          <div className="p-5 border border-[#1B3A2D]/20 bg-[#1B3A2D]/[0.03] border-l-4 border-[#0F2318] flex flex-col justify-between">
            <span className="font-meta text-[9px] tracking-[0.35em] text-[#C41E1E] font-bold block mb-2 select-none">
              EDUCATION ALMA MATER
            </span>
            
            <div className="flex flex-col gap-1 mb-3">
              <h4 className="font-display font-bold text-[#0F2318] text-base leading-tight">
                B.E. Computer Science Engineering
              </h4>
              <span className="font-body text-xs text-[#4A4540]">
                Svyasa University · Bengaluru, Karnataka, India
              </span>
            </div>

            <p className="font-body text-[11px] leading-relaxed text-[#8A847E]">
              Graduation expected: <strong>Summer 2026</strong>. Rigorous training in software development frameworks, data structures, network protocols, and cryptographic concepts.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-[#1A1714]/10 pt-4 w-full">
        <Folio page={9} text="PORTFOLIO RECORD OF EDUCATION" />
      </footer>
    </div>
  );
}
