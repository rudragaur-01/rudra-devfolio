/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { projectsData } from '@/constants';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.02 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10 3xl:pt-30'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My Featured Projects'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 xl:mt-6 2xl:mt-8 text-neutral-400 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl  md:text-left mx-auto md:mx-0 leading-relaxed text-base xl:text-lg 2xl:text-xl'
      >
        I've worked on a wide variety of projects — from sleek, responsive
        websites to dynamic full-stack applications. Here's a glimpse of some
        key highlights.
      </motion.p>
      <motion.div
        className='grid md:grid-cols-2 3xl:grid-cols-3 gap-9 xl:gap-12 2xl:gap-14 mt-12 xl:mt-16 2xl:mt-20'
        whileInView='visible'
        initial='hidden'
        viewport={{ once: true, amount: 0.02 }}
        variants={staggerContainer(0.3)}
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
            ownership={project.ownership}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
