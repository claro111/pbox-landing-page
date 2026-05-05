import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../shared/components/Logo'
import useMobileMenu from '../../shared/hooks/useMobileMenu'
import { NAV_LINKS } from '../../shared/utils/constants'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isOpen, toggle, close } = useMobileMenu()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <nav className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <div
              className="flex-shrink-0 text-gray-900 cursor-pointer"
              onClick={() => { navigate('/'); close() }}
            >
              <Logo size="md" useImage={true}/>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-[#E01A4F]' : 'text-gray-700 hover:text-[#E01A4F]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E01A4F]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/contact"
                className="px-6 py-2.5 bg-[#1447E6] text-white text-xs font-black uppercase tracking-widest hover:bg-[#E01A4F] transition-colors duration-300 rounded-lg"
              >
                Get a Quote
              </NavLink>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={toggle}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 md:hidden top-[4.5rem]"
              onClick={close}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed right-0 top-[4.5rem] bottom-0 w-72 bg-[#0D1B4B] md:hidden overflow-y-auto"
            >
              <nav className="flex flex-col p-8 space-y-1">
                {NAV_LINKS.map(link => (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    end={link.href === '/'}
                    onClick={close}
                    className={({ isActive }) =>
                      `text-sm font-black uppercase tracking-widest text-left py-3 border-b border-white/10 transition-colors duration-300 ${
                        isActive ? 'text-[#E01A4F]' : 'text-gray-300 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-6">
                  <NavLink
                    to="/contact"
                    onClick={close}
                    className="block w-full py-3 bg-[#1447E6] text-white text-xs font-black uppercase tracking-widest text-center hover:bg-[#E01A4F] transition-all duration-300 rounded-lg"
                  >
                    Get a Quote
                  </NavLink>
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



