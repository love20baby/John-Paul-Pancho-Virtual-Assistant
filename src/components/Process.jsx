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

        {/* The parent container now perfectly controls the horizontal timeline axis */}
        <div className="steps timeline-container">
          {STEPS.map((s) => (
            <div key={s.num} className={`step rv ${s.delay}`}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* This global style override forces absolute alignment across all screens */}
      <style jsx global>{`
        @media (min-width: 769px) {
          .timeline-container {
            display: flex !important;
            position: relative;
            align-items: flex-start; /* Keeps all columns level at the top */
          }
          
          .timeline-container .step {
            flex: 1;
            position: relative;
          }

          /* Single, continuous background line that runs perfectly straight behind the numbers */
          .timeline-container::before {
            content: '';
            position: absolute;
            top: 2.25rem; /* Exactly the vertical center of the numbers */
            left: 10%;
            width: 70%;
            height: 1px;
            background: var(--y);
            opacity: 0.25;
            z-index: 1;
          }
          
          /* Ensures the numbers sit cleanly on top of the line */
          .timeline-container .step-num {
            position: relative;
            z-index: 3;
            background: #0b0b0b; /* Matches your dark background to mask the line behind it */
            display: inline-block;
            padding-right: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .timeline-container::before {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
