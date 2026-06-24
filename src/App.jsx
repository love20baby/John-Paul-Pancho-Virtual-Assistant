import ParticleCanvas   from './components/ParticleCanvas'
import NavBar           from './components/NavBar'
import Hero             from './components/Hero'
import StatsBar         from './components/StatsBar'
import About            from './components/About'
import ToolsMarquee     from './components/ToolsMarquee' // Moved up to establish authority early
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

  return (
    <>
      <ParticleCanvas />
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
    </>
  )
}
