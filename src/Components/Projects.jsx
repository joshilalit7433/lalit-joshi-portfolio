import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const projects = [
  {
    title: "Resume Checker",
    tools: [
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <SiTypescript key="ts" />,
    ],
    description:
      "An online tool to analyze and improve your resume, providing instant feedback and suggestions.",
    link: "https://resumecheckkk.netlify.app/",
    img: "/Images/resume-checker.png",
    sourceCode: "https://github.com/joshilalit7433/checker_client",
  },
  {
    title: "Playit",
    tools: [
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
    ],
    description:
      "A modern turf booking website allowing users to find, book, and manage turf reservations easily.",
    link: "https://playit-webapp.netlify.app/",
    img: "/Images/playit.png",
    sourceCode: "https://github.com/joshilalit7433/playIt-Frontend",
  },
  {
    title: "Dice Game",
    tools: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <FaHtml5 key="html" />,
    ],
    description:
      "A fun and interactive dice game built with React. Features smooth animations, responsive design, and simple game logic.",
    link: "https://dice-game-neon-rho.vercel.app/",
    img: "/Images/dice.png",
    sourceCode: "https://github.com/joshilalit7433/Dice-Game",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-20 lg:py-16 xl:py-12">
      <div className="min-h-[120px] flex flex-col items-center justify-center text-charcoal dark:text-white text-center px-4">
        <p className="text-3xl lg:text-5xl font-heading font-bold">PROJECTS</p>
        <p className="text-base lg:text-lg mt-2 font-normal">
          A selection of my recent work, built with modern web technologies
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12 flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row bg-charcoal dark:bg-white/10 backdrop-blur-md shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:scale-[1.01] w-full"
          >
            {/* Image */}
            <div className="w-full md:w-[48%] p-4">
              <div className="w-full h-60 md:h-[280px] rounded-xl overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center p-6 md:p-10 md:w-[52%] w-full">
              <p className="text-sm font-semibold text-blue-500 mb-2">
                Featured Project
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-3">
                {project.title}
              </p>
              <p className="text-white dark:text-gray-300 text-base mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-6 text-blue-600 dark:text-blue-400 text-xl">
                {project.tools.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-black dark:bg-white dark:text-black rounded-md font-medium text-sm w-fit hover:opacity-80 transition"
                >
                  Visit Project <FiExternalLink className="text-sm" />
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-black dark:bg-white dark:text-black rounded-md font-medium text-sm w-fit hover:opacity-80 transition"
                >
                  Source Code <FiExternalLink className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
