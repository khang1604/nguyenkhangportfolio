import type { Project } from '../../core/validation/schemas';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'NguyenKhangPortfolio',
    description: 'Modern, high-performance web portfolio with React 19, TypeScript, Zod validation, and FontAwesome icons.',
    tags: ['React', 'TypeScript', 'Vite', 'FontAwesome', 'Zod'],
    githubUrl: 'https://github.com/nguyenkhang/portfolio',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'SmartInventoryManager',
    description: 'Enterprise inventory control and anomaly detection system with real-time stock forecasting.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/nguyenkhang/smart-inventory',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Multi-Agent Autonomous Orchestrator',
    description: 'Distributed workflow engine coordinating autonomous AI coding agents with verified safety gates.',
    tags: ['TypeScript', 'Python', 'LLM Agents', 'FastAPI'],
    githubUrl: 'https://github.com/nguyenkhang/multi-agents',
    featured: false,
  },
];

