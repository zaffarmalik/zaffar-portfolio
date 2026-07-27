import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Zaffar<span className="logo-highlight">.dev</span>
        </Link>
        <nav className="navbar-links">
          <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>About</Link>
          <Link to="/projects" className={isActive('/projects') ? 'nav-link active' : 'nav-link'}>Projects</Link>
          <Link to="/services" className={isActive('/services') ? 'nav-link active' : 'nav-link'}>Services</Link>
          <Link to="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}