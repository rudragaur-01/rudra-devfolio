/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import SectionHeader from './SectionHeader';
import { education, experience, tools } from '@/constants';
import ExpCard from './ExpCard';
import ToolCard from './ToolCard';

const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.03 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10 3xl:pt-30'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education and practical Experience'
      />
      <motion.p
        variants={fadeUp}
        className='mt-12 xl:mt-16 2xl:mt-20 text-neutral-300 text-base xl:text-lg 2xl:text-xl'
      >
        A quick overview of my education and professional experience
      </motion.p>
      <div className='grid gap-x-8 xl:gap-x-12 2xl:gap-x-16 my-16 xl:my-20 2xl:my-24 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-10 xl:mb-12 2xl:mb-14'>
            Education
          </h2>
          <div className='space-y-10 xl:space-y-12 2xl:space-y-14 border-l border-neutral-700 pl-6 xl:pl-8 2xl:pl-10'>
            {education.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h2 className='text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-10 xl:mb-12 2xl:mb-14'>
            Work Experience
          </h2>
          <div className='space-y-10 xl:space-y-12 2xl:space-y-14 border-l border-border-700 pl-6 xl:pl-8 2xl:pl-10'>
            {experience.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='my-16 xl:my-20 2xl:my-24'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-10 xl:mb-12 2xl:mb-14 capitalize'
        >
          Tools & Technologies
        </motion.h2>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className='grid grid-cols-2 gap-6 xl:gap-8 2xl:gap-10 sm:grid-cols-3 md:grid-cols-5'
        >
          {tools.map((tool, i) => (
            <ToolCard
              key={i}
              tool={tool}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
