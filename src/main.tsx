import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { App } from '@/App';
import Sidebar from '@/components/Sidebar';
import FloatingMenu from '@/components/FloatingMenu';
import Profile from '@/components/Profile';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen lg:flex lg:justify-start lg:items-start lg:gap-10 mx-auto'>
      <Sidebar />

      {/* Profile Sidebar */}
      <div className='hidden lg:block lg:sticky lg:top-0 my-10 lg:w-100 2xl:w-96 border border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg'>
        <Profile />
      </div>

      {/* Main Content */}
      <div className='flex-1'>
        <App />
      </div>

      {/* Floating Menu */}
      <div className='lg:w-16 xl:w-24 2xl:w-32'>
        <FloatingMenu />
      </div>
    </div>
  </StrictMode>,
);
