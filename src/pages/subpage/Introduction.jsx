import { motion } from "framer-motion";

export function Intro() {
  return (
    <section id="home" className="scroll-mt-[130px] py-7">
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
            committed to continuous learning and delivering high-quality
            results. During my internship at Lockheed Martin, I supported
            multiple on-site teams by maintaining and troubleshooting critical
            internal applications, while also providing direct technical support
            to resolve account and application issues.
          </motion.p>

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
    </section>
  );
}
