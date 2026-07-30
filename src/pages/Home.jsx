import React from 'react';
import './Home.css';
// import profileImg from './assets/profile.jpg'; // src/assets/WhatsApp Image 2026-07-25 at 1.33.45 PM.jpeg

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        
        {/* Profile Image & Status Badge Wrapper */}
        <div className="profile-wrapper">
          <div className="profile-img-container">
            {/* Apni pic yahan Replace karein */}
            <img 
              src={profileImg}
              alt="Zaffar Khurram" 
              className="profile-img" 
            />
          </div>
          <div className="status-badge">
            <span className="pulsing-dot"></span> Available for Web & AI Automation Projects
          </div>
        </div>

        {/* Professional Name & Title */}
        <div className="hero-text-block">
          <h2 className="developer-name">Zaffar Khurram</h2>
          <p className="developer-title">Full-Stack Developer & AI Automation Specialist</p>
        </div>

        <h1 className="home-title">
          Building Next-Gen <span className="highlight-text">Web Apps</span> & <span className="highlight-text">AI Workflows</span>
        </h1>

        <p className="home-subtitle">
          Specializing in fast, responsive React frontends and architecting autonomous n8n automation pipelines that cut operational overhead and streamline business logic.
        </p>

        <div className="home-cta-group">
          <a href="#projects" className="primary-btn">View Featured Work</a>
          <a href="#contact" className="secondary-btn">Get In Touch</a>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>99%+</h3>
            <p>Workflow Reliability</p>
          </div>
          <div className="stat-card">
            <h3>10+ hrs</h3>
            <p>Weekly Time Saved</p>
          </div>
          <div className="stat-card">
            <h3>BSCS</h3>
            <p>Computer Science</p>
          </div>
        </div>

      </div>
    </section>
  );
}