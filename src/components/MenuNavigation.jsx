import React, { useState, useEffect, useRef } from 'react';
import { useSound } from '../context/SoundContext';


const MENU_ITEMS = [
  { id: 'about', label: 'PLAYER 1 INFO', color: 'var(--accent-color)' },
  { id: 'skills', label: 'SKILL TREE', color: 'var(--secondary-color)' },
  { id: 'projects', label: 'PROJECT ARCHIVE', color: 'var(--accent-color)' },
  { id: 'contact', label: 'MULTIPLAYER', color: 'var(--secondary-color)' },
];

const MenuNavigation = ({ onSelect }) => {
  const { playClick, playHover } = useSound();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    // Focus the menu container on mount to catch keyboard events
    if (menuRef.current) {
      menuRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        playHover();
        return prev > 0 ? prev - 1 : MENU_ITEMS.length - 1;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        playHover();
        return prev < MENU_ITEMS.length - 1 ? prev + 1 : 0;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      playClick('hard');
      onSelect(MENU_ITEMS[selectedIndex].id);
    } else if (['1', '2', '3', '4'].includes(e.key)) {
      e.preventDefault();
      const index = parseInt(e.key) - 1;
      setSelectedIndex(index);
      playClick('hard');
      onSelect(MENU_ITEMS[index].id);
    }
  };


  return (
    <div 
      className="flex flex-col items-center w-full max-w-[500px] outline-none focus:outline-none focus-visible:outline-none mt-8 relative z-20"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={menuRef}
    >
      <div className="flex flex-col w-full gap-4">
        {MENU_ITEMS.map((item, index) => {
          const isSelected = index === selectedIndex;
          
          return (
            <div 
              key={item.id}
              className="group flex items-center justify-between py-4 px-6 cursor-pointer transition-all duration-300 border-4 border-black relative overflow-hidden"
              style={{
                backgroundColor: isSelected ? item.color : 'var(--card-bg)',
                transform: isSelected ? 'translateX(20px) skewX(-5deg)' : 'translateX(0) skewX(0)',
                boxShadow: isSelected 
                  ? '6px 6px 0px var(--text-color), 12px 12px 0px rgba(0,0,0,0.5)' 
                  : '4px 4px 0px var(--text-color)',
                borderColor: 'var(--text-color)'
              }}
              onClick={() => {
                setSelectedIndex(index);
                playClick('hard');
                onSelect(item.id);
              }}
              onMouseEnter={() => {
                if (selectedIndex !== index) playHover();
                setSelectedIndex(index);
              }}

            >
              {/* Background texture line pattern when active */}
              {isSelected && (
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 4px, transparent 4px, transparent 12px)'
                }}></div>
              )}
              
              <div className="flex items-center gap-6 relative z-10">
                {/* Arrow */}
                <div className="w-[30px] flex justify-center">
                  <span 
                    className="font-display text-[32px] text-black font-bold"
                    style={{ 
                      opacity: isSelected ? 1 : 0,
                      transform: isSelected ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'all 0.2s ease-out'
                    }}
                  >
                    ►
                  </span>
                </div>
                
                {/* Label */}
                <div 
                  className="font-display text-[28px] tracking-[4px] uppercase font-bold text-black"
                  style={{
                    letterSpacing: isSelected ? '6px' : '4px',
                    transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </div>
              </div>

              {/* Number indicator */}
              <div className="font-mono font-bold text-[16px] text-black border-4 border-black w-10 h-10 flex items-center justify-center bg-white relative z-10 shadow-[2px_2px_0px_#000]"
                style={{
                  transform: isSelected ? 'rotate(5deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Hints */}
      <div className="flex gap-8 mt-16 items-center text-black font-mono font-bold text-[14px] uppercase tracking-[2px] bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_#000] transform -rotate-1">
        <div className="flex items-center gap-2">
          <span className="bg-black text-white px-1">↑↓</span> NAVIGATE
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-black text-white px-1">ENTER</span> SELECT
        </div>
      </div>
    </div>
  );
};

export default MenuNavigation;
