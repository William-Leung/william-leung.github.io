import ProjectCard from './ProjectCard';
import { projects } from '../lib/data';

export default function ProjectsSection() {
  return (
    <section>
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
          Featured Projects
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#654ea3] to-[#eaafc8] rounded-full mx-auto mb-6" />
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in AI/ML, full-stack development, and cloud infrastructure
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="transform hover:scale-[1.02] transition-all duration-300"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
