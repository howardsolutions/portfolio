'use client';

import { testimonialsData } from '@/app/_lib/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

const Testimonials = () => {
  return (
    <section className='testimonial-container section-container mb-28 sm:mb-40 scroll-mt-28'>
      <SectionHeading>Kind Words from people</SectionHeading>

      <div className='slider-container'>
        <blockquote>
          <img
            className='top-quote quote'
            src='blockquote.svg'
            alt='top quote'
          />
          <img
            className='bottom-quote quote'
            src='blockquote.svg'
            alt='bottom quote'
          />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {testimonialsData.map((review) => (
            <SplideSlide className='dark:!bg-white/10' key={review.id}>
              <Image
                className='object-cover rounded-full h-[140px] w-[140px] mb-4'
                src={review.image}
                alt='Testimonial'
                quality={80}
                width={140}
                height={140}
              />
              <div className='content'>
                <p className='text dark:!text-white/60'>{review.text}</p>
                <div className=''>
                  <div className='rating'>
                    {Array.from({ length: 5 }).map((val, idx) => (
                      <span key={idx} className='star'>
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className='user dark:!text-white/60'>{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
