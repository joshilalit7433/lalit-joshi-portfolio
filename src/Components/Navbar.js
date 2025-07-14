import React, { useState } from "react";
import { Link } from "react-scroll";

import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [btn, setBtn] = useState(false);

  const toggleBtn = () => {
    setBtn(!btn);
  };

  return (
    <>
      <div className="sticky top-0 shadow-lg border-b border-lightgray z-50 bg-charcoal min-h-[80px] flex items-center">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4 lg:px-12">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <p className="font-logo text-2xl lg:text-4xl font-extrabold tracking-widest text-white tracking-[0.08em]">
              Lalit Joshi
            </p>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 text-sm lg:text-lg font-bold text-white font-[Montserrat]">
            <li className="hover:underline underline-offset-8 cursor-pointer">
              <Link to="main" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">HOME</Link>
            </li>
            <li className="hover:underline underline-offset-8 cursor-pointer">
              <Link to="education" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">EDUCATION</Link>
            </li>
            <li className="hover:underline underline-offset-8 cursor-pointer">
              <Link to="skills" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">SKILLS</Link>
            </li>
            <li className="hover:underline underline-offset-8 cursor-pointer">
              <Link to="projects" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">PROJECTS</Link>
            </li>
            <li className="hover:underline underline-offset-8 cursor-pointer">
              <Link to="contact" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">CONTACT</Link>
            </li>
            <li>
              <a href="/Lalit%20Joshi.pdf" target="_blank" rel="noopener noreferrer" className="ml-2 px-5 py-2 rounded-full bg-[#1e3a8a] text-white font-bold shadow-lg hover:bg-gradient-to-r hover:from-[#4b6cb7] hover:to-[#182848] transition-all duration-500 border-2 border-[#1e3a8a]"> VIEW RESUME</a>
            </li>
          </ul>
          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button onClick={toggleBtn} className="h-8 w-8 flex items-center justify-center focus:outline-none">
              {btn ? <FiX size={36} className="text-charcoal" /> : <FiMenu size={36} className="text-white" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {btn && (
          <div className="fixed inset-0 w-full h-full z-50 bg-white flex flex-col">
            <div className="flex items-center justify-between px-6 py-6">
              {/* Logo */}
              <p className="font-logo text-2xl font-extrabold tracking-widest text-charcoal tracking-[0.08em]">Lalit Joshi</p>
              {/* Close Button */}
              <button onClick={toggleBtn} className="h-10 w-10 flex items-center justify-center focus:outline-none">
                <FiX size={40} className="text-charcoal" />
              </button>
            </div>
            <ul className="flex-1 flex flex-col justify-center items-center space-y-10 text-xl font-bold text-charcoal font-[Montserrat]">
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <Link onClick={toggleBtn} to="main" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">HOME</Link>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <Link onClick={toggleBtn} to="education" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">EDUCATION</Link>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <Link onClick={toggleBtn} to="skills" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">SKILLS</Link>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <Link onClick={toggleBtn} to="projects" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">PROJECTS</Link>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <Link onClick={toggleBtn} to="contact" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-blue-500 underline">CONTACT</Link>
              </li>
              <li>
                <a href="/Lalit%20Joshi.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-[#1e3a8a] text-white font-bold shadow-lg hover:bg-gradient-to-r hover:from-[#4b6cb7] hover:to-[#182848] transition-all duration-500 border-2 border-[#1e3a8a]"> VIEW RESUME</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
