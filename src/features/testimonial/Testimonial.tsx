import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'
import { TESTIMONIALS } from '../../shared/utils/constants'

const Testimonial: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + newDirection
      if (nextIndex < 0) return TESTIMONIALS.length - 1
      if (nextIndex >= TESTIMONIALS.length) return 0
      return nextIndex
    })
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const getTestimonialIndex = (offset: number) => {
    const index = currentIndex + offset
    if (index < 0) return TESTIMONIALS.length + index
    if (index >= TESTIMONIALS.length) return index - TESTIMONIALS.length
    return index
  }

  return (
    <section
      id="testimonial"
      ref={ref}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center space-y-6"
        >
          {/* Quote Icon */}
          <div className="flex justify-center">
            <Quote className="w-12 h-12 text-[#1447E6]/30" aria-hidden="true" />
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="flex items-center justify-center gap-8 cursor-grab active:cursor-grabbing py-4"
            >
              {/* Left Testimonial */}
              <motion.div
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={{ opacity: 0.3, scale: 0.9 }}
                className="hidden lg:block w-80 flex-shrink-0"
              >
                <TestimonialCard
                  testimonial={TESTIMONIALS[getTestimonialIndex(-1)]}
                  isActive={false}
                />
              </motion.div>

              {/* Center Testimonial (Active) */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-3xl flex-shrink-0"
              >
                <TestimonialCard
                  testimonial={TESTIMONIALS[currentIndex]}
                  isActive={true}
                />
              </motion.div>

              {/* Right Testimonial */}
              <motion.div
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={{ opacity: 0.3, scale: 0.9 }}
                className="hidden lg:block w-80 flex-shrink-0"
              >
                <TestimonialCard
                  testimonial={TESTIMONIALS[getTestimonialIndex(1)]}
                  isActive={false}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pt-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#1447E6] w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: {
    id: number
    quote: string
    author: string
    role: string
    avatar: string
    rating: number
  }
  isActive: boolean
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
}) => {
  return (
    <blockquote className="space-y-4">
      {/* Quote */}
      <p
        className={`leading-relaxed font-medium ${
          isActive
            ? 'text-xl md:text-2xl text-[#374151]'
            : 'text-base text-[#9CA3AF]'
        }`}
      >
        "{testimonial.quote}"
      </p>

      {/* Author Info */}
      <footer className="flex flex-col items-center space-y-2 pt-2">
        <div
          className={`rounded-full bg-gray-300 flex items-center justify-center ${
            isActive ? 'w-14 h-14' : 'w-10 h-10'
          }`}
        >
          <span className="text-gray-500 text-xs font-bold">AVATAR</span>
        </div>
        <div>
          <cite
            className={`block font-bold not-italic ${
              isActive ? 'text-sm text-[#111827]' : 'text-xs text-[#6B7280]'
            }`}
          >
            {testimonial.author}
          </cite>
          <p
            className={`uppercase tracking-wide font-semibold ${
              isActive ? 'text-xs text-[#1447E6]' : 'text-xs text-[#9CA3AF]'
            }`}
          >
            {testimonial.role}
          </p>
        </div>
      </footer>

      {/* Star Rating */}
      {isActive && (
        <div className="flex justify-center gap-1 pt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? 'fill-[#1447E6] text-[#1447E6]'
                  : 'text-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      )}
    </blockquote>
  )
}

export default Testimonial



