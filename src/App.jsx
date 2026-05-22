import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  // Console easter egg
  useEffect(() => {
    console.log('%c Wafiq Nawaz ', 'background:#FF5C1A;color:#0C0C0C;font-size:20px;font-weight:bold;padding:4px 12px;')
    console.log('%c Full-Stack Developer · Cybersecurity Student · Open to Work 2026 ', 'color:#F0EBE1;font-size:12px;font-family:monospace;')
    console.log('%c wafiqnawaz@outlook.com · github.com/ZaLuLu ', 'color:#5A5A5A;font-size:11px;font-family:monospace;')
  }, [])

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
