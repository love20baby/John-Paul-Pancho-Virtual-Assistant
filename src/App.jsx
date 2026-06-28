import ParticleCanvas from './components/ParticleCanvas';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Process from './components/Process';
import ToolsMarquee from './components/ToolsMarquee';
import PhotoShowcase from './components/PhotoShowcase';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import useParallax from './hooks/useParallax';
import useCountUp from './hooks/useCountUp';

export default function App() {
  // Initialize operational hooks for scroll animations, parallax effects, and data-tracking statistics
  useScrollReveal();
  useParallax();
  useCountUp();

  return (
    <div className="app-container">
      {/* Dynamic Background Foundation */}
      <ParticleCanvas />
      
      {/* Core Navigation */}
      <NavBar />

      {/* Main Content Sections */}
      <main className="wrap">
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Experience />
        <Process />
        <ToolsMarquee />
        <PhotoShowcase />
        <Testimonials />
        <Booking />
      </main>

      {/* Footer & Branding */}
      <Footer />
    </div>
  );
}
