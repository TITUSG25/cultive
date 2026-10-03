// Shared scroll-triggered directional entrance animation for card grids.
// Cards fly in from alternating directions, then settle into the grid.

const entranceOffsets = [
  { x: -120, y: 0, rotate: -4 }, // from left
  { x: 0, y: -100, rotate: 3 }, // from top
  { x: 0, y: 120, rotate: -3 }, // from bottom
  { x: 100, y: -80, rotate: 4 }, // from top-right
  { x: 120, y: 0, rotate: -4 }, // from right
];

const getEntrance = (index) => {
  const base = entranceOffsets[index % entranceOffsets.length];
  if (typeof window === "undefined") return base;
  const width = window.innerWidth;
  if (width < 768) return { x: 0, y: 48, rotate: 0 };
  if (width < 1280) return { x: base.x * 0.55, y: base.y * 0.55, rotate: base.rotate * 0.5 };
  return base;
};

export const cardEntrance = (shouldReduceMotion, index = 0) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, ...getEntrance(index) },
  whileInView: { opacity: 1, x: 0, y: 0, rotate: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: shouldReduceMotion
    ? { duration: 0 }
    : { duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] },
});
