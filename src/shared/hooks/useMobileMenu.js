import { useState, useEffect } from 'react'

/**
 * Custom hook to manage mobile menu state
 * Handles menu open/close state and body scroll locking
 *
 * @returns {Object} - { isOpen, toggle, close }
 */
function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when menu is closed
      document.body.style.overflow = ''
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  const close = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    toggle,
    close,
  }
}

export default useMobileMenu
