import { games } from './games';
import { contents } from './contents';
import { tools } from './tools';
import type { Lang } from '../content';
import type { Project, ProjectCategory } from '../types';

/** Single source for all portfolio project views. Slugs are unique across categories. */
export const projects: Project[] = [...games, ...tools, ...contents];
export const getProject = (slug: string): Project | undefined => projects.find(project => project.slug === slug);
export const projectUrl = (project: Project, lang: Lang): string => `${lang === 'ja' ? '' : '/en'}/projects/${project.slug}/`;
export const projectCounts: Record<ProjectCategory, number> = {
  games: games.length,
  tools: tools.length,
  contents: contents.length
};
