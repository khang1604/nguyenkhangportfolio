import React from 'react';
import {
  FontAwesomeIcon,
  faTerminal,
  faSun,
  faMoon,
  faGlobe,
} from '../icons';
import { useTheme } from '../../core/theme/ThemeContext';
import { useLanguage } from '../../core/i18n/LanguageContext';

interface NavbarProps {
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title = 'Nguyen Khang' }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#about" className="navbar-brand">
          <FontAwesomeIcon icon={faTerminal} className="brand-icon" />
          <span className="brand-name">{title}</span>
        </a>

        <nav className="navbar-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact" className="nav-contact-link">{t.nav.contact}</a>

          {/* Language Switcher */}
          <button
            type="button"
            className="navbar-ctrl-btn lang-btn"
            onClick={toggleLanguage}
            title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            aria-label="Toggle language"
          >
            <FontAwesomeIcon icon={faGlobe} />
            <span className="lang-code">{language === 'vi' ? 'EN' : 'VI'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            className="navbar-ctrl-btn theme-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Chuyển sang Giao diện Tối'}
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </button>
        </nav>
      </div>
    </header>
  );
};
