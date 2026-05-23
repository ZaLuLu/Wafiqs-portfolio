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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="page-spread-content h-full bg-[#0D0C0A] p-12 text-[#F5F1EB]">
      {/* Paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.015]" />

      {/* Top Folio strip */}
      <header className="flex justify-between items-center border-b border-white/10 pb-5 select-none">
        <span className="font-meta text-[9px] tracking-[0.25em] text-[#D1B48C] uppercase font-bold">
          COLLABORATION
        </span>
        <span className="font-meta text-[9px] tracking-widest text-white/40 uppercase">
          BACK COVER
        </span>
      </header>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.15fr_1.3fr] gap-10 my-auto py-8 items-stretch relative z-10">
        
        {/* Left Side: Call to Action & Direct Details */}
        <div className="flex flex-col justify-between pr-2 gap-4">
          <div>
            <span className="font-meta text-[9px] tracking-[0.2em] text-[#D1B48C] block font-bold mb-1.5 uppercase select-none">
              TRANSMIT REQUEST
            </span>
            <h3 className="font-heading italic font-light text-[38px] leading-[0.95] text-[#F5F1EB] select-none">
              LET'S BUILD<br/>SOMETHING.
            </h3>
          </div>

          <p className="font-body text-[12.5px] leading-relaxed text-[#F5F1EB]/80 font-light select-text">
            Looking for Summer 2026 developer internships or web development collaborations. Drop a direct request to establish communication.
          </p>

          {/* Social and Info Block */}
          <div className="flex flex-col gap-2 mt-4 select-none">
            <div className="border-b border-white/10 pb-2.5 flex justify-between items-baseline text-xs">
              <span className="font-meta text-[9px] text-[#F5F1EB]/50 uppercase">EMAIL</span>
              <a
                href={`mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`}
                className="font-display font-bold text-[#D1B48C] hover:text-[#DC684A] transition-colors"
              >
                {EMAIL_USER}@{EMAIL_DOMAIN}
              </a>
            </div>
            <div className="border-b border-white/10 pb-2.5 flex justify-between items-baseline text-xs">
              <span className="font-meta text-[9px] text-[#F5F1EB]/50 uppercase">GITHUB</span>
              <a
                href="https://github.com/ZaLuLu"
                target="_blank"
                rel="noreferrer"
                className="font-display font-medium text-[#F5F1EB]/90 hover:underline"
              >
                github.com/ZaLuLu
              </a>
            </div>
            <div className="flex justify-between items-baseline text-xs">
              <span className="font-meta text-[9px] text-[#F5F1EB]/50 uppercase">LOCATION</span>
              <span className="font-display font-medium text-[#F5F1EB]/90">{IDENTITY.location}</span>
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
            <div className="bg-[#151310] border border-[#D1B48C]/20 p-6 text-center rounded-[1px] select-none">
              <span className="font-cookie text-4xl text-[#D1B48C] block mb-2 font-normal">Thank you!</span>
              <p className="font-body text-xs text-[#F5F1EB]/80 font-medium tracking-wide">
                Your transmission has been logged. Wafiq will follow up shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="font-meta text-[8.5px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter full name"
                  className="bg-transparent border-b border-white/20 focus:border-[#D1B48C] text-xs font-body text-[#F5F1EB] pb-2 outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-meta text-[8.5px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                  className="bg-transparent border-b border-white/20 focus:border-[#D1B48C] text-xs font-body text-[#F5F1EB] pb-2 outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="font-meta text-[8.5px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="Briefly describe your inquiry..."
                  className="bg-transparent border-b border-white/20 focus:border-[#D1B48C] text-xs font-body text-[#F5F1EB] pb-1.5 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-3 font-meta text-[10px] tracking-widest text-[#0D0C0A] bg-[#D1B48C] hover:bg-[#F5F1EB] hover:text-[#0D0C0A] py-3.5 text-center cursor-pointer transition-all duration-300 font-bold uppercase disabled:opacity-50 select-none border-none shadow-md rounded-[9999px]"
              >
                {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT REQUEST →'}
              </button>

            </form>
          )}
        </div>

      </div>

      {/* Bottom Folio */}
      <footer className="border-t border-white/10 pt-5 w-full">
        <Folio page={8} text="CLOSE REGISTER" />
      </footer>
    </div>
  );
}
