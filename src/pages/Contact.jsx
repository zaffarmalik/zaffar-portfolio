import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aap yahan apna backend endpoint ya n8n webhook connect kar sakte hain
    setSubmitted(true);
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-header">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtext">
          Have a project in mind, need an automation workflow, or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Information & Socials */}
        <div className="contact-info">
          <h3 className="info-title">Let's Connect</h3>
          <p className="info-desc">
            I am currently available for freelance projects, remote web development roles, and n8n automation consulting.
          </p>

          <div className="contact-methods">
            <a href="mailto:zaffar.khurram@example.com" className="contact-card">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>Send an email for direct inquiries</p>
              </div>
            </a>

            <a 
              href="https://github.com/zaffarmalik" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </span>
              <div>
                <h4>GitHub</h4>
                <p>github.com/zaffarmalik</p>
              </div>
            </a>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="contact-form-box">
          {submitted ? (
            <div className="success-message">
              <span>✅</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell me about your project or workflow requirements..." 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}