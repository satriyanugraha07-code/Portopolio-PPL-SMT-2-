import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import AnimatedTitle from '../components/AnimatedTitle'
import useMediaQuery from '../hooks/useMediaQuery'

export default function HeroSection() {
  const heroRef = useRef(null)
  const [isHeroActive, setIsHeroActive] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const forceMotion =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('motion')
  const reduceMotion = prefersReducedMotion && !forceMotion
  const isDesktop = useMediaQuery('(min-width: 900px) and (pointer: fine)')
  const pointerX = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 72, damping: 24, mass: 0.6 })
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const textX = useTransform(smoothX, [-0.5, 0.5], [-3, 3])
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -74])
  const heroContentOpacity = useTransform(
    scrollYProgress,
    [0, 0.62, 1],
    [1, 1, 0],
  )
  const heroContentScale = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    [1, 1, reduceMotion ? 1 : 0.94],
  )

  useEffect(() => {
    const activateHero = () => setIsHeroActive(true)
    window.addEventListener('welcome:complete', activateHero)

    if (!document.querySelector('.scroll-welcome')) {
      activateHero()
    }

    return () => window.removeEventListener('welcome:complete', activateHero)
  }, [])

  const handlePointerMove = (event) => {
    if (!isDesktop || reduceMotion) return
    const bounds = heroRef.current?.getBoundingClientRect()
    if (!bounds) return
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
  }

  const resetPointer = () => {
    pointerX.set(0)
  }

  return (
    <section
      className={`hero ${isHeroActive ? 'is-active' : ''}`}
      id="beranda"
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-labelledby="hero-title"
    >
      <div className="hero__background" aria-hidden="true">
        <img
          src="/assets/hero/hero-background.svg"
          alt=""
          draggable="false"
          fetchPriority="high"
        />
      </div>

      <motion.div
        className="hero__shadow"
        initial={false}
        animate={
          isHeroActive
            ? { opacity: 0.22, scaleX: 1 }
            : { opacity: 0, scaleX: 0.72 }
        }
        transition={{
          duration: 0.8,
          delay: reduceMotion ? 0 : 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-hidden="true"
      />

      <motion.div
        className="hero__person"
        initial={false}
        animate={
          isHeroActive
            ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' }
            : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }
        }
        transition={{
          opacity: {
            duration: 0.5,
            delay: reduceMotion ? 0 : 0.12,
          },
          clipPath: {
            duration: 1.15,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        <div className="hero__person-depth">
          <img
            src="/assets/hero/hero-person.svg"
            alt="Calon guru Teknik Mesin dalam suasana visual langit pastel"
            draggable="false"
            fetchPriority="high"
          />
        </div>
      </motion.div>

      <motion.div
        className="hero__content container"
        style={{
          y: heroContentY,
          x: textX,
          opacity: heroContentOpacity,
          scale: heroContentScale,
        }}
      >
        <motion.div
          className="hero__content-float"
          initial={false}
          animate={
            isHeroActive
              ? {
                  x: [0, 1.5, 0, -1, 0],
                  y: [0, -7, -3, 4, 0],
                }
              : { x: 0, y: 0 }
          }
          transition={{
            duration: 7,
            delay: reduceMotion ? 0.9 : 1.55,
            repeat: isHeroActive ? Number.POSITIVE_INFINITY : 0,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="hero__kicker"
            initial={false}
            animate={
              isHeroActive
                ? { opacity: 1, x: 0, scaleX: 1 }
                : { opacity: 0, x: -34, scaleX: 0.45 }
            }
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            PPG
          </motion.div>

          <div className="hero__heading-group">
            <AnimatedTitle
              reduceMotion={reduceMotion}
              isActive={isHeroActive}
              startDelay={0.18}
            />
            <motion.p
              className="hero__discipline"
              initial={false}
              animate={
                isHeroActive
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.68, delay: reduceMotion ? 0 : 0.62 }}
            >
              Teknik Mesin
            </motion.p>

            <motion.p
              className="hero__description"
              initial={false}
              animate={
                isHeroActive
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.68, delay: reduceMotion ? 0 : 0.76 }}
            >
              Perjalanan menjadi pendidik profesional yang reflektif, adaptif,
              dan berorientasi pada kebutuhan peserta didik.
            </motion.p>
          </div>

          <motion.div
            className="hero__actions"
            initial={false}
            animate={
              isHeroActive
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 24, scale: 0.96 }
            }
            transition={{
              duration: 0.72,
              delay: reduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a className="button button--primary" href="#refleksi-belajar">
              Jelajahi Refleksi <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#inovasi-seminar">
              Lihat Inovasi
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  )
}
