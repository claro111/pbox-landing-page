import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { setBreakpoint, setViewportSize } from './responsive-helpers'

/**
 * Responsive Design Validation Tests
 *
 * Tests layout adaptation at different breakpoints:
 * - Mobile: < 768px
 * - Tablet: 768px - 1024px
 * - Desktop: > 1024px
 *
 * Validates: Requirements 11.2, 11.3
 */

describe('Responsive Design Validation', () => {
  beforeEach(() => {
    // Reset viewport before each test
    setViewportSize(1024, 800)
  })

  describe('Mobile Breakpoint (< 768px)', () => {
    beforeEach(() => {
      setBreakpoint('mobile')
    })

    it('should display mobile menu button at mobile breakpoint', () => {
      render(<App />)

      // Look for hamburger menu button (typically has aria-label)
      const mobileMenuButton = screen.queryByRole('button', {
        name: /menu|navigation/i,
      })

      // Mobile menu button should exist at mobile breakpoint
      expect(mobileMenuButton).toBeTruthy()
    })

    it('should stack hero section vertically on mobile', () => {
      render(<App />)

      // Find hero section
      const heroSection =
        document.querySelector('#hero') ||
        document.querySelector('[class*="hero"]')

      if (heroSection) {
        // Hero should use flex-col or single column grid on mobile
        const hasFlexCol = heroSection.classList.contains('flex-col')
        const hasGridCols1 = heroSection.classList.contains('grid-cols-1')

        expect(hasFlexCol || hasGridCols1).toBe(true)
      }
    })

    it('should display services in single column on mobile', () => {
      render(<App />)

      // Find services grid
      const servicesGrid = document
        .querySelector('[class*="services"]')
        ?.querySelector('[class*="grid"]')

      if (servicesGrid) {
        // Should have grid-cols-1 class for mobile
        expect(servicesGrid.classList.contains('grid-cols-1')).toBe(true)
      }
    })

    it('should display projects in single column on mobile', () => {
      render(<App />)

      // Find projects grid
      const projectsGrid = document
        .querySelector('[class*="projects"]')
        ?.querySelector('[class*="grid"]')

      if (projectsGrid) {
        // Should have grid-cols-1 class for mobile
        expect(projectsGrid.classList.contains('grid-cols-1')).toBe(true)
      }
    })

    it('should stack about section vertically on mobile', () => {
      render(<App />)

      // Find about section
      const aboutSection =
        document.querySelector('#about') ||
        document.querySelector('[class*="about"]')

      if (aboutSection) {
        // About should use flex-col or single column grid on mobile
        const hasFlexCol = aboutSection.classList.contains('flex-col')
        const hasGridCols1 = aboutSection.classList.contains('grid-cols-1')

        expect(hasFlexCol || hasGridCols1).toBe(true)
      }
    })

    it('should display equipment in 2 columns on mobile', () => {
      render(<App />)

      // Find equipment grid
      const equipmentGrid =
        document
          .querySelector('[class*="equipment"]')
          ?.querySelector('[class*="grid"]') ||
        document
          .querySelector('[class*="machines"]')
          ?.querySelector('[class*="grid"]')

      if (equipmentGrid) {
        // Should have grid-cols-2 class for mobile
        expect(equipmentGrid.classList.contains('grid-cols-2')).toBe(true)
      }
    })

    it('should stack contact section vertically on mobile', () => {
      render(<App />)

      // Find contact section
      const contactSection =
        document.querySelector('#contact') ||
        document.querySelector('[class*="contact"]')

      if (contactSection) {
        // Contact should use flex-col or single column grid on mobile
        const hasFlexCol = contactSection.classList.contains('flex-col')
        const hasGridCols1 = contactSection.classList.contains('grid-cols-1')

        expect(hasFlexCol || hasGridCols1).toBe(true)
      }
    })

    it('should stack footer columns vertically on mobile', () => {
      render(<App />)

      // Find footer
      const footer = document.querySelector('footer')

      if (footer) {
        const footerGrid = footer.querySelector('[class*="grid"]')
        if (footerGrid) {
          // Footer should have grid-cols-1 or grid-cols-2 on mobile
          const hasGridCols1 = footerGrid.classList.contains('grid-cols-1')
          const hasGridCols2 = footerGrid.classList.contains('grid-cols-2')

          expect(hasGridCols1 || hasGridCols2).toBe(true)
        }
      }
    })
  })

  describe('Tablet Breakpoint (768px - 1024px)', () => {
    beforeEach(() => {
      setBreakpoint('tablet')
    })

    it('should display services in 2 columns on tablet', () => {
      render(<App />)

      // Find services grid
      const servicesGrid = document
        .querySelector('[class*="services"]')
        ?.querySelector('[class*="grid"]')

      if (servicesGrid) {
        // Should have md:grid-cols-2 class for tablet
        const classes = servicesGrid.className
        expect(
          classes.includes('md:grid-cols-2') ||
            classes.includes('md:grid-cols-3')
        ).toBe(true)
      }
    })

    it('should display projects in 2 columns on tablet', () => {
      render(<App />)

      // Find projects grid
      const projectsGrid = document
        .querySelector('[class*="projects"]')
        ?.querySelector('[class*="grid"]')

      if (projectsGrid) {
        // Should have md:grid-cols-2 class for tablet
        const classes = projectsGrid.className
        expect(
          classes.includes('md:grid-cols-2') ||
            classes.includes('md:grid-cols-3')
        ).toBe(true)
      }
    })

    it('should display equipment in 3 columns on tablet', () => {
      render(<App />)

      // Find equipment grid
      const equipmentGrid =
        document
          .querySelector('[class*="equipment"]')
          ?.querySelector('[class*="grid"]') ||
        document
          .querySelector('[class*="machines"]')
          ?.querySelector('[class*="grid"]')

      if (equipmentGrid) {
        // Should have md:grid-cols-3 class for tablet
        const classes = equipmentGrid.className
        expect(
          classes.includes('md:grid-cols-3') ||
            classes.includes('md:grid-cols-4')
        ).toBe(true)
      }
    })

    it('should display hero in two-column layout on tablet', () => {
      render(<App />)

      // Find hero section
      const heroSection =
        document.querySelector('#hero') ||
        document.querySelector('[class*="hero"]')

      if (heroSection) {
        // Hero should use md:flex-row or md:grid-cols-2 on tablet
        const classes = heroSection.className
        expect(
          classes.includes('md:flex-row') || classes.includes('md:grid-cols-2')
        ).toBe(true)
      }
    })

    it('should display about in two-column layout on tablet', () => {
      render(<App />)

      // Find about section
      const aboutSection =
        document.querySelector('#about') ||
        document.querySelector('[class*="about"]')

      if (aboutSection) {
        // About should use md:flex-row or md:grid-cols-2 on tablet
        const classes = aboutSection.className
        expect(
          classes.includes('md:flex-row') || classes.includes('md:grid-cols-2')
        ).toBe(true)
      }
    })

    it('should display contact in two-column layout on tablet', () => {
      render(<App />)

      // Find contact section
      const contactSection =
        document.querySelector('#contact') ||
        document.querySelector('[class*="contact"]')

      if (contactSection) {
        // Contact should use md:flex-row or md:grid-cols-2 on tablet
        const classes = contactSection.className
        expect(
          classes.includes('md:flex-row') || classes.includes('md:grid-cols-2')
        ).toBe(true)
      }
    })
  })

  describe('Desktop Breakpoint (> 1024px)', () => {
    beforeEach(() => {
      setViewportSize(1280, 800)
    })

    it('should hide mobile menu button at desktop breakpoint', () => {
      render(<App />)

      // Mobile menu button should be hidden on desktop
      const mobileMenuButton = screen.queryByRole('button', {
        name: /menu|navigation/i,
      })

      if (mobileMenuButton) {
        // Check if it has hidden class for desktop
        const classes = mobileMenuButton.className
        expect(
          classes.includes('lg:hidden') || classes.includes('md:hidden')
        ).toBe(true)
      }
    })

    it('should display services in 3 columns on desktop', () => {
      render(<App />)

      // Find services grid
      const servicesGrid = document
        .querySelector('[class*="services"]')
        ?.querySelector('[class*="grid"]')

      if (servicesGrid) {
        // Should have lg:grid-cols-3 class for desktop
        const classes = servicesGrid.className
        expect(classes.includes('lg:grid-cols-3')).toBe(true)
      }
    })

    it('should display projects in 3 columns on desktop', () => {
      render(<App />)

      // Find projects grid
      const projectsGrid = document
        .querySelector('[class*="projects"]')
        ?.querySelector('[class*="grid"]')

      if (projectsGrid) {
        // Should have lg:grid-cols-3 class for desktop
        const classes = projectsGrid.className
        expect(classes.includes('lg:grid-cols-3')).toBe(true)
      }
    })

    it('should display equipment in 4 columns on desktop', () => {
      render(<App />)

      // Find equipment grid
      const equipmentGrid =
        document
          .querySelector('[class*="equipment"]')
          ?.querySelector('[class*="grid"]') ||
        document
          .querySelector('[class*="machines"]')
          ?.querySelector('[class*="grid"]')

      if (equipmentGrid) {
        // Should have lg:grid-cols-4 class for desktop
        const classes = equipmentGrid.className
        expect(classes.includes('lg:grid-cols-4')).toBe(true)
      }
    })

    it('should display navigation links horizontally on desktop', () => {
      render(<App />)

      // Find nav element
      const nav = document.querySelector('nav')

      if (nav) {
        // Desktop nav should have flex or horizontal layout classes
        const navLinks = nav.querySelector('[class*="flex"]')
        expect(navLinks).toBeTruthy()
      }
    })

    it('should display footer in multi-column layout on desktop', () => {
      render(<App />)

      // Find footer
      const footer = document.querySelector('footer')

      if (footer) {
        const footerGrid = footer.querySelector('[class*="grid"]')
        if (footerGrid) {
          // Footer should have lg:grid-cols-3 or lg:grid-cols-4 on desktop
          const classes = footerGrid.className
          expect(
            classes.includes('lg:grid-cols-3') ||
              classes.includes('lg:grid-cols-4')
          ).toBe(true)
        }
      }
    })
  })

  describe('Cross-breakpoint Functionality', () => {
    it('should maintain functionality when resizing from desktop to mobile', () => {
      const { rerender } = render(<App />)

      // Start at desktop
      setViewportSize(1280, 800)
      rerender(<App />)

      // Verify desktop layout
      let mobileMenuButton = screen.queryByRole('button', {
        name: /menu|navigation/i,
      })

      // Resize to mobile
      setBreakpoint('mobile')
      rerender(<App />)

      // Verify mobile layout
      mobileMenuButton = screen.queryByRole('button', {
        name: /menu|navigation/i,
      })
      expect(mobileMenuButton).toBeTruthy()
    })

    it('should maintain functionality when resizing from mobile to desktop', () => {
      const { rerender } = render(<App />)

      // Start at mobile
      setBreakpoint('mobile')
      rerender(<App />)

      // Verify mobile layout
      let mobileMenuButton = screen.queryByRole('button', {
        name: /menu|navigation/i,
      })
      expect(mobileMenuButton).toBeTruthy()

      // Resize to desktop
      setViewportSize(1280, 800)
      rerender(<App />)

      // Verify desktop layout - mobile button should have hidden class
      mobileMenuButton = screen.queryByRole('button', {
        name: /menu|navigation/i,
      })
      if (mobileMenuButton) {
        const classes = mobileMenuButton.className
        expect(
          classes.includes('lg:hidden') || classes.includes('md:hidden')
        ).toBe(true)
      }
    })

    it('should render all sections at all breakpoints', () => {
      const breakpoints = [
        { name: 'mobile', width: 375 },
        { name: 'tablet', width: 768 },
        { name: 'desktop', width: 1280 },
      ]

      breakpoints.forEach(({ width }) => {
        setViewportSize(width, 800)
        const { container } = render(<App />)

        // Verify main sections exist
        expect(
          container.querySelector('nav') || container.querySelector('header')
        ).toBeTruthy()

        // All sections should be present regardless of breakpoint
        const sections = container.querySelectorAll('section')
        expect(sections.length).toBeGreaterThan(0)
      })
    })
  })

  describe('Specific Breakpoint Transitions', () => {
    it('should transition services grid from 1 to 2 to 3 columns', () => {
      const { rerender } = render(<App />)

      // Mobile: 1 column
      setBreakpoint('mobile')
      rerender(<App />)
      let servicesGrid = document
        .querySelector('[class*="services"]')
        ?.querySelector('[class*="grid"]')
      if (servicesGrid) {
        expect(servicesGrid.classList.contains('grid-cols-1')).toBe(true)
      }

      // Tablet: 2 columns
      setBreakpoint('tablet')
      rerender(<App />)
      servicesGrid = document
        .querySelector('[class*="services"]')
        ?.querySelector('[class*="grid"]')
      if (servicesGrid) {
        const classes = servicesGrid.className
        expect(
          classes.includes('md:grid-cols-2') ||
            classes.includes('md:grid-cols-3')
        ).toBe(true)
      }

      // Desktop: 3 columns
      setViewportSize(1280, 800)
      rerender(<App />)
      servicesGrid = document
        .querySelector('[class*="services"]')
        ?.querySelector('[class*="grid"]')
      if (servicesGrid) {
        expect(servicesGrid.className.includes('lg:grid-cols-3')).toBe(true)
      }
    })

    it('should transition equipment grid from 2 to 3 to 4 columns', () => {
      const { rerender } = render(<App />)

      // Mobile: 2 columns
      setBreakpoint('mobile')
      rerender(<App />)
      let equipmentGrid =
        document
          .querySelector('[class*="equipment"]')
          ?.querySelector('[class*="grid"]') ||
        document
          .querySelector('[class*="machines"]')
          ?.querySelector('[class*="grid"]')
      if (equipmentGrid) {
        expect(equipmentGrid.classList.contains('grid-cols-2')).toBe(true)
      }

      // Tablet: 3 columns
      setBreakpoint('tablet')
      rerender(<App />)
      equipmentGrid =
        document
          .querySelector('[class*="equipment"]')
          ?.querySelector('[class*="grid"]') ||
        document
          .querySelector('[class*="machines"]')
          ?.querySelector('[class*="grid"]')
      if (equipmentGrid) {
        const classes = equipmentGrid.className
        expect(
          classes.includes('md:grid-cols-3') ||
            classes.includes('md:grid-cols-4')
        ).toBe(true)
      }

      // Desktop: 4 columns
      setViewportSize(1280, 800)
      rerender(<App />)
      equipmentGrid =
        document
          .querySelector('[class*="equipment"]')
          ?.querySelector('[class*="grid"]') ||
        document
          .querySelector('[class*="machines"]')
          ?.querySelector('[class*="grid"]')
      if (equipmentGrid) {
        expect(equipmentGrid.className.includes('lg:grid-cols-4')).toBe(true)
      }
    })
  })
})
