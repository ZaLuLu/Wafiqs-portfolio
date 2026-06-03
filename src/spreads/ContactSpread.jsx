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
      <div className="spread-header">
        <div className="flex items-baseline gap-4">
          <span className="spread-header-numeral">[ 05 ]</span>
          <div>
            <div className="spread-header-title">Secure Relay Terminal</div>
            <div className="spread-header-subtitle">Transmission Dispatch</div>
          </div>
        </div>
        <span className="spread-header-badge hidden sm:block">RESTRICTED // TRANSMISSION</span>
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
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', letterSpacing: '0.14em', color: 'var(--ivory-dim)', textTransform: 'uppercase', fontWeight: 600 }}>
                Direct Secure Portal
              </span>
              
              <h2
                className="font-display italic font-black uppercase leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ivory-warm)' }}
              >
                Initiate a<br />
                <span style={{ color: 'var(--gold-ochre)' }}>Direct Dispatch.</span>
              </h2>

              {/* Email link */}
              <div 
                className="p-4 rounded flex flex-col gap-2 text-center"
                style={{ background: 'rgba(212,181,106,0.05)', border: '1.5px solid var(--gold-ochre-vivid)' }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ivory-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em' }}>
                  Direct Email
                </span>
                <a
                  href="mailto:wafiqnawaz@outlook.com"
                  className="pointer-events-auto transition-opacity duration-300 hover:opacity-80"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--ivory-warm)', letterSpacing: '0.04em' }}
                >
                  wafiqnawaz@outlook.com
                </a>
              </div>

              {/* Field note */}
              <div style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: 'var(--ivory-dim)', fontSize: 'var(--text-base)', lineHeight: 1.6, borderLeft: '3px solid var(--gold-ochre-vivid)', paddingLeft: '14px' }}>
                "Available for 2026 internship roles — Bengaluru or remote."
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ivory-dim)', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                Communication Gateways
              </div>
              {[
                { label: 'LinkedIn', sub: 'wafiqnawaz', url: 'https://linkedin.com/in/wafiqnawaz' },
                { label: 'GitHub', sub: 'ZaLuLu', url: 'https://github.com/ZaLuLu' },
              ].map(link => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 pointer-events-auto transition-colors duration-300 group"
                  style={{ color: 'var(--ivory-dim)' }}
                >
                  <span style={{ color: 'var(--gold-ochre-vivid)', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-base)' }}>[+]</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--ivory-warm)' }} className="group-hover:text-[var(--gold-ochre-vivid)] transition-colors">{link.label}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--ivory-dim)' }}>{link.sub}</div>
                  </div>
                </a>
              ))}
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
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center flex-1 py-16 px-6 text-center"
              >
                {/* Animated checkmark */}
                <div className="mb-6" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(94,102,84,0.15)', border: '2px solid var(--archive-olive)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--archive-olive)" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--gold-ochre-vivid)', display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Transmission Complete
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--ivory-dim)', lineHeight: 1.6, maxWidth: '280px' }}>
                  Message dispatched successfully. Operative alerted.
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
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between p-6 pointer-events-auto" autoComplete="off">
                <div className="flex flex-col gap-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--gold-ochre-vivid)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em' }}>
                      Your Name
                    </label>
                    <div className="flex items-center border-b border-white/[0.08] py-2 focus-within:border-[var(--gold-ochre-vivid)] transition-all duration-300" style={{ boxShadow: 'none' }}>
                      <input
                        type="text" name="name" value={form.name}
                        placeholder="Name or organization..."
                        required autoComplete="new-password"
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', background: 'transparent', outline: 'none', border: 'none', color: 'var(--ivory-warm)', width: '100%' }}
                        className="placeholder:text-slate-600 placeholder:italic"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--gold-ochre-vivid)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em' }}>
                      Email Address
                    </label>
                    <div className="flex items-center border-b border-white/[0.08] py-2 focus-within:border-[var(--gold-ochre-vivid)] transition-colors duration-300">
                      <input
                        type="email" name="email" value={form.email}
                        placeholder="your@email.com"
                        required autoComplete="new-password"
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', background: 'transparent', outline: 'none', border: 'none', color: 'var(--ivory-warm)', width: '100%' }}
                        className="placeholder:text-slate-600 placeholder:italic"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--gold-ochre-vivid)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em' }}>
                      Message
                    </label>
                    <div className="border-b border-white/[0.08] py-2 focus-within:border-[var(--gold-ochre-vivid)] transition-colors duration-300">
                      <textarea
                        name="message" value={form.message} required
                        placeholder="Describe your project or inquiry..."
                        maxLength={500} autoComplete="off"
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', background: 'transparent', resize: 'none', minHeight: '90px', outline: 'none', border: 'none', color: 'var(--ivory-warm)', width: '100%', lineHeight: 1.65 }}
                        className="placeholder:text-slate-600 placeholder:italic"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      {status === 'error' ? (
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--restricted-red-vivid)', fontWeight: 700 }}>⚠ Transmission failed — please retry.</span>
                      ) : <span />}
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ivory-dim)' }}>{form.message.length} / 500</span>
                    </div>
                  </div>

                </div>

                {/* Submit */}
                <div className="pt-5 border-t border-white/[0.06] mt-5">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 rounded uppercase cursor-pointer flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold-ochre-vivid)] focus-visible:outline-offset-2"
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 700,
                      letterSpacing: '0.14em', border: '1px solid var(--gold-ochre-vivid)',
                      color: 'var(--ivory-warm)', background: 'transparent',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-ochre-vivid)'; e.currentTarget.style.color = '#1c1c1d'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ivory-warm)'; }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Dispatching...
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-[var(--archive-olive)] animate-pulse" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

    </motion.div>
  );
}
