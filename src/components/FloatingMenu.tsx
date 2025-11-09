import { useState } from 'react';
import { navLinks } from '@/constants';

import { cn } from '@/lib/utils';
const FloatingMenu = () => {
  const [active, setActive] = useState('');
  return (
    <nav className='fixed top-0 left-0 right-0 w-full flex justify-center py-4 sm:py-5 md:py-6 lg:py-6 xl:py-7 2xl:py-8 z-50 bg-transparent pointer-events-none'>
      <div className='bg-[var(--portfolio-bg-primary)] border border-[var(--portfolio-border-primary)] rounded-full flex items-center overflow-x-auto scrollbar-hide shadow-lg pointer-events-auto'>
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.link}
              onClick={() => setActive(link.link)}
              className={cn(
                'text-[var(--portfolio-text-muted)] flex items-center justify-center hover:text-primary transition-colors duration-200 px-3 py-2.5 sm:px-4 sm:py-3 md:px-4 md:py-3 lg:px-5 lg:py-3.5 xl:px-6 xl:py-4 2xl:px-7 2xl:py-4.5 flex-shrink-0',
                active === link.link &&
                  'text-primary bg-[var(--portfolio-bg-tertiary)]/50',
              )}
              title={link.label}
            >
              <Icon className='size-5 sm:size-5 md:size-5 lg:size-5 xl:size-6 2xl:size-6' />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default FloatingMenu;
