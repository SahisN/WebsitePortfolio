import { motion } from "framer-motion";

export function Skills() {
  return (
    <motion.div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
      <div>
        <motion.div className="text-center text-6xl text-white max-w-[800px]">
          <span className="text-center">My Technology Stack</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
