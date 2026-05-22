import CharacterCard from './CharacterCard';
import { ABOUT } from '../data/portfolio';

const AboutSection = () => {
  return (
    <div className="flex flex-col w-full max-w-[900px] mx-auto pt-6 animate-fade-in relative z-20 mb-12 px-2 sm:px-0">

      {/* Section Header */}
      <div
        className="flex items-center gap-3 mb-6 px-4 py-2 w-fit transform -rotate-1"
        style={{ backgroundColor: '#F4FF1E', border: '3px solid #F0EDE4', boxShadow: '4px 4px 0px #FF1EC7' }}
      >
        <span className="font-display text-[24px] leading-none text-black">►</span>
        <h2 className="font-display text-[24px] sm:text-[28px] tracking-[4px] m-0 leading-none uppercase text-black">ABOUT ME</h2>
      </div>

      {/* Character Card */}
      <div className="w-full flex justify-center">
        <CharacterCard />
      </div>

      {/* Dossier Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Bio */}
        <div
          className="p-5 relative overflow-hidden transition-transform hover:-translate-y-1"
          style={{ backgroundColor: '#161616', border: '3px solid #F0EDE4', boxShadow: '6px 6px 0px #FF1EC7' }}
        >
          <h3 className="font-display text-[22px] mb-3 flex items-center gap-2 pb-2 uppercase font-bold" style={{ color: '#F4FF1E', borderBottom: '2px solid #333' }}>
            <span className="animate-pulse">●</span> ORIGIN
          </h3>
          <p className="font-mono text-[13px] sm:text-[14px] font-bold leading-[1.8]" style={{ color: '#F0EDE4' }}>
            {ABOUT.bio}
          </p>
        </div>

        {/* Alias */}
        <div
          className="p-5 relative overflow-hidden transition-transform hover:-translate-y-1"
          style={{ backgroundColor: '#161616', border: '3px solid #FF1EC7', boxShadow: '6px 6px 0px #FF1EC7' }}
        >
          <h3 className="font-display text-[22px] mb-3 pb-2 uppercase font-bold" style={{ color: '#FF1EC7', borderBottom: '2px solid #333' }}>
            ALIAS: ZALULU
          </h3>
          <p className="font-mono text-[13px] sm:text-[14px] font-bold leading-[1.6]" style={{ color: '#F0EDE4' }}>
            {ABOUT.aliasOrigin}
          </p>
        </div>

        {/* Current Quest */}
        <div
          className="p-5 relative overflow-hidden transition-transform hover:-translate-y-1"
          style={{ backgroundColor: '#F4FF1E', border: '3px solid #F0EDE4', boxShadow: '6px 6px 0px #F0EDE4' }}
        >
          <h3 className="font-display text-[22px] text-black mb-3 pb-2 uppercase font-bold" style={{ borderBottom: '2px solid #000' }}>
            CURRENT QUEST
          </h3>
          <ul className="font-mono text-[13px] text-black font-bold space-y-3">
            {ABOUT.currentQuests.map((quest, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-black mt-[2px] text-[16px] shrink-0">►</span>
                <span className="leading-tight">{quest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills + Traits */}
        <div
          className="md:col-span-3 p-5 flex flex-col sm:flex-row gap-8 transition-transform hover:-translate-y-1"
          style={{ backgroundColor: '#161616', border: '3px solid #F0EDE4', boxShadow: '6px 6px 0px #F4FF1E' }}
        >
          <div className="flex-1">
            <h3 className="font-display text-[20px] mb-3 pb-2 font-bold uppercase" style={{ color: '#F4FF1E', borderBottom: '2px solid #333' }}>
              EQUIPPED SKILLS
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {ABOUT.equippedSkills.map(skill => (
                <span
                  key={skill}
                  className="font-mono text-[12px] font-bold px-3 py-1 transition-all cursor-default"
                  style={{ backgroundColor: '#1a1a1a', color: '#F0EDE4', border: '2px solid #333' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#F4FF1E'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = '#F4FF1E'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#F0EDE4'; e.currentTarget.style.borderColor = '#333'; }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-display text-[20px] mb-3 pb-2 font-bold uppercase" style={{ color: '#FF1EC7', borderBottom: '2px solid #333' }}>
              PASSIVE TRAITS
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {ABOUT.passiveTraits.map(trait => (
                <span
                  key={trait}
                  className="font-mono text-[12px] font-bold px-3 py-1 transition-all cursor-default"
                  style={{ backgroundColor: '#1a1a1a', color: '#F0EDE4', border: '2px solid #333' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#FF1EC7'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = '#FF1EC7'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#F0EDE4'; e.currentTarget.style.borderColor = '#333'; }}
                >
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
