import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AboutSection } from './features/about/AboutSection';
import { AchievementCard } from './features/achievements/AchievementCard';
import { ProjectCard } from './features/projects/ProjectCard';
import { ContactSection } from './features/contact/ContactSection';
import { INITIAL_ACHIEVEMENTS } from './features/achievements/achievementsData';
import { INITIAL_PROJECTS } from './features/projects/projectsData';
import { FontAwesomeIcon, faTrophy, faCode } from './components/icons';
import './index.css';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar title="Nguyen Khang Portfolio" />
      <main className="main-content">
        <AboutSection />

        {/* Achievements Section */}
        <section id="achievements" className="section achievements-section">
          <div className="section-header">
            <span className="section-badge">Milestones</span>
            <h2 className="section-title">
              <FontAwesomeIcon icon={faTrophy} className="icon-gold" /> Key Achievements & Honors
            </h2>
            <p className="section-subtitle">
              Significant milestones, professional certifications, and technical awards.
            </p>
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
            <span className="section-badge">Work</span>
            <h2 className="section-title">
              <FontAwesomeIcon icon={faCode} className="icon-blue" /> Featured Projects
            </h2>
            <p className="section-subtitle">
              Selected real-world applications showcasing scalable architecture and clean code.
            </p>
          </div>
          <div className="projects-grid">
            {INITIAL_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
