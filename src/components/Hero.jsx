export default function Hero() {
  return (
    <section id="hero" className="wrap">
      <div className="hero-l">
        <div className="hero-ey">
          Revenue Operations & Virtual Support Specialist
        </div>

        <h1 className="hero-h1">
          OPERATIONAL SUPPORT.
          <span className="hl">REVENUE IMPACT. CLIENT RETENTION.</span>
        </h1>

        <p className="hero-sub">
          I help Healthcare Practices, E-commerce Brands, and Service-Based Businesses Streamline Operations, Improve Customer Experience, and Support Revenue-Generating Workflows through Structured Virtual Assistance and Operational Execution.
        </p>

        <div className="hero-ctas">
          <a href="#book" className="btn-y" data-track="hero_book">
            Book Interview →
          </a>
          <a href="#services" className="btn-o" data-track="hero_services">
            View Capabilities
          </a>
        </div>
        {/* htrust div removed to reduce redundancy */}
      </div>

      <div className="hero-r">
        <img 
          src="/images/hero-profile.png" 
          alt="John Paul | Revenue Operations & Virtual Support Specialist" 
          className="hero-img"
        />
        {/* flc boxes removed to reduce redundancy */}
      </div>
    </section>
  )
}
