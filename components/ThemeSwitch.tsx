'use client';

import { useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(() => {
    const localStorageTheme = window?.localStorage.getItem(
      'theme'
    ) as Theme | null;

    if (localStorageTheme) {
      if (localStorageTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
      return localStorageTheme;
    } else if (window?.matchMedia('(perfers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      return 'dark';
    } else return 'light';
  });

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-white border-opacity-40
        shadow-2xl
        rounded-full
        flex items-center justify-center
        hover:scale-[1.15]
        active:scale-[1.15]
        transition
        dark:bg-gray-950
        '
    >
      {theme === 'light' ? <BiMoon /> : <BsSun />}
    </button>
  );
}
