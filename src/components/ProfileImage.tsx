import Image from 'next/image';
import { personalInfo } from '../lib/data';

export default function ProfileImage() {
  return (
    <div className="relative group">
      <div className="w-48 h-48 md:w-56 md:h-56 relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#654ea3]/20 to-[#eaafc8]/20 animate-pulse"></div>
        <div className="absolute inset-2 rounded-3xl bg-gradient-to-r from-[#654ea3]/20 to-[#eaafc8]/20 animate-pulse delay-150"></div>
        <Image
          priority
          src={personalInfo.profileImage}
          alt={`A portrait of ${personalInfo.name}`}
          width={224}
          height={224}
          className="relative z-10 rounded-3xl object-cover w-full h-full shadow-2xl ring-4 ring-white/50 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
