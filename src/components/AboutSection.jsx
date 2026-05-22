export default function AboutSection() {
  return (
    <section id="about" style={{
      padding: 'clamp(5rem, 12vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span className="section-label-vertical">ABOUT</span>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-header">
          <span className="section-num">01.</span>
          <h2 className="section-title">ABOUT ME</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'start',
        }} className="about-grid">

          {/* Left: Text */}
          <div>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 700,
              color: 'var(--color-cream)',
              lineHeight: 1.4,
              marginBottom: '1.5rem',
            }}>
              Computer Science student at{' '}
              <span style={{ color: 'var(--color-accent)' }}>Svyasa University</span>,
              building at the intersection of full-stack web development,
              AI integration, and application security.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              fontWeight: 300, color: 'rgba(240,235,225,0.6)',
              lineHeight: 1.8, marginBottom: '1rem',
            }}>
              I approach every project with an engineering mindset — obsessing over
              performance, security, and user experience equally. Whether it's a
              React frontend, a FastAPI backend, or a security tool, I build things
              that work in production.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              fontWeight: 300, color: 'rgba(240,235,225,0.6)',
              lineHeight: 1.8, marginBottom: '2rem',
            }}>
              Currently based in Bengaluru, seeking Summer 2026 internship
              opportunities where I can contribute meaningfully from day one.
            </p>

            {/* Education block */}
            <div style={{
              padding: '1.25rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-line)',
              borderLeft: '3px solid var(--color-accent)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                EDUCATION
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.25rem' }}>
                B.E. Computer Science
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                Svyasa University · Bengaluru, India
              </div>
            </div>
          </div>

          {/* Right: Spec grid */}
          <div style={{ border: '1px solid var(--color-line)' }}>
            {[
              {
                label: 'STACK',
                items: ['React / Vite', 'Python / FastAPI', 'PostgreSQL / SQL', 'JWT Auth / Security'],
              },
              {
                label: 'FOCUS',
                items: ['Full-Stack Development', 'Application Security', 'AI Integration', 'REST API Design'],
              },
            ].map(({ label, items }, i) => (
              <div key={label} style={{
                padding: '1.5rem',
                borderBottom: '1px solid var(--color-line)',
                borderRight: i === 0 ? 'none' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                  letterSpacing: '0.25em', color: 'var(--color-accent)',
                  display: 'block', marginBottom: '1rem',
                }}>
                  {label}
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map(item => (
                    <li key={item} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                      color: 'rgba(240,235,225,0.7)',
                      padding: '0.35rem 0',
                      borderBottom: '1px solid var(--color-line)',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Status card */}
            <div style={{
              padding: '1.5rem',
              borderTop: '2px solid var(--color-accent)',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                letterSpacing: '0.25em', color: 'var(--color-accent)',
                display: 'block', marginBottom: '1rem',
              }}>
                STATUS
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#4ade80', display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#4ade80', letterSpacing: '0.1em' }}>
                  OPEN TO WORK
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>
                Available for internships &amp; freelance projects.
              </p>
              <a
                href="mailto:wafiqnawaz@outlook.com"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: 'var(--color-accent)', textDecoration: 'none',
                  transition: 'letter-spacing 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.letterSpacing = '0.1em'}
                onMouseLeave={e => e.currentTarget.style.letterSpacing = '0'}
              >
                wafiqnawaz@outlook.com →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
