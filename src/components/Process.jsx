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

        <div className="steps">
          {STEPS.map((s, index) => (
            <div key={s.num} className={`step rv ${s.delay}`}>
              
              {/* FIXED HOOK: Container explicitly handles side-by-side layout for the number and line */}
              <div className="num-line-row">
                <div className="step-num">{s.num}</div>
                
                {/* Draws the line inline between columns 1-2 and 2-3 only */}
                {index < STEPS.length - 1 && (
                  <div className="step-connect-line" />
                )}
              </div>

              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 769px) {
          /* Enforces side-by-side columns at the top level */
          .steps {
            display: flex !important;
            align-items: flex-start !important;
            gap: 2rem !important;
          }
          
          .step {
            flex: 1 !important;
          }

          /* Aligns number and line perfectly centered horizontally */
          .num-line-row {
            display: flex !important;
            align-items: center !important;
            position: relative;
            width: 100%;
            margin-bottom: 1.5rem;
          }

          /* The line dynamically takes up the remaining horizontal space in the column card */
          .step-connect-line {
            flex-grow: 1 !important;
            height: 1px !important;
            background: var(--y) !important;
            opacity: 0.25 !important;
            margin-left: 1.5rem !important;
            margin-right: -1.5rem !important; /* Safely reaches out across the column gap */
          }
        }

        /* Destroys the lines completely on mobile layouts so columns safely stack vertically */
        @media (max-width: 768px) {
          .step-connect-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
