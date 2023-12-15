import React, { lazy } from "react";
import { motions, styles } from "../utils";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Tech = lazy(() => import("./Tech"));

const About = () => {
  return (
    <>
      <motion.div variants={motions.textVariants()}>
        <p
          className={`${styles.portfolioSubText} text-leveled-300 tracking-wider`}
        >
          Introduction
        </p>
        <h2
          className={`${styles.portfolioMainText} text-white neon-text tracking-widest`}
        >
          Overview
        </h2>
      </motion.div>

      {/* Sub text */}
      <motion.p
        variants={motions.fadeIn("spring", "right", 0.1, 1)}
        className={`${styles.portfolioSubText} mt-2 text-iced-50`}
      >
        I'm a skilled software developer with experience in{" "}
        <span className="text-amber-300">JavaScript</span>, frameworks like{" "}
        <span className="text-iced-300">ReacJS</span>,{" "}
        <span className="text-emerald-300">Express.js</span> and{" "}
        <span className="text-indigo-300">Three.js.</span> I'm tenacious and
        energetic with a strong desire to keep learning.
      </motion.p>

      <Tech />
    </>
  );
};

export default SectionWrapper(About, "about");
