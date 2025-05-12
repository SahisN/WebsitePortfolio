import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function ProjectCard({
  project_image,
  project_title,
  project_description,
  project_link,
}) {
  <motion.a
    href={project_link}
    className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
  >
    <img src={project_image} alt={project_title} />
    <div className="relative p-4">
      <h1 className="text-2xl font-semibold text-white">{project_title}</h1>
      <p className="mt-2 text-gray-300">{project_description}</p>
    </div>
  </motion.a>;
}
