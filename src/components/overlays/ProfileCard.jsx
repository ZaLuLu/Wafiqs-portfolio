import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PullQuote from '../ui/PullQuote';
import { IDENTITY, ABOUT } from '../../data/portfolio';

export default function ProfileCard({ onClose }) {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="profile-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Card Header Strip (Forest Green Background) */}
        <div className="pc-header select-none">
          <span className="pc-issue">DOSSIER FILE · {IDENTITY.serialNumber}</span>
          <button className="pc-close" onClick={onClose} aria-label="Close dossier">×</button>
        </div>

        {/* Identity Section (Portrait + Calligraphy Title) */}
        <div className="pc-identity">
          <img
            src="/profile.jpg"
            alt={IDENTITY.fullName}
            className="pc-portrait select-none pointer-events-none"
          />
          <div className="pc-name-block select-none">
            <h2 className="pc-name">
              <span className="font-cookie text-6xl text-[#E8A020] block -mb-2 font-normal leading-none pr-3">
                {IDENTITY.fullName.split(' ')[0]}
              </span>
              <span className="font-heading italic text-4xl text-[#0F2318] block ml-6 leading-none">
                {IDENTITY.fullName.split(' ')[1]}
              </span>
            </h2>
            <span className="pc-role font-semibold">{IDENTITY.role}</span>
          </div>
        </div>

        {/* Technical & Personal Grid Details */}
        <div className="pc-details bg-[#FDFCFB]">
          
          {/* Col 1: Bio */}
          <div className="pc-col">
            <span className="pc-section-label select-none">PROFILE</span>
            <p className="pc-bio">
              {ABOUT.bio}
            </p>
          </div>

          {/* Col 2: Interests */}
          <div className="pc-col">
            <span className="pc-section-label select-none">INTERESTS</span>
            <ul className="pc-list">
              {ABOUT.passiveTraits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tools */}
          <div className="pc-col">
            <span className="pc-section-label select-none">EQUIPPED TOOLS</span>
            <ul className="pc-list">
              {ABOUT.equippedSkills.slice(0, 5).map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Philosophy Pull Quote Block */}
        <div className="pc-philosophy select-none">
          <PullQuote>
            "Discipline and persistent iteration always outperform ad-hoc intelligence."
          </PullQuote>
        </div>

        {/* Card Footer Bar */}
        <div className="pc-footer select-none">
          <span className="pc-footer-text">{IDENTITY.location}</span>
          <span className="pc-footer-text text-rose-500 font-bold">{IDENTITY.status}</span>
        </div>

      </motion.div>
    </motion.div>
  );
}
