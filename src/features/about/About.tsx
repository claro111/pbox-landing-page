import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../../shared/hooks/useInView'
import { ABOUT_CONTENT } from '../../shared/utils/constants'

const About: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  // Animation variants for entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content - Left Column */}
          <motion.div variants={textVariants} className="space-y-6">
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-[#111827]"
            >
              {ABOUT_CONTENT.title}
            </h2>

            <p className="text-lg text-[#1F2937] leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>

            <p className="text-lg text-[#1F2937] leading-relaxed">
              {ABOUT_CONTENT.mission}
            </p>
          </motion.div>

          {/* Company Image - Right Column */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
