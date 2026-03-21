export type SectionType =
  | 'hero'
  | 'image-text'
  | 'card-grid'
  | 'text'
  | 'gallery'
  | 'video'
  | 'video-grid'
  | 'audio'
  | 'press-quote'
  | 'resume'
  | 'contact'
  | 'social'

export interface Page {
  id: string
  slug: string
  title: string
  published: boolean
  created_at: string
}

export interface Section {
  id: string
  page_id: string
  order: number
  type: SectionType
  content: Record<string, unknown>
}

export interface SiteConfig {
  id: number
  fonts: Record<string, unknown>
  colors: Record<string, unknown>
  spacing: string
}
