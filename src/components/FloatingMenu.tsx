/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

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
                'text-[var(--portfolio-text-secondary)] flex items-center justify-center hover:text-primary transition-colors duration-200 px-4 py-2.5 sm:py-3 3xl:px-5 md:py-3 l lg:py-3.5  xl:py-4 2xl:py-4.5 3xl:py-6  flex-shrink-0',
                active === link.link &&
                  'text-primary bg-[var(--portfolio-bg-tertiary)]/50',
              )}
              title={link.label}
            >
              <Icon className='size-4  md:size-5 3xl:size-8' />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default FloatingMenu;
