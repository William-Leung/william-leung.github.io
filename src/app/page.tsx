// src/app/page.tsx
import Head from 'next/head';
import type { NextPage } from 'next';
import { personalInfo } from '../lib/data';
import Hero from '../components/sections/Hero';
import Experience from '@/components/sections/Experience';

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

    <main className="font-sans bg-gradient-to-br from-stone-50 via-stone-100 to-white text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Hero />
        {/* <Experience /> */}
      </div>
    </main> 
  </>
);

export default HomePage;
