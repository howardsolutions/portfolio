import './globals.css';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import Nav from '@/components/Nav';
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import { Toaster } from 'react-hot-toast';
const Footer = dynamic(() => import('@/components/Footer'));
import ThemeSwitch from '@/components/ThemeSwitch';
import ThemeContextProvider from '@/context/ThemeContext';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Howard Phung | Software Engineer',
  description: `Howard Phung, a Fullstack Javascript Engineer with ${
    new Date().getFullYear() - 2019
  } years of experience, he specialized in Frontend Engineering, he built startup, medium to enterprise level software applications`,
  authors: {
    name: 'Howard Phung',
    url: 'https://www.howardphung.com/',
  },
  keywords: [
    'Howard Phung',
    'Software Engineer',
    'Fullstack Javascript Engineer',
    'howard phung',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${montserrat.className} dark:bg-gray-900 bg-gray-50 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative h-full pt-28 sm:pt-36`}
      >
        {/* COLORS DOTS */}
        <div
          className='bg-[#2f64f5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]
          dark:bg-[#204dca]
        '
        ></div>

        <div
          className='bg-[#D0D3D4] absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]
          md:left-[-33rem]
          lg:left-[-28rem]
          xl:left-[-15rem]
          2xl:left-[-5rem]
          dark:bg-[#676394]
        '
        ></div>

        {/* MAIN CONTENT */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Nav />
            {children}
            <Footer />
            <Toaster position='top-right' />
          </ActiveSectionContextProvider>

          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
