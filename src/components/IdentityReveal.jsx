import React, { useState, useEffect } from 'react';

const IdentityReveal = () => {
  const [phase, setPhase] = useState(0); // 0: Locked, 1: Spinning, 2: Jackpot, 3: Revealed
  const [slots, setSlots] = useState(['?', '?', '?']);
  
  useEffect(() => {
    if (phase === 1) {
      let ticks = 0;
      const interval = setInterval(() => {
        ticks++;
        setSlots([
          ticks > 20 ? 7 : Math.floor(Math.random() * 10),
          ticks > 30 ? 7 : Math.floor(Math.random() * 10),
          ticks > 40 ? 7 : Math.floor(Math.random() * 10),
        ]);
        
        if (ticks > 45) {
          clearInterval(interval);
          setPhase(2);
        }
      }, 50);
      return () => clearInterval(interval);
    }
    
    if (phase === 2) {
      const timer = setTimeout(() => {
        setPhase(3);
      }, 1000); // Hold jackpot for 1 second
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleSpin = () => {
    if (phase === 0) {
      setPhase(1);
    }
  };

  const getBlurValue = () => {
    if (phase < 3) return 16;
    return 0; // Unblurred
  };

  return (
    <div className="flex flex-col items-center gap-4 shrink-0 mt-4 mb-4">
      {/* The Photo Container */}
      <div 
        className="w-[128px] h-[128px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-[16px] border-[4px] border-neon-blue relative overflow-hidden flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(31,107,237,0.5)]"
        style={{
          boxShadow: phase === 3 ? '0 0 30px rgba(255, 30, 199, 0.6), inset 0 0 15px rgba(255, 30, 199, 0.4)' : '',
          borderColor: phase === 3 ? 'var(--color-neon-pink)' : 'var(--color-neon-blue)'
        }}
      >
        {/* The Photo itself */}
        <div 
          className="absolute inset-0 bg-cyber-elevated transition-all duration-1000"
          style={{ 
            filter: `blur(${getBlurValue()}px)`,
            backgroundImage: 'linear-gradient(45deg, var(--color-cyber-bg), var(--color-border-purple))'
          }}
        >
          {/* Placeholder for actual photo */}
          <div className="w-full h-full flex items-center justify-center text-neon-blue opacity-30 font-display text-[24px]">
            PHOTO
          </div>
        </div>

        {/* Overlays */}
        {phase === 0 && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10">
            <div className="font-display text-[28px] text-neon-pink tracking-[2px] drop-shadow-[0_0_8px_rgba(255,30,199,0.8)]">
              LOCKED
            </div>
          </div>
        )}

        {(phase === 1 || phase === 2) && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10 gap-2">
            <div className="w-[30px] h-[40px] bg-cyber-bg border-2 border-neon-yellow flex items-center justify-center font-display text-[32px] text-neon-yellow drop-shadow-[0_0_8px_rgba(244,255,30,0.8)]">
              {slots[0]}
            </div>
            <div className="w-[30px] h-[40px] bg-cyber-bg border-2 border-neon-yellow flex items-center justify-center font-display text-[32px] text-neon-yellow drop-shadow-[0_0_8px_rgba(244,255,30,0.8)]">
              {slots[1]}
            </div>
            <div className="w-[30px] h-[40px] bg-cyber-bg border-2 border-neon-yellow flex items-center justify-center font-display text-[32px] text-neon-yellow drop-shadow-[0_0_8px_rgba(244,255,30,0.8)]">
              {slots[2]}
            </div>
          </div>
        )}
      </div>

      {/* Arcade Button */}
      {phase === 0 && (
        <button 
          onClick={handleSpin}
          className="mt-2 px-6 py-2 bg-transparent border-[3px] border-neon-pink text-neon-pink font-display text-[24px] uppercase tracking-[2px] hover:bg-neon-pink hover:text-cyber-bg transition-all duration-200 shadow-[0_0_15px_rgba(255,30,199,0.4)] hover:shadow-[0_0_25px_rgba(255,30,199,0.8)] cursor-pointer active:scale-95"
        >
          SPIN TO REVEAL
        </button>
      )}

      {phase === 1 && (
        <div className="mt-2 text-neon-yellow font-display text-[24px] tracking-[2px] animate-pulse drop-shadow-[0_0_8px_rgba(244,255,30,0.8)]">
          SPINNING...
        </div>
      )}

      {phase === 2 && (
        <div className="mt-2 text-status-active font-display text-[28px] tracking-[4px] animate-bounce drop-shadow-[0_0_10px_rgba(17,107,9,0.8)]">
          JACKPOT!
        </div>
      )}

      {phase === 3 && (
        <div className="mt-2 text-neon-pink font-display text-[24px] tracking-[4px] drop-shadow-[0_0_8px_rgba(255,30,199,0.8)]">
          PLAYER 1: ZALULU
        </div>
      )}

    </div>
  );
};

export default IdentityReveal;
