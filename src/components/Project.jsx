import SectionWrapper from "../hoc/SectionWrapper";
import { styles, motions } from "../utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../constants";
import github from "/others/github.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const { name, description, image, tags, source_code_link, deploy_link } =
    project;

  const [resolvedProjectImage, setResolvedProjectImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjectImage = async () => {
      try {
        // Resolve the image by calling the import function
        const resolvedImageModule = await image();
        // Extracts the URL of resolved image
        const resolvedImageUrl = resolvedImageModule.default;
        // Updates the state with the image URL
        setResolvedProjectImage(resolvedImageUrl);
      } catch (error) {
        console.error("Image load error: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjectImage();
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["12.5deg", "-12.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["12.5deg", "-12.5deg"]
  );

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPercentage = mouseX / width - 0.5;
    const yPercentage = mouseY / height - 0.5;

    x.set(xPercentage);
    y.set(yPercentage);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // Card background
    <motion.div
      variants={motions.fadeIn("spring", "up", 0.7 * index, 1)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      className="p-2 sm:p-6 md:p-10 w-full xl:w-1/2 rounded-2xl bg-gradient-to-br from-leveled-600 to-leveled-800 to-50% mt-8"
    >
      {/* Cristal */}
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="inset-4 place-content-center bg-neon rounded-xl shadow-lg shadow-neon p-3 xl:p-10 bg-opacity-10"
      >
        {/* Project image */}
        <div
          style={{
            transform: "translateZ(100px)",
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full shadow-2xl"
        >
          {isLoading ? null : (
            <img
              src={resolvedProjectImage}
              alt="project_image"
              className="w-full h-full object-center object-cover rounded-lg"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-br from-slate-700 to-black w-12 2k:w-16 4k:w-24 h-12 2k:h-16 4k:h-24 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-5/6 h-5/6 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="sm:px-4 2k:px-10 4k:px-16">
          <h3
            className={`${styles.portfolioSubText} text-white py-4 sm:py-6 2k:py-12 4k:py-16 neon-shadow tracking-wider`}
          >
            {name}
          </h3>
          <p className={`${styles.portfolioSmallerText} text-white`}>
            {description}{" "}
            {deploy_link ? (
              <Link
                className="hover:text-neon transition-colors duration-300"
                to={deploy_link}
              >
                {"Got to deployment <-"}
              </Link>
            ) : null}
          </p>
        </div>

        <div className="mt-5 sm:p-6 2k:p-12 4k:p-20 flex flex-wrap gap-5">
          {tags.map((tag, index) => (
            <p
              key={index}
              className={`${styles.portfolioSmallerText} bg-clip-text text-transparent bg-gradient-to-br ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={motions.textVariants()}>
        <p className={`${styles.portfolioSubText} text-leveled-300`}>My work</p>
        <h2 className={`${styles.portfolioMainText} text-white neon-shadow`}>
          Projects
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-center items-center pb-28">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
