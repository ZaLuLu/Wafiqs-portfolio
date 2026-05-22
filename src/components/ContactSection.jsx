import React, { useState } from 'react';
import { useSound } from '../context/SoundContext';
import { CONTACTS, EMAIL_USER, EMAIL_DOMAIN } from '../data/portfolio';

const ContactSection = () => {
  const { playClick, playHover } = useSound();
  const [copied, setCopied]     = useState('');
  const [activeCard, setActiveCard] = useState(null);

  const EMAIL_FULL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

  const copyToClipboard = (text, id) => {
    playClick('hard');
    setActiveCard(id);
    navigator.clipboard.writeText(text).catch(() => {
      const tmp = document.createElement('input');
      tmp.value = text;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      document.body.removeChild(tmp);
    });
    setCopied(id);
    setTimeout(() => { setCopied(''); setActiveCard(null); }, 2000);
  };

  const handleLinkClick = (url, id) => {
    playClick('hard');
    setActiveCard(id);
    setTimeout(() => { window.open(url, '_blank', 'noopener,noreferrer'); setActiveCard(null); }, 200);
  };

  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto pt-8 animate-fade-in items-center relative z-20 px-2 sm:px-0">

      {/* Header */}
      <div
        className="w-full flex items-center justify-between mb-8 p-4"
        style={{ backgroundColor: '#0a0a0a', border: '3px solid #F0EDE4', boxShadow: '6px 6px 0px #F4FF1E' }}
      >
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-[22px] sm:text-[26px] tracking-[4px] m-0 leading-none uppercase font-bold" style={{ color: '#F0EDE4' }}>
            COMMUNICATION_TERMINAL
          </h2>
          <div className="font-mono text-[10px]" style={{ color: '#555' }}>
            SERIAL: 772-X99-ZA · STATUS: READY
          </div>
        </div>
        <div className="hidden sm:flex gap-2" aria-hidden="true">
          <div className="w-3 h-3" style={{ backgroundColor: '#D32F2F', border: '1px solid #F0EDE4' }} />
          <div className="w-3 h-3 animate-pulse" style={{ backgroundColor: '#2E7D32', border: '1px solid #F0EDE4' }} />
        </div>
      </div>

      {/* Keycards */}
      <div className="flex flex-col gap-4 w-full">
        {CONTACTS.map((contact, idx) => {
          const isActive = activeCard === contact.id;
          const isCopied = copied === contact.id;

          const handleAction = contact.kind === 'copy'
            ? () => copyToClipboard(EMAIL_FULL, contact.id)
            : contact.kind === 'download'
            ? () => { playClick('hard'); const a = document.createElement('a'); a.href = contact.url; a.download = contact.value; a.click(); }
            : () => handleLinkClick(contact.url, contact.id);

          return (
            <div
              key={contact.id}
              onMouseEnter={playHover}
              onClick={handleAction}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleAction(); }}
              role="button"
              tabIndex={0}
              aria-label={`${contact.label}: ${contact.value}`}
              className="relative flex items-center cursor-pointer transition-all duration-200 contact-keycard"
              style={{
                backgroundColor: '#161616',
                border: `3px solid ${isActive ? contact.color : '#333'}`,
                boxShadow: isActive ? `0px 0px 0px` : `6px 6px 0px #222`,
                transform: isActive ? 'translateX(-16px)' : idx % 2 === 0 ? 'rotate(0.5deg)' : 'rotate(-0.5deg)',
                padding: '16px',
                zIndex: 10 + idx,
              }}
            >
              {/* Color accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: contact.color }} aria-hidden="true" />

              {/* Punched hole */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full" style={{ backgroundColor: '#0a0a0a', border: '2px solid #333' }} aria-hidden="true" />

              {/* Content */}
              <div className="pl-5 flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-[10px] font-black px-2 py-0.5 tracking-tighter uppercase"
                    style={{ backgroundColor: contact.color, color: '#000' }}
                  >
                    {contact.type}
                  </span>
                  <span className="font-mono text-[9px] font-bold" style={{ color: '#444' }}>
                    REF: {contact.id.toUpperCase()}_0{idx + 1}
                  </span>
                </div>
                <div className="font-display text-[20px] sm:text-[24px] leading-tight uppercase tracking-wide" style={{ color: '#F0EDE4' }}>
                  {isCopied ? '✓ COPIED' : contact.label}
                </div>
                <div className="font-mono text-[12px] sm:text-[13px] font-bold truncate" style={{ color: '#888' }}>
                  {contact.value}
                </div>
              </div>

              {/* Barcode */}
              <div className="hidden sm:flex flex-col gap-[2px] pr-10 opacity-20" aria-hidden="true">
                <div className="flex gap-[1px]">
                  {[1,3,1,1,4,2,1].map((w, i) => (
                    <div key={i} style={{ width: `${w}px`, height: '28px', backgroundColor: '#F0EDE4' }} />
                  ))}
                </div>
                <div className="font-mono text-[7px] text-center tracking-widest" style={{ color: '#444' }}>
                  {idx}00{idx * 14}99
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-10 w-full flex flex-col items-center gap-3">
        <div
          className="font-mono font-bold text-[11px] px-6 py-2 uppercase tracking-widest animate-pulse"
          style={{ backgroundColor: '#0a0a0a', color: '#F4FF1E', border: '2px solid #F4FF1E', boxShadow: '3px 3px 0px #F4FF1E' }}
        >
          SYS_LINK: ACTIVE — AWAITING_INPUT
        </div>
        <p className="font-mono text-[9px] uppercase text-center m-0" style={{ color: '#333' }}>
          encrypted via zalulu-proto-v4 · end-to-end verified
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
