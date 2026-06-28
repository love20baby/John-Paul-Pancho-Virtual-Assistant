export default function StatsBar() {
  return (
    <div className="stats wrap">
      <div className="stats-in">
        <div className="si">
          <div className="sn"><span className="cnt" data-to="12">0</span>+</div>
          <div className="sl">Years Experience</div>
        </div>
        <div className="sdv" />
        <div className="si">
          <div className="sn">$<span className="cnt" data-to="121">0</span>K+</div>
          <div className="sl">Revenue in 2 Weeks</div>
        </div>
        <div className="sdv" />
        <div className="si">
          <div className="sn"><span className="cnt" data-to="1000">0</span>+</div>
          <div className="sl">Monthly Interactions</div>
        </div>
        <div className="sdv" />
        <div className="si">
          <div className="sn"><span className="cnt" data-to="75">0</span>%</div>
          <div className="sl">Sales Conversion Rate</div>
        </div>
      </div>
    </div>
  )
}
