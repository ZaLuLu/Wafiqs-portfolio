import React from 'react';

export default function GoldRule({ label = '◆' }) {
  return (
    <div className="flex items-center gap-4 w-full select-none my-6">
      <div className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent to-[#C9A96E]/25" />
      <span className="font-mono text-[9px] tracking-[0.2em] text-[#C9A96E]">
        {label}
      </span>
      <div className="flex-1 h-[0.5px] bg-gradient-to-r from-[#C9A96E]/25 to-transparent" />
    </div>
  );
}
