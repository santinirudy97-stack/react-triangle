import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './TVFrame.css'

const TVFrame = ({ currentEra, tvModel, scrollProgress }) => {
  // TV frame configurations for different eras - made larger
  const tvFrames = {
    'crt-1987': {
      image: '/tvs/crt-1987.png',
      width: '800px',
      height: '600px'
    },
    'crt-1995': {
      image: '/tvs/crt-1995.png',
      width: '820px',
      height: '620px'
    },
    'flat-2000': {
      image: '/tvs/flat-2000.png',
      width: '840px',
      height: '640px'
    },
    'lcd-2005': {
      image: '/tvs/lcd-2005.png',
      width: '860px',
      height: '520px'
    },
    'hd-2010': {
      image: '/tvs/hd-2010.png',
      width: '880px',
      height: '540px'
    },
    'smart-2015': {
      image: '/tvs/smart-2015.png',
      width: '900px',
      height: '560px'
    },
    'modern-2020': {
      image: '/tvs/modern-2020.png',
      width: '920px',
      height: '580px'
    },
    'future-2025': {
      image: '/tvs/future-2025.png',
      width: '940px',
      height: '600px'
    }
  }

  const currentFrame = tvFrames[tvModel] || tvFrames['crt-1987']

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tvModel}
        className="tv-frame-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img 
          src={currentFrame.image}
          alt={`TV Frame ${tvModel}`}
          className="tv-frame-image"
          style={{
            width: currentFrame.width,
            height: currentFrame.height,
            objectFit: 'contain'
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default TVFrame