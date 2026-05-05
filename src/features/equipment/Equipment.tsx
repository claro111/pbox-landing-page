import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../../shared/hooks/useInView'
import { TOOLS } from '../../shared/utils/constants'

const Equipment: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="equipment" ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#E01A4F] text-sm font-black uppercase tracking-wider mb-3">
            OUR CAPABILITIES
          </p>
          <h2
            id="equipment-heading"
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            style={{ 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              WebkitTextStroke: '0.5px currentColor'
            }}
          >
            Tools &amp; <span className="text-[#1447E6]">Equipment</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            We use professional-grade tools and equipment to ensure precision and quality on every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {TOOLS.map((tool, index) => {
            const sizes = [
              'col-span-2 row-span-2',
              'col-span-1 row-span-1',
              'col-span-1 row-span-1',
              'col-span-2 row-span-1',
              'col-span-1 row-span-2',
              'col-span-1 row-span-1',
              'col-span-2 row-span-1',
              'col-span-1 row-span-1',
            ]
            const sizeClass = sizes[index % sizes.length]

            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${sizeClass} group cursor-pointer overflow-hidden rounded-2xl relative bg-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
              >
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider z-10">Equipment Image</p>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-sm font-semibold text-white">{tool.name}</h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Equipment



