import React from 'react';

export default function SectionLabel({ number, label, total = "05", theme = "dark" }) {
  const isLight = theme === 'light';
  return (
    <div className={`flex items-center gap-3 select-none font-mono text-[9px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300 ${
      isLight ? 'text-[#0D0C09]/45' : 'text-[#F2EDE4]/30'
    }`}>
      <span>{number} / {total}</span>
      <span className={`h-[0.5px] w-6 transition-colors duration-300 ${isLight ? 'bg-[#0D0C09]/15' : 'bg-[#F2EDE4]/15'}`} />
      <span className="text-[#C9A96E]">{label}</span>
    </div>
  );
}

