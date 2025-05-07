export function waveVariants(delay = 2) {
  return {
    wave: {
      rotate: [0, 20, -10, 20, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: delay,
      },
    },
  };
}
