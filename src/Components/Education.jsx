import React from "react";

export default function Education() {
  return (
    <>
      <section
        id="education"
        className="py-24 md:py-20 lg:py-16 xl:py-12 "
      >
        {/* Header */}
        <div className="min-h-[120px] flex flex-col items-center justify-center text-black dark:text-white transition-colors duration-300">
          <p className="text-3xl lg:text-5xl font-heading font-bold">EDUCATION</p>
          <p className="text-base lg:text-lg mt-2 font-normal">
            My academic background and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-16 flex flex-col gap-0 relative">
          {/* Timeline vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-1 rounded-full bg-black dark:bg-white"
            style={{ zIndex: 0 }}
          />

          {/* Entries */}
          {[
            {
              title: "School",
              institution: "St Augustine High School, Vasai West",
              duration: "2008 - 2020",
              score: "Scored 84%",
            },
            {
              title: "Junior College",
              institution: "New English College, Vasai West",
              duration: "2020 - 2022",
              score: "Scored 89%",
            },
            {
              title: "Degree College",
              institution: "Ghanshyamdas Saraf College, Malad West",
              duration: "2022 - 2025",
              score: "8.9 CGPA",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-6 relative z-10 py-8 group"
            >
              <div className="w-4 h-4 rounded-full border-4 bg-black dark:bg-white border-black dark:border-white mt-1 transition-colors duration-300" />
              <div>
                <p className="text-lg lg:text-xl font-bold text-black dark:text-white">
                  {item.title}
                </p>
                <p className="text-base lg:text-lg font-bold mt-1 text-black dark:text-white">
                  {item.institution}
                </p>
                <p className="text-sm lg:text-base mt-1 text-gray-700 dark:text-gray-300">
                  {item.duration}
                </p>
                <p className="text-sm lg:text-base mt-1 text-gray-700 dark:text-gray-300">
                  {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
