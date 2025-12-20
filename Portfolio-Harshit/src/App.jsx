import React from "react";
import Starfield from "./Components/Starfield";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Projects";
import SkillsSection from "./Components/SkillsSection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Starfield />
      <div className="max-w-300 mx-auto relative z-10">
        <Navbar />
        <Home />
        <About />
        <SkillsSection />
        <Project />
        <Footer />
      </div>
    </>
  );
};

export default App;
