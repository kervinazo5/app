import React from 'react'
import './slider.css'
import AVATAR1 from '../../assets/slider1.jpg'

function Slider() {
  return (
    <section id="slider">
        <h5>Review from Cliente</h5>
        <h2>Portafolio</h2>
        <div className="container portafolio__container">
            <article className="portafolio">
                <div className="client__img">
                    <img src={AVATAR1} alt="" />
                </div>
            </article>
        </div>
    </section>
  )
}

export default Slider