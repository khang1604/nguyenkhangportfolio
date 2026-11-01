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
        <span className="hero-badge animate-fade-in-down">{t.hero.welcome}</span>
        <h1 className="hero-title animate-fade-in-up stagger-1">
          {t.hero.greeting} <span className="highlight-text">{t.hero.name}</span>
        </h1>
        <p className="hero-role animate-fade-in-up stagger-2">{t.hero.role}</p>
        <p className="hero-subtitle animate-fade-in-up stagger-3">{t.hero.bio}</p>

        <div className="hero-highlights">
          <div className="highlight-item animate-fade-in-up stagger-4">
            <FontAwesomeIcon icon={faCode} className="icon-gold" />
            <div>
              <strong>{t.hero.highlight1Title}</strong>
              <p>{t.hero.highlight1Desc}</p>
            </div>
          </div>
          <div className="highlight-item animate-fade-in-up stagger-5">
            <FontAwesomeIcon icon={faBriefcase} className="icon-blue" />
            <div>
              <strong>{t.hero.highlight2Title}</strong>
              <p>{t.hero.highlight2Desc}</p>
            </div>
          </div>
          <div className="highlight-item animate-fade-in-up stagger-6">
            <FontAwesomeIcon icon={faRocket} className="icon-purple" />
            <div>
              <strong>{t.hero.highlight3Title}</strong>
              <p>{t.hero.highlight3Desc}</p>
            </div>
          </div>
        </div>

        <div className="hero-actions animate-fade-in-up stagger-7">
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
