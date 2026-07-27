import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <p className="contact-subtext">Have a question or proposal? Send a message below.</p>

      {submitted ? (
        <div className="contact-success">
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. I will respond to your query shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              rows="5" 
              required 
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
    </div>
  );
}