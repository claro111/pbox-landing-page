import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../../shared/components/Logo'
import Button from '../../shared/components/Button'
import useScrollSpy from '../../shared/hooks/useScrollSpy'
import useMobileMenu from '../../shared/hooks/useMobileMenu'
import { NAV_LINKS } from '../../shared/utils/constants'
import { scrollToSection } from '../../shared/utils/scroll'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isOpen, toggle, close } = useMobileMenu()
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.href))

  // Handle scroll detection for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle navigation link click
  const handleNavClick = (href: string) => {
    scrollToSection(href)
    close() // Close mobile menu if open
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`
                  text-base font-medium uppercase tracking-wider transition-colors duration-300
                  ${
                    activeSection === link.href
                      ? 'text-[#E10600]'
                      : 'text-[#1F2937] hover:text-[#E10600]'
                  }
                `
                  .trim()
                  .replace(/\s+/g, ' ')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavClick('contact')}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggle}
            className="md:hidden p-2 rounded-lg text-[#1F2937] hover:bg-[#F3F4F6] transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 md:hidden top-[80px]"
              onClick={close}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-20 bottom-0 w-64 bg-white shadow-xl md:hidden overflow-y-auto"
            >
              <nav className="flex flex-col p-6 space-y-6">
                {NAV_LINKS.map(link => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      text-lg font-medium text-left transition-colors duration-300
                      ${
                        activeSection === link.href
                          ? 'text-[#E10600]'
                          : 'text-[#1F2937] hover:text-[#E10600]'
                      }
                    `
                      .trim()
                      .replace(/\s+/g, ' ')}
                  >
                    {link.label}
                  </button>
                ))}

                <div className="pt-4 border-t border-[#F3F4F6]">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleNavClick('contact')}
                    className="w-full"
                  >
                    Get a Quote
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
