import React, { useState, useEffect } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import TimelineSection from './components/TimelineSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookiePolicy from './components/CookiePolicy'
import Terms from './components/Terms'

function App() {
  const location = useLocation()
  const onContact = location.pathname.startsWith('/contact')
  const buttonText = onContact ? 'Home' : 'Contatti'
  const buttonTo = onContact ? '/' : '/contact'
  
  const [headerProgress, setHeaderProgress] = useState(0)
  const [logoSrc, setLogoSrc] = useState('/logo.png')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    if (onContact) {
      setHeaderProgress(0)
      // setLogoSrc('/logo.png')
      return
    }

    const handleScroll = () => {
      const timelineSection = document.querySelector('.timeline-section')
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        let progress = 0
        const triggerOffset = windowHeight * 0.8
        
        if (rect.top <= windowHeight - triggerOffset && rect.top > 0) {
          progress = (windowHeight - triggerOffset - rect.top) / (windowHeight - triggerOffset)
        } else if (rect.top <= 0) {
          progress = 1
        }
        
        progress = Math.max(0, Math.min(1, progress))
        setHeaderProgress(progress)

        // Switch logo based on scroll position relative to the timeline
        if (progress > 0 && rect.bottom > 0) {
          setLogoSrc('/logowhite.png')
        } else {
          setLogoSrc('/logo.png')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [onContact])

  return (
    <div className="App">
      {/* Sticky Header with Logo and Contact Button */}
      <header 
        className="sticky-header"
        style={{
          '--header-progress': headerProgress
        }}
      >
        <Link to="/" className="header-logo">
          <img 
            src={logoSrc} 
            alt="Triangle Production"
          />
        </Link>
        <Link
          to={buttonTo}
          className="header-contact-button"
          style={{
            opacity: 1 - headerProgress,
            pointerEvents: headerProgress > 0.8 ? 'none' : 'auto'
          }}
          aria-label={onContact ? 'Vai alla home' : 'Vai alla pagina contatti'}
        >
          {buttonText}
        </Link>
      </header>
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<><Homepage /> <TimelineSection /> <ContactSection /> <Footer /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  )
}

export default App