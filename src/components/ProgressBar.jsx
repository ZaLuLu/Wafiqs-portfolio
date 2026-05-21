import React, { useState, useEffect } from 'react';

const ProgressBar = ({ label, percentage, labelColor = "text-text-white", valueColor = "text-text-muted", barColor = "bg-neon-pink" }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    // Animate to percentage
    const timer = setTimeout(() => {
      setCurrentProgress(percentage);
    }, 100); // Slight delay for stagger effect
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="w-full mb-3">
      <div className="flex justify-between items-end mb-1">
        <span className={`font-mono text-[14px] font-bold ${labelColor}`}>{label}</span>
        <span className={`font-mono text-[12px] font-bold ${valueColor}`}>[{currentProgress}%]</span>
      </div>
      <div className="h-[10px] w-full bg-cyber-bg-light border-2 border-cyber-bg rounded-[2px] overflow-hidden shadow-[2px_2px_0px_#060412]">
        <div 
          className={`h-full ${barColor} transition-all duration-1000 ease-out border-r-2 border-cyber-bg`}
          style={{ width: `${currentProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
