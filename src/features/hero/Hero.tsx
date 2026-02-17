import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'
import { scrollToSection } from '../../shared/utils/scroll'

const Hero: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  const handleRequestQuote = () => {
    scrollToSection('contact')
  }

  const handleViewProjects = () => {
    scrollToSection('projects')
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content - Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-bold uppercase tracking-wider">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                PREMIUM CREATIVE AGENCY
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              WE DESIGN
              <br />
              <span className="text-red-600">&</span> PRINT
            </motion.h1>

            {/* Red Underline */}
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-red-600"
            ></motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              High-impact design and precision printing for brands that demand to be noticed. We turn concepts into physical landmarks.
            </motion.p>

            {/* Service Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {['TARPAULIN', 'STICKERS', 'BILLBOARDS', 'SIGNAGE', 'AND MORE...'].map((tag, index) => {
                // Alternate pattern: red, light border, red, light border, gray
                const isRedFilled = index === 0 || index === 2
                const isGray = index === 4 // "AND MORE..."
                return (
                  <span
                    key={tag}
                    className={`px-6 py-3 text-sm font-bold uppercase tracking-wide rounded-lg ${
                      isRedFilled
                        ? 'bg-red-600 text-white'
                        : isGray
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-white text-gray-600 border-2 border-red-100'
                    }`}
                  >
                    {tag}
                  </span>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={handleRequestQuote}
                className="px-8 py-4 bg-red-600 text-white font-bold text-base rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                aria-label="Get a quote - Navigate to contact form"
              >
                GET A QUOTE
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleViewProjects}
                className="px-8 py-4 bg-white text-gray-700 font-bold text-base rounded-lg border-2 border-red-100 hover:bg-red-50 hover:border-red-200 transition-all duration-300 cursor-pointer"
                aria-label="View Portfolio - Navigate to projects"
              >
                View Portfolio
              </button>
            </motion.div>
          </div>

          {/* Hero Image Card - Right Column */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-1">
              <div className="bg-white rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop"
                  alt="Premium Signature Signage showcase"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Featured Case Study Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-red-600 font-bold uppercase tracking-wider mb-1">
                        FEATURED CASE STUDY
                      </p>
                      <h3 className="text-lg font-bold text-gray-900">
                        Premium Signature Signage
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
