import { useState, useEffect } from 'react'
import WindowFrame from './components/WindowFrame'
import LoadingOverlay from './components/LoadingOverlay'
import HeroHeader from './components/HeroHeader'
import MenuNavigation from './components/MenuNavigation'
import AboutSection from './components/AboutSection'
import SkillsTerminal from './components/SkillsTerminal'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import BrutalistCursor from './components/BrutalistCursor'
import { useSound } from './context/SoundContext'

function App() {
  const { playClick, playHover, toggleMute, isMuted } = useSound();
  const [currentScreen, setCurrentScreen] = useState('home');

  const [isLoading, setIsLoading] = useState(false);
  const [loadingSection, setLoadingSection] = useState('home');


  // Console Easter Egg — greet anyone who opens DevTools
  useEffect(() => {
    console.log(`
███████╗ █████╗ ██╗     ██╗   ██╗██╗     ██╗   ██╗
╚══███╔╝██╔══██╗██║     ██║   ██║██║     ██║   ██║
  ███╔╝ ███████║██║     ██║   ██║██║     ██║   ██║
 ███╔╝  ██╔══██║██║     ██║   ██║██║     ██║   ██║
███████╗██║  ██║███████╗╚██████╔╝███████╗╚██████╔╝
╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝ 
    `);
    console.log("%c SYSTEM V2 ONLINE ", "background: #000; color: #ccff00; font-size: 24px; font-weight: bold; padding: 4px; border: 4px solid #ccff00;");
    console.log("%c[!] WARNING: YOU ARE BEING WATCHED.", "color: #ff00ff; font-weight: bold; font-family: monospace; font-size: 14px;");
    console.log("%c Open to work — wafiqnawaz@outlook.com | github.com/ZaLuLu", "color: #F4FF1E; background: #000; font-size: 13px; padding: 4px 8px; font-family: monospace;");
  }, []);

  // Global keydown listener for ESC key
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Escape' && currentScreen !== 'home' && !isLoading) {
        goHome();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [currentScreen, isLoading]);

  // Handle section changes with loading animation
  const loadSection = (sectionName) => {
    if (sectionName === currentScreen) return;
    playClick('hard');
    setLoadingSection(sectionName);
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setCurrentScreen(loadingSection);
  };

  const goHome = () => {
    playClick('soft');
    loadSection('home');
  };

  return (
    <>
      <BrutalistCursor />
      <div className="fixed top-6 right-8 z-[110] flex gap-2">
        <button
          onClick={toggleMute}
          className="w-10 h-10 flex items-center justify-center btn-brutalist text-lg"
          aria-label={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
          onMouseEnter={playHover}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>
      <WindowFrame>

        {isLoading && (
        <LoadingOverlay 
          section={loadingSection} 
          onComplete={handleLoadingComplete} 
        />
      )}
      
      <div className={`w-full h-full p-[18px] md:p-[24px] lg:p-[28px] overflow-y-auto ${isLoading ? 'hidden' : 'block'}`}>
        {/* Screens */}
        {currentScreen === 'home' && (
          <div className="flex flex-col h-full items-center justify-center py-12 w-full max-w-[800px] mx-auto relative z-20">
            <HeroHeader />
            <MenuNavigation onSelect={loadSection} />
            {/* Resume download */}
            <a
              href="/resume.pdf"
              download="Wafiq_Nawaz_Resume.pdf"
              className="mt-6 px-8 py-3 text-[14px] font-mono btn-brutalist flex items-center gap-2"
              onMouseEnter={playHover}
              onClick={() => playClick('soft')}
              aria-label="Download resume PDF"
            >
              ↓ DOWNLOAD_RESUME.PDF
            </a>
          </div>
        )}
        
        {currentScreen === 'about' && (
          <div className="flex flex-col h-full items-center justify-start gap-4">
            <AboutSection />
            <button className="mt-8 px-6 py-3 text-[14px] font-mono btn-brutalist" onClick={goHome} onMouseEnter={playHover}>◀ BACK TO MENU [ ESC ]</button>
          </div>
        )}
        
        {currentScreen === 'skills' && (
          <div className="flex flex-col h-full items-center justify-start gap-4">
            <SkillsTerminal />
            <button className="mt-8 px-6 py-3 text-[14px] font-mono btn-brutalist" onClick={goHome} onMouseEnter={playHover}>◀ BACK TO MENU [ ESC ]</button>
          </div>
        )}
        
        {currentScreen === 'projects' && (
          <div className="flex flex-col h-full items-center justify-start gap-4">
            <ProjectsSection />
            <button className="mt-8 px-6 py-3 text-[14px] font-mono btn-brutalist" onClick={goHome} onMouseEnter={playHover}>◀ BACK TO MENU [ ESC ]</button>
          </div>
        )}
        
        {currentScreen === 'contact' && (
          <div className="flex flex-col h-full items-center justify-start gap-4">
            <ContactSection />
            <button className="mt-8 px-6 py-3 text-[14px] font-mono btn-brutalist" onClick={goHome} onMouseEnter={playHover}>◀ BACK TO MENU [ ESC ]</button>
          </div>
        )}
      </div>
    </WindowFrame>
    </>
  )
}

export default App
