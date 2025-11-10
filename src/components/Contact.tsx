/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import SectionHeader from './SectionHeader';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.02 }}
      variants={fadeUp}
      className='mt-32 mb-20 scroll-mt-10'
      id='contact'
    >
      <SectionHeader
        subtitle='Contact'
        title={`Let's Make Something Awesome Together`}
      />

      <div className='flex justify-center mt-16'>
        <div
          className='
            w-full
            border border-neutral-700 rounded-2xl 
            bg-neutral-900/50 
            p-10 sm:p-12 
            text-center 
            shadow-md hover:shadow-xl 
            transition-all duration-300
          '
        >
          <p className='text-neutral-300 text-lg sm:text-xl mb-8 leading-relaxed'>
            I’m always open to connecting, collaborating, or discussing exciting
            new opportunities. Feel free to reach out!
          </p>

          <Button
            asChild
            size='lg'
            className='
              text-base sm:text-lg 
              px-10 py-6 
              bg-white text-black 
              hover:bg-neutral-200 transition-colors
            '
          >
            <a
              href='https://www.linkedin.com/in/rudragaur3601/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Connect on LinkedIn
            </a>
          </Button>

          <div className='flex flex-wrap items-center  justify-center gap-4 mt-8 text-sm text-neutral-400'>
            <a
              href='mailto:your.email@example.com'
              className='hover:text-white transition-colors'
            >
              rudrag9870@gmail.com
            </a>
            <span>•</span>
            <a
              href='https://github.com/rudragaur-01'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
