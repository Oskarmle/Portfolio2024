import styles from "./projects.module.css";
import ProjectCard from "../../basic/projectCard/projectCard";

import React from "react";

export default function Projects() {
  const GBTK = {
    title: "GBTK Webpage",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    text3: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    text4: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };
  return (
    <div className={styles.projects}>
      <div className={styles.projectStart}>
        <h1 className={styles.projectHeader}>Skills</h1>
      </div>
      <div className={styles.projectContainer}>
      <ProjectCard title={GBTK.title} text1={GBTK.text1} text2={GBTK.text2} text3={GBTK.text3} text4={GBTK.text4}></ProjectCard>
      </div>
    </div>
  );
}
