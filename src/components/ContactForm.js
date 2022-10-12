import {useState} from 'react';
import React from 'react'
import './ContactForm.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

  //toastify
  const notify = () => toast.success("Message Sent, Thank You!" , { theme:"dark" , position: toast.POSITION.TOP_BOTTOM });

  //inputs ref
  const nameRef = useRef(null)
  const emailRef = useRef(null)

  //email js
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs.sendForm('service_1xyyhwd', 'template_0mlamgx', form.current, 'Mgshelp8lsdtDdPSo')
      .then((result) => {
          console.log(result.text);
          notify();
      }, (error) => {
          console.log(error.text);
      })
  }

  return (
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
      <h4 className='contactForm__title'>get in touch</h4>
      <input className='contactForm__input' placeholder='Name' type='text' name="user_name" ref={nameRef} />
      <label className='contactForm__label'>Name</label>
      <input className='contactForm__input'placeholder='Email' type='email' name="user_email" ref={emailRef} />
      <label className='contactForm__label'>Email</label>
      <textarea className='contactForm__text-area' name="message" placeholder='Enter your message... ' />
      <input className='contactForm__submit btn' type="submit" value="Say Hi !" />
      <ToastContainer theme='dark'/>
    </form>
  )
};


export default ContactForm