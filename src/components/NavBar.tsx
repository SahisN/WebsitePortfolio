import { Link } from "react-router-dom";

interface props {
  pageNo: number;
}

const linkTitle = ["Home", "Project", "Resume"];
const link = [
  "/",
  "/projects",
  "https://docs.google.com/document/d/1X4qIh_f_rOgRqS4HHDS95Uy8DLl1Ytdy/edit?usp=sharing&ouid=101212552051483269170&rtpof=true&sd=true",
];

const NavBar = ({ pageNo }: props) => {
  return (
    <header className="flex items-center">
      <h1 className="text-4xl font-bold text-white">
        Portfolio
        <span className="text-orange-400">.</span>
      </h1>

      {/** header */}
      <div className="w-full flex justify-center">
        <nav className="space-x-6">
          {linkTitle.map((element, index) => {
            if (index == pageNo) {
              return (
                <Link
                  key={index}
                  className="text-orange-400 font-bold text-2xl"
                  to={link[index]}
                >
                  {element}
                </Link>
              );
            }

            return (
              <Link
                key={index}
                className="text-white hover:text-orange-400 text-2xl font-bold "
                to={link[index]}
              >
                {element}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
