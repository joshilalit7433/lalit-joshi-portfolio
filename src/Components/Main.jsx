import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Main() {
  const [typeeffect] = useTypewriter({
    words: ["front-end developer.", "Professional Coder.", "Tech Enthusiast."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <section id="main" className="py-20 md:py-16 lg:py-12 xl:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center gap-16">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-3xl lg:text-5xl capitalize text-black dark:text-white font-bold">
              hello everyone, welcome to my portfolio.
            </p>
            <p className="text-3xl lg:text-5xl capitalize text-black dark:text-white font-bold">
              i'm <b>Lalit Joshi</b> a
            </p>
            <p className="text-2xl lg:text-4xl capitalize font-semibold text-black dark:text-white">
              {typeeffect}
              <Cursor />
            </p>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-xl mt-2">
              I am passionate about building modern, responsive web applications
              and delivering a premium user experience. Explore my work and
              skills below!
            </p>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-xl lg:text-2xl font-semibold text-black dark:text-white mb-4">
                Find me on
              </p>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/lalit-joshi-73ba50255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaLinkedin
                    className="text-charcoal dark:text-white hover:text-blue-700 transition-colors duration-200"
                    size={36}
                  />
                </a>
                <a
                  href="https://github.com/joshilalit7433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaGithub
                    className="text-charcoal dark:text-white hover:text-blue-700 transition-colors duration-200"
                    size={36}
                  />
                </a>
                <a
                  href="https://x.com/LalitJoshi2104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaXTwitter
                    className="text-charcoal dark:text-white hover:text-blue-700 transition-colors duration-200"
                    size={36}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="./Images/lalit.jpeg"
              alt="Lalit Joshi"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[22rem] lg:h-[22rem] xl:w-[24rem] xl:h-[24rem]
             rounded-full border-4 border-black dark:border-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
