import React, { useRef, useEffect, useState } from 'react'
import './TVScreen.css'

const TVScreen = ({ videoProgress, framesPath = '/frames/era-1987', totalFrames = 1295, onLoadingChange, onLoadingProgress }) => {
    const canvasRef = useRef(null)
    const [currentFrame, setCurrentFrame] = useState(1)
    const imageCache = useRef(new Map())
    const lastFrameRef = useRef(1)
    const dprRef = useRef(window.devicePixelRatio || 1)
    const preloadingRef = useRef(new Set()) // Track what's being preloaded
    const maxCacheSize = 200 // Increased for sequential loading
    const sequentialLoadingRef = useRef({ isLoading: false, currentFrame: 1, completed: false })
    
    // Mobile detection and frame path selection
    const isMobile = () => {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
    
    const getFramesPath = () => {
        return isMobile() ? '/frames/mobile' : framesPath
    }

    // Get correct total frames based on device type
    const getTotalFrames = () => {
        return isMobile() ? 1273 : totalFrames // Mobile: 1273, Desktop: 1295 (from props)
    }

    const loadImage = (framePath) => {
        return new Promise((resolve, reject) => {
            if (imageCache.current.has(framePath)) {
                resolve(imageCache.current.get(framePath))
                return
            }
            const img = new Image()
            img.onload = () => {
                // Manage cache size - remove oldest entries if cache is full
                if (imageCache.current.size >= maxCacheSize) {
                    const firstKey = imageCache.current.keys().next().value
                    imageCache.current.delete(firstKey)
                }
                imageCache.current.set(framePath, img)
                resolve(img)
            }
            img.onerror = reject
            img.src = framePath
        })
    }

    // Progressive frame loading - only loads initial frames and then loads more as needed
    const startSequentialLoading = () => {
        if (sequentialLoadingRef.current.isLoading || sequentialLoadingRef.current.completed) return
        
        sequentialLoadingRef.current.isLoading = true
        const currentFramesPath = getFramesPath()
        const currentTotalFrames = getTotalFrames()
        
        // Notify parent that loading started
        if (onLoadingChange) onLoadingChange(true)
        
        // Reduce initial frames to load to improve performance
        const initialFramesToLoad = 50;
        
        const loadNextFrame = (frameNum) => {
            if (frameNum > initialFramesToLoad) {
                // Mark as ready after loading initial frames
                sequentialLoadingRef.current.isLoading = false
                sequentialLoadingRef.current.completed = true // Set completed flag to prevent restarting
                // Notify parent that initial loading completed
                if (onLoadingChange) onLoadingChange(false)
                if (onLoadingProgress) onLoadingProgress(100)
                console.log('Initial frames loaded! Timeline ready.')
                return
            }
            
            const framePath = `${currentFramesPath}/frame_${frameNum.toString().padStart(4, '0')}.avif`
            
            // Update progress based on initial frames
            const progress = (frameNum / initialFramesToLoad) * 100
            if (onLoadingProgress) onLoadingProgress(progress)
            
            // Skip if already cached
            if (imageCache.current.has(framePath)) {
                sequentialLoadingRef.current.currentFrame = frameNum + 1
                setTimeout(() => loadNextFrame(frameNum + 1), 10) // Slower for better power management
                return
            }
            
            loadImage(framePath)
                .then(() => {
                    sequentialLoadingRef.current.currentFrame = frameNum + 1
                    // Increased delay to reduce power consumption
                    setTimeout(() => loadNextFrame(frameNum + 1), 50) 
                })
                .catch(() => {
                    console.warn(`Failed to load frame ${frameNum}, continuing...`)
                    sequentialLoadingRef.current.currentFrame = frameNum + 1
                    setTimeout(() => loadNextFrame(frameNum + 1), 50)
                })
        }
        
        // Start loading from frame 1
        loadNextFrame(1)
    }

    // Preload frames around current position (reduced range for immediate needs)
    const preloadNearbyFrames = (centerFrame) => {
        const preloadRange = 10 // Small range for immediate scrolling needs
        const framesToPreload = []
        const currentTotalFrames = getTotalFrames()
        
        // Calculate frames to preload (10 behind, 10 ahead for immediate needs)
        for (let i = -preloadRange; i <= preloadRange; i++) {
            const frameNum = centerFrame + i
            if (frameNum >= 1 && frameNum <= currentTotalFrames) {
                framesToPreload.push(frameNum)
            }
        }
        
        // Only preload if not already cached and not being loaded sequentially
        const currentFramesPath = getFramesPath()
        framesToPreload.forEach(frameNum => {
            const framePath = `${currentFramesPath}/frame_${frameNum.toString().padStart(4, '0')}.avif`
            if (!imageCache.current.has(framePath) && !preloadingRef.current.has(framePath)) {
                preloadingRef.current.add(framePath)
                loadImage(framePath)
                    .then(() => preloadingRef.current.delete(framePath))
                    .catch(() => preloadingRef.current.delete(framePath))
            }
        })
    }

    const drawFrame = async (frameNumber) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const currentFramesPath = getFramesPath()
        const framePath = `${currentFramesPath}/frame_${frameNumber.toString().padStart(4, '0')}.avif`

        try {
            const img = await loadImage(framePath)

            // Canvas size in CSS pixels (accounting for DPR transform)
            const dpr = dprRef.current
            const cw = canvas.width / dpr
            const ch = canvas.height / dpr

            // Clear
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, cw, ch)

            // Mobile: fit entire frame (no cropping), Desktop: cover (crop if needed)
            const iw = img.naturalWidth || img.width
            const ih = img.naturalHeight || img.height
            
            let scale, targetW, targetH, dx, dy
            
            if (isMobile()) {
                // Mobile: contain - show entire frame with letterboxing if needed
                scale = Math.min(cw / iw, ch / ih)
                targetW = Math.round(iw * scale)
                targetH = Math.round(ih * scale)
                dx = Math.floor((cw - targetW) / 2)
                dy = Math.floor((ch - targetH) / 2)
            } else {
                // Desktop: cover - crop if needed to eliminate gutters
                scale = Math.max(cw / iw, ch / ih)
                targetW = Math.round(iw * scale)
                targetH = Math.round(ih * scale)
                dx = Math.floor((cw - targetW) / 2)
                dy = Math.floor((ch - targetH) / 2)
            }

            ctx.drawImage(img, dx, dy, targetW, targetH)
        } catch (error) {
            console.warn(`Failed to load frame: ${framePath}`)
            const dpr = dprRef.current
            const cw = canvas.width / dpr
            const ch = canvas.height / dpr
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, cw, ch)
        }
    }

    useEffect(() => {
        const currentTotalFrames = getTotalFrames()
        const frameNumber = Math.max(1, Math.min(
            Math.round(videoProgress * currentTotalFrames) || 1,
            currentTotalFrames
        ))
        if (frameNumber !== lastFrameRef.current) {
            lastFrameRef.current = frameNumber
            setCurrentFrame(frameNumber)
            drawFrame(frameNumber)
            
            // Preload nearby frames for smooth scrolling
            preloadNearbyFrames(frameNumber)
            
            // Start sequential loading if not already started
            startSequentialLoading()
            
        }
    }, [videoProgress, totalFrames, framesPath])

    // Init and keep canvas sized to viewport (crisp on Retina)
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const setSize = () => {
            const dpr = window.devicePixelRatio || 1
            dprRef.current = dpr
            canvas.width = Math.floor(window.innerWidth * dpr)
            canvas.height = Math.floor(window.innerHeight * dpr)
            canvas.style.width = '100vw'
            canvas.style.height = '100vh'
            const ctx = canvas.getContext('2d')
            // Use CSS pixel coordinates for drawing
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            ctx.fillStyle = '#000000'
            ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)
        }

        setSize()
        window.addEventListener('resize', setSize)
        imageCache.current.clear()
        setCurrentFrame(1)
        lastFrameRef.current = 1
        drawFrame(1)
        
        // Start sequential loading immediately after initial setup
        setTimeout(() => {
            startSequentialLoading()
        }, 100) // Reduced delay for faster start

        return () => {
            window.removeEventListener('resize', setSize)
            // Clear preloading tracking on cleanup
            preloadingRef.current.clear()
            sequentialLoadingRef.current = { isLoading: false, currentFrame: 1, completed: false }
        }
    }, [getFramesPath()]) // Add dependency to re-initialize when frame path changes

    return (
        <div className="tv-screen">
            <div className="screen-content">
                <canvas
                    ref={canvasRef}
                    className="era-frame"
                    style={{ display: 'block', background: '#000' }}
                />
            </div>
        </div>
    )
}

export default TVScreen