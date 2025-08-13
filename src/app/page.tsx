import SideNav from '@/components/SideNav';
import { Github, Linkedin, Mail, Globe, MessageSquare } from 'lucide-react';

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main
      className="
        min-h-screen bg-[radial-gradient(1200px_600px_at_60%_-10%,#d9efff_0%,#f4f8ff_40%,white_70%)]
        text-slate-900
      "
    >
      {/* fixed left rail */}
      <SideNav />

      {/* right pane (only this scrolls) */}
      <section
        className="
          ml-0 md:ml-[280px] 
          h-screen overflow-y-auto
        "
      >
        {/* content wrapper to mimic screenshot paddings */}
        <div className="mx-auto max-w-5xl px-6 md:px-10 pb-32">
          {/* top spacing like the mock */}
          <div className="h-8 md:h-12" />

          {/* action pill */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="
                inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm
                shadow-sm backdrop-blur transition hover:bg-white
              "
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100">
                <MessageSquare className="h-3.5 w-3.5 text-sky-700" />
              </span>
              Schedule a call
              <span className="ml-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                <svg width="10" height="10" viewBox="0 0 20 20" className="fill-slate-600">
                  <path d="M7.5 4l6 6-6 6-1.5-1.5L10.5 10 6 5.5 7.5 4z" />
                </svg>
              </span>
            </a>
          </div>

          {/* name + title */}
          <header id="introduction" className="mt-6">
            <h1 className="text-[64px] leading-[0.95] font-extrabold tracking-tight md:text-[76px]">
              Selene Yu
            </h1>
            <p className="mt-3 text-2xl text-slate-600">Design Engineer</p>

            {/* meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[15px] text-slate-700">
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                  <Globe className="h-3.5 w-3.5 text-rose-600" />
                </span>
                Asia/Jakarta
              </span>

              {/* language chips */}
              <div className="ml-2 flex items-center gap-2">
                <Chip>English</Chip>
                <Chip>Bahasa</Chip>
              </div>
            </div>

            {/* socials */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-[15px]">
              <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <Github className="h-4.5 w-4.5" /> GitHub
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <Linkedin className="h-4.5 w-4.5" /> LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <MessageSquare className="h-4.5 w-4.5" /> Threads
              </a>
              <a href="mailto:you@email.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <Mail className="h-4.5 w-4.5" /> Email
              </a>
            </div>

            {/* intro paragraph */}
            <p className="mt-8 max-w-3xl text-[17px] leading-7 text-slate-700">
              Selene is a Jakarta‑based design engineer with a passion for transforming complex challenges into
              simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the
              convergence of design and technology.
            </p>
          </header>

          {/* Work Experience */}
          <section id="work" className="mt-16">
            <h2 className="text-[44px] font-extrabold tracking-tight">Work Experience</h2>

            {/* role block */}
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-[1fr,160px] md:items-start">
              <div>
                <p className="text-xl font-semibold">FLY</p>
                <p className="text-sky-700">Senior Design Engineer</p>

                <ul className="mt-4 list-disc space-y-3 pl-5 text-[17px] leading-7 text-slate-700">
                  <li>
                    Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30%
                    faster load times.
                  </li>
                </ul>
              </div>
              <div className="mt-2 flex items-start md:justify-end">
                <span className="text-slate-500">2022 – Present</span>
              </div>
            </div>
          </section>

          {/* Studies */}
          <section id="studies" className="mt-20">
            <h2 className="text-[28px] font-semibold tracking-tight text-slate-900">Studies</h2>
            <p className="mt-4 text-[17px] leading-7 text-slate-700">
              Add your education details here.
            </p>
          </section>

          {/* Technical skills */}
          <section id="skills" className="mt-20">
            <h2 className="text-[28px] font-semibold tracking-tight text-slate-900">Technical skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>TypeScript</Chip>
              <Chip>React</Chip>
              <Chip>Next.js</Chip>
              <Chip>Tailwind CSS</Chip>
              <Chip>Figma</Chip>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
