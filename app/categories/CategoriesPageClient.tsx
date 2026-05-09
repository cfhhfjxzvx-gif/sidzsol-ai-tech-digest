'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import CategoryTabs from '@/components/CategoryTabs';
import ArticleCard from '@/components/ArticleCard';
import { articles, getArticlesByCategory, categories } from '@/lib/data';
import type { Category } from '@/lib/types';

const categoryDescriptions: Record<string, string> = {
  'AI Tools': 'Discover the latest AI-powered tools reshaping how we work, create, and think.',
  'Tech News': 'Breaking developments from the technology industry.',
  'Productivity': 'Tools and strategies to supercharge your workflow.',
  'Developer News': 'Latest updates in programming languages, frameworks, and dev tools.',
  'Startups': 'Funding rounds, launches, and insights from the startup ecosystem.',
  'Gadgets': 'The newest devices and hardware pushing technology forward.',
  'Content Creation': 'AI-powered tools transforming creative workflows.',
};

const categoryIcons: Record<string, string> = {
  'AI Tools': '🤖', 'Tech News': '📡', 'Productivity': '⚡',
  'Developer News': '💻', 'Startups': '🚀', 'Gadgets': '📱', 'Content Creation': '🎨',
};

export default function CategoriesPageClient() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get('cat');
  const [active, setActive] = useState<Category | 'All'>('All');

  useEffect(() => {
    if (catParam && categories.includes(catParam as Category)) {
      setActive(catParam as Category);
    }
  }, [catParam]);

  const filtered = active === 'All' ? articles : getArticlesByCategory(active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
          Browse <span className="gradient-text">Categories</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto px-2">
          {active === 'All'
            ? 'Explore articles across all categories in AI, tech, and beyond.'
            : categoryDescriptions[active] || ''}
        </p>
      </motion.div>

      {/* Category Grid (visual cards for All view) */}
      {active === 'All' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10"
        >
          {categories.map((cat) => {
            const count = getArticlesByCategory(cat).length;
            return (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(cat)}
                className="glass rounded-xl p-3 sm:p-4 text-left card-hover"
              >
                <span className="text-xl sm:text-2xl mb-1.5 sm:mb-2 block">{categoryIcons[cat]}</span>
                <p className="text-xs sm:text-sm font-semibold text-white mb-0.5">{cat}</p>
                <p className="text-[10px] sm:text-xs text-slate-500">{count} article{count !== 1 ? 's' : ''}</p>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Tabs */}
      <div className="mb-6 sm:mb-8">
        <CategoryTabs active={active} onChange={setActive} />
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((a, i) => (
          <ArticleCard key={a.id} article={a} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <p className="text-slate-500 text-sm">No articles found in this category yet.</p>
        </div>
      )}
    </div>
  );
}
