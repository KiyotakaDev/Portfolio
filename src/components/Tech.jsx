import React, { lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles, motions } from "../utils";
import { technologies } from "../constants";

const BallCanvas = lazy(() => import("../canvas/BallCanvas"));
const TechCard = lazy(() => import("./TechCard"));

const determinateToRender = () => {
  // Check if it's mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  console.log(isMobile);

  if (isMobile) {
    return TechCard;
  } else {
    return BallCanvas;
  }
};

// Rendering the technologies
const Tech = () => {
  const ballSize =
    "h-16 h-20 md:h-28 w-16 w-20 md:w-28";
  const ballGap = "gap-x-6 md:gap-x-10 gap-y-10 md:gap-y-16";

  const ComponentToRender = determinateToRender();

  return (
    <>
      <motion.p
        variants={motions.fadeIn("spring", "down", 0.5, 0.75)}
        className={`${styles.portfolioMainText} pt-12 pb-8 flex justify-center text-white neon-shadow tracking-widest 2k:mt-20 4k:mt-32 text`}
      >
        Skills
      </motion.p>
      <div
        className={`${ballGap} gap- flex flex-wrap justify-center items-center pb-10 md:pb-12`}
      >
        {technologies.map((technology, index) => (
          <motion.div
            variants={motions.fadeIn("spring", "right", 0.2 * index, 1)}
            key={index}
            className={`${ballSize}`}
          >
            <ComponentToRender technology={technology} styles={styles} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Tech;
