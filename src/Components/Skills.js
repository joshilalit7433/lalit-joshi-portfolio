import React from "react";

export default function Skills() {
  return (
    <>
      {/* Skills Heading */}
      <div className="flex justify-center pt-[100px] pb-[50px]" id="skills">
        <p className="text-4xl lg:text-5xl font-heading">SKILLS</p>
      </div>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-6 pb-16"
        id="skills"
      >
        {/* Skill Card 1 */}
        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-orange-500 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-orange-500 transition-all duration-500">
          <img
            src="./Images/html.png"
            alt="HTML"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">HTML</p>
        </div>

        {/* Skill Card 2 */}
        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-blue-500 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-blue-500 transition-all duration-500">
          <img
            src="./Images/css.png"
            alt="CSS"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">CSS</p>
        </div>

        {/* Skill Card 3 */}
        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-yellow-500 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-yellow-500 transition-all duration-500">
          <img
            src="./Images/js.png"
            alt="JavaScript"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">JAVASCRIPT</p>
        </div>

        {/* Skill Card 4 */}
        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-blue-500 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-blue-500 transition-all duration-500">
          <img
            src="./Images/react.png"
            alt="React JS"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">REACT JS</p>
        </div>

        {/* Skill Card 5 */}
        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-blue-500 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-blue-500 transition-all duration-500">
          <img
            src="./Images/tailwindcss.png"
            alt="Tailwind CSS"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">TAILWIND CSS</p>
        </div>

        {/* Skill Card 6 */}
        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-white bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-white transition-all duration-500">
          <img
            src="./Images/github.png"
            alt="GitHub"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">GITHUB</p>
        </div>

        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-orange-500 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-orange-500 transition-all duration-500">
          <img
            src="./Images/postman.png"
            alt="GitHub"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">POSTMAN</p>
        </div>

        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-green-500 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-green-500 transition-all duration-500">
          <img
            src="./Images/mongodb.png"
            alt="GitHub"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">MONGODB</p>
        </div>

        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-gray-700 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-gray-700 transition-all duration-500">
          <img
            src="./Images/expressjs.png"
            alt="GitHub"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">EXPRESS JS </p>
        </div>

        <div className="relative rounded-b-2xl border-x-2 border-b-4 border-green-500 bg-black flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[250px] mx-auto hover:shadow-[0_0_30px_5px] hover:shadow-green-500 transition-all duration-500">
          <img
            src="./Images/nodejs.png"
            alt="GitHub"
            className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"
          />
          <p className="text-xl sm:text-2xl text-white pt-4">NODE JS </p>
        </div>
      </div>

      <hr />
    </>
  );
}
