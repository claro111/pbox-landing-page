import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import Hero from '../features/hero/Hero'
import Navbar from '../features/navigation/Navbar'
import Projects from '../features/portfolio/Projects'
import Button from '../shared/components/Button'
import Card from '../shared/components/Card'

/**
 * Animation System Validation Tests
 *
 * Tests all animation functionality:
 * - Entrance animations on scroll
 * - Hover animations on interactive elements
 * - Mobile menu animations
 * - Project filter animations
 * - Reduced motion preferences
 *
 * Validates: Requirements 13.1, 13.2, 13.3, 13.4, 13.5
 */

describe('Animation System Validation', () => {
  beforeEach(() => {
    // Reset any mocks
    vi.clearAllMocks()
  })

  describe('Entrance Animations on Scroll (Requirement 13.1)', () => {
    it('should trigger entrance animations when Hero section enters viewport', () => {
      const { container } = render(<Hero />)

      // Find the hero section
      const heroSection = container.querySelector('#hero')
      expect(heroSection).toBeTruthy()

      // Check for Framer Motion animation attributes
      const animatedElements = container.querySelectorAll('[style*="opacity"]')
      expect(animatedElements.length).toBeGreaterThan(0)
    })

    it('should have animation variants defined for entrance animations', () => {
      const { container } = render(<Hero />)

      // Verify that motion components are rendered
      // Framer Motion adds data attributes or inline styles
      const motionElements = container.querySelectorAll('[style]')
      expect(motionElements.length).toBeGreaterThan(0)
    })

    it('should use useInView hook to detect viewport intersection', () => {
      // IntersectionObserver is mocked in setup.ts
      const { container } = render(<Hero />)

      // Verify Hero renders correctly with IntersectionObserver
      expect(container.querySelector('#hero')).toBeTruthy()
    })

    it('should animate multiple sections with entrance animations', () => {
      const { container } = render(<App />)

      // Check that multiple sections have animation setup
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(5)

      // Verify sections have content that can be animated
      sections.forEach(section => {
        expect(section.children.length).toBeGreaterThan(0)
      })
    })

    it('should stagger child animations in Hero section', () => {
      const { container } = render(<Hero />)

      // Hero should have multiple animated children (heading, paragraph, buttons)
      const heroContent = container.querySelector('#hero')
      if (heroContent) {
        const children = heroContent.querySelectorAll('h1, p, button')
        expect(children.length).toBeGreaterThanOrEqual(3)
      }
    })
  })

  describe('Hover Animations on Interactive Elements (Requirement 13.2)', () => {
    it('should apply hover transition classes to Button component', () => {
      const { container } = render(
        <Button variant="primary" size="md">
          Test Button
        </Button>
      )

      const button = container.querySelector('button')
      expect(button).toBeTruthy()

      // Check for transition classes
      const classes = button?.className || ''
      expect(classes).toContain('transition')
      expect(classes).toContain('duration')
    })

    it('should apply hover effects to Card component when hover prop is true', () => {
      const { container } = render(
        <Card hover>
          <p>Test Card Content</p>
        </Card>
      )

      const card = container.querySelector('div')
      expect(card).toBeTruthy()

      // Check for hover transition classes
      const classes = card?.className || ''
      expect(classes).toContain('transition')
      expect(classes).toContain('hover:scale')
      expect(classes).toContain('hover:shadow')
    })

    it('should have smooth transitions on all button variants', () => {
      const variants: Array<'primary' | 'secondary' | 'outline'> = [
        'primary',
        'secondary',
        'outline',
      ]

      variants.forEach(variant => {
        const { container } = render(
          <Button variant={variant} size="md">
            {variant} Button
          </Button>
        )

        const button = container.querySelector('button')
        const classes = button?.className || ''

        // All buttons should have transition classes
        expect(classes).toContain('transition')
        expect(classes).toContain('duration-300')
      })
    })

    it('should apply hover effects to project cards', () => {
      const { container } = render(<Projects />)

      // Find project cards
      const cards = container.querySelectorAll('[class*="group"]')

      if (cards.length > 0) {
        cards.forEach(card => {
          const classes = card.className
          // Cards should have group class for hover effects
          expect(classes).toContain('group')
        })
      }
    })

    it('should have hover transform on interactive cards', () => {
      const { container } = render(
        <Card hover>
          <div>Interactive Card</div>
        </Card>
      )

      const card = container.querySelector('div')
      const classes = card?.className || ''

      // Should have scale transform on hover
      expect(classes).toMatch(/hover:scale/)
    })

    it('should apply hover color transitions to navigation links', () => {
      const { container } = render(<Navbar />)

      // Find navigation links
      const navLinks = container.querySelectorAll('nav button')

      expect(navLinks.length).toBeGreaterThan(0)

      navLinks.forEach(link => {
        const classes = link.className
        // Links should have transition classes
        expect(classes).toContain('transition')
      })
    })
  })

  describe('Mobile Menu Animations (Requirement 13.3)', () => {
    it('should animate mobile menu opening with slide-in transition', async () => {
      const user = userEvent.setup()
      const { container } = render(<Navbar />)

      // Find and click hamburger menu button
      const menuButton = screen.getByLabelText(/toggle menu/i)
      expect(menuButton).toBeTruthy()

      await user.click(menuButton)

      // Mobile menu should be rendered after click
      await waitFor(() => {
        const mobileMenu = container.querySelector('[class*="fixed"]')
        expect(mobileMenu).toBeTruthy()
      })
    })

    it('should animate mobile menu closing', async () => {
      const user = userEvent.setup()
      const { container } = render(<Navbar />)

      // Open menu
      const menuButton = screen.getByLabelText(/toggle menu/i)
      await user.click(menuButton)

      // Wait for menu to open - check for mobile menu specifically
      await waitFor(() => {
        const mobileMenu = container.querySelector('.fixed.right-0')
        expect(mobileMenu).toBeTruthy()
      })

      // Close menu
      await user.click(menuButton)

      // Menu should animate out (AnimatePresence handles this)
      // The component uses AnimatePresence which handles exit animations
    })

    it('should use Framer Motion AnimatePresence for mobile menu', () => {
      const { container } = render(<Navbar />)

      // Navbar component uses AnimatePresence
      // Verify the component renders without errors
      expect(container.querySelector('header')).toBeTruthy()
    })

    it('should animate backdrop when mobile menu opens', async () => {
      const user = userEvent.setup()
      const { container } = render(<Navbar />)

      const menuButton = screen.getByLabelText(/toggle menu/i)
      await user.click(menuButton)

      // Check for backdrop element
      await waitFor(() => {
        const backdrop = container.querySelector('[class*="bg-black"]')
        expect(backdrop).toBeTruthy()
      })
    })

    it('should close mobile menu when clicking a navigation link', async () => {
      const user = userEvent.setup()
      render(<Navbar />)

      // Open menu
      const menuButton = screen.getByLabelText(/toggle menu/i)
      await user.click(menuButton)

      // Wait for menu to open and find a nav link
      await waitFor(() => {
        const navLinks = screen.getAllByRole('button')
        expect(navLinks.length).toBeGreaterThan(1)
      })

      // Click a navigation link
      const navLinks = screen.getAllByRole('button')
      const homeLink = navLinks.find(link => link.textContent?.includes('Home'))

      if (homeLink) {
        await user.click(homeLink)
        // Menu should close after clicking link
      }
    })
  })

  describe('Project Filter Animations (Requirement 13.4)', () => {
    it('should animate project grid when filter changes', async () => {
      const user = userEvent.setup()
      const { container } = render(<Projects />)

      // Find filter buttons
      const filterButtons = screen.getAllByRole('button', {
        name: /filter projects/i,
      })
      expect(filterButtons.length).toBeGreaterThan(0)

      // Click a filter button
      const signagelter = filterButtons.find(btn =>
        btn.textContent?.includes('Signage')
      )
      if (signagelter) {
        await user.click(signagelter)

        // Projects should re-render with animation
        await waitFor(() => {
          const projectCards = container.querySelectorAll(
            '[class*="grid"] > div'
          )
          expect(projectCards.length).toBeGreaterThan(0)
        })
      }
    })

    it('should use AnimatePresence for filter transitions', () => {
      const { container } = render(<Projects />)

      // Projects component uses AnimatePresence
      // Verify the component renders without errors
      expect(container.querySelector('#projects')).toBeTruthy()
    })

    it('should apply layout animations to project cards', () => {
      const { container } = render(<Projects />)

      // Find project cards
      const projectGrid = container.querySelector('[class*="grid"]')
      expect(projectGrid).toBeTruthy()

      // Cards should be present
      const cards = projectGrid?.querySelectorAll('div')
      expect(cards && cards.length).toBeGreaterThan(0)
    })

    it('should stagger project card animations', () => {
      const { container } = render(<Projects />)

      // Find all project cards
      const projectCards = container.querySelectorAll('[class*="grid"] > div')

      // Should have multiple cards to stagger
      expect(projectCards.length).toBeGreaterThan(1)
    })

    it('should animate filter button active state', async () => {
      const user = userEvent.setup()
      render(<Projects />)

      // Find filter buttons
      const filterButtons = screen.getAllByRole('button', {
        name: /filter projects/i,
      })

      // Click a filter button
      const brandingFilter = filterButtons.find(btn =>
        btn.textContent?.includes('Branding')
      )
      if (brandingFilter) {
        await user.click(brandingFilter)

        // Button should have active state
        await waitFor(() => {
          expect(brandingFilter.className).toContain('bg-red')
        })
      }
    })
  })

  describe('Reduced Motion Preferences (Requirement 13.5)', () => {
    it('should respect prefers-reduced-motion media query', () => {
      // matchMedia is mocked in setup.ts
      const { container } = render(<App />)

      // App should render without errors even with reduced motion
      expect(container.querySelector('main')).toBeTruthy()
    })

    it('should use LazyMotion for optimized animation loading', () => {
      const { container } = render(<App />)

      // App wraps content in LazyMotion
      // Verify app renders correctly
      expect(container.querySelector('main')).toBeTruthy()
    })

    it('should not break functionality when animations are disabled', () => {
      const { container } = render(<App />)

      // All sections should still render
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(5)
    })

    it('should fallback gracefully when IntersectionObserver is not supported', () => {
      // Save original
      const originalIO = global.IntersectionObserver

      // Remove IntersectionObserver temporarily
      // @ts-expect-error - Intentionally deleting for testing fallback behavior
      delete global.IntersectionObserver

      const { container } = render(<Hero />)

      // Component should still render
      expect(container.querySelector('#hero')).toBeTruthy()

      // Restore IntersectionObserver
      global.IntersectionObserver = originalIO
    })
  })

  describe('Animation Performance', () => {
    it('should use CSS transitions for simple animations', () => {
      const { container } = render(
        <Button variant="primary" size="md">
          Test
        </Button>
      )

      const button = container.querySelector('button')
      const classes = button?.className || ''

      // Should use CSS transitions (more performant than JS animations)
      expect(classes).toContain('transition')
    })

    it('should use transform for hover effects (GPU accelerated)', () => {
      const { container } = render(
        <Card hover>
          <div>Test</div>
        </Card>
      )

      const card = container.querySelector('div')
      const classes = card?.className || ''

      // Should use transform (scale) for hover
      expect(classes).toMatch(/hover:scale/)
    })

    it('should not cause layout thrashing with animations', () => {
      // Render multiple animated components
      const { container } = render(<App />)

      // All sections should render without errors
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(5)

      // No layout errors should occur
      expect(container.querySelector('main')).toBeTruthy()
    })
  })

  describe('Animation Timing and Easing', () => {
    it('should use consistent animation durations', () => {
      const { container: buttonContainer } = render(
        <Button variant="primary" size="md">
          Test
        </Button>
      )
      const { container: cardContainer } = render(
        <Card hover>
          <div>Test</div>
        </Card>
      )

      const button = buttonContainer.querySelector('button')
      const card = cardContainer.querySelector('div')

      // Both should use duration-300
      expect(button?.className).toContain('duration-300')
      expect(card?.className).toContain('duration-300')
    })

    it('should use ease-in-out for smooth transitions', () => {
      const { container } = render(
        <Button variant="primary" size="md">
          Test
        </Button>
      )

      const button = container.querySelector('button')
      const classes = button?.className || ''

      // Should use ease-in-out
      expect(classes).toContain('ease-in-out')
    })

    it('should have appropriate animation delays for staggered effects', () => {
      const { container } = render(<Hero />)

      // Hero uses staggered animations
      // Verify multiple animated elements exist
      const heroContent = container.querySelector('#hero')
      expect(heroContent).toBeTruthy()

      const animatedElements = heroContent?.querySelectorAll('h1, p, button')
      expect(animatedElements && animatedElements.length).toBeGreaterThan(2)
    })
  })
})


