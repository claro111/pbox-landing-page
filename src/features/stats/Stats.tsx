import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../../shared/hooks/useInView'

const Stats: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  const stats = [
    {
      value: '10,000+',
      label: 'SIGNS INSTALLED',
    },
    {
      value: '15+',
      label: 'DESIGN AWARDS',
    },
    {
      value: '500+',
      label: 'HAPPY CLIENTS',
    },
  ]

  return (
    <section ref={ref} className="py-12 px-4 bg-[#FFFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-black text-[#1F2937] mb-3">
                {stat.value}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-px w-8 bg-[#E10600]"></div>
                <p className="text-sm font-bold text-[#E10600] tracking-wider uppercase">
                  {stat.label}
                </p>
                <div className="h-px w-8 bg-[#E10600]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
