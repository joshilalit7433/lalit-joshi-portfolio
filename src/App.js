import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { ThemeContext } from "./context/Theme";
import React from "react";

export default function App() {

  const [{ style }] = React.useContext(ThemeContext);




  return (
    <>
    <div style={style}>
    <Navbar/>
    <Main/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    </>
  )
}
