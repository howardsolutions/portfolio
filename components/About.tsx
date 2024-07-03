'use client';

import useSectionInView from '@/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import HighLight from './HighLight';

export default function About() {
  const { ref } = useSectionInView({
    sectionName: 'About',
    threshold: 0.75,
  });

  return (
    <motion.section
      ref={ref}
      className='section-container mb-28 text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me 🙋</SectionHeading>
      <article className='mb-3 text-start leading-[2.5rem] tracking-wider'>
        <p>
          {' '}
          🔵 An
          <HighLight>experienced Software Engineer</HighLight> specialized in
          Frontend Engineering.{' '}
        </p>
        <p>
          🔵 A Self-driven and <HighLight>self-taught fast learner</HighLight>{' '}
          with a constant thirst to learn new things. Extremely passsionate
          about Software Engineering & Computer Science{' '}
        </p>
        <p>
          🔵 Love building full-stack web apps, beautiful and simple things with
          JavaScript. Specifically, React on the Frontend, and Node on the
          Backend{' '}
        </p>
        <p>
          🔵 Have a strong skill set in bridging the gap between system
          complexity and user-friendly interfaces through years of experience
          working with companies from Enterprise to Medium, and Startup level.
        </p>
        <p>
          🔵 Have deep level understanding of{' '}
          <HighLight> NextJS, ReactJS</HighLight> to building, maintaining
          complex UI application features, troubleshooting and improving
          Performance to gain seamless and efficient user experiences.{' '}
        </p>
        <p>
          🔵 Using <HighLight>Typescript</HighLight> to ensure building
          readable, maintainable, bug-free applications, which could lead to so
          much better developer experience.{' '}
        </p>
        <p>
          🔵 Proficient in setting up <HighLight>build tools</HighLight> such as
          <HighLight>Vite</HighLight> for complex projects.{' '}
        </p>
        <p>
          🔵 With Enterprise level applications, I experienced in building and
          contributing to{' '}
          <HighLight>Component and Shared Functions Library</HighLight> , as
          well as the <HighLight>Design System</HighLight> used by multiple
          applications across organization. <br />
          🔵 Also, Have Experienced with{' '}
          <HighLight> MicroFrontend Architecture </HighLight>,{' '}
          <HighLight> React Performance, Accessibility </HighLight>. I'm
          consistently write various kind of <HighLight>Testing</HighLight>,
          including Unit Tests, Component test... to ensures the stability of
          the applications.
          <br />
        </p>
        <p>
          🔵 Have experienced with{' '}
          <HighLight>leading a Frontend team</HighLight> with a teamsize of 4
          people. Do <HighLight> peer coding reviews </HighLight> to help
          teammates improve code quality and improve my{' '}
          <HighLight> technical communication</HighLight>
        </p>
        <p>
          🔵 Been learning and try to be really good at JS{' '}
          <HighLight>Functional Programming</HighLight>, Frontend and Backend
          <HighLight>System Design</HighLight>, UI UX Design, automation
          end-to-end testing with Cypress, MicroServices with Nodejs,... the
          list go on and on. I'm always try to{' '}
          <HighLight> staying up-to-date</HighLight> with the industry trends,
          in order to bring the best value I could to the companies.
        </p>
      </article>

      <article className='text-start leading-[2.5rem] tracking-wider'>
        🥸 <span className='italic font-semibold'> When I'm not coding</span>, I
        enjoy reading technical books, building side projects, writing{' '}
        <a href='https://howardphung.hashnode.dev/' target='_blank'>
          <HighLight> Technical Blog - Web Dev Distilled</HighLight>
        </a>
        , reading more non-technical books on other topics like philosophy,
        business, marketing and sales, psychology, etc. I also love{' '}
        <span className='font-medium'> piano and singing</span>. I am currently
        taking few courses{' '}
        <span className='font-medium'>on Piano Jazz and Singing</span>. I
        workout almost every single day, LOL. Moreover, I enjoy learning new
        languages, now I'm learning French as my 3rd language.
      </article>
    </motion.section>
  );
}
