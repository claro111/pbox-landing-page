// Shared TypeScript types and interfaces

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
}

export interface CardProps {
  children: React.ReactNode
  hover?: boolean
  className?: string
}

export interface InputProps {
  type: 'text' | 'email' | 'textarea'
  name: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
  required?: boolean
  label?: string
  id?: string
}

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export interface Project {
  id: string
  title: string
  category: 'acrylic-signage' | 'panaflex-signage' | 'stainless-signage' | 'van-wrap' | 'wall-mural' | 'billboard'
  image: string
  description?: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export interface Machine {
  id: string
  name: string
  image: string
  description?: string
}

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

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  icon: string
  href: string
  label: string
}

export interface TestimonialData {
  id: number
  quote: string
  author: string
  role: string
  avatar: string
  rating: number
}

export interface CompanyInfo {
  email: string
  phone: string
  address: string
  mapEmbedUrl: string
}

export interface Client {
  id: string
  name: string
  logo: string
}

export interface Stat {
  id: string
  value: string
  label: string
  icon: string
}
