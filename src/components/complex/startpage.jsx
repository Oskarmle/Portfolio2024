import React from "react";

// import props
import instagramSVG from '../../svg_icons/instagram.svg'
import githubSVG from '../../svg_icons/github.svg'
import linkedinSVG from '../../svg_icons/linkedin.svg'

export default function Startpage() {
  return (
    <div className="startpage">
      <div className="container">
        <div className="personalInfo">
          <div className="imgHeadshot">
            <img src="/images/headshot.jpg" alt="" />
          </div>
          <div className="links">
            <div className="linkedin socials">
              <img src={linkedinSVG} alt="" />
              <p>Linkedin</p>
            </div>
            <div className="instagram socials">
              <img src={instagramSVG} alt="" />
              <p>Instagram</p>
            </div>
            <div className="github socials">
              <img src={githubSVG} alt="" />
              <p>Github</p>
            </div>
          </div>
        </div>
        <div className="intro"></div>
      </div>
    </div>
  );
}
