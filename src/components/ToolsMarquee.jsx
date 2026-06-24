import React from 'react'

const TOOLS = [
  { name: 'ClickUp', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2L2 10.5h4.5v7h11v-7H22L12 2zm3.5 13.5h-7v-5h7v5z"/></svg> },
  { name: 'CRM Systems', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg> },
  { name: 'Google Workspace', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
  { name: 'Zoom', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 6.5L17 10V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h13c.55 0 '1-.45 1-1v-3l4 3.5c.42.36 1 .07 1-.49v-11c0-.56-.58-.85-1-.49z"/></svg> },
  { name: 'Slack', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042z"/></svg> },
  { name: 'Discord', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg> },
  { name: 'WhatsApp', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> },
  { name: 'Telegram', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.944 0C5.347 0 0 5.347 0 11.944c0 6.596 5.347 11.944 11.944 11.944 6.596 0 11.944-5.348 11.944-11.944C23.888 5.347 18.54 0 11.944 0zm5.811 8.223l-1.956 9.22c-.147.66-.54 1.22-.109 1.34a.97.97 0 0 1-.36-.08l-2.985-2.201-1.44 1.386c-.159.159-.293.293-.601.293l.213-3.032 5.518-4.98c.24-.213-.053-.333-.373-.12l-6.822 4.293-2.94-.92c-.64-.2-.653-.64.133-.947l11.479-4.426c.533-.187.999.133.743.94z"/></svg> },
  { name: 'EHR Systems', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/></svg> },
  { name: 'EMR Platforms', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H10v-2h4v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> },
  { name: 'TheraWeb Office', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> },
  { name: 'Make.com', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm4.25 11h-3.5v3.5h-1.5V13h-3.5v-1.5h3.5v-3.5h1.5v3.5h3.5V13z"/></svg> },
  { name: 'GitHub', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
  { name: 'Vercel', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M24 22.525H0L12 1.475z"/></svg> },
  { name: 'Squarespace', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.1 5.9H5.9v12.2h12.2V5.9zM12 16.2c-2.3 0-4.2-1.9-4.2-4.2S9.7 7.8 12 7.8s4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/></svg> },
  { name: 'Facebook Live', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg> },
  { name: 'TikTok', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.21 1.13 1.34 2.73 2.12 4.44 2.28v3.83c-1.39-.06-2.77-.51-3.92-1.31-.22-.16-.43-.33-.63-.51v5.71c.03 2.02-.6 4.04-1.81 5.65-1.63 2.13-4.22 3.32-6.88 3.12-2.85-.2-5.41-2.04-6.43-4.71-1.31-3.34-.14-7.31 2.87-9.33 1.64-1.12 3.65-1.54 5.59-1.2v3.74c-1.02-.32-2.14-.15-3.04.48-1.29.89-1.73 2.69-.97 4.1.72 1.37 2.37 2.11 3.88 1.76 1.13-.25 2.01-1.22 2.18-2.37.04-.3.04-.6.04-.9V.02z"/></svg> },
  { name: 'Email Platforms', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
  { name: 'Calendar & Booking Tools', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg> },
  { name: 'HIPAA-Compliant Systems', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg> },
  { name: 'Social Media Platforms', svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> }
]

export default function ToolsMarquee() {
  const allTools = [...TOOLS, ...TOOLS, ...TOOLS]

  return (
    <div className="tools wrap">
      <div className="tools-in">
        <div className="tlbl rv">Tech Stack &amp; Tools I Work With Daily</div>
      </div>
      
      <div className="marquee-3d-stage">
        <div className="mqwrap-3d">
          <div className="mqtrack-3d">
            {allTools.map((tool, i) => (
              <span key={i} className="mpill-3d">
                <span className="tool-icon">{tool.svg}</span>
                <span className="tool-name">{tool.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .marquee-3d-stage {
          perspective: 1000px;
          overflow: hidden;
          padding: 3rem 0;
          width: 100%;
        }

        .mqwrap-3d {
          transform: rotateX(20deg) rotateY(-10deg) rotateZ(-1deg);
          transform-style: preserve-3d;
          width: 100%;
          overflow: hidden;
          background: rgba(11, 11, 11, 0.5);
          padding: 1rem 0;
        }

        .mqtrack-3d {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: marquee3DScroll 35s linear infinite;
        }

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
          transform: translateZ(10px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .mpill-3d:hover {
          border-color: var(--y);
          transform: translateZ(25px) scale(1.05);
        }

        .tool-icon {
          display: flex;
          align-items: center;
          width: 1.25rem;
          height: 1.25rem;
          color: var(--y, #eaaa08);
        }

        @keyframes marquee3DScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.3333%, 0, 0);
          }
        }

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
