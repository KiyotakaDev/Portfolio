import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles, motions } from "../utils";
import { navLinks } from "../constants";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NavLinks = ({
  ulStyle,
  active,
  setActive,
  toggle,
  setToggle,
  direction,
  animate,
}) => {
  return (
    <ul className={`${ulStyle}`}>
      {navLinks.map((link, index) => (
        <motion.li
          variants={motions.navLinksMotion("spring", 0.5 * index, direction)}
          animate={animate}
          key={index}
          className={`${
            active == link.name ? "text-leveled-400" : "text-iced-200"
          } hover:text-leveled-400`}
          onClick={() => {
            setActive(link.name);
            setToggle ? setToggle(toggle) : null;
          }}
        >
          <a href={`#${link.id}`} children={link.name} />
        </motion.li>
      ))}
    </ul>
  );
};

// Component for Hamburger to X svg transition
const ToggleMenu = ({ toggle, setToggle }) => {
  return (
    // Motion animations
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setToggle(!toggle)}
    >
      {/* svg */}
      <svg width="40" height="35" viewBox="0 0 22 22">
        {/* First stroke path and diagonal animation top-right to bottom-left */}
        <motion.path
          variants={{
            // closed: Straight stroke
            closed: { d: "M 2 2.5 L 20 2.5" },
            // open: Diagonal stroke
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          animate={toggle ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Second stroke path and disappear motion */}
        <motion.path
          // One straight stroke
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={toggle ? "open" : "closed"}
          transition={{ duration: 0.5 }}
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Third stroke path and diagonal animation bottom-right to top-left */}
        <motion.path
          variants={{
            // closed: Straight stroke
            closed: { d: "M 2 16.346 L 20 16.346" },
            // open: Diagonal stroke
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          animate={toggle ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </motion.button>
  );
};

const NavBar = () => {
  const { scrollY } = useScroll();

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    latest > previous && latest > 150 ? setHidden(true) : setHidden(false);
  });

  return (
    <motion.nav
      variants={{
        show: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "show"}
      className={`${styles.navPadding} z-40 fixed top-0 left-0 w-full flex items-center bg-leveled-950 backdrop-filter backdrop-blur-sm bg-opacity-10`}
    >
      {/* Navbar bigger devices */}
      <div className="w-full flex justify-between">
        {/* Portfolio head */}
        <Link
          className="flex items-center gap-4"
          to="/"
          onClick={() => {
            scrollTo(0, 0), setActive("");
          }}
        >
          <img
            src="./logo.png"
            alt="logo"
            className={`${styles.portfolioImg} rounded-full object-contain`}
            loading="lazy"
          />
          <p
            className={`${styles.portfolioMainText} text-white font-extrabold tracking-wider hidden s:block`}
          >
            Kiyotaka.dev
          </p>
        </Link>

        {/* Nav links for bigger devices */}
        <NavLinks
          ulStyle={`${styles.portfolioLinkText} gap-7 hidden flex-row md:flex font-bold tracking-wider items-center`}
          active={active}
          setActive={setActive}
        />
        {/* End of navbar for bigger devices */}

        {/* Navbar for smaller devices */}
        <div className="flex md:hidden flex-col justify-end items-center">
          {/* Hamburguer to X */}
          <ToggleMenu toggle={toggle} setToggle={setToggle} />
          <motion.div
            variants={motions.navLinksMotion("spring", 0, "left")}
            animate={hidden ? "closed" : toggle ? "open" : "closed"}
            className={`${
              toggle ? "flex" : ""
            } bg-leveled-950 bg-opacity-0 backdrop-filter backdrop-blur-sm p-6 absolute top-24 right-0  min-w-fit z-10 rounded-bl-lg`}
          >
            <NavLinks
              ulStyle={
                "list-none flex justify-end items-center w-full flex-col gap-4 text-3xl"
              }
              active={active}
              setActive={setActive}
              toggle={toggle}
              setToggle={setToggle}
              direction="left"
              animate={hidden ? "closed" : toggle ? "open" : "closed"}
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
