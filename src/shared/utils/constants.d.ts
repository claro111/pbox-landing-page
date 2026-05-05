export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  category: 'modular-kitchen' | 'fit-out' | 'residential' | 'condo-renovation' | 'mall-kiosk' | 'office-furniture'
  image: string
}

export interface Tool {
  id: string
  name: string
  image: string
}

export interface AboutContent {
  title: string
  description: string
  mission: string
  image: string
  imageAlt: string
}

export interface Testimonial {
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

export interface SocialLink {
  icon: string
  href: string
  label: string
}

export interface Certification {
  label: string
  icon: string
}

export const COLORS: {
  primary: string
  navy: string
  white: string
  black: string
  darkGray: string
  lightGray: string
}

export const BREAKPOINTS: {
  sm: string
  md: string
  lg: string
  xl: string
}

export const NAV_LINKS: NavLink[]
export const SERVICES: Service[]
export const DESIGN_SERVICES: string[]
export const PROJECTS: Project[]
export const TOOLS: Tool[]
export const ABOUT_CONTENT: AboutContent
export const TESTIMONIALS: Testimonial[]
export const TESTIMONIAL: Testimonial
export const COMPANY_INFO: CompanyInfo
export const SOCIAL_LINKS: SocialLink[]
export const CERTIFICATIONS: Certification[]

