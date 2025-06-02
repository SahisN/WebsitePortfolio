import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <a href="#about-me" className="flex items-center">
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300">
            John Doe
          </div>
        </a>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 text-lg"
            >
              Home
            </a>
            <a
              href="#news"
              className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 text-lg"
            >
              News
            </a>
            <a
              href="#contact"
              className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700 text-lg"
            >
              Contact
            </a>
            <a
              href="#about"
              className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
          >
            Source Code
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>{" "}
      a{/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="#home"
              className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#news"
              className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700"
            >
              News
            </a>
            <a
              href="#contact"
              className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700"
            >
              Contact
            </a>
            <a
              href="#about"
              className="text-gray-100 px-4 py-3 text-base hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
