import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="page-section" id="contact">
        <h1 className="page-title">Get In Touch</h1>
        
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                className="form-input"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send</button>
          </form>

          <div className="contact-sidebar">
            <div className="contact-method">
              <span className="contact-label">Email</span>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className="contact-method">
              <span className="contact-label">Phone</span>
              <p>+63 (0) XXX-XXXX</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Ty</h3>
            <p>Designer & Developer</p>
          </div>
          <div className="footer-links">
            <a href="https://linkedin.com/in/yourprofile" className="footer-icon linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:your.email@gmail.com" className="footer-icon gmail" aria-label="Gmail">
              <i className="far fa-envelope"></i>
            </a>
            <a href="https://github.com/yourprofile" className="footer-icon github" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://behance.net/yourprofile" className="footer-icon behance" aria-label="Behance" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance"></i>
            </a>
          </div>
          <div className="footer-credit">
            <p>&copy; Tyrone Sayon 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact
