import { useEffect } from 'react'

/**
 * Mouse parallax effect — elements with a `data-p` attribute float
 * slightly toward the mouse cursor at a depth defined by the value.
 * Skipped entirely on touch/pointer-coarse devices.
 */
export default function useParallax() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    // Map each selector to a parallax depth multiplier (higher = more movement)
    const defs = [
      ['.hero-h1',     0.014],
      ['.hero-ey',     0.009],
      ['.hero-sub',    0.007],
      ['.hero-ctas',   0.008],
      ['.htrust',      0.006],
      ['.fc1',         0.032],
      ['.fc2',         0.026],
      ['.hero-photo',  0.016],
      ['.aimg',        0.014],
      ['.atxt h2',     0.007],
      ['.sc',          0.005],
      ['.ec',          0.005],
      ['.tc',          0.004],
      ['.phq',         0.010],
      ['.photos img',  0.012],
      ['.step',        0.006],
      ['.lbl',         0.006],
      ['.proc-hdr h2', 0.008],
      ['.exp-hdr h2',  0.008],
      ['.th h2',       0.008],
      ['.bl h2',       0.008],
      ['.shdr h2',     0.008],
      ['.aaccent',     0.022],
    ]

    defs.forEach(([sel, d]) =>
      document.querySelectorAll(sel).forEach(el => { el.dataset.p = String(d) })
    )

    let tx = 0, ty = 0, cx = 0, cy = 0
    const LERP = 0.075
    let rafId

    const onMove = (e) => {
      tx = e.clientX - innerWidth  / 2
      ty = e.clientY - innerHeight / 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const loop = () => {
      cx += (tx - cx) * LERP
      cy += (ty - cy) * LERP
      if (Math.abs(cx) > 0.05 || Math.abs(cy) > 0.05) {
        document.querySelectorAll('[data-p]').forEach(el => {
          const d = +el.dataset.p
          el.style.translate = `${(cx * d).toFixed(2)}px ${(cy * d).toFixed(2)}px`
        })
      }
      rafId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
