import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    let animationFrame

    const updateActiveSection = () => {
      animationFrame = undefined
      const marker = window.scrollY + Math.min(window.innerHeight * 0.32, 280)
      let currentSection = sections[0]

      sections.forEach((section) => {
        if (section.offsetTop <= marker) {
          currentSection = section
        }
      })

      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4

      if (isAtPageEnd) {
        currentSection = sections.at(-1)
      }

      setActiveSection((current) =>
        current === currentSection.id ? current : currentSection.id,
      )
    }

    const requestUpdate = () => {
      if (animationFrame) return
      animationFrame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [sectionIds])

  return activeSection
}
