const STEPS = [
  {
    num: '01',
    title: 'DISCOVERY CALL',
    desc: 'A 30-minute deep dive to map your workflow bottlenecks and goals. No fluff, no aggressive sales pitch—just a transparent, actionable operational strategy.',
    delay: '',
  },
  {
    num: '02',
    title: 'ONBOARDING & SETUP',
    desc: 'I seamlessly integrate into your current tech stack, absorb your brand voice, and document your workflows. Fully operational and autonomous within 48 hours.',
    delay: 'd1',
  },
  {
    num: '03',
    title: 'EXECUTION & RESULTS',
    desc: 'I own the execution while you focus on scaling. Expect data-backed weekly reporting, absolute metric accountability, and proactive system optimization.',
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

        {/* Using a standard row layout that keeps all columns uniform */}
        <div className="steps" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {STEPS.map((s, index) => (
            <div 
              key={s.num} 
              className={`step rv ${s.delay}`} 
              style={{ flex: '1', minWidth: '250px', position: 'relative' }}
            >
              {/* This container locks the number and the line onto the exact same vertical center line */}
              <div style={{ display: 'flex', alignItems: 'center', height: '5rem', marginBottom: '1rem' }}>
                <div className="step-num" style={{ margin: 0, paddingRight: '1rem' }}>{s.num}</div>
                
                {/* The horizontal line is drawn dynamically only between 01-02 and 02-03 */}
                {index < STEPS.length - 1 && (
                  <div 
                    className="desktop-only-line"
                    style={{
                      flexGrow: 1,
                      height: '1px',
                      background: 'var(--y)',
                      opacity: 0.3,
                      alignSelf: 'center'
                    }}
                  />
                )}
              </div>
              
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Standard CSS block to hide the horizontal lines when wrapped on mobile screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-only-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
