import React from "react";
import './Experience.css'
import { FaUniversity } from "react-icons/fa";
import CV from '../../assets/CV.pdf'
const Experience = () => {
  return (
    <section id="experience">
      <h5>PORTFOLIO</h5>
      <h1>
        <FaUniversity className="experience-icon" />
        Experience
      </h1>

      <div className="container experience__container">
        <div className="experience__block">
          <div class="card experience__card">
            <article class="card-body experience__card-body">
              <h2>St. Andrews Institute Of Technology and Management(MDU)</h2>
              <h4>Btech-CSE</h4>
              <h5>2019-2023</h5>
              <p class="card-text">
              Currently I am in 7th Semester of Btech with specialization of Computer Science
              </p>
            </article>

            <article class="card-body experience__card-body">
              <h2>Jain Boys Senior Secondary School(JBSSS)</h2>
              <h4>HBSE</h4>
              <h5>2017-2019</h5>
              <p class="card-text">
              I completed my 12th board with 60% with Physics, Chemistry and Maths(PCM) as core subjects from  Board of School Education Haryana, Bhiwani.
              </p>
            </article>

            <article class="card-body experience__card-body">
              <h2>Vandna High School(VHS)</h2>
              <h4>HBSE</h4>
              <h5>2017</h5>
              <p class="card-text">
              I completed my 10th board with 80% from  Board of School Education Haryana, Bhiwani.
              </p>
            </article>
            <a href={CV} target='_blank' className="btn">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
