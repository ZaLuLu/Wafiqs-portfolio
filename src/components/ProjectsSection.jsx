import React, { useState } from 'react';
import VaultCard from './VaultCard';
import { projectsData } from '../data/projects';

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex flex-col w-full max-w-[900px] mx-auto pt-6 animate-fade-in relative px-2 sm:px-0">

      {/* Section Header */}
      <div
        className="flex items-center gap-3 mb-5 px-4 py-2 w-fit transform -rotate-1"
        style={{ backgroundColor: '#F4FF1E', border: '3px solid #F0EDE4', boxShadow: '4px 4px 0px #FF1EC7' }}
      >
        <span className="font-display text-[22px] leading-none text-black">►</span>
        <h2 className="font-display text-[22px] sm:text-[26px] tracking-[4px] m-0 leading-none uppercase text-black">
          PROJECT ARCHIVE
        </h2>
      </div>

      <div
        className="font-mono text-[12px] font-bold px-3 py-1 w-fit mb-6 transform rotate-1"
        style={{ backgroundColor: '#161616', color: '#F4FF1E', border: '2px solid #F4FF1E' }}
      >
        {projectsData.length} RECORDS FOUND
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-up w-full"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <VaultCard
              project={project}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
