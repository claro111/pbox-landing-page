import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import useInView from '../../shared/hooks/useInView'

interface ContactFormData {
  fullName: string
  email: string
  mobile: string
  subject: string
  message: string
}

interface ContactFormErrors {
  fullName?: string
  email?: string
  mobile?: string
  subject?: string
  message?: string
}

const Contact: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())

  const handleChange = (field: keyof ContactFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const handleBlur = (field: keyof ContactFormData) => () => {
    setTouchedFields(prev => new Set(prev).add(field))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouchedFields(new Set(['fullName', 'email', 'mobile', 'subject', 'message']))
    
    // Basic validation
    const validationErrors: ContactFormErrors = {}
    if (!formData.fullName.trim()) validationErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) validationErrors.email = 'Email is required'
    if (!formData.mobile.trim()) validationErrors.mobile = 'Mobile number is required'
    if (!formData.subject.trim()) validationErrors.subject = 'Subject is required'
    if (!formData.message.trim()) validationErrors.message = 'Message is required'
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    try {
      console.log('Form submitted:', formData)
      await new Promise(resolve => setTimeout(resolve, 500))
      setSubmitSuccess(true)
      setTimeout(() => {
        setFormData({ fullName: '', email: '', mobile: '', subject: '', message: '' })
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

  return (
    <section id="contact" ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full text-[#E01A4F] text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E01A4F]"></span>
            GET IN TOUCH
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6"
            style={{ 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              WebkitTextStroke: '0.5px currentColor'
            }}
          >
            CONTACT US
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and 
            let's create something monumental together.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-black text-gray-900 mb-8">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-8 mb-10">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#1447E6]" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">
                    EMAIL US
                  </p>
                  <p className="text-gray-900 font-bold">hello@pboxcreative.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#1447E6]" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">
                    CALL US
                  </p>
                  <p className="text-gray-900 font-bold">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#1447E6]" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">
                    VISIT US
                  </p>
                  <p className="text-gray-900 font-bold">
                    14 M. L. Quezon Street, Marikina,<br />
                    Metro Manila, Philippines
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#1447E6]" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">
                    BUSINESS HOURS
                  </p>
                  <p className="text-gray-900 font-bold">
                    9:00 AM - 6:00 PM<br />
                    Monday - Saturday
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=14+M.+L.+Quezon+Street,+Marikina,+Metro+Manila,+Philippines&output=embed&z=17"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PBOX Construction Location"
              />
              <a
                href="https://www.google.com/maps?q=14+M.+L.+Quezon+Street,+Marikina,+Metro+Manila,+Philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 px-3 py-1.5 bg-white text-[#1447E6] text-xs font-black rounded shadow-lg hover:bg-gray-50 transition-colors"
              >
                Open in Maps ↗
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-2">
                  FULL NAME
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={e => handleChange('fullName')(e.target.value)}
                  onBlur={handleBlur('fullName')}
                  className={`w-full px-4 py-3 border ${
                    touchedFields.has('fullName') && errors.fullName
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1447E6] focus:border-transparent transition-all bg-white`}
                />
                {touchedFields.has('fullName') && errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => handleChange('email')(e.target.value)}
                  onBlur={handleBlur('email')}
                  className={`w-full px-4 py-3 border ${
                    touchedFields.has('email') && errors.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1447E6] focus:border-transparent transition-all bg-white`}
                />
                {touchedFields.has('email') && errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-2">
                  MOBILE NUMBER
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="+63 900 000 0000"
                  value={formData.mobile}
                  onChange={e => handleChange('mobile')(e.target.value)}
                  onBlur={handleBlur('mobile')}
                  className={`w-full px-4 py-3 border ${
                    touchedFields.has('mobile') && errors.mobile
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1447E6] focus:border-transparent transition-all bg-white`}
                />
                {touchedFields.has('mobile') && errors.mobile && (
                  <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-2">
                  SUBJECT
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={e => handleChange('subject')(e.target.value)}
                  onBlur={handleBlur('subject')}
                  className={`w-full px-4 py-3 border ${
                    touchedFields.has('subject') && errors.subject
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1447E6] focus:border-transparent transition-all bg-white`}
                >
                  <option value="">General Inquiry</option>
                  <option value="construction">Construction Services</option>
                  <option value="furniture">Furniture & Fixtures</option>
                  <option value="design">Design Services</option>
                  <option value="quote">Request a Quote</option>
                  <option value="other">Other</option>
                </select>
                {touchedFields.has('subject') && errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={e => handleChange('message')(e.target.value)}
                  onBlur={handleBlur('message')}
                  className={`w-full px-4 py-3 border ${
                    touchedFields.has('message') && errors.message
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1447E6] focus:border-transparent transition-all bg-white resize-none`}
                />
                {touchedFields.has('message') && errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#E01A4F] text-white font-black text-sm uppercase tracking-widest hover:bg-[#1447E6] transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
                  role="alert"
                >
                  Thank you! We'll be in touch shortly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact



