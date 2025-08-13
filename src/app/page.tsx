// src/app/page.tsx

import SideNav from '@/components/SideNav';
import { Github, Linkedin, Mail, Globe, MessageSquare, ArrowRight } from 'lucide-react';

// Chip component with added hover effect
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-md">
      {children}
    </span>
  );
}

// Social link component for consistency
function SocialLink({ href, icon: Icon, label, a11yText }: { href: string; icon: React.ElementType; label: string, a11yText?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-slate-600 hover:text-sky-700 transition-colors duration-200"
      aria-label={a11yText || label}
    >
      <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-px" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,#e0e9ff_0%,#f4f8ff_40%,white_70%)] text-slate-900">
      <SideNav />

      {/* Right pane (scrollable) */}
      <div id="contentScroll" className="ml-0 h-screen overflow-y-auto md:ml-[288px]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 pb-32 pt-24">

          {/* Hero/Introduction Section */}
          <header id="introduction" className="scroll-mt-24">
            <a
              href="#" // Link to your contact/booking page
              className="group mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-4 py-2 text-sm text-sky-800 shadow-sm backdrop-blur transition-all hover:border-sky-300 hover:bg-sky-100/90 hover:shadow-lg"
            >
              <MessageSquare className="h-4 w-4" />
              Schedule a call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">Selene Yu</h1>
            <p className="mt-3 text-xl text-slate-600">Design Engineer</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700">
              Selene is a Jakarta‑based design engineer with a passion for transforming complex challenges into
              simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the
              convergence of design and technology.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
                <div className="inline-flex items-center gap-2 text-slate-600">
                  <Globe className="h-4 w-4 text-rose-500" />
                  Asia/Jakarta
                </div>
                <div className="flex items-center gap-2">
                    <Chip>English</Chip>
                    <Chip>Bahasa</Chip>
                </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <SocialLink href="#" icon={Github} label="GitHub" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" label="Threads" icon={() => <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current"><path d="M12 2.75a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 2.75Zm6.5 9.25a6.5 6.5 0 1 1-2.7-5.26.75.75 0 0 1 1.43.43 4.99 4.99 0 0 0 2.2 3.86.75.75 0 0 1-.93 1Z M8.2 16.93a.75.75 0 0 1-1.45-.42A5 5 0 0 0 4.5 12a.75.75 0 0 1 1.5 0 3.5 3.5 0 0 1 2.2 3.23.75.75 0 0 1-.5 1.7Z"/></svg>} />
              <SocialLink href="mailto:you@email.com" icon={Mail} label="Email" />
            </div>
          </header>

          {/* Work Experience Section */}
          <section id="work" className="scroll-mt-24 mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">Work Experience</h2>
            <div className="mt-8 space-y-12">
              {/* Job 1 */}
              <div className="group relative grid grid-cols-1 gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md bg-slate-50/50 transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/70 lg:group-hover:shadow-sm"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  2022 – Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="text-lg font-semibold text-slate-800">Senior Design Engineer · FLY</h3>
                  <ul className="mt-3 list-disc space-y-3 pl-5 text-base leading-7 text-slate-700">
                    <li>
                      Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.
                    </li>
                    {/* Add more bullet points here */}
                  </ul>
                </div>
              </div>
              {/* Add more jobs here following the same structure */}
            </div>
          </section>

          {/* Studies Section */}
          <section id="studies" className="scroll-mt-24 mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">Studies</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">Add your education details here.</p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24 mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">Technical Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>TypeScript</Chip><Chip>React</Chip><Chip>Next.js</Chip><Chip>Tailwind CSS</Chip><Chip>Figma</Chip>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}