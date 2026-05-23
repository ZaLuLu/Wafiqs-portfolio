import React from 'react';

export default function Folio({ page, text = "PORTFOLIO ISSUE NO. 1" }) {
  return (
    <div className="folio flex justify-between items-center w-full select-none">
      <span className="opacity-60">{text}</span>
      <span className="font-semibold text-[#C9A96E]">P. {String(page).padStart(2, '0')}</span>
    </div>
  );
}
