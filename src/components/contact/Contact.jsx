import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>Email@gmail.com</h5>
                    <a href="mailto:email@gmail.com" target='_blank'>Send email</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messager</h4>
                    <h5>Email@gmail.com</h5>
                    <a href="https://m.me/ernest.achiever" target='_blank'>Send email</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+1 404 581-2663</h5>
                    <a href="https://api.whatsapp.com/send?phone+14045812663" target='_blank'>Send email</a>
                </article>
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email'  placeholder='Your email' required/>
                    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact