'use client';

import { skillsData } from '@/app/_lib/data';
import SectionHeading from './SectionHeading';
import useSectionInView from '@/hooks';
import { motion } from 'framer-motion';

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
      className='mb-28 max-w-[54rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My Skills 😎</SectionHeading>

      <ul className='flex flex-wrap gap-4 text-lg text-gray-800'>
        {skillsData.map((skill, idx) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={idx}
            className='bg-white border border-black/[0.1] rounded-xl py-3 px-5'
            key={skill.label}
          >
            {skill.icon}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
