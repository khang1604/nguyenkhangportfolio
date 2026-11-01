import type { Achievement } from '../../core/validation/schemas';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Top Outstanding Software Engineering Award',
    organization: 'National University / Tech Symposium',
    date: '2025',
    category: 'AWARDS',
    description: 'Awarded 1st Prize for pioneering modern full-stack web and autonomous AI architecture design.',
    badge: '1st Prize / Gold Medal',
  },
  {
    id: 'ach-2',
    title: 'AWS Certified Solutions Architect & Developer',
    organization: 'Amazon Web Services',
    date: '2024',
    category: 'CERTIFICATIONS',
    description: 'Demonstrated mastery in cloud architectures, microservices, containerization, and resilient infrastructure.',
    badge: 'Certified',
  },
  {
    id: 'ach-3',
    title: 'Hackathon Grand Champion',
    organization: 'FinTech Innovation Hackathon',
    date: '2024',
    category: 'COMPETITIONS',
    description: 'Built a real-time reactive transaction monitoring platform with high concurrency and zero downtime.',
    badge: 'Champion',
  },
];

