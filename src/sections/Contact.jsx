import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Grain } from '../components/Grain';
import SectionLabel from '../components/SectionLabel';
import { EnvelopeSimple, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15% 0px" });

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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#F2EDE4] text-[#0D0C09] py-24 sm:py-32 px-6 sm:px-12 select-none overflow-hidden"
    >
      {/* Paper grain tactility overlay */}
      <Grain />

      {/* Floating Spotlight backlight */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(201, 169, 110, 0.05) 0%, transparent 60%)'
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-[1200px] mx-auto flex flex-col gap-12 z-10 relative"
      >
        {/* Top Header Log */}
        <div className="flex justify-between items-center w-full border-b border-[#0D0C09]/10 pb-5">
          <SectionLabel number="05" label="TRANSMIT REQUEST" theme="light" />
          <span className="font-mono text-[9px] tracking-widest text-[#0D0C09]/40 uppercase font-semibold">
            BACK COVER // CLOSE
          </span>
        </div>

        {/* Massive Section Logotype (Change 17) */}
        <motion.div variants={itemVariants} className="w-full">
          <h2 className="font-display text-[clamp(4.5rem,14vw,11.5rem)] leading-[0.8] tracking-[-0.01em] text-[#0D0C09] uppercase select-text">
            Transmit Request.
          </h2>
        </motion.div>

        {/* Main Grid: Pull Quote + Channels + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 sm:gap-16 items-start mt-4">
          
          {/* Left Column: Pull quote, grid of cards, resume download */}
          <div className="flex flex-col gap-10 w-full">
            
            {/* Pull Quote Row */}
            <motion.div 
              variants={itemVariants}
              className="border-l-3 border-[#C9A96E] pl-6 py-1 select-none"
            >
              <blockquote className="font-serif italic font-light text-[clamp(1.4rem,3vw,1.9rem)] leading-[1.25] text-[#0D0C09] max-w-[20ch]">
                "Every great product starts with a conversation."
              </blockquote>
            </motion.div>

            {/* Channels Directory Grid (Change 15) */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full select-none"
            >
              {/* Outlook Card */}
              <a 
                href="mailto:wafiqnawaz@outlook.com?subject=Inquiry%20from%20Portfolio" 
                className="p-4 bg-[#FAF6F0] border border-[#0D0C09]/10 hover:border-[#C9A96E]/80 hover:bg-[#FAF6F0]/60 transition-all duration-300 rounded-[2px] flex flex-col gap-1 text-left group relative overflow-hidden"
              >
                <span className="font-mono text-[8px] text-[#C9A96E] font-bold tracking-[0.18em] uppercase flex items-center gap-1.5">
                  <EnvelopeSimple size={10} weight="bold" />
                  OUTLOOK MAIL
                </span>
                <span className="font-body text-[12px] text-[#0D0C09]/80 group-hover:text-[#1A5EDB] transition-colors truncate pr-6">wafiqnawaz@outlook.com</span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[14px] text-[#C9A96E] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>
              
              {/* Gmail Card */}
              <a 
                href="mailto:nawazwafiq711@gmail.com?subject=Inquiry%20from%20Portfolio" 
                className="p-4 bg-[#FAF6F0] border border-[#0D0C09]/10 hover:border-[#C9A96E]/80 hover:bg-[#FAF6F0]/60 transition-all duration-300 rounded-[2px] flex flex-col gap-1 text-left group relative overflow-hidden"
              >
                <span className="font-mono text-[8px] text-[#C9A96E] font-bold tracking-[0.18em] uppercase flex items-center gap-1.5">
                  <EnvelopeSimple size={10} weight="bold" />
                  GMAIL MAIL
                </span>
                <span className="font-body text-[12px] text-[#0D0C09]/80 group-hover:text-[#1A5EDB] transition-colors truncate pr-6">nawazwafiq711@gmail.com</span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[14px] text-[#C9A96E] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/wafiqnawaz" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 bg-[#FAF6F0] border border-[#0D0C09]/10 hover:border-[#C9A96E]/80 hover:bg-[#FAF6F0]/60 transition-all duration-300 rounded-[2px] flex flex-col gap-1 text-left group relative overflow-hidden"
              >
                <span className="font-mono text-[8px] text-[#C9A96E] font-bold tracking-[0.18em] uppercase flex items-center gap-1.5">
                  <LinkedinLogo size={10} weight="bold" />
                  LINKEDIN DIRECTORY
                </span>
                <span className="font-body text-[12px] text-[#0D0C09]/80 group-hover:text-[#1A5EDB] transition-colors truncate pr-6">in/wafiqnawaz</span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[14px] text-[#C9A96E] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/ZaLuLu" 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 bg-[#FAF6F0] border border-[#0D0C09]/10 hover:border-[#C9A96E]/80 hover:bg-[#FAF6F0]/60 transition-all duration-300 rounded-[2px] flex flex-col gap-1 text-left group relative overflow-hidden"
              >
                <span className="font-mono text-[8px] text-[#C9A96E] font-bold tracking-[0.18em] uppercase flex items-center gap-1.5">
                  <GithubLogo size={10} weight="bold" />
                  GITHUB ARCHIVE
                </span>
                <span className="font-body text-[12px] text-[#0D0C09]/80 group-hover:text-[#1A5EDB] transition-colors truncate pr-6">github.com/ZaLuLu</span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[14px] text-[#C9A96E] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>
            </motion.div>

            {/* Resume Download trigger */}
            <motion.div variants={itemVariants} className="w-full">
              <a 
                href="/Wafiq_Nawaz_Resume.pdf" 
                download
                className="w-full justify-center flex gap-2.5 items-center text-center select-none font-mono text-[10px] tracking-[0.2em] font-bold border border-[#0D0C09] hover:bg-[#0D0C09]/5 py-3 transition-colors duration-300 rounded-[2px] uppercase cursor-pointer text-[#0D0C09]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                DOWNLOAD RÉSUMÉ
              </a>
            </motion.div>

          </div>

          {/* Right Column: Contact form */}
          <div className="w-full lg:pl-4">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FAF6F0] border border-[#C9A96E]/20 p-8 text-center rounded-[2px] select-none shadow-[0_15px_40px_rgba(13,12,9,0.06)]"
              >
                <span className="font-sign text-4xl text-[#C9A96E] block mb-2 font-normal">Thank you!</span>
                <p className="font-body text-[13.5px] text-[#0D0C09]/80 leading-relaxed max-w-[32ch] mx-auto mt-2">
                  Transmission logged. Wafiq will follow up shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                <span className="font-mono text-[8px] tracking-[0.25em] text-[#C9A96E] font-bold block select-none uppercase border-b border-[#0D0C09]/10 pb-2">
                  OR TRANSMIT AN IMMEDIATE MESSAGE
                </span>

                {/* Grid for Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="font-mono text-[8px] tracking-widest text-[#0D0C09]/55 uppercase select-none font-bold">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="border-b border-[#0D0C09]/20 focus:border-[#0D0C09] bg-transparent text-[#0D0C09] text-[13.5px] font-body focus:outline-none pb-2 w-full transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="font-mono text-[8px] tracking-widest text-[#0D0C09]/55 uppercase select-none font-bold">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="border-b border-[#0D0C09]/20 focus:border-[#0D0C09] bg-transparent text-[#0D0C09] text-[13.5px] font-body focus:outline-none pb-2 w-full transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 w-full relative">
                  <label className="font-mono text-[8px] tracking-widest text-[#0D0C09]/55 uppercase select-none font-bold">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    placeholder="Describe your inquiry..."
                    className="border-b border-[#0D0C09]/20 focus:border-[#0D0C09] bg-transparent text-[#0D0C09] text-[13.5px] font-body focus:outline-none pb-2 w-full transition-colors duration-300 resize-none"
                    style={{ minHeight: '120px' }}
                  />
                  {/* Live Character Counter (Change 16) */}
                  <span className={`font-mono text-[9px] text-right block mt-1 transition-colors ${formState.message.length > 450 ? 'text-[#C9A96E]' : 'text-[#0D0C09]/30'}`}>
                    {formState.message.length} / 500
                  </span>
                </div>

                {/* Submit button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full text-center cursor-pointer transition-all duration-300 font-bold border border-[#0D0C09] bg-transparent text-[#0D0C09] font-mono text-[10px] tracking-[0.18em] uppercase py-3.5 hover:bg-[#0D0C09] hover:text-[#F2EDE4] select-none rounded-[2px] disabled:opacity-50 mt-2"
                >
                  {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT REGISTER →'}
                </motion.button>
              </form>
            )}
          </div>

        </div>

        {/* Footer info at the very bottom */}
        <motion.div variants={itemVariants} className="border-t border-[#0D0C09]/10 pt-6 mt-6 w-full flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[9px] text-[#0D0C09]/45">
          <span>◆ 2026 // DIGITAL MONOGRAPH v2.0</span>
          <span>DESIGN &amp; CRAFT BY WAFIQ NAWAZ</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
