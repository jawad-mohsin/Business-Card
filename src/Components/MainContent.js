import React from "react";
import profilePic from "../Images/profile-picture.jpg";
import emailIcon from "../Icons/EmailIcon.png";
import linkedinIcon from "../Icons/linkedin.png";

export default function MainContent() {
  return (
    <div className="main--content">
      <div className="profile">
        <img className="profile--pic" src={profilePic} alt="" />
      </div>
      <h2 className="profile--name">Jawad Mohsin</h2>
      <h6 className="profile--title">Frontend Developer</h6>
      <p className="profile--website">jawadmohsin.website</p>
      <div className="buttons">
        <button className="email--button">
          <img className="email--icon" src={emailIcon} alt="" />
          Email
        </button>
        <button className="linkedin--button">
          <img className="linkedin--icon" src={linkedinIcon} alt="" />
          LinkedIn
        </button>
      </div>
      <h4 className="about">About</h4>
      <p className="about--text">
        👋 Hello! My name is Jawad Mohsin 🙋🏻‍♂️and I'm an undergraduate pursuing a
        Bachelor's degree in Software Engineering. 💻 I'm passionate about
        technology and the impact it can have on society. I enjoy collaborating
        with others to solve complex problems and create innovative solutions.
      </p>
      <h4 className="interests">Interests</h4>
      <p className="interests-text">
        Throughout my studies, I've gained expertise in various programming
        languages and frameworks, including HTML 🌐, CSS 🎨, JavaScript 🚀,
        Node.js 🌳, and Express.js.Currently, I'm focusing on learning advanced
        Node.js and MongoDB 🍃 for building scalable and efficient web
        applications.
      </p>
    </div>
  );
}
