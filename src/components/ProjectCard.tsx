import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';

const ProjectCard = ({ imgSrc, projectLink, tags, title }: ProjectType) => {
  return (
    <motion.a
      href={projectLink}
      target='_blank'
      rel='noopener noreferrer'
      variants={fadeUp}
      className='group relative block overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900/20 hover:bg-neutral-800/40 transition-all duration-300'
    >
      {/* Image */}
      <img
        src={imgSrc}
        alt={title}
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
      />

      {/* Overlay gradient */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-500'></div>

      {/* Content */}
      <div className='absolute bottom-0 left-0 right-0 p-5'>
        <h3 className='text-white text-lg font-semibold mb-3 group-hover:text-primary transition'>
          {title}
        </h3>

        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='bg-neutral-800/70 text-neutral-300 py-1 px-2 rounded-md text-xs sm:text-sm hover:bg-primary hover:text-black transition'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
