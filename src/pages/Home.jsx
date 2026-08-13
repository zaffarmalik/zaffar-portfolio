import React from 'react';
import './Home.css';

import profilePic from '../assets/Profile-Pic.jpeg';

export default function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        
        {/* Top Section: Small Top-Aligned Profile Picture */}
        <div className="home-image-side-top">
          <div className="image-glow"></div>
          <div className="image-frame-small">
            <img 
              src={profilePic} 
              alt="Zaffar Khurram Profile" 
              className="profile-photo"
            />
            <div className="image-gradient-overlay"></div>
          </div>
        </div>

        {/* Text & Primary Content Section */}
        <div className="home-text-side">
          <div className="status-badge">
            <span className="pulsing-dot"></span> Available for Web & AI Automation Projects
          </div>

          <h1 className="home-title">
            Building Next-Gen <span className="highlight-text">Web Apps</span> & <span className="highlight-text">AI Workflows</span>
          </h1>

          <p className="home-subtitle">
            Hi, I'm <strong className="white-text">Zaffar Khurram</strong>. I specialize in crafting fast React frontends and architecting autonomous n8n automation pipelines that cut operational overhead.
          </p>

          <div className="home-cta-group">
            <a href="#projects" className="primary-btn">View Featured Work</a>
            <a href="#contact" className="secondary-btn">Get In Touch</a>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>99%+</h3>
              <p>Workflow Reliability</p>
            </div>
            <div className="stat-card">
              <h3>10+ hrs</h3>
              <p>Weekly Business Time Saved</p>
            </div>
            <div className="stat-card">
              <h3>Full-Stack</h3>
              <p>React, Node & Webhooks</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}