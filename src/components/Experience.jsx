const JOBS = [
  {
    company: 'HOTEL PLANNER',
    role: 'Virtual High-Ticket Sales Closer & Booking Specialist',
    date: 'Sep 2023 – Oct 2025 · Remote, Miami FL, USA',
    kpis: [
      { num: '$121K', label: 'prepaid revenue in 2 weeks' },
      { num: '75%',   label: 'inbound conversion rate' },
      { num: '30%',   label: 'repeat booking growth' },
    ],
    desc: 'Closed 500+ monthly hotel bookings with 99.8% billing accuracy. Consistently exceeded sales targets while improving client lifecycle management through CRM automation and strategic follow-ups.',
    delay: '',
  },
  {
    company: 'UNITEDHEALTHCARE · OPTUM',
    role: 'Medical Virtual Assistant · Healthcare Support Specialist',
    date: 'Oct 2016 – Feb 2020 · Quezon City, Philippines',
    kpis: [
      { num: '1,000+', label: 'monthly member interactions' },
      { num: '18%',    label: 'YoY retention increase' },
      { num: '100%',   label: 'HIPAA compliance' },
    ],
    desc: 'Delivered multi-channel healthcare support (phone, chat, email) with strict HIPAA compliance. Resolved claims, benefits, and provider coordination inquiries, improving turnaround time and accuracy.',
    delay: 'd1',
  },
  {
    company: 'HAKUNA MATATA GOWNS',
    role: 'Founder · Virtual Operations & Social Media Manager',
    date: 'Dec 2016 – Present · Philippines',
    kpis: [
      { num: '200+',   label: 'monthly orders fulfilled' },
      { num: '25–30%', label: 'quarterly revenue growth' },
      { num: 'Live',   label: 'Facebook & TikTok selling' },
    ],
    desc: 'Built and scaled a profitable online gown business from zero, managing end-to-end operations: CRM automation, order fulfillment, logistics, digital marketing, and customer engagement.',
    delay: 'd2',
  },
]

export default function Experience() {
  return (
    <section id="exp" className="wrap">
      <div className="exp-in">
        <div className="exp-hdr">
          <div className="lbl rv">Career Highlights</div>
          <h2 className="rv d1">12+ Years of Measurable Impact</h2>
        </div>

        <div className="exp-grid">
          {JOBS.map(job => (
            <div key={job.company} className={`ec rv ${job.delay}`}>
              <div className="ec-co">{job.company}</div>
              <div className="ec-role">{job.role}</div>
              <div className="ec-date">{job.date}</div>
              <div className="ec-kpi">
                {job.kpis.map(k => (
                  <div key={k.label} className="kpi">
                    <span className="kpi-num">{k.num}</span>
                    <span>{k.label}</span>
                  </div>
                ))}
              </div>
              <p>{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
