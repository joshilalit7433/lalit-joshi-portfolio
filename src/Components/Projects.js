import React from "react";

export default function Projects() {
  return (
    <>
      {/* Projects Heading */}
      <div className="flex justify-center pt-[100px] pb-[50px]" id="projects">
        <p className="text-4xl lg:text-5xl font-heading">PROJECTS</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
        {[
          {
            title: "Playit",
            tools: "MERN STACK",
            link: "https://playit-webapp.netlify.app/",
            img: "./Images/playit.png",
          },
          {
            title: "Dice Game",
            tools: "ReactJs, Tailwind CSS, Html",
            link: "https://dice-game-neon-rho.vercel.app/",
            img: "./Images/dice.jpg",
          },
          {
            title: "Tic-Tac-Toe",
            tools: "ReactJs, Tailwind CSS, Html",
            link: "https://tic-tac-toe-mocha-three-57.vercel.app/",
            img: "./Images/tictactoe.png",
          },
          {
            title: "Todo List",
            tools: "ReactJs, Tailwind CSS, Html",
            link: "https://todo-list-flame-one-92.vercel.app/",
            img: "./Images/todo.jpg",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="border-4 border-blue-500 rounded-lg bg-gray-500 hover:shadow-2xl hover:shadow-blue-500 flex flex-col items-center overflow-hidden"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[200px] overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full "
              />
            </a>
            <div className="p-4 text-center">
              <p className="text-2xl font-bold">{project.title}</p>
              <p className="text-md font-medium pt-2">{project.tools}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />
    </>
  );
}
