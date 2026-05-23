import React from 'react';
import ColumnRule from '../ui/ColumnRule';
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

  // Vector graphics matching the Han Nguyen style
  const renderAbstractGraphic = () => {
    if (projectIndex === 0) {
      // RetailMind
      return (
        <div className="w-full h-full bg-[#2E4237] flex flex-col justify-between p-6 text-[#F4ECE1] border border-[#FAF6F0]/20 select-none">
          <div className="flex justify-between items-start">
            <span className="font-meta text-[9px] tracking-widest text-[#FFA726]">INGESTION PIPELINE</span>
            <span className="font-meta text-[9px] text-[#FFA726] font-bold">VOL I · 001</span>
          </div>
          
          <div className="my-auto flex flex-col items-center gap-4 text-center">
            {/* SVG Abstract Blueprint wireframe representing data and AI processing */}
            <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-[#FFA726] stroke-[0.75] fill-none opacity-90 animate-pulse">
              <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="24" />
              <rect x="38" y="38" width="24" height="24" strokeDasharray="2 1" />
              <line x1="10" y1="50" x2="90" y2="50" />
              <line x1="50" y1="10" x2="50" y2="90" />
              <circle cx="50" cy="50" r="3" fill="#E25A38" stroke="none" />
            </svg>
            <h4 className="font-heading italic text-2xl text-[#FFA726] mt-2">RetailMind</h4>
            <span className="font-meta text-[9px] tracking-widest text-white/50 uppercase">{project.type}</span>
          </div>

          <div className="border-t border-white/10 pt-3">
            <Caption><span className="text-[#FAF6F0]/80">Fig 1.1: Neural demand spike vectors and dead stock mapping.</span></Caption>
          </div>
        </div>
      );
    } else {
      // Zalulu Portfolio
      return (
        <div className="w-full h-full bg-[#3D5548] flex flex-col justify-between p-6 text-[#F4ECE1] border border-[#FAF6F0]/20 select-none">
          <div className="flex justify-between items-start">
            <span className="font-meta text-[9px] tracking-widest text-[#FFA726]">TACTILE DESIGN</span>
            <span className="font-meta text-[9px] text-[#FFA726] font-bold">VOL I · 002</span>
          </div>
          
          <div className="my-auto flex flex-col items-center gap-4 text-center">
            {/* SVG representation of editorial spreads and book pages */}
            <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-[#FFA726] stroke-[0.75] fill-none opacity-90">
              <rect x="15" y="22" width="70" height="56" rx="2" />
              <line x1="50" y1="22" x2="50" y2="78" strokeWidth="1" stroke="#E25A38" />
              {/* Lines representing columns */}
              <line x1="22" y1="35" x2="42" y2="35" strokeDasharray="1 1" />
              <line x1="22" y1="45" x2="42" y2="45" strokeDasharray="1 1" />
              <line x1="22" y1="55" x2="42" y2="55" strokeDasharray="1 1" />
              <line x1="58" y1="35" x2="78" y2="35" strokeDasharray="1 1" />
              <line x1="58" y1="45" x2="78" y2="45" strokeDasharray="1 1" />
              <line x1="58" y1="55" x2="78" y2="55" strokeDasharray="1 1" />
            </svg>
            <h4 className="font-heading italic text-2xl text-[#FFA726] mt-2">Zalulu Issue</h4>
            <span className="font-meta text-[9px] tracking-widest text-white/50 uppercase">{project.type}</span>
          </div>

          <div className="border-t border-white/10 pt-3">
            <Caption><span className="text-[#FAF6F0]/80">Fig 2.1: Tactile page flip physics and responsive margins layout.</span></Caption>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="page-spread-content h-full bg-[#F4ECE1] p-12 text-[#242D27]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.02]" />

      {/* Top Header */}
      <header className="flex justify-between items-center border-b border-[#242D27]/10 pb-5 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#E25A38] uppercase font-bold">
          CASE STUDY SHOWCASE
        </span>
        <span className="font-meta text-[9px] tracking-widest text-[#242D27]/40 uppercase">
          PROJECT {String(projectIndex + 1).padStart(2, '0')}
        </span>
      </header>

      {/* 2-Column Showcase Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr] gap-10 my-auto py-6 items-stretch">
        
        {/* Left Column: Premium Abstract Blueprint Graphic */}
        <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#242D27]/10 pb-6 md:pb-0 pr-0 md:pr-6">
          <div className="w-full aspect-[4/5] shadow-sm select-none">
            {renderAbstractGraphic()}
          </div>
        </div>

        {/* Right Column: Editorial review & action keys */}
        <div className="flex flex-col justify-between pl-0 md:pl-2">
          
          <div className="flex flex-col gap-2">
            <span className="font-meta text-[9px] tracking-[0.2em] text-[#E25A38] uppercase block font-bold mb-1 select-none">
              {project.type}
            </span>
            <h3 className="font-heading italic font-light text-[36px] leading-[0.95] text-[#2E4237] select-none">
              {project.title}
            </h3>
            
            <p className="font-body text-[13px] leading-relaxed text-[#3D4A40] mt-3 select-text">
              {project.desc}
            </p>
          </div>

          {/* Details footer */}
          <div className="my-6 pt-4 border-t border-[#242D27]/10 flex flex-wrap gap-x-8 gap-y-4 select-none">
            <div className="flex flex-col">
              <span className="font-meta text-[8.5px] tracking-widest text-[#738579] uppercase mb-1">YEAR</span>
              <span className="font-display font-bold text-xs text-[#242D27]">{project.year}</span>
            </div>
            <div className="flex flex-col max-w-[210px]">
              <span className="font-meta text-[8.5px] tracking-widest text-[#738579] uppercase mb-1">TECH STACK</span>
              <span className="font-meta text-[9.5px] text-[#3D4A40] leading-normal font-medium">{project.tech}</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-4 select-none">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="font-meta text-[9.5px] tracking-widest text-[#F4ECE1] bg-[#2E4237] hover:bg-[#E25A38] px-4 py-2.5 transition-colors duration-300 font-semibold uppercase rounded-[9999px]"
            >
              EXECUTE PAYLOAD ↗
            </a>
            <a
              href="https://github.com/ZaLuLu"
              target="_blank"
              rel="noreferrer"
              className="font-meta text-[9.5px] tracking-widest text-[#2E4237] hover:text-[#FFA726] border border-[#2E4237]/20 hover:border-[#FFA726] px-4 py-2.5 transition-colors duration-300 font-semibold uppercase rounded-[9999px]"
            >
              VIEW SOURCE
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-[#242D27]/10 pt-5 w-full">
        <Folio page={pageNum} text={`PROJECT: ${project.title}`} />
      </footer>
    </div>
  );
}
