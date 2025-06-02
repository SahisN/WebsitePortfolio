import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../lib/animations";

export function Intro() {
  return (
    <section id="home" className="scroll-mt-[130px] py-7">
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div>
          <motion.div
            variants={slideInFromTop(0.5)}
            className="text-center text-6xl text-white max-w-[800px]"
          >
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

          <motion.p
            variants={slideInFromTop(1)}
            className="text-center text-white text-2xl text-gray-400 my-5 max-w-[800px] py-[15px] mx-auto leading-relaxed"
          >
            I graduated from California State University Los Angeles with a
            degree in Computer Science, where I discovered my passion for
            software engineering through hands-on projects and student-led
            initiatives. I became especially interested in building tools that
            solve real-world problems and support collaboration. During my
            internship at Lockheed Martin, I supported multiple on-site teams by
            maintaining and troubleshooting critical internal applications,
            while also providing direct technical support to resolve account and
            application issues. Additionally, I served as a leader in the
            Association for Computing Machinery (ACM), where I worked with
            fellow leaders to design and build a mobile app that helped members
            stay engaged with events and opportunities.
          </motion.p>

          <div className="flex justify-center py-[20px] gap-[14px]">
            <motion.a
              variants={slideInFromLeft(2)}
              className="py-2"
              href="https://github.com/sahisn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="social/github.svg" width={60} alt="github link" />
            </motion.a>

            <motion.a
              variants={slideInFromTop(2.5)}
              href="https://www.linkedin.com/in/sahisn/"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="social/linkedin.svg" width={78} alt="linkedin link" />
            </motion.a>

            <motion.a
              variants={slideInFromRight(2)}
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
