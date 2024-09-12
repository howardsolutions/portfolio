'use client';

import { useActiveSection } from '@/context/ActiveSectionContext';
import useSectionInView from '@/hooks';
import imgOfMe from '@/public/me.png';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { HiDownload } from 'react-icons/hi';

export default function Header() {
  const { ref } = useSectionInView({
    sectionName: 'Home',
  });

  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <header
      ref={ref}
      id='home'
      className='section-container mb-28 mt-6 text-center sm:mb-0 sm:mt-0 scroll-mt-[100rem]
      '
    >
      <div className='flex items-center justify-center'>
        {/* Self Image and Star Icon */}
        <div className='relative'>
          <div>
            <Image
              src={imgOfMe}
              alt='Howard Phung Image'
              width={194}
              height={194}
              quality={95}
              priority={true}
              className='h-26 w-26 rounded-full border-[0.35rem] border-white object-cover
            shadow-xl'
            />
            <span className='absolute text-4xl bottom-0 right-4'>🌟</span>
          </div>
        </div>
      </div>
      {/* Main Text Intro */}
      <h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        Hi there! <span className='font-bold'>I'm Howard,</span> <br />
        <span className='font-bold'>a Software Engineer</span> with{' '}
        <span className='font-bold'>
          {new Date().getFullYear() - 2020}+ years
        </span>{' '}
        of experiences. <br />
        The author of{' '}
        <a
          className='underline font-semibold'
          href='https://howardphung.hashnode.dev/'
          target='_blank'
        >
          Web Dev Distilled Blog
        </a>
        . <br />
        Welcome to my site ✋
      </h1>

      {/* Social Links, Linkedin and CV */}
      <div className='flex items-center flex-col justify-center gap-4 sm:flex-row px-4 text-lg font-medium'>
        <Link
          className='group bg-gray-900 flex text-white px-7 py-3 rounded-full gap-2 items-center outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          href='#contact'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Let's work together
          <BsArrowRight className='opacity-70 group-hover:translate-x-1' />
        </Link>

        {/* CV Download */}
        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition
          border border-black/10
          dark:bg-white/10
          '
          href='/dummy.pdf'
          download={true}
        >
          My CV{' '}
          <HiDownload className='group-hover:translate-y-0.5 opacity-60' />
        </a>
        {/* Github and Linkedin Links */}
        <a
          className='hero-social-btn'
          href='https://howardphung.hashnode.dev/'
          target='_blank'
        >
          <FaHashnode />
        </a>

        <a
          className='hero-social-btn'
          href='https://www.linkedin.com/in/howardphung30/'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='hero-social-btn'
          href='https://github.com/thinhphungdev'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </div>
    </header>
  );
}
