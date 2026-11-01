import { z } from 'zod';

export const EnvSchema = z.object({
  VITE_APP_TITLE: z.string().default('Nguyen Khang | Portfolio'),
  VITE_APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  VITE_APP_BASE_URL: z.string().url().default('http://localhost:5173'),
  VITE_PROFILE_NAME: z.string().min(1).default('Nguyen Khang'),
  VITE_PROFILE_ROLE: z.string().min(1).default('Full Stack Engineer'),
  VITE_PROFILE_EMAIL: z.string().email().default('contact@example.com'),
  VITE_PROFILE_GITHUB: z.string().url().optional(),
  VITE_PROFILE_LINKEDIN: z.string().url().optional(),
  VITE_LOG_LEVEL: z.enum(['DEBUG', 'INFO', 'WARN', 'ERROR']).default('INFO'),
});

export const LocalizedTextSchema = z.object({
  vi: z.string().min(1),
  en: z.string().min(1),
});

export const AchievementSchema = z.object({
  id: z.string().min(1),
  title: LocalizedTextSchema,
  organization: z.string().min(2),
  date: z.string(),
  description: LocalizedTextSchema,
  category: z.enum(['AWARDS', 'CERTIFICATIONS', 'COMPETITIONS', 'COMMUNITY']),
  badge: LocalizedTextSchema.optional(),
  link: z.string().url().optional(),
});

export const ProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(2),
  shortDescription: LocalizedTextSchema,
  architectureOverview: LocalizedTextSchema,
  keyFeatures: z.array(LocalizedTextSchema),
  lessonsLearned: LocalizedTextSchema,
  tags: z.array(z.string()).min(1),
  githubUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  metrics: z.string().optional(),
});

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type LocalizedText = z.infer<typeof LocalizedTextSchema>;
export type Achievement = z.infer<typeof AchievementSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type ContactFormInput = z.infer<typeof ContactFormSchema>;
