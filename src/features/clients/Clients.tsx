import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../../shared/hooks/useInView'

const Clients: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const clients = [
    { id: 1, name: 'EP', color: 'bg-green-500' },
    { id: 2, name: 'LG', color: 'bg-purple-500' },
    { id: 3, name: 'VY', color: 'bg-yellow-500' },
    { id: 4, name: 'TC', color: 'bg-blue-500' },
    { id: 5, name: 'MG', color: 'bg-pink-500' },
    { id: 6, name: 'BP', color: 'bg-red-600' },
  ]

  // Duplicate clients for seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section ref={ref} className="py-12 px-4 bg-[#FFFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-10">
            Our Clients
          </h2>

          {/* Auto-sliding Client Logos Carousel */}
          <div className="relative mb-8">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8 items-center"
                animate={{
                  x: [0, -100 * clients.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                  },
                }}
              >
                {duplicatedClients.map((client, index) => (
                  <motion.div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border-4 border-white">
                      <div
                        className={`${client.color} w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl`}
                      >
                        {client.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#FFFAFA] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#FFFAFA] to-transparent pointer-events-none" />
          </div>

          {/* Animated Dots Indicator */}
          <div className="flex justify-center gap-2">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="h-2 rounded-full bg-gray-300"
                animate={{
                  width: ['8px', '24px', '8px'],
                  backgroundColor: [
                    '#D1D5DB',
                    '#E10600',
                    '#D1D5DB',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
