// src/components/ExperienceSection.tsx
import { experience } from '@/lib/experience';

export default function ExperienceSection() {
  return (
    <section className="mb-32">
      {/* Section Title */}
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          <span className="bg-gradient-to-r from-[#654ea3] to-[#eaafc8] bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#654ea3] to-[#eaafc8] rounded-full" />
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical timeline line - positioned absolutely and extends full height */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#654ea3]/30 via-[#eaafc8]/20 to-transparent"></div>

        <div className="space-y-12">
          {experience.map((entry, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker - diamond shape with subtle glow effect */}
<div className="absolute left-6 md:left-8 top-8 w-4 h-4 
    bg-gradient-to-br from-[#654ea3] to-[#eaafc8] 
    transform -translate-x-[45%] rotate-45 
    shadow-lg z-20 
    group-hover:shadow-[0_0_20px_rgba(101,78,163,0.4)] 
    transition-all duration-300 
    ring-2 ring-white">
</div>
              {/* Experience Card with proper spacing */}
              <div className="ml-16 md:ml-20 relative">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#654ea3]/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#654ea3]/3 to-[#eaafc8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    {/* Header section with better alignment */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#654ea3] transition-colors duration-300">
                          {entry.title}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium mb-3">
                          {entry.company}
                        </p>
                      </div>
                      
                      {/* Date badge with improved styling */}
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#654ea3]/8 to-[#eaafc8]/8 text-[#654ea3] text-sm font-semibold rounded-full border border-[#654ea3]/15 shrink-0">
                        {entry.date}
                      </div>
                    </div>

                    {/* Description with better typography */}
                    <p className="text-gray-700 leading-relaxed text-base mb-8 max-w-4xl">
                      {entry.description}
                    </p>

                    {/* Achievements section with improved styling */}
                    {entry.achievements && entry.achievements.length > 0 && (
                      <div className="mb-8 p-6 bg-gray-50/80 rounded-xl border-l-4 border-[#654ea3]">
                        <h4 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {entry.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700 leading-relaxed">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#654ea3] to-[#eaafc8] mt-2 mr-4 flex-shrink-0 shadow-sm"></div>
                              <span className="flex-1">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technology tags with improved spacing and styling */}
                    <div className="flex flex-wrap gap-2">
                      {entry.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-transparent hover:border-[#654ea3]/30 hover:bg-[#654ea3]/5 hover:text-[#654ea3] transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}