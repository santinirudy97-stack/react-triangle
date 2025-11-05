import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company-info">
          <div className="company-name">Triangle Production S.r.l.</div>
          <div className="company-details">
            <div className="detail-row">
              <span>Sede legale: Via della Giuliana 83/a, 00195 Roma (RM)</span>
            </div>
            <div className="detail-row">
              <span>P.IVA 01895271003 • C.F. 07876540589 • REA RM634822</span>
            </div>
            <div className="detail-row">
              <span>Capitale sociale € 96.900,00 • Società a socio unico</span>
            </div>
            <div className="detail-row">
              <span>PEC: triangleproduction@legalmail.it</span>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
            <Link to="/terms" className="footer-link">Termini e Condizioni</Link>
          </div>
          <div className="footer-copyright">
            © 2025 Triangle Production S.r.l. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer