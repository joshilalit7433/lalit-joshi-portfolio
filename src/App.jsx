import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
  return (
    <div
      className="min-h-screen transition-colors duration-300
    bg-gradient-to-br from-gray-100 via-white to-gray-300
    dark:from-gray-900 dark:via-black dark:to-gray-900
    text-black dark:text-white"
    >
      <Navbar />
      <Main />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
