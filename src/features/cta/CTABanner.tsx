import React from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'
import { scrollToSection } from '../../shared/utils/scroll'

const CTABanner: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  // Animation variants for entrance animations
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const handleCTAClick = () => {
    scrollToSection('contact')
  }

  return (
    <section
      id="cta-banner"
      ref={ref}
      className="relative w-full bg-[#E10600] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <span className="text-[200px] md:text-[300px] lg:text-[400px] font-black text-white whitespace-nowrap">
          PBOX
        </span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight"
        >
          READY TO BE SEEN?
        </h2>

        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Stop blending in. Let's create something monumental that captures every eye that passes by.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleCTAClick}
            className="px-8 py-4 bg-white text-[#E10600] font-bold text-base rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            aria-label="Get a free consultation - Navigate to contact form"
          >
            GET A FREE CONSULTATION
            <Zap className="w-5 h-5" />
          </button>

          <button
            onClick={handleCTAClick}
            className="px-8 py-4 bg-transparent text-white font-bold text-base rounded-full border-2 border-white hover:bg-white hover:text-[#E10600] transition-all duration-300"
            aria-label="View our rates - Navigate to contact form"
          >
            VIEW OUR RATES
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default CTABanner
