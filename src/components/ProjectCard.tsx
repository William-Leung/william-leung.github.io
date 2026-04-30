import SkillTag from './SkillTag';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm border border-gray-200/80 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <SkillTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
