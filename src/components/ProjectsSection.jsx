import React, { useState } from 'react';
import VaultCard from './VaultCard';
import { projectsData } from '../data/projects';

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col w-full max-w-[900px] mx-auto pt-6 animate-fade-in relative">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-[24px] bg-black text-white px-4 py-2 w-fit transform -rotate-1 shadow-[4px_4px_0px_var(--accent-color)]">
        <div className="flex items-center gap-[10px]">
          <span className="font-display text-[26px] leading-none text-neon-blue" style={{ color: 'var(--accent-color)' }}>►</span>
          <h2 className="font-display text-[28px] tracking-[4px] m-0 leading-none uppercase">PROJECT ARCHIVE</h2>
        </div>
      </div>
      
      <div className="font-mono text-[14px] font-bold border-4 border-black px-3 py-1 w-fit shadow-[4px_4px_0px_var(--text-color)] mb-6 transform rotate-1 bg-white" style={{ borderColor: 'var(--text-color)', color: 'var(--text-color)' }}>
        {projectsData.length} RECORDS FOUND
      </div>

      {/* Projects Grid Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pb-8">
        {projectsData.map((project, index) => {
          return (
            <div 
              key={project.id}
              className="animate-fade-up w-full" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <VaultCard 
                project={project} 
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            </div>
          );
        })}
      </div>

      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 300ms ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-up {
          animation: fadeUp 400ms ease forwards;
          opacity: 0;
        }
      `}} />
    </div>
  );
};

export default ProjectsSection;
