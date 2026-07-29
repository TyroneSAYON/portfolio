import { useState } from 'react'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close menu after clicking
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home') }}>Home</a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills') }}>Skills</a>
        </li>
        <li>
          <a href="#stories" onClick={(e) => { e.preventDefault(); handleScroll('stories') }}>Stories</a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact') }}>Contact me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
