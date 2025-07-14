import React, { useContext } from "react";


export default function Education() {
  return (
    <>
      <section id="education" className="py-24 md:py-20 lg:py-16 xl:py-12 bg-white">
        <div className="min-h-[120px] flex flex-col items-center justify-center">
          <p className="text-3xl lg:text-5xl font-heading text-charcoal font-bold">EDUCATION</p>
          <p className="text-base lg:text-lg text-charcoal mt-2 font-normal">My academic background and achievements</p>
        </div>
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-16 flex flex-col gap-0 relative bg-white">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 rounded-full bg-charcoal" style={{zIndex:0}} />
          {/* School */}
          <div className="flex items-start gap-6 relative z-10 py-8 group">
            <div className="w-4 h-4 rounded-full border-4 bg-charcoal border-charcoal mt-1" />
            <div>
              <p className="text-lg lg:text-xl font-bold text-charcoal">School</p>
              <p className="text-base lg:text-lg font-bold mt-1 text-charcoal">St Augustine High School, Vasai West</p>
              <p className="text-sm lg:text-base mt-1 text-charcoal">2008 - 2020</p>
              <p className="text-sm lg:text-base mt-1 text-charcoal">Scored 84%</p>
            </div>
          </div>
          {/* Junior College */}
          <div className="flex items-start gap-6 relative z-10 py-8 group">
            <div className="w-4 h-4 rounded-full border-4 bg-charcoal border-charcoal mt-1" />
            <div>
              <p className="text-lg lg:text-xl font-bold text-charcoal">Junior College</p>
              <p className="text-base lg:text-lg font-bold mt-1 text-charcoal">New English College, Vasai West</p>
              <p className="text-sm lg:text-base mt-1 text-charcoal">2020 - 2022</p>
              <p className="text-sm lg:text-base mt-1 text-charcoal">Scored 89%</p>
            </div>
          </div>
          {/* Degree College */}
          <div className="flex items-start gap-6 relative z-10 py-8 group">
            <div className="w-4 h-4 rounded-full border-4 bg-charcoal border-charcoal mt-1" />
            <div>
              <p className="text-lg lg:text-xl font-bold text-charcoal">Degree College</p>
              <p className="text-base lg:text-lg font-bold mt-1 text-charcoal">Ghanshyamdas Saraf College, Malad West</p>
              <p className="text-sm lg:text-base mt-1 text-charcoal">2022 - 2025</p>
              <p className="text-sm lg:text-base mt-1 text-charcoal">8.9 CGPA</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
