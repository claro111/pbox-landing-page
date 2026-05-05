import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../../shared/hooks/useInView'

const Clients: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const clients = [
    { id: 1, name: 'SM', color: 'bg-[#1447E6]' },
    { id: 2, name: 'AY', color: 'bg-[#E01A4F]' },
    { id: 3, name: 'RB', color: 'bg-gray-700' },
    { id: 4, name: 'TC', color: 'bg-[#1447E6]' },
    { id: 5, name: 'MG', color: 'bg-[#E01A4F]' },
    { id: 6, name: 'JL', color: 'bg-gray-700' },
  ]

  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section ref={ref} className="py-14 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-8">
            Trusted by clients across Metro Manila
          </p>

          <div className="relative mb-6">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8 items-center"
                animate={{ x: [0, -100 * clients.length] }}
                transition={{
                  x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' },
                }}
              >
                {duplicatedClients.map((client, index) => (
                  <motion.div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md border-4 border-gray-100">
                      <div
                        className={`${client.color} w-full h-full rounded-full flex items-center justify-center text-white font-black text-lg`}
                      >
                        {client.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients



