import React from 'react'
import './service.css'
import {FcServices} from 'react-icons/fc'
 


const Service = () => {
  return (
    <section id="service">
        <h5>What I Offer</h5>
        <h2>services</h2>
        <div className="container service__container">
           <article className='service'>
                <i><FcServices/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
           <article className='service'>
                <i><FcServices/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
           <article className='service'>
                <i><FcServices/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
           <article className='service'>
                <i><FcServices/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
        </div>
    </section>
  )
}

export default Service