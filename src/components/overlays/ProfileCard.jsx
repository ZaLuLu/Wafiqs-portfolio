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
        
        {/* Card Header Strip (Obsidian Background) */}
        <div className="pc-header select-none">
          <span className="pc-issue">DOSSIER FILE · {IDENTITY.serialNumber}</span>
          <button className="pc-close" onClick={onClose} aria-label="Close dossier">×</button>
        </div>

        {/* Identity Section (Technical Badge + Calligraphy Title) */}
        <div className="pc-identity">
          <div className="pc-badge-wrap select-none pointer-events-none">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 text-[#D1B48C] animate-pulse"
            >
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
            </svg>
            <span className="pc-badge-tag">SECURE ID: ZN-01</span>
          </div>
          
          <div className="pc-name-block select-none">
            <h2 className="pc-name">
              <span className="font-cookie text-6xl text-[#D1B48C] block -mb-2 font-normal leading-none pr-3">
                {IDENTITY.fullName.split(' ')[0]}
              </span>
              <span className="font-heading italic text-4xl text-[#1A1916] block ml-6 leading-none">
                {IDENTITY.fullName.split(' ')[1]}
              </span>
            </h2>
            <span className="pc-role font-semibold">{IDENTITY.role}</span>
          </div>
        </div>

        {/* Technical & Personal Grid Details */}
        <div className="pc-details bg-[#F5F1EB]">
          
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
            <ul className="pc-list grid grid-cols-2 gap-x-4 select-text">
              {ABOUT.equippedSkills.map((tool) => (
                <li key={tool} className="truncate border-b border-[#1A1916]/10 pb-1 pt-1 last:border-b-0">{tool}</li>
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
          <span className="pc-footer-text text-[#DC684A] font-bold">{IDENTITY.status}</span>
        </div>

      </motion.div>
    </motion.div>
  );
}
