import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const clamp = (value, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value))

const FRAME_COUNT = 192
const getFrameUrl = (index) =>
  `/assets/welcome-frames-v2/frame-${String(index + 1).padStart(4, '0')}.webp`

export default function ScrollWelcome() {
  const scrollContainerRef = useRef(null)
  const canvasRef = useRef(null)
  const framesRef = useRef([])
  const targetFrameRef = useRef(0)
  const displayedFrameRef = useRef(0)
  const animationFrameRef = useRef()
  const [loadedFrames, setLoadedFrames] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const isExitingRef = useRef(false)

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 24,
    mass: 0.45,
  })

  const welcomeOpacity = useTransform(
    smoothProgress,
    [0.04, 0.1, 0.22, 0.29],
    [0, 1, 1, 0],
  )
  const welcomeY = useTransform(
    smoothProgress,
    [0.04, 0.12, 0.29],
    [80, 0, -72],
  )
  const welcomeScale = useTransform(
    smoothProgress,
    [0.04, 0.13, 0.29],
    [0.88, 1, 1.06],
  )

  const toOpacity = useTransform(
    smoothProgress,
    [0.28, 0.35, 0.44, 0.51],
    [0, 1, 1, 0],
  )
  const toY = useTransform(
    smoothProgress,
    [0.28, 0.37, 0.51],
    [72, 0, -68],
  )
  const toScale = useTransform(
    smoothProgress,
    [0.28, 0.37, 0.51],
    [0.88, 1, 1.08],
  )

  const journeyOpacity = useTransform(
    smoothProgress,
    [0.5, 0.58, 0.79, 0.87],
    [0, 1, 1, 0],
  )
  const journeyY = useTransform(
    smoothProgress,
    [0.5, 0.61, 0.87],
    [84, 0, -76],
  )
  const journeyScale = useTransform(
    smoothProgress,
    [0.5, 0.62, 0.87],
    [0.86, 1, 1.06],
  )
  const veilOpacity = useTransform(
    smoothProgress,
    [0, 0.3, 0.66, 0.92],
    [0.58, 0.4, 0.32, 0.5],
  )
  const introScale = useTransform(
    smoothProgress,
    [0, 0.82, 1],
    [1.04, 1, 0.97],
  )
  const endOpacity = useTransform(
    smoothProgress,
    [0.87, 0.93, 1],
    [0, 1, 1],
  )
  const endY = useTransform(
    smoothProgress,
    [0.87, 0.94, 1],
    [30, 0, -16],
  )
  const guideOpacity = useTransform(
    smoothProgress,
    [0, 0.06, 0.12, 0.16],
    [1, 1, 0, 0],
  )
  const progressScale = useTransform(smoothProgress, [0, 1], [0, 1])
  const drawFrame = (index) => {
    const canvas = canvasRef.current
    const image = framesRef.current[index]
    if (!canvas || !image?.complete || !image.naturalWidth) return false

    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
    const targetWidth = Math.round(width * pixelRatio)
    const targetHeight = Math.round(height * pixelRatio)

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth
      canvas.height = targetHeight
    }

    const context = canvas.getContext('2d', { alpha: false })
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = 'high'

    const scale = Math.max(
      width / image.naturalWidth,
      height / image.naturalHeight,
    )
    const drawWidth = image.naturalWidth * scale
    const drawHeight = image.naturalHeight * scale
    const drawX = (width - drawWidth) / 2
    const drawY = (height - drawHeight) / 2

    context.clearRect(0, 0, width, height)
    context.drawImage(image, drawX, drawY, drawWidth, drawHeight)
    displayedFrameRef.current = index
    canvas.dataset.frame = String(index + 1)
    return true
  }

  const drawNearestLoadedFrame = () => {
    const target = targetFrameRef.current
    if (drawFrame(target)) return

    for (let distance = 1; distance < FRAME_COUNT; distance += 1) {
      const before = target - distance
      const after = target + distance
      if (before >= 0 && drawFrame(before)) return
      if (after < FRAME_COUNT && drawFrame(after)) return
    }
  }

  const syncCanvasToProgress = (progress) => {
    const frameProgress = clamp((progress - 0.01) / 0.9)
    targetFrameRef.current = Math.round(frameProgress * (FRAME_COUNT - 1))

    if (!animationFrameRef.current) {
      const advanceFrame = () => {
        const current = displayedFrameRef.current
        const target = targetFrameRef.current

        if (current === target) {
          animationFrameRef.current = undefined
          return
        }

        const next = current + Math.sign(target - current)
        drawFrame(next)
        animationFrameRef.current = window.requestAnimationFrame(advanceFrame)
      }

      animationFrameRef.current = window.requestAnimationFrame(advanceFrame)
    }

    if (progress >= 0.995 && !isExitingRef.current) {
      isExitingRef.current = true
      setIsExiting(true)
    }
  }

  useMotionValueEvent(scrollYProgress, 'change', syncCanvasToProgress)

  useEffect(() => {
    let isActive = true
    let loaded = 0
    const frames = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image()
      image.decoding = 'async'
      image.fetchPriority = index < 24 ? 'high' : 'auto'
      image.src = getFrameUrl(index)
      image.onload = () => {
        if (!isActive) return
        loaded += 1
        if (loaded === 1 || index === targetFrameRef.current) {
          drawNearestLoadedFrame()
        }
        if (loaded === FRAME_COUNT || loaded % 6 === 0) {
          setLoadedFrames(loaded)
        }
      }
      return image
    })

    framesRef.current = frames

    const handleResize = () => drawFrame(displayedFrameRef.current)
    window.addEventListener('resize', handleResize)

    return () => {
      isActive = false
      frames.forEach((image) => {
        image.onload = null
      })
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isComplete) {
      document.body.classList.remove('welcome-active')
      return undefined
    }

    document.body.classList.add('welcome-active')
    return () => {
      document.body.classList.remove('welcome-active')
    }
  }, [isComplete])

  if (isComplete) return null

  return (
    <motion.section
      className="scroll-welcome"
      ref={scrollContainerRef}
      animate={{ y: isExiting ? '-100%' : '0%' }}
      transition={{ duration: 0.82, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (isExiting) {
          if (animationFrameRef.current) {
            window.cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = undefined
          }
          framesRef.current = []
          window.dispatchEvent(new Event('welcome:complete'))
          setIsComplete(true)
        }
      }}
      aria-label="Welcome to PPG journey"
    >
      <div className="scroll-welcome__track">
        <motion.div className="scroll-welcome__sticky" style={{ scale: introScale }}>
        <canvas
          className="scroll-welcome__canvas"
          ref={canvasRef}
          role="img"
          aria-label="Video pembuka perjalanan PPG Prajabatan"
        />

        {loadedFrames < FRAME_COUNT && (
          <div className="scroll-welcome__loader" aria-live="polite">
            <span>Menyiapkan perjalanan</span>
            <strong>{Math.round((loadedFrames / FRAME_COUNT) * 100)}%</strong>
          </div>
        )}

        <motion.div
          className="scroll-welcome__veil"
          style={{ opacity: veilOpacity }}
          aria-hidden="true"
        />

        <div className="scroll-welcome__copy">
          <motion.span
            className="scroll-welcome__word scroll-welcome__word--welcome"
            style={{
              opacity: welcomeOpacity,
              y: welcomeY,
              scale: welcomeScale,
            }}
          >
            Welcome
          </motion.span>

          <motion.span
            className="scroll-welcome__word scroll-welcome__word--to"
            style={{
              opacity: toOpacity,
              y: toY,
              scale: toScale,
            }}
          >
            To
          </motion.span>

          <motion.span
            className="scroll-welcome__word scroll-welcome__word--journey"
            style={{
              opacity: journeyOpacity,
              y: journeyY,
              scale: journeyScale,
            }}
          >
            <em>PPG</em> Journey
          </motion.span>
        </div>

        <motion.div
          className="scroll-welcome__end"
          style={{ opacity: endOpacity, y: endY }}
        >
          <span>Masuk ke PPG Journey</span>
          <ArrowDown size={18} aria-hidden="true" />
        </motion.div>

        <motion.div
          className="scroll-welcome__guide"
          style={{ opacity: guideOpacity }}
        >
          <span>Scroll untuk memutar</span>
          <span className="scroll-welcome__mouse" aria-hidden="true">
            <motion.i
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
            />
          </span>
        </motion.div>

        <div className="scroll-welcome__progress" aria-hidden="true">
          <motion.span style={{ scaleX: progressScale }} />
        </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
