import React from 'react'
import './ContactSection.css'

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-info">
          <div className="contact-item">
            <h2>Triangle Production</h2>
            <p>Via della Giuliana 83/a, 00195 Roma (RM)</p>
      
          </div>
          
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:info@triangle.it">info@triangle.it</a></p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection