/**
 * Type definitions for validation utilities
 */

export interface ContactFormData {
  name: string
  projectType: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  projectType?: string
  message?: string
}

/**
 * Checks if a field value is empty or contains only whitespace
 */
export function isFieldEmpty(value: string): boolean

/**
 * Validates email format using regex pattern
 */
export function validateEmail(email: string): boolean

/**
 * Validates contact form data and returns error messages
 */
export function validateContactForm(
  formData: ContactFormData
): ContactFormErrors
