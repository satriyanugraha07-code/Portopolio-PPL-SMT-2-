import { motion } from 'framer-motion'

const title = 'SATRIYA NUGRAHA'

export default function AnimatedTitle({
  reduceMotion,
  isActive,
  startDelay = 0.24,
}) {
  return (
    <h1 className="hero__title" id="hero-title" aria-label={title}>
      <span aria-hidden="true">
        {title.split('').map((letter, index) => (
          <span
            className={`hero__letter-mask ${
              letter === ' ' ? 'hero__letter-mask--space' : ''
            }`}
            key={`${letter}-${index}`}
          >
            <motion.span
              className="hero__letter"
              initial={false}
              animate={
                isActive
                  ? { y: 0, rotate: 0, opacity: 1 }
                  : { y: '108%', rotate: 2, opacity: 0 }
              }
              transition={{
                duration: 0.72,
                delay: reduceMotion ? 0 : startDelay + index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          </span>
        ))}
      </span>
    </h1>
  )
}
