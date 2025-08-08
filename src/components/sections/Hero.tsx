import { personalInfo } from '../../lib/data';
import ProfileImage from '../ProfileImage';
import SocialLinks from '../SocialIcons';

export default function HeroSection() {
  const firstName = personalInfo.name.split(' ')[0];
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-32">
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#654ea3] to-[#eaafc8] bg-clip-text text-transparent">
              Hi, I&apos;m {firstName}
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#654ea3] to-[#eaafc8] rounded-full" />
        </div>
        <p className="text-gray-800 text-xl leading-relaxed font-normal mb-8 max-w-2xl">
          I&apos;m a <span className="font-semibold text-gray-900">Computer Science student at Cornell</span>, passionate about building
          intelligent systems and scalable software. My work spans across{' '}
          <span className="font-semibold text-[#654ea3]">AI/ML</span>,{' '}
          <span className="font-semibold text-[#654ea3]">cloud infrastructure</span>, and{' '}
          <span className="font-semibold text-[#654ea3]">full-stack development</span>.
        </p>
        <SocialLinks />
      </div>
      <ProfileImage />
    </section>
  );
}