import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AboutSection } from './features/about/AboutSection';
import { AchievementCard } from './features/achievements/AchievementCard';
import { ProjectCard } from './features/projects/ProjectCard';
import { ProjectModal } from './features/projects/ProjectModal';
import { ContactSection } from './features/contact/ContactSection';
import { INITIAL_ACHIEVEMENTS } from './features/achievements/achievementsData';
import { INITIAL_PROJECTS } from './features/projects/projectsData';
import { FontAwesomeIcon, faTrophy, faCode } from './components/icons';
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

        {/* Achievements Section */}
        <section id="achievements" className="section achievements-section">
          <div className="section-header">
            <span className="section-badge">{t.achievements.badge}</span>
            <h2 className="section-title">
              <FontAwesomeIcon icon={faTrophy} className="icon-gold" /> {t.achievements.title}
            </h2>
            <p className="section-subtitle">{t.achievements.subtitle}</p>
          </div>
          <div className="achievements-grid">
            {INITIAL_ACHIEVEMENTS.map((item) => (
              <AchievementCard key={item.id} achievement={item} />
            ))}
          </div>
        </section>

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
