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
      className='pt-10 md:pt-5:'
      id='hero'
    >
      <SectionHeader subtitle='Introduction' />

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16'
      >
        I'm <span className='text-primary'>Rudra </span>a Full Stack Developer
        crafting seamless digital experiences
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2'
      >
        <Button asChild>
          <a href='#project'>My Projects</a>
        </Button>
        <Button variant='outline'>Download CV</Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
