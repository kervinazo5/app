import React from 'react'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_61264au', 'template_ln1ubhh', form.current, 'pEKrhM6IVCwfHGMtm')

      e.target.reset()
       
    };
  return (
    <section id="contact">
        <h5 className="contact__title-primary">Get In Touch</h5>
        <h2 className="contact__title">Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className="contact__option-icon"/>
                    <h4>Email</h4>
                    <h5>Email@gmail.com</h5>
                    <a href={"mailto:email@gmail.com"} target='_blank' rel="noreferrer">Send email</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine className="contact__option-icon"/>
                    <h4>Messager</h4>
                    <h5>Email@gmail.com</h5>
                    <a href={"https://m.me/106260554341707"} target='_blank' rel="noreferrer">Send Messager</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+1 4045948866</h5>
                    <a href={"https://api.whatsapp.com/send?phone=%2B14045948866"} target='_blank' rel="noreferrer">Send Whatsapp</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email"  placeholder="Your email" required/>
                    <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
        </div>
    </section>
  )
}

export default Contact