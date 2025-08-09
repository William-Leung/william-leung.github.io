import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../lib/data';

const links = [
  { href: personalInfo.github, icon: FaGithub, label: 'GitHub', hoverBg: 'group-hover:bg-black', hoverColor: 'group-hover:text-white' },
  { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn', hoverBg: 'group-hover:bg-[#0A66C2]', hoverColor: 'group-hover:text-white' },
  { href: `mailto:${personalInfo.email}`, icon: FaEnvelope, label: 'Email', hoverBg: 'group-hover:bg-[#D93025]', hoverColor: 'group-hover:text-white' },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-6">
      {links.map(({ href, icon: Icon, label, hoverBg, hoverColor }) => (
        <a
          key={label}
          href={href}
          target={label !== 'Email' ? '_blank' : undefined}
          rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
          className="group relative flex items-center justify-center text-gray-600 hover:scale-110 transition-all duration-300"
        >
          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>

          <div className={`p-3 rounded-full bg-white shadow-md transition-colors duration-300 ${hoverBg}`}>
            <Icon className={`w-6 h-6 text-gray-600 transition-colors duration-300 ${hoverColor}`} />
          </div>
        </a>
      ))}
    </div>
  );
}
