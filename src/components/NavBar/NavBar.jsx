import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 md:top-6 left-0 right-0 mx-auto w-[92%] sm:w-[95%] max-w-6xl z-50 bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl px-2 shadow-2xl"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-3 md:p-4">
          <a href="#Home" className="flex flex-col rtl:space-x-reverse text-left group" aria-label="Prableen Singh - Full Stack Developer in India">
            <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap text-white transition-colors duration-300 group-hover:text-gray-200">
              Prableen <span className="text-[#f28e63]">Singh</span>
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap text-gray-400">
              Full Stack Developer <span className="hidden sm:inline">| India</span>
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 bg-[#1a1a1a] md:bg-transparent border border-white/10 md:border-0 rounded-2xl">
              <li>
                <a
                  href="#Home"
                  className="block py-2 px-3 text-gray-300 rounded md:p-0 hover:text-[#f28e63] hover:bg-white/5 md:hover:bg-transparent transition-colors duration-300"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="block py-2 px-3 text-gray-300 rounded md:p-0 hover:text-[#f28e63] hover:bg-white/5 md:hover:bg-transparent transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Work"
                  className="block py-2 px-3 text-gray-300 rounded md:p-0 hover:text-[#f28e63] hover:bg-white/5 md:hover:bg-transparent transition-colors duration-300"
                >
                  Work
                </a>
              </li>

              <li>
                <a
                  href="#Projects"
                  className="block py-2 px-3 text-gray-300 rounded md:p-0 hover:text-[#f28e63] hover:bg-white/5 md:hover:bg-transparent transition-colors duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="/Prableen_s_Resume.pdf" 
                  download
                  className="block py-2 px-3 text-gray-300 rounded md:p-0 hover:text-[#f28e63] hover:bg-white/5 md:hover:bg-transparent transition-colors duration-300"
                  title="Download my resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
