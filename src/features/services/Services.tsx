import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2, Briefcase, Zap, LayoutDashboard,
} from 'lucide-react'
import useInView from '../../shared/hooks/useInView'

const Services: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <section id="services" ref={ref} className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4"
            style={{ 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              WebkitTextStroke: '0.5px currentColor'
            }}
          >
            OUR SERVICES
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            We offer a comprehensive suite of creative and production services under one roof, 
            ensuring quality and consistency from concept to final installation.
          </p>
        </motion.div>

        {/* Hero Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-80 rounded-2xl overflow-hidden mb-16 bg-gray-300 flex items-center justify-center"
        >
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider z-10">Services Header Image</p>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-[#E01A4F] text-white text-xs font-black uppercase tracking-wider mb-4">
                Excellence
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                State-of-the-art construction facilities for flawless execution.
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Service Categories in Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Construction Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6">
              <Building2 className="w-10 h-10 text-[#E01A4F] mb-3" />
              <h3 className="text-xl font-black text-gray-900 mb-4">CONSTRUCTION</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Modular Kitchen & Cabinet</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Fit Out Construction</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Residential House</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Condo Renovation</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Mall Kiosk</span>
              </li>
            </ul>
          </motion.div>

          {/* Furniture & Fixtures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-6">
              <Briefcase className="w-10 h-10 text-[#E01A4F] mb-3" />
              <h3 className="text-xl font-black text-gray-900 mb-4">FURNITURE</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Office Furniture</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Office Partition</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Custom Cabinetry</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Storage Solutions</span>
              </li>
            </ul>
          </motion.div>

          {/* Technical Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="mb-6">
              <Zap className="w-10 h-10 text-[#E01A4F] mb-3" />
              <h3 className="text-xl font-black text-gray-900 mb-4">TECHNICAL</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Electrical Works</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Painting Works</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Plumbing Services</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>HVAC Installation</span>
              </li>
            </ul>
          </motion.div>

          {/* Design & Planning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="mb-6">
              <LayoutDashboard className="w-10 h-10 text-[#E01A4F] mb-3" />
              <h3 className="text-xl font-black text-gray-900 mb-4">DESIGN</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>3D Mock Up Drawings</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Space Planning</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Conceptual Frameworks</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Bill of Materials</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#E01A4F] mt-1">○</span>
                <span>Structural Plans</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services



