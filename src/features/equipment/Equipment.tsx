import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../../shared/hooks/useInView'
import { MACHINES } from '../../shared/utils/constants'

const Equipment: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="equipment" ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="equipment-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Equipment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art machinery for premium quality production
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">
          {MACHINES.map((machine, index) => {
            // Define different sizes for masonry effect
            const sizes = [
              'col-span-2 row-span-2', // Large
              'col-span-1 row-span-2', // Tall
              'col-span-1 row-span-1', // Small
              'col-span-2 row-span-1', // Wide
            ]
            const sizeClass = sizes[index % sizes.length]

            return (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${sizeClass} group cursor-pointer overflow-hidden rounded-2xl relative bg-white shadow-md hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={machine.image}
                    alt={`${machine.name} - Professional printing equipment`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {machine.name}
                      </h3>
                    </div>
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
