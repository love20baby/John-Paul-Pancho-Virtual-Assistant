import React from 'react'

const TOOLS = [
  { name: 'ClickUp', svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L2 10.5h4.5v7h11v-7H22L12 2zm3.5 13.5h-7v-5h7v5z"/></svg> },
  { name: 'CRM Systems', svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg> },
  { name: 'Google Workspace', svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
  { name: 'Zoom', svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21 6.5L17 10V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-3l4 3.5c.42.36 1 .07 1-.49v-11c0-.56-.58-.85-1-.49z"/></svg> },
  { name: 'Slack', svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042z"/></svg> },
  { name: 'HIPAA-Compliant Systems', svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg> },
  { name: 'Make.com', svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm4.25 11h-3.5v3.5h-1.5V13h-3.5v-1.5h3.5v-3.5h1.5v3.5h3.5V13z"/></svg> },
  { name: 'WhatsApp', svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> }
]

const REVIEWS = [
  { author: 'David Sellers', rating: '★★★★★', text: 'Resolved within minutes... ON A WEEKEND! Customer service was so good I signed up monthly' },
  { author: 'Dr. Ryan', rating: 'Patient Operations', text: 'Getting good feedback on you from my patients who have spoken to you on the phone' },
  { author: 'Uche Olomina', rating: '★★★★★', text: 'Excellent system optimization and execution' }
]

export default function ToolsMarquee() {
  const toolTrack = [...TOOLS, ...TOOLS, ...TOOLS]
  const reviewTrack = [...REVIEWS, ...REVIEWS, ...REVIEWS]

  return (
    <div className="tools wrap">
      <div className="tools-in">
        <div className="tlbl rv">Tech Stack &amp; Operational Performance</div>
      </div>
      
      <div className="marquee-stage-flat">
        {/* TRACK 1: LEFT RUNNING TECH STACK */}
        <div className="mqwrap-flat">
          <div className="mqtrack-flat to-left">
            {toolTrack.map((tool, i) => (
              <span key={`tool-${i}`} className="mpill-flat tool-pill">
                <span className="tool-icon">{tool.svg}</span>
                <span className="tool-name">{tool.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* TRACK 2: RIGHT RUNNING LIVE METRICS */}
        <div className="mqwrap-flat row-bottom">
          <div className="mqtrack-flat to-right">
            {reviewTrack.map((rev, i) => (
              <span key={`rev-${i}`} className="mpill-flat csat-pill">
                <span className="csat-stars">{rev.rating}</span>
                <span className="csat-text">"{rev.text}"</span>
                <span className="csat-author">— {rev.author}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .marquee-stage-flat {
          overflow: hidden;
          padding: 2rem 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mqwrap-flat {
          width: 100%;
          overflow: hidden;
          background: rgba(11, 11, 11, 0.4);
          padding: 0.75rem 0;
          border-y: 1px solid rgba(255, 255, 255, 0.03);
        }

        .mqtrack-flat {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          align-items: center;
        }

        /* Continuous Animations */
        .to-left {
          animation: scrollLeft 38s linear infinite;
        }

        .to-right {
          animation: scrollRight 42s linear infinite;
        }

        /* Smooth slow down or pause on user focus */
        .mqtrack-flat:hover {
          animation-play-state: paused;
        }

        /* Pill Aesthetics */
        .mpill-flat {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .tool-pill {
          gap: 0.65rem;
          background: rgba(20, 20, 20, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #ffffff;
          padding: 0.55rem 1.2rem;
          border-radius: 50px;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .tool-pill:hover {
          border-color: #eaaa08;
          background: rgba(28, 28, 28, 0.95);
        }

        .csat-pill {
          gap: 0.6rem;
          background: rgba(234, 170, 8, 0.05);
          border: 1px solid rgba(234, 170, 8, 0.15);
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          font-size: 0.85rem;
          color: #e5e7eb;
        }

        .csat-pill:hover {
          border-color: #eaaa08;
          background: rgba(234, 170, 8, 0.1);
        }

        .csat-stars {
          color: #eaaa08;
          font-weight: 600;
        }

        .csat-text {
          font-style: italic;
        }

        .csat-author {
          font-weight: 600;
          color: #eaaa08;
        }

        .tool-icon {
          display: flex;
          color: #eaaa08;
        }

        @keyframes scrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }

        @keyframes scrollRight {
          0% { transform: translate3d(-33.3333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  )
}
