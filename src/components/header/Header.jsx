import React from 'react'
import './header.css'
import ME from '../../assets/header-decorator1.png'
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
          <p className="lead">Automobiles, airplanes and boats. Martin Torres, specialist in automotive mechanics.</p>
        

          <div className="header__socials">
              <a href={'https://www.facebook.com/martintprada?mibextid=ZbWKwL'} target="_blank" rel="noreferrer"><BsFacebook/></a>
              <a href={'https://api.whatsapp.com/send?phone=%2B14045948866'} target="_blank" rel="noreferrer"><BsWhatsapp/></a>
              <a href={'https://instagram.com/martinsfastauto?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D'} target="_blank" rel="noreferrer"><BsInstagram/></a>
              <a href={'https://maps.google.com/?cid=3376485699300949514&entry=gps'} target="_blank" rel="noreferrer"><SiGooglemaps/></a>
          </div>
        <div className="btn__container">
          <button className="btn btn-primary">Contact</button>
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