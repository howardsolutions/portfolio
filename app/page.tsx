import About from '@/components/About';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className='flex flex-col items-center px-4'>
      <Header />
      <SectionDivider />
      <main className=''>
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
