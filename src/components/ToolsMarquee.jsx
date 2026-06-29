const TOOLS = [
  'TheraOffice', 'Acuity Scheduling', 'Quo VoIP', 'Stax Payments', 'Slice Payments',
  'Google Workspace', 'Microsoft 365', 'Zoom', 'Slack', 'Google Docs', 
  'Google Sheets', 'Excel', 'Shopify', 'Gorgias', 'Facebook Business Suite',
  'TikTok Seller Center', 'TikTok Live', 'Meta Business Suite', 'Salesforce', 
  'HubSpot', 'ClickUp', 'Practice Better', 'Zendesk', 'Freshdesk', 
  'Google Meet', 'Microsoft Teams', 'WhatsApp', 'Telegram', 'Discord', 
  'Trello', 'Asana', 'Monday.com', 'Notion', 'Loom', 'Scribe', 
  'Make.com', 'Zapier', 'ChatGPT', 'Claude', 'Gemini', 'Avaya', 
  'Cisco Finesse', 'Salesforce Service Cloud', 'HIPAA-Compliance Systems'
];

const FEEDBACK = [
  "★★★★★ 'Had a great Customer Service Experience with JOHN, there was a small issue with my order but he resolved it within minutes... ON A WEEKEND! Customer Service was so good I signed up monthly.' — David Sellers",
  "★★★★★ Patient Feedback: 'Incredibly professional, empathetic, and efficient with handling scheduling.' — Tim Beglin",
  "★★★★★ Patient Operations: 'Getting good feedback on you from my patients who have spoken to you on the phone.' — Dr. Ryan",
  "★★★★★ Patient Feedback: 'Always responsive and highly organized. Communication is clear and timely.' — Jeff Jean-Philippe",
  "★★★★★ 'Excellent system optimization and execution.' — Uche Olomina",
  "★★★★★ Patient Feedback: 'Exceptional support. Handled my inquiries with absolute care and zero stress.' — Maegan Welsh",
  "★★★★★ 'Superb workflow architecture. Handled our high-volume support queues seamlessly.' — Robert Bailey",
  "★★★★★ Patient Feedback: 'Reliable, thorough, and outstanding service. The tracking support is top-tier.' — Beth Macpherson"
];

const getIcon = (tool) => {
  const icons = {
    'TheraOffice': '🏥', 'Acuity Scheduling': '📅', 'Quo VoIP': '📞', 'Stax Payments': '💳', 'Slice Payments': '💰',
    'Google Workspace': '☁️', 'Microsoft 365': '🏢', 'Zoom': '📹', 'Slack': '💬', 'Google Docs': '📄',
    'Google Sheets': '📊', 'Excel': '🔢', 'Shopify': '🛍️', 'Gorgias': '🎧', 'Facebook Business Suite': '👤',
    'TikTok Seller Center': '🎵', 'TikTok Live': '⚡', 'Meta Business Suite': '📱', 'Salesforce': '☁️',
    'HubSpot': '🎯', 'ClickUp': '✅', 'Practice Better': '🩺', 'Zendesk': '🎫', 'Freshdesk': '📦',
    'Google Meet': '🎥', 'Microsoft Teams': '👥', 'WhatsApp': '💬', 'Telegram': '✈️', 'Discord': '🎮',
    'Trello': '📋', 'Asana': '🚀', 'Monday.com': '📈', 'Notion': '📝', 'Loom': '🎥', 'Scribe': '✍️',
    'Make.com': '⚙️', 'Zapier': '⚡', 'ChatGPT': '🤖', 'Claude': '🧠', 'Gemini': '✨', 'Avaya': '☎️',
    'Cisco Finesse': '🖥️', 'Salesforce Service Cloud': '☁️', 'HIPAA-Compliance Systems': '🔒'
  };
  return icons[tool] || '🔹';
};

export default function ToolsAndFeedback() {
  return (
    <section className="marquee-wrapper">
      {/* Title with Top/Bottom Borders */}
      <div className="section-header">
        <h2 className="section-title">TECH STACK & OPERATIONAL PERFORMANCE</h2>
      </div>
      
      {/* Tools Marquee (LTR) */}
      <div className="mqwrap">
        <div className="mqtrack-ltr">
          {[...TOOLS, ...TOOLS, ...TOOLS].map((tool, i) => (
            <span key={i} className="mpill">
              <span className="pill-icon">{getIcon(tool)}</span> {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Feedback Marquee (RTL) */}
      <div className="mqwrap mt-20">
        <div className="mqtrack-rtl">
          {[...FEEDBACK, ...FEEDBACK, ...FEEDBACK].map((f, i) => (
            <span key={i} className="fpill">{f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
