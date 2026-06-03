import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-root">
      <div className="app-grid-overlay"></div>
      <div className="app-content">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
