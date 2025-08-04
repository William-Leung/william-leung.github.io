// app/page.tsx
// Enhanced portfolio homepage with modern design improvements

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

      <main className="font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-800 min-h-screen">
        <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
          
          {/* --- Hero Section --- */}
          <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-32">
            <div className="md:w-2/3">
              <div className="mb-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
                  <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Hi, I'm {personalInfo.name.split(' ')[0]}
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-700 text-xl leading-relaxed font-light mb-8 max-w-2xl">
                I'm a <span className="font-semibold text-gray-900">Computer Science student at Cornell</span>, passionate about 
                building intelligent systems and scalable software. My work spans across 
                <span className="font-semibold text-fuchsia-600"> AI/ML</span>, 
                <span className="font-semibold text-blue-600"> cloud infrastructure</span>, and 
                <span className="font-semibold text-purple-600"> full-stack development</span>.
              </p>
              
              <div className="flex items-center gap-8">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <FaGithub className="w-6 h-6" />
                  </div>
                  <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    GitHub
                  </span>
                </a>
                
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <FaLinkedin className="w-6 h-6" />
                  </div>
                  <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LinkedIn
                  </span>
                </a>
                
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="group flex items-center gap-3 text-gray-600 hover:text-fuchsia-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Email
                  </span>
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 relative">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-fuchsia-400/20 to-purple-400/20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-3xl bg-gradient-to-r from-blue-400/20 to-fuchsia-400/20 animate-pulse delay-150"></div>
                
                <Image
                  src={personalInfo.profileImage}
                  alt={`A portrait of ${personalInfo.name}`}
                  className="relative z-10 rounded-3xl object-cover w-full h-full shadow-2xl ring-4 ring-white/50 group-hover:scale-105 transition-transform duration-500"
                  width={224}
                  height={224}
                />
              </div>
            </div>
          </section>

          {/* --- Projects Section --- */}
          <section>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
                Featured Projects
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A selection of projects showcasing my expertise in AI/ML, full-stack development, and cloud infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="transform hover:scale-[1.02] transition-all duration-300"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>

          {/* --- Call to Action Section --- */}
          <section className="mt-32 text-center">
            <div className="bg-gradient-to-r from-fuchsia-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl p-12 border border-fuchsia-200/50">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities, innovative projects, or just connect with fellow developers.
              </p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-fuchsia-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaEnvelope className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;