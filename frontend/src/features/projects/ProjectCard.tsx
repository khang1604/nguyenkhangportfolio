import React from 'react';
import { FontAwesomeIcon, faGithub, faExternalLinkAlt, faCode } from '../../components/icons';
import type { Project } from '../../core/validation/schemas';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`project-card ${project.featured ? 'project-featured' : ''}`}>
      <div className="project-header">
        <div className="project-type-icon">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )}
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

