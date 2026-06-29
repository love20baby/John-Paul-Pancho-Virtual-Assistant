export default function StatsBar() {
  // Ensure your useEffect / IntersectionObserver logic is here
  
  return (
    <section className="stats-section-divider">
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number"><span className="cnt" data-to="12">0</span>+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="sdv" />
          <div className="stat-box">
            <div className="stat-number">$<span className="cnt" data-to="121">0</span>K+</div>
            <div className="stat-label">Revenue in 2 Weeks</div>
          </div>
          <div className="sdv" />
          <div className="stat-box">
            <div className="stat-number"><span className="cnt" data-to="1000">0</span>+</div>
            <div className="stat-label">Monthly Interactions</div>
          </div>
          <div className="sdv" />
          <div className="stat-box">
            <div className="stat-number"><span className="cnt" data-to="75">0</span>%</div>
            <div className="stat-label">Sales Conversion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
