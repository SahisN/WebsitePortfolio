import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="flex items-center">
      <h1 className="text-4xl font-bold text-white">
        Portfolio
        <span className="text-orange-400">.</span>
      </h1>

      {/** header */}
      <div className="w-full flex justify-center">
        <nav className="space-x-6">
          <a href="#about" className="text-white hover:text-orange-400">
            About
          </a>
          <Link to="/projects" className="text-white hover:text-orange-400">
            Project
          </Link>
          <a href="#skills" className="text-white hover:text-orange-400">
            Skills
          </a>
          <a href="#resume" className="text-white hover:text-orange-400">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
