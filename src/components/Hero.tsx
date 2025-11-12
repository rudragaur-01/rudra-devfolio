/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from './ui/button';
import SectionHeader from './SectionHeader';

const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      id='/'
    >
      <SectionHeader subtitle='Introduction' />

      <motion.div
        variants={fadeUp}
        className=' flex flex-col sm:flex-row items-center sm:items-start gap-8 mt-6'
      >
        {/* Profile Image */}
        <div className='md:w-1/3 flex justify-center items-center'>
          <img
            src='/profilePic.jpg'
            alt='Rudra Profile'
            className=' w-50 h-50 md:w-65 md:h-65 2xl:w-70 2xl:h-70 rounded-full object-cover '
          />
        </div>

        {/* Text Section */}
        <div className='lg:max-w-2xl xl:max-w-full text-center sm:text-start md:max-w-xl lg:w-full tracking-wider'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-white'>
            Code that <span className='text-red-500'>connects</span>, design
            that <span className='text-red-500'>inspires</span>.
          </h1>

          <h2 className='text-neutral-300 mt-4 text-base md:text-2xl font-medium  mx-auto md:mx-0 leading-relaxed'>
            I'm <span className='text-white font-semibold'>Rudra Gaur</span>, a
            Full Stack Developer crafting seamless, human-centered web
            experiences through design and technology.
          </h2>
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        variants={fadeUp}
        className='mt-8 flex justify-center '
      >
        <Button
          asChild
          className='text-base xl:text-lg 2xl:text-xl px-6 xl:px-8 2xl:px-10 py-6 xl:py-7 2xl:py-8'
        >
          <a href='#projects'>My Projects</a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
