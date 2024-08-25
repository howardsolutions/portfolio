'use client';

import { links } from '@/app/_lib/data';
import { useActiveSection } from '@/context/ActiveSectionContext';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Nav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <nav className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[7rem] w-full rounded-none
        border border-white border-opacity-40 bg-white bg-opcity-80 shadow-lg shadow-black/[0.03]
        backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.5rem] sm:w-[48rem] sm:rounded-full
      dark:border-black/40
        dark:bg-opacity-75
        '
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <div
        className='fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
        py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0
      '
      >
        <ul
          className='flex w-[22rem] flex-wrap items-center justify-center font-medium text-gray-500
          sm:flex-nowrap sm:w-[initial] sm:gap-5
        '
        >
          {links.map((link) => {
            return (
              <motion.li
                className='h-3/4 flex items-center justify-center relative'
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    'flex w-full px-3 py-3 items-center justify-center hover:text-gray-950 dark:text-gray-900 transition dark:hover:text-white-400',
                    {
                      'text-gray-950 dark:text-gray-200':
                        activeSection === link.name,
                    }
                  )}
                  onClick={() => {
                    setTimeOfLastClick(Date.now());
                    setActiveSection(link.name);
                  }}
                  href={link.hash}
                >
                  {link.name}
                  {/* Active Background */}
                  {link.name === activeSection && (
                    <motion.span
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      className='bg-gray-100 rounded-full absolute inset-0 -z-10
                        dark:bg-gray-200
                      '
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
