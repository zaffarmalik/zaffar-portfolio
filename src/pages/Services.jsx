import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: "React Web Applications",
      desc: "Building modern, high-performance single-page applications tailored to business requirements."
    },
    {
      title: "Workflow Automation",
      desc: "Configuring backend automations and HTTP webhooks to stream data seamlessly across services."
    },
    {
      title: "Form & API Integration",
      desc: "Developing reliable input forms that format and transmit structured data directly to target endpoints."
    }
  ];

  return (
    <div className="services-container">
      <h1 className="services-heading">Services</h1>
      <p className="services-subtext">Solutions engineered to accelerate web development and automate operations.</p>

      <div className="services-list">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}