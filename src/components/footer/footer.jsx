import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
    <div className="container footer__container">
        <div className="footer__1">

                <a href="index.html" className="footer_logo"><h3>Martin's</h3></a>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing!</p>
            <div className="footer__subscribe">
                <input type="email" placeholder="Enter Email" required />
                <button type="submit"><i className="uil uil-arrow-rigth"></i></button>
            </div>    
        </div>
        <div className="footer__2">
            <h4>Permalinks</h4>
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#contact"></a>Contact</li>
            </ul>
        </div>
        <div className="footer__3">
            <h4>Primacy</h4>
            <ul className="primacy">
                <li><a href="#"></a>Privacy Policy</li>
                <li><a href="#"></a>Terms and conditions</li>
                <li><a href="#"></a>Refund Policy</li>
            </ul>
        </div>
        <div className="footer__4"> 
            <h4>Contact Us</h4>
            <p>+0 234 567 8798 <br/> shakir26@gmail.com</p>
            <ul className="footer__socials">
                 <li><a href="#" target="_blank"><i></i></a></li> 
                 <li><a href="#" target="_blank"><i></i></a></li>
                 <li><a href="#" target="_blank"><i></i></a></li>
                 <li><a href="#" target="_blank"><i></i></a></li>
            </ul>
        </div>
    </div>
    <div className="copyright">
        <small>Copyrigth &copy; Kervinazo</small>
    </div>
</footer>
  )
}

export default footer