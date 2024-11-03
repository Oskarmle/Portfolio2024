import React from "react";
import ContactLinks from "../basic/contactLinks/contactLinks.jsx"

// import props
import instagramSVG from '../../svg_icons/instagram.svg'
import githubSVG from '../../svg_icons/github.svg'
import linkedinSVG from '../../svg_icons/linkedin.svg'

export default function Startpage() {
  return (
    <div className="startpage">
      <div className="containerStart">
        <div className="personalInfo">
          <div className="imgHeadshot">
            <img src="/images/headshot.jpg" alt="" />
          </div>
          <div className="links">
          <ContactLinks imageSrc={linkedinSVG} skillText="LinkedIn"></ContactLinks>
          <ContactLinks imageSrc={instagramSVG} skillText="instagram"></ContactLinks>
          <ContactLinks imageSrc={githubSVG} skillText="Github"></ContactLinks>
          </div>
        </div>
        <div className="intro">
          <h1>I'm a web developer student</h1>
        </div>
      </div>
    </div>
  );
}
