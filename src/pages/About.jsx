import React from 'react';
import './About.css';

export default function About() {
  const skills = [
    "React.js", "JavaScript (ES6+)", "HTML5 & CSS3", 
    "n8n Automation", "REST APIs", "Webhooks", "Git & GitHub"
  ];

  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      <p className="about-bio">
        I am a developer focused on constructing functional web systems and automation pipelines. 
        My approach balances intuitive user experience on the frontend with reliable integrations on the backend.
      </p>

      <h2 className="about-subheading">Technical Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">{skill}</span>
        ))}
      </div>

      <h2 className="about-subheading">Core Expertise</h2>
      <ul className="about-list">
        <li><strong>Single Page Applications:</strong> Fast client-side rendering with React Router.</li>
        <li><strong>API Integration:</strong> Connecting modern frontends with custom webhooks and REST endpoints.</li>
        <li><strong>Workflow Automation:</strong> Engineering pipelines to eliminate repetitive operational processes.</li>
      </ul>
    </div>
  );
}