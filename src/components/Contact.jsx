import React from 'react'
import './Contact.css'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <section className="contact-page">
        <div className="contact-container">

          <div className="contact-info">
            <div className="contact-item">
              <h2>Triangle Production</h2>
              <p>Via della Giuliana 83/a, 00195 Roma (RM)</p>
            </div>
            
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:triangleproduction@legalmail.it">info@triangle.it</a></p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact