import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, BadgeCheck, HardHat } from 'lucide-react'
import { scrollToSection } from '../../shared/utils/scroll'

const Hero: React.FC = () => {
  const services = [
    'Modular Kitchen & Cabinet',
    'Fit Out Construction',
    'Residential House',
    'Condo Renovation',
    'Mall Kiosk',
    'Office Furniture & Partition',
    'Painting Works',
    'Electrical Works',
    'Space Planning',
    '3D Design Services',
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-white"
    >
      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&h=1200&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay — heavier on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/70 to-[#0a0f1e]/30" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#E01A4F 1px, transparent 1px), linear-gradient(90deg, #E01A4F 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center pt-28 pb-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* Left — Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-[#E01A4F] rounded-full">
                <HardHat className="w-4 h-4 text-white" />
                <span className="text-white text-xs font-black uppercase tracking-widest">
                  Construction Company
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1
                id="hero-heading"
                className="font-black leading-none tracking-tighter"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
              >
                <span className="block text-white">WE</span>
                <span className="block text-white">DESIGN</span>
                <span className="block">
                  <span className="text-[#E01A4F]">&amp; </span>
                  <span className="text-white">BUILD</span>
                </span>
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="origin-left h-[3px] w-32 bg-[#E01A4F]"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed max-w-lg"
            >
              PBOX Construction delivers quality residential, commercial, and industrial
              projects — from concept to turnover, built to last.
            </motion.p>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                PCAB Registered
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold">
                <BadgeCheck className="w-4 h-4 text-green-400" />
                PHILGEPS Registered
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-[#E01A4F] text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#E01A4F] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer rounded-lg"
                aria-label="Get a free quote"
              >
                GET A FREE QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-transparent text-white font-black text-sm uppercase tracking-widest border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer rounded-lg"
                aria-label="View our projects"
              >
                View Projects
              </button>
            </motion.div>
          </div>

          {/* Right — Services ticker panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-3">
              <p className="text-[#E01A4F] text-xs font-black uppercase tracking-widest mb-4">
                Our Services
              </p>
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E01A4F] flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}

export default Hero



