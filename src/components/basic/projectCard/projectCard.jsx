import React from "react";
import ProjectImages from "./projectImages";

import styles from "./projectCard.module.css";

export default function ProjectCard({ title, text1,text2, text3, text4 }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImages}>
        <ProjectImages
          projectAlt={"testImage"}
          projectImg={"/images/headshot.jpg"}
        ></ProjectImages>
        <ProjectImages
          projectAlt={"testImage"}
          projectImg={"/images/headshot.jpg"}
        ></ProjectImages>
      </div>
      <div className={styles.projectInfo}>
        <p className={styles.projectTitle}>{title}</p>
        <p className={styles.projectText}>{text1}</p>
        <p className={styles.projectText}>{text2}</p>
        <p className={styles.projectText}>{text3}</p>
        <p className={styles.projectText}>{text4}</p>
        <div className={styles.skillsContainer}>

        </div>
      </div>
    </div>
  );
}
