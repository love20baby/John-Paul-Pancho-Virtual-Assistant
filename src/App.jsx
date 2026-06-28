import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import NavBar           from './components/NavBar'
import Hero             from './components/Hero'
import StatsBar         from './components/StatsBar'
import About            from './components/About'
import ToolsMarquee     from './components/ToolsMarquee' 
import Services         from './components/Services'
import Experience       from './components/Experience'
import Process          from './components/Process'
import PhotoShowcase    from './components/PhotoShowcase'
import Testimonials     from './components/Testimonials'
import Booking          from './components/Booking'
import Footer           from './components/Footer'
import useScrollReveal  from './hooks/useScrollReveal'
import useParallax      from './hooks/useParallax'
import useCountUp       from './hooks/useCountUp'

export default function App() {
  useScrollReveal()
  useParallax()
  useCountUp()

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      document.documentElement.style.setProperty('--global-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--global-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
    }
  }, [])

  return (
    <div className="app-layout-root" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <div className="global-spotlight" />
      
      {/* Locked Hero Section */}
      <div className="hero-viewport-wrapper">
        <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <NavBar />
          <Hero />
        </div>
      </div>
      
      {/* Content Flow */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <StatsBar />
        <About />
        <ToolsMarquee />
        <Services />
        <Experience />
        <Process />
        <PhotoShowcase />
        <Testimonials />
        <Booking />
        <Footer />
      </div>
      
      <Analytics />
    </div>
  )
}
