import React from 'react';
import {
  FontAwesomeIcon,
  faCode,
  faBriefcase,
  faRocket,
  faGithub,
  faLinkedin,
  faEnvelope,
} from '../../components/icons';
import { useLanguage } from '../../core/i18n/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section hero-section">
      <div className="hero-content">
        <span className="hero-badge">{t.hero.welcome}</span>
        <h1 className="hero-title">
          {t.hero.greeting} <span className="highlight-text">{t.hero.name}</span>
        </h1>
        <p className="hero-role">{t.hero.role}</p>
        <p className="hero-subtitle">{t.hero.bio}</p>

        <div className="hero-highlights">
          <div className="highlight-item">
            <FontAwesomeIcon icon={faCode} className="icon-gold" />
            <div>
              <strong>{t.hero.highlight1Title}</strong>
              <p>{t.hero.highlight1Desc}</p>
            </div>
          </div>
          <div className="highlight-item">
            <FontAwesomeIcon icon={faBriefcase} className="icon-blue" />
            <div>
              <strong>{t.hero.highlight2Title}</strong>
              <p>{t.hero.highlight2Desc}</p>
            </div>
          </div>
          <div className="highlight-item">
            <FontAwesomeIcon icon={faRocket} className="icon-purple" />
            <div>
              <strong>{t.hero.highlight3Title}</strong>
              <p>{t.hero.highlight3Desc}</p>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <FontAwesomeIcon icon={faEnvelope} /> {t.hero.contactBtn}
          </a>
          <a
            href="https://github.com/khang1604"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/nguyenkhang"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
