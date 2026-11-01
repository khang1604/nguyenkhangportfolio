import React from 'react';
import { FontAwesomeIcon, faTerminal } from '../../components/icons';

interface NavbarProps {
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title = 'Nguyen Khang' }) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <FontAwesomeIcon icon={faTerminal} className="brand-icon" />
          <span className="brand-name">{title}</span>
        </div>
        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#achievements">Achievements</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-btn">Contact</a>
        </nav>
      </div>
    </header>
  );
};

