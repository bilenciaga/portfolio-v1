import React from 'react'
import './About.scss'
import SectionHeading from '../components/SectionHeading';

const About = () => {
  const skills = ['HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'React', 'JavaScript'];
  return (
    <section className='about' id='about'>
      <SectionHeading text='about me' />
      <div className="about__content">
        <div className="about__content-text">
          <p>Hello! My name is Trung and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I started to learning Python at my current school and was given a business Udemy account. Fast-forward to today, and still I’ve been self-studying web development using various of online resources.  </p>
          <br></br>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className="about__content-skills">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </div>
        </div>
    
        <img src='/images/me.jpg' alt="me" className="about__content-img" />

      </div>
    </section>
  )
}

export default About