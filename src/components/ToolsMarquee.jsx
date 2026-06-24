import React from 'react'
import { 
  FaSlack, FaDiscord, FaWhatsapp, FaTelegramPlane, 
  FaTiktok, FaGithub, FaCalendarAlt, FaEnvelope,
  FaDatabase, FaNotesMedical, FaNetworkWired
} from 'react-icons/fa'
import { 
  SiClickup, SiGoogleworkspace, SiZoom, SiVercel, 
  SiMake, SiMeta, SiShieldon, SiSquarespace
} from 'react-icons/si'

const TOOLS = [
  { name: 'ClickUp', icon: <SiClickup /> },
  { name: 'CRM Systems', icon: <SiMeta /> },
  { name: 'Google Workspace', icon: <SiGoogleworkspace /> },
  { name: 'Zoom', icon: <SiZoom /> },
  { name: 'Slack', icon: <FaSlack /> },
  { name: 'Discord', icon: <FaDiscord /> },
  { name: 'WhatsApp', icon: <FaWhatsapp /> },
  { name: 'Telegram', icon: <FaTelegramPlane /> },
  { name: 'EHR Systems', icon: <FaDatabase /> },
  { name: 'EMR Platforms', icon: <FaNotesMedical /> },
  { name: 'TheraWeb Office', icon: <FaNetworkWired /> },
  { name: 'Make.com', icon: <SiMake /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Squarespace', icon: <SiSquarespace /> },
  { name: 'Facebook Live', icon: <SiMeta /> },
  { name: 'TikTok', icon: <FaTiktok /> },
  { name: 'Email Platforms', icon: <FaEnvelope /> },
  { name: 'Calendar & Booking Tools', icon: <FaCalendarAlt /> },
  { name: 'HIPAA-Compliant Systems', icon: <SiShieldon /> },
  { name: 'Social Media Platforms', icon: <FaTiktok /> }
]

export default function ToolsMarquee() {
  // Duplicated arrays to ensure a seamless, non-breaking marquee scroll loop
  const allTools = [...TOOLS, ...TOOLS, ...TOOLS]

  return (
    <div className="tools wrap 3d-perspective-container">
      <div className="tools-in">
        <div className="tlbl rv">Tech Stack &amp; Tools I Work With Daily</div>
      </div>
      
      {/* 3D Angled Viewport Wrapper */}
      <div className="marquee-3d-stage">
        <div className="mqwrap-3d">
          <div className="mqtrack-3d">
            {allTools.map((tool, i) => (
              <span key={i} className="mpill-3d">
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Establishes the 3D cinematic depth field */
        .marquee-3d-stage {
          perspective: 1000px;
          overflow: hidden;
          padding: 3rem 0;
          width: 100%;
        }

        /* Tilts and rotates the marquee ribbon safely in 3D space */
        .mqwrap-3d {
          transform: rotateX(20deg) rotateY(-10deg) rotateZ(-1deg);
          transform-style: preserve-3d;
          width: 100%;
          overflow: hidden;
          background: rgba(11, 11, 11, 0.5);
          border-y: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem 0;
        }

        /* Smooth continuous horizontal animation loop */
        .mqtrack-3d {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: marquee3DScroll 35s linear infinite;
        }

        /* Premium pill styles containing both logo and text */
        .mpill-3d {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(20, 20, 20, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 500;
          font-size: 0.95rem;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          transform: translateZ(10px); /* Pushes pills slightly forward in 3D space */
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .mpill-3d:hover {
          border-color: var(--y);
          transform: translateZ(25px) scale(1.05); /* Interactive popout effect */
        }

        /* Color accentuation for icon fills */
        .tool-icon {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          color: var(--y, #eaaa08);
        }

        @keyframes marquee3DScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            /* Perfectly offsets exactly one-third of the loop length seamlessly */
            transform: translate3d(-33.3333%, 0, 0);
          }
        }

        /* Flattens clean for mobile users to prevent clipping issues */
        @media (max-width: 768px) {
          .mqwrap-3d {
            transform: none !important;
          }
          .marquee-3d-stage {
            perspective: none !important;
            padding: 1.5rem 0;
          }
        }
      `}</style>
    </div>
  )
}
