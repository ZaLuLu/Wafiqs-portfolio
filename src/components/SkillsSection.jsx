import { useEffect, useRef, useState } from 'react'
import { SKILL_CATEGORIES } from '../data/portfolio'

function SkillBar({ label, percentage, color, delay }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(percentage), delay) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [percentage, delay])

  return (
    <div ref={ref} style={{ marginBottom: '1.25rem' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '0.5rem',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--color-cream)' }}>
          {label}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: color }}>
          {percentage}%
        </span>
      </div>
      <div style={{
        height: '3px', background: 'var(--color-line)',
        borderRadius: '0', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${width}%`,
          background: color,
          transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
          borderRadius: '0',
        }} />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const categories = Object.values(SKILL_CATEGORIES)

  return (
    <section id="skills" style={{
      padding: 'clamp(5rem, 12vw, 9rem) clamp(1.25rem, 5vw, 5rem)',
      background: 'var(--color-surface)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <span className="section-label-vertical">SKILLS</span>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-header">
          <span className="section-num">03.</span>
          <h2 className="section-title">SKILLS</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          border: '1px solid var(--color-line)',
        }} className="skills-grid">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.name}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                borderRight: catIdx < categories.length - 1 ? '1px solid var(--color-line)' : 'none',
              }}
            >
              {/* Category header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                marginBottom: '2rem', paddingBottom: '1rem',
                borderBottom: `2px solid ${cat.color}`,
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  color: 'var(--color-cream)',
                  letterSpacing: '0.05em',
                  margin: 0,
                }}>
                  {cat.name}
                </h3>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.label}
                  label={skill.label}
                  percentage={skill.percentage}
                  color={cat.color}
                  delay={catIdx * 100 + i * 80}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'var(--color-bg)',
          border: '1px solid var(--color-line)',
          display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--color-accent)', marginRight: '0.5rem' }}>
            ALSO FAMILIAR WITH
          </span>
          {['Git / GitHub', 'Linux / CLI', 'Docker', 'Sentry', 'Vercel', 'JWT Auth', 'REST APIs', 'Responsive Design'].map(t => (
            <span key={t} className="stack-tag">{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-grid > div { border-right: none !important; border-bottom: 1px solid var(--color-line); }
          .skills-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
