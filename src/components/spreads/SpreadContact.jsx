import React, { useState } from 'react';
import ColumnRule from '../ui/ColumnRule';
import Folio from '../ui/Folio';
import { IDENTITY, EMAIL_USER, EMAIL_DOMAIN } from '../../data/portfolio';

export default function SpreadContact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    // Simulate API call to email backend or formspree
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="page-spread-content h-full bg-[#EDE9E3]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay" />

      {/* Top Folio strip */}
      <header className="flex justify-between items-center border-b border-[#1A1714]/10 pb-4 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#C41E1E] uppercase font-bold">
          COLLABORATION REQUEST
        </span>
        <span className="font-meta text-[9px] tracking-widest text-[#1A1714]/50">
          BACK COVER
        </span>
      </header>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.1fr_1.3fr] gap-6 my-auto py-4 items-stretch">
        
        {/* Left Side: Call to Action & Direct Details */}
        <div className="flex flex-col justify-between pr-2 gap-4">
          <div>
            <span className="font-meta text-[9px] tracking-[0.2em] text-[#C41E1E] block font-bold mb-1 uppercase select-none">
              GET IN TOUCH
            </span>
            <h3 className="font-heading italic font-light text-[40px] leading-[0.95] text-[#0F2318] select-none">
              LET'S BUILD<br/>SOMETHING.
            </h3>
          </div>

          <p className="font-body text-xs leading-relaxed text-[#4A4540]">
            I am actively seeking software engineering internships and freelance opportunities in India or remotely. Drop a message to start a conversation about secure backends or scalable frontends.
          </p>

          {/* Social and Info Block */}
          <div className="flex flex-col gap-2 mt-4 select-none">
            <div className="border-b border-[#1A1714]/10 pb-1.5 flex justify-between items-baseline text-xs">
              <span className="font-meta text-[9px] text-[#8A847E] uppercase">EMAIL</span>
              <a
                href={`mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`}
                className="font-display font-medium text-[#C41E1E] hover:underline"
              >
                {EMAIL_USER}@{EMAIL_DOMAIN}
              </a>
            </div>
            <div className="border-b border-[#1A1714]/10 pb-1.5 flex justify-between items-baseline text-xs">
              <span className="font-meta text-[9px] text-[#8A847E] uppercase">GITHUB</span>
              <a
                href="https://github.com/ZaLuLu"
                target="_blank"
                rel="noreferrer"
                className="font-display font-medium text-[#1A1714] hover:underline"
              >
                github.com/ZaLuLu
              </a>
            </div>
            <div className="flex justify-between items-baseline text-xs">
              <span className="font-meta text-[9px] text-[#8A847E] uppercase">LOCATION</span>
              <span className="font-display font-medium text-[#1A1714]">{IDENTITY.location}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:flex justify-center items-center">
          <ColumnRule vertical={true} />
        </div>

        {/* Right Side: Editorial Contact Form */}
        <div className="pl-2 flex flex-col justify-center">
          {status === 'success' ? (
            <div className="bg-[#1B3A2D]/10 border border-[#1B3A2D]/20 p-6 text-center rounded-[1px]">
              <span className="font-cookie text-4xl text-[#1B3A2D] block mb-2">Thank you!</span>
              <p className="font-body text-xs text-[#1B3A2D] font-medium tracking-wide">
                Your message has been transmitted successfully. Wafiq will review and respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="font-meta text-[9px] tracking-widest text-[#8A847E] uppercase select-none">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter full name"
                  className="bg-transparent border-b border-[#1A1714]/25 focus:border-[#C41E1E] text-xs font-body text-[#1A1714] pb-1.5 outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-meta text-[9px] tracking-widest text-[#8A847E] uppercase select-none">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                  className="bg-transparent border-b border-[#1A1714]/25 focus:border-[#C41E1E] text-xs font-body text-[#1A1714] pb-1.5 outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="font-meta text-[9px] tracking-widest text-[#8A847E] uppercase select-none">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Describe your project or inquiry..."
                  className="bg-transparent border-b border-[#1A1714]/25 focus:border-[#C41E1E] text-xs font-body text-[#1A1714] pb-1 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-4 font-meta text-[10px] tracking-widest text-[#F8F5F0] bg-[#0F2318] hover:bg-[#C41E1E] py-3.5 text-center cursor-pointer transition-colors duration-300 font-semibold uppercase disabled:opacity-50 select-none rounded-[1px] border border-black/10 shadow-sm"
              >
                {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE →'}
              </button>

            </form>
          )}
        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-[#1A1714]/10 pt-4 w-full">
        <Folio page={10} text="PORTFOLIO BACK COVER" />
      </footer>
    </div>
  );
}
