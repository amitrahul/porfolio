import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Info from "./components/Info/Info";
import AboutMe from "./components/AboutMe/AboutMe";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Leadership from "./components/Leadership/Leadership";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <NavBar />
      <Info />
      <AboutMe />
      <Experiences />
      <Projects />
      <Leadership />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
