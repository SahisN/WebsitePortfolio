import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
  return (
    <div className="px-[25px] py-[25px] h-screen bg-black">
    <NavBar pageNo={1} />
    <div className="py-[20px]">
      <div className="border-t-2 border-orange-400 w-24 my-4"></div>
    </div>

      <div className="py-[50px]">
          <ProjectCard description="ACM Flutter app aimed to help acm leaders and members stay up to date" title="ACM Calendar App" tools={['flutter', 'dart', 'panda', 'python']} key={0}/>
      </div>
    </div>
  );
};

export default ProjectPage;
