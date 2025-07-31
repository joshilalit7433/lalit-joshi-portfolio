import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../ThemeContext";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [btn, setBtn] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleBtn = () => setBtn(!btn);

  return (
    <nav className="sticky top-4 z-50 px-4 lg:px-8">
      <div className="w-full max-w-7xl mx-auto bg-black dark:bg-white rounded-full   py-4 px-6 flex items-center justify-between">
        {/* Left: Name */}
        <p className="text-lg lg:text-2xl font-bold font-logo tracking-wide text-white dark:text-black">
          Lalit Joshi
        </p>

        {/* Center Nav Links (Desktop Only) */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm lg:text-base font-medium font-[Montserrat] text-white dark:text-black">
          {["main", "education", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="text-blue-500 underline"
                className="cursor-pointer hover:underline underline-offset-8"
              >
                {section.toUpperCase()}
              </Link>
            </li>
          ))}
          {/* Resume link opens PDF from public folder */}
          <li>
            <a
              href="/Lalit%20Joshi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline underline-offset-8"
            >
              RESUME
            </a>
          </li>
        </ul>

        {/* Theme Toggle & Hamburger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 transition"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <FiMoon className="text-white" size={18} />
            ) : (
              <FiSun className="text-black" size={18} />
            )}
          </button>

          {/* Hamburger (Mobile only) */}
          <button onClick={toggleBtn} className="lg:hidden">
            {btn ? (
              <FiX className="text-white dark:text-black" size={26} />
            ) : (
              <FiMenu className="text-white dark:text-black" size={26} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {btn && (
        <div className="lg:hidden mt-2 px-6 py-4 bg-white dark:bg-black rounded-2xl shadow-md border border-gray-300 dark:border-gray-700">
          <ul className="flex flex-col items-center gap-6 text-base font-[Montserrat] text-black dark:text-white">
            {["main", "education", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  onClick={toggleBtn}
                  activeClass="text-blue-500 underline"
                  className="cursor-pointer hover:underline underline-offset-8"
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            ))}
            {/* Resume in mobile */}
            <li>
              <a
                href="/Lalit%20Joshi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleBtn}
                className="cursor-pointer hover:underline underline-offset-8"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
