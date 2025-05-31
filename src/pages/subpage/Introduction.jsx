import { motion } from "framer-motion";

export function Intro() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div>
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

        <motion.p className="text-center text-white text-2xl text-gray-400 my-5 max-w-[850px] py-[15px]">
          I'm passionate about building efficient, user-friendly solutions and
          committed to continuous learning and delivering high-quality results.
          During my internship at Lockheed Martin, I supported multiple on-site
          teams by maintaining and troubleshooting critical internal
          applications, while also providing direct technical support to resolve
          account and application issues.
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
            <img src="social/github.svg" width={60} alt="github link" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sahisn/"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="social/linkedin.svg" width={78} alt="linkedin link" />
          </motion.a>

          <motion.a
            href="mailto:sahisneupane23@gmail.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="social/gmail.svg" width={78} alt="gmail link" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
