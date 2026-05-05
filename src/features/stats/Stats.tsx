import React from 'react'
import { motion } from 'framer-motion'
import { Award, Clock, Users, ShieldCheck } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'

const Stats: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const items = [
    {
      icon: Award,
      value: '500+',
      label: 'Projects Completed',
      desc: 'Residential, commercial & industrial',
    },
    {
      icon: Clock,
      value: '10+',
      label: 'Years of Experience',
      desc: 'Trusted since day one',
    },
    {
      icon: Users,
      value: '300+',
      label: 'Happy Clients',
      desc: 'Across Metro Manila',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Licensed & Registered',
      desc: 'PCAB & PHILGEPS certified',
    },
  ]

  return (
    <section ref={ref} className="relative py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-5xl md:text-6xl font-black text-gray-900 leading-none mb-3">{item.value}</p>
                <div className="h-px w-16 bg-[#E01A4F] mb-3" />
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">{item.label}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Stats



