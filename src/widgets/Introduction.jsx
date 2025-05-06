import { motion } from "framer-motion";

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
            Hello <motion.span>👋</motion.span>, I'm Sahis Neupane, a software
            engineer.
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
      </div>
    </motion.div>
  );
}
