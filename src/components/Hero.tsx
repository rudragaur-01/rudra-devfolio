import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from './ui/button';
import { SparkleIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
     
      id='hero'
    >
      <SectionHeader subtitle='Introduction' />

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-semibold capitalize mt-6 xl:mt-8 2xl:mt-10 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl leading-tight xl:leading-tight 2xl:leading-tight'
      >
        I'm <span className='text-primary'>Rudra </span>a Full Stack Developer crafting seamless digital experiences
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-8 xl:mt-10 2xl:mt-12 flex gap-4 xl:gap-6'
      >
        <Button asChild className='text-base xl:text-lg 2xl:text-xl px-6 xl:px-8 2xl:px-10 py-6 xl:py-7 2xl:py-8'>
          <a href='#project'>My Projects</a>
        </Button>
        <Button variant='outline' className='text-base xl:text-lg 2xl:text-xl px-6 xl:px-8 2xl:px-10 py-6 xl:py-7 2xl:py-8'>Download CV</Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
