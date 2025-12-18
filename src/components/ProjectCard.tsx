
import React from 'react';
import type { Project } from '../types/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative premium-card overflow-hidden">
      {/* Image Container with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span 
              key={tag} 
              className="text-[10px] uppercase tracking-wider font-semibold bg-indigo-500/10 text-indigo-300 px-3 py-1.5 rounded-lg border border-indigo-500/20 backdrop-blur-sm hover:bg-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 50}ms`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* CTA Link */}
        <a 
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm font-bold text-white hover:text-indigo-400 transition-all duration-300 group/link"
        >
          <span className="relative">
            View Project
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover/link:w-full transition-all duration-300" />
          </span>
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      
      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProjectCard;
