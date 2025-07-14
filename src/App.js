import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

import React from "react";

export default function App() {

  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
