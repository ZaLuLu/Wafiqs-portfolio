import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="page-spread-content h-full bg-[#0D0C0A] text-[#F5F1EB]">
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

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.15fr_1.3fr] gap-12 my-auto py-8 items-center">
          
          {/* Left Side: Call to Action & Direct Details */}
          <div className="flex flex-col justify-between pr-2 gap-6 select-none">
            <motion.div variants={itemVariants}>
              <span className="font-meta text-[9px] tracking-[0.2em] text-[#D1B48C] block font-bold mb-2.5 uppercase">
                TRANSMIT REQUEST
              </span>
              <h3 className="font-heading italic font-light text-[40px] leading-[0.9] text-white">
                LET'S BUILD<br/>SOMETHING.
              </h3>
            </motion.div>

            <motion.p 
              variants={itemVariants} 
              className="font-body text-[13px] leading-relaxed text-[#F5F1EB]/85 font-light"
            >
              Seeking Summer 2026 developer internships or web development collaborations. Drop a direct request to establish communication.
            </motion.p>

            {/* Social and Info Block */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2 mt-4">
              <div className="border-b border-white/10 pb-3 flex justify-between items-baseline text-xs">
                <span className="font-meta text-[9.5px] text-[#F5F1EB]/50 uppercase font-semibold">EMAIL</span>
                <a
                  href={`mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`}
                  className="font-display font-bold text-[#D1B48C] hover:text-[#DC684A] transition-colors"
                >
                  {EMAIL_USER}@{EMAIL_DOMAIN}
                </a>
              </div>
              <div className="border-b border-white/10 pb-3 flex justify-between items-baseline text-xs">
                <span className="font-meta text-[9.5px] text-[#F5F1EB]/50 uppercase font-semibold">GITHUB</span>
                <a
                  href="https://github.com/ZaLuLu"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display font-medium text-[#F5F1EB]/90 hover:text-[#D1B48C] transition-colors"
                >
                  github.com/ZaLuLu
                </a>
              </div>
              <div className="flex justify-between items-baseline text-xs">
                <span className="font-meta text-[9.5px] text-[#F5F1EB]/50 uppercase font-semibold">LOCATION</span>
                <span className="font-display font-medium text-[#F5F1EB]/90">{IDENTITY.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex justify-center items-center">
            <ColumnRule vertical={true} />
          </div>

          {/* Right Side: Editorial Contact Form */}
          <div className="pl-0 md:pl-2 flex flex-col justify-center mt-10 md:mt-0">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#151310] border border-[#D1B48C]/20 p-8 text-center rounded-[1px] select-none shadow-2xl"
              >
                <span className="font-cookie text-4xl text-[#D1B48C] block mb-3 font-normal">Thank you!</span>
                <p className="font-body text-xs text-[#F5F1EB]/80 font-medium tracking-wide">
                  Your transmission has been logged. Wafiq will follow up shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Name */}
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                  <label className="font-meta text-[9px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
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
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                  <label className="font-meta text-[9px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
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
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                  <label className="font-meta text-[9px] tracking-widest text-[#F5F1EB]/55 uppercase select-none font-bold">
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
                </motion.div>

                {/* Submit button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-3 font-meta text-[10px] tracking-widest text-[#0D0C0A] bg-[#D1B48C] hover:bg-[#F5F1EB] hover:text-[#0D0C0A] py-4 text-center cursor-pointer transition-all duration-300 font-bold uppercase disabled:opacity-50 select-none border-none shadow-2xl rounded-[9999px]"
                >
                  {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT REQUEST →'}
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
