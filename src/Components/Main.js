import React, { useContext } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function Main() {
  const [typeeffect] = useTypewriter({
    words: ["front-end developer.", "Professional Coder.", "Tech Enthusiast."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      <section id="main" className="py-24 md:py-20 lg:py-16 xl:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center gap-16"
            id="main"
          >
            {/* Text Section */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-3xl lg:text-5xl capitalize text-charcoal font-bold">hello everyone, welcome to my portfolio.</p>
              <p className="text-3xl lg:text-5xl capitalize text-charcoal font-bold">i'm <b>Lalit Joshi</b> a</p>
              <p className="text-2xl lg:text-4xl capitalize font-semibold text-charcoal">{typeeffect}<Cursor /></p>
              <p className="text-base lg:text-lg text-gray-500 max-w-xl mt-2">I am passionate about building modern, responsive web applications and delivering a premium user experience. Explore my work and skills below!</p>
            </div>
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="./Images/lalit.jpeg"
                alt="Lalit Joshi"
                className="h-[180px] w-[180px] lg:h-[350px] lg:w-[350px] rounded-full border-4 border-charcoal object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
