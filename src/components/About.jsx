import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../Utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
       <div
  options={{
    max: 45,
    scale: 1,
    speed: 450
  }}
  className="bg-tertiary rounded-[20px] py-5 px-22 min-h-[290px] flex justify-evenly items-center flex-col"
>
  <img src={icon} alt={title} className="w-25 h-25 object-contain" />
  <h3 className="text-white text-[30px] font-bold text-center">{title}</h3>
</div>




      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        initial="hidden" // Add initial animation state
        animate="visible" // Add animate animation state
        variants={fadeIn} // Add animation variants
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled DevOps engineer and software developer with extensive experience in React, Node.js, Three.js,
        JavaScript, TypeScript, and multi-cloud environments. I specialize in developing efficient, scalable, and
        user-friendly solutions that solve real-world problems. With a proven track record of collaborating closely with
        clients, I ensure that the solutions I create align with their goals. Whether it's front-end development using
        React and Three.js or implementing DevOps practices in multi-cloud environments, I deliver high-quality results.
        Let's work together to bring your ideas to life and drive success through innovative solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper (About, 'about')
