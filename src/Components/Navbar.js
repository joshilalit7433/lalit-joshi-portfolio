import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import Menu from "./Menu";
import Close from "./Close";
import { ThemeContext } from "../context/Theme";
import Dark from "./Dark";
import Light from "./Light";

export default function Navbar() {
  const [{ change, mode }] = useContext(ThemeContext);
  const [btn, setBtn] = useState(false);

  const toggleBtn = () => {
    setBtn(!btn);
  };

  return (
    <>
      <div className=" shadow-lg   z-50">
        <div className="flex justify-between items-center px-6 py-4 lg:px-12">
          {/* Logo and Theme Toggle (mobile) */}
          <div className="flex items-center space-x-4">
            <button onClick={change} className="lg:hidden">
              {mode ? <Dark /> : <Light />}
            </button>
            <p className="font-logo text-3xl font-extrabold tracking-widest lg:text-5xl">
              Lalit Joshi
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 text-2xl font-bold">
            <li>
              <button onClick={change}>{mode ? <Dark /> : <Light />}</button>
            </li>
            <li className="hover:text-[#576CBC]">
              <Link to="main" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className="hover:text-[#576CBC]">
              <Link to="education" smooth={true} duration={500}>
                EDUCATION
              </Link>
            </li>
            <li className="hover:text-[#576CBC]">
              <Link to="skills" smooth={true} duration={500}>
                SKILLS
              </Link>
            </li>
            <li className="hover:text-[#576CBC]">
              <Link to="projects" smooth={true} duration={500}>
                PROJECTS
              </Link>
            </li>
            <li className="hover:text-[#576CBC]">
              <Link to="contact" smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button onClick={toggleBtn} className="h-8 w-8">
              {btn ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {btn && (
          <div className="lg:hidden">
            <ul className="flex flex-col items-center text-3xl font-bold text-black bg-white bg-opacity-95 space-y-6 py-10 h-screen w-full">
              <li className="hover:text-[#576CBC]">
                <Link
                  onClick={toggleBtn}
                  to="main"
                  smooth={true}
                  duration={500}
                >
                  HOME
                </Link>
              </li>
              <li className="hover:text-[#576CBC]">
                <Link
                  onClick={toggleBtn}
                  to="education"
                  smooth={true}
                  duration={500}
                >
                  EDUCATION
                </Link>
              </li>
              <li className="hover:text-[#576CBC]">
                <Link
                  onClick={toggleBtn}
                  to="skills"
                  smooth={true}
                  duration={500}
                >
                  SKILLS
                </Link>
              </li>
              <li className="hover:text-[#576CBC]">
                <Link
                  onClick={toggleBtn}
                  to="projects"
                  smooth={true}
                  duration={500}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="hover:text-[#576CBC]">
                <Link
                  onClick={toggleBtn}
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <hr />
    </>
  );
}
