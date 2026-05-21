import { useCallback, useRef, useState, useEffect } from 'react';

/**
 * useSound — Web Audio API synthesizer hook.
 *
 * All sound is generated procedurally (no audio files loaded).
 * The AudioContext is lazily initialized on the first user interaction
 * to comply with browser autoplay policies.
 */
const useSound = () => {
  const audioCtx    = useRef(null);
  const masterGain  = useRef(null);
  // Use a ref to track muted state in play callbacks to avoid stale closures.
  const isMutedRef  = useRef(false);
  const [isMuted, setIsMuted] = useState(false);

  // ── Lazy-init AudioContext on first user interaction ──────────────────────
  useEffect(() => {
    const initAudio = () => {
      if (!audioCtx.current) {
        audioCtx.current   = new (window.AudioContext || window.webkitAudioContext)();
        masterGain.current = audioCtx.current.createGain();
        masterGain.current.connect(audioCtx.current.destination);
        masterGain.current.gain.value = 0.3;
      }
      // Resume if suspended by the browser
      if (audioCtx.current.state === 'suspended') {
        audioCtx.current.resume();
      }
    };

    // { once: true } means the listener auto-removes itself after firing
    window.addEventListener('click',   initAudio, { once: true });
    window.addEventListener('keydown', initAudio, { once: true });

    return () => {
      // Cleanup for the rare case the component unmounts before any interaction
      window.removeEventListener('click',   initAudio);
      window.removeEventListener('keydown', initAudio);
    };
  }, []); // Run once on mount — no deps needed

  // ── Toggle mute ───────────────────────────────────────────────────────────
  const toggleMute = useCallback(() => {
    // Flip the ref first so play functions see the new value immediately
    isMutedRef.current = !isMutedRef.current;
    setIsMuted(isMutedRef.current);
    if (masterGain.current) {
      masterGain.current.gain.value = isMutedRef.current ? 0 : 0.3;
    }
  }, []); // Stable — reads from ref, not closure state

  // ── Helper: create a one-shot oscillator ──────────────────────────────────
  const createOscillator = useCallback((type, freqStart, freqEnd, gainStart, gainEnd, duration) => {
    if (!audioCtx.current || isMutedRef.current) return;

    const osc = audioCtx.current.createOscillator();
    const env = audioCtx.current.createGain();
    const now = audioCtx.current.currentTime;

    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, now);
    osc.frequency.exponentialRampToValueAtTime(freqEnd, now + duration);

    env.gain.setValueAtTime(gainStart, now);
    env.gain.exponentialRampToValueAtTime(gainEnd, now + duration);

    osc.connect(env);
    env.connect(masterGain.current);
    osc.start();
    osc.stop(now + duration);
  }, []);

  // ── Click sound (soft = menu nav, hard = action confirm) ─────────────────
  const playClick = useCallback((type = 'soft') => {
    if (type === 'soft') {
      createOscillator('sine',   800, 400,  0.1,  0.01, 0.05);
    } else {
      createOscillator('square', 150,  50,  0.05, 0.01, 0.1);
    }
  }, [createOscillator]);

  // ── Hover tick ────────────────────────────────────────────────────────────
  const playHover = useCallback(() => {
    createOscillator('sine', 1200, 1000, 0.02, 0.001, 0.02);
  }, [createOscillator]);

  // ── Typing blip (randomised pitch for variety) ────────────────────────────
  const playTyping = useCallback(() => {
    if (!audioCtx.current || isMutedRef.current) return;

    const osc = audioCtx.current.createOscillator();
    const env = audioCtx.current.createGain();
    const now = audioCtx.current.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400 + Math.random() * 200, now);
    env.gain.setValueAtTime(0.01, now);
    env.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    osc.connect(env);
    env.connect(masterGain.current);
    osc.start();
    osc.stop(now + 0.02);
  }, []);

  // ── Flashbang (section transition — white-noise pop + fading ring) ────────
  const playFlashbang = useCallback(() => {
    if (!audioCtx.current || isMutedRef.current) return;

    const now        = audioCtx.current.currentTime;
    const bufferSize = audioCtx.current.sampleRate * 0.1;
    const buffer     = audioCtx.current.createBuffer(1, bufferSize, audioCtx.current.sampleRate);
    const data       = buffer.getChannelData(0);

    // Fill with white noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise     = audioCtx.current.createBufferSource();
    const noiseGain = audioCtx.current.createGain();
    noise.buffer    = buffer;
    noiseGain.gain.setValueAtTime(0.1,   now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    noise.connect(noiseGain);
    noiseGain.connect(masterGain.current);
    noise.start();

    // Subtle fading ring tone after the pop
    createOscillator('sine', 3000, 3000, 0.05, 0.001, 0.5);
  }, [createOscillator]);

  return { playClick, playHover, playTyping, playFlashbang, toggleMute, isMuted };
};

export default useSound;
