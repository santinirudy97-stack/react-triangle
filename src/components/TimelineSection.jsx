import React, { useRef, useEffect, useState } from 'react'
import './TimelineSection.css'

function TimelineSection() {
  const videoRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isEnded, setIsEnded] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reload video when source changes due to mobile/desktop switch
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [isMobile])

  // Handle video playback when scrolled into view
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Video event handlers
    const handleLoadStart = () => {
      setIsLoading(true)
    }

    const handleCanPlay = () => {
      setIsLoading(false)
    }

    const handleEnded = () => {
      setIsEnded(true)
    }

    // Add video event listeners
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('ended', handleEnded)

    const handleScroll = () => {
      if (!video) return

      const videoSection = document.querySelector('.video-section')
      if (!videoSection) return

      const rect = videoSection.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isVisible) {
        if (video.paused && !isEnded) {
          // Try to play the video when it becomes visible and not ended
          video.play().catch(err => {
            console.log('Video play failed:', err)
          })
        }
      } else {
        if (!video.paused) {
          video.pause()
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)

      // Remove video event listeners
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('ended', handleEnded)
    }
  }, [isMobile, isEnded])

  // Handle replay button click
  const handleReplay = () => {
    const video = videoRef.current
    if (!video) return

    setIsEnded(false)
    video.currentTime = 0
    video.play().catch(err => {
      console.log('Video replay failed:', err)
    })
  }

  return (
    <section className="timeline-section">
      <div className="video-section">
        <video
          ref={videoRef}
          className="timeline-video"
          // controls removed
          playsInline
          muted
          preload="none"
          poster={isMobile ? '/bgmobile.avif' : '/bg.avif'}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source
            src={isMobile ? '/showreel-720p.mp4' : '/showreel-1080p.mp4'}
            type="video/mp4"
          />
        </video>

        {/* Loading spinner */}
        {isLoading && (
          <div className="timeline-loading-overlay">
            <div className="loading-spinner"></div>
          </div>
        )}

        {/* Replay overlay */}
        {isEnded && (
          <div className="timeline-replay-overlay">
            <button className="replay-button" onClick={handleReplay}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 4v6h6"></path>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
              </svg>
              <span>Replay</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default TimelineSection