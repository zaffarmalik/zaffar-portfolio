import React, { useState } from 'react';
import './Projects.css';

// Screenshots import matching your exact assets folder file names
import fbImg from "../assets/fb-workflow.png";
import docImg from "../assets/doc-workflow.png";
import groceryImg from "../assets/grocery-workflow.png";
import mobileTechImg from "../assets/AI-Mobile-Tech-Assistant.png";
import dataProcImg from "../assets/Automated Data Processing & Gmail ....png";
import customAiImg from "../assets/Custom AI Backend for Web Apps.png";
import fileSortImg from "../assets/Dynamic File Sorting Workflow.png";
import sheetChatbotImg from "../assets/Google Sheets Query Chatbot.png";

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
      image: fbImg, 
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/01-FBPage-Post-Scheduler"
    },
    {
      id: 2,
      title: "Smart Document Classifier",
      shortDesc: "AI-powered PDF parser & classifier with automatic folder sorting in Google Drive.",
      fullDesc: "This workflow automatically triggers whenever a document is added to Google Drive. It extracts unstructured text, feeds it into Gemini AI to identify file type, moves it to its target folder, and appends metadata into Google Sheets.",
      metrics: "📄 Zero manual sorting | Instant document processing",
      tags: ["Google Drive", "Extract File", "AI Agent", "Google Gemini", "Switch Node", "Google Sheets"],
      image: docImg,
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/02-Smart-Document-Classifier"
    },
    {
      id: 3,
      title: "Grocery Shopping App Workflow",
      shortDesc: "Real-time ecommerce order pipeline with instant Gmail customer notifications.",
      fullDesc: "Handles full backend checkout flows triggered by frontend webhooks. Runs custom JavaScript validations, updates inventory logs in Google Sheets, generates AI confirmation summaries, and dispatches automated emails.",
      metrics: "🛒 Instant webhook triggers | Automated order updates",
      tags: ["Webhook", "AI Agent", "Google Gemini", "JavaScript", "Google Sheets", "Gmail"],
      image: groceryImg,
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/03-Groccery-App"
    },
    {
      id: 4,
      title: "AI Mobile Tech Assistant",
      shortDesc: "Interactive AI support assistant with dynamic web retrieval & API tool execution.",
      fullDesc: "An AI agent workflow triggered via user chat messages or manual execution. Powered by Google Gemini Chat Model and integrated with an HTTP Request tool to dynamically fetch external web data and live technical specifications for device diagnostics.",
      metrics: "🌐 Dynamic HTTP Tools | Real-time Web Diagnostics",
      tags: ["Chat Trigger", "Execute Trigger", "AI Agent", "Google Gemini", "HTTP Request Tool"],
      image: mobileTechImg,
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/04-AI-Mobile-Tech-Assistant"
    },
    {
      id: 5,
      title: "Automated Data Processing & Gmail Summarizer AI",
      shortDesc: "Full data pipeline: Sheets reading, JavaScript transformation, AI multi-tool updates & Gmail dispatch.",
      fullDesc: "Reads records from Google Sheets, transforms data using custom JavaScript, and passes it to an AI Agent with Google Gemini and Simple Memory. The AI executes tools to append/update Sheet records, re-queries updated rows, and dispatches automated summary emails via Gmail.",
      metrics: "🔄 End-to-End Automation | Multi-Tool Execution & Gmail Dispatch",
      tags: ["Google Sheets", "JavaScript", "AI Agent", "Google Gemini", "Simple Memory", "Gmail"],
      image: dataProcImg,
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/05-Automated-Data-Processing"
    },
    {
      id: 6,
      title: "Custom AI Backend for Web Apps",
      shortDesc: "Serverless Webhook HTTP POST listener giving instant synchronous AI responses to frontend apps.",
      fullDesc: "Acts as a serverless backend endpoint for web and mobile applications. Listens for POST Webhook requests, processes query payloads through Google Gemini AI Agent, and instantly sends back clean JSON responses.",
      metrics: "⚡ Serverless AI Backend | Real-time Webhook API",
      tags: ["Webhook POST", "AI Agent", "Google Gemini", "Respond to Webhook"],
      image: customAiImg,
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/06-Custom-AI-Backened-for-webapps"
    },
    {
      id: 7,
      title: "Dynamic File Sorting Workflow",
      shortDesc: "Automated Google Drive organizer listening to file uploads & routing them using rule-based logic.",
      fullDesc: "An event-driven workflow triggering instantly on file creation in Google Drive (`fileCreated`). Evaluates conditions using a rule-based Switch node to route files into appropriate destination folders automatically.",
      metrics: "📁 Rule-Based Routing | 100% Automated Drive Cleanup",
      tags: ["Google Drive Trigger", "Switch Node (Rules)", "Move File"],
      image: fileSortImg,
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/07-Dynamic-File-Sorting"
    },
    {
      id: 8,
      title: "Google Sheets Query Chatbot",
      shortDesc: "Conversational AI Chatbot with Simple Memory & dynamic Google Sheets tool querying.",
      fullDesc: "Interactive AI Chatbot equipped with continuous chat context via Simple Memory. Features an integrated Google Sheets tool node (`Get row(s)`), allowing the Gemini AI Agent to dynamically query spreadsheet databases and return precise context-aware answers.",
      metrics: "💬 Conversational Memory | On-the-Fly Sheet Queries",
      tags: ["Chat Trigger", "AI Agent", "Google Gemini", "Simple Memory", "Google Sheets Tool"],
      image: sheetChatbotImg,
      github: "https://github.com/zaffarmalik/n8n-automation-workflows/tree/main/08-Google-Sheets-Query-Chatbot"
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

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card modal-large" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            
            <h2 className="modal-title">{selectedProject.title}</h2>
            
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