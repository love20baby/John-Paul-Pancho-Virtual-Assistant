import React from 'react'

const SERVICES = [
  {
    num: '01',
    title: 'MEDICAL VIRTUAL ASSISTANT',
    desc: 'HIPAA-compliant admin support for healthcare practices: patient scheduling, insurance follow-ups, records management, and multi-channel member support.',
    bullets: [
      'Virtual Front Desk & Practice Administration',
      'Patient Scheduling & Calendar Optimization',
      'Secure Electronic Health Records (EHR) Management',
    ],
    delay: '',
  },
  {
    num: '02',
    title: 'CLIENT SUCCESS & REVENUE OPS',
    desc: 'High-ticket sales closing, CRM optimization, pipeline reporting, and retention strategy — I align your operations to grow revenue and retain clients at scale.',
    bullets: [
      'End-to-End Sales Pipeline & Lifecycle Management',
      'Automated CRM Workflows & Revenue Tracking',
      'Retention Strategy & Client Churn Mitigation',
    ],
    delay: 'd1',
  },
  {
    num: '03',
    title: 'ECOMMERCE VA',
    desc: 'From Facebook Live selling to TikTok marketing — I manage end-to-end e-commerce operations including order fulfillment, CRM, logistics, and customer engagement.',
    bullets: [
      'Multi-Channel Store & Inventory Logistics',
      'Live-Selling Strategy & Video Commerce Operations',
      'Order Fulfillment & Customer Retention Campaigns',
    ],
    delay: 'd2',
  },
  {
    num: '04',
    title: 'CUSTOMER SERVICE VA',
    desc: 'Omnichannel support via phone, email, and chat. I manage high-volume interactions with a human touch and data-backed strategies that build loyalty.',
    bullets: [
      'High-Volume Tier-1 & Tier-2 Support Queue Management',
      'Helpdesk Architecture & CRM-Backed Tracking',
      'Rapid First-Contact Resolution (FCR) Systems',
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
            {/* APPLIED EXACT BRAND GOLD COLOR TO THE TITLES HERE */}
            <h3 style={{ color: 'var(--y)' }}>{s.title}</h3>
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
