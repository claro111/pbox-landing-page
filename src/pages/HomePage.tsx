import React from 'react'
import { Hero } from '../features/hero'
import { Stats } from '../features/stats'
import { BrandTransform } from '../features/brand'
import { Services } from '../features/services'
import { Clients } from '../features/clients'
import { Testimonial } from '../features/testimonial'
import { CTABanner } from '../features/cta'

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <div className="bg-white">
        <BrandTransform />
        <Services />
        <Clients />
        <Testimonial />
        <CTABanner />
      </div>
    </main>
  )
}

export default HomePage


