import React from 'react'
import './service.css'
import {FcServices} from 'react-icons/fc'
import {MdMedicalServices} from 'react-icons/md'
import {GiAutoRepair} from 'react-icons/gi'
import {FcAutomotive} from 'react-icons/fc'
import {MdCarRepair} from 'react-icons/md'
import {FcAutomatic} from 'react-icons/fc'




const Service = () => {
  return (
    <section id="service">
        <h5 className='title__primary'>What I Offer</h5>
        <h2 className='title'>services</h2>
        <div className="container service__container">
           <article className='service'>
                <i><FcServices/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
           <article className='service'>
                <i><MdMedicalServices/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
           <article className='service'>
                <i><GiAutoRepair/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
           <article className='service'>
                <i><FcAutomotive/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
           <article className='service'>
                <i><MdCarRepair/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
           <article className='service'>
                <i><FcAutomatic/></i>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </article>
        </div>
    </section>
  )
}

export default Service