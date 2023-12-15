// Smaller devices step motion
const motions = {
  navLinksMotion: (type, delay, direction) => {
    return {
      open: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: type, delay: delay },
      },
      // Close direction
      closed: {
        x: direction === "left" ? 150 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 1,
        transition: { type: type },
      },
    };
  },

  // Text variant
  textVariants: (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      // Show animation
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  },

  // Fade in
  fadeIn: (type, direction, delay, duration) => {
    return {
      // Hide direction
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      // Show animation
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: type, delay: delay, duration: duration },
      },
    };
  },
};

export default motions;
