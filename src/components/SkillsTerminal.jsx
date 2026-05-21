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
        <div className="p-8 flex flex-col gap-8">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, idx) => {
            const blocks = 20;
            const filledBlocks = Math.floor(skill.percentage / (100 / blocks));
            
            return (
              <div 
                key={`${activeCategory}-${idx}`} 
                className="flex flex-col gap-2 transition-all duration-75"
                style={{ 
                  opacity: isLoaded ? 1 : 0, 
                  transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: `${idx * 150}ms` 
                }}
              >
                <div className="flex justify-between items-end font-bold text-black text-[18px]" style={{ color: 'var(--text-color)' }}>
                  <span className="uppercase bg-black text-white px-2 py-1 tracking-widest inline-block" style={{ backgroundColor: 'var(--text-color)', color: 'var(--card-bg)' }}>{skill.label}</span>
                  <span className="text-[24px] font-display bg-white border-2 border-black px-2 shadow-[2px_2px_0px_var(--text-color)]" style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--card-bg)' }}>{skill.percentage}%</span>
                </div>
                
                {/* Neo-Brutalist ASCII Progress Bar */}
                <div className="w-full bg-white border-4 border-black relative overflow-hidden flex items-center p-2 shadow-[4px_4px_0px_var(--text-color)]" style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--card-bg)' }}>
                  <div className="font-mono text-[20px] md:text-[24px] font-bold text-black whitespace-pre tracking-widest flex w-full">
                    <span className="mr-2" style={{ color: 'var(--text-color)' }}>[</span>
                    <div className="flex-1 flex overflow-hidden">
                      {Array.from({ length: blocks }).map((_, i) => {
                        const isFilled = isLoaded && i < filledBlocks;
                        return (
                          <span 
                            key={i}
                            className={`transition-colors duration-[50ms]`}
                            style={{ 
                              transitionDelay: `${idx * 150 + (i * 20)}ms`,
                              color: isFilled ? 'var(--text-color)' : 'var(--muted-color, #ccc)'
                            }}
                          >
                            {isFilled ? '█' : '▒'}
                          </span>
                        );
                      })}
                    </div>
                    <span className="ml-2" style={{ color: 'var(--text-color)' }}>]</span>
                  </div>
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
