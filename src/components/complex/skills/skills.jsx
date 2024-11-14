import React from "react";
import styles from "./skills.module.css";
import SkillBox from "../../basic/skillBox/skillBox";

import html from "../../../logos/html.png";
import css from "../../../logos/css.png";
import js from "../../../logos/javascript.png";
import ts from "../../../logos/typescript.png";
import docker from "../../../logos/docker.png";
import git from "../../../logos/git.png";
import github from "../../../logos/github.png";
import mongo from "../../../logos/mongodb.png";
import nest from "../../../logos/nestjs.png";
import node from "../../../logos/nodejs.png";
import react from "../../../logos/reactjs.png";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.skillMain}>
        <div className={styles.skillsIntro}>
          <h1 className={styles.skillH}>Skills</h1>
          <p>
            These are the different languages and tools i have experience with
          </p>
        </div>
        <div className={styles.skillContainer}>
          <SkillBox skillBoxText="HTML" skillImg={html}></SkillBox>
          <SkillBox skillBoxText="CSS" skillImg={css}></SkillBox>
          <SkillBox skillBoxText="JavaScript" skillImg={js}></SkillBox>
          <SkillBox skillBoxText="TypeScript" skillImg={ts}></SkillBox>
          <SkillBox skillBoxText="Git" skillImg={git}></SkillBox>
          <SkillBox skillBoxText="Github" skillImg={github}></SkillBox>
          <SkillBox skillBoxText="MongoDB" skillImg={mongo}></SkillBox>
          <SkillBox skillBoxText="Docker" skillImg={docker}></SkillBox>
          <SkillBox skillBoxText="NestJS" skillImg={nest}></SkillBox>
          <SkillBox skillBoxText="NodeJS" skillImg={node}></SkillBox>
          <SkillBox skillBoxText="ReactJS" skillImg={react}></SkillBox>
        </div>
      </div>
    </div>
  );
}
