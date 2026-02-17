import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'

const BrandTransform: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const features = [
    {
      title: 'High-Impact Visibility',
      description:
        'Proven to increase foot traffic through strategic visual placements.',
    },
    {
      title: 'Ultra-Durable Materials',
      description:
        'Weather-resistant, UV-protected prints that stay vibrant for years.',
    },
  ]

  return (
    <section ref={ref} className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                alt="Professional printing equipment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Red Badge */}
              <div className="absolute top-6 right-6 bg-[#E10600] text-white p-4 rounded-xl shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Transforming Spaces,{' '}
              <span className="text-[#E10600]">Defining Brands.</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              PBOX isn't just a print shop. We are architects of visibility. Our
              engineering-led approach to signage ensures your brand doesn't
              just sit on a wall—it commands the environment.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#E10600]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandTransform
