import React from 'react';
import { FontAwesomeIcon, faCode, faGraduationCap, faBriefcase, faGithub, faLinkedin, faEnvelope } from '../../components/icons';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section hero-section">
      <div className="hero-content">
        <span className="hero-badge">Welcome to my Portfolio</span>
        <h1 className="hero-title">
          Hi, I am <span className="highlight-text">Nguyen Khang</span>
        </h1>
        <p className="hero-subtitle">
          Software Engineer & Technology Enthusiast passionate about building scalable web applications, modern architectures, and resilient AI systems.
        </p>

        <div className="hero-highlights">
          <div className="highlight-item">
            <FontAwesomeIcon icon={faCode} className="icon-gold" />
            <div>
              <strong>Frontend & Full-Stack</strong>
              <p>React, TypeScript, Node.js & Clean Architecture</p>
            </div>
          </div>
          <div className="highlight-item">
            <FontAwesomeIcon icon={faBriefcase} className="icon-blue" />
            <div>
              <strong>Project Leadership</strong>
              <p>Scalable engineering, robust API design & system resilience</p>
            </div>
          </div>
          <div className="highlight-item">
            <FontAwesomeIcon icon={faGraduationCap} className="icon-purple" />
            <div>
              <strong>Continuous Innovation</strong>
              <p>Passionate about competitive programming & AI solutions</p>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

