import React from "react";
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
      <div
        className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center px-6 lg:px-24 py-12 lg:py-24 gap-10"
        id="main"
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-2xl lg:text-6xl capitalize">
            hello everyone, welcome to my portfolio.
          </p>
          <p className="text-4xl lg:text-7xl capitalize">
            i'm <b>Lalit Joshi</b> a
          </p>
          <p className="text-3xl lg:text-6xl capitalize text-orange-600">
            {typeeffect}
            <Cursor />
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="./Images/lalit.jpeg"
            alt="Lalit Joshi"
            className="h-[250px] w-[250px] lg:h-[450px] lg:w-[450px] rounded-full border-4 border-black object-cover"
          />
        </div>
      </div>
      <hr />
    </>
  );
}
