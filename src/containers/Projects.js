import React from 'react'
import Project from '../components/Project'
import SectionHeading from '../components/SectionHeading'
import './Projects.scss'
import {BsArrowRight} from 'react-icons/bs'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <SectionHeading text='featured projects' />
      <Project />
      <div className='projects__link-button'>
        <a href="https://github.com/bilenciaga">View More <BsArrowRight size={20}/></a>
      </div>
    </section>
  )
}

export default Projects