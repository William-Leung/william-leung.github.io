// app/page.tsx
// This is the main page component for your portfolio.

import Image from 'next/image'
import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard'

// --- Import Data and Components ---
import { personalInfo, projects } from '../lib/data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// --- Main Page Component ---
const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{personalInfo.name} | Software Developer</title>
        <meta name="description" content="Personal portfolio of William Leung, a software developer and computer science student at Cornell." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans bg-gray-50 text-gray-800 min-h-screen">
        <div className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
          
          {/* --- Hero Section --- */}
          <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-24">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="text-fuchsia-600">Hi, I&apos;m {personalInfo.name.split(' ')[0]}</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                I&apos;m a Computer Science student at Cornell, passionate about building intelligent systems and scalable software. My work spans across AI/ML, cloud infrastructure, and full-stack development. I enjoy tackling complex problems and turning ideas into reality through code.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <FaGithub className="w-8 h-8" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <FaLinkedin className="w-8 h-8" />
                </a>
                 <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-gray-900 transition-colors">
                  <FaEnvelope className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
              <Image
                src={personalInfo.profileImage}
                alt={`A portrait of ${personalInfo.name}`}
                className="rounded-full object-cover w-full h-full shadow-lg"
                width={200}
                height={200}
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
