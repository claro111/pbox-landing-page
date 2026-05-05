import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'
import { scrollToSection } from '../../shared/utils/scroll'

const CTABanner: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section
      id="cta-banner"
      ref={ref}
      className="relative overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&h=600&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D1B4B]/90" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#E01A4F]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#E01A4F]" />
              <p className="text-[#E01A4F] text-xs font-black uppercase tracking-widest">Let's Build Together</p>
            </div>
            <h2
              id="cta-heading"
              className="text-5xl md:text-7xl font-black text-white leading-none mb-6"
            >
              READY TO<br />
              <span className="text-[#E01A4F]">START</span><br />
              BUILDING?
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Contact PBOX Construction today for a free consultation and project estimate.
              We're ready to bring your vision to life.
            </p>
          </div>

          {/* Right — action cards */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#E01A4F] p-6 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <div>
                <p className="text-white group-hover:text-[#E01A4F] text-xs font-black uppercase tracking-widest mb-1 transition-colors">Free Consultation</p>
                <p className="text-white/80 group-hover:text-gray-600 text-sm transition-colors">Tell us about your project</p>
              </div>
              <ArrowRight className="w-6 h-6 text-white group-hover:text-[#E01A4F] group-hover:translate-x-1 transition-all duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-white/15 p-6 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors duration-300"
            >
              <div>
                <p className="text-white text-xs font-black uppercase tracking-widest mb-1">Call Us Directly</p>
                <p className="text-gray-400 text-sm">+63 917 123 4567</p>
              </div>
              <Phone className="w-6 h-6 text-[#E01A4F]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 border border-white/15 p-6 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors duration-300"
              onClick={() => scrollToSection('services')}
            >
              <div>
                <p className="text-white text-xs font-black uppercase tracking-widest mb-1">Explore Services</p>
                <p className="text-gray-400 text-sm">See what we can build for you</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#E01A4F] group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTABanner



