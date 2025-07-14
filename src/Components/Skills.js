import React from "react";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaStripe, FaCloudversify } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiVite, SiSocketdotio, SiJsonwebtokens, SiCloudinary, SiRender, SiNetlify, SiVercel, SiPostman } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
    { name: 'Socket.IO', icon: <SiSocketdotio className="text-gray-300" /> },
    { name: 'JWT', icon: <SiJsonwebtokens className="text-yellow-500" /> },
    { name: 'Stripe', icon: <FaStripe className="text-indigo-400" /> },
    { name: 'Cloudinary', icon: <SiCloudinary className="text-blue-400" /> },
    { name: 'Render', icon: <SiRender className="text-blue-400" /> },
    { name: 'Netlify', icon: <SiNetlify className="text-green-400" /> },
    { name: 'Vercel', icon: <SiVercel className="text-black" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
  ];
  return (
    <>
      <section id="skills" className="py-24 md:py-20 lg:py-16 xl:py-12 bg-white">
        <div className="min-h-[120px] flex flex-col items-center justify-center">
          <p className="text-3xl lg:text-5xl font-heading text-charcoal font-bold">SKILLS</p>
          <p className="text-base lg:text-lg text-charcoal mt-2 font-normal">Technologies and tools I use to build modern web applications</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-12">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-10 gap-x-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center group">
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</span>
                <span className="text-sm text-charcoal font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
