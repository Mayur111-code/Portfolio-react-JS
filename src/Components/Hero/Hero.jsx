import React from "react";
import "./Hero.css";
import profile_img2 from "../../assets/profile_img2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img2} alt="" />
      <h1>
        <span>I'm Mayur Borse</span>,Frontend Developer!.
      </h1>
      <p>
        I am a passionate <strong>Frontend Developer</strong> specializing in
        creating responsive, user-friendly, and visually appealing web
        applications. I love turning ideas into interactive digital experiences
        using modern web technologies.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
