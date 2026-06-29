export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid-container">
        {/* Left Side: Content & Action */}
        <div className="hero-l">
          {/* Updated: Added class hl to apply the theme color */}
          <div className="hero-ey">
  Revenue Operations & Virtual Support Specialist
</div>

          <h1 className="hero-h1" style={{ textTransform: 'uppercase' }}>
            <span className="hl">OPERATIONAL</span> SUPPORT.<br />
            <span className="hl">REVENUE</span> IMPACT.<br />
            CLIENT <span className="hl">RETENTION</span>.
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
        </div>

        {/* Right Side: Portrait Image */}
        <div className="hero-r">
          <div className="hero-image-wrapper">
            <img
              src="/images/hero-profile.png"
              alt="John Paul Pancho"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
