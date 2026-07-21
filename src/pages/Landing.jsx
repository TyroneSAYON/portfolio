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
            <a href="https://www.linkedin.com/in/tyrone-sayon/" className="social-icon linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src="/iconlogo/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="mailto:tyronesayon917@gmail.com" className="social-icon gmail" aria-label="Gmail">
              <img src="/iconlogo/gmail.png" alt="Gmail" />
            </a>
            <a href="https://github.com/TyroneSAYON" className="social-icon github" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <img src="/iconlogo/github.png" alt="GitHub" />
            </a>
            <a href="https://www.behance.net/tyronesayon" className="social-icon behance" aria-label="Behance" target="_blank" rel="noopener noreferrer">
              <img src="/iconlogo/behance.png" alt="Behance" />
            </a>
          </div>

          <a href="https://drive.google.com/file/d/1Yoel_-Ohi8i40QHTm0YZ1eL2yTfXHTuu/view" className="cta-button" target="_blank" rel="noopener noreferrer">View Resume</a>
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