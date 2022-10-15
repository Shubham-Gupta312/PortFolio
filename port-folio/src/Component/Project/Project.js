import React from 'react'
import './Project.css'
import {GoProject} from 'react-icons/go'
import IMG from '../../assets/resturant.jpg'
import IMG1 from '../../assets/music1.jpg'
import IMG2 from '../../assets/OIP (2).jpg'
import IMG3 from '../../assets/todo.jpg'
import IMG5 from '../../assets/news.jpg'

const data = [
  {
    id: 1,
    image: IMG ,
    title: "Resturant Website Clone",
    github: "https://github.com/Shubham-Gupta312/FoodRestro",
    view_project: "https://shubham-gupta312.github.io/FoodRestro/",
  },
  {
    id: 2,
    image: IMG1 ,
    title: "Music Player",
    github: "https://github.com/Shubham-Gupta312/Musicplayer_mp3",
    view_project: "https://shubham-gupta312.github.io/Musicplayer_mp3/",
  },
  {
    id: 3,
    image: IMG2 ,
    title: "Cryptoverse",
    github: "https://github.com/Shubham-Gupta312/",
    view_project: "https://github.com/Shubham-Gupta312/",
  },
  {
    id: 4,
    image:  IMG3 ,
    title: "To-do List",
    github: "https://github.com/Shubham-Gupta312/To-Do-list",
    view_project: "https://notezz.netlify.app/",
  },
  ,
  {
    id: 5,
    image:  IMG5 ,
    title: "News Web-app",
    github: "https://github.com/Shubham-Gupta312/News-Application",
    view_project: "https://github.com/Shubham-Gupta312/News-Application",
  },
];
const Project = () => {
  return (
    <section id="project">
    <h5>My Recent Work</h5>
    <h1><GoProject className='project__icon'/>Projects</h1>
    <div className="container project__para">
    <p>I have made the following projects using both FrontEnd and BackEnd which includes Music Player with amazing UI, Beautiful Resturant Website and more Responsive Website,etc. And also there are many more projects to come in following list, till then check them out.</p>
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
