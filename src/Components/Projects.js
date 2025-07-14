import React, { useContext } from "react";

import { FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  return (
    <>
      {/* Projects Heading */}
      <section id="projects" className="py-24 md:py-20 lg:py-16 xl:py-12 bg-white">
        <div className="min-h-[120px] flex flex-col items-center justify-center">
          <p className="text-3xl lg:text-5xl font-heading text-charcoal font-bold">PROJECTS</p>
          <p className="text-base lg:text-lg text-charcoal mt-2 font-normal">A selection of my recent work, built with modern web technologies</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {[
              {
                title: "Playit",
                tools: "MERN STACK",
                description: "A full-featured music streaming web app with user authentication, playlists, and real-time audio streaming. Built using MongoDB, Express, React, and Node.js.",
                link: "https://playit-webapp.netlify.app/",
                img: "./Images/playit.png",
              },
              {
                title: "Dice Game",
                tools: "ReactJs, Tailwind CSS, Html",
                description: "A fun and interactive dice game built with React. Features smooth animations, responsive design, and simple game logic for all ages.",
                link: "https://dice-game-neon-rho.vercel.app/",
                img: "./Images/dice.jpg",
              }
            ].map((project) => (
              <div key={project.title} className="flex flex-col overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
                <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
                <div className="flex flex-col justify-start items-center px-6 py-6 text-center">
                  <p className="text-charcoal text-2xl font-bold mb-2 drop-shadow-lg">{project.title}</p>
                  <p className="text-blue-700 text-xs font-semibold mb-2 tracking-wide">{project.tools}</p>
                  <p className="text-gray-700 text-sm mb-4 font-normal leading-relaxed">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-blue-700 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-all font-semibold text-sm shadow-md"
                  >View Project <FiExternalLink /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
