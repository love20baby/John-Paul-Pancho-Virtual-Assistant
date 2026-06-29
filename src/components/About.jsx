export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap">
        <div className="about-grid">
          {/* Left Column: Photo */}
          <div className="about-l">
            <img src="/laptop1.jpg" alt="Operational Execution" className="about-photo" />
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="about-r">
            <span className="hero-ey">About Me</span>
            <h2 className="hero-h1">Operational Execution. Revenue Impact. System Optimization.</h2>
            
            <p className="hero-sub">
              Many businesses lose Revenue not because of lack of demand, but due to Operational Bottlenecks—Slow Customer Response Times, Inefficient Workflows, Fragmented Systems, and Inconsistent Execution Across Teams.
            </p>
            <p className="hero-sub">
              A 12+ year Remote Operations Specialist supporting U.S.-based Healthcare, Finance, Telecom, E-commerce, and Hospitality Clients through Structured Execution, Customer Experience Optimization, and Revenue-Support Workflows.
            </p>

            <div className="capabilities-box">
              <h3>Core Capability Areas</h3>
              <div className="cap-grid">
                <div className="cap-col">
                  <h4>Operations & Automation</h4>
                  <ul>
                    <li>CRM Systems & Workflow Automation</li>
                    <li>Revenue Operations Support</li>
                    <li>Medical VA (HIPAA-Compliant Operations)</li>
                  </ul>
                </div>
                <div className="cap-col">
                  <h4>Sales & Growth</h4>
                  <ul>
                    <li>High-Ticket Sales & Booking Support</li>
                    <li>E-commerce Virtual Assistance</li>
                    <li>Social Media Monetization Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
