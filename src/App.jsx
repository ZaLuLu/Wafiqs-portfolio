import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Nav from './components/Nav';
import Cursor from './components/Cursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  // Global Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Easter egg logs
    console.log('%c Wafiq Nawaz ', 'background:#C9A96E;color:#0D0C0A;font-size:20px;font-weight:bold;padding:4px 12px;');
    console.log('%c Full-Stack Developer · Cybersecurity Student · Open to Work 2026 ', 'color:#F5F1EB;font-size:12px;font-family:monospace;');
    console.log('%c wafiqnawaz@outlook.com · github.com/ZaLuLu ', 'color:#C9A96E;font-size:11px;font-family:monospace;');

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0D0C09] text-[#F2EDE4] overflow-x-hidden selection:bg-[#C9A96E] selection:text-[#0D0C09]">
      <Cursor />
      {/* Dynamic Frosted Navigation bar */}
      <Nav />

      {/* Sequential Monograph Scroll sections */}
      <main className="w-full flex flex-col">
        {/* Section 01: Hero backdrop & parallax portrait */}
        <Hero />

        {/* Section 02: About Me polaroid & double-column bio */}
        <About />

        {/* Section 03: capabilities skills matrix & dotted leaders */}
        <Skills />

        {/* Section 04: project cases asymmetric row displays */}
        <Projects />

        {/* Section 05: contact transmission back panel */}
        <Contact />
      </main>
    </div>
  );
}
