export type Category =
  | 'Startup Growth'
  | 'AI Business'
  | 'Founder Lessons'
  | 'Product Strategy'
  | 'Funding & Finance'
  | 'Builder Tools'
  | 'Scaling & Ops';

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  aiSummary: string;
  content: string;
  founderTakeaway: string;
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
