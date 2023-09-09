import React from 'react'
import './header.css'
import ME from '../../assets/header-decorator1.png'
// import MER from '../../assets/IMG-20220210-WA0088.jpg'
import {BsFacebook}  from 'react-icons/bs';
import {BsWhatsapp}  from 'react-icons/bs';
import {BsInstagram}  from 'react-icons/bs';
import {SiGooglemaps}  from 'react-icons/si';



const Header = () => {
  return (
    <section id='#'>
      <header>
      <div className="container header__container">
          <h1 className="header__title">Martin's Fast Automotive <br/> Service</h1>
          <p className="lead">Automoviles, airplanes and boats. Martin Torres, specialist in automotive mechanics.</p>
        

          <div className="header__socials">
              <a href='https://www.facebook.com/martintprada?mibextid=ZbWKwL' target="_blank"><BsFacebook/></a>
              <a href='#' target="_blank"><BsWhatsapp/></a>
              <a href='https://instagram.com/martinsfastauto?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D' target="_blank"><BsInstagram/></a>
              <a href='https://maps.google.com/?cid=3376485699300949514&entry=gps' target="_blank"><SiGooglemaps/></a>
          </div>
        <div className="btn__container">
          <button className='btn btn-primary'>CONTACT</button>
        </div>
      </div>
      <div className="header__decorator-1">
        <img src={ME} alt="decorator" />
      </div>
  </header>
</section>
  )
}

export default Header