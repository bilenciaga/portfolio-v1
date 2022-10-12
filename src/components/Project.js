import React from 'react'
import './Project.scss'
import projects from '../data/projects.js'



const Project = () => {
  return (
    <>
      { projects.map((project) => {
        return (
        <ul key={project.id} className='project'>       
          <img src={project.img} alt="project screenshot" className='project__img' />
          <li className="project__info">
            <h4 className="project__info-title">{project.title}</h4>
            <p className="project__info-desc">{project.desc}</p>
            <span className='project__info-stacks'>{project.stacks}</span>
            <div className="project__info-flexRight">
              <a href={project.github} className="project__info-github">github repo</a>
              <a href={project.liveUrl} className='project__info-url'>live demo</a>
            </div>
          </li>
        </ul>
        )
      })}
    </>
  )
}

export default Project