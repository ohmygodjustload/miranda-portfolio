export type SectionType =
  | "hero"
  | "image-text"
  | "card-grid"
  | "text"
  | "gallery"
  | "video"
  | "video-grid"
  | "audio"
  | "press-quote"
  | "resume"
  | "contact"
  | "social";

export interface Section {
  id: string;
  page_id: string;
  order: number;
  type: SectionType;
  content: Record<string, unknown>;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  published: boolean;
  created_at: string;
}

export interface Theme {
  fonts: Record<string, string>;
  colors: Record<string, string>;
  spacing: Record<string, string>;
}

export interface SiteConfig {
  id: string;
  theme: Theme;
}
