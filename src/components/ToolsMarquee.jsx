import React from 'react'

const TOOLS = [
  { name: 'TheraOffice' }, { name: 'Acuity Scheduling' }, { name: 'Quo VoIP' }, { name: 'Stax Payments' },
  { name: 'Slice Payments' }, { name: 'Google Workspace' }, { name: 'Microsoft 365' }, { name: 'Zoom' },
  { name: 'Slack' }, { name: 'Google Docs' }, { name: 'Google Sheets' }, { name: 'Excel' },
  { name: 'Shopify' }, { name: 'Gorgias' }, { name: 'Facebook Business Suite' }, { name: 'TikTok Seller Center' },
  { name: 'TikTok Live' }, { name: 'Meta Business Suite' }, { name: 'Salesforce' }, { name: 'HubSpot' },
  { name: 'ClickUp' }, { name: 'Practice Better' }, { name: 'Zendesk' }, { name: 'Freshdesk' },
  { name: 'Google Meet' }, { name: 'Microsoft Teams' }, { name: 'WhatsApp' }, { name: 'Telegram' },
  { name: 'Discord' }, { name: 'Trello' }, { name: 'Asana' }, { name: 'Monday.com' },
  { name: 'Notion' }, { name: 'Loom' }, { name: 'Scribe' }, { name: 'Make.com' },
  { name: 'Zapier' }, { name: 'ChatGPT' }, { name: 'Claude' }, { name: 'Gemini' },
  { name: 'Avaya' }, { name: 'Cisco Finesse' }, { name: 'Salesforce Service Cloud' }
]

const REVIEWS = [
  { author: 'David Sellers', rating: '★★★★★', text: 'Had a great Customer Service Experience with JOHN, there was a small issue with my order and he RESOLVED it, not the next business day but within minutes... ON A WEEKEND! Customer Service was so good I signed up Monthly.' },
  { author: 'Tim Beglin', rating: 'Patient Feedback', text: 'Incredibly professional, empathetic, and efficient with handling scheduling.' },
  { author: 'Dr. Ryan', rating: 'Patient Operations', text: 'Getting good feedback on you from my patients who have spoken to you on the phone.' },
  { author: 'Jeff Jean-Philippe', rating: 'Patient Feedback', text: 'Always responsive and highly organized. Communication is clear and timely.' },
  { author: 'Uche Olomina', rating: '★★★★★', text: 'Excellent system optimization and execution.' },
  { author: 'Maegan Welsh', rating: 'Patient Feedback', text: 'Exceptional support. Handled my inquiries with absolute care and zero stress.' },
  { author: 'Robert Bailey', rating: '★★★★★', text: 'Superb workflow architecture. Handled our high-volume support queues seamlessly.' },
  { author: 'Beth Macpherson', rating: 'Patient Feedback', text: 'Reliable, thorough, and outstanding service. The tracking support is top-tier.' }
]

export default function ToolsMarquee() {
  const toolTrack = [...TOOLS, ...TOOLS, ...TOOLS]
  const reviewTrack = [...REVIEWS, ...REVIEWS, ...REVIEWS]

  return (
    <div className="tools wrap">
      {/* THE MANDATORY HEADER */}
      <div className="tools-in" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="custom-marquee-header">Tech Stack & Operational Performance</h2>
      </div>
      
      <div className="marquee-stage-flat">
        {/* TOOLS: LEFT TO RIGHT */}
        <div className="mqwrap-flat">
          <div className="mqtrack-flat to-right">
            {toolTrack.map((tool, i) => (
              <span key={`tool-${i}`} className="mpill-flat tool-pill">
                <span className="tool-name">{tool.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* FEEDBACK: RIGHT TO LEFT */}
        <div className="mqwrap-flat row-bottom">
          <div className="mqtrack-flat to-left">
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
        .custom-marquee-header { color: #eaaa08 !important; font-size: 1.25rem !important; font-weight: 700 !important; letter-spacing: 0.15em !important; text-transform: uppercase; margin: 0; }
        .marquee-stage-flat { overflow: hidden; padding: 1rem 0; width: 100%; display: flex; flex-direction: column; gap: 1.5rem; }
        .mqwrap-flat { width: 100%; overflow: hidden; background: rgba(11, 11, 11, 0.4); padding: 0.75rem 0; border-top: 1px solid rgba(255, 255, 255, 0.03); border-bottom: 1px solid rgba(255, 255, 255, 0.03); }
        .mqtrack-flat { display: flex; width: max-content; gap: 1.5rem; align-items: center; }
        .to-left { animation: scrollLeft 60s linear infinite; }
        .to-right { animation: scrollRight 60s linear infinite; }
        .mqtrack-flat:hover { animation-play-state: paused; }
        .mpill-flat { display: inline-flex; align-items: center; white-space: nowrap; transition: all 0.3s ease; }
        .tool-pill { background: rgba(20, 20, 20, 0.85); border: 1px solid rgba(255, 255, 255, 0.06); color: #ffffff; padding: 0.5rem 1rem; border-radius: 50px; font-weight: 500; font-size: 0.85rem; }
        .tool-pill:hover { border-color: #eaaa08; background: rgba(28, 28, 28, 0.95); transform: translateY(-2px); box-shadow: 0 0 15px rgba(234, 170, 8, 0.4); }
        .csat-pill { background: rgba(234, 170, 8, 0.07); border: 1px solid rgba(234, 170, 8, 0.22); padding: 0.8rem 1.5rem; border-radius: 8px; font-size: 0.9rem; color: #f3f4f6; font-weight: 500; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25); }
        .csat-pill:hover { border-color: #eaaa08; background: rgba(234, 170, 8, 0.15); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(234, 170, 8, 0.3); }
        .csat-stars { color: #eaaa08; margin-right: 0.5rem; }
        .csat-author { color: #eaaa08; margin-left: 0.5rem; font-weight: 700; }
        @keyframes scrollLeft { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-33.333%, 0, 0); } }
        @keyframes scrollRight { 0% { transform: translate3d(-33.333%, 0, 0); } 100% { transform: translate3d(0, 0, 0); } }
      `}</style>
    </div>
  )
}
