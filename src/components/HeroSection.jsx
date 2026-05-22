import { useEffect, useRef } from 'react'
import { IDENTITY, SOCIALS } from '../data/portfolio'

const S = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'var(--color-bg)',
    padding: 'clamp(6rem, 12vw, 8rem) clamp(1.25rem, 5vw, 5rem) clamp(3rem, 6vw, 5rem)',
    position: 'relative',
    overflow: 'hidden',
    id: 'home',
  },
}

export default function HeroSection() {
  const nameRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nameRef.current) nameRef.current.classList.add('loaded')
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" style={S.section}>
      {/* Grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        opacity: 0.03,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(260px, 28vw, 340px) 1fr',
          gap: 'clamp(2.5rem, 6vw, 7rem)',
          alignItems: 'center',
        }} className="hero-grid">

          {/* ── LEFT: Identity Card ── */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-line)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {/* Card header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '0.65rem 1rem',
              borderBottom: '1px solid var(--color-line)',
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.15em', color: 'var(--color-muted)',
            }}>
              <span>WN.001</span>
              <span>BENGALURU / IN</span>
            </div>

            {/* Photo */}
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <img
                src="/profile.jpg"
                alt="Wafiq Nawaz"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  filter: 'grayscale(20%) contrast(1.1)',
                  transition: 'filter 0.5s ease',
                  display: 'block',
                }}
                onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) contrast(1.05)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(20%) contrast(1.1)'}
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  color: '#4ade80', letterSpacing: '0.1em',
                }}>
                  ● OPEN TO WORK
                </span>
              </div>
            </div>

            {/* Card footer */}
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'STATUS', val: 'SEEKING INTERNSHIP' },
                { label: 'YEAR',   val: '2026' },
              ].map(({ label, val }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em' }}>
                  <span style={{ color: 'var(--color-muted)', minWidth: '52px' }}>{label}</span>
                  <span style={{ color: 'var(--color-cream)' }}>{val}</span>
                </div>
              ))}

              {/* Barcode */}
              <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-line)' }}>
                <div style={{
                  height: '24px',
                  background: 'repeating-linear-gradient(90deg, var(--color-cream) 0px, var(--color-cream) 2px, transparent 2px, transparent 4px, var(--color-cream) 4px, var(--color-cream) 5px, transparent 5px, transparent 8px, var(--color-cream) 8px, var(--color-cream) 10px, transparent 10px, transparent 13px)',
                  opacity: 0.5,
                  marginBottom: '0.3rem',
                }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--color-muted)', letterSpacing: '0.2em' }}>
                  FULL-STACK · SECURITY · AI
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div style={{ position: 'relative' }} ref={nameRef}>
            {/* Ghost text */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: '-0.1em', right: '-0.05em',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(80px, 16vw, 200px)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(232,160,32,0.07)',
              lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
              zIndex: 0,
              letterSpacing: '-0.03em',
            }}>DEV</div>

            {/* Name */}
            <div style={{ position: 'relative', zIndex: 1, marginBottom: '1.25rem' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(48px, 9vw, 110px)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: 'var(--color-cream)',
                margin: 0,
              }}>
                <span style={{ display: 'block' }}>WAFIQ</span>
                <span style={{ display: 'block', position: 'relative' }}>
                  NAWAZ
                  <span style={{
                    position: 'absolute', bottom: '4px', left: 0,
                    width: '100%', height: '4px',
                    background: 'var(--color-accent)',
                    display: 'block',
                  }} />
                </span>
              </h1>
            </div>

            {/* Role */}
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--color-muted)', margin: '1.25rem 0 0.5rem',
              position: 'relative', zIndex: 1,
            }}>
              Full-Stack Developer
              <span style={{ color: 'var(--color-accent)', margin: '0 0.5em' }}>—</span>
              Cybersecurity Student
            </p>

            {/* Bio */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
              fontWeight: 300, lineHeight: 1.75,
              color: 'rgba(240,235,225,0.6)',
              maxWidth: '480px', margin: '1.25rem 0 1.75rem',
              position: 'relative', zIndex: 1,
            }}>
              Building secure, scalable web applications from Bengaluru.
              I work at the intersection of modern web development,
              AI integration, and application security.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              {['React', 'Python', 'FastAPI', 'AI/ML', 'Security'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
              <a href="#projects" className="btn-primary">View Projects ↘</a>
              <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download CV ↗</a>
            </div>

            {/* Meta bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap',
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.15em', color: 'var(--color-muted)',
              paddingTop: '1.5rem', borderTop: '1px solid var(--color-line)',
              position: 'relative', zIndex: 1,
            }}>
              <span>001/ENG</span>
              <span style={{ opacity: 0.3 }}>——</span>
              <span>CSE STUDENT · SVYASA UNIVERSITY</span>
              <span style={{ opacity: 0.3 }}>——</span>
              <span style={{ color: 'var(--color-accent)' }}>INTERNSHIP 2026</span>
              {SOCIALS.github && (
                <>
                  <span style={{ opacity: 0.3 }}>——</span>
                  <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-cream)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
                  >
                    github.com/ZaLuLu ↗
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:first-child {
            max-width: 280px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
