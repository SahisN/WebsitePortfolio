export function CustomNavBar() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-transparent via-gray-800 to-transparent flex justify-center items-center py-3">
      <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full h-auto bg-[rgba(3,0,20,0.37)]  px-[10px] py-[10px] rounded-full text-gray-200">
          <a
            href="#home"
            className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 rounded-full text-lg"
          >
            About Me
          </a>
          <a
            href="#news"
            className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 rounded-full text-lg"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 rounded-full text-lg"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 rounded-full text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
