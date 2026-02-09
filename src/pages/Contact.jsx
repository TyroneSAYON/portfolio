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
    <section className="page-section" id="contact">
      <h1 className="page-title">Contact Me</h1>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="contact-info">
        <div className="contact-item">
          <h4>Email</h4>
          <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
        </div>
        <div className="contact-item">
          <h4>LinkedIn</h4>
          <p><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </div>
        <div className="contact-item">
          <h4>GitHub</h4>
          <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/yourprofile</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contact
