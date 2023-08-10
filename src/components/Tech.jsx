import React from "react";

import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          I have experience with a wide variety of technologies
        </p>
      </motion.div>
      <div className='flex flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-40 h-40 rounded-full px-4 py-4 items-center justify-center hover:bg-[#111130]' key={technology.name}>
            <img src={technology.icon} className='z-0'/>
          </div>
        ))}
      </div>
      <p className='text-center text-2xl text-primary font-bold mt-10'>And more...</p>
    </div>
  );
};

export default SectionWrapper(Tech, "");