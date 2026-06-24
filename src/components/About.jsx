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
          <h2 className="rv d1">Results-Driven. Revenue-Focused. Remote-Ready.</h2>

          <p className="rv d2">
            I'm John Paul Pancho — a Senior Virtual Assistant and Remote Operations
            Specialist based in Mabalacat City, Pampanga, Philippines, with 12+ years
            of experience supporting U.S.-based clients across healthcare, finance,
            telecom, e-commerce, and hospitality.
          </p>
          <p className="rv d2">
            From generating{' '}
            <strong style={{ color: 'var(--y)' }}>
              $121,616.93 in prepaid revenue within 2 weeks
            </strong>{' '}
            at HotelPlanner to managing 1,000+ monthly healthcare interactions at
            UnitedHealthcare/Optum with strict HIPAA compliance — I combine strategy,
            automation, and data-driven execution to deliver measurable impact.
          </p>
          <p className="rv d2">
            I don't just complete tasks. I build systems, optimize operations, and
            treat every client's business like it's my own.
          </p>

          <div className="atags rv d3">
            {[
              'Medical VA (HIPAA)', 'High-Ticket Sales', 'Customer Success',
              'Revenue Operations', 'CRM Automation', 'Social Media Monetization',
              'Ecommerce VA', 'Omnichannel Support',
            ].map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
