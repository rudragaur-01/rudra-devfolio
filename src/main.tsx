/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { App } from '@/App';
import FloatingMenu from '@/components/FloatingMenu';

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
    <div className='min-h-screen w-full  mx-auto flex flex-col'>
      <Sidebar />
      <div className='hidden md:block'>
        <FloatingMenu />
      </div>

      <div className=' w-full lg:flex lg:justify-center lg:items-start  px-4 pt-20 lg:px-6 xl:px-8  sm:pt-24 md:pt-28 lg:pt-32'>
        <div className='flex-1 mx-auto max-w-7xl 3xl:max-w-[120rem]'>
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
