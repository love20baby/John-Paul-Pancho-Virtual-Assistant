export default function About() {
  return (
    <section id="about" className="wrap">
      <div className="about-in">

        <div className="aimg rv">
          <img src="/images/laptop1.png" alt="John Paul Pancho working" />
         </div>

        <div className="atxt">
          <div className="lbl rv">About Me</div>

          <h2 className="rv d1">
            OPERATIONAL EXECUTION. REVENUE IMPACT. SYSTEM OPTIMIZATION.
          </h2>

          <p className="rv d2">
            Many businesses lose Revenue not because of lack of demand, but due to Operational Bottlenecks—Slow Customer Response Times, Inefficient Workflows, Fragmented Systems, and Inconsistent Execution Across Teams.
          </p>

          <p className="rv d2">
            A 12+ year Remote Operations Specialist supporting U.S.-based Healthcare, Finance, Telecom, E-commerce, and Hospitality Clients through Structured Execution, Customer Experience Optimization, and Revenue-Support Workflows.
          </p>

          <p className="rv d2">
            Experience includes generating{" "}
            <strong style={{ color: 'var(--y)' }}>
              $121,616.93 in Prepaid Revenue within 2 Weeks at Hotel Reservations
            </strong>{" "}
            and Managing 1,000+ Monthly Healthcare Interactions at UnitedHealthcare/Optum under strict HIPAA compliance in High-Volume Environments.
          </p>

          <p className="rv d2">
            Focused on Building Systems that Improve Efficiency, Strengthen Customer Experience, and support Consistent Revenue Performance—rather than simply completing tasks.
          </p>

          {/* FIXED SPACING WRAPPER */}
          <div className="cap-block rv d3">

            <div className="cap-label">
              Core Capability Areas
            </div>

            {/* STRUCTURED OPERATIONAL PILLARS */}
            <div className="cap-pillars-grid">
              
              <div className="cap-pillar">
                <div className="pillar-title">Operations & Automation</div>
                <div className="atags">
                  <span>CRM Systems & Workflow Automation</span>
                  <span>Revenue Operations Support</span>
                  <span>Medical VA (HIPAA–Compliant Operations)</span>
                </div>
              </div>

              <div className="cap-pillar">
                <div className="pillar-title">Sales & Growth</div>
                <div className="atags">
                  <span>High-Ticket Sales & Booking Support</span>
                  <span>E-commerce Virtual Assistance</span>
                  <span>Social Media Monetization Support</span>
                </div>
              </div>

              <div className="cap-pillar">
                <div className="pillar-title">Retention & Support</div>
                <div className="atags">
                  <span>Customer Success & Client Retention</span>
                  <span>Omnichannel Customer Support</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
