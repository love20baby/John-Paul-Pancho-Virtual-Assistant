import { useEffect, useRef } from 'react'

/**
 * Full-screen fixed canvas that renders an animated particle network.
 * Particles repel from the mouse cursor and are connected by faint gold lines.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const isMob = window.matchMedia('(pointer:coarse)').matches
    const N = isMob ? 40 : 72
    let W, H, rafId
    const mouse = { x: -9999, y: -9999 }

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize, { passive: true })
    resize()

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX; mouse.y = e.clientY
    }, { passive: true })
    window.addEventListener('touchmove', e => {
      mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY
    }, { passive: true })
    window.addEventListener('touchend', () => {
      mouse.x = -9999; mouse.y = -9999
    }, { passive: true })

    const pts = Array.from({ length: N }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .38,
      vy: (Math.random() - .5) * .38,
      r:  Math.random() * 1.6 + .6,
    }))

    const LINK_D = 130, LINK_D2 = LINK_D * LINK_D
    const REP_D  = 110, REP_D2  = REP_D  * REP_D
    const MAX_V  = 1.4

    function tick() {
      ctx.clearRect(0, 0, W, H)

      // Draw connecting lines
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_D2) {
            const a = (1 - Math.sqrt(d2) / LINK_D) * .2
            ctx.strokeStyle = `rgba(240,201,59,${a})`
            ctx.lineWidth = .9
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const p of pts) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(240,201,59,0.52)'
        ctx.fill()
      }

      // Update positions
      for (const p of pts) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < REP_D2 && d2 > 0) {
          const d = Math.sqrt(d2)
          const f = (REP_D - d) / REP_D * 1.4
          p.vx += (dx / d) * f * 0.055
          p.vy += (dy / d) * f * 0.055
        }
        p.vx *= .994; p.vy *= .994
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > MAX_V) { p.vx = p.vx / spd * MAX_V; p.vy = p.vy / spd * MAX_V }
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      }

      rafId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="bgCanvas" />
}
