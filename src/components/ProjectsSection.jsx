import { useState } from 'react'
import { PROJECTS } from '../data/portfolio'

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" style={{
      padding: 'clamp(5rem, 12vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span className="section-label-vertical">WORK</span>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-header">
          <span className="section-num">02.</span>
          <h2 className="section-title">PROJECTS</h2>
        </div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PROJECTS.map((project, index) => {
            const isLive = project.url && !project.url.includes('github.com')
            const isHov = hovered === index

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(1.5rem, 4vw, 3rem)',
                  borderTop: '1px solid var(--color-line)',
                  padding: 'clamp(2rem, 5vw, 3.5rem) 0',
                  position: 'relative',
                  transition: 'background 0.3s',
                  background: isHov ? 'var(--color-surface)' : 'transparent',
                  cursor: 'default',
                }}
                className="project-row"
              >
                {/* Ghost number */}
                <div aria-hidden="true" style={{
                  position: 'absolute', top: '1.5rem', right: '1rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(50px, 8vw, 90px)',
                  color: 'transparent',
                  WebkitTextStroke: `1px ${isHov ? 'rgba(255,92,26,0.15)' : 'var(--color-line)'}`,
                  lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                  transition: 'all 0.3s',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Left: image placeholder / info */}
                <div style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-line)',
                  borderRadius: '2px',
                  aspectRatio: '16/10',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s',
                  borderColor: isHov ? 'var(--color-accent)' : 'var(--color-line)',
                }}>
                  {/* Background pattern */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,92,26,0.03) 20px, rgba(255,92,26,0.03) 21px)',
                    transition: 'opacity 0.3s',
                    opacity: isHov ? 1 : 0.5,
                  }} />

                  {/* Type badge */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        padding: '0.25rem 0.65rem',
                        background: 'var(--color-accent)', color: 'var(--color-bg)',
                        borderRadius: '2px',
                      }}>
                        {project.type.replace(' · LIVE', '')}
                      </span>
                      {isLive && (
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                          letterSpacing: '0.1em',
                          padding: '0.25rem 0.65rem',
                          border: '1px solid #4ade80', color: '#4ade80',
                          borderRadius: '2px',
                        }}>
                          ● LIVE
                        </span>
                      )}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                      color: 'var(--color-muted)', letterSpacing: '0.1em',
                    }}>
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Right: meta */}
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  paddingRight: 'clamp(0rem, 4vw, 3rem)',
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      letterSpacing: '0.2em', color: 'var(--color-accent)',
                      marginBottom: '0.75rem',
                    }}>
                      WK-00{project.id}
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                      fontWeight: 800,
                      color: 'var(--color-cream)',
                      lineHeight: 1.1,
                      marginBottom: '1rem',
                    }}>
                      {project.title}
                    </h3>

                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                      fontWeight: 300, color: 'rgba(240,235,225,0.6)',
                      lineHeight: 1.75, marginBottom: '1.5rem',
                    }}>
                      {project.desc}
                    </p>

                    {/* Stack tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                      {project.tech.split(',').map(t => (
                        <span key={t.trim()} className="stack-tag">{t.trim()}</span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: isLive ? 'var(--color-accent)' : 'var(--color-cream)',
                        textDecoration: 'none',
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        transition: 'color 0.2s',
                        borderBottom: `1px solid ${isLive ? 'var(--color-accent)' : 'var(--color-line)'}`,
                        paddingBottom: '2px',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = isLive ? 'var(--color-accent)' : 'var(--color-cream)'}
                    >
                      {isLive ? 'View Live ↗' : 'View on GitHub ↗'}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--color-line)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .project-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
