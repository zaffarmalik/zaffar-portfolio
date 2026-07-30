import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Facebook Page Post Scheduler",
      description: "Automated workflow system using n8n and webhooks to schedule, format, and auto-publish content from Google Sheets directly to Facebook pages.",
      tags: ["Google Sheets", "AI Agent", "Google Gemini", "HTTP Request", "Buffer API"],
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/01-FBPage-Post-Scheduler"
    },
    {
      title: "Smart Document Classifier",
      description: "AI-powered document processing pipeline that automatically parses incoming PDFs, categorizes files by content type, and routes metadata to target platforms.",
      tags: ["Google Drive", "Extract File", "AI Agent", "Google Gemini", "Switch Node", "Google Sheets"],
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/02-Smart-Document-Classifier"
    },
    {
      title: "Grocery Shopping App Workflow",
      description: "End-to-end ecommerce automation flow handling order tracking, inventory updates, and real-time customer notifications.",
      tags: ["Webhook", "AI Agent", "Google Gemini", "JavaScript", "Google Sheets", "Gmail"],
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/03-Groccery-App"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Featured Projects</h1>
      <p className="projects-subtext">A selection of web applications and automated workflows I have built.</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag-badge">{tag}</span>
              ))}
            </div>

            {/* GitHub Link Button */}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-btn"
              >
                <svg className="github-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}