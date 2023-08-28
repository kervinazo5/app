import React, { useState } from 'react'
import './nav.css'
import {FiMenu}  from 'react-icons/fi';
import {GrClose}  from 'react-icons/gr';

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#home')
  return (
  <nav>
      <div className="container nav__container">
          <ul className="nav__items">
              <li><a href="#home" className={activeNav === '#home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}>About</a></li>
              <li><a href="#service" onClick={() => setActiveNav('#service') } className={activeNav === '#service' ? 'active' : ''}>Service</a></li>
              <li><a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
          </ul>

          <a href="index.html" className="nav__logo"><h3>Martin's</h3></a>

          <button id="menu-btn"><i><FiMenu/></i></button>
          <button id="close-btn"><i><GrClose/></i></button>
      </div>
  </nav>
  )
}

export default Nav