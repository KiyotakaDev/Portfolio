import React, { lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles, motions } from "../utils";
import { technologies } from "../constants";

const BallCanvas = lazy(() => import("../canvas/BallCanvas"));
const TechCard = lazy(() => import("./TechCard"));

const determinateToRender = () => {
  // Check if it's mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return TechCard;
  } else {
    return BallCanvas;
  }
};

// Rendering the technologies
const Tech = () => {
  const ballSize =
    "h-16 h-20 md:h-28 lg:h-32 2k:h-52 4k:h-64 w-16 w-20 md:w-28 lg:w-32 2k:w-52 4k:w-64";
  const ballGap =
    "gap-x-6 md:gap-x-10 gap-y-10 2k:gap-x-32 md:gap-y-16 2k:gap-y-36";

  const ComponentToRender = determinateToRender();

  return (
    <>
      <motion.p
        variants={motions.fadeIn("spring", "down", 0.5, 0.75)}
        className={`${styles.portfolioMainText} pt-12 pb-8 flex justify-center text-white neon-shadow tracking-widest 2k:mt-20 4k:mt-32`}
      >
        Skills
      </motion.p>
      <div
        className={`${ballGap} flex flex-wrap justify-center items-center pb-10 md:pb-12 2k:pb-40 4k:pb-64`}
      >
        {technologies.map((technology, index) => (
          <motion.div
            variants={motions.fadeIn("spring", "right", 0.2 * index, 1)}
            key={index}
            className={ballSize}
          >
            <ComponentToRender technology={technology} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Tech;
