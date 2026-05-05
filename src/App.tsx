import { LazyMotion, domAnimation } from 'framer-motion'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar, Footer } from './features'
import { ScrollToTop } from './shared/components'
import { HomePage, AboutPage, ProjectsPage, ContactPage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-white">
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          <ScrollToTop />
          <Navbar />
          <div id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </LazyMotion>
    </BrowserRouter>
  )
}

export default App


