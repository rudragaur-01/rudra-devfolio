import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Turning Complex Problems into Seamless Solutions'
      />
      <div className='mt-10'>
        <motion.p
          variants={fadeUp}
          className=' text-neutral-300'
        >
          I’m <span className='text-white font-medium'>Rudra Gaur</span>, a{' '}
          <span className='text-white font-medium'>Full Stack Developer</span>{' '}
          based in <span className='text-white font-medium'>Delhi, India</span>.
          I specialize in building reliable and scalable web applications that
          balance <span className='text-primary'>performance</span> and{' '}
          <span className='text-primary'>design</span>. With hands-on experience
          in both frontend and backend development, I focus on creating products
          that are intuitive, efficient, and maintainable.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className='mt-2 text-neutral-300'
        >
          My toolkit includes{' '}
          <span className='text-white font-medium'>React</span>,{' '}
          <span className='text-white font-medium'>Next.js</span>,{' '}
          <span className='text-white font-medium'>Node.js</span>, and{' '}
          <span className='text-white font-medium'>Strapi CMS</span>, paired
          with <span className='text-white font-medium'>PostgreSQL</span> and{' '}
          <span className='text-white font-medium'>MongoDB</span> for data
          management. I’ve built and optimized full-stack platforms integrating{' '}
          <span className='text-primary'>Stripe payments</span>, RESTful APIs,
          and CMS workflows—delivering seamless user experiences and efficient
          content management.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className='mt-2 text-neutral-300'
        >
          I’ve contributed to real-world projects like event management systems,
          digital museums, and financial dashboards, collaborating within agile
          teams to ship features faster and mentor junior developers. I’m driven
          by curiosity, continuous learning, and the pursuit of clean,
          purposeful code that makes an impact.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};

export default About;
