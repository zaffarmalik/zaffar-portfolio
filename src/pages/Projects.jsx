import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Automated Social Publisher",
      description: "Workflow system linking Google Sheets data directly to Facebook page webhooks.",
      tags: ["n8n", "REST API", "Webhooks"]
    },
    {
      title: "Customer Tracker SPA",
      description: "Interactive single-page dashboard providing real-time data filtering tools.",
      tags: ["React.js", "JavaScript", "CSS3"]
    },
    {
      title: "Webhook Data Collector",
      description: "Custom frontend form interface designed to process structured JSON payloads.",
      tags: ["React.js", "Webhooks", "JSON"]
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Featured Projects</h1>
      <p className="projects-subtext">A selection of web applications and automated workflows I have built.</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag-badge">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}