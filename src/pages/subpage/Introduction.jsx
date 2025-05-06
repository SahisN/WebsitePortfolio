import { motion } from "framer-motion";
import { waveVariants } from "../../lib/motion";

export function Intro() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="">
        <motion.div className="text-center text-6xl text-white max-w-[800px]">
          <span className="text-center">
            Hello{" "}
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
              transition={{ duration: 2, repeatDelay: 6, repeat: Infinity }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
            , I'm Sahis Neupane, a software engineer.
          </span>
        </motion.div>

        <motion.p className="text-center text-white text-2xl text-gray-400 my-5 max-w-[800px] py-[15px]">
          I'm very Passionate about building user friendly solutions and
          committed to continuous learning and growth while delivering
          high-quality results.
        </motion.p>

        <motion.a className="py-2 justify-center text-center text-white text-xl cursor-pointer rounded-lg max-w-[200px] mx-auto block bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-600 hover:to-purple-800 hover:shadow-[0_0_10px_4px_rgba(128,0,128,0.7)] transition-all">
          Reach Out
        </motion.a>

        <div className="flex justify-center py-[20px] gap-[14px]">
          <motion.a
            className="py-2"
            href="https://github.com/sahisn"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="skills/github.svg" width={60} alt="github link" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sahisn/"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="skills/linkedin.svg" width={78} alt="linkedin link" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
