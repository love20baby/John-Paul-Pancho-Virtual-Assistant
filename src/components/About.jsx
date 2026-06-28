import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap">
        <div className="about-split-container">
          
          {/* Left Column: Premium Clean Image Wrapper */}
          <div className="about-image-block">
            <img 
              src="/images/john-suit-laptop.jpg" 
              alt="John Paul Pancho - Operational Execution Specialist" 
              className="about-profile-pic"
            />
          </div>

          {/* Right Column: High-Conversion Copy & Capabilities */}
          <div className="about-content-block">
            <div className="about-tagline">
              <span className="tag-line-element"></span>
              <h5>ABOUT ME</h5>
            </div>
            
            <h2 className="about-main-heading">
              OPERATIONAL EXECUTION.<br />
              REVENUE IMPACT. SYSTEM<br />
              OPTIMIZATION.
            </h2>

            <div className="about-description">
              <p>
                Many businesses lose Revenue not because of lack of demand, but due to 
                Operational Bottlenecks—Slow Customer Response Times, Inefficient Workflows, 
                Fragmented Systems, and Inconsistent Execution Across Teams.
              </p>
              <p>
                A 12+ year Remote Operations Specialist supporting U.S.-based Healthcare, 
                Finance, Telecom, E-commerce, and Hospitality Clients through Structured 
                Execution, Customer Experience Optimization, and Revenue-Support Workflows.
              </p>
              <p>
                Experience includes generating <strong className="highlight-gold">$121,616.93 in Prepaid Revenue within 2 Weeks at Hotel Reservations</strong> and Managing 1,000+ Monthly Healthcare Interactions at UnitedHealthcare/Optum under strict HIPAA compliance in High-Volume Environments.
              </p>
              <p>
                Focused on Building Systems that Improve Efficiency, Strengthen Customer 
                Experience, and support Consistent Revenue Performance—rather than simply 
                completing tasks.
              </p>
            </div>

            {/* Core Capability Interactive Rows */}
            <div className="capabilities-container">
              <div className="capability-header-bar">
                <h4>CORE CAPABILITY AREAS</h4>
              </div>

              <div className="capability-matrix">
                {/* Column 1 */}
                <div className="capability-column">
                  <span className="group-label">OPERATIONS & AUTOMATION</span>
                  <div className="pill">CRM Systems & Workflow Automation</div>
                  <div className="pill">Revenue Operations Support</div>
                  <div className="pill">Medical VA (HIPAA–Compliant Operations)</div>
                </div>

                {/* Column 2 */}
                <div className="capability-column">
                  <span className="group-label">SALES & GROWTH</span>
                  <div className="pill">High-Ticket Sales & Booking Support</div>
                  <div className="pill">E-commerce Virtual Assistance</div>
                  <div className="pill">Social Media Monetization Support</div>
                </div>
              </div>

              {/* Retention Row below */}
              <div className="capability-matrix single-row-margin">
                <div className="capability-column full-width-column">
                  <span className="group-label">RETENTION & SUPPORT</span>
                  <div className="pill-row">
                    <div className="pill">Customer Success & Client Retention</div>
                    <div className="pill">Omnichannel Customer Support</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
