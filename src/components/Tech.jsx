import React, { lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles, motions } from "../utils";
import { technologies } from "../constants";

const BallCanvas = lazy(() => import("../canvas/BallCanvas"));
const TechCard = lazy(() => import("./TechCard"))

const determinateToRender = () => {
  // Check if it's mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  console.log(isMobile);

  if (isMobile) {
    return TechCard
  } else {
    return BallCanvas
  }
}

// Rendering the technologies
const Tech = () => {
  const ballSize =
    "h-12 s:h-16 ls:w-24 sm:h-[6.5rem] md:h-[8.5rem] 1k:h-[10.3rem] 2k:h-[12.2rem] 4k:h-[20.5rem] w-12 s:w-16 ls:w-24 sm:w-[6.5rem] md:w-[8.5rem] 1k:w-[10.3rem] 2k:w-[12.2rem] 4k:w-[20.5rem]";
  const ballGap = "gap-0 s:gap-2 md:gap-4 xl:gap-x-16 2k:gap-x-10 4k:gap-2"

  const ComponentToRender = determinateToRender()

  return (
    <>
      <motion.p
        variants={motions.fadeIn("spring", "down", 0.5, 0.75)}
        className={`${styles.portfolioMainText} pt-12 pb-8 flex justify-center text-white neon-shadow tracking-widest 2k:mt-20 4k:mt-32 text`}
      >
        Skills
      </motion.p>
      <div className={`${ballGap} flex flex-wrap justify-center items-center`}>
        {technologies.map((technology, index) => (
          <div key={index} className={`${ballSize}`}>
            <ComponentToRender technology={technology} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;
