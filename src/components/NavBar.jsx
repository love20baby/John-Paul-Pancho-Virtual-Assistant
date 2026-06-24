import { useEffect, useRef } from 'react'

export default function NavBar() {
  const navRef  = useRef(null)
  const brgrRef = useRef(null)
  const mmRef   = useRef(null)

  useEffect(() => {
    const nav  = navRef.current
    const brgr = brgrRef.current
    const mm   = mmRef.current

    const onScroll = () => nav.classList.toggle('on', window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })

    const toggleMenu = () => {
      brgr.classList.toggle('open')
      mm.classList.toggle('open')
    }
    brgr.addEventListener('click', toggleMenu)

    const closeMenu = () => {
      brgr.classList.remove('open')
      mm.classList.remove('open')
    }
    mm.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu))

    return () => {
      window.removeEventListener('scroll', onScroll)
      brgr.removeEventListener('click', toggleMenu)
    }
  }, [])

  return (
    <nav id="nav" className="wrap" ref={navRef}>
      <div className="nav-in">
        {/* BRAND LOGO ROUTED TO HERO SECTION WITH GOLD GLOW EFFECTS */}
        <a href="#hero" className="nav-logo-link">
          <div className="logo gold-glow-logo">JP | VA<em>.</em></div>
        </a>

        <ul className="nlinks">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#exp">Experience</a></li>
          <li><a href="#testi">Testimonials</a></li>
          <li><a href="#book">Contact</a></li>
        </ul>

        <a href="#book" className="ncta" data-track="nav_book">Book Interview</a>

        <button className="brgr" ref={brgrRef} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className="mmenu" ref={mmRef}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#exp">Experience</a>
        <a href="#testi">Reviews</a>
        <a href="#book" className="btn-y" data-track="mob_nav_book">
          Book Free Discovery Call →
        </a>
      </div>

      {/* BRAND GOLD AND GLOW HOVER PROPERTIES */}
      <style jsx global>{`
        .nav-logo-link {
          text-decoration: none;
          cursor: pointer;
          display: inline-block;
        }

        .gold-glow-logo {
          color: var(--y, #eaaa08) !important; /* Uses your CSS variable fallback to premium gold */
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .nav-logo-link:hover .gold-glow-logo {
          text-shadow: 0 0 15px rgba(234, 170, 8, 0.65), 
                       0 0 30px rgba(234, 170, 8, 0.3);
          transform: translateY(-0.5px);
          opacity: 1;
        }
      `}</style>
    </nav>
  )
}
