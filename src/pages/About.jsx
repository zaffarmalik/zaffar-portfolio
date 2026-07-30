import React from 'react';
import './About.css';

export default function About() {
  const skillCategories = [
    {
      category: "Frontend Stack",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Vite"]
    },
    {
      category: "Automation & Backend",
      skills: ["n8n Platform", "Webhooks", "REST APIs", "Node.js Basics", "JSON Handling"]
    },
    {
      category: "AI & Integrations",
      skills: ["Google Gemini AI", "Meta Graph API", "Google Sheets API", "Buffer API"]
    }
  ];

  return (
    <section className="about-container" id="about">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="about-heading">About Me</h2>
          <p className="about-bio">
            I am a Computer Science professional with a strong passion for full-stack frontend development and business process automation. 
          </p>
          <p className="about-bio">
            My goal is to build clean, intuitive frontend interfaces while linking them with sophisticated backend workflows. Whether it's crafting interactive dashboards in React or deploying AI-driven agents in n8n, I focus on building scalable solutions that bring measurable impact.
          </p>
          
          <div className="education-badge">
            <span className="edu-icon">🎓</span>
            <div>
              <h4>Bachelor of Science in Computer Science (BSCS)</h4>
              <p>Strong foundation in software engineering, data structures, and system design.</p>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="skills-title">Technical Expertise</h3>
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category-box">
              <h4>{cat.category}</h4>
              <div className="skills-wrapper">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}