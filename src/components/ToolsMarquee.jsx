// Duplicated so the seamless loop works (animation goes from 0 to -50%)
const TOOLS = [
  'ClickUp', 'CRM Systems', 'Google Workspace', 'Zoom', 'Slack',
  'Discord', 'WhatsApp', 'Telegram', 'Facebook Live', 'TikTok',
  'Email Platforms', 'Calendar & Booking Tools', 'HIPAA-Compliant Systems',
  'Social Media Platforms',
]

export default function ToolsMarquee() {
  const allTools = [...TOOLS, ...TOOLS] // double for seamless loop

  return (
    <div className="tools wrap">
      <div className="tools-in">
        <div className="tlbl rv">Tech Stack &amp; Tools I Work With Daily</div>
      </div>
      <div className="mqwrap">
        <div className="mqtrack">
          {allTools.map((tool, i) => (
            <span key={i} className="mpill">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
