import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <aside>
             <h4>Get in Touch</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quod. Doloremque, in saepe. Laboriosam quisquam dolor tenetur non, provident, rerum atque sint debitis repellat fuga expedita libero dolores nulla fugiat?</p>
                <div className="info">
                    <article>
                        <span className="icon"><i class="uil uil-envelope"></i></span>
                        <div className="details">
                            <h5>CHAT width us</h5>
                            <small>send us an email we´ll respond shortly</small>
                            <p>infowegattor@gattor.com</p>
                        </div>
                    </article>
                    <article>
                        <span className="icon"><i class="uil uil-map-marker"></i></span>
                        <div className="details">
                            <h5>Oficce</h5>
                            <small>Come say hello at our office Hq</small>
                            <p>123 mills street</p>
                            <p>EAST AIrport, accra</p>
                        </div>
                    </article>
                    <article>
                        <span className="icon"><i class="uil uil-phone"></i></span>
                        <div className="details">
                            <h5>Phone</h5>
                            <small>Mon Fri form 9am - 5pm</small>
                            <p>+(123) 4656-7890</p>
                        </div>
                    </article>
                </div>
            </aside>
            </div>
    </section>
  )
}

export default Contact