import React, { useState } from 'react';
import { useSound } from '../context/SoundContext';
import { CONTACTS, EMAIL_USER, EMAIL_DOMAIN } from '../data/portfolio';

/**
 * ContactSection — "Communication Terminal" UI.
 *
 * Content is driven entirely by src/data/portfolio.js — see CONTACTS, EMAIL_USER, EMAIL_DOMAIN exports.
 *
 * Three "keycard" entries (Email, GitHub, X) slide left when hovered
 * and "punch into" the reader slot when clicked.
 *
 * Security note: the email address is kept split in portfolio.js
 * so it cannot be trivially harvested by simple regex scrapers.
 * A real mailto: link is still generated for usability.
 */
const ContactSection = () => {
  const { playClick, playHover } = useSound();
  const [copied,     setCopied]     = useState('');
  const [activeCard, setActiveCard] = useState(null);

  // ── Derive the full email from the split constants ────────────────────────
  const EMAIL_FULL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

  // ── Copy email to clipboard ───────────────────────────────────────────────
  const copyToClipboard = (text, id) => {
    playClick('hard');
    setActiveCard(id);
    navigator.clipboard.writeText(text).catch(() => {
      // Fallback: select text in a temp input (older browsers / no HTTPS)
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

  // ── Open external link ────────────────────────────────────────────────────
  const handleLinkClick = (url, id) => {
    playClick('hard');
    setActiveCard(id);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setActiveCard(null);
    }, 200);
  };

  return (
    <div className="flex flex-col w-full max-w-[800px] mx-auto pt-12 animate-fade-in items-center relative z-20">

      {/* ── Terminal Header ── */}
      <div className="w-full flex items-center justify-between mb-12 bg-black text-white border-4 border-black p-4 shadow-[8px_8px_0px_var(--accent-color)]">
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-[28px] tracking-[4px] m-0 leading-none uppercase font-bold">
            COMMUNICATION_TERMINAL
          </h2>
          <div className="font-mono text-[10px] text-gray-400">
            SERIAL_NO: 772-X99-ZA // STATUS: READY
          </div>
        </div>
        {/* Status LEDs */}
        <div className="hidden md:flex gap-2" aria-hidden="true">
          <div className="w-4 h-4 bg-red-500 border-2 border-black" />
          <div className="w-4 h-4 bg-green-500 border-2 border-black animate-pulse" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full items-start">

        {/* ── Left: Card Reader Slot ── */}
        <div className="w-full md:w-[300px] flex flex-col gap-4">
          <div
            className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_var(--text-color)] relative overflow-hidden"
            style={{ backgroundColor: 'var(--card-bg)' }}
            role="status"
            aria-live="polite"
            aria-label={`Reader status: ${activeCard ? 'processing' : 'awaiting key'}`}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-black opacity-10" aria-hidden="true" />
            <div className="font-mono text-[12px] font-bold uppercase mb-4 opacity-60">
              Authentication Required
            </div>

            {/* The slot */}
            <div className="w-full h-12 bg-black border-4 border-black flex items-center justify-center relative shadow-inner">
              <div className="w-[90%] h-1 bg-gray-800 animate-pulse" />
              <div
                className="absolute -top-1 left-4 font-mono text-[8px] px-1 border border-black"
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}
              >
                SLOT_IN
              </div>
            </div>

            {/* Decorative scan lines */}
            <div className="mt-8 flex flex-col gap-2" aria-hidden="true">
              <div className="h-1 bg-black opacity-20 w-3/4" />
              <div className="h-1 bg-black opacity-20 w-1/2" />
              <div className="h-1 bg-black opacity-20 w-2/3" />
            </div>

            {/* Scan status readout */}
            <div className="mt-8 pt-4 border-t-2 border-black border-dashed">
              <div className="flex justify-between items-center font-mono text-[11px] font-bold">
                <span>SCAN_STATUS</span>
                <span className={activeCard ? 'text-green-600 animate-pulse' : ''}>
                  {activeCard ? 'PROCESSING...' : 'AWAITING_KEY'}
                </span>
              </div>
            </div>
          </div>

          <p className="font-mono text-[10px] uppercase font-bold text-center opacity-40 px-4">
            insert access key for secure transmission // 256-bit encryption active
          </p>
        </div>

        {/* ── Right: Keycards ── */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          {CONTACTS.map((contact, idx) => {
            const isActive = activeCard === contact.id;
            const isCopied = copied    === contact.id;

            const handleAction = contact.kind === 'copy'
              ? () => copyToClipboard(EMAIL_FULL, contact.id)
              : contact.kind === 'download'
              ? () => {
                  playClick('hard');
                  const a = document.createElement('a');
                  a.href = contact.url;
                  a.download = contact.value;
                  a.click();
                }
              : () => handleLinkClick(contact.url, contact.id);

            return (
              <div
                key={contact.id}
                onMouseEnter={playHover}
                onClick={handleAction}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleAction(); }}
                role="button"
                tabIndex={0}
                aria-label={`${contact.label}: ${contact.value}`}
                className={[
                  'relative group flex items-center bg-white border-4 border-black p-4',
                  'cursor-pointer transition-all duration-200',
                  isActive
                    ? 'translate-x-[-20px] shadow-[0px_0px_0px_#000] rotate-0'
                    : `hover:translate-x-[-10px] shadow-[8px_8px_0px_var(--text-color)] ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`,
                ].join(' ')}
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--text-color)', zIndex: 10 + idx }}
              >
                {/* Neon accent side bar */}
                <div className="absolute left-0 top-0 bottom-0 w-3" style={{ backgroundColor: contact.color }} aria-hidden="true" />

                {/* Punched hole */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border-2 border-white shadow-inner" aria-hidden="true" />

                {/* Card content */}
                <div className="pl-6 flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="bg-black text-white font-mono text-[12px] font-black px-2 py-0.5 tracking-tighter uppercase transform -rotate-1 shrink-0"
                      style={{ backgroundColor: 'var(--text-color)', color: 'var(--card-bg)' }}
                    >
                      {contact.type}
                    </div>
                    <div className="font-mono text-[10px] font-bold opacity-40">
                      REF: {contact.id.toUpperCase()}_0{idx + 1}
                    </div>
                  </div>

                  <div className="font-display text-[22px] md:text-[26px] leading-tight uppercase tracking-wide" style={{ color: 'var(--text-color)' }}>
                    {isCopied ? 'DATA_COPIED' : contact.label}
                  </div>

                  <div className="font-mono text-[14px] font-bold opacity-70 group-hover:opacity-100 transition-opacity truncate" style={{ color: 'var(--text-color)' }}>
                    {contact.value}
                  </div>
                </div>

                {/* Decorative barcode */}
                <div className="hidden lg:flex flex-col gap-[2px] pr-12 opacity-30 group-hover:opacity-100 transition-all" aria-hidden="true">
                  <div className="flex gap-[1px]">
                    <div className="w-[1px] h-8 bg-black" />
                    <div className="w-[3px] h-8 bg-black" />
                    <div className="w-[1px] h-8 bg-black" />
                    <div className="w-[1px] h-8 bg-black" />
                    <div className="w-[4px] h-8 bg-black" />
                    <div className="w-[2px] h-8 bg-black" />
                    <div className="w-[1px] h-8 bg-black" />
                  </div>
                  <div className="font-mono text-[8px] text-center tracking-widest">
                    {idx}00{idx * 14}99
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Footer Status ── */}
      <div className="mt-16 w-full flex flex-col items-center gap-4">
        <div className="font-mono font-bold text-[12px] bg-black text-white px-6 py-2 shadow-[4px_4px_0px_var(--accent-color)] uppercase tracking-widest animate-pulse">
          SYS_LINK: ACTIVE — AWAITING_INPUT
        </div>
        <p className="font-mono text-[10px] opacity-30 text-center uppercase m-0">
          encrypted via zalulu-proto-v4 // end-to-end verified
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
