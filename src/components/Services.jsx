const SERVICES = [
  {
    num: '01',
    title: 'CUSTOMER SERVICE VA',
    desc: 'Omnichannel support via phone, email, and chat. I manage high-volume interactions with a human touch and data-backed strategies that build loyalty.',
    bullets: [
      'High-volume issue resolution (95%+ FCR)',
      'CRM-backed follow-up systems',
      'Reduced escalations & churn',
    ],
    delay: '',
  },
  {
    num: '02',
    title: 'MEDICAL VIRTUAL ASSISTANT',
    desc: 'HIPAA-compliant admin support for healthcare practices: patient scheduling, insurance follow-ups, records management, and multi-channel member support.',
    bullets: [
      'Strict HIPAA compliance',
      '18% YoY member retention improvement',
      '1,000+ monthly interactions managed',
    ],
    delay: 'd1',
  },
  {
    num: '03',
    title: 'ECOMMERCE VA',
    desc: 'From Facebook Live selling to TikTok marketing — I manage end-to-end e-commerce operations including order fulfillment, CRM, logistics, and customer engagement.',
    bullets: [
      '200+ monthly orders managed',
      '25–30% quarterly revenue growth',
      'Social media monetization mastery',
    ],
    delay: 'd2',
  },
  {
    num: '04',
    title: 'CLIENT SUCCESS & REVENUE OPS',
    desc: 'High-ticket sales closing, CRM optimization, pipeline reporting, and retention strategy — I align your operations to grow revenue and retain clients at scale.',
    bullets: [
      '75% inbound sales conversion rate',
      '$121K+ revenue generated in 2 weeks',
      '30% repeat booking growth',
    ],
    delay: 'd3',
  },
]

export default function Services() {
  return (
    <section id="services" className="wrap">
      <div className="shdr">
        <div>
          <div className="lbl rv">What I Do</div>
          <h2 className="rv d1">
            Four Ways I Grow<br />Your Business
          </h2>
        </div>
        <p className="shdr-r rv d2">
          Every service delivers a measurable outcome. No busywork — just execution
          that directly impacts your bottom line.
        </p>
      </div>

      <div className="sgrid">
        {SERVICES.map(s => (
          <div key={s.num} className={`sc rv ${s.delay}`}>
            <div className="scn">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul className="oc">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="scta rv">
        <a href="#book" className="btn-y" data-track="services_book">
          Find Out Which Service Fits You →
        </a>
      </div>
    </section>
  )
}
