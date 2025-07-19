import { Link } from "react-router-dom";
import { PROJECTS } from "../../const";
import { ProjectCard } from "../../widgets/ProjectCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/animations";

export function Projects() {
  return (
    <div className="py-10">
      <section
        id="projects"
        className="flex flex-col items-center justify-center scroll-mt-[60px]"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.2)}
          className="text-white text-6xl font-semibold py-20"
        >
          My Projects
        </motion.h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.title}
              project_image={project.image}
              project_link={project.link}
              project_title={project.title}
              project_description={project.description}
            />
          ))}
        </div>
        <div className="mt-[30px]">
          <Link
            to="projects"
            className="px-[10px] py-[10px] justify-center text-center text-white text-xl cursor-pointer rounded-lg max-w-[200px] mx-auto block bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-600 hover:to-purple-800 hover:shadow-[0_0_10px_4px_rgba(128,0,128,0.7)] transition-all"
          >
            Check Out More Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
