import React from "react";
import "./Skill.css";
import {
  FaBookReader,
  FaBootstrap,
  FaReact,
  FaNode,
  FaDatabase,
  FaPython,
  FaCode,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiPhp } from "react-icons/si";

const Skill = () => {
  return (
    <section id="skill">
      <h5>What Skill I have</h5>
      <h1>
        <FaBookReader className="skill_icon" />
        Skills
      </h1>
      <div className="container skill__para">
        <p>
          For Web Development I have good knowledge of Front End and Back End
          Languages like HTML, CSS, JavaScript, Node JS, React JS and for coding
          I have knowledge of languages like Python, Java, C/C++.
        </p>
      </div>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <AiFillHtml5 className="skill__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <DiCss3 className="skill__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <SiJavascript className="skill__details-icon" />
              <div>
                <h4>JavScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <FaBootstrap className="skill__details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <FaReact className="skill__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* ----------- */}
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <FaNode className="skill__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <FaDatabase className="skill__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <SiPhp className="skill__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="skill__details">
              <div>
                <h4>
                  Express
                  <FaNodeJs />
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* -------------------- */}
        <div className="other__language">
          <h3>Other Language</h3>
          <div className="skill__content">
            <article className="skill__details">
              <FaPython className="skill__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <FaCode className="skill__details-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skill__details">
              <FaJava className="skill__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
