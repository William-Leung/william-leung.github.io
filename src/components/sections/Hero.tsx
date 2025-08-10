// app/components/Hero.tsx
import { personalInfo } from "../../lib/data";
import ProfileImage from "../ProfileImage";
import SocialLinks from "../SocialIcons";

const BRAND_GRADIENT = "from-[#654ea3] to-[#eaafc8]";
const BRAND_TEXT = "bg-gradient-to-r bg-clip-text text-transparent";
const ACCENT_BAR = `w-24 h-1.5 bg-gradient-to-r ${BRAND_GRADIENT} rounded-full`;

export default function HeroSection() {
  const firstName = personalInfo.name.split(" ")[0];

  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-16">
      <div className="flex-1">
        <header className="mb-5">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            <span className={`${BRAND_TEXT} bg-gradient-to-r ${BRAND_GRADIENT}`}>
              Hi, I&apos;m {firstName}
            </span>
          </h1>
          <div className={ACCENT_BAR} />
        </header>

        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6 max-w-[60ch]">
          I&apos;m a <span className="font-semibold text-gray-900">Computer Science student at Cornell</span>, passionate
          about building intelligent systems and scalable software. My work spans{" "}
          <span className="font-semibold text-[#654ea3]">AI/ML</span>,{" "}
          <span className="font-semibold text-[#654ea3]">low-level programming</span>, and{" "}
          <span className="font-semibold text-[#654ea3]">full-stack development</span>.
        </p>

        <SocialLinks />
      </div>

      {/* Scalable photo with a soft depth accent behind */}
      <div className="relative">
        <div
          className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#654ea3]/10 to-[#eaafc8]/10 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative scale-110 md:scale-110 lg:scale-125">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
