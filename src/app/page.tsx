// src/app/page.tsx

import SideNav from '@/components/SideNav';
import { Github, Linkedin, Mail, Globe, MessageSquare, ArrowRight, Briefcase, Lightbulb, GraduationCap, Code, PenTool, Link as LinkIcon } from 'lucide-react';

// --- Reusable Components ---

// NEW: A more versatile Tag component (renamed from Chip for clarity)
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-sky-100/80 px-2.5 py-1 text-xs font-semibold text-sky-800 ring-1 ring-inset ring-sky-200/50 transition-all hover:bg-sky-200/80">
      {children}
    </span>
  );
}

// ENHANCED: Timeline component for Work & Projects to make them more scannable and visually interesting
function TimelineItem({ date, title, subtitle, link, tags, children }: {
  date: string;
  title: string;
  subtitle: string;
  link?: string;
  tags?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="group relative grid grid-cols-1 gap-x-8 gap-y-2 pb-10 sm:grid-cols-8 before:absolute before:left-[7.5px] before:top-3 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200">
      <div className="z-10 sm:col-span-2">
        <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-slate-400 transition-all group-hover:h-3 group-hover:w-3 group-hover:bg-sky-500"></div>
        </div>
        <header className="pl-8 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {date}
        </header>
      </div>
      <div className="z-10 sm:col-span-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 text-sky-700 transition-colors hover:text-sky-500">
              {title}
              <LinkIcon className="h-4 w-4 opacity-0 transition-all group-hover/link:opacity-100" />
            </a>
          ) : (
            title
          )}
          <span className="font-normal text-slate-600"> · {subtitle}</span>
        </h3>
        <div className="mt-3 text-base leading-7 text-slate-700">
          {children}
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,#e0e9ff_0%,#f4f8ff_40%,white_70%)] text-slate-900">
      <SideNav />

      {/* Right pane (scrollable) */}
      <div id="contentScroll" className="ml-0 h-screen overflow-y-auto md:ml-[288px]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 pb-32 pt-24">

          {/* Hero/Introduction Section (Largely the same, but with refined styles) */}
          <header id="introduction" className="scroll-mt-24 pb-16">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              William Leung
            </h1>
            <p className="mt-4 text-2xl font-medium text-slate-700 sm:mt-5">
              Computer Science Student at Cornell University [cite: 4]
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              An aspiring software engineer passionate about solving real-world problems by crafting performant, user-friendly applications that blend technology and creativity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="inline-flex items-center gap-2 text-slate-600 text-sm">
                <Globe className="h-4 w-4 text-slate-500" />
                San Jose, CA [cite: 2]
              </div>
              <a
                href="mailto:wcl53@cornell.edu"
                className="group inline-flex items-center gap-2 text-sm text-slate-600 hover:text-sky-700 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                wcl53@cornell.edu [cite: 2]
              </a>
              <a
                href="https://github.com/william-leung" // Assuming from resume context
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-slate-600 hover:text-sky-700 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
                GitHub [cite: 2]
              </a>
              <a
                href="https://www.linkedin.com/in/william-leung/" // Assuming from resume context
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-slate-600 hover:text-sky-700 transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn [cite: 2]
              </a>
            </div>
          </header>

          {/* Work Experience Section - REFACTORED */}
          <section id="work" className="scroll-mt-24 mt-16">
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-800">
              <Briefcase className="h-6 w-6 text-sky-600" />
              Work Experience
            </h2>
            <div className="mt-8">
              <TimelineItem
                date="May 2025 – Present"
                title="Development Manager"
                subtitle="SeaBridge Sustainability"
                tags={['AWS Bedrock', 'LangGraph', 'FastAPI', 'MongoDB', 'RAG']}
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Architected an enterprise RAG platform on AWS for ESG data processing[cite: 18].</li>
                  <li>Shipped AI agents that automated 85% of manual ESG workflows, cutting report generation time by 90% (from weeks to days)[cite: 19].</li>
                </ul>
              </TimelineItem>
              <TimelineItem
                date="Jun 2024 – Aug 2024"
                title="Software Engineering Intern"
                subtitle="NetApp"
                tags={['C++', 'AWS S3', 'Distributed Systems', 'API Design']}
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Engineered a fully AWS S3 compliant API (GetObjectAttributes) in C++ for the ONTAP storage system, supporting 25K+ concurrent requests for 10K enterprise clients[cite: 23].</li>
                  <li>Delivered production-ready code with 97% test coverage across 70+ tests, achieving a zero-defect release[cite: 24].</li>
                </ul>
              </TimelineItem>
              <TimelineItem
                date="Aug 2023 – Present"
                title="Head Teaching Assistant"
                subtitle="Cornell University, Analysis of Algorithms"
                tags={['Leadership', 'Education', 'Grading']}
              >
                <p>Ensured fair and consistent grading for a 400+ person class by coordinating a team of 14 graders[cite: 27].</p>
              </TimelineItem>
              <TimelineItem
                date="Jul 2023 – Oct 2023"
                title="Frontend Developer Team Lead"
                subtitle="Global Business Consulting Services"
                tags={['ReactJS', 'TypeScript', 'Agile', 'CI/CD', 'Team Leadership']}
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Led a cross-functional team of 7 engineers through Agile sprints, delivering 9 major feature releases on schedule[cite: 32].</li>
                  <li>Delivered a real-time fleet management app tracking 2K+ vehicles with 99.9% uptime[cite: 30].</li>
                  <li>Implemented a CI/CD pipeline, accelerating feature delivery by 20%[cite: 31].</li>
                </ul>
              </TimelineItem>
            </div>
          </section>

          {/* Key Projects Section - REFACTORED */}
          <section id="projects" className="scroll-mt-24 mt-16">
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-800">
              <Lightbulb className="h-6 w-6 text-sky-600" />
              Key Projects
            </h2>
            <div className="mt-8">
              <TimelineItem
                date="Apr 2025 – May 2025"
                title="Tree of Thoughts (ToT) LLM Framework Enhancement"
                subtitle="Personal Project"
                tags={['PyTorch', 'Reinforcement Learning', 'LLM', 'API Cost Reduction']}
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Enhanced an LLM reasoning framework by integrating a custom reinforcement learning component in PyTorch.</li>
                  <li>Reduced API costs by 100x and latency by 75% while maintaining 92% accuracy on math reasoning tasks[cite: 36].</li>
                </ul>
              </TimelineItem>
              <TimelineItem
                date="Mar 2024 – May 2024"
                title="UpStyle: AI Outfit Recommender"
                subtitle="Personal Project"
                tags={['ML Pipeline', 'Web Scraping', 'Sentence Transformers', 'Fine-tuning']}
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Built an end-to-end ML pipeline, scraping 30K+ fashion items from 7 e-commerce sites[cite: 38].</li>
                  <li>Fine-tuned a sentence transformer, allowing users to search with natural language to get outfit recommendations[cite: 38].</li>
                </ul>
              </TimelineItem>
              <TimelineItem
                date="Aug 2023 – Present"
                title="Data Team Lead, GeoData Project"
                subtitle="Cornell University"
                tags={['Computer Vision', 'YOLO', 'DynamoDB', 'Poisson Regression', 'Neural Networks']}
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>Deployed a computer vision pipeline processing 70K+ BirdCam frames daily using YOLO[cite: 41].</li>
                  <li>Built ML models to predict harmful algal blooms with 85% accuracy[cite: 42].</li>
                  <li>Created a visualization that identified 15% potential energy savings on campus[cite: 43].</li>
                </ul>
              </TimelineItem>
            </div>
          </section>

          {/* Studies & Skills Section - REFACTORED */}
          <section id="studies" className="scroll-mt-24 mt-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Studies Card */}
              <div>
                <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-800">
                  <GraduationCap className="h-6 w-6 text-sky-600" />
                  Education
                </h2>
                <div className="mt-6 rounded-lg border border-slate-200 bg-white/70 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Cornell University [cite: 4]</h3>
                  <p className="text-slate-700">Expected Dec 2026 [cite: 5]</p>
                  <p className="mt-3 text-slate-600">M.Eng. in Computer Science [cite: 5]</p>
                  <p className="text-slate-600">B.A. in Computer Science, GPA 4.0 [cite: 6]</p>
                  <p className="mt-2 text-sm text-slate-500">Minors in AI and Data Science [cite: 6]</p>
                </div>
              </div>

              {/* Skills Card */}
              <div>
                <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-800">
                  <Code className="h-6 w-6 text-sky-600" />
                  Technical Skills
                </h2>
                <div className="mt-6 rounded-lg border border-slate-200 bg-white/70 p-6 shadow-sm">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700">ML/AI</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Tag>PyTorch</Tag><Tag>TensorFlow</Tag><Tag>scikit-learn</Tag><Tag>LangChain</Tag><Tag>YOLO</Tag>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700">Languages</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Tag>Python</Tag><Tag>C++</Tag><Tag>Java</Tag><Tag>TypeScript</Tag><Tag>SQL</Tag><Tag>R</Tag>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700">Cloud & Data</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Tag>AWS</Tag><Tag>GCP</Tag><Tag>Docker</Tag><Tag>PostgreSQL</Tag><Tag>MongoDB</Tag><Tag>Vector DBs</Tag>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NEW: Interests Section */}
          <section id="interests" className="scroll-mt-24 mt-24">
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-800">
              <PenTool className="h-6 w-6 text-sky-600" />
              Beyond the Code
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Tag>Long distance running </Tag>
              <Tag>Pickleball </Tag>
              <Tag>Language learning </Tag>
              <Tag>Cognitive science </Tag>
              <Tag>Creative writing </Tag>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}