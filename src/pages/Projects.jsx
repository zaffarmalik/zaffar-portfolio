import React, { useState } from 'react';
import './Projects.css';

// Aap apne screenshots yahan import kar sakte hain:
// import fbSchedulerImg from './assets/fb-scheduler.png';
// import docClassifierImg from './assets/doc-classifier.png';
// import groceryAppImg from './assets/grocery-app.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Facebook Page Post Scheduler",
      shortDesc: "Automated social publishing workflow saving 10+ hours of manual posting weekly.",
      fullDesc: "An end-to-end automation workflow built in n8n. It periodically checks a Google Sheet for scheduled content, uses Google Gemini AI to optimize captions/hashtags, and dispatches posts directly via Meta Graph API & Buffer.",
      metrics: "⚡ Saves 10+ hours/week | 99.9% Execution Reliability",
      tags: ["Google Sheets", "AI Agent", "Google Gemini", "HTTP Request", "Buffer API"],
      // Yahan screenshot ka path ya variable dein:
      image: "https://via.placeholder.com/600x350/111827/38bdf8?text=FB+Post+Scheduler+Workflow", 
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/01-FBPage-Post-Scheduler"
    },
    {
      id: 2,
      title: "Smart Document Classifier",
      shortDesc: "AI-powered PDF parser & classifier with automatic folder sorting in Google Drive.",
      fullDesc: "This workflow automatically triggers whenever a document is added to Google Drive. It extracts unstructured text, feeds it into Gemini AI to identify file type, moves it to its target folder, and appends metadata into Google Sheets.",
      metrics: "📄 Zero manual sorting | Instant document processing",
      tags: ["Google Drive", "Extract File", "AI Agent", "Google Gemini", "Switch Node", "Google Sheets"],
      image: "https://via.placeholder.com/600x350/111827/38bdf8?text=Smart+Document+Classifier+Workflow",
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/02-Smart-Document-Classifier"
    },
    {
      id: 3,
      title: "Grocery Shopping App Workflow",
      shortDesc: "Real-time ecommerce order pipeline with instant Gmail customer notifications.",
      fullDesc: "Handles full backend checkout flows triggered by frontend webhooks. Runs custom JavaScript validations, updates inventory logs in Google Sheets, generates AI confirmation summaries, and dispatches automated emails.",
      metrics: "🛒 Instant webhook triggers | Automated order updates",
      tags: ["Webhook", "AI Agent", "Google Gemini", "JavaScript", "Google Sheets", "Gmail"],
      image: "https://via.placeholder.com/600x350/111827/38bdf8?text=Grocery+App+Workflow",
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/03-Groccery-App"
    }
  ];

  return (
    <div className="projects-container" id="projects">
      <div className="header-section">
        <div className="status-badge">
          <span className="pulsing-dot"></span> Available for Freelance & Automation Work
        </div>
        <h1 className="projects-heading">Automations & Applications</h1>
        <p className="projects-subtext">
          High-performance full-stack applications and AI-driven automation workflows designed for scale.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            
            {/* Workflow Screenshot Preview Container */}
            <div 
              className="project-image-container" 
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={`${project.title} Screenshot`} 
                className="project-image" 
              />
              <div className="image-overlay">
                <span>🔍 Click to Expand Workflow</span>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDesc}</p>
              <div className="project-metric">{project.metrics}</div>
            </div>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag-badge">{tag}</span>
              ))}
            </div>

            <div className="card-actions">
              <button className="details-btn" onClick={() => setSelectedProject(project)}>
                View Architecture
              </button>
              
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-btn"
              >
                <svg className="github-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screenshot Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card modal-large" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            
            <h2 className="modal-title">{selectedProject.title}</h2>
            
            {/* Full Screenshot Preview inside Modal */}
            <div className="modal-image-wrapper">
              <img 
                src={selectedProject.image} 
                alt={`${selectedProject.title} Full Architecture`} 
                className="modal-full-image" 
              />
            </div>

            <p className="modal-desc">{selectedProject.fullDesc}</p>
            
            <div className="modal-section">
              <h4>Nodes & Technologies Included</h4>
              <div className="project-tags">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="tag-badge modal-badge">{tag}</span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="github-btn full-width">
                Open Repository on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}