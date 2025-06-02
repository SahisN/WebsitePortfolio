import { BiArrowBack } from "react-icons/bi";
import { PROJECTS } from "../const";
import { ProjectCard } from "../widgets/ProjectCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function MoreProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <Link
        to="/"
        className="flex gap-6 text-white text-6xl font-semibold py-10"
      >
        <BiArrowBack />
        My Projects
      </Link>
      <div className="w-full px-10 py-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            project_image={project.image}
            project_link={project.link}
            project_title={project.title}
            project_description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
