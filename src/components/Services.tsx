import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import SectionHeader from './SectionHeader';
import { services } from '@/constants';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='services'
    >
      <SectionHeader
        subtitle='Services'
        title='Building with Purpose & Precision'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-8 xl:gap-10 2xl:gap-12 mt-12 xl:mt-16 2xl:mt-20'
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
