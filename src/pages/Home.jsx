import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-hero">
        <span className="home-badge">Available for Projects</span>
        <h1 className="home-title">
          Crafting Web Experiences & <span className="highlight">Smart Automations</span>
        </h1>
        <p className="home-description">
          Hi, I'm Zaffar Khurram. I specialize in building fast single-page applications 
          and scalable automated workflows that optimize web performance.
        </p>

        <div className="home-btn-group">
          <Link to="/projects" className="btn-primary">View My Work</Link>
          <Link to="/contact" className="btn-secondary">Let's Connect</Link>
        </div>
      </section>

      <section className="home-grid">
        <div className="home-card">
          <div className="card-icon">⚡</div>
          <h3>Frontend Development</h3>
          <p>Building clean, responsive single-page interfaces using React and modern JavaScript.</p>
        </div>
        <div className="home-card">
          <div className="card-icon">⚙️</div>
          <h3>Backend Workflows</h3>
          <p>Connecting webhooks, REST APIs, and automated pipelines for streamlined data flow.</p>
        </div>
        <div className="home-card">
          <div className="card-icon">🎯</div>
          <h3>Custom Applications</h3>
          <p>Designing tailored web tools, trackers, and data validation systems.</p>
        </div>
      </section>
    </div>
  );
}