import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'xkgovqer';

export default function ContactSpread() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [logs, setLogs]     = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('submitting');
    setLogs([]);

    const logSteps = [
      'Establishing secure TLS v1.3 channel...',
      'Authorizing gateway access signatures...',
      'Salting message payload bytes...',
      'Encrypting dispatch bundle (AES-256)...',
      'Initiating Formspree API handshake...',
      'Routing packet trace through secure proxies...',
      'Transmitting outbox dispatch package...'
    ];

    // Simulating terminal log lines appearing dynamically
    for (let i = 0; i < logSteps.length; i++) {
      setLogs(prev => [...prev, `> ${logSteps[i]}`]);
      await new Promise(resolve => setTimeout(resolve, 220));
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // Save to local storage for local testing and viewing
      try {
        const localSubmissions = JSON.parse(localStorage.getItem('dossier_submissions') || '[]');
        localSubmissions.push({
          timestamp: new Date().toISOString(),
          ...form,
          dispatchedToEmail: response.ok
        });
        localStorage.setItem('dossier_submissions', JSON.stringify(localSubmissions));
        console.log('%c[TACTICAL RELAY] Message logged to local storage:', 'color: #D4AF37; font-weight: bold;', form);
      } catch (err) {
        console.error('Failed to write to localStorage:', err);
      }

      if (response.ok) {
        setLogs(prev => [...prev, '>>> CONNECTION SUCCESS // DISPATCHED TO OUTBOX']);
        await new Promise(resolve => setTimeout(resolve, 600));
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setLogs(prev => [...prev, '>>> ERROR: RELAY SYSTEM REJECTED THE LOG DATA']);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus('error');
      }
    } catch {
      // Save locally even on network failure
      try {
        const localSubmissions = JSON.parse(localStorage.getItem('dossier_submissions') || '[]');
        localSubmissions.push({
          timestamp: new Date().toISOString(),
          ...form,
          dispatchedToEmail: false,
          networkError: true
        });
        localStorage.setItem('dossier_submissions', JSON.stringify(localSubmissions));
        console.log('%c[TACTICAL RELAY] Saved locally (Network Offline):', 'color: #8B3A3A; font-weight: bold;', form);
      } catch (err) {
        console.error('Failed to write to localStorage:', err);
      }

      setLogs(prev => [...prev, '>>> ERROR: GATEWAY TRANSMISSION TIMEOUT']);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('error');
    }
  };

  const animContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.10, delayChildren: 0.06 } }
  };

  const animItemLeft = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 58, damping: 20 } }
  };

  const animItemRight = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 48, damping: 18 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={animContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full min-h-full flex flex-col py-12 px-6 md:px-14 select-none relative overflow-hidden"
      style={{ color: 'var(--ivory-warm)', backgroundColor: 'var(--midnight-deep)' }}
    >
      {/* Background Stamp Watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          fontSize: '14vw',
          fontFamily: 'var(--font-display)',
          color: 'rgba(255, 255, 255, 0.01)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          lineHeight: 0.8,
          fontWeight: 900,
        }}
      >
        RELAY
      </div>

      {/* ── SECTION HEADER ── */}
      <div
        className="flex justify-between items-end pb-4 w-full mb-6 relative z-10"
        style={{ borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="flex items-baseline gap-4">
          <span
            className="font-display italic font-black"
            style={{ fontSize: '2rem', lineHeight: 1, color: 'var(--restricted-red)' }}
          >
            V
          </span>
          <div className="font-sans">
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ivory-warm)' }}>
              Secure Relay Terminal
            </div>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ivory-dim)', marginTop: '2px' }}>
              SECTION WN-05 · TRANSMISSION DISPATCH
            </div>
          </div>
        </div>
        <span
          className="font-sans hidden sm:block"
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--restricted-red)', opacity: 0.8 }}
        >
          RESTRICTED // TRANSMISSION
        </span>
      </div>

      {/* ── MAIN FRAME ── */}
      <div
        className="relative overflow-hidden flex-1 flex flex-col rounded-[6px] z-10"
        style={{
          border: '1px solid var(--border-subtle)',
          background: 'rgba(22, 25, 34, 0.25)',
          backdropFilter: 'blur(6px)',
          padding: '16px',
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full h-full z-10 relative pb-6 lg:pb-0">

          {/* LEFT: Core Contact Info & Direct Email Block */}
          <motion.div
            variants={animItemLeft}
            className="flex flex-col gap-6 lg:w-[44%] justify-between flex-shrink-0"
          >
            <div className="flex flex-col gap-5 relative">
              <span className="font-mono text-[10px] tracking-[0.24em] text-slate-400 uppercase">
                DIRECT SECURE PORTAL
              </span>
              
              <h2
                className="font-display italic font-black uppercase text-3xl md:text-4xl leading-tight"
                style={{ color: 'var(--ivory-warm)' }}
              >
                Initiate a<br />
                <span style={{ color: 'var(--gold-ochre)' }}>Direct Dispatch.</span>
              </h2>

              {/* Massive Direct Email Link with Stamp Highlight */}
              <div 
                className="p-4 rounded border font-mono tracking-wider flex flex-col gap-1 text-center"
                style={{
                  background: 'rgba(214, 175, 55, 0.04)',
                  border: '1.5px solid var(--gold-ochre)',
                }}
              >
                <span className="text-[10px] text-stone-500 font-bold uppercase">
                  DIRECT EMAIL ASSET
                </span>
                <a
                  href="mailto:wafiqnawaz@outlook.com"
                  className="pointer-events-auto transition-opacity duration-300 font-bold text-lg md:text-xl text-[var(--ivory-warm)] hover:opacity-85"
                >
                  WAFIQNAWAZ@OUTLOOK.COM
                </a>
              </div>

              {/* Field Logistics notes */}
              <div
                className="font-sans italic text-slate-400 text-xs leading-relaxed"
                style={{
                  borderLeft: '3px solid var(--gold-ochre)',
                  paddingLeft: '14px',
                }}
              >
                "Active operative available for complete software diagnostics in 2026. Accepting internship roles locally at Bengaluru or remote assignments."
              </div>
            </div>

            {/* Social channels / Gateways */}
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div
                className="pb-2 text-[10px] tracking-[0.2em] uppercase border-b border-white/5 font-bold text-slate-400"
              >
                COMMUNICATION GATEWAYS
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'GATEWAY 01 // LINKEDIN', url: 'https://linkedin.com/in/wafiqnawaz' },
                  { label: 'GATEWAY 02 // GITHUB', url: 'https://github.com/ZaLuLu' },
                ].map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 pointer-events-auto transition-colors duration-300 text-slate-400 hover:text-[var(--gold-ochre)]"
                  >
                    <span>[+]</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Print directive button */}
            <div>
              <a
                href="/Wafiq_Nawaz_Resume.pdf"
                download
                className="btn-editorial-premium-red pointer-events-auto w-full text-center justify-center font-mono text-[11px]"
                style={{ border: '1px solid var(--gold-ochre)', color: 'var(--ivory-warm)', background: 'rgba(212, 175, 55, 0.04)' }}
              >
                <span>↓</span> DOWNLOAD DOSSIER PDF
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Transmission Console Terminal (Frosted Charcoal Glass Shell) */}
          <motion.div
            variants={animItemRight}
            className="flex-grow flex flex-col relative rounded-[4px] border overflow-hidden"
            style={{
              background: 'rgba(16, 18, 26, 0.7)',
              backdropFilter: 'blur(24px)',
              borderColor: 'rgba(212, 175, 55, 0.22)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(212, 175, 55, 0.01)'
            }}
          >
            {/* Terminal Top bar chrome */}
            <div 
              className="flex justify-between items-center px-4 py-2.5 border-b font-mono text-[10px] text-stone-500 font-bold"
              style={{
                borderColor: 'rgba(255,255,255,0.06)',
                background: 'rgba(22, 25, 34, 0.3)'
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--tactical-green)] animate-pulse" />
                <span>SECURE TRANSMISSION INTERFACE // PORT:5173</span>
              </div>
              <span className="text-[var(--gold-ochre)]">WN-DISPATCH_READY</span>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center flex-1 py-16 px-6 text-center font-mono"
              >
                <span
                  className="font-bold text-lg text-[var(--gold-ochre)] block mb-4 uppercase tracking-widest"
                >
                  [TRANSMISSION COMPLETED]
                </span>
                <p
                  className="text-stone-400 text-xs leading-relaxed max-w-[280px]"
                >
                  Log dispatched successfully into database array. Operative alerted. Disconnect secure gateway.
                </p>
              </motion.div>
            ) : status === 'submitting' ? (
              <div className="flex-1 flex flex-col justify-between p-6 font-mono text-[11px] text-stone-300">
                <div className="flex flex-col gap-2.5">
                  <span className="text-[var(--gold-ochre)] font-bold mb-3 block uppercase tracking-widest text-[12px]">
                    [INITIATING SECURE RELAY DIRECTIVE]
                  </span>
                  
                  {logs.map((log, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="leading-relaxed text-slate-400 font-semibold flex items-center gap-2"
                    >
                      <span className="text-[var(--tactical-green)] font-bold">[ ✓ ]</span>
                      {log}
                    </motion.div>
                  ))}

                  {/* Linear gold loader progress bar */}
                  <div className="mt-4 w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ left: '-100%' }}
                      animate={{ left: '100%' }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                      className="absolute top-0 bottom-0 w-1/3 bg-[var(--gold-ochre)]"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 mt-4">
                    <span className="text-[var(--gold-ochre)] font-bold uppercase tracking-wider text-[10px]">PACKET DISPATCHING ACTIVE</span>
                    <span className="animate-pulse text-[var(--gold-ochre)] font-black text-sm">█</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 mt-6 text-center text-[9px] text-stone-500 font-bold uppercase tracking-wider">
                  SECURE TRANSMISSION HANDSHAKE LOG // LEVEL 4 ACCESS
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between p-6 font-mono pointer-events-auto" autoComplete="off">
                <div className="flex flex-col gap-5">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[var(--gold-ochre)] font-bold uppercase tracking-widest">
                      SENDER DIRECTIVE IDENTIFICATION
                    </label>
                    <div className="flex items-center border-b border-white/5 py-1.5 focus-within:border-[var(--gold-ochre)] transition-colors">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        placeholder="Enter sender name / organization..."
                        required
                        autoComplete="new-password"
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="bg-transparent outline-none border-none text-[13px] text-white w-full tracking-wider font-serif placeholder:italic placeholder:text-stone-600"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[var(--gold-ochre)] font-bold uppercase tracking-widest">
                      ROUTING OUTBOX GATEWAY
                    </label>
                    <div className="flex items-center border-b border-white/5 py-1.5 focus-within:border-[var(--gold-ochre)] transition-colors">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        placeholder="Enter routing email gateway..."
                        required
                        autoComplete="new-password"
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="bg-transparent outline-none border-none text-[13px] text-white w-full tracking-wider font-serif placeholder:italic placeholder:text-stone-600"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-[var(--gold-ochre)] font-bold uppercase tracking-widest">
                      DISPATCH PAYLOAD BODY
                    </label>
                    <div className="border-b border-white/5 py-1.5 focus-within:border-[var(--gold-ochre)] transition-colors">
                      <textarea
                        name="message"
                        value={form.message}
                        required
                        placeholder="Describe transmission objective or project specs..."
                        maxLength={500}
                        autoComplete="off"
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="bg-transparent resize-none min-h-[90px] outline-none border-none text-[13px] text-white w-full tracking-wider leading-relaxed font-serif placeholder:italic placeholder:text-stone-600"
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-stone-500 font-bold mt-1">
                      <span className="text-[var(--restricted-red)]">
                        {status === 'error' && 'TRANSMISSION_FAILED // RETRY_DIRECTIVE'}
                      </span>
                      <span>
                        {form.message.length} / 500 CHARS
                      </span>
                    </div>
                  </div>

                </div>

                {/* Submit Transmission */}
                <div className="pt-6 border-t border-white/5 mt-6">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 border border-[var(--gold-ochre)] text-[var(--ivory-warm)] bg-transparent hover:bg-[var(--gold-ochre)] hover:text-stone-900 transition-all duration-300 font-mono tracking-[0.24em] text-[11px] rounded uppercase cursor-pointer flex items-center justify-center gap-2.5"
                  >
                    {status === 'submitting' ? (
                      <>DISPATCHING PACKETS...</>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--tactical-green)] animate-pulse" />
                        INITIATE TRANSMISSION
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Story Intercept Log */}
      <div className="w-full mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-slate-500 pointer-events-none text-left z-10 relative">
        [ENCRYPTION KEY VALIDATED // REF: WN-05]: Outbox proxy pathways initialized. Gateway active for secure client transmissions.
      </div>
    </motion.div>
  );
}
