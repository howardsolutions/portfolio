'use client';

import { skillsData } from '@/app/_lib/data';
import SectionHeading from './SectionHeading';
import useSectionInView from '@/hooks';
import { motion } from 'framer-motion';
import React from 'react';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * idx,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: 'Skills' });

  return (
    <section
      ref={ref}
      id='skills'
      className='section-container mb-28 scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My Skills 😎</SectionHeading>

      <ul className='flex flex-wrap gap-6 text-gray-800 text-2xl'>
        {skillsData.map((skill, idx) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={idx}
            key={skill.label}
            className='bg-white border border-black/[0.1] py-3 px-5 
              rounded-full outline-none hover:scale-125 transition !transform
             has-tooltip
             relative
             dark:bg-white/10 
             dark:text-white/90
            '
          >
            {skill.icon}
            <span className='text-xs tooltip bg-blue-200 dark:bg-white/80 dark:text-white p-[1px] left-1/2 top-1/2 -translate-y-[240%] -translate-x-1/2 rounded absolute'>
              {skill.label}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
