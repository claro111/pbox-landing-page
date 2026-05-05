import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'
import { ABOUT_CONTENT } from '../../shared/utils/constants'

const About: React.FC = () => {
  const [historyRef, historyInView] = useInView({ threshold: 0.15 })
  const [missionRef, missionInView] = useInView({ threshold: 0.2 })

  return (
    <>
      {/* About/History Section */}
      <section id="about" ref={historyRef} className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={historyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-[#1447E6] text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1447E6]"></span>
            OUR STORY
          </p>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
            style={{ 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              WebkitTextStroke: '0.5px currentColor'
            }}
          >
            ABOUT PBOX
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            From a backyard signage shop to your expert partner in signage design, 
            fabrication and installation.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-10">
              <h3 className="text-2xl font-black text-gray-900 mb-1">
                OUR HISTORY
              </h3>
              <div className="h-1 w-16 bg-[#E01A4F] mb-6" />
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PBOX Creative Advertising Corporation was founded in 2012. We specialized 
                  in design, fabrication and installation of high quality signage.
                </p>
                <p>
                  From your backyard signage shop into expert partner in signage. PBOX 
                  Creative Advertising Corporation is a group of talented individuals with 
                  diverse skills and expertise in the construction industry.
                </p>
                <p>
                  {ABOUT_CONTENT.description}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
                <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm font-black text-gray-900">PCAB Registered</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
                <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm font-black text-gray-900">PHILGEPS Registered</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3] relative flex items-center justify-center">
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider text-center px-4">
                TEAM / WORKSHOP IMAGE PLACEHOLDER
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section ref={missionRef} className="relative py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-[#1447E6] mb-6"
            style={{ 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              WebkitTextStroke: '0.5px currentColor'
            }}
          >
            OUR MISSION
          </h2>
          
          <h3 
            className="text-2xl md:text-3xl font-black text-gray-900 mb-6"
            style={{ 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              WebkitTextStroke: '0.5px currentColor'
            }}
          >
            PBOX aims to enhance, create and deliver to your success!
          </h3>
          
          <div className="h-1 w-16 bg-gray-900 mx-auto mb-8" />
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Our aim is to provide creative reinforcement to company's marketing and advertising strategies.
            </p>
            <p>
              Through constant employment of the latest innovation in technology, we also aim to strengthen 
              our band and eventually cater to organization of all sizes – multinational, SME or solely-owned of franchised.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default About



