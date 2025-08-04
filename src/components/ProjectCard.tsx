// components/ProjectCard.tsx

import SkillTag from './SkillTag';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#654ea3]/0 via-[#eaafc8]/0 to-[#eaafc8]/0
          group-hover:from-[#654ea3]/30 group-hover:via-[#eaafc8]/20 group-hover:to-[#eaafc8]/30
          transition-all duration-500
          rounded-2xl
        "
      ></div>
      
      {/* Animated border effect */}
      <div
        className="
          absolute inset-0 rounded-2xl
          bg-gradient-to-r
          from-[#654ea3]/0 via-[#eaafc8]/0 to-[#eaafc8]/0
          group-hover:from-[#654ea3]/20 group-hover:via-[#eaafc8]/20 group-hover:to-[#eaafc8]/20
          transition-all duration-500
          opacity-0 group-hover:opacity-100
        "
      ></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed flex-grow mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag, index) => (
            <div 
              key={tag}
              className="transform group-hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <SkillTag tag={tag} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Hover indicator */}
      <div
        className="
          absolute top-4 right-4 w-2 h-2
          bg-gradient-to-r from-[#654ea3] to-[#eaafc8]
          rounded-full
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          transform scale-0 group-hover:scale-100
        "
      ></div>
    </div>
  );
};

export default ProjectCard;
