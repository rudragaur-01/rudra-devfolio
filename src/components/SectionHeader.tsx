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
          className='flex items-center justify-center gap-2 py-1 mb-5 
               border border-neutral-600 rounded-sm 
               px-3 text-sm sm:text-base 
               w-full sm:w-auto max-w-xs sm:max-w-sm md:max-w-md 
               text-center'
        >
          <SparkleIcon size={15} />
          <span className='truncate sm:whitespace-normal'>{subtitle}</span>
        </motion.p>
      )}

      {title && (
        <motion.h2
          variants={fadeUp}
          className='text-4xl font-bold capitalize mt-2 md:max-w-3xl'
        >
          {title}
        </motion.h2>
      )}
    </>
  );
};

export default SectionHeader;
