import { useState, useEffect } from 'react'

/**
 * Custom hook to track which section is currently visible in the viewport
 * Uses IntersectionObserver to detect section visibility for active nav highlighting
 *
 * @param {string[]} sectionIds - Array of section IDs to observe
 * @returns {string} - ID of the currently active section
 */
function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Default to first section
      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0])
      }
      return
    }

    const observers = []
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% of section must be visible
    }

    // Track which sections are currently intersecting
    const intersectingMap = new Map()

    const observerCallback = entries => {
      entries.forEach(entry => {
        intersectingMap.set(entry.target.id, entry.isIntersecting)
      })

      // Find the first intersecting section in order
      for (const sectionId of sectionIds) {
        if (intersectingMap.get(sectionId)) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
        observers.push(observer)
      }
    })

    // Cleanup
    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeSection
}

export default useScrollSpy
