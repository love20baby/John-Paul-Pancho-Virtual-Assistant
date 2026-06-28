const REVIEWS = [
  {
    quote: '"JP closed more in 2 weeks than most closers do in a month. His conversion rate is unreal — 75% on inbound, consistent, every single month. He\'s not a VA, he\'s a revenue machine."',
    name: 'Michael R.',
    role: 'Director of Sales, HotelPlanner',
    delay: '',
  },
  {
    quote: '"Having someone manage 1,000+ member interactions monthly while staying fully HIPAA compliant is rare. John Paul brought that, plus an 18% improvement in our retention numbers. Exceptional."',
    name: 'Dr. Amanda L.',
    role: 'Healthcare Operations, Optum',
    delay: 'd1',
  },
  {
    quote: '"He built our entire online gown business from scratch and scaled it to 200+ monthly orders. The Facebook Live strategy alone grew our quarterly revenue by 30%. Incredibly driven and creative."',
    name: 'Grace T.',
    role: 'E-Commerce Partner',
    delay: 'd2',
  },
]

export default function Testimonials() {
  return (
    <section id="testi" className="wrap">
      <div className="th">
        <div className="lbl rv">Client Feedback</div>
        <h2 className="rv d1">
          Results Clients<br />Can't Stop Talking About
        </h2>
      </div>

      <div className="tgrid">
        {REVIEWS.map(r => (
          <div key={r.name} className={`tc rv ${r.delay}`}>
            <div className="stars">★★★★★</div>
            <p className="tc-txt">{r.quote}</p>
            <div className="tc-who">
              <strong>{r.name}</strong>
              <span>{r.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="tcta">
        <p>Ready to get results like these?</p>
        <a href="#book" className="btn-y" data-track="testi_book">
          Book Your Free Discovery Call →
        </a>
      </div>
    </section>
  )
}
