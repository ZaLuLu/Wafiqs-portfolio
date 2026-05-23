import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="page-spread-content h-full bg-jp-obsidian text-[#F5F1EB]">
      {/* Tactical paper grain realism overlay */}
      <div className="paper-grain-overlay opacity-[0.015]" />

      {/* Floating Spotlight backlight */}
      <div className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(circle at 70% 60%, rgba(209, 180, 140, 0.04) 0%, transparent 60%)'
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
          className="flex justify-between items-center border-b border-white/10 pb-5 select-none"
        >
          <span className="font-meta text-[9.5px] tracking-[0.25em] text-[#D1B48C] uppercase font-bold">
            COLLABORATION
          </span>
          <span className="font-meta text-[9.5px] tracking-widest text-white/40 uppercase font-semibold">
            BACK COVER // CLOSE
          </span>
        </motion.header>

        {/* Single-Column Wabi-Sabi Flow (V5 Decluttered) */}
        <div className="my-auto py-4 flex flex-col gap-6 max-w-[420px] mx-auto w-full">
          
          {/* Header block */}
          <div className="flex flex-col gap-2 text-center select-none">
            <span className="font-meta text-[8.5px] tracking-[0.2em] text-[#D1B48C] block font-bold uppercase">
              TRANSMIT REQUEST
            </span>
            <h3 className="font-heading italic font-light text-[36px] leading-[0.9] text-white">
              LET'S BUILD SOMETHING.
            </h3>
            <p className="font-body text-[12.5px] leading-relaxed text-[#F5F1EB]/80 font-light mt-1 px-4">
              Seeking Summer 2026 developer internships or security collaborations. Drop a direct transmission request to establish communication.
            </p>
          </div>

          {/* Credentials Info row */}
          <div className="flex justify-between border-b border-white/10 pb-4 select-none text-xs px-2 mt-2 gap-4">
            <div className="flex flex-col text-left">
              <span className="font-meta text-[8px] text-[#F5F1EB]/50 uppercase font-bold mb-0.5">EMAIL</span>
              <a href={`mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`} className="font-meta font-bold text-[10px] text-[#D1B48C] hover:text-[#DC684A] transition-colors">
                {EMAIL_USER}@{EMAIL_DOMAIN}
              </a>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-meta text-[8px] text-[#F5F1EB]/50 uppercase font-bold mb-0.5">GITHUB</span>
              <a href="https://github.com/ZaLuLu" target="_blank" rel="noreferrer" className="font-meta font-bold text-[10px] text-white/90 hover:text-[#D1B48C] transition-colors">
                github.com/ZaLuLu
              </a>
            </div>
          </div>

          {/* Form input fields */}
          <div className="w-full px-2">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#151310] border border-[#D1B48C]/20 p-6 text-center rounded-[1px] select-none shadow-2xl"
              >
                <span className="font-cookie text-3xl text-[#D1B48C] block mb-2 font-normal">Thank you!</span>
                <p className="font-body text-[11.5px] text-[#F5F1EB]/85">
                  Transmission successfully logged. Wafiq will follow up shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-meta text-[8px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter name"
                      className="bg-transparent border-b border-white/20 focus:border-[#D1B48C] text-[11px] font-meta text-[#F5F1EB] pb-1 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-meta text-[8px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter email"
                      className="bg-transparent border-b border-white/20 focus:border-[#D1B48C] text-[11px] font-meta text-[#F5F1EB] pb-1 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <label className="font-meta text-[8px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={1}
                    placeholder="Describe your inquiry..."
                    className="bg-transparent border-b border-white/20 focus:border-[#D1B48C] text-[11px] font-body text-[#F5F1EB] pb-1 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit technical button (Premium Ghost technical CTA) */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-3 font-meta text-[10px] tracking-widest text-[#D1B48C] hover:text-[#0D0C0A] bg-transparent hover:bg-[#D1B48C] border border-[#D1B48C]/50 hover:border-[#D1B48C] py-3.5 text-center cursor-pointer transition-all duration-300 font-bold uppercase disabled:opacity-50 select-none rounded-[9999px] outline-none border-solid"
                >
                  {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT REGISTER →'}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Folio */}
        <motion.footer variants={itemVariants} className="border-t border-white/10 pt-5 w-full">
          <Folio page={8} text="CLOSE REGISTER" />
        </motion.footer>
      </motion.div>
    </div>
  );
}
