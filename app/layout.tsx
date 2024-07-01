import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Nav from '@/components/Nav';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Howard Phung | Software Engineer',
  description: `Howard Phung, a Fullstack Javascript Engineer with ${
    new Date().getFullYear() - 2019
  } years of experience, he specialized in Frontend Engineering, he built startup, medium to enterprise level software applications`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${montserrat.className} bg-gray-50 text-gray-950 relative h-full pt-28 sm:pt-36`}
      >
        {/* COLORS DOTS */}
        <div
          className='bg-[#2f64f5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]
        '
        ></div>

        <div
          className='bg-[#D0D3D4] absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]
          md:left-[-33rem]
          lg:left-[-28rem]
          xl:left-[-15rem]
          2xl:left-[-5rem]
        '
        ></div>

        {/* MAIN CONTENT */}
        <Nav />
        {children}
      </body>
    </html>
  );
}
