import React from "react";
import { motion } from "framer-motion";

// Higher-order component
const Wrapper = (Component, idName) => {
  const wrapperPadding =
    "px-6 sm:px-10 2k:px-20 4k:px-24 py-6 2k:py-10 4:py-12";
  const wrapperContainer =
    "max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl 1k:max-w-screen-xl 2k:max-w-screen-1k 4k:max-w-screen-2k";
  const navReferencePosition = "pb-16 s:pb-[6.25rem] 2k:pb-44 4k:pb-52";

  return function AnimatedSection() {
    return (
      <motion.section
        // staggerContainer from motion.js
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        className={`${wrapperPadding} ${wrapperContainer}`}
      >
        {/* Reference for nav */}
        <span className={`${navReferencePosition}`} id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default Wrapper;
