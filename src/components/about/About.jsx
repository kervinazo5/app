import React from 'react'
import './about.css'
import ONE from '../../assets/1.png'
import TWO from '../../assets/2.png'
import TR from '../../assets/3.png'

const about = () => {
  return (
    <section id="about">
    <h1 className="about__title">About Us</h1>
    <div className="container">
        <article className="about__article">
            <div className="about__image">
              <img src={ONE} alt="" />
            </div>
            <div className="about__content">
               <h2 className="about__article-title">Mission</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis laudantium saepe voluptatem? Harum fuga odit dolores omnis odio quia optio, architecto ipsa dicta quaerat sint expedita saepe. Maiores, omnis!</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </article>

        <article className="about__article">
            <div className="about__content">
               <h2 className="about__article-title">Service Automotive</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis laudantium saepe voluptatem? Harum fuga odit dolores omnis odio quia optio, architecto ipsa dicta quaerat sint expedita saepe. Maiores, omnis!</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
            <div className="about__image">
              <img src={TWO} alt="" />
            </div>
        </article>

        <article className="about__article">
            <div className="about__image">
                <img src={TR} alt="" />
            </div>
            <div className="about__content">
               <h2 className="about__article-title">Service Automotive</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis laudantium saepe voluptatem? Harum fuga odit dolores omnis odio quia optio, architecto ipsa dicta quaerat sint expedita saepe. Maiores, omnis!</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </article>
    </div>
</section>
  )
}

export default about