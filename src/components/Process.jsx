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

        <div className="steps" style={{ position: 'relative' }}>
          {STEPS.map((s, index) => (
            <div 
              key={s.num} 
              className={`step rv ${s.delay}`} 
              style={{ position: 'relative' }}
            >
              {/* Clean structure returned: No layout-breaking wrapper */}
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              {/* Absolute line placement: Bridges the gap perfectly without squeezing text */}
              {index < STEPS.length - 1 && (
                <div 
                  className="step-line desktop-only-line" 
                  style={{
                    position: 'absolute',
                    top: '2.5rem', /* Centers vertically with your 01/02 numbers */
                    left: '6rem',   /* Starts right after the number */
                    width: 'calc(100% - 4rem)', /* Reaches over to the next column entry */
                    height: '1px',
                    background: 'var(--y)',
                    opacity: 0.3,
                    zIndex: 2
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Keeps lines clean on desktop, hides them on mobile so columns stack beautifully */}
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
