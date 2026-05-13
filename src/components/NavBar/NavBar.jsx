import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import logo from "/portfoliologo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = "block py-2 px-3 text-[var(--text-body)] rounded md:p-0 hover:text-[#f28e63] hover:bg-[var(--bg-hover)] md:hover:bg-transparent transition-colors duration-300"

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 md:top-6 left-[4%] right-[4%] sm:left-[2.5%] sm:right-[2.5%] max-w-6xl mx-auto z-50 bg-[var(--bg-nav)] backdrop-blur-md border border-[var(--border)] rounded-xl md:rounded-2xl px-2 shadow-2xl"
      >
        <div className="max-w-screen-xl relative flex items-center justify-between mx-auto px-2 py-3 md:p-4">
          <a href="#Home" className="flex items-center group" aria-label="Prableen Singh - Full Stack Developer in India">
            <img 
              src={logo} 
              alt="Portfolio Logo" 
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </a>

          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 lg:gap-8">
            <li>
              <a href="#Home" className={linkClass} aria-current="page">Home</a>
            </li>
            <li>
              <a href="#About" className={linkClass}>About</a>
            </li>
            <li>
              <a href="#Work" className={linkClass}>Work</a>
            </li>
            <li>
              <a href="#Projects" className={linkClass}>Projects</a>
            </li>
            <li>
              <a href="/Prableen_s_Resume.pdf" download className={linkClass} title="Download my resume">Resume</a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[var(--text-muted)] rounded-lg md:hidden hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
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
          </div>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden px-2 pb-4`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 bg-[var(--bg-nav-mobile)] border border-[var(--border)] rounded-2xl">
            <li>
              <a href="#Home" className={linkClass} aria-current="page">Home</a>
            </li>
            <li>
              <a href="#About" className={linkClass}>About</a>
            </li>
            <li>
              <a href="#Work" className={linkClass}>Work</a>
            </li>
            <li>
              <a href="#Projects" className={linkClass}>Projects</a>
            </li>
            <li>
              <a href="/Prableen_s_Resume.pdf" download className={linkClass} title="Download my resume">Resume</a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
