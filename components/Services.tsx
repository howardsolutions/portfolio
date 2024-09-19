'use client';

import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import SectionHeading from './SectionHeading';
import { FaServer } from 'react-icons/fa';
import { SiCodementor } from 'react-icons/si';
import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { useSectionInView } from '@/hooks';

export default function Services() {
  const { ref } = useSectionInView({
    sectionName: 'Services',
  });

  return (
    <section
      ref={ref}
      id='services'
      className='section-container justify-center items-center mb-28 sm:mb-40 scroll-mt-28'
    >
      <SectionHeading>What service do I provide?</SectionHeading>
      <div className='flex flex-col sm:flex-row flex-wrap gap-[2.5rem]'>
        <ServiceCard
          icon={<HiOutlineComputerDesktop />}
          header='Frontend Development'
          description='Front-end development centres on crafting visually appealing,
            responsive, and user-friendly web interfaces.'
        />

        <ServiceCard
          icon={<FaServer />}
          header='Backend Development'
          description='Back-end development powers the server-side, database modeling,
            handling API requests, data and application logic to deliver a
            seamless user experience.'
        />

        <ServiceCard
          icon={<SiCodementor />}
          header='1-on-1 Mentoring'
          description='Get on a 1-on-1 mentoring call with me for career advices or
            personal growth.'
        />
      </div>
    </section>
  );
}

type ServiceCardProps = {
  header: string;
  description: string;
  icon: ReactElement<IconType & HTMLElement>;
};

function ServiceCard({ icon, header, description }: ServiceCardProps) {
  return (
    <article
      className='flex group flex-col bg-white dark:bg-black/[0.8] hover:bg-slate-800 transition duration-500 hover:translate-y-6 rounded-lg w-full p-6 overflow-hidden
  sm:w-[18rem]
  shadow-2xl
  border border-black/5
'
    >
      <div className='flex flex-col items-center gap-2'>
        {React.cloneElement(icon, {
          className: 'text-[3rem] group-hover:text-white',
        })}
        <h3 className='text-center px-2 pb-5 text-2xl font-semibold group-hover:text-white'>
          {header}
        </h3>
      </div>
      <p className='leading-relaxed text-gray-700 dark:text-white/70 text-center group-hover:text-white'>
        {description}
      </p>
    </article>
  );
}
