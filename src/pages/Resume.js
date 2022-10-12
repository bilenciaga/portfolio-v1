import React from 'react'
import Navbar from '../components/Navbar'
import Particle from '../components/Particle'
import './Resume.scss'
const Resume = () => {
  return (
    <>
      <Particle />
      <section className='resume'>
        <button className='btn'>English</button>
        <button className='btn'>Japanese</button>
        <button className='btn'>Vietnamese</button>
      </section>
    </>
  )
}

export default Resume