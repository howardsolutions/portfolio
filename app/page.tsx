import dynamic from 'next/dynamic';
const About = dynamic(() => import('@/components/About'));
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
