export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-l">
            <img src="/your-photo.jpg" alt="About Me" className="about-photo" />
          </div>
          <div className="about-r">
            <h4 className="about-eyebrow">— ABOUT ME</h4>
            <h2 className="about-h2">OPERATIONAL EXECUTION. REVENUE IMPACT. SYSTEM OPTIMIZATION.</h2>
            
            <p className="about-text">
              Many businesses lose Revenue not because of lack of demand, but due to Operational Bottlenecks—Slow Customer Response Times, Inefficient Workflows, Fragmented Systems, and Inconsistent Execution Across Teams.
            </p>
            <p className="about-text">
              A 12+ year Remote Operations Specialist supporting U.S.-based Healthcare, Finance, Telecom, E-commerce, and Hospitality Clients through Structured Execution, Customer Experience Optimization, and Revenue-Support Workflows.
            </p>
            <p className="about-text">
              Experience includes generating <span className="highlight">$121,616.93 in Prepaid Revenue within 2 Weeks at Hotel Reservations</span> and Managing 1,000+ Monthly Healthcare Interactions at UnitedHealthcare/Optum under strict HIPAA compliance in High-Volume Environments.
            </p>
            <p className="about-text">
              Focused on Building Systems that Improve Efficiency, Strengthen Customer Experience, and support Consistent Revenue Performance—rather than simply completing tasks.
            </p>

            <div className="capability-container">
              <h5 className="cap-header">CORE CAPABILITY AREAS</h5>
              <div className="cap-grid">
                <div className="cap-col">
                  <span className="cap-label">OPERATIONS & AUTOMATION</span>
                  <div className="pill">CRM Systems & Workflow Automation</div>
                  <div className="pill">Revenue Operations Support</div>
                  <div className="pill">Medical VA (HIPAA-Compliant Operations)</div>
                </div>
                <div className="cap-col">
                  <span className="cap-label">SALES & GROWTH</span>
                  <div className="pill">High-Ticket Sales & Booking Support</div>
                  <div className="pill">E-commerce Virtual Assistance</div>
                  <div className="pill">Social Media Monetization Support</div>
                  <span className="cap-label mt-20">RETENTION & SUPPORT</span>
                  <div className="pill">Customer Success & Client Retention</div>
                  <div className="pill">Omnichannel Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
