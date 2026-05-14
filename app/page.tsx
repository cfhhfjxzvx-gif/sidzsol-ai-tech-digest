'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import ArticleCard from '@/components/ArticleCard';
import CategoryTabs from '@/components/CategoryTabs';
import CommunityCTA from '@/components/CommunityCTA';
import NewsletterSection from '@/components/NewsletterSection';
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
      ? articles.filter((a) => !a.featured)
      : getArticlesByCategory(activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      {featured && <HeroSection article={featured} />}


      {/* Divider */}
      <div className="section-divider" />

      {/* Trending */}
      <TrendingSection articles={trending} />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Divider */}
      <div className="section-divider" />

      {/* Latest Articles */}
      <section className="py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Founder Intelligence</h2>
            <p className="text-xs sm:text-sm text-slate-500">Curated insights for builders shipping the future</p>
          </div>
        </motion.div>

        {/* Category filter */}
        <div className="mb-6 sm:mb-8">
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-slate-500 text-sm">No articles found in this category yet.</p>
          </div>
        )}
      </section>

      {/* Community CTA */}
      <CommunityCTA />
    </div>
  );
}
