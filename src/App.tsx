import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

export const App = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='flex flex-col w-full '>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Resume />
      <Testimonials />
      <Contact />
    </div>
  );
};
