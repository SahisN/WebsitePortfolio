import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utility/projectData";

const ProjectPage = () => {
  return (
    <div className="px-[25px] py-[25px] h-screen bg-black">
    <NavBar pageNo={1} />
    <div className="py-[20px]">
      <div className="border-t-2 border-orange-400 w-24 my-4"></div>
    </div>

      <div className="py-[30px] grid grid-cols-2 space-y-6">
          {projects.map((project) => (
            <ProjectCard title={project.title} description={project.description} tools={project.tools} image_src={project.image} link={project.link}/>
          ))}
          
      </div>
    </div>
  );
};

export default ProjectPage;
