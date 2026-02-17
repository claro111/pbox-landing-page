import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook to detect when an element enters the viewport
 * Returns a ref to attach to the element and a boolean indicating visibility
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Percentage of element visible to trigger (default: 0.1)
 * @param {string} options.rootMargin - Margin around root (default: '0px')
 * @param {Element} options.root - Root element for intersection (default: null/viewport)
 * @returns {[React.RefObject, boolean]} - [ref, isInView]
 */
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Assume everything is in view for compatibility
      setIsInView(true)
      return
    }

    const observerOptions = {
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold !== undefined ? options.threshold : 0.1,
    }

    const observerCallback = entries => {
      entries.forEach(entry => {
        setIsInView(entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (ref.current) {
      observer.observe(ref.current)
    }

    // Cleanup
    return () => {
      observer.disconnect()
    }
  }, [options.root, options.rootMargin, options.threshold])

  return [ref, isInView]
}

export default useInView
