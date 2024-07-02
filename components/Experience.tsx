'use client';

import React from 'react';

import { experiencesData } from '@/app/_lib/data';
import useSectionInView from '@/hooks';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './SectionHeading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: 'Experience',
  });

  return (
    <section
      id='experience'
      ref={ref}
      className='scroll-mt-28 mb-28 sm:mb-40 section-container'
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
