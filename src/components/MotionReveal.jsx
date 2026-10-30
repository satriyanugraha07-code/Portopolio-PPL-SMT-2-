import { motion } from 'framer-motion'

export default function MotionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.12,
  once = true,
}) {
  const initial =
    direction === 'left'
      ? { opacity: 0, x: -40, scale: 0.98 }
      : direction === 'right'
        ? { opacity: 0, x: 40, scale: 0.98 }
        : direction === 'down'
          ? { opacity: 0, y: -40, scale: 0.98 }
          : { opacity: 0, y: 36, scale: 0.98 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
