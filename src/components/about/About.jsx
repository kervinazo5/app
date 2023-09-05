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
                <p>Martin's Fast Automotive Service aims to become one of the most trusted and respected repair shops in all of Georgia.</p>
            </div>
        </article>

        <article className="about__article">
            <div className="about__content">
               <h2 className="about__article-title">Vision</h2>
                <p>Martin's Fast Automotive Service is committed to offering a high quality service, that our clients are satisfied with our work, consider their needs satisfied.</p>
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
               <h2 className="about__article-title">Our values</h2>
                <p><strong>Responsibility:</strong> We comply with the client in the established manner and time. <br/><strong>Teamwork:</strong> We are a perfectly geared human group, whose skills and abilities allow us to achieve the proposed objectives.<br /><strong>Proactivity:</strong> We anticipate the needs of our customers.<br /><strong>Leadership:</strong> We are leaders in technological solutions, driving our team towards excellence in the services we offer.</p>
            </div>
        </article>
    </div>
</section>
  )
}

export default about