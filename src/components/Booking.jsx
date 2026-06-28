import { useEffect } from 'react'

/**
 * Booking section with Calendly inline embed.
 * The Calendly widget script is loaded once on mount.
 */
export default function Booking() {
  useEffect(() => {
    // Load Calendly widget script if not already present
    if (!document.querySelector('script[src*="calendly"]')) {
      const s = document.createElement('script')
      s.src = 'https://assets.calendly.com/assets/external/widget.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return (
    <section id="book" className="wrap">
      <div className="book-in">
        {/* Left column — info */}
        <div className="bl">
          <div className="lbl rv">Let's Talk</div>
          <h2 className="rv d1">
            Book Your Free<br />Discovery Call
          </h2>
          <p className="rv d2">
            30 minutes. No commitment, no sales pressure. Just an honest conversation
            about where your business is and exactly how I can help you grow faster.
          </p>

          <ul className="bperks rv d2">
            <li>We'll map your biggest operational bottlenecks together</li>
            <li>I'll share exactly how I'd approach your specific situation</li>
            <li>You'll leave with actionable insights — hired or not</li>
            <li>Zero obligation. 100% value.</li>
          </ul>

          <div className="bcon rv d3">
            <a href="tel:+639812011240" data-track="contact_phone">
              <span className="bcon-icon">📞</span> +63 981 201 1240
            </a>
            <a href="mailto:imyours10202022@gmail.com" data-track="contact_email">
              <span className="bcon-icon">✉️</span> imyours10202022@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/john-paul-pancho-837a66286"
              target="_blank"
              rel="noopener noreferrer"
              data-track="contact_linkedin"
            >
              <span className="bcon-icon">💼</span> LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right column — Calendly widget */}
        <div
          className="calendly-inline-widget rv d1"
          data-url="https://calendly.com/imyours10202022/30min?background_color=111111&text_color=F9F7F2&primary_color=F0C93B"
          style={{ minWidth: '320px', height: '700px', borderRadius: '4px', overflow: 'hidden' }}
        />
      </div>
    </section>
  )
}
