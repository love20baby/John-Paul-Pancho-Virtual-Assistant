export default function About() {
  return (
    <section id="about" className="wrap">
      <div className="about-in">
        <div className="aimg rv">
          <img src="/images/laptop1.png" alt="John Paul Pancho working" />
          <div className="aaccent" />
        </div>

        <div className="atxt">
          <div className="lbl rv">About Me</div>
          <h2 className="rv d1">OPERATIONAL EXECUTION. REVENUE IMPACT. SYSTEM OPTIMIZATION.</h2>

          <p className="rv d2">
  Many businesses Lose Revenue not because of lack of demand, but due to Operational Bottlenecks—Slow Customer Response Times, Inefficient Workflows, Fragmented Systems, and Inconsistent Execution Across Teams.
</p>

<p className="rv d2">
  A 12+ year Remote Operations Specialist supporting U.S.-based Healthcare, Finance, Telecom, E-commerce, and Hospitality Clients through Structured Execution, Customer Experience Optimization, and Revenue-Support Workflows.
</p>

<p className="rv d2">
  Experience includes generating{" "}
  <strong style={{ color: 'var(--y)' }}>
    $121,616.93 in Prepaid Revenue within 2 Weeks at HotelPlanner
  </strong>{" "}
  and Managing 1,000+ Monthly Healthcare Interactions at UnitedHealthcare/Optum under strict HIPAA compliance in High-Volume Environments.
</p>

<p className="rv d2">
  Focused on Building Systems that Improve Efficiency, Strengthen Customer Experience, and support Consistent Revenue Performance—rather than simply completing tasks.
</p>

          <div className="atags rv d3">

  <div className="cap-label">
    Core Capability Areas
  </div>

  {[
    'Medical VA (HIPAA-Compliant Operations)',
    'High-Ticket Sales & Booking Support',
    'E-commerce Virtual Assistance',
    'CRM Systems & Workflow Automation',
    'Customer Success & Client Retention',
    'Revenue Operations Support',
    'Social Media Monetization Support',
    'Omnichannel Customer Support',
  ].map(tag => <span key={tag}>{tag}</span>)}

</div>
        </div>
      </div>
    </section>
  )
}
