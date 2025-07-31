import React, { useContext } from "react";
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';


export default function Contact() {

  return (
    <>
      {/* Contact Heading */}
      <section id="contact" className="py-24 bg-white min-h-screen">
        <div className="min-h-[120px] flex flex-col items-center justify-center">
          <p className="text-3xl lg:text-5xl font-heading text-charcoal font-bold">CONTACT</p>
          <p className="text-base lg:text-lg text-charcoal mt-2 font-normal">Let’s connect! Find me on these platforms</p>
        </div>
        <div className="max-w-5xl mx-auto px-4 pb-16 flex flex-col items-center">
          <p className="capitalize text-2xl lg:text-4xl font-contact text-charcoal font-bold mb-8">Find me on</p>
          <div className="flex pt-[25px] gap-12">
            <a
              href="https://www.linkedin.com/in/lalit-joshi-73ba50255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-charcoal hover:text-blue-600 transition-colors duration-200" size={56} />
            </a>
            <a
              href="https://github.com/joshilalit7433"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub className="text-charcoal hover:text-black transition-colors duration-200" size={56} />
            </a>
            <a
              href="https://x.com/LalitJoshi2104"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaXTwitter className="text-charcoal hover:text-blue-400 transition-colors duration-200" size={56} />
            </a>
          </div>
        </div>
      </section>
      
    </>
  );
}
