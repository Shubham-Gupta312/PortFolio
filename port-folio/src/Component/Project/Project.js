import React from 'react'
import './Project.css'
import {GoProject} from 'react-icons/go'
import IMG from '../../assets/IMG3 (2).jpg'

const data = [
  {
    id: 1,
    image: IMG ,
    title: "My Title",
    github: "https://guthub.com",
    view_project: "https://google.com",
  },
  {
    id: 2,
    image: IMG ,
    title: "My Title",
    github: "https://guthub.com",
    view_project: "https://google.com",
  },
  {
    id: 3,
    image: IMG ,
    title: "My Title",
    github: "https://guthub.com",
    view_project: "https://google.com",
  },
  {
    id: 4,
    image:  IMG ,
    title: "My Title",
    github: "https://guthub.com",
    view_project: "https://google.com",
  },
  {
    id: 5,
    image:  IMG ,
    title: "My Title",
    github: "https://guthub.com",
    view_project: "https://google.com",
  },
];
const Project = () => {
  return (
    <section id="project">
    <h5>My Recent Work</h5>
    <h1><GoProject className='project__icon'/>Projects</h1>
    <div className="container project__para">
    <p>I have made the following projects using both FrontEnd and BackEnd which includes Music Player with amazing UI, Beautiful Coffee Shop Responsive Website,etc. And also there are many more projects to come in following list, till then check them out.</p>
    </div>
    <div className="container project__container">
      {data.map(({ id, image, title, github, view_project }) => {
        return (
          <article key={id} className="project__item">
            <div className="project__image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="project__cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={view_project}
                className="btn btn-primary"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </article>
        );
      })}
    </div>
  </section>
  )
}

export default Project
