import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Logo from '../../shared/components/Logo'
import { NAV_LINKS, COMPANY_INFO, SOCIAL_LINKS } from '../../shared/utils/constants'
import { scrollToSection } from '../../shared/utils/scroll'

const Footer: React.FC = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear()

  // Handle navigation link click
  const handleNavClick = (href: string) => {
    scrollToSection(href)
  }

  // Map icon names to Lucide components
  const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
  }

  return (
    <footer className="bg-[#1F2937] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Description */}
          <div className="col-span-1">
            <Logo size="lg" className="mb-4 text-white" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming creative visions into reality through innovative
              design, premium materials, and meticulous craftsmanship.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav
              className="flex flex-col space-y-2"
              aria-label="Footer navigation"
            >
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-[#E10600] transition-colors duration-300 text-left text-sm"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-gray-300 hover:text-[#E10600] transition-colors duration-300"
                aria-label={`Email us at ${COMPANY_INFO.email}`}
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="text-gray-300 hover:text-[#E10600] transition-colors duration-300"
                aria-label={`Call us at ${COMPANY_INFO.phone}`}
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="text-gray-300">{COMPANY_INFO.address}</p>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(social => {
                const IconComponent = iconMap[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                    className="text-gray-300 hover:text-[#E10600] transition-colors duration-300"
                  >
                    <IconComponent size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} PBOX Creative Advertising. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
