import React, { useState } from 'react'
import Logo from "../../assets/logo.png" 
import './nav.css'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
    const [isNavShowing,setIsNavShowing] = useState(false);

  return (

    <nav>
    <div className="container nav__container">
            <div className="logo">
            <img src={Logo} alt="Nav Logo" />
            </div>
            
        
         <ul className={`nav__links ${isNavShowing ? 'show__nav': 'hide__nav'}`}> 
            <li><a href="#" className={activeNav === '#' ? 'active-nav' : ''}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active-nav' : ''}>About</a></li>
            <li><a href="#service" onClick={() => setActiveNav('#service') } className={activeNav === '#service' ? 'active-nav' : ''}>Services</a></li>
            <li><a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active-nav' : ''}>Contact</a></li>
        </ul>
        <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
            {
                isNavShowing ? <MdOutlineClose/> : <FaBars/>
            }
        </button>
    </div>
</nav>

  )
}

export default Nav