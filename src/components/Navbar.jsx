import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { navigationItems } from '../data/siteData'
import useActiveSection from '../hooks/useActiveSection'

const sectionIds = navigationItems.map(({ href }) => href.slice(1))

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const forceMotion =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('motion')
  const reduceMotion = prefersReducedMotion && !forceMotion
  const activeSection = useActiveSection(sectionIds)

  const handleNavigation = (event, href) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    setIsOpen(false)

    const targetTop =
      href === '#beranda'
        ? 0
        : target.getBoundingClientRect().top + window.scrollY

    window.history.pushState(null, '', href)
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      // Aktif setelah di-scroll 1/4 (25%) dari tinggi layar/hero
      const threshold = window.innerHeight * 0.25
      setIsScrolled(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.classList.toggle('menu-open', isOpen)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <motion.header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.72,
        delay: reduceMotion ? 0 : 1.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <nav className="navbar__inner container" aria-label="Navigasi utama">
        <a
          className="brand"
          href="#beranda"
          onClick={(event) => handleNavigation(event, '#beranda')}
        >
          <img
            className="brand__mark"
            src="/assets/logo-ust.png"
            alt="Logo Universitas Sarjanawiyata Tamansiswa"
          />
          <span className="brand__copy">
            <strong>PPG Prajabatan</strong>
            <small>Universitas Sarjanawiyata Tamansiswa</small>
          </span>
        </a>

        <div className="navbar__links" aria-label="Navigasi halaman">
          {navigationItems.map((item, index) => {
            const id = item.href.slice(1)
            return (
              <motion.a
                className={`navbar__link ${activeSection === id ? 'is-active' : ''}`}
                href={item.href}
                key={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                initial={reduceMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : 1.62 + index * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {item.label}
              </motion.a>
            )
          })}
        </div>

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-nav__inner">
              {navigationItems.map((item, index) => {
                const id = item.href.slice(1)
                return (
                  <motion.a
                    className={activeSection === id ? 'is-active' : ''}
                    href={item.href}
                    key={item.href}
                    onClick={(event) => handleNavigation(event, item.href)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
