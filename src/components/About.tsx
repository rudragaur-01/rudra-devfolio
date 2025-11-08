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
        title='TransForming Complexity into effortless design'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        recusandae dicta perspiciatis eaque suscipit, distinctio quidem nostrum,
        ipsam dolor totam voluptas placeat itaque eius accusantium, ipsa
        exercitationem qui esse consectetur!
      </motion.p>
      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        recusandae dicta perspiciatis eaque suscipit, distinctio quidem nostrum,
        ipsam dolor totam voluptas placeat itaque eius accusantium, ipsa
        exercitationem qui esse consectetur!
      </motion.p>
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
