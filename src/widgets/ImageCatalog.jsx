import { delay, motion } from "framer-motion";
import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../lib/animations";

export function ImageCatalog({ image_src, height, width, name, index }) {
  return (
    <motion.a
      initial="hidden"
      animate="visible"
      variants={fadeIn(0.2 * index)}
      className="py-2"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image_src} width={width} height={height} alt={name} />
      <p className="text-center text-white">{name}</p>
    </motion.a>
  );
}
