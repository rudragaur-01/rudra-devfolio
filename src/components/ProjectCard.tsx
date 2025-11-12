/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';
import { Github, Globe } from 'lucide-react';

const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
  ownership,
}: ProjectType) => {
  const isGithub = projectLink?.includes('github.com');

  return (
    <motion.div
      variants={fadeUp}
      className='group block overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900/40 hover:bg-neutral-800/60 transition-all duration-300'
    >
      {/* Image Section */}
      <div className='relative overflow-hidden rounded-t-xl'>
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105'
        />

        <span
          className={`absolute top-3 right-3 px-4 py-2 rounded-full text-xs font-semibold shadow-md transition
            ${ownership === 'personal' ? 'bg-white text-black' : ''}
            ${ownership === 'company' ? 'bg-black text-white' : ''}
            ${ownership === 'freelance' ? 'bg-white text-black' : ''}
  `}
        >
          {ownership === 'personal'
            ? 'Personal'
            : ownership === 'company'
              ? 'Company'
              : 'Freelance'}
        </span>
      </div>

      {/* Content Section */}
      <div className='flex flex-col p-5 space-y-4'>
        <div>
          <h3 className='text-white text-lg xl:text-xl 2xl:text-2xl font-semibold mb-1 group-hover:text-primary transition'>
            {title}
          </h3>
          <p className='text-sm text-neutral-400'>
            {ownership === 'personal'
              ? 'A personal project built for learning and experimentation.'
              : ownership === 'company'
                ? 'A company project developed as part of a professional team.'
                : 'A freelance project built for a client.'}
          </p>
        </div>

        {/* Tags + Button */}
        <div className='flex justify-between items-center flex-wrap gap-3 pt-2'>
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

          {projectLink && (
            <a
              href={projectLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-100 px-3 py-1.5 text-xs sm:text-sm font-medium text-black transition hover:bg-primary hover:text-black'
            >
              {isGithub ? (
                <>
                  <Github className='w-4 h-4' /> GitHub
                </>
              ) : (
                <>
                  <Globe className='w-4 h-4' /> Website
                </>
              )}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
