const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      scale: 1.5,
    },
    show: {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const bounceIn = (delay: number) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: delay,
      },
    },
  };
};

const slideIn = (
  direction: "left" | "right" | "up" | "down",
  delay: number
) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

const hoverScale = {
  hidden: { scale: 1 },
  show: { scale: 1.05 },
};

const hoverEffect = {
  whileHover: { scale: 1.1 },
};

const blurIn = (delay: number = 0) => {
  return {
    hidden: { filter: "blur(10px)", opacity: 0 },
    show: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

const staggeredFadeIn = (delay: number = 0, delayChildren: number = 0) => {
  return {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        staggerChildren: delayChildren, // Each child appears with a delay of 0.2s
        // when: "beforeChildren", // Parent animates first, then children
      },
    },
  };
};

const scrambleText = (delay: number = 0) => {
  return {
    hidden: { opacity: 0, filter: "blur(5px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

// const rocketAnimation = {
//   hidden: { scale: 1, rotate: 10, opacity: 0 },
//   animate: {
//     scale: [1, 1.25, 1.5, 1.75, 2, 5],
//     rotate: [10, -15, 5, -10, 0, 0],
//     x: [0, 0, 0, 0, 0, "100vw"],
//     y: [0, 0, 0, 0, 0, "-100vh"],
//     opacity: [0, 1, 1, 1, 1, 1], // Fade in first
//     transition: {
//       duration: 5,
//       ease: "easeInOut",
//       times: [0, 0.05, 0.1, 0.15, 0.2, 1], // Matches keyframe percentages
//     },
//   },
// };

const rocketAnimation = {
  hidden: { scale: 1, rotate: 10, opacity: 0 },
  animate: {
    scale: [1, 1.25, 1.5, 1.75, 2, 5, 4.8, 5.2, 4.9, 0],
    rotate: [10, -15, 5, -10, 0, 0, 5, -5, 3, 0],
    x: [0, 0, 0, 0, 0, "100vw", "99vw", "101vw", "100vw"],
    y: [0, 0, 0, 0, 0, "-100vh", "-98vh", "-102vh", "-100vh"],
    opacity: [0, 1, 1, 1, 1, 1, 0.5, 0.2, 0.8, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      times: [0, 0.05, 0.1, 0.15, 0.2, 0.8, 0.85, 0.9, 0.9, 1],
    },
  },
};

export {
  blurIn,
  bounceIn,
  fadeIn,
  hoverEffect,
  hoverScale,
  rocketAnimation,
  scrambleText,
  slideIn,
  staggeredFadeIn,
};
