import { useState } from 'react'
import { SOCIALS } from '../data/portfolio'

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'wafiqnawaz@outlook.com',
    href: 'mailto:wafiqnawaz@outlook.com',
    action: 'copy',
    num: '01',
  },
  {
    label: 'GitHub',
    value: 'github.com/ZaLuLu',
    href: SOCIALS.github,
    action: 'link',
    num: '02',
  },
  {
    label: 'Resume',
    value: 'View / Download PDF',
    href: '/resume.html',
    action: 'link',
    num: '03',
  },
]

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" style={{
      padding: 'clamp(5rem, 12vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span className="section-label-vertical">CONTACT</span>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-header">
          <span className="section-num">04.</span>
          <h2 className="section-title">CONTACT</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2.5rem, 6vw, 6rem)',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Left: CTA text */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: 'var(--color-cream)',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}>
              Let's Build Something Together
            </h3>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              fontWeight: 300, color: 'rgba(240,235,225,0.6)',
              lineHeight: 1.8, marginBottom: '2rem',
            }}>
              I'm currently looking for Summer 2026 internship opportunities.
              Whether you have a project in mind or just want to talk tech,
              I'd love to hear from you.
            </p>

            {/* Status */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '1rem 1.25rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-line)',
              borderLeft: '3px solid #4ade80',
              marginBottom: '2rem',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#4ade80', flexShrink: 0,
                animation: 'pulse 2s infinite',
              }} />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#4ade80', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                  AVAILABLE FOR WORK
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                  Open to internships, freelance, and collaborations
                </div>
              </div>
            </div>

            <a href="mailto:wafiqnawaz@outlook.com" className="btn-primary">
              Send a Message ↗
            </a>
          </div>

          {/* Right: Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {CONTACT_ITEMS.map((item, idx) => (
              <div
                key={item.num}
                onClick={() => {
                  if (item.action === 'copy') handleCopy(item.value)
                  else window.open(item.href, '_blank', 'noopener,noreferrer')
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                  padding: '1.5rem',
                  borderBottom: idx < CONTACT_ITEMS.length - 1 ? '1px solid var(--color-line)' : 'none',
                  border: '1px solid var(--color-line)',
                  borderTop: idx === 0 ? '1px solid var(--color-line)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: 'var(--color-surface)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--color-surface-2)'
                  e.currentTarget.style.borderLeftColor = 'var(--color-accent)'
                  e.currentTarget.style.borderLeftWidth = '3px'
                  e.currentTarget.style.paddingLeft = 'calc(1.5rem - 2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--color-surface)'
                  e.currentTarget.style.borderLeftColor = 'var(--color-line)'
                  e.currentTarget.style.borderLeftWidth = '1px'
                  e.currentTarget.style.paddingLeft = '1.5rem'
                }}
                role="button"
                tabIndex={0}
                aria-label={`${item.label}: ${item.value}`}
                onKeyDown={e => { if (e.key === 'Enter') e.currentTarget.click() }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                  color: 'var(--color-accent)', letterSpacing: '0.1em',
                  minWidth: '28px',
                }}>
                  {item.num}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                    letterSpacing: '0.15em', color: 'var(--color-muted)',
                    textTransform: 'uppercase', marginBottom: '0.3rem',
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontSize: '1rem',
                    fontWeight: 700, color: 'var(--color-cream)',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {item.action === 'copy' && copied ? '✓ Copied!' : item.value}
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                  {item.action === 'copy' ? '⎘' : '↗'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
