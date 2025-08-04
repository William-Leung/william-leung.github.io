import Head from 'next/head';
import type { NextPage } from 'next';
import { personalInfo } from '../lib/data';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>{personalInfo.name} | Software Developer</title>
      <meta
        name="description"
        content="Personal portfolio of William Leung, a software developer and computer science student at Cornell."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-800 min-h-screen">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <HeroSection />
        <ProjectsSection />
      </div>
    </main>
  </>
);

export default HomePage;
