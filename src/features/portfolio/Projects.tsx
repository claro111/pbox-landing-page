import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useInView from '../../shared/hooks/useInView'
import { PROJECTS } from '../../shared/utils/constants'

type FilterCategory = 'all' | 'acrylic-signage' | 'panaflex-signage' | 'stainless-signage' | 'van-wrap' | 'wall-mural' | 'billboard'

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')
  const [ref, isInView] = useInView({ threshold: 0.1 })

  // Filter buttons - NO BRANDING TAB
  const filterButtons: { label: string; value: FilterCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Acrylic Signage', value: 'acrylic-signage' },
    { label: 'Panaflex Signage', value: 'panaflex-signage' },
    { label: 'Stainless Signage', value: 'stainless-signage' },
    { label: 'Van Wrap', value: 'van-wrap' },
    { label: 'Wall Mural', value: 'wall-mural' },
    { label: 'Billboard', value: 'billboard' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(project => project.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our<span className="text-red-600"> Premium</span> Projects
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl">
            We transform environments through high-fidelity craft. From massive roadside
            impact to intricate retail details, explore our portfolio of creative advertising and
            signage solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
          role="group"
          aria-label="Filter projects by category"
        >
          {filterButtons.map(button => (
            <button
              key={button.value}
              onClick={() => setActiveFilter(button.value)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === button.value
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={activeFilter === button.value}
              aria-label={`Filter projects: ${button.label}`}
            >
              {button.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-[200px]">
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, 6).map((project, index) => {
              // Define different sizes for masonry effect
              const sizes = [
                'md:col-span-3 lg:col-span-4 md:row-span-2', // Large
                'md:col-span-3 lg:col-span-2 md:row-span-2', // Medium tall
                'md:col-span-3 lg:col-span-2 md:row-span-1', // Small
                'md:col-span-3 lg:col-span-2 md:row-span-1', // Small
                'md:col-span-3 lg:col-span-4 md:row-span-1', // Wide
                'md:col-span-3 lg:col-span-2 md:row-span-1', // Small
              ]
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`${sizes[index % sizes.length]} group cursor-pointer overflow-hidden rounded-3xl relative`}
                  onClick={() => setActiveFilter(project.category as FilterCategory)}
                >
                  <div className="w-full h-full overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} project`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm capitalize mt-1">
                          {project.category.replace('-', ' ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Show All Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button 
              onClick={() => {
                // Navigate to all projects page - you can implement this later
                console.log(`Show all ${activeFilter} projects`)
              }}
              className="text-gray-900 font-semibold text-lg hover:text-red-600 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              Show All {activeFilter !== 'all' ? `${activeFilter.replace('-', ' ')} ` : ''}Projects
              <span className="text-2xl">→</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
