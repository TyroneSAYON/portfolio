import './Navigation.css'

function Navigation() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
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
