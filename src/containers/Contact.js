import React from 'react'
import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <SectionHeading text=" what's next ?" />
      <ContactForm />
    </section>
  )
}

export default Contact