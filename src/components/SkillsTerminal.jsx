import React, { useState, useEffect } from 'react';
import { useSound } from '../context/SoundContext';
import { SKILL_CATEGORIES } from '../data/portfolio';

/**
 * SkillsTerminal — the animated progress bar "Data Dossier" section.
 *
 * Content is driven entirely by src/data/portfolio.js — see SKILL_CATEGORIES export.
 *
 * Features:
 *  - Three category tabs: TECHNICAL, SOFT SKILLS, OTHER SKILLS
 *  - Neo-brutalist ASCII block progress bars with staggered animation
 *  - Category color driven by CSS variables in portfolio.js
 */
const SkillsTerminal = () => {
  const { playClick, playHover } = useSound();
  const [activeCategory, setActiveCategory] = useState('technical');
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animation restart on category change
  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-8 mb-12 relative z-20 font-mono items-start min-h-[600px]">
      
      {/* Left: Brutalist Navigation */}
      <div className="w-full md:w-[280px] shrink-0 bg-white border-4 border-black p-0 shadow-[8px_8px_0px_var(--text-color)] h-fit" style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--card-bg)' }}>
        <div className="bg-black text-white font-display text-[24px] uppercase p-4 border-b-4 border-black tracking-widest" style={{ borderBottomColor: 'var(--text-color)' }}>
          INDEX_DIR
        </div>
        <ul className="flex flex-col">
          {Object.entries(SKILL_CATEGORIES).map(([key, data], idx) => {
            const isActive = activeCategory === key;
            const isLast = idx === Object.keys(SKILL_CATEGORIES).length - 1;
            return (
              <li 
                key={key}
                onMouseEnter={playHover}
                onClick={() => {
                  playClick('soft');
                  setActiveCategory(key);
                }}
                className={`
                  cursor-pointer px-6 py-4 transition-all text-[18px] uppercase font-bold
                  ${!isLast ? 'border-b-4 border-black' : ''}
                  ${isActive 
                    ? `text-black` 
                    : 'text-black hover:bg-gray-200'}
                `}
                style={{ 
                  backgroundColor: isActive ? data.color : 'transparent',
                  borderBottomColor: 'var(--text-color)',
                  color: 'var(--text-color)'
                }}
              >
                {isActive ? '► ' : ''}{data.name}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right: Data Canvas */}
      <div className="flex-1 bg-white border-4 border-black shadow-[8px_8px_0px_var(--text-color)] flex flex-col min-w-[320px] md:min-w-[500px]" style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--card-bg)' }}>
        {/* Header Bar */}
        <div className={`p-4 border-b-4 border-black flex items-center justify-between transition-colors duration-300`} style={{ backgroundColor: SKILL_CATEGORIES[activeCategory].color, borderBottomColor: 'var(--text-color)' }}>
          <span className="font-display text-[24px] text-black uppercase font-bold tracking-widest">
            {SKILL_CATEGORIES[activeCategory].name} // DATA_OUTPUT
          </span>
          {/* Decorative barcode-like element */}
          <div className="flex gap-1 h-6">
            <div className="w-1 bg-black"></div>
            <div className="w-2 bg-black"></div>
            <div className="w-1 bg-black"></div>
            <div className="w-3 bg-black"></div>
            <div className="w-1 bg-black"></div>
          </div>
        </div>
        
        {/* Skills List */}
        <div className="p-4 sm:p-8 flex flex-col gap-6 sm:gap-8">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, idx) => {
            return (
              <div 
                key={`${activeCategory}-${idx}`} 
                className="flex flex-col gap-2"
                style={{ 
                  opacity: isLoaded ? 1 : 0, 
                  transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.3s ease, transform 0.3s ease`,
                  transitionDelay: `${idx * 120}ms` 
                }}
              >
                {/* Label + percentage */}
                <div className="flex justify-between items-center font-bold" style={{ color: 'var(--text-color)' }}>
                  <span className="uppercase bg-black text-white px-2 py-1 text-[13px] sm:text-[15px] tracking-widest inline-block" style={{ backgroundColor: 'var(--text-color)', color: 'var(--card-bg)' }}>
                    {skill.label}
                  </span>
                  <span className="text-[18px] sm:text-[22px] font-display bg-white border-2 border-black px-2 shadow-[2px_2px_0px_var(--text-color)]" style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--card-bg)' }}>
                    {skill.percentage}%
                  </span>
                </div>
                
                {/* CSS-based progress bar — pixel-perfect, no character width issues */}
                <div
                  className="w-full border-4 border-black relative overflow-hidden shadow-[4px_4px_0px_var(--text-color)]"
                  style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--card-bg)', height: '28px' }}
                >
                  {/* Bracket left */}
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 font-mono font-bold text-[18px] z-10" style={{ color: 'var(--text-color)' }}>[</span>
                  {/* Fill bar */}
                  <div
                    className="absolute top-[4px] bottom-[4px] left-[20px] right-[20px] overflow-hidden"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    {/* Filled portion */}
                    <div
                      className="h-full transition-all duration-700 ease-out relative"
                      style={{
                        width: isLoaded ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${idx * 120}ms`,
                        backgroundColor: 'var(--text-color)',
                      }}
                    >
                      {/* Hatching pattern on fill */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px)'
                      }} />
                    </div>
                    {/* Unfilled portion — dotted */}
                    <div
                      className="absolute top-0 bottom-0 right-0"
                      style={{
                        left: isLoaded ? `${skill.percentage}%` : '0%',
                        transition: `left 0.7s ease ${idx * 120}ms`,
                        backgroundImage: 'repeating-linear-gradient(90deg, #ccc 0px, #ccc 4px, transparent 4px, transparent 8px)',
                        backgroundSize: '8px 100%',
                      }}
                    />
                  </div>
                  {/* Bracket right */}
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono font-bold text-[18px] z-10" style={{ color: 'var(--text-color)' }}>]</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsTerminal;
