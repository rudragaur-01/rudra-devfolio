/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import { SparkleIcon } from 'lucide-react';

const SectionHeader = ({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className='flex py-1.5 xl:py-2 2xl:py-2.5 gap-2 xl:gap-2.5 2xl:gap-3 border border-[var(--portfolio-border-primary)] rounded-sm w-32 xl:w-40 2xl:w-52 items-center justify-center text-sm xl:text-base 2xl:text-xl mb-4 sm:mb-5 md:mb-6 px-2 xl:px-3 2xl:px-4'
        >
          <SparkleIcon className='size-3 xl:size-4 2xl:size-6' />
          {subtitle}
        </motion.p>
      )}

      {title && (
        <motion.h2
          variants={fadeUp}
          className='text-4xl xl:text-5xl 2xl:text-6xl font-bold capitalize mt-4 xl:mt-6 2xl:mt-8 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl leading-tight'
        >
          {title}
        </motion.h2>
      )}
    </>
  );
};

export default SectionHeader;
