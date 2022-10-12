import React from 'react'
import {  IoLogoReact, IoLogoSass } from "react-icons/io5"
import { SiTailwindcss, SiFramer, SiHtml5, SiVite } from "react-icons/si"

const projects = [
  {
    id: 1,
    img: '/images/gericht-screenshot.jpeg',
    title:'gericht restaurant landing page',
    desc:'A landing page for a restaurant. Fully responsive with subtle animations.',
    stacks: [<IoLogoReact size={24}/>, <SiTailwindcss size={24} />, <SiFramer size={20}/>],
    github:'https://github.com/bilenciaga/gericht-restaurant',
    liveUrl:'https://happy-borg-a737ad.netlify.app/'
  },
  {
    id: 2,
    img:'/images/natours-screenshot.jpeg',
    title:'Natours Landing Page',
    desc:'I built this landing page as a SCSS learning project.',
    stacks: [<SiHtml5 size={24}/>, <IoLogoSass size={24}/>],
    github:'https://github.com/bilenciaga/natours-scss-project',
    liveUrl:'https://dancing-concha-546f6d.netlify.app/'
  },
  {
    id: 3,
    img:'/images/onething-screenshot.jpeg',
    title:'One Thing React App',
    desc:'A very simple react app that let you set a goal, and when when you achieve it, mark done ^_^ !',
    stacks: [<IoLogoReact size={24}/>, <SiTailwindcss size={24}/>, <SiVite size={22}/>],
    github:'https://github.com/bilenciaga/onething-react-app',
    liveUrl:'https://jade-melomakarona-0b8300.netlify.app/'
  }
]

export default projects