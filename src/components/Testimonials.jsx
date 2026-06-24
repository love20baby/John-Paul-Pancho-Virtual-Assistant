import React, { useRef, useEffect } from 'react'

const TESTIMONIALS = [
  {
    stars: '★★★★★',
    quote: '"JP closed more in 2 weeks than most closers do in a month. His conversion rate is unreal — 75% on inbound, consistent, every single month. He\'s not a VA, he\'s a revenue machine."',
    name: 'Michael R.',
    title: 'Director of Sales, HotelPlanner'
  },
  {
    stars: '★★★★★',
    quote: '"Having someone manage 1,000+ member interactions monthly while staying fully HIPAA compliant is rare. John Paul brought that, plus an 18% improvement in our retention numbers. Exceptional."',
    name: 'Dr. Amanda L.',
    title: 'Healthcare Operations, Optum'
  },
  {
    stars: '★★★★★',
    quote: '"He built our entire online gown business from scratch and scaled it to 200+ monthly orders. The Facebook Live strategy alone grew our quarterly revenue by 30%. Incredibly driven and creative."',
    name: 'Grace T.',
    title: 'E-Commerce Partner'
  }
]

function TestimonialCard({ t }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div 
      ref={cardRef} 
      className="testimonial-card" 
      onMouseMove={handleMouseMove}
    >
      <div className="card-glow" />
      
      <div className="card-stars">{t.stars}</div>
      <p className="card-quote">{t.quote}</p>
      
      <div className="card-author-block">
        <h4 className="author-name">{t.name}</h4>
        <p className="author-title">{t.title}</p>
      </div>
    </div>
  )
}

export default function ClientTestimonials() {
  
  // FAILSAFE SMOOTH SCROLL BACKUP LAYER
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === '#testi') {
        const element = document.getElementById('testi')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    if (window.location.hash === '#testi') {
      setTimeout(handleHashScroll, 100)
    }

    window.addEventListener('hashchange', handleHashScroll)
    return () => window.removeEventListener('hashchange', handleHashScroll)
  }, [])

  return (
    /* FIXED: ID is now 'testi' to sync with your navbar anchors */
    <section id="testi" className="testimonials-section">
      <div className="container">
        <span className="section-subtitle">Client Feedback</span>
        <h2 className="section-title">
          Results Clients <br /> Can't Stop Talking About
        </h2>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <TestimonialCard key={idx} t={t} />
          ))}
        </div>

        <div className="cta-wrapper">
          <p className="cta-text">Ready to get results like these?</p>
          <a href="#book" className="cta-button">
            Book Your Free Discovery Call →
          </a>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;1,400;1,500&display=swap');

        html {
          scroll-behavior: smooth !important;
        }

        .testimonials-section {
          background: #090909;
          color: #ffffff;
          padding: 6rem 2rem;
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
          
          /* Ensures your fixed navigation bar won't obscure the section title */
          scroll-margin-top: 100px !important; 
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-subtitle {
          color: #eaaa08;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.1;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 4rem;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }

        .testimonial-card {
          position: relative;
          background: rgba(15, 15, 15, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease;
        }

        .card-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            450px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(234, 170, 8, 0.12),
            transparent 65%
          );
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }

        .testimonial-card:hover {
          transform: translateY(-2px);
          border-color: rgba(234, 170, 8, 0.5);
          box-shadow: 0 0 35px rgba(234, 170, 8, 0.15);
        }

        .testimonial-card:hover .card-glow {
          opacity: 1;
        }

        .card-stars, .card-quote, .card-author-block {
          position: relative;
          z-index: 2;
        }

        .card-stars {
          color: #eaaa08;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
        }

        .card-quote {
          font-style: italic;
          font-weight: 400;
          font-size: 1.05rem;
          line-height: 1.6;
          color: #e5e7eb;
          margin-bottom: 2.5rem;
          letter-spacing: -0.01em;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }

        .card-author-block {
          margin-top: auto;
          padding-top: 1rem;
        }

        .author-name {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .author-title {
          font-size: 0.85rem;
          color: #888888;
          font-weight: 500;
        }

        .cta-wrapper {
          text-align: center;
          margin-top: 5rem;
        }

        .cta-text {
          font-size: 1.1rem;
          color: #9ca3af;
          margin-bottom: 1.25rem;
        }

        .cta-button {
          display: inline-block;
          background: #eaaa08;
          color: #000000;
          padding: 1rem 2rem;
          border-radius: 4px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }

        .cta-button:hover {
          background: #f59e0b;
          transform: translateY(-1px);
          box-shadow: 0 0 20px rgba(234, 170, 8, 0.3);
        }
      `}</style>
    </section>
  )
}
