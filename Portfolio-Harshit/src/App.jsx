import React from "react";
import ScrollSection from "./Components/ScrollSection";
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
      {/* Background */}
      <Starfield />

      {/* Main Content */}
      <div className="max-w-300 mx-auto relative z-10">
        {/* Navbar (no animation) */}
        <Navbar />

        {/* Scroll animations */}
        <ScrollSection>
          <Home />
        </ScrollSection>

        <ScrollSection>
          <About />
        </ScrollSection>

        <ScrollSection>
          <SkillsSection />
        </ScrollSection>

        <ScrollSection>
          <Project />
        </ScrollSection>

        <ScrollSection>
          <Footer />
        </ScrollSection>
      </div>
    </>
  );
};

export default App;
