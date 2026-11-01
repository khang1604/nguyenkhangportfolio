import React, { useEffect } from 'react';
import {
  FontAwesomeIcon,
  faTimes,
  faGithub,
  faExternalLinkAlt,
  faLayerGroup,
  faCheck,
  faLightbulb,
  faRocket,
  faLock,
} from '../../components/icons';
import type { Project } from '../../core/validation/schemas';
import { useLanguage } from '../../core/i18n/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <span className="modal-badge">
              <FontAwesomeIcon icon={faRocket} /> {t.projects.modalTitle}
            </span>
            <h2 className="modal-project-title">{project.title}</h2>
            {project.metrics && <span className="modal-metrics">{project.metrics}</span>}
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label={t.projects.close}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Architecture Overview */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <FontAwesomeIcon icon={faLayerGroup} className="icon-blue" />{' '}
              {t.projects.architecture}
            </h3>
            <p className="modal-text">{project.architectureOverview[language]}</p>
          </div>

          {/* Key Features */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <FontAwesomeIcon icon={faCheck} className="icon-gold" />{' '}
              {t.projects.keyFeatures}
            </h3>
            <ul className="modal-features-list">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="modal-feature-item">
                  <span className="feature-check">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span>{feat[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <FontAwesomeIcon icon={faLightbulb} className="icon-purple" />{' '}
              {t.projects.learnings}
            </h3>
            <div className="modal-callout">
              <p>{project.lessonsLearned[language]}</p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="modal-actions">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <FontAwesomeIcon icon={faGithub} /> {t.projects.sourceCode}
              </a>
            ) : (
              <span className="modal-private-note">
                <FontAwesomeIcon icon={faLock} /> {t.projects.privateRepo}
              </span>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> {t.projects.liveDemo}
              </a>
            )}
          </div>
          <button type="button" className="btn btn-close" onClick={onClose}>
            {t.projects.close}
          </button>
        </div>
      </div>
    </div>
  );
};
