import React from "react";

export default function Education() {
  return (
    <>
      {/* Heading */}
      <div className="flex justify-center pt-[100px]" id="education">
        <p className="text-4xl lg:text-5xl font-heading">EDUCATION</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-rows-3 gap-10 pt-10 pb-16 px-6 lg:grid-rows-2 lg:grid-cols-2 lg:px-24">
        {/* School */}
        <div className="bg-gray-500 h-[250px] w-full max-w-[350px] mx-auto rounded-lg border-4 border-black flex flex-col justify-center items-center p-4 lg:max-w-[550px]">
          <p className="text-3xl lg:text-4xl underline font-bold pb-4 text-center">
            School
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            St Augustine High School, Vasai West
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            2008 - 2020
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            Scored 84%
          </p>
        </div>

        {/* Junior College */}
        <div className="bg-gray-500 h-[250px] w-full max-w-[350px] mx-auto rounded-lg border-4 border-black flex flex-col justify-center items-center p-4 lg:max-w-[550px]">
          <p className="text-3xl lg:text-4xl underline font-bold pb-4 text-center">
            Junior College
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            New English College, Vasai West
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            2020 - 2022
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            Scored 89%
          </p>
        </div>

        {/* Degree College */}
        <div className="bg-gray-500 h-[250px] w-full max-w-[350px] mx-auto rounded-lg border-4 border-black flex flex-col justify-center items-center p-4 lg:max-w-[550px]">
          <p className="text-3xl lg:text-4xl underline font-bold pb-4 text-center">
            Degree College
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            Ghanshyamdas Saraf College, Malad West
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            2022 - 2025
          </p>
          <p className="text-xl lg:text-2xl font-bold text-center">
            Loading...
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
