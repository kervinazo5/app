import React from 'react'
import './portafolio.css'


const Portafolio = () => {
  return (
    <section id='portafolio'>
        <h5>My recent work</h5>
        <h2>Portafolio</h2>
        <div className="container portafolio__container">
            <article className='portafolio__item'>
                <div className="portafolio__item-image">
                    <img src={IMG} alt="" />
                    <h3>this is a portafolio item title</h3>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Portafolio