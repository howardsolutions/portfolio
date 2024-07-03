import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <SectionDivider />
      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </React.Fragment>
  );
}
