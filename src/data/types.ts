import type { Lang } from './content';

export type LocalizedText = Record<Lang, string>;
export type ProjectCategory = 'games' | 'contents' | 'tools';
export type AuthRequirement = 'none' | 'optional' | 'required';
export type PricingModel = 'free' | 'freemium' | 'paid';
export type AvailabilityStatus = 'coming-soon' | 'active' | 'maintenance' | 'discontinued';
export type ProjectMedia = { type: 'image' | 'video'; src: string; poster?: string; alt: LocalizedText; placeholder?: boolean };
export type ProjectNotice = { kind: 'requirement' | 'storage' | 'info'; text: LocalizedText };

export type ProjectBase<Category extends ProjectCategory> = {
  slug: string;
  title: string;
  category: Category;
  summary: LocalizedText;
  media: ProjectMedia[];
  repositoryUrl?: string;
  homeFeature?: 'new-release' | 'recommended' | 'update';
  availabilityStatus: AvailabilityStatus;
  releasedAt: string | null;
  updatedAt: string | null;
  version: string | null;
  updateNotes: LocalizedText[];
};

export type Game = ProjectBase<'games'> & {
  genre: LocalizedText;
  format: 'browser' | 'download';
  authRequirement: AuthRequirement;
  pricingModel: PricingModel;
  devices: Array<'pc' | 'tablet' | 'smartphone'>;
  notices?: ProjectNotice[];
  playUrl: string;
};

// Initial category schemas; refine category-specific fields before first registration.
export type Tool = ProjectBase<'tools'> & { url?: string };
export type Content = ProjectBase<'contents'> & {
  url?: string;
  categoryLabel?: LocalizedText;
  genre?: LocalizedText;
  publishedCount?: number;
  notes?: LocalizedText[];
};
export type Project = Game | Tool | Content;
