import { useEffect, useRef } from "react";

export default function StatsBar() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const counters = container.querySelectorAll(".cnt");

    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute("data-to"), 10);
      const duration = 1500; // Animation duration in milliseconds
      const frameRate = 1000 / 60; // 60 FPS
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = progress * (2 - progress);
        const currentValue = Math.round(easeOutQuad * target);

        if (frame >= totalFrames) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = currentValue.toLocaleString();
        }
      }, frameRate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => animateCounter(counter));
            observer.unobserve(entry.target); // Run animation once cleanly
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats wrap" ref={containerRef}>
      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-number">
            <span className="cnt" data-to="12">0</span>+
          </div>
          <div className="stat-label">Years Experience</div>
        </div>
        
        {/* FIRST VERTICAL DIVIDER */}
        <div className="sdv" />
        
        <div className="stat-box">
          <div className="stat-number">
            $<span className="cnt" data-to="121">0</span>K+
          </div>
          <div className="stat-label">Revenue in 2 Weeks</div>
        </div>
        
        {/* SECOND VERTICAL DIVIDER */}
        <div className="sdv" />
        
        <div className="stat-box">
          <div className="stat-number">
            <span className="cnt" data-to="1000">0</span>+
          </div>
          <div className="stat-label">Monthly Interactions</div>
        </div>
        
        {/* THIRD VERTICAL DIVIDER */}
        <div className="sdv" />
        
        <div className="stat-box">
          <div className="stat-number">
            <span className="cnt" data-to="75">0</span>%
          </div>
          <div className="stat-label">Sales Conversion Rate</div>
        </div>
      </div>
    </div>
  );
}
