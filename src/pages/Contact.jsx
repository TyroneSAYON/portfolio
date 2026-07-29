import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

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
          <div className="contact-panel">
            <div className="contact-header">
              <p className="contact-label">Contact</p>
              <h1 className="contact-heading">Let's work together</h1>
              <p className="contact-subheading">Share your project details and I’ll get back to you with a creative response.</p>
            </div>

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
      </div>
      </section>

      <footer className="minimal-footer">
        <div className="footer-wrapper">
          <div className="footer-main">
            <p className="footer-text">Tyrone Sayon</p>
            <div className="footer-socials">
              <a href="https://linkedin.com/in/yourprofile" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Image src="/iconlogo/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="mailto:your.email@gmail.com" className="social-icon" aria-label="Gmail">
                <Image src="/iconlogo/gmail.png" alt="Gmail" width={24} height={24} />
              </a>
              <a href="https://github.com/yourprofile" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Image src="/iconlogo/github.png" alt="GitHub" width={24} height={24} />
              </a>
              <a href="https://behance.net/yourprofile" className="social-icon" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                <Image src="/iconlogo/behance.png" alt="Behance" width={24} height={24} />
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
