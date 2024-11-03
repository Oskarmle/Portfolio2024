import React from "react";

export default function ContactLinks({imageSrc, skillText}) {
  return (
    <div className="github socials">
      <img src={imageSrc} alt="" />
      <p>{skillText}</p>
    </div>
  );
}
