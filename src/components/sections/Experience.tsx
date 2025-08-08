// src/components/ExperienceSection.tsx
import { experience } from '@/lib/experience';

export default function ExperienceSection() {
  return (
    <section className="mb-32">
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          <span className="bg-gradient-to-r from-[#654ea3] to-[#eaafc8] bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#654ea3] to-[#eaafc8] rounded-full" />
      </div>

      {/* Experience Timeline */}
      <div className="relative pl-8 md:pl-16">
        {/* Vertical line for the timeline */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full"></div>

        {experience.map((entry, index) => (
          <div key={index} className="mb-12 last:mb-0 relative group">
            {/* Timeline dot - Positioned on the timeline line and centered to card */}
            {/* <div className="absolute left-4 md:left-8 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#654ea3] z-10">
            </div> */}

            {/* Experience Card */}
            <div className="ml-8 md:ml-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-[#654ea3]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#654ea3]/5 to-[#eaafc8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Timeline dot - Positioned on the timeline line but centered to card */}
              <div className="absolute left-[-32px] md:left-[-36px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#654ea3] to-[#eaafc8] shadow-lg group-hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#654ea3] to-[#eaafc8] animate-pulse opacity-30"></div>
              </div>
              
              <div className="relative z-10">
                {/* Date badge with enhanced styling */}
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#654ea3]/10 to-[#eaafc8]/10 text-[#654ea3] text-xs font-bold uppercase tracking-wider rounded-full border border-[#654ea3]/20 mb-4">
                  {entry.date}
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-1 leading-tight group-hover:text-[#654ea3] transition-colors duration-300">
                      {entry.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-semibold">
                      {entry.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-normal mb-6 text-base">
                  {entry.description}
                </p>

                {entry.achievements && entry.achievements.length > 0 && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#654ea3]">
                    <ul className="space-y-2">
                      {entry.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#654ea3] mt-2 mr-3 flex-shrink-0"></div>
                          <span className="flex-1 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Enhanced technology tags with better spacing and effects */}
                <div className="flex flex-wrap gap-2">
                  {entry.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white text-gray-700 text-xs font-semibold rounded-full shadow-sm border border-gray-200 hover:border-[#654ea3] hover:text-[#654ea3] hover:shadow-md transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}