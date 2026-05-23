import React from 'react';
import ColumnRule from '../ui/ColumnRule';
import Folio from '../ui/Folio';

const milestoneData = [
  {
    year: "2026",
    title: "AI Spikes & demand analytics — RetailMind",
    desc: "Ingested CSV reports using FastAPI, developed async SQLAlchemy operations, and structured automated critical insights via the Gemini AI API."
  },
  {
    year: "2026",
    title: "Tactile Magazine spread Portfolio",
    desc: "Designed and engineered an 8-page interactive print-style magazine interface utilizing Vite, React 19, and Tailwind v4."
  },
  {
    year: "2025",
    title: "FastAPI Backend & Security Research",
    desc: "Engineered web security pipelines, cryptographic helpers, and JWT-authenticated route nodes."
  },
  {
    year: "2023 – Present",
    title: "Academic Focus at Svyasa University",
    desc: "Specializing in Computer Science Engineering core systems, networks, data structures, and secure development."
  }
];

export default function SpreadExperience() {
  return (
    <div className="page-spread-content h-full bg-[#F4ECE1] p-12 text-[#242D27]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.02]" />

      {/* Top Folio strip */}
      <header className="flex justify-between items-center border-b border-[#242D27]/10 pb-5 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#E25A38] uppercase font-bold">
          ACADEMIC MILESTONES
        </span>
        <span className="font-meta text-[9px] tracking-widest text-[#242D27]/40 uppercase">
          HISTORY
        </span>
      </header>

      {/* Background outline typographic embellishment (from 3.jpg style) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute bottom-[20%] left-[-8%] font-heading font-outline-cream text-[130px] opacity-[0.16] leading-none uppercase tracking-[0.25em] font-black rotate-[-90deg]">
          HISTORY
        </div>
      </div>

      {/* Timeline Spread Columns */}
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.15fr_1.1fr] gap-10 my-auto py-8 items-stretch relative z-10">
        
        {/* Left Column: Timeline Milestones */}
        <div className="flex flex-col justify-center pr-2">
          <div className="flex flex-col gap-2 mb-6 select-none">
            <span className="font-meta text-[9.5px] tracking-[0.3em] text-[#E25A38] uppercase font-bold">
              SYSTEM HISTORY
            </span>
            <h3 className="font-heading italic font-light text-[38px] leading-none text-[#2E4237]">
              Milestones
            </h3>
            <div className="w-12 h-[1px] bg-[#E25A38] mt-3" />
          </div>

          <div className="flex flex-col gap-3">
            {milestoneData.map((item, index) => (
              <div
                key={index}
                className="py-3.5 border-b border-[#242D27]/10 last:border-b-0 flex flex-col gap-1.5 hover:bg-[#E25A38]/[0.015] transition-colors pl-2"
              >
                <span className="font-meta text-[10px] text-[#E25A38] font-bold tracking-widest">
                  {item.year}
                </span>
                <span className="font-display font-bold text-[13.5px] text-[#242D27] leading-snug">
                  {item.title}
                </span>
                <p className="font-body text-[12px] leading-relaxed text-[#3D4A40] font-light">
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

        {/* Right Column: Svyasa Education Dossier (Decluttered, very spacious!) */}
        <div className="flex flex-col justify-center pl-2 gap-8">
          
          {/* Headline quote in outline styling */}
          <div className="select-none py-4 border-b border-dashed border-[#242D27]/15">
            <h4 className="font-heading font-outline text-[42px] leading-none mb-1 opacity-90 uppercase tracking-widest">
              RESUME
            </h4>
            <p className="font-body italic text-[13.5px] leading-relaxed text-[#738579] mt-3">
              "Discipline and relentless consistency shape the finest engineering products."
            </p>
          </div>

          {/* Education Block (Forest style from 3.jpg) */}
          <div className="p-6 border border-[#2E4237]/15 bg-[#FAF6F0]/80 shadow-sm border-l-[4px] border-[#2E4237] flex flex-col gap-4">
            <span className="font-meta text-[9px] tracking-[0.35em] text-[#E25A38] font-bold block select-none">
              ALMA MATER
            </span>
            
            <div className="flex flex-col gap-1">
              <h4 className="font-display font-bold text-[#2E4237] text-[15px] leading-tight uppercase tracking-wider">
                B.E. Computer Science Engineering
              </h4>
              <span className="font-body text-xs text-[#3D4A40] font-medium italic mt-1">
                Svyasa University · Bengaluru, Karnataka, India
              </span>
            </div>

            <p className="font-body text-[11.5px] leading-relaxed text-[#738579] font-light">
              Graduation expected: <strong>Summer 2026</strong>. Rigorous training in software development frameworks, data structures, network security, and database modeling.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-[#242D27]/10 pt-5 w-full">
        <Folio page={5} text="ACADEMIC TIMELINE" />
      </footer>
    </div>
  );
}
