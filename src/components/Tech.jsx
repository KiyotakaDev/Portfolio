import React from "react";
import { motion } from "framer-motion";
import { styles, motions } from '../utils'

// Rendering the technologies
const Tech = () => {
  return (
    <>
      <motion.p
        variants={motions.fadeIn("spring", "down", 0.5, 0.75)}
        className={`${styles.portfolioMainText} pt-12 flex justify-center text-white neon-shadow tracking-widest 2k:mt-20 4k:mt-32 text`}
      >
        Skills
      </motion.p>
    </>
  );
};

export default Tech;