import React, { useState, useEffect, useRef } from 'react';
import { useSound } from '../context/SoundContext';

const MENU_ITEMS = [
  { id: 'about',    label: 'ABOUT ME',        color: '#F4FF1E', textColor: '#000' },
  { id: 'skills',   label: 'SKILL TREE',      color: '#FF1EC7', textColor: '#000' },
  { id: 'projects', label: 'PROJECT ARCHIVE', color: '#F4FF1E', textColor: '#000' },
  { id: 'contact',  label: 'SOCIALS',         color: '#FF1EC7', textColor: '#000' },
];

const MenuNavigation = ({ onSelect }) => {
  const { playClick, playHover } = useSound();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) menuRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => { playHover(); return prev > 0 ? prev - 1 : MENU_ITEMS.length - 1; });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => { playHover(); return prev < MENU_ITEMS.length - 1 ? prev + 1 : 0; });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      playClick('hard');
      onSelect(MENU_ITEMS[selectedIndex].id);
    } else if (['1','2','3','4'].includes(e.key)) {
      e.preventDefault();
      const index = parseInt(e.key) - 1;
      setSelectedIndex(index);
      playClick('hard');
      onSelect(MENU_ITEMS[index].id);
    }
  };

  return (
    <div
      className="flex flex-col items-center w-full max-w-[520px] outline-none focus:outline-none mt-5 relative z-20 px-2 sm:px-0"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={menuRef}
    >
      <div className="flex flex-col w-full gap-2 sm:gap-3">
        {MENU_ITEMS.map((item, index) => {
          const isSelected = index === selectedIndex;
          return (
            <div
              key={item.id}
              className="group flex items-center justify-between py-3 sm:py-4 px-4 sm:px-5 cursor-pointer transition-all duration-200 relative overflow-hidden"
              style={{
                backgroundColor: isSelected ? item.color : '#161616',
                border: `3px solid ${isSelected ? item.color : '#333'}`,
                boxShadow: isSelected
                  ? `6px 6px 0px ${item.color}55`
                  : '4px 4px 0px #222',
                transform: isSelected ? 'translateX(6px)' : 'translateX(0)',
              }}
              onClick={() => { setSelectedIndex(index); playClick('hard'); onSelect(item.id); }}
              onMouseEnter={() => { if (selectedIndex !== index) playHover(); setSelectedIndex(index); }}
              role="button"
              tabIndex={-1}
              aria-label={`Navigate to ${item.label}`}
            >
              {/* Diagonal stripe texture when active */}
              {isSelected && (
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 3px, transparent 3px, transparent 10px)'
                }} />
              )}

              <div className="flex items-center gap-3 sm:gap-5 relative z-10 min-w-0">
                {/* Arrow indicator */}
                <span
                  className="font-display text-[18px] sm:text-[24px] font-bold shrink-0 transition-all duration-200"
                  style={{
                    color: isSelected ? '#000' : '#555',
                    opacity: isSelected ? 1 : 0.4,
                    transform: isSelected ? 'translateX(0)' : 'translateX(-6px)',
                  }}
                >►</span>

                {/* Label */}
                <span
                  className="font-display text-[17px] sm:text-[22px] md:text-[25px] uppercase font-bold truncate transition-all duration-200"
                  style={{
                    color: isSelected ? item.textColor : '#F0EDE4',
                    letterSpacing: isSelected ? '4px' : '2px',
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* Number badge */}
              <div
                className="font-mono font-bold text-[13px] sm:text-[15px] w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 transition-all duration-200"
                style={{
                  backgroundColor: isSelected ? '#000' : 'transparent',
                  color: isSelected ? item.color : '#555',
                  border: `2px solid ${isSelected ? '#000' : '#333'}`,
                  transform: isSelected ? 'rotate(5deg)' : 'rotate(0deg)',
                }}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>

      {/* Keyboard hints — desktop only */}
      <div
        className="hidden sm:flex gap-6 mt-8 items-center font-mono font-bold text-[11px] uppercase tracking-[2px] px-4 py-2"
        style={{ border: '2px solid #333', color: '#555', backgroundColor: '#111' }}
      >
        <span><span style={{ backgroundColor: '#222', color: '#F0EDE4', padding: '1px 5px' }}>↑↓</span> NAVIGATE</span>
        <span><span style={{ backgroundColor: '#222', color: '#F0EDE4', padding: '1px 5px' }}>ENTER</span> SELECT</span>
        <span><span style={{ backgroundColor: '#222', color: '#F0EDE4', padding: '1px 5px' }}>1-4</span> JUMP</span>
      </div>
    </div>
  );
};

export default MenuNavigation;
