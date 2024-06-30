import About from '@/components/About';
import Header from '@/components/Header';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <div className='flex flex-col items-center px-4'>
      <Header />
      <SectionDivider />
      <main className=''>
        <About />
      </main>
    </div>
  );
}
