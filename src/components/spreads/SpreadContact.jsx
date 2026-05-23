import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Folio from '../ui/Folio';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="page-spread-content page-left-gutter h-full bg-jp-obsidian text-[#F5F1EB] relative flex flex-col justify-between">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.015]" />

      {/* Floating Spotlight backlight */}
      <div className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(circle at 30% 60%, rgba(201, 169, 110, 0.04) 0%, transparent 60%)'
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex flex-col justify-between relative z-10"
      >
        {/* Top Folio strip */}
        <motion.header 
          variants={itemVariants} 
          className="flex justify-between items-center border-b border-white/10 pb-4 select-none"
        >
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#C9A96E] uppercase font-bold">
            COLLABORATION
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-white/40 uppercase font-semibold">
            BACK COVER // CLOSE
          </span>
        </motion.header>

        {/* Directory Spread (Directory Grid & Message Transmission) */}
        <div className="my-auto py-2 flex flex-col gap-4 max-w-[420px] mx-auto w-full">
          
          {/* Header block */}
          <div className="flex flex-col gap-1 text-center select-none">
            <span className="font-meta text-[8px] tracking-[0.2em] text-[#C9A96E] block font-bold uppercase">
              TRANSMIT REQUEST
            </span>
            <h3 className="font-heading italic font-light text-[28px] leading-tight text-white">
              Let's Build Together.
            </h3>
          </div>

          {/* Socials & Channels Directory Cards Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2.5 w-full select-none mt-1">
            {/* Outlook Card */}
            <a 
              href="mailto:wafiqnawaz@outlook.com" 
              className="p-2.5 bg-[#151310] border border-white/10 hover:border-[#C9A96E]/80 transition-all duration-300 rounded-[2px] flex flex-col gap-0.5 text-left group"
            >
              <span className="font-meta text-[7.5px] text-[#C9A96E] font-bold tracking-wider">OUTLOOK MAIL</span>
              <span className="font-body text-[10.5px] text-white/80 group-hover:text-[#C9A96E] transition-colors truncate">wafiqnawaz@outlook.com</span>
            </a>
            
            {/* Gmail Card */}
            <a 
              href="mailto:nawazwafiq711@gmail.com" 
              className="p-2.5 bg-[#151310] border border-white/10 hover:border-[#C9A96E]/80 transition-all duration-300 rounded-[2px] flex flex-col gap-0.5 text-left group"
            >
              <span className="font-meta text-[7.5px] text-[#C9A96E] font-bold tracking-wider">GMAIL MAIL</span>
              <span className="font-body text-[10.5px] text-white/80 group-hover:text-[#C9A96E] transition-colors truncate">nawazwafiq711@gmail.com</span>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/wafiqnawaz" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 bg-[#151310] border border-white/10 hover:border-[#C9A96E]/80 transition-all duration-300 rounded-[2px] flex flex-col gap-0.5 text-left group"
            >
              <span className="font-meta text-[7.5px] text-[#C9A96E] font-bold tracking-wider">LINKEDIN DIRECTORY</span>
              <span className="font-body text-[10.5px] text-white/80 group-hover:text-[#C9A96E] transition-colors truncate">in/wafiqnawaz</span>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/ZaLuLu" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 bg-[#151310] border border-white/10 hover:border-[#C9A96E]/80 transition-all duration-300 rounded-[2px] flex flex-col gap-0.5 text-left group"
            >
              <span className="font-meta text-[7.5px] text-[#C9A96E] font-bold tracking-wider">GITHUB ARCHIVE</span>
              <span className="font-body text-[10.5px] text-white/80 group-hover:text-[#C9A96E] transition-colors truncate">github.com/ZaLuLu</span>
            </a>
          </motion.div>

          {/* Full-width resume download key */}
          <motion.div variants={itemVariants} className="w-full">
            <a 
              href="/Wafiq_Nawaz_Resume.pdf" 
              download
              className="cta-primary font-bold w-full justify-center flex gap-2 items-center text-center select-none hover:bg-[#C9A96E]/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              DOWNLOAD RÉSUMÉ
            </a>
          </motion.div>

          {/* Form input fields */}
          <div className="w-full px-1 border-t border-white/10 pt-3">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#151310] border border-[#C9A96E]/20 p-4 text-center rounded-[2px] select-none shadow-xl"
              >
                <span className="font-cookie text-2xl text-[#C9A96E] block mb-1 font-normal">Thank you!</span>
                <p className="font-body text-[11px] text-[#F5F1EB]/80">
                  Transmission logged. Wafiq will follow up shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <span className="font-meta text-[7.5px] tracking-[0.25em] text-[#C9A96E] font-bold block select-none uppercase mb-1">OR TRANSMIT AN IMMEDIATE FEEDBACK PACKET</span>
                <div className="grid grid-cols-2 gap-3">
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label className="font-meta text-[7px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter name"
                      className="contact-input"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="font-meta text-[7px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter email"
                      className="contact-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="font-meta text-[7px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe inquiry..."
                    className="contact-input resize-none"
                    style={{ minHeight: '80px' }}
                  />
                </div>

                {/* Submit technical button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="font-meta text-[9px] tracking-widest text-[#C9A96E] hover:text-[#0D0C0A] bg-transparent hover:bg-[#C9A96E] border border-[#C9A96E]/50 hover:border-[#C9A96E] py-2.5 text-center cursor-pointer transition-all duration-300 font-bold uppercase disabled:opacity-50 select-none rounded-[2px] outline-none border-solid mt-1.5"
                >
                  {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT REGISTER →'}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-white/10 pt-4 w-full">
          <Folio page={9} text="CLOSE REGISTER" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
