import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for glass filter effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' } // Trigger when section occupies central viewport area
    );

    const sections = ['about', 'skills', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setMobileMenuOpen(false);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-350 select-none"
        style={
          scrolled
            ? {
                background: 'rgba(13, 12, 9, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '0.5px solid rgba(242, 237, 228, 0.08)',
                padding: '1rem 2rem',
              }
            : {
                background: 'transparent',
                padding: '1.5rem 2rem',
              }
        }
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-2xl tracking-widest text-[#F2EDE4] hover:text-[#C9A96E] transition-colors"
          >
            WAFIQ.
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <React.Fragment key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="font-mono text-[10.5px] tracking-[0.2em] font-semibold transition-colors duration-250 relative py-1"
                    style={{
                      color: isActive ? '#C9A96E' : 'rgba(242, 237, 228, 0.6)',
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute top-0 left-0 right-0 h-[1px] bg-[#C9A96E]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                  {idx < navItems.length - 1 && (
                    <span className="text-[#F2EDE4]/15 font-mono text-[9px]">·</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-6 h-6 z-50 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className="h-[1.5px] bg-[#F2EDE4] transition-all duration-300"
              style={{
                width: mobileMenuOpen ? '24px' : '20px',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              className="h-[1.5px] bg-[#F2EDE4] transition-all duration-300"
              style={{
                width: '16px',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="h-[1.5px] bg-[#F2EDE4] transition-all duration-300"
              style={{
                width: mobileMenuOpen ? '24px' : '24px',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#0D0C09]/98 z-40 flex flex-col justify-center items-center select-none"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="font-display text-4xl tracking-wider hover:text-[#C9A96E] transition-colors"
                    style={{
                      color: isActive ? '#C9A96E' : '#F2EDE4',
                    }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
