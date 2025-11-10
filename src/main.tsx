/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { App } from '@/App';
import FloatingMenu from '@/components/FloatingMenu';
import Profile from '@/components/Profile';
import Sidebar from './components/Sidebar';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const Root = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.location.hash && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className='min-h-screen w-full max-w-[1920px] mx-auto flex flex-col'>
      <Sidebar />
      <div className='hidden md:block'>
        <FloatingMenu />
      </div>

      <div className='flex-1 w-full lg:flex lg:justify-center lg:items-start lg:gap-8 xl:gap-10 px-4 pt-20 lg:px-6 xl:px-8  sm:pt-24 md:pt-28 lg:pt-32'>
        <div className='hidden lg:block lg:sticky lg:top-20 xl:top-24 2xl:top-28 w-80 xl:w-96 3xl:w-[600px] flex-shrink-0 border border-[var(--portfolio-border-primary)] bg-[var(--portfolio-bg-secondary)]/95 backdrop-blur-sm text-[var(--portfolio-text-primary)] rounded-xl shadow-xl'>
          <Profile />
        </div>

        <div className='flex-1 min-w-0 max-w-7xl'>
          <App />
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
