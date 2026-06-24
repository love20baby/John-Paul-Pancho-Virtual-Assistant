import { useEffect } from 'react'

/**
 * Animates every element with class `.cnt` and a `data-to` attribute,
 * counting up from 0 to the target value when it scrolls into view.
 */
export default function useCountUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.cnt')
    if (!els.length) return

    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          const target = +e.target.dataset.to
          const ms = 1400
          let cur = 0
          const step = target / (ms / 16)
          const t = setInterval(() => {
            cur = Math.min(cur + step, target)
            e.target.textContent = Math.round(cur)
            if (cur >= target) clearInterval(t)
          }, 16)
          ob.unobserve(e.target)
        })
      },
      { threshold: 0.5 }
    )

    els.forEach(el => ob.observe(el))
    return () => ob.disconnect()
  }, [])
}
