import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v2kdhu8', 'template_atn67e8', form.current, {
        publicKey: 'KNOMJdabzRuZhBbe3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thank you for your message! I will get back to you soon.')
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.')
        },
      );
  }

  return (
    <>
      <section className="contact-page" id="contact">
        <div className="contact-content">
          <h1 className="contact-heading">Get In Touch</h1>
          <p className="contact-subheading">Send me a message and I'll get back to you soon.</p>
          
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
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
                required
                placeholder="your@email.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                className="form-input"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="minimal-footer">
        <div className="footer-wrapper">
          <div className="footer-main">
            <p className="footer-text">Tyrone Sayon</p>
            <div className="footer-socials">
              <a href="https://linkedin.com/in/yourprofile" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="mailto:your.email@gmail.com" className="social-icon" aria-label="Gmail">
                <img src="/gmail.png" alt="Gmail" />
              </a>
              <a href="https://github.com/yourprofile" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" />
              </a>
              <a href="https://behance.net/yourprofile" className="social-icon" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                <img src="/behance.png" alt="Behance" />
              </a>
            </div>
          </div>
          <p className="footer-copyright">All rights reserved © 2026</p>
        </div>
      </footer>
    </>
  )
}

export default Contact
