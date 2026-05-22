import { SOCIALS } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: '2.5rem clamp(1.25rem, 5vw, 5rem)',
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-line)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.4rem',
            color: 'var(--color-cream)', letterSpacing: '0.05em',
          }}>
            WN<span style={{ color: 'var(--color-accent)' }}>.</span>
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            letterSpacing: '0.15em', color: 'var(--color-muted)',
          }}>
            © {year} Wafiq Nawaz · Bengaluru, India
          </span>
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {SOCIALS.github && (
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-muted)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
            >
              GitHub ↗
            </a>
          )}
          <a
            href="mailto:wafiqnawaz@outlook.com"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--color-muted)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
          >
            Email ↗
          </a>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--color-muted)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
