export default function StatsBar() {
  // Your existing useEffect/IntersectionObserver logic remains here

  return (
    <section className="stats-section-divider">
      <div className="wrap">
        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="stat-box">
            <div className="stat-number"><span className="cnt" data-to="12">0</span>+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="sdv" />
          
          {/* Stat 2 */}
          <div className="stat-box">
            <div className="stat-number">$<span className="cnt" data-to="121">0</span>K+</div>
            <div className="stat-label">Revenue in 2 Weeks</div>
          </div>
          <div className="sdv" />
          
          {/* Stat 3 */}
          <div className="stat-box">
            <div className="stat-number"><span className="cnt" data-to="1000">0</span>+</div>
            <div className="stat-label">Monthly Interactions</div>
          </div>
          <div className="sdv" />
          
          {/* Stat 4 */}
          <div className="stat-box">
            <div className="stat-number"><span className="cnt" data-to="75">0</span>%</div>
            <div className="stat-label">Sales Conversion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
