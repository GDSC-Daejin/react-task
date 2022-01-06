export const memberCardAnimate = {
  offView: {
    opacity: 0,
    y: 30,
  },
  onView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const listAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const categoryAnimate = {
  unHover: {
    clipPath: "inset(2% round 1%)",
    background: "#fff",
    transition: {
      duration: 0.3,
    },
    opacity: 1,
  },
  hovered: {
    clipPath: `inset(0% round 1%)`,
    background: "#f2f4f6",
    transition: {
      duration: 0.3,
    },
    opacity: 1,
  },
};
