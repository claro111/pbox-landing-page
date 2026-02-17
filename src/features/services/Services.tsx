import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Printer, Store } from 'lucide-react'
import Card from '../../shared/components/Card'
import useInView from '../../shared/hooks/useInView'
import { SERVICES } from '../../shared/utils/constants'

// Map icon names to actual Lucide icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Printer,
  Store,
}

const Services: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="services" ref={ref} className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions to elevate your brand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-lg bg-red-50 mb-4"
                    aria-hidden="true"
                  >
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-red-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
