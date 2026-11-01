import React from 'react';
import { FontAwesomeIcon, faTrophy, faCertificate, faStar } from '../../components/icons';
import type { Achievement } from '../../core/validation/schemas';

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'AWARDS':
        return faTrophy;
      case 'CERTIFICATIONS':
        return faCertificate;
      default:
        return faStar;
    }
  };

  return (
    <div className="achievement-card">
      <div className="achievement-header">
        <div className="achievement-icon-wrapper">
          <FontAwesomeIcon icon={getCategoryIcon(achievement.category)} className="achievement-icon" />
        </div>
        <span className="achievement-category">{achievement.category}</span>
      </div>
      <h3 className="achievement-title">{achievement.title}</h3>
      <p className="achievement-org">
        {achievement.organization} &bull; <span className="achievement-date">{achievement.date}</span>
      </p>
      <p className="achievement-desc">{achievement.description}</p>
      {achievement.badge && <span className="achievement-badge">{achievement.badge}</span>}
    </div>
  );
};

