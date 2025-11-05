import React, { useState, useEffect } from 'react'
import './Homepage.css'

function Homepage() {
  const logos = [
    '/clients/rai1.png', '/clients/rai2.png', '/clients/rai3.png',
    '/clients/rete4.png', '/clients/canale5.png', '/clients/italia1.png',
    '/clients/skyuno.png', '/clients/mtv.png', '/clients/tf1.png',
    '/clients/lasexta.png', '/clients/france2.png'
  ]
  // New: recent productions data (images from /public/tvs)
  const productions = [
    {
      title: 'Una Casa per Noi',
      desc: 'Dieci puntate in cui famiglie in cerca della casa dei sogni esplorano immobili reali e in realtà virtuale. Un “oggetto del cuore” guida la scelta finale, tra emozione e decisioni concrete.',
      image: '/recent-productions/unacasapernoi.png',
      channel: 'Rai 2',
      genre: 'Docu-reality',
    },
    {
      title: 'Cook40',
      desc: 'In 40 minuti si prepara un menu completo a tre portate: ogni puntata lo chef guida un ospite vip alla scoperta di ricette regionali semplici ma gustose — velocità, tradizione e gusto si incontrano ai fornelli.',
      image: '/recent-productions/cook40.png',
      channel: 'Rai 2',
      genre: 'Cooking show',
    },
    {
      title: 'Liberi Tutti',
      desc: 'Un game show ispirato alle escape room: sei celebrità chiuse in stanze tematiche devono risolvere enigmi, raccogliere indizi e comporre una “frase misteriosa” per guadagnare la libertà.',
      image: '/recent-productions/liberitutti.png',
      channel: 'Rai 2',
      genre: 'Game show',
    },
    {
      title: 'Da Quel Giorno',
      desc: 'Storie di persone che hanno vissuto un giorno fatale: momenti critici che hanno cambiato per sempre le loro vite e le hanno spinte alla rinascita. Un racconto di speranza dopo il buio.',
      image: '/recent-productions/daquelgiorno.png',
      channel: 'Rai 2',
      genre: 'Docu-serie',
    },
  ]
  const [flippedSet, setFlippedSet] = useState(new Set())
  const toggleFlip = (idx) => {
      setFlippedSet(prev => {
          const next = new Set(prev)
          if (next.has(idx)) next.delete(idx)
          else next.add(idx)
          return next
      })
  }
  const yearsSince1987 = new Date().getFullYear() - 1987
  const ROTATING_WORDS = ['TELEVISIONE', 'SPETTACOLO', 'PASSIONE', 'IDEE', 'ESPERIENZA', 'STORIE', 'EMOZIONI', 'TALENTO', 'INNOVAZIONE', 'RACCONTO', 'VISIONE',]
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="homepage">
      <div className="hero-content">
        {/* Logo Section - Removed since it's now in the sticky header */}
        
      
        
        {/* Main Heading */}
        <div className="hero-text">
          <div className="description">
            <div>
              <span className="years-count">{yearsSince1987}</span> <span className="anni-di">anni di</span>
            </div>
            <div>
              <span key={wordIndex} className="rotating-word">
                {ROTATING_WORDS[wordIndex]}
              </span>
            </div>
          </div>
        </div>

        {/* Opening Paragraph */}
        <div className="opening-paragraph">
          <p>
            <strong>Triangle Production</strong> è una casa di produzione televisiva che da <strong>oltre tre decenni </strong> 
              trasforma idee creative in <strong>contenuti di qualità</strong>. Specializzati in <strong>format innovativi</strong>,  
            <strong> documentari coinvolgenti</strong> e <strong>programmi di intrattenimento</strong>, lavoriamo con le <strong>principali 
            emittenti nazionali e internazionali</strong> per portare contenuti <strong>capaci di conquistare milioni di spettatori.</strong>
          </p>
        </div>
        
        
        
        
        {/* New section: Produzioni Recenti */}
        <section className="recent-productions">
          <h2 className="recent-title">Produzioni recenti:</h2>
          <div className="production-grid">
            {productions.map((p, idx) => {
              const backImagePng = p.backImage ?? p.image.replace(/(\.\w+)$/, 'back$1')
              const frontAvif = p.image.replace(/\.png$/i, '.avif')
              const frontWebp = p.image.replace(/\.png$/i, '.webp')
              const backAvif = backImagePng.replace(/\.png$/i, '.avif')
              const backWebp = backImagePng.replace(/\.png$/i, '.webp')
              return (
                <div
                  key={idx}
                  className={`production-card ${flippedSet.has(idx) ? 'is-flipped' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={flippedSet.has(idx)}
                  onClick={() => toggleFlip(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') toggleFlip(idx)
                  }}
                >
                  <div className="card-inner">
                    <div className="card-face front">
                      <img
                        src={frontAvif}
                        alt=""
                        className="card-image"
                        loading="lazy"
                        onError={(e) => (e.currentTarget.src = frontWebp)}
                      />
                      {/* animated TV noise overlay <div className="card-noise" aria-hidden="true"></div>*/}
                      <div className="card-title">{p.title}</div>
                      {/* logo overlay at bottom-center */}
                      <img src="/logogrey.png" alt="" className="card-logo" />
                      {/* removed front description */}
                    </div>
                    <div className="card-face back">
                      <img src={backAvif} alt="" className="back-image" />
                      <div className="card-title">{p.title}</div>
                      <div className="back-content">
                        <div className="card-meta">
                          <div className="meta-line">
                            <span className="meta-label">Canale:</span>
                            <span className="meta-value">{p.channel}</span>
                          </div>
                          <div className="meta-line">
                            <span className="meta-label">Genere:</span>
                            <span className="meta-value">{p.genre}</span>
                          </div>
                        </div>
                        <div className="card-desc">{p.desc}</div>
                      </div>
                      {/* logo overlay at bottom-center on the back */}
                      <img src="/logogrey.png" alt="" className="card-logo" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>


        {/* Clients Section */}
        <div className="clients-section">
          <p className="clients-label">Clienti principali:</p>
          <div className="clients-grid">
            {logos.map((src, i) => (
              <img key={`logo-${i}`} src={src} className="client-logo" alt="" loading="lazy" fetchpriority="low" />
            ))}
          </div>

        </div>

        

        {/* Removed: Storia e Produzioni link */}
        {/* (deleted the .scroll-indicator block) */}
      </div>
    </section>
  )
}

export default Homepage