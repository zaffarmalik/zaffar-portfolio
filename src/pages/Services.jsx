import React from 'react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      icon: "⚡",
      title: "Full-Stack Web Development",
      description: "Building responsive, modern Single Page Applications (SPAs) using React.js, Tailwind CSS, and clean JavaScript architecture focused on high performance.",
      deliverables: ["Custom React SPAs", "State Management", "Tailwind UI Components"]
    },
    {
      icon: "🤖",
      title: "AI Agent & n8n Automations",
      description: "Designing end-to-end automated pipelines that connect your databases, AI models (Gemini/OpenAI), and webhooks to eliminate manual data entry.",
      deliverables: ["n8n Workflow Design", "Google Gemini AI Integration", "Automated Lead Processing"]
    },
    {
      icon: "🔗",
      title: "REST APIs & Webhook Systems",
      description: "Connecting frontend platforms to backend databases, webhooks, and third-party SaaS tools like Meta Graph API, Google Sheets, and Buffer.",
      deliverables: ["Custom Webhook Endpoints", "API Data Transformation", "JSON Payload Processing"]
    }
  ];

  return (
    <section className="services-container" id="services">
      <div className="services-header">
        <h2 className="services-heading">Solutions & Services</h2>
        <p className="services-subtext">Engineered solutions bridging the gap between web interfaces and automated backend systems.</p>
      </div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            
            <div className="deliverables-box">
              <h4>Key Deliverables:</h4>
              <ul>
                {service.deliverables.map((item, i) => (
                  <li key={i}><span>✓</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}