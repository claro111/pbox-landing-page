import React from 'react'
import { About } from '../features/about'
import { Equipment } from '../features/equipment'
import { CTABanner } from '../features/cta'

const AboutPage: React.FC = () => {
  return (
    <main>
      <About />
      <Equipment />
      <CTABanner />
    </main>
  )
}

export default AboutPage


