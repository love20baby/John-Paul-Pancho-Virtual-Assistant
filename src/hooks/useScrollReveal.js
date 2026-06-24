import { useEffect } from 'react'

/**
 * Adds the `.in` class to every `.rv` element when it enters the viewport.
 * Uses IntersectionObserver for smooth, performant scroll-reveal animations.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    if (!els.length) return

    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    els.forEach(el => ob.observe(el))
    return () => ob.disconnect()
  }, [])
}
