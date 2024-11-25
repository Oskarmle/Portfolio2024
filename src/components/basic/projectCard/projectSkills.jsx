import React from "react";

import styles from "./projectCard.module.css";
import ProjectSkillsComp from "./projectSkillsComp";

import { logoArray } from "../../../utils/logoArray";

export default function ProjectSkills() {


  return (
    <div className={styles.projectSkills}>
      <ProjectSkillsComp projectSkillImg={logoArray.html} skillText={"React"}></ProjectSkillsComp>
    </div>
  );
}
