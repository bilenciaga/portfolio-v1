import React from 'react';
import './Hero.scss';
import Social from '../components/Social';
import { MdOutlineLocationOn, MdPadding }  from 'react-icons/md'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <h4>
        Hi, my name is
      </h4>
      <h1>
        Nguyen Hoai Trung.
      </h1>
      <h3>
        A self-taught website developer.
      </h3>
      <div className="hero__location">
        <MdOutlineLocationOn size={18} />
        <p>Tokyo, Japan</p>
      </div>

      <Link to='/resume'>
        <button className='btn'>Check My Resume</button>
      </Link>
      
      <Social />
    </section>
  )
}

export default Hero