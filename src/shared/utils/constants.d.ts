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
  category: 'acrylic-signage' | 'panaflex-signage' | 'stainless-signage' | 'van-wrap' | 'wall-mural' | 'billboard'
  image: string
}

export interface Machine {
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

export const COLORS: {
  primary: string
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
export const PROJECTS: Project[]
export const MACHINES: Machine[]
export const ABOUT_CONTENT: AboutContent
export const TESTIMONIALS: Testimonial[]
export const TESTIMONIAL: Testimonial
export const COMPANY_INFO: CompanyInfo
export const SOCIAL_LINKS: SocialLink[]
