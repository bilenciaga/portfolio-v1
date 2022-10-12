import React from 'react'
import Hero from '../containers/Hero'
import Navbar from '../components/Navbar'
import About from '../containers/About'
import Projects from '../containers/Projects'
import Particle from '../components/Particle'
import Contact from '../containers/Contact'

function Home() {
  return (
    <>    
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>

  )
}

export default Home