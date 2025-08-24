import React from "react";

const experiences = [
  {
    role: "Web Developer & SEO Specialist",
    company: "NS Media",
    period: "August 2025 – Present",
    description:
      "Developing modern, responsive websites using React and WordPress. Optimizing site performance and search engine visibility through SEO best practices.",
    image: "/Images/nsmedia.webp",
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Accuracy Ai",
    period: "June 2025 – July 2025",
    description:
      "Designed and implemented multiple responsive UI sections, including the homepage and dashboard. Integrated API data into dynamic components, optimized page load speed, and ensured consistent cross-browser performance.",
    image: "/Images/accuracyai.webp",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
            EXPERIENCE
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            My professional journey and internships
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4 sm:ml-6 md:ml-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 sm:mb-10 md:mb-12 relative">
              
              {/* Image Icon */}
              <div className="absolute -left-6 sm:-left-8 md:-left-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600">
                <img
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover rounded-full"
                />
              </div>

              {/* Content Card */}
              <div className="ml-4 sm:ml-6 md:ml-8 lg:ml-10 p-4 sm:p-5 md:p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md md:hover:shadow-lg transition-all duration-300">
                
                {/* Header */}
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between sm:space-x-4">
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm md:text-base text-indigo-500 dark:text-indigo-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  <span
                    className={`text-xs sm:text-sm md:text-base font-medium whitespace-nowrap ${
                      exp.current
                        ? "text-green-500 dark:text-green-400"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Current Status Indicator */}
                {exp.current && (
                  <div className="mt-3 sm:mt-4">
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      Current Position
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}