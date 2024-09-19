import { Fragment, lazy } from 'react';

const About = lazy(() => import('@/components/About'));
const Contact = lazy(() => import('@/components/Contact'));
const Experience = lazy(() => import('@/components/Experience'));
const Projects = lazy(() => import('@/components/Projects'));
const Services = lazy(() => import('@/components/Services'));
const Skills = lazy(() => import('@/components/Skills'));
const Testimonials = lazy(() => import('@/components/Testimonials'));

import Header from '@/components/Header';
import SectionDivider from '@/components/SectionDivider';
import RenderOnViewportEntry from '@/components/RenderOnViewportEntry';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <SectionDivider />
      <main>
        <RenderOnViewportEntry
          sectionName='about'
          threshold={0.1}
          className='min-h-[70vh]'
        >
          <About />
        </RenderOnViewportEntry>

        <RenderOnViewportEntry
          sectionName='projects'
          threshold={0.25}
          className='min-h-[80vh]'
        >
          <Projects />
        </RenderOnViewportEntry>

        <RenderOnViewportEntry
          sectionName='skills'
          threshold={0.25}
          className='min-h-[40vh]'
        >
          <Skills />
        </RenderOnViewportEntry>

        <RenderOnViewportEntry
          sectionName='experience'
          threshold={0.25}
          className='min-h-[45vh]'
        >
          <Experience />
        </RenderOnViewportEntry>

        <RenderOnViewportEntry
          sectionName='services'
          threshold={0.25}
          className='min-h-[40vh]'
        >
          <Services />
        </RenderOnViewportEntry>

        <RenderOnViewportEntry
          sectionName='testimonials'
          threshold={0.25}
          className='min-h-[40vh]'
        >
          <Testimonials />
        </RenderOnViewportEntry>

        <RenderOnViewportEntry
          sectionName='contact'
          threshold={0.2}
          className='min-h-[35vh]'
        >
          <Contact />
        </RenderOnViewportEntry>
      </main>
    </Fragment>
  );
}
