import React, { useState, useEffect } from 'react';
import { useSound } from '../context/SoundContext';


const MESSAGES = {
  about: [
    "> INITIATING DOSSIER EXTRACTION",
    "> DECRYPTING ALIAS: ZALULU",
    "> LOADING BIO-METRICS...",
    "[ ACCESS GRANTED ]"
  ],
  skills: [
    "> CONNECTING TO SKILL MATRIX",
    "> BYPASSING SECURITY PROTOCOLS",
    "> DOWNLOADING PASSIVE TRAITS...",
    "[ SYNC COMPLETE ]"
  ],
  projects: [
    "> ACCESSING SECURE VAULT",
    "> DECRYPTING PROJECT FILES",
    "> UNPACKING PAYLOADS...",
    "[ VAULT UNLOCKED ]"
  ],
  contact: [
    "> OPENING ENCRYPTED CHANNEL",
    "> PINGING RELAY SERVERS",
    "> ESTABLISHING HANDSHAKE...",
    "[ CHANNEL SECURE ]"
  ],
  home: [
    "> REBOOTING SYSTEM V2",
    "> INITIALIZING KERNEL",
    "> MOUNTING UI COMPONENTS...",
    "[ SYSTEM ONLINE ]"
  ]
};

const LoadingOverlay = ({ section, onComplete }) => {
  const { playTyping, playFlashbang } = useSound();
  const [logIndex, setLogIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [flash, setFlash] = useState(false);
  
  const messages = MESSAGES[section] || MESSAGES.home;

  useEffect(() => {
    // Rapidly step through messages
    if (logIndex < messages.length) {
      const timer = setTimeout(() => {
        playTyping();
        setLogIndex(prev => prev + 1);
      }, 180); // fast typewriter logs
      return () => clearTimeout(timer);
    } else {
      // Finished all logs, flashbang!
      setFlash(true);
      playFlashbang();
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(onComplete, 150); // super fast flash fade
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [logIndex, messages.length, onComplete, playTyping, playFlashbang]);


  return (
    <div 
      className={`fixed inset-0 z-[200] flex flex-col justify-end p-8 transition-colors duration-75 ${flash ? 'bg-white' : 'bg-black'} ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className={`font-mono text-[16px] md:text-[20px] font-bold uppercase leading-relaxed max-w-[600px] ${flash ? 'opacity-0' : ''}`} style={{ color: 'var(--secondary-color)' }}>
        {messages.slice(0, logIndex).map((msg, i) => (
          <div key={i} className={i === messages.length - 1 ? '' : ''} style={{ color: i === messages.length - 1 ? 'var(--accent-color)' : 'var(--secondary-color)' }}>
            {msg}
          </div>
        ))}
        {logIndex < messages.length && (
          <div className="animate-pulse">_</div>
        )}
      </div>
      
      {/* Massive Section Name Background */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-display text-[80px] md:text-[180px] opacity-[0.03] pointer-events-none uppercase tracking-[10px] ${flash ? 'opacity-0' : ''}`} style={{ color: 'var(--text-color)' }}>
        {section}
      </div>

    </div>
  );
};

export default LoadingOverlay;
