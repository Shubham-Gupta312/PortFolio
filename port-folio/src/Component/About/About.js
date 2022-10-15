import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import IMG from "../../assets/IMG8.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>
        <FaAddressCard className="abt__icon" />
        About Me
      </h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="" />
          </div>
        </div>

        <div className="about-content">
          <p>
            <h5>Hey, </h5>I am <strong>Shubham Gupta, </strong>
            a B.Tech Computer Science Student At Saint Andrews Institute Of
            Technology And Management. I Am a Full Stack Developer. I Also Have A Knowledge Of Python, Java and C/C++. I love to code.<br/> I got 1st position at Science Exhibition. <br/> I got Gold Medal in College Football Tournament.
            <br/>Talking about my hobbies I like to listening Music, Playing Football and Badminton. Moreover I am a Football team Captain. I had completed lots of courses on udemy and YouTube. At the end, I am looking for work opportunities.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
