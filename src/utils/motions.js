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
  }
}

export default motions
