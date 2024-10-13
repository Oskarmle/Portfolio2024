import React from "react";

// import jsx modules
import Projects from "../components/complex/projects";
import Startpage from "../components/complex/startpage";
import Contact from "../components/complex/contact"
import Skills from "../components/complex/skills"
import Navigation from "../components/complex/navigation";

// import css
import "./pagesStyle.css"

export default function Start() {
  return (
    <div className="start">
      <main>
        <Startpage></Startpage>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Navigation></Navigation>
    </div>
  );
}
