import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useInView from '../../shared/hooks/useInView'
import { PROJECTS } from '../../shared/utils/constants'

type FilterCategory =
  | 'all'
  | 'modular-kitchen'
  | 'fit-out'
  | 'residential'
  | 'condo-renovation'
  | 'mall-kiosk'
  | 'office-furniture'

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')
  const [ref, isInView] = useInView({ threshold: 0.05 })

  const filterButtons: { label: string; value: FilterCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Design', value: 'modular-kitchen' },
    { label: 'Print', value: 'fit-out' },
    { label: 'Fabrication', value: 'residential' },
    { label: 'System Display', value: 'condo-renovation' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-[#1447E6] text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1447E6]"></span>
            OUR PORTFOLIO
          </p>
          <h2
            id="projects-heading"
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6"
            style={{ 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              WebkitTextStroke: '0.5px currentColor'
            }}
          >
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Explore our curated showcase of design, print, fabrication, and display solutions. 
            Every project represents our commitment to impact and precision.
          </p>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-gray-500 text-sm font-black uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              FILTER:
            </span>
            {filterButtons.map(btn => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value)}
                className={`px-6 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 rounded-full ${
                  activeFilter === btn.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-pressed={activeFilter === btn.value}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid - Simple 3 Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group cursor-pointer overflow-hidden rounded-lg bg-gray-300 aspect-[4/3] flex items-center justify-center relative"
              >
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider z-10">Project Image</p>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white/80 text-xs font-black uppercase tracking-wider mb-1">
                    {project.category.replace(/-/g, ' ')}
                  </p>
                  <h3 className="text-white text-lg font-black">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setActiveFilter('all')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1447E6] text-white font-black text-sm uppercase tracking-widest hover:bg-[#E01A4F] transition-all duration-300 rounded-lg"
          >
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects



