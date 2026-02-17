import { LazyMotion, domAnimation } from 'framer-motion'
import {
  Navbar,
  Hero,
  Stats,
  BrandTransform,
  Services,
  Projects,
  Clients,
  About,
  Equipment,
  Testimonial,
  Contact,
  CTABanner,
  Footer,
} from './features'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        {/* Skip to main content link for keyboard navigation */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          {/* Hero Section */}
          <section id="hero" aria-labelledby="hero-heading">
            <Hero />
          </section>

          {/* Stats Section */}
          <Stats />

          {/* Brand Transform Section */}
          <BrandTransform />

          {/* Services Section */}
          <section
            id="services"
            className="py-12"
            aria-labelledby="services-heading"
          >
            <Services />
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="py-12"
            aria-labelledby="projects-heading"
          >
            <Projects />
          </section>

          {/* Clients Section - Positioned after Projects */}
          <Clients />

          {/* About Section */}
          <section id="about" className="py-12" aria-labelledby="about-heading">
            <About />
          </section>

          {/* Equipment Section */}
          <section
            id="equipment"
            className="py-12"
            aria-labelledby="equipment-heading"
          >
            <Equipment />
          </section>

          {/* Testimonial Section */}
          <section
            id="testimonial"
            className="py-12 bg-gray-50"
            aria-label="Client testimonial"
          >
            <Testimonial />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-12"
            aria-labelledby="contact-heading"
          >
            <Contact />
          </section>

          {/* CTA Banner Section */}
          <section id="cta" aria-labelledby="cta-heading">
            <CTABanner />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
