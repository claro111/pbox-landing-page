/**
 * Checks if a field value is empty or contains only whitespace
 * @param {string} value - The field value to check
 * @returns {boolean} True if the field is empty, false otherwise
 */
export function isFieldEmpty(value) {
  return !value || value.trim().length === 0
}

/**
 * Validates email format using regex pattern
 * @param {string} email - The email address to validate
 * @returns {boolean} True if email is valid, false otherwise
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates contact form data and returns error messages
 * @param {Object} formData - The form data to validate
 * @param {string} formData.name - User's name
 * @param {string} formData.projectType - Project type selection
 * @param {string} formData.message - User's message
 * @returns {Object} Object containing error messages for invalid fields
 */
export function validateContactForm(formData) {
  const errors = {}

  // Validate name
  if (isFieldEmpty(formData.name)) {
    errors.name = 'Name is required'
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  // Validate project type
  if (isFieldEmpty(formData.projectType)) {
    errors.projectType = 'Please select a project type'
  }

  // Validate message
  if (isFieldEmpty(formData.message)) {
    errors.message = 'Message is required'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}
