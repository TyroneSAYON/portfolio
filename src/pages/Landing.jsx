import './Landing.css'

function Landing() {
  return (
    <section className="landing" id="home">
      <div className="hero">
        <div className="hero-content">
          <p className="greeting">Hi! I am</p>
          <h1 className="name">Tyrone Sayon</h1>
          <p className="description">
            Ty here! I design because I love creativity and tech. I'm a Graphic and UI/UX 
            Designer from the Philippines, with experience in virtual assistance and a working 
            knowledge of web development. I'm also a coffee lover and an experienced barista.
          </p>
          
          <div className="social-links">
            <a href="https://linkedin.com/in/yourprofile" className="social-icon linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:your.email@gmail.com" className="social-icon gmail" aria-label="Gmail">
              <i className="far fa-envelope"></i>
            </a>
            <a href="https://github.com/yourprofile" className="social-icon github" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://behance.net/yourprofile" className="social-icon behance" aria-label="Behance" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance"></i>
            </a>
          </div>

          <button className="cta-button" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <div className="image-bg-circle"></div>
            <div className="image-bg-square"></div>
            <img src="/profilepic.png" alt="Tyrone Sayon" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing