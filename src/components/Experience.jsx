import { styles, motions } from "../utils";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import React, { useEffect, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience, index }) => {
  const [resolvedExperienceIcon, setResolvedExperienceIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const timeImageSize = "w-14 xl:w-[4.5rem] 2k:w-28 4k:w-40"

  const { date, iconBg, icon, company_name, title, points } = experience;
  const isOdd = index % 2 === 0;

  useEffect(() => {
    const loadExperienceIcon = async () => {
      try {
        // Resolve the image by calling the import function
        const resolvedImageModule = await icon();
        // Extracts the URL of resolved image
        const resolvedImageUrl = resolvedImageModule.default;
        // Updates the state with the image URL
        setResolvedExperienceIcon(resolvedImageUrl);
      } catch (error) {
        console.error("Image load error: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadExperienceIcon();
  }, []);

  return (
    // Container
    <motion.div
      variants={motions.fadeIn("spring", "down", 0.8 * index, 1)}
      className={`relative ${
        isOdd ? "left-container" : "right-container"
      } w-full lg:w-1/2`}
    >
      {/* Image */}
      <motion.div
        variants={motions.fadeIn("spring", "down", 0.8 * index, 1)}
        className={`absolute ${isOdd ? "left-img" : "right-img"} ${
          timeImageSize
        } p-2 border-4 4k:border-[0.7rem] rounded-full  z-[5]`}
        style={{ background: iconBg }}
      >
        {isLoading ? null : (
          <img
            src={resolvedExperienceIcon}
            alt={company_name}
            className={timeImageSize}
            loading="lazy"
          />
        )}
      </motion.div>
      {/* Text box */}
      <div className="relative py-5 px-8 xl:py-8 xl:px-12 2k:py-12 2k:px-20 4k:py-16 4k:px-28 bg-leveled-700 border-b-[5px] rounded-lg">
        <h3 className={`${styles.portfolioSubText} text-white neon-shadow`}>
          {title}
        </h3>
        <p
          className={`${styles.portfolioSmallerText} -mt-1 pb-3 2k:pb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-neon to-black`}
        >
          {company_name}
        </p>
        <ul className="list-disc pb-3 2k:pb-10 text-cyan-100">
          {points.map((point, index) => (
            <li
              className={`${styles.portfolioSmallerText} ml-4 2k:ml-12`}
              key={`experience-point-${index}`}
            >
              {point}
            </li>
          ))}
        </ul>
        <p className={`${styles.portfolioSmallerText} text-leveled-50`}>
          {date}
        </p>
        {/* Arrow */}
        <div
          className={`${
            isOdd ? "left-arrow" : "right-arrow"
          } absolute top-6 4k:top-14 rotate-45 w-6 h-6 2k:w-14 2k:h-14 4k:w-16 4k:h-16 bg-leveled-700 `}
        />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={motions.textVariants()}>
        <p className={`${styles.portfolioSubText} text-leveled-300`}>
          What I have done so far
        </p>
        <h2 className={`${styles.portfolioMainText} text-white neon-shadow`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-10 2k:mt-24 w-full">
        <motion.div
          variants={motions.fadeIn("spring", "down", 1, 1)}
          className={`absolute top-0 h-full w-2 xl:w-3 2k:w-5 4k:w-6 bg-gradient-to-b from-iced-400 from-10% via-leveled-400 to-leveled-700 to-80% left-3 lg:left-[49.4%] xl:left-[49.4%] 4k:left-[49.5%]`}
        />
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work")
