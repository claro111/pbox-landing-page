import React from 'react'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import Logo from '../../shared/components/Logo'
import { NAV_LINKS, COMPANY_INFO } from '../../shared/utils/constants'
import { scrollToSection } from '../../shared/utils/scroll'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0D1B4B] text-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1 */}
          <div className="col-span-1 lg:col-span-2">
            <Logo size="sm" className="mb-4" useImage={true}/>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
              PBOX Construction — PCAB and PHILGEPS registered construction company
              delivering quality residential, commercial, and industrial projects across
              Metro Manila.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/pboxconstruction"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E01A4F] transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/pboxconstruction"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E01A4F] transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-5">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3" aria-label="Footer navigation">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-[#E01A4F] transition-colors duration-300 text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-5">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-4 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-3 text-gray-300 hover:text-[#E01A4F] transition-colors duration-300"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 text-gray-300 hover:text-[#E01A4F] transition-colors duration-300"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                {COMPANY_INFO.phone}
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} PBOX Construction. All rights reserved.
          </p>
          <div className="flex gap-3">
            <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-400">
              PCAB Registered
            </span>
            <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-400">
              PHILGEPS Registered
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



