import React from 'react';
import {
  FontAwesomeIcon,
  faGithub,
  faExternalLinkAlt,
  faCode,
  faLayerGroup,
  faLock,
} from '../../components/icons';
import type { Project } from '../../core/validation/schemas';
import { useLanguage } from '../../core/i18n/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { language, t } = useLanguage();

  return (
    <div className={`project-card ${project.featured ? 'project-featured' : ''}`}>
      <div className="project-header">
        <div className="project-type-icon">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="project-links">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              title="GitHub Repository"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          ) : (
            <span
              className="private-repo-badge"
              title={t.projects.privateRepo}
              aria-label={t.projects.privateRepo}
            >
              <FontAwesomeIcon icon={faLock} />
            </span>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
              title={t.projects.liveDemo}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.shortDescription[language]}</p>

      {project.metrics && <span className="project-metrics-pill">{project.metrics}</span>}

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="project-details-btn"
        onClick={() => onOpenDetails(project)}
      >
        <FontAwesomeIcon icon={faLayerGroup} /> {t.projects.viewDetails}
      </button>
    </div>
  );
};
