import React from "react";

import styles from "./startpage.module.css";

import ContactLinks from "../../basic/contactLinks/contactLinks.jsx"
import instagramSVG from '../../../svg_icons/instagram.svg'
import githubSVG from '../../../svg_icons/github.svg'
import linkedinSVG from '../../../svg_icons/linkedin.svg'

export default function Startpage() {

 const linkedinURL = "https://www.linkedin.com/in/oskar-morris-ledskov-eriksen-1b537424b/"
 const githubURL = "https://github.com/Oskarmle"
 const instaURL = "https://www.instagram.com/photography_by_oskar/"


  return (
    <div className={styles.startpage}>
      <div className={styles.containerStart}>
        <div className={styles.personalInfo}>
          <div className={styles.imgHeadshot}>
            <img src="/images/headshot.jpg" alt="" />
          </div>
          <div className={styles.links}>
            <ContactLinks imageSrc={linkedinSVG} skillText="LinkedIn" url={linkedinURL}></ContactLinks>
            <ContactLinks imageSrc={instagramSVG} skillText="instagram" url={githubURL}></ContactLinks>
            <ContactLinks imageSrc={githubSVG} skillText="Github" url={instaURL}></ContactLinks>
          </div>
        </div>
        <div className={styles.intro}>
          <h1>I'm a<br/>web developer student</h1>
          <div>
            <p className={styles.introText}>Hi there, my name is Oskar Eriksen. I'm a multimediadesigner and a web developer student.</p>
            <p className={styles.introText}>I enjoy learning and exploring code and design, and trying to learn as much as possible.</p>
            <p className={styles.introText}>For more casual stuff, I'm a big fan of trying different kinds of photography</p>
            <p className={styles.introText}>In my freetime i enjoy playing table tennis in Gladsaxe Bordtennisklub</p>
          </div>
            <p className={styles.introTextLink}>Feel free to contact me for any questions you might have <span>right here</span></p>
        </div>
      </div>
    </div>
  );
}
