import React from 'react';
import ColumnRule from '../ui/ColumnRule';
import Folio from '../ui/Folio';

const contentsData = [
  { page: "03", section: "ABOUT DOSSIER", desc: "Flagship bio with our subject's primary portrait" },
  { page: "04", section: "TECHNICAL SKILLS", desc: "Equipped full-stack engineering tools and metrics" },
  { page: "05", section: "EXPERIENCE TIMELINE", desc: "Academic milestones, education history, and projects" },
  { page: "06", section: "RETAILMIND SHOWCASE", desc: "AI demand spikes, dead stock, and async FastAPI backend" },
  { page: "07", section: "ZALULU PORTFOLIO REVIEW", desc: "Interactive print book layouts built in Vite & React 19" },
  { page: "08", section: "CONTACT DIRECTORY", desc: "Secure message transmitter and direct networking links" },
];

export default function SpreadContents() {
  return (
    <div className="page-spread-content h-full bg-[#F4ECE1] p-12 text-[#242D27]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.02]" />

      {/* Top Folio strip */}
      <header className="flex justify-between items-center border-b border-[#242D27]/10 pb-5 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#E25A38] uppercase font-bold">
          INDEX SHEETS
        </span>
        <span className="font-meta text-[9px] tracking-widest text-[#242D27]/40 uppercase">
          TOC / PORTFOLIO
        </span>
      </header>

      {/* Decluttered Spacious Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.1fr_1.3fr] gap-10 my-auto py-8 items-stretch">
        
        {/* Left Side: Editorial Typography & Whitespace */}
        <div className="flex flex-col justify-between pr-4 select-none">
          <div className="flex flex-col gap-3">
            <span className="font-meta text-[9px] tracking-[0.3em] text-[#E25A38] uppercase font-bold block mb-1">
              VOLUME 1.0
            </span>
            <h2 className="font-heading italic font-light text-[56px] leading-[0.85] text-[#2E4237]">
              CON<br/>TENTS
            </h2>
          </div>

          <div className="border-t border-[#242D27]/10 pt-6">
            <span className="font-meta text-[8.5px] tracking-[0.3em] text-[#242D27]/50 block uppercase mb-3">
              CREATIVE BLUEPRINT
            </span>
            <p className="font-body text-[12.5px] leading-relaxed text-[#3D4A40]">
              This digital publication maps Wafiq Nawaz's technology products, design philosophies, and academic engineering timeline.
            </p>
          </div>
        </div>

        {/* Column Divider */}
        <div className="hidden md:flex justify-center items-center">
          <ColumnRule vertical={true} />
        </div>

        {/* Right Side: Spacious Page Listings */}
        <div className="flex flex-col justify-center pl-4 gap-1">
          <div className="flex items-center gap-4 mb-4 select-none">
            <span className="font-meta text-[9.5px] tracking-[0.3em] text-[#242D27]/40 uppercase font-semibold">
              IN THIS ISSUE
            </span>
            <ColumnRule />
          </div>

          <ol className="flex flex-col">
            {contentsData.map((item) => (
              <li
                key={item.page}
                className="grid grid-cols-[40px_1fr] gap-6 py-4.5 border-b border-[#242D27]/10 hover:bg-[#E25A38]/[0.025] transition-colors group cursor-pointer duration-300"
              >
                <span className="font-display font-light text-[32px] leading-none text-[#738579] group-hover:text-[#E25A38] transition-colors self-center">
                  {item.page}
                </span>
                <div className="flex flex-col justify-center">
                  <span className="font-display font-bold text-[13.5px] tracking-wider text-[#242D27] group-hover:text-[#E25A38] transition-colors uppercase">
                    {item.section}
                  </span>
                  <span className="font-meta text-[11px] text-[#738579] mt-1 font-light">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-[#242D27]/10 pt-5 w-full">
        <Folio page={2} text="INDEX SHEETS" />
      </footer>
    </div>
  );
}
