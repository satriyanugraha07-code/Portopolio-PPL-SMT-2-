import { useEffect, useRef } from 'react'

export default function EdgeScrollbar() {
  const trackRef = useRef(null)
  const thumbRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const thumb = thumbRef.current
    let animationFrame
    let hideTimer

    const getActiveScroller = () =>
      document.querySelector('.scroll-welcome') || document.scrollingElement

    const updateThumb = () => {
      animationFrame = undefined

      const scroller = getActiveScroller()
      if (!track || !thumb || !scroller) return

      const isWelcomeScroller = scroller.classList.contains('scroll-welcome')
      const viewportHeight = isWelcomeScroller
        ? scroller.clientHeight
        : window.innerHeight
      const scrollHeight = scroller.scrollHeight
      const scrollTop = scroller.scrollTop
      const scrollRange = Math.max(scrollHeight - viewportHeight, 0)
      const availableHeight = Math.max(track.clientHeight - 6, 0)
      const thumbHeight = Math.min(
        availableHeight,
        Math.max(48, availableHeight * (viewportHeight / scrollHeight)),
      )
      const thumbRange = Math.max(availableHeight - thumbHeight, 0)
      const progress = scrollRange > 0 ? scrollTop / scrollRange : 0

      track.classList.toggle('is-scrollable', scrollRange > 0)
      thumb.style.height = `${thumbHeight}px`
      thumb.style.transform = `translate3d(0, ${progress * thumbRange}px, 0)`
    }

    const requestUpdate = () => {
      if (animationFrame) return
      animationFrame = window.requestAnimationFrame(updateThumb)
    }

    const hideScrollbar = () => {
      window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => {
        track?.classList.remove('is-visible')
      }, 320)
    }

    const handlePointerMove = (event) => {
      const isNearRightEdge = window.innerWidth - event.clientX <= 42

      if (isNearRightEdge) {
        window.clearTimeout(hideTimer)
        requestUpdate()
        track?.classList.add('is-visible')
        return
      }

      if (track?.classList.contains('is-visible')) {
        hideScrollbar()
      }
    }

    const handlePointerLeave = () => {
      window.clearTimeout(hideTimer)
      track?.classList.remove('is-visible')
    }

    requestUpdate()
    document.addEventListener('scroll', requestUpdate, true)
    window.addEventListener('resize', requestUpdate)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('welcome:complete', requestUpdate)
    document.addEventListener('mouseleave', handlePointerLeave)

    return () => {
      window.clearTimeout(hideTimer)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      document.removeEventListener('scroll', requestUpdate, true)
      window.removeEventListener('resize', requestUpdate)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('welcome:complete', requestUpdate)
      document.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [])

  return (
    <div className="edge-scrollbar" ref={trackRef} aria-hidden="true">
      <span className="edge-scrollbar__thumb" ref={thumbRef} />
    </div>
  )
}
