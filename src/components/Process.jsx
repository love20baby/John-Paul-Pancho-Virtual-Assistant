const STEPS = [
  {
    num: '01',
    title: 'DISCOVERY CALL',
    desc: 'We spend 30 minutes mapping your operational bottlenecks and goals. No sales pitch — just honest strategy tailored to your business stage and industry.',
    delay: '',
  },
  {
    num: '02',
    title: 'ONBOARDING & SETUP',
    desc: 'I integrate into your existing tools, learn your brand voice, and map your workflows — fully operational and autonomous within 48 hours.',
    delay: 'd1',
  },
  {
    num: '03',
    title: 'EXECUTION & RESULTS',
    desc: 'I handle the work while you focus on growth. Weekly reports, clear KPIs, and a dedicated partner who scales right alongside your business.',
    delay: 'd2',
  },
]

export default function Process() {
  return (
    <section id="process" className="wrap">
      <div className="proc-in">
        <div className="proc-hdr">
          <div className="lbl rv">How It Works</div>
          <h2 className="rv d1">
            From Hello to<br />Handling It
          </h2>
        </div>

        <div className="steps">
          {STEPS.map(s => (
            <div key={s.num} className={`step rv ${s.delay}`}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
