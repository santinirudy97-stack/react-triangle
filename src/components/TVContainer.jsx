import React from 'react'
import { motion } from 'framer-motion'
import TVFrame from './TVFrame'
import TVScreen from './TVScreen'
import './TVContainer.css'

const TVContainer = ({ scrollProgress, currentEra, tvEras, content, videoProgress }) => {
  return (
    <div className="tv-container">
      <div className="tv-wrapper">
        <TVScreen 
          content={content}
          scrollProgress={scrollProgress}
          currentEra={currentEra}
          tvEras={tvEras}
          videoProgress={videoProgress}
        />
        <TVFrame 
          currentEra={currentEra}
          tvModel={tvEras[currentEra]?.model}
          scrollProgress={scrollProgress}
        />
      </div>
    </div>
  )
}

export default TVContainer