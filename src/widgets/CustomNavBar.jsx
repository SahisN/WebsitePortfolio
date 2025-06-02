export function CustomNavBar() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-transparent via-gray-800 to-transparent flex justify-center items-center py-3 w-full">
      <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full h-auto bg-[rgba(3,0,20,0.37)] px-[10px] py-[10px] rounded-full text-gray-200">
          <a
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 rounded-full text-lg cursor-pointer"
          >
            About Me
          </a>
          <a
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 rounded-full text-lg cursor-pointer"
          >
            Skills
          </a>
          <a
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 rounded-full text-lg cursor-pointer"
          >
            Projects
          </a>
          <a
            href="https://github.com/sahisn/websiteportfolio"
            className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 rounded-full text-lg cursor-pointer"
          >
            <img src="web-programming.png" width="35px" alt="source code" />
          </a>
        </div>
      </div>
    </div>
  );
}
