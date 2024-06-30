'use client';

import Image from 'next/image';
import imgOfMe from '@/public/me.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='mb-28 mt-6 max-w-[50rem] text-center sm:mb-0 sm:mt-0'>
      <div className='flex items-center justify-center'>
        {/* Self Image and Star Icon */}
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
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
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className='absolute text-4xl bottom-0 right-4'
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.2,
                duration: 0.7,
              }}
            >
              🌟
            </motion.span>
          </motion.div>
        </div>
      </div>
      {/* Main Text Intro */}
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi there! <span className='font-bold'>I'm Howard,</span> a{' '}
        <span className='font-bold'>
          full-stack Software Engineer specialized in Frontend Engineering
        </span>{' '}
        with{' '}
        <span className='font-bold'>
          {new Date().getFullYear() - 2019} years
        </span>{' '}
        of experiences. Welcome to my site ✋
      </motion.h1>

      {/* Social Links, Linkedin and CV */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='flex items-center flex-col justify-center gap-4 sm:flex-row px-4 text-lg font-medium'
      >
        <Link
          className='group bg-gray-900 flex text-white px-7 py-3 rounded-full gap-2 items-center outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          href='#contact'
        >
          Let's work together
          <BsArrowRight className='opacity-70 group-hover:translate-x-1' />
        </Link>

        {/* CV Download */}
        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition
          border border-black/10
          '
          href='/dummy.pdf'
          download={true}
        >
          My CV{' '}
          <HiDownload className='group-hover:translate-y-0.5 opacity-60' />
        </a>
        {/* Github and Linkedin Links */}
        <a
          className='bg-white p-4 text-gray-900 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:scale-110 hover:scale-[1.15]  active:scale-105 transition'
          href='https://www.linkedin.com/in/howardphung30/'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-900 flex items-center text-[1.35rem] gap-2 rounded-full border border-black/10 outline-none focus:scale-110 hover:scale-[1.15]  active:scale-105 transition'
          href='https://github.com/thinhphungdev'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </header>
  );
}