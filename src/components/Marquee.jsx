import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({ items, speed = 30 }) {
  // Double the items array for seamless infinite loop effect
  const repeatedItems = [...items, ...items];

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: -1.5 }}
      style={{ transformOrigin: 'left center' }}
      className="w-full"
    >
      <div className="w-full overflow-hidden border-y border-[#F2EDE4]/10 py-3 relative z-10 bg-[#0D0C09] select-none">
        <div 
          className="marquee-inner flex items-center gap-12 font-mono text-[10px] tracking-[0.2em] text-[#F2EDE4]/50 uppercase font-semibold"
          style={{ animationDuration: `${speed}s` }}
        >
          {repeatedItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="whitespace-nowrap">{item}</span>
              <span className="text-[#C9A96E]">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
