import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, socialLinks } from '@/constants';

const Sidebar = () => {
  const [active, setActive] = useState('#hero');
  const [open, setOpen] = useState(false);

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      {/* 👇 Only show menu button on mobile */}
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='m-4 fixed top-4 right-4 border-2 hover:border-primary z-[50] bg-neutral-800
          py-5 px-5 rounded-full hover:text-primary cursor-pointer md:hidden'
        >
          <MenuIcon size={30} />
        </Button>
      </SheetTrigger>

      {/* 👇 Sidebar content */}
      <SheetContent
        side='right'
        className='w-84 bg-neutral-900 text-white py-6 pl-10 md:hidden flex flex-col justify-between'
      >
        <div>
          <SheetTitle className='text-lg font-semibold'>MENU</SheetTitle>

          <nav className='flex flex-col gap-4 mt-6'>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  href={link.link}
                  key={link.label}
                  onClick={() => {
                    setActive(link.link);
                    setOpen(false);
                  }}
                  className={cn(
                    'text-neutral-300 flex items-center gap-2 hover:text-primary transition-colors duration-200 text-base',
                    active === link.link && 'text-primary',
                  )}
                >
                  <Icon className='size-4' /> {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* 👇 This section sticks to bottom */}
        <div className='mt-10'>
          <p className='pb-2'>SOCIALS</p>
          <div className='flex gap-3 text-neutral-500'>
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  onClick={() => setOpen(false)}
                  className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
                >
                  <Icon className='size-4' />
                </a>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
