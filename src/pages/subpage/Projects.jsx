import { PROJECTS } from "../../const";
import { ProjectCard } from "../../widgets/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-white text-6xl font-semibold py-20">My Projects</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
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
    </section>
  );
}
