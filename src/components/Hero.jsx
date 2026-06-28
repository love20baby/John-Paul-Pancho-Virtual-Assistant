export default function Hero() {
  return (
    <section id="hero" className="wrap">
      <div className="hero-l">
        <div className="hero-ey">
          Senior Virtual Assistant · 12+ Years · U.S.-Based Clients
        </div>

        <h1 className="hero-h1">
          REAL WORK.
          <span className="hl">REAL RESULTS.</span>
        </h1>

        <p className="hero-sub">
          I help U.S.-based businesses streamline operations, retain more clients,
          and unlock revenue — with 12+ years of proven performance across healthcare,
          e-commerce, hospitality, and finance.
        </p>

        <div className="hero-ctas">
          <a href="#book" className="btn-y" data-track="hero_book">
            Book Free Discovery Call →
          </a>
          <a href="#services" className="btn-o" data-track="hero_services">
            See My Services
          </a>
        </div>

        <div className="htrust">
          <span className="ht">$121K+ Revenue in 2 Weeks</span>
          <span className="ht">HIPAA Compliant</span>
          <span className="ht">Available Full-Time</span>
        </div>
      </div>

      <div className="hero-r">
        <img
          src="/images/hero.jpg"
          alt="John Paul Pancho"
          className="hero-photo"
        />
        <div className="flc fc1">
          <strong>12+</strong>
          <span>Years Experience</span>
        </div>
        <div className="flc fc2">
          <strong>$121K</strong>
          <span>Revenue in 2 Weeks</span>
        </div>
      </div>
    </section>
  )
}
