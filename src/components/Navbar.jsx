import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#about',    label: 'About',    num: '01' },
  { href: '#projects', label: 'Work',     num: '02' },
  { href: '#skills',   label: 'Skills',   num: '03' },
  { href: '#contact',  label: 'Contact',  num: '04' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '1.25rem clamp(1.25rem, 5vw, 5rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(12,12,12,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #2A2A2A' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.75rem',
          color: '#F0EBE1',
          textDecoration: 'none',
          letterSpacing: '0.05em',
        }}
      >
        WN<span style={{ color: '#FF5C1A' }}>.</span>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#5A5A5A',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#F0EBE1'}
            onMouseLeave={e => e.currentTarget.style.color = '#5A5A5A'}
          >
            <span style={{ color: '#FF5C1A', marginRight: '0.4em' }}>{link.num}_</span>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Resume CTA */}
      <a
        href="/resume.html"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden-mobile"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#0C0C0C',
          background: '#FF5C1A',
          padding: '0.6rem 1.4rem',
          borderRadius: '2px',
          textDecoration: 'none',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#F0EBE1'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#FF5C1A'; e.currentTarget.style.transform = 'none'; }}
      >
        Resume ↗
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        className="show-mobile"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '22px',
            height: '1.5px',
            background: '#F0EBE1',
            transition: 'all 0.3s ease',
            transform: menuOpen
              ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
              : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)'
              : 'scaleX(0)'
              : 'none',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(12,12,12,0.97)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '3rem',
                color: '#F0EBE1',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              <span style={{ color: '#FF5C1A', fontSize: '1rem', fontFamily: "'JetBrains Mono', monospace", marginRight: '0.5em' }}>{link.num}</span>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#0C0C0C',
              background: '#FF5C1A',
              padding: '0.75rem 2rem',
              borderRadius: '2px',
              textDecoration: 'none',
              marginTop: '1rem',
            }}
          >
            Resume ↗
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
