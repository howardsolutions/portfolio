import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <SectionDivider />
      <main className=''>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </React.Fragment>
  );
}
