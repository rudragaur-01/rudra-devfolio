import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { statsData } from '@/constants';
const Stats = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.6)}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-10 2xl:gap-12 mt-20 xl:mt-24 2xl:mt-28'
      id='stats'
    >
      {statsData.map((stats, i) => {
        return (
          <motion.div
            key={i}
            variants={fadeUp}
            className='border border-neutral-700 flex justify-center items-center flex-col py-8 xl:py-10 2xl:py-12 px-4 xl:px-6 2xl:px-8 rounded-xl space-y-3 xl:space-y-4 2xl:space-y-5'
          >
            <p className='text-4xl xl:text-5xl 2xl:text-6xl capitalize font-bold lining-nums'>
              {stats.number}
            </p>
            <p className='text-neutral-300 text-base xl:text-lg 2xl:text-xl'>{stats.label}</p>
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default Stats;
