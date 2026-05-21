import CharacterCard from './CharacterCard';
import { ABOUT } from '../data/portfolio';

/**
 * AboutSection — the "Player 1 Info" dossier section.
 *
 * Content is driven entirely by src/data/portfolio.js — see ABOUT export.
 *
 * Contains:
 *  - CharacterCard (the ID badge — its own data also comes from portfolio.js)
 *  - Player Dossier Grid: bio, alias origin, current quests, equipped skills, passive traits
 */
const AboutSection = () => {
  return (
    <div className="flex flex-col w-full max-w-[900px] mx-auto pt-6 animate-fade-in relative z-20 mb-12">
      
      {/* Section Header */}
      <div className="flex items-center gap-[10px] mb-[24px] bg-black text-white px-4 py-2 w-fit transform -rotate-1 shadow-[4px_4px_0px_var(--secondary-color)]">
        <span className="font-display text-[26px] leading-none text-neon-pink" style={{ color: 'var(--secondary-color)' }}>►</span>
        <h2 className="font-display text-[28px] tracking-[4px] m-0 leading-none uppercase">PLAYER 1 INFO</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-[400px] relative">
        <div className="flex-1 w-full flex justify-center">
          <CharacterCard />
        </div>
      </div>


      {/* --- PLAYER DOSSIER GRID --- */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Bio - SOLID NEON BLUE */}
        <div className="bg-neon-blue border-4 border-black p-6 relative overflow-hidden shadow-[8px_8px_0px_#000] transform transition-transform hover:-translate-y-1" style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--text-color)', borderColor: 'var(--text-color)' }}>
          <h3 className="font-display text-[28px] mb-4 flex items-center gap-2 border-b-4 border-black pb-2 uppercase font-bold" style={{ borderColor: 'var(--text-color)' }}>
            <span className="animate-pulse">●</span> DOSSIER: ORIGIN
          </h3>
          <p className="font-mono text-[16px] font-bold leading-[1.8]">
            {ABOUT.bio}
          </p>
        </div>

        {/* Alias Origin - SOLID NEON PINK */}
        <div className="bg-neon-pink border-4 border-black p-6 relative overflow-hidden shadow-[8px_8px_0px_#000] transform transition-transform hover:-translate-y-1" style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--text-color)', borderColor: 'var(--text-color)' }}>
          <div className="absolute top-0 right-0 p-2 opacity-20">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm0 3.5l7.5 15h-15L12 5.5z"/>
            </svg>
          </div>
          <h3 className="font-display text-[24px] mb-4 border-b-4 border-black pb-2 uppercase font-bold relative z-10" style={{ borderColor: 'var(--text-color)' }}>DECRYPT: ALIAS</h3>
          <p className="font-mono text-[15px] font-bold leading-[1.6] relative z-10">
            {ABOUT.aliasOrigin}
          </p>
        </div>

        {/* Current Quest - SOLID NEON YELLOW */}
        <div className="bg-neon-yellow border-4 border-black p-6 relative overflow-hidden shadow-[8px_8px_0px_#000] hover:-translate-y-1 transition-transform duration-300">
          <h3 className="font-display text-[24px] text-black mb-4 border-b-4 border-black pb-2 uppercase font-bold">CURRENT QUEST</h3>
          <ul className="font-mono text-[15px] text-black font-bold space-y-3 relative z-10">
            {ABOUT.currentQuests.map((quest, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-black mt-[2px] text-[18px]">►</span>
                <span className="leading-tight">{quest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Loadout & Passives - SOLID WHITE */}
        <div className="md:col-span-2 bg-white border-4 border-black p-6 relative flex flex-col sm:flex-row gap-8 shadow-[8px_8px_0px_#000] transform transition-transform hover:-translate-y-1">
          <div className="flex-1">
            <h3 className="font-display text-[24px] text-black mb-4 border-b-4 border-black pb-2 font-bold">EQUIPPED SKILLS</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {ABOUT.equippedSkills.map(skill => (
                <span key={skill} className="font-mono text-[14px] font-bold bg-white text-black px-3 py-1 border-2 border-black hover:bg-neon-blue transition-colors cursor-default shadow-[2px_2px_0px_#000]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-display text-[24px] text-black mb-4 border-b-4 border-black pb-2 font-bold">PASSIVE TRAITS</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {ABOUT.passiveTraits.map(trait => (
                <span key={trait} className="font-mono text-[14px] font-bold bg-white text-black px-3 py-1 border-2 border-black hover:bg-neon-pink transition-colors cursor-default shadow-[2px_2px_0px_#000]">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
