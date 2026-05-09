export type Category =
  | 'AI Tools'
  | 'Tech News'
  | 'Productivity'
  | 'Developer News'
  | 'Startups'
  | 'Gadgets'
  | 'Content Creation';

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  aiSummary: string;
  content: string;
  imageUrl: string;
  source: string;
  sourceUrl: string;
  category: Category;
  publishedAt: string;
  readTime: number;
  trending: boolean;
  featured: boolean;
}

export interface WeeklyDigest {
  id: string;
  weekNumber: number;
  year: number;
  title: string;
  description: string;
  articles: Article[];
  publishedAt: string;
}
