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
        <div className="logo">JP<em>.</em></div>

        <ul className="nlinks">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#exp">Experience</a></li>
          <li><a href="#testi">Reviews</a></li>
          <li><a href="#book">Contact</a></li>
        </ul>

        <a href="#book" className="ncta" data-track="nav_book">Book a Call</a>

        <button className="brgr" ref={brgrRef} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className="mmenu" ref={mmRef}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#exp">Experience</a>
        <a href="#testi">Reviews</a>
        <a href="#book" className="btn-y" data-track="mob_nav_book">
          Book Free Discovery Call →
        </a>
      </div>
    </nav>
  )
}
