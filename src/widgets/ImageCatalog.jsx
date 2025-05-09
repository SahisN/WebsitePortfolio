import { motion } from "framer-motion";

export function ImageCatalog({ image_src, height, width, name }) {
  return (
    <motion.a
      className="py-2"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image_src} width={width} height={height} alt={name} />
      <p className="text-center text-white">{name}</p>
    </motion.a>
  );
}
