import React, { useRef } from "react";

// import jsx modules
import Projects from "../components/complex/projects/projects";
import Contact from "../components/complex/contact/contact";
import Skills from "../components/complex/skills/skills";
import Navigation from "../components/complex/navigation/navigation";
import Startpage from "../components/complex/startpage/startpage";

// import css
import "./pagesStyle.css";

export default function Start() {
  // Scroll to specific page element
  const startRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToElement(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="start">
      <main>
        <div ref={startRef}>
          <Startpage />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Navigation
      scrollToStart={() => scrollToElement(startRef)}
      scrollToSkills={() => scrollToElement(skillsRef)}
      scrollToProjects={() => scrollToElement(projectsRef)}
      scrollToContact={() => scrollToElement(contactRef)}
      />
    </div>
  );
}
