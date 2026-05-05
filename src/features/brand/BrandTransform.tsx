import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'
import { scrollToSection } from '../../shared/utils/scroll'

const BrandTransform: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  const features = [
    {
      title: 'Licensed & Certified',
      description: 'PCAB and PHILGEPS registered — your project is in safe, compliant hands.',
    },
    {
      title: 'End-to-End Delivery',
      description: 'From design concept and 3D mock-ups to construction and final turnover.',
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Premium materials and skilled tradespeople on every project, every time.',
    },
  ]

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-[#1447E6] text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1447E6]"></span>
            Why Choose PBOX
          </p>

          <h2 
            className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
            style={{ 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              WebkitTextStroke: '0.5px currentColor'
            }}
          >
            Building Spaces,{' '}
            <span className="text-[#1447E6]">Exceeding</span>{' '}
            Expectations.
          </h2>

          <p className="text-gray-600 leading-relaxed text-base max-w-2xl mx-auto">
            PBOX Construction combines technical expertise with creative design to deliver
            projects that are built right — on time, on budget, and built to last.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <CheckCircle2 className="w-8 h-8 text-[#E01A4F] mb-4" />
              <h3 className="text-lg font-black text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E01A4F] text-white text-xs font-black uppercase tracking-widest hover:bg-[#1447E6] transition-all duration-300 cursor-pointer rounded-lg"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandTransform



