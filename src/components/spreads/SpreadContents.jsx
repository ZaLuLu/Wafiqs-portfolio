import React from 'react';
import ColumnRule from '../ui/ColumnRule';
import Caption from '../ui/Caption';
import Folio from '../ui/Folio';
import { IDENTITY } from '../../data/portfolio';

const contentsData = [
  { page: "03", section: "ABOUT ME", desc: "Developer, student, and builder from Bengaluru" },
  { page: "04", section: "TECHNICAL SKILLS", desc: "React, Python, FastAPI, PostgreSQL, and Security" },
  { page: "06", section: "FEATURED PROJECTS", desc: "Flagship AI demand analytics and custom deployments" },
  { page: "08", section: "EXPERIENCE", desc: "Academic milestones, work history, and education" },
  { page: "10", section: "CONTACT", desc: "Let's collaborate on web apps and security systems" },
];

export default function SpreadContents() {
  return (
    <div className="page-spread-content h-full bg-[#F8F5F0]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay" />

      {/* Top Folio strip */}
      <header className="flex justify-between items-center border-b border-[#1A1714]/10 pb-4 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#C41E1E] uppercase font-bold">
          ISSUE NO. 01
        </span>
        <span className="font-meta text-[9px] tracking-widest text-[#1A1714]/50">
          INDEX
        </span>
      </header>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.1fr_1.3fr] gap-6 my-auto items-stretch py-4">
        
        {/* Left Side: Editor Info & Portrait */}
        <div className="flex flex-col justify-between gap-6 pr-2">
          <div>
            <h2 className="font-heading italic font-light text-[54px] leading-[0.9] text-[#1A1714] select-none">
              CON<br/>TENTS
            </h2>
          </div>

          <div className="editor-portrait-container select-none">
            <img
              src="/profile.jpg"
              alt="Wafiq Nawaz portrait thumbnail"
              className="w-full aspect-[4/5] object-cover border border-[#1A1714]/15 filter brightness-[0.98]"
            />
            <div className="mt-2">
              <Caption>Wafiq Nawaz, 2026. Bengaluru, IN.</Caption>
            </div>
          </div>

          <div className="editors-note border-t border-[#1A1714]/15 pt-4">
            <span className="font-meta text-[9px] tracking-[0.3em] text-[#1A1714]/50 block uppercase mb-2 select-none">
              EDITOR'S NOTE
            </span>
            <p className="font-body italic text-[13px] leading-relaxed text-[#4A4540]">
              "This portfolio is designed as an interactive record of my development journey, secure engineering experiments, and live deployments. Here is the story of how I translate logic into value."
            </p>
            <span className="font-cookie text-2xl text-[#C41E1E] mt-2 block select-none">
              — {IDENTITY.fullName.split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Column Divider */}
        <div className="hidden md:flex justify-center items-center">
          <ColumnRule vertical={true} />
        </div>

        {/* Right Side: Page Listings */}
        <div className="flex flex-col justify-center gap-1 pl-2">
          <div className="flex items-center gap-4 mb-4 select-none">
            <span className="font-meta text-[10px] tracking-[0.3em] text-[#1A1714]/50 uppercase">
              IN THIS ISSUE
            </span>
            <ColumnRule />
          </div>

          <ol className="flex flex-col">
            {contentsData.map((item) => (
              <li
                key={item.page}
                className="grid grid-cols-[44px_1fr] gap-4 py-4 border-b border-[#1A1714]/10 hover:bg-[#C41E1E]/[0.025] transition-colors group cursor-pointer duration-300"
              >
                <span className="font-display font-light text-[34px] leading-none text-[#C4BFB9] group-hover:text-[#C41E1E] transition-colors self-center">
                  {item.page}
                </span>
                <div className="flex flex-col justify-center">
                  <span className="font-display font-bold text-sm tracking-wider text-[#1A1714] group-hover:text-[#9B2121] transition-colors uppercase">
                    {item.section}
                  </span>
                  <span className="font-meta text-[11px] text-[#8A847E] mt-1">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-[#1A1714]/10 pt-4 w-full">
        <Folio page={2} text="PORTFOLIO INDEX" />
      </footer>
    </div>
  );
}
