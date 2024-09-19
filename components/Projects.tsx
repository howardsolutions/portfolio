'use client';

import { projectsData } from '@/app/_lib/data';
import { useSectionInView } from '@/hooks';
import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { ref } = useSectionInView({
    sectionName: 'Projects',
    threshold: 0.25,
  });

  console.log('project');

  return (
    <section
      ref={ref}
      id='projects'
      className='section-container scroll-mt-28 mb-28'
    >
      <SectionHeading>Latest Side Projects 🤯</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
