/**
 * Responsive testing utilities for breakpoint validation
 */

export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const

export type Breakpoint = keyof typeof BREAKPOINTS

/**
 * Set viewport size for testing
 */
export const setViewportSize = (width: number, height: number = 800) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })
  window.dispatchEvent(new Event('resize'))
}

/**
 * Set viewport to a specific breakpoint
 */
export const setBreakpoint = (breakpoint: Breakpoint) => {
  setViewportSize(BREAKPOINTS[breakpoint])
}

/**
 * Check if element has specific Tailwind responsive classes
 */
export const hasResponsiveClass = (
  element: HTMLElement,
  className: string
): boolean => {
  return element.classList.contains(className)
}

/**
 * Get computed grid column count
 */
export const getGridColumnCount = (element: HTMLElement): number => {
  const computedStyle = window.getComputedStyle(element)
  const gridTemplateColumns = computedStyle.gridTemplateColumns

  if (!gridTemplateColumns || gridTemplateColumns === 'none') {
    return 0
  }

  // Count the number of columns in the grid template
  return gridTemplateColumns.split(' ').length
}

/**
 * Check if element is stacked (single column layout)
 */
export const isStacked = (element: HTMLElement): boolean => {
  const computedStyle = window.getComputedStyle(element)
  const flexDirection = computedStyle.flexDirection
  const gridTemplateColumns = computedStyle.gridTemplateColumns

  // Check if flex direction is column
  if (flexDirection === 'column') {
    return true
  }

  // Check if grid has only one column
  if (gridTemplateColumns && gridTemplateColumns !== 'none') {
    const columnCount = gridTemplateColumns.split(' ').length
    return columnCount === 1
  }

  return false
}

/**
 * Check if mobile menu is visible
 */
export const isMobileMenuVisible = (element: HTMLElement | null): boolean => {
  if (!element) return false

  const computedStyle = window.getComputedStyle(element)
  return (
    computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden'
  )
}
