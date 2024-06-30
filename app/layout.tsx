import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div
          className='bg-[#AED6F1] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
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
        {children}
      </body>
    </html>
  );
}
