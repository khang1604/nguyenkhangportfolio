import React from 'react';
import { FontAwesomeIcon, faTrophy, faCertificate, faStar, faGraduationCap } from '../../components/icons';
import type { Achievement } from '../../core/validation/schemas';
import { useLanguage } from '../../core/i18n/LanguageContext';

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const { language, t } = useLanguage();

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'AWARDS':
        return faTrophy;
      case 'CERTIFICATIONS':
        return faCertificate;
      case 'COMPETITIONS':
        return faStar;
      default:
        return faGraduationCap;
    }
  };

  const categoryLabel = t.achievements.categories[achievement.category] || achievement.category;

  return (
    <div className="achievement-card">
      <div className="achievement-header">
        <div className="achievement-icon-wrapper">
          <FontAwesomeIcon icon={getCategoryIcon(achievement.category)} className="achievement-icon" />
        </div>
        <span className="achievement-category">{categoryLabel}</span>
      </div>
      <h3 className="achievement-title">{achievement.title[language]}</h3>
      <p className="achievement-org">
        {achievement.organization} &bull; <span className="achievement-date">{achievement.date}</span>
      </p>
      <p className="achievement-desc">{achievement.description[language]}</p>
      {achievement.badge && (
        <span className="achievement-badge">{achievement.badge[language]}</span>
      )}
    </div>
  );
};
