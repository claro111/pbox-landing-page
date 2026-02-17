import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from 'lucide-react'
import Input from '../../shared/components/Input'
import Button from '../../shared/components/Button'
import { validateContactForm } from '../../shared/utils/validation'
import useInView from '../../shared/hooks/useInView'

interface ContactFormData {
  name: string
  projectType: string
  message: string
}

interface ContactFormErrors {
  name?: string
  projectType?: string
  message?: string
}

const Contact: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    projectType: '',
    message: '',
  })

  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())

  const handleChange = (field: keyof ContactFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleBlur = (field: keyof ContactFormData) => () => {
    // Mark field as touched
    setTouchedFields(prev => new Set(prev).add(field))

    // Validate single field on blur
    const fieldErrors = validateContactForm({ ...formData })
    if (fieldErrors[field]) {
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouchedFields(new Set(['name', 'projectType', 'message']))

    // Validate all fields
    const validationErrors = validateContactForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Submit form
    setIsSubmitting(true)

    try {
      // Mock API call - console log form data
      console.log('Form submitted:', formData)

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      // Show success message
      setSubmitSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', projectType: '', message: '' })
        setErrors({})
        setSubmitSuccess(false)
        setTouchedFields(new Set())
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" ref={ref} className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="px-8 md:px-16 lg:px-20 py-16 lg:py-20 flex flex-col justify-center"
        >
          {/* Hero Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-[#E10600] text-sm font-semibold tracking-wider uppercase mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6">
              Let's Build Something{' '}
              <span className="text-[#E10600]">Great</span> Together.
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg mb-8">
              Better yet, see us in person! We love our customers, so feel free
              to visit during normal business hours.
            </p>
          </motion.div>

          {/* Office Location & Business Hours */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">
                OFFICE LOCATION
              </h3>
              <p className="font-bold text-[#111827] mb-1">
                PBOX Creative Advertising
              </p>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                14 M. L. Quezon Street,
                <br />
                Marikina,
                <br />
                Metro Manila, Philippines
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">
                BUSINESS HOURS
              </h3>
              <p className="text-[#111827] mb-1">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="font-semibold">Open Today</span>
              </p>
              <p className="text-[#6B7280] text-sm">09:00 am – 06:00 pm</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-[#E10600]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <h3 className="text-xl font-bold text-[#111827]">
                Send us a message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  type="text"
                  name="name"
                  label="Your Name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  error={touchedFields.has('name') ? errors.name : undefined}
                  required
                  className="w-full"
                />

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-[#374151] mb-2"
                  >
                    Project Type <span className="text-[#E10600]">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={e => handleChange('projectType')(e.target.value)}
                    onBlur={handleBlur('projectType')}
                    className={`w-full px-4 py-3 border ${
                      touchedFields.has('projectType') && errors.projectType
                        ? 'border-red-500'
                        : 'border-[#D1D5DB]'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:border-transparent transition-all bg-white text-[#111827]`}
                    required
                  >
                    <option value="">Graphic Design</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="branding">Branding</option>
                    <option value="marketing">Marketing</option>
                    <option value="other">Other</option>
                  </select>
                  {touchedFields.has('projectType') && errors.projectType && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.projectType}
                    </p>
                  )}
                </div>
              </div>

              <div onBlur={handleBlur('message')}>
                <Input
                  type="textarea"
                  name="message"
                  label="Message"
                  placeholder="How can we help with your project?"
                  value={formData.message}
                  onChange={handleChange('message')}
                  error={
                    touchedFields.has('message') ? errors.message : undefined
                  }
                  required
                  className="w-full"
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {}}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </Button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl"
                  role="alert"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* Right Column - Map */}
        <div className="relative bg-[#E5E7EB] min-h-[400px] lg:min-h-screen">
          <iframe
            src="https://www.google.com/maps?q=14+M.+L.+Quezon+Street,+Marikina,+Metro+Manila,+Philippines&output=embed&z=17"
            width="100%"
            height="100%"
            className="absolute inset-0 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PBOX Creative Advertising Location"
            aria-label="Google Maps showing PBOX Creative Advertising location at 14 M. L. Quezon Street, Marikina, Metro Manila"
          />

          {/* Get Directions Button */}
          <div className="absolute top-6 right-6 z-10">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=14+M.+L.+Quezon+Street,+Marikina,+Metro+Manila,+Philippines"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1F2937] text-white rounded-full font-medium hover:bg-[#111827] transition-colors shadow-lg"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
