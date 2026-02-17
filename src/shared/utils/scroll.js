/**
 * Gets the current vertical scroll position
 * @returns {number} Current scroll position in pixels
 */
export function getScrollPosition() {
  return (
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop
  )
}

/**
 * Smoothly scrolls to a section with the given ID
 * @param {string} sectionId - The ID of the section to scroll to
 */
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)

  if (!element) {
    console.warn(`Section with ID "${sectionId}" not found`)
    return
  }

  try {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  } catch (error) {
    // Fallback for browsers without smooth scroll support
    console.warn('Smooth scroll not supported, using fallback')
    element.scrollIntoView()
  }
}
