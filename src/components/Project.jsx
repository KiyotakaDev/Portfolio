import SectionWrapper from "../hoc/SectionWrapper";
import { motions } from "../utils";
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
      className="rounded-2xl bg-gradient-to-br from-leveled-600 to-leveled-800 to-50% p-6 pb-10"
    >
      {/* Cristal */}
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="h-full flex flex-col justify-between border border-sky-300 bg-neon rounded-xl shadow-lg shadow-neon p-3 xl:p-6 bg-opacity-10"
      >
        {/* Image container */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(100px)",
          }}
          className=""
        >
          {isLoading ? null : (
            <img
              src={resolvedProjectImage}
              alt="project_image"
              className="rounded-2xl shadow-2xl object-scale-down"
              loading="lazy"
            />
          )}
          {/* Github */}
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(40px)",
            }}
            className="absolute inset-0 flex justify-end"
          >
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

        {/* Info container */}
        <div>
          <h3 className="sub-text text-white py-4 sm:py-6 2k:py-12 4k:py-16 neon-shadow tracking-wider">
            {name}
          </h3>
          {/* Info */}
          <div className="flex flex-col">
            {/* Project description */}
            <div>
              <p className="small-text text-white h-[5.5rem]">
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
            {/* Tags */}
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className={`small-text bg-clip-text text-transparent bg-gradient-to-br ${tag.id}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={motions.textVariants()}>
        <p className="sub-text text-leveled-300">My work</p>
        <h2 className="main-text text-white neon-shadow">Projects</h2>
      </motion.div>

      <div className="my-12 grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
