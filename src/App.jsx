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
      {/* Custom cursor — hidden on touch devices via CSS */}
      <BrutalistCursor />

      {/* Mute button — repositioned for mobile */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-8 z-[110] flex gap-2">
        <button
          onClick={toggleMute}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center btn-brutalist text-base sm:text-lg"
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
      
        <div className={`w-full h-full p-[14px] sm:p-[20px] md:p-[24px] lg:p-[28px] overflow-y-auto ${isLoading ? 'hidden' : 'block'}`}>

          {currentScreen === 'home' && (
            <div className="flex flex-col min-h-screen items-center justify-center py-8 sm:py-12 w-full max-w-[600px] mx-auto relative z-20">
              <HeroHeader />
              <MenuNavigation onSelect={loadSection} />
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 sm:px-8 py-3 text-[12px] sm:text-[14px] font-mono btn-brutalist flex items-center gap-2"
                onMouseEnter={playHover}
                onClick={() => playClick('soft')}
                aria-label="View resume"
              >
                ↓ VIEW_RESUME
              </a>
            </div>
          )}
          
          {currentScreen === 'about' && (
            <div className="flex flex-col items-center justify-start gap-4 pb-8">
              <AboutSection />
              <button className="mt-4 sm:mt-8 px-6 py-3 text-[13px] sm:text-[14px] font-mono btn-brutalist" onClick={goHome} onMouseEnter={playHover}>◀ BACK [ ESC ]</button>
            </div>
          )}
          
          {currentScreen === 'skills' && (
            <div className="flex flex-col items-center justify-start gap-4 pb-8">
              <SkillsTerminal />
              <button className="mt-4 sm:mt-8 px-6 py-3 text-[13px] sm:text-[14px] font-mono btn-brutalist" onClick={goHome} onMouseEnter={playHover}>◀ BACK [ ESC ]</button>
            </div>
          )}
          
          {currentScreen === 'projects' && (
            <div className="flex flex-col items-center justify-start gap-4 pb-8">
              <ProjectsSection />
              <button className="mt-4 sm:mt-8 px-6 py-3 text-[13px] sm:text-[14px] font-mono btn-brutalist" onClick={goHome} onMouseEnter={playHover}>◀ BACK [ ESC ]</button>
            </div>
          )}
          
          {currentScreen === 'contact' && (
            <div className="flex flex-col items-center justify-start gap-4 pb-8">
              <ContactSection />
              <button className="mt-4 sm:mt-8 px-6 py-3 text-[13px] sm:text-[14px] font-mono btn-brutalist" onClick={goHome} onMouseEnter={playHover}>◀ BACK [ ESC ]</button>
            </div>
          )}
        </div>
      </WindowFrame>
    </>
  )
}

export default App
