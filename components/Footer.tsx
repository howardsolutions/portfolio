import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-600 dark:text-gray-400'>
      <small className='mb-2 block text-xs'>
        &copy; {new Date().getFullYear()}, Howard Phung. All rights Reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>
          Software Engineer, Frontend turned Fullstack, Love Software
          Engineering and Computer Science. Also love building UI at scale.
        </span>
      </p>
    </footer>
  );
}
