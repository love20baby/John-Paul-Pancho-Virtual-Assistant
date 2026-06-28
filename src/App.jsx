import { useEffect } from 'react'
import ParticleCanvas   from './components/ParticleCanvas'
import { useEffect, useRef } from 'react'
import NavBar           from './components/NavBar'
import Hero             from './components/Hero'
import Hero              from './components/Hero'
import StatsBar         from './components/StatsBar'
import About            from './components/About'
import ToolsMarquee     from './components/ToolsMarquee' 
@@ -16,6 +15,222 @@ import useScrollReveal  from './hooks/useScrollReveal'
import useParallax      from './hooks/useParallax'
import useCountUp       from './hooks/useCountUp'

// Inline Premium Dual-Engine Background Component
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // High Density Configuration for lots of fluid movement
    const config = {
      particleCount: 1800,       // Dense stardust field
      speed: 1.5,                // Snappy flow velocity
      forceRadius: 220,          // Wide mouse interaction zone
      colorParticle: 'rgba(165, 180, 252, ', // Glowing Indigo
      colorGrid: 'rgba(99, 102, 241, 0.045)', // Structural Mesh
      rows: 48,                  // Grid definition
      cols: 48
    };

    let particles = [];
    let gridPoints = [];
    let time = 0;
    const mouse = { x: null, y: null, targetX: null, targetY: null };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initEngine();
    }

    // Initialize both tracking fields simultaneously
    function initEngine() {
      // 1. Particle setup
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.4,
          speedX: Math.random() * 0.8 - 0.4,
          speedY: Math.random() * -1.2 - 0.3,
          alpha: 0,
          maxAlpha: Math.random() * 0.6 + 0.2,
          fadeSpeed: Math.random() * 0.01 + 0.004,
          growing: true
        });
      }

      // 2. Topography Grid setup
      gridPoints = [];
      const cellW = canvas.width / (config.cols - 1);
      const cellH = canvas.height / (config.rows - 1);
      for (let r = 0; r < config.rows; r++) {
        for (let c = 0; c < config.cols; c++) {
          gridPoints.push({
            baseX: c * cellW,
            baseY: r * cellH,
            x: c * cellW,
            y: r * cellH,
            phase: (c * 0.12) + (r * 0.12)
          });
        }
      }
    }

    // Mouse Listeners
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();

    // Core Animation Loop
    function animate() {
      time += 0.015;

      // 1. Smoothly ease mouse location vectors (Lerping)
      if (mouse.targetX !== null) {
        if (mouse.x === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          // Responsive tracking ratio (0.15 makes it snappy yet fluid)
          mouse.x += (mouse.targetX - mouse.x) * 0.15;
          mouse.y += (mouse.targetY - mouse.y) * 0.15;
        }
      } else {
        mouse.x = null;
        mouse.y = null;
      }

      // Clear Frame with an absolute matte obsidian void
      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Update & Draw Topography Matrix (Negantropy)
      for (let i = 0; i < gridPoints.length; i++) {
        let p = gridPoints[i];
        let waveX = Math.sin(time + p.phase) * 10;
        let waveY = Math.cos(time * 0.8 + p.phase) * 10;

        if (mouse.x !== null) {
          let dx = mouse.x - p.baseX;
          let dy = mouse.y - p.baseY;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < config.forceRadius) {
            // High kinetic distortion curve on cursor approach
            let force = Math.pow((config.forceRadius - dist) / config.forceRadius, 2) * 75;
            let angle = Math.atan2(dy, dx);
            p.x = p.baseX + waveX - Math.cos(angle) * force;
            p.y = p.baseY + waveY - Math.sin(angle) * force;
          } else {
            p.x = p.baseX + waveX;
            p.y = p.baseY + waveY;
          }
        } else {
          p.x = p.baseX + waveX;
          p.y = p.baseY + waveY;
        }
      }

      // Render structural columns
      ctx.strokeStyle = config.colorGrid;
      ctx.lineWidth = 1;
      for (let r = 0; r < config.rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < config.cols; c++) {
          let index = r * config.cols + c;
          if (c === 0) ctx.moveTo(gridPoints[index].x, gridPoints[index].y);
          else ctx.lineTo(gridPoints[index].x, gridPoints[index].y);
        }
        ctx.stroke();
      }

      // 3. Update & Draw Fluid Particles (Helios)
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += (p.speedX + Math.sin(p.y * 0.005) * 0.25) * config.speed;
        p.y += p.speedY * config.speed;

        if (p.growing) {
          p.alpha += p.fadeSpeed;
          if (p.alpha >= p.maxAlpha) p.growing = false;
        } else {
          p.alpha -= p.fadeSpeed;
          if (p.alpha <= 0) {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
            p.alpha = 0;
            p.growing = true;
          }
        }

        if (mouse.x !== null) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < config.forceRadius) {
            let force = (config.forceRadius - dist) / config.forceRadius;
            p.x -= (dx / dist) * force * 4; // Drastic kinetic push away from cursor
            p.y -= (dy / dist) * force * 4;
          }
        }

        if (p.x < 0 || p.x > canvas.width || p.y < 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height;
          p.alpha = 0;
          p.growing = true;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = config.colorParticle + p.alpha + ')';
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#030303'
      }}
    />
  );
}

export default function App() {
useScrollReveal()
useParallax()
@@ -38,30 +253,26 @@ export default function App() {
return (
<div className="app-layout-root" style={{ position: 'relative', width: '100%' }}>
{/* Dynamic ambient spotlight layer trailing behind your layout sections */}
      <div className="global-spotlight" />
      <div class="global-spotlight" />

      {/* Background Interactive Layer */}
      {/* Embedded High-Density Cinematic Engine */}
<ParticleCanvas />

      {/* Foreground User Interface */}
      <NavBar />
      <Hero />
      <StatsBar />
      
      {/* About Section */}
      <About />
      
      {/* Tech Stack sits here now — right after they learn who you are */}
      <ToolsMarquee />
      
      {/* Core Services and Funnel Flow Continue */}
      <Services />
      <Experience />
      <Process />
      <PhotoShowcase />
      <Testimonials />
      <Booking />
      <Footer />
      {/* Foreground User Interface Containers (Z-index handled inherently via ordering) */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <NavBar />
        <Hero />
        <StatsBar />
        <About />
        <ToolsMarquee />
        <Services />
        <Experience />
        <Process />
        <PhotoShowcase />
        <Testimonials />
        <Booking />
        <Footer />
      </div>
</div>
)
}
