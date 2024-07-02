'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className='bg-gray-200 my-24 mx-auto w-24 h-1 rounded-full hidden sm:block dark:bg-opacity-20'
    ></motion.div>
  );
}
