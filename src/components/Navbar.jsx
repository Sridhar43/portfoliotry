import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar" style={{ borderBottomColor: scrolled ? '#1a1a24' : 'transparent' }}>
      <div className="container">
        <a href="#hero" className="navbar-logo">
          Sridhar<span> </span>
        </a>

        <ul className="navbar-links">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-status">
          <span className="status-dot" />
          Available for work
        </div>
      </div>
    </nav>
  )
}
