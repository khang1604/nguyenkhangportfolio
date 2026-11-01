import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AboutSection } from './features/about/AboutSection';
import { ProjectCard } from './features/projects/ProjectCard';
import { ProjectModal } from './features/projects/ProjectModal';
import { ContactSection } from './features/contact/ContactSection';
import { INITIAL_PROJECTS } from './features/projects/projectsData';
import { FontAwesomeIcon, faCode } from './components/icons';
import { ThemeProvider } from './core/theme/ThemeContext';
import { LanguageProvider, useLanguage } from './core/i18n/LanguageContext';
import type { Project } from './core/validation/schemas';
import './index.css';

const PortfolioContent: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="portfolio-app">
      <Navbar title="Nguyen Khang Portfolio" />
      <main className="main-content">
        <AboutSection />

        {/* Featured Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-header">
            <span className="section-badge">{t.projects.badge}</span>
            <h2 className="section-title">
              <FontAwesomeIcon icon={faCode} className="icon-blue" /> {t.projects.title}
            </h2>
            <p className="section-subtitle">{t.projects.subtitle}</p>
          </div>
          <div className="projects-grid">
            {INITIAL_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      {/* Technical Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
