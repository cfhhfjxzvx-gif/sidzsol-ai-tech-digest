'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import ArticleCard from '@/components/ArticleCard';
import CategoryTabs from '@/components/CategoryTabs';
import CommunityCTA from '@/components/CommunityCTA';
import NewsletterSection from '@/components/NewsletterSection';
import AnimatedStats from '@/components/AnimatedStats';
import {
  articles,
  getFeaturedArticle,
  getTrendingArticles,
  getArticlesByCategory,
} from '@/lib/data';
import type { Category } from '@/lib/types';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const featured = getFeaturedArticle();
  const trending = getTrendingArticles();

  const filteredArticles =
    activeCategory === 'All'
      ? [...articles]
          .filter((a) => !a.featured)
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      : getArticlesByCategory(activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      {featured && <HeroSection article={featured} />}

      <div className="section-divider" />
      
      {/* Platform Stats */}
      <div className="py-20 md:py-32">
        <AnimatedStats />
      </div>

      <div className="section-divider" />

      {/* Main Intel Feed */}
      <section className="section-padding">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Founder Intelligence</h2>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            High-signal insights on AI business models, growth frameworks, and startup execution. Curated for those building the future.
          </p>
        </div>
        
        <div className="mb-12">
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-500">No briefings in this category yet.</p>
          </div>
        )}
      </section>

      <div className="section-divider" />
      
      {/* Trending Intel */}
      <TrendingSection articles={trending} />
      
      <div className="section-divider" />
      
      {/* Newsletter Capture */}
      <NewsletterSection />
      
      <div className="section-divider" />
      
      {/* Community Access */}
      <CommunityCTA />
    </div>
  );
}
