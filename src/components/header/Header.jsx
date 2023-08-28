import React from 'react'
import './header.css'
import ME from '../../assets/header-decorator1.png'
import {BsFacebook}  from 'react-icons/bs';
import {BsWhatsapp}  from 'react-icons/bs';
import {BsInstagram}  from 'react-icons/bs';
import {SiGooglemaps}  from 'react-icons/si';


const Header = () => {
  return (
    <header id='#home'>
    <div className="container header__container">
        <h1 className="header__title">Martin's Fast Automotive <br/> Service</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias, eius maiores asperiores tempore quo et ut quas dolore. Consectetur quasi repellendus maxime, omnis tempora quod quas mollitia praesentium optio.</p>
        <a href="Contact.html" class="btn btn-primary">Contact</a>


        <div className="header__socials">
            <a href="#" target="_blank"><BsFacebook/></a>
            <a href="#" target="_blank"><BsWhatsapp/></a>
            <a href="#" target="_blank"><BsInstagram/></a>
            <a href="#" target="_blank"><SiGooglemaps/></a>
        </div>
    </div>
    <div className="header__decorator-1">
      <img src={ME} alt="decorator" />
    </div>
</header>
  )
}

export default Header