import React from "react";

export default function Contact() {
  return (
    <>
      {/* Contact Heading */}
      <div className="flex justify-center pt-[100px] pb-[50px]" id="contact">
        <p className="text-4xl lg:text-5xl font-heading">CONTACT</p>
      </div>

      {/* Contact Links */}
      <div className="flex flex-col items-center pb-[50px]">
        <p className="capitalize text-4xl lg:text-5xl font-contact">
          Find me on
        </p>

        <div className="flex pt-[25px] gap-10">
          <a
            href="https://www.linkedin.com/in/lalit-joshi-73ba50255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="./Images/linkedin.png"
              alt="LinkedIn"
              className="h-[50px] w-[50px]"
            />
          </a>

          <a
            href="https://github.com/joshilalit7433"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="./Images/github1.png"
              alt="GitHub"
              className="h-[50px] w-[50px] rounded-full bg-white p-1"
            />
          </a>

          <a
            href="https://www.instagram.com/lalitjoshiii?igsh=MTFoYmZta2Q5cWx5dg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="./Images/instagram.png"
              alt="Instagram"
              className="h-[50px] w-[50px]"
            />
          </a>
        </div>
      </div>
    </>
  );
}
