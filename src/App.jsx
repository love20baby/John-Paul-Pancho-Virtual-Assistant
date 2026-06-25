import { useEffect } from 'react'
import ParticleCanvas   from './components/ParticleCanvas'
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

  // Track cursor position globally and stream variables into the document element
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
    <div className="app-layout-root" style={{ position: 'relative', width: '100%' }}>
      {/* Dynamic ambient spotlight layer trailing behind your layout sections */}
      <div className="global-spotlight" />

      {/* Background Interactive Layer */}
      <ParticleCanvas />
      
      {/* Foreground User Interface */}
      <NavBar />
      <Hero />
      <StatsBar />
      
      {/* About Section */}
      <About />
      
      {/* Tech Stack sits here now — right after they learn who you are */}
      <ToolsMarquee />
      
      {/* Core Services and Funnel Flow Continue */}
      <Services />
      <Experience />
      <Process />
      <PhotoShowcase />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  )
}
