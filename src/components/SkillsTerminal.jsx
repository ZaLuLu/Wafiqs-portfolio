import React, { useState, useEffect } from 'react';
import { useSound } from '../context/SoundContext';
import { SKILL_CATEGORIES } from '../data/portfolio';

const SkillsTerminal = () => {
  const { playClick, playHover } = useSound();
  const [activeCategory, setActiveCategory] = useState('technical');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, [activeCategory]);

  const cat = SKILL_CATEGORIES[activeCategory];

  return (
    <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-5 mb-12 relative z-20 font-mono items-start px-2 sm:px-0">

      {/* ── Left: Category nav ── */}
      <div
        className="w-full md:w-[220px] shrink-0 h-fit"
        style={{ border: '3px solid #F0EDE4', boxShadow: '6px 6px 0px #F4FF1E' }}
      >
        <div
          className="font-display text-[20px] uppercase p-3 tracking-widest"
          style={{ backgroundColor: '#F4FF1E', color: '#000', borderBottom: '2px solid #F0EDE4' }}
        >
          INDEX_DIR
        </div>
        <ul className="flex flex-col" style={{ backgroundColor: '#111' }}>
          {Object.entries(SKILL_CATEGORIES).map(([key, data], idx, arr) => {
            const isActive = activeCategory === key;
            const isLast = idx === arr.length - 1;
            return (
              <li
                key={key}
                onMouseEnter={playHover}
                onClick={() => { playClick('soft'); setActiveCategory(key); }}
                className="cursor-pointer px-5 py-4 transition-all text-[16px] uppercase font-bold"
                style={{
                  backgroundColor: isActive ? data.color : 'transparent',
                  color: isActive ? '#000' : '#888',
                  borderBottom: isLast ? 'none' : '1px solid #222',
                }}
              >
                {isActive ? '► ' : '  '}{data.name}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Right: Skills canvas ── */}
      <div
        className="flex-1 flex flex-col"
        style={{ border: '3px solid #F0EDE4', boxShadow: '6px 6px 0px #F4FF1E', backgroundColor: '#111' }}
      >
        {/* Header */}
        <div
          className="p-3 sm:p-4 flex items-center justify-between"
          style={{ backgroundColor: cat.color, borderBottom: '2px solid #F0EDE4' }}
        >
          <span className="font-display text-[20px] sm:text-[22px] text-black uppercase font-bold tracking-widest">
            {cat.name} // DATA_OUTPUT
          </span>
          <div className="flex gap-1 h-5" aria-hidden="true">
            {[1,2,1,3,1].map((w, i) => <div key={i} style={{ width: `${w * 4}px`, backgroundColor: '#000' }} />)}
          </div>
        </div>

        {/* Skills list */}
        <div className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">
          {cat.skills.map((skill, idx) => (
            <div
              key={`${activeCategory}-${idx}`}
              className="flex flex-col gap-2"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-16px)',
                transition: `opacity 0.3s ease ${idx * 100}ms, transform 0.3s ease ${idx * 100}ms`,
              }}
            >
              {/* Label row */}
              <div className="flex justify-between items-center">
                <span
                  className="uppercase px-2 py-1 text-[12px] sm:text-[13px] tracking-widest font-bold"
                  style={{ backgroundColor: '#F0EDE4', color: '#000' }}
                >
                  {skill.label}
                </span>
                <span
                  className="font-display text-[18px] sm:text-[20px] px-2"
                  style={{ color: cat.color, border: `2px solid ${cat.color}`, backgroundColor: '#0a0a0a' }}
                >
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="w-full relative overflow-hidden"
                style={{ height: '24px', border: '2px solid #333', backgroundColor: '#0a0a0a' }}
              >
                {/* Bracket left */}
                <span className="absolute left-1 top-1/2 -translate-y-1/2 font-mono font-bold text-[14px] z-10" style={{ color: '#555' }}>[</span>

                {/* Track area */}
                <div className="absolute top-[3px] bottom-[3px] left-[14px] right-[14px] overflow-hidden">
                  {/* Fill */}
                  <div
                    className="h-full relative transition-all duration-700 ease-out"
                    style={{
                      width: isLoaded ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${idx * 100}ms`,
                      backgroundColor: cat.color,
                    }}
                  >
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 4px)'
                    }} />
                  </div>
                  {/* Empty */}
                  <div
                    className="absolute top-0 bottom-0 right-0 transition-all duration-700 ease-out"
                    style={{
                      left: isLoaded ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${idx * 100}ms`,
                      backgroundImage: 'repeating-linear-gradient(90deg, #222 0px, #222 3px, transparent 3px, transparent 7px)',
                    }}
                  />
                </div>

                {/* Bracket right */}
                <span className="absolute right-1 top-1/2 -translate-y-1/2 font-mono font-bold text-[14px] z-10" style={{ color: '#555' }}>]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTerminal;
