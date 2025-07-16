import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si";

const projects = [
  {
    title: "Playit",
    tools: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiExpress key="express" />, <SiMongodb key="mongo" />],
    description:
      "A modern turf booking website allowing users to find, book, and manage turf reservations easily. Built using MongoDB, Express, React, and Node.js.",
    link: "https://playit-webapp.netlify.app/",
    img: "/Images/playit.png",
  },
  {
    title: "Dice Game",
    tools: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <FaHtml5 key="html" />],
    description:
      "A fun and interactive dice game built with React. Features smooth animations, responsive design, and simple game logic for all ages.",
    link: "https://dice-game-neon-rho.vercel.app/",
    img: "/Images/dice.png",
  },
  {
    title: "Resume Checker",
    tools: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiExpress key="express" />, <SiMongodb key="mongo" />, <SiTypescript key="ts" />],
    description:
      "An online tool to analyze and improve your resume, providing instant feedback and suggestions.",
    link: "https://resumecheckkk.netlify.app/",
    img: "/Images/resume-checker.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-20 lg:py-16 xl:py-12 bg-white">
      <div className="min-h-[120px] flex flex-col items-center justify-center">
        <p className="text-3xl lg:text-5xl font-heading text-charcoal font-bold">PROJECTS</p>
        <p className="text-base lg:text-lg text-charcoal mt-2 font-normal">
          A selection of my recent work, built with modern web technologies
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-2 pt-12 flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row bg-charcoal text-white rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300 hover:scale-[1.01] w-full min-h-[340px] mx-auto"
          >
            {/* Project Image */}
            <div className="w-full md:w-[48%] p-4">
              <div className="w-full h-60 md:h-[280px] rounded-xl overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-center p-6 md:p-10 md:w-[52%] w-full">
              <p className="text-sm font-semibold text-blue-400 mb-2">Featured Project</p>
              <p className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</p>
              <p className="text-gray-300 text-base mb-4">{project.description}</p>
              <div className="flex flex-wrap items-center gap-3 mb-6 text-blue-300 text-xl">
                {project.tools.map((icon, index) => (
                  <span key={index} className="hover:text-white transition">{icon}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-black rounded-md font-medium text-sm w-fit hover:bg-gray-200 transition"
              >
                Visit Project <FiExternalLink className="text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
