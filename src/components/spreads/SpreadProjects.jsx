import React from 'react';
import ColumnRule from '../ui/ColumnRule';
import PullQuote from '../ui/PullQuote';
import Caption from '../ui/Caption';
import Folio from '../ui/Folio';
import { PROJECTS } from '../../data/portfolio';

export default function SpreadProjects({ projectIndex, side }) {
  const project = PROJECTS[projectIndex];

  if (!project) return null;

  // Page Numbers:
  // Project 1 (index 0) is P.05 (Left) and P.06 (Right)
  // Project 2 (index 1) is P.07 (Left) and P.08 (Right)
  const leftPageNum = 5 + projectIndex * 2;
  const rightPageNum = leftPageNum + 1;

  // Abstract aesthetic vectors for left page based on project
  const renderAbstractGraphic = () => {
    if (projectIndex === 0) {
      // RetailMind
      return (
        <div className="w-full h-full bg-[#0F2318] flex flex-col justify-between p-8 text-[#F8F5F0] border-2 border-white select-none">
          <div className="flex justify-between items-start">
            <span className="font-meta text-[10px] tracking-widest text-[#E8A020]">INGESTION ENGINE</span>
            <span className="font-meta text-[10px] text-rose-500 font-bold">VOL I · FLG</span>
          </div>
          
          <div className="my-auto flex flex-col items-center gap-4 text-center">
            {/* SVG Abstract Blueprint wireframe representing data and AI processing */}
            <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#E8A020] stroke-[0.5] fill-none opacity-80 animate-pulse">
              <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="25" />
              <rect x="35" y="35" width="30" height="30" strokeDasharray="2 1" />
              <line x1="10" y1="50" x2="90" y2="50" />
              <line x1="50" y1="10" x2="50" y2="90" />
              <circle cx="50" cy="50" r="4" fill="#C41E1E" stroke="none" />
              <circle cx="25" cy="50" r="2" fill="#E8A020" stroke="none" />
              <circle cx="75" cy="50" r="2" fill="#E8A020" stroke="none" />
              <circle cx="50" cy="25" r="2" fill="#E8A020" stroke="none" />
              <circle cx="50" cy="75" r="2" fill="#E8A020" stroke="none" />
            </svg>
            <h4 className="font-heading italic text-3xl text-[#E8A020] mt-3">RetailMind</h4>
            <span className="font-meta text-[10px] tracking-widest text-white/50 uppercase">{project.type}</span>
          </div>

          <div className="border-t border-white/10 pt-4">
            <Caption><span className="text-white/70">Fig 1.2: Neural demand spikes, dead stock, and margin erosion ingestion vectors mapping.</span></Caption>
          </div>
        </div>
      );
    } else if (projectIndex === 1) {
      // Zalulu Portfolio
      return (
        <div className="w-full h-full bg-[#1B3A2D] flex flex-col justify-between p-8 text-[#F8F5F0] border-2 border-white select-none">
          <div className="flex justify-between items-start">
            <span className="font-meta text-[10px] tracking-widest text-[#E8A020]">INTERACTIVE PRINT</span>
            <span className="font-meta text-[10px] text-rose-500 font-bold">VOL I · 002</span>
          </div>
          
          <div className="my-auto flex flex-col items-center gap-4 text-center">
            {/* SVG representation of editorial spreads and book pages */}
            <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#E8A020] stroke-[0.75] fill-none opacity-80">
              <rect x="15" y="20" width="70" height="60" rx="2" />
              <line x1="50" y1="20" x2="50" y2="80" strokeWidth="1" stroke="#C41E1E" />
              {/* Lines representing columns */}
              <line x1="22" y1="35" x2="42" y2="35" strokeDasharray="1 1" />
              <line x1="22" y1="45" x2="42" y2="45" strokeDasharray="1 1" />
              <line x1="22" y1="55" x2="42" y2="55" strokeDasharray="1 1" />
              <line x1="22" y1="65" x2="35" y2="65" strokeDasharray="1 1" />

              <line x1="58" y1="35" x2="78" y2="35" strokeDasharray="1 1" />
              <line x1="58" y1="45" x2="78" y2="45" strokeDasharray="1 1" />
              <line x1="58" y1="55" x2="78" y2="55" strokeDasharray="1 1" />
              <line x1="58" y1="65" x2="70" y2="65" strokeDasharray="1 1" />
            </svg>
            <h4 className="font-heading italic text-3xl text-[#E8A020] mt-3">Zalulu Issue</h4>
            <span className="font-meta text-[10px] tracking-widest text-white/50 uppercase">{project.type}</span>
          </div>

          <div className="border-t border-white/10 pt-4">
            <Caption><span className="text-white/70">Fig 2.1: Tactile page flip physics, paper shadow, and multi-column grid layout blueprint.</span></Caption>
          </div>
        </div>
      );
    } else {
      // More Coming Soon / Custom
      return (
        <div className="w-full h-full bg-[#1A1714] flex flex-col justify-between p-8 text-[#F8F5F0] border-2 border-white select-none">
          <div className="flex justify-between items-start">
            <span className="font-meta text-[10px] tracking-widest text-[#E8A020]">PIPELINE</span>
            <span className="font-meta text-[10px] text-rose-500 font-bold">VOL I · END</span>
          </div>
          
          <div className="my-auto flex flex-col items-center gap-4 text-center">
            <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#E8A020] stroke-[0.75] fill-none opacity-50 stroke-dasharray-[2_2]">
              <path d="M10,50 Q50,90 90,50" />
              <path d="M10,50 Q50,10 90,50" />
              <circle cx="50" cy="50" r="15" />
            </svg>
            <h4 className="font-heading italic text-3xl text-[#E8A020] mt-3">Securing Futures</h4>
            <span className="font-meta text-[10px] tracking-widest text-white/50 uppercase">{project.type}</span>
          </div>

          <div className="border-t border-white/10 pt-4">
            <Caption><span className="text-white/70">Fig 3.1: Upcoming security analysis dashboard, OWASP testing hooks, and ML deployments.</span></Caption>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full h-full bg-[#F8F5F0]">
      {side === 'left' ? (
        /* LEFT PAGE: Full Color Cinematic Custom Abstract Wireframe or Image */
        <div className="page-spread-content h-full relative p-8">
          <div className="paper-grain-overlay" />
          
          <header className="flex justify-between items-center border-b border-[#1A1714]/10 pb-4 select-none mb-6">
            <span className="font-meta text-[9px] tracking-[0.25em] text-[#C41E1E] uppercase font-bold">
              FEATURED FEATURE
            </span>
            <span className="font-meta text-[9px] tracking-widest text-[#1A1714]/50">
              ILLUSTRATION
            </span>
          </header>

          <div className="flex-1 w-full relative">
            {renderAbstractGraphic()}
          </div>

          <footer className="border-t border-[#1A1714]/10 pt-4 w-full mt-6">
            <Folio page={leftPageNum} text={`PROJECT: ${project.title}`} />
          </footer>
        </div>
      ) : (
        /* RIGHT PAGE: Two-column editorial details and links */
        <div className="page-spread-content h-full p-8 flex flex-col justify-between">
          <div className="paper-grain-overlay" />

          {/* Top Header */}
          <header className="flex justify-between items-center border-b border-[#1A1714]/10 pb-4 select-none">
            <span className="font-meta text-[9px] tracking-[0.25em] text-[#C41E1E] uppercase font-bold">
              EDITORIAL REVIEW
            </span>
            <span className="font-meta text-[9px] tracking-widest text-[#1A1714]/50">
              {project.type}
            </span>
          </header>

          {/* Main Content Area */}
          <div className="flex flex-col justify-center gap-2 my-auto py-2">
            
            {/* Title & Subtitle */}
            <div className="select-none mb-2">
              <span className="font-meta text-[10px] tracking-[0.2em] text-[#C41E1E] uppercase block font-semibold mb-1">
                PROJECT {String(projectIndex + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading italic font-light text-[46px] leading-[0.95] text-[#0F2318]">
                {project.title}
              </h3>
            </div>

            {/* Pull Quote */}
            <div className="select-none">
              <PullQuote>
                {projectIndex === 0
                  ? `"A data review pipeline providing enterprise analysis metrics at an SMB scale."`
                  : `"An editorial print concept bridging the tactile history of paper and full-stack software."`
                }
              </PullQuote>
            </div>

            {/* Review Description — Magazine Layout (Two columns on Desktop) */}
            <div className="project-body-columns text-justify select-text">
              <p className="project-body-text">
                {project.desc}
              </p>
            </div>

            {/* Spec Table Footer strip */}
            <div className="mt-4 pt-4 border-t border-[#1A1714]/10 flex flex-wrap justify-between items-start gap-4 select-none">
              <div className="flex flex-col">
                <span className="font-meta text-[9px] tracking-widest text-[#8A847E] uppercase mb-1">YEAR</span>
                <span className="font-display font-bold text-xs text-[#1A1714]">{project.year}</span>
              </div>
              <div className="flex flex-col max-w-[200px]">
                <span className="font-meta text-[9px] tracking-widest text-[#8A847E] uppercase mb-1">TECH STACK</span>
                <span className="font-meta text-[9.5px] text-[#4A4540] leading-normal">{project.tech}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-meta text-[9px] tracking-widest text-[#8A847E] uppercase mb-1">PAYLOAD</span>
                <span className="font-display font-semibold text-xs text-[#C41E1E] uppercase tracking-wider">{project.type.split(' · ')[1] || 'ACTIVE'}</span>
              </div>
            </div>

            {/* Tactical Action Links */}
            <div className="mt-5 flex gap-4 select-none">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="font-meta text-[10px] tracking-widest text-[#C41E1E] hover:text-[#9B2121] uppercase border-b border-[#C41E1E] pb-0.5 transition-colors"
              >
                EXECUTE PAYLOAD ↗
              </a>
              <a
                href="https://github.com/ZaLuLu"
                target="_blank"
                rel="noreferrer"
                className="font-meta text-[10px] tracking-widest text-[#1A1714]/60 hover:text-[#1A1714] uppercase border-b border-[#1A1714]/30 pb-0.5 transition-colors"
              >
                VIEW SOURCE ↗
              </a>
            </div>

          </div>

          {/* Bottom Folio */}
          <footer className="border-t border-[#1A1714]/10 pt-4 w-full">
            <Folio page={rightPageNum} text={`PROJECT: ${project.title}`} />
          </footer>

        </div>
      )}
    </div>
  );
}
