'use client';

import { motion } from 'framer-motion';
import { categories } from '@/lib/data';
import type { Category } from '@/lib/types';

const categoryIcons: Record<string, string> = {
  'Startup Growth': '🚀',
  'AI Business': '🤖',
  'Founder Lessons': '🎯',
  'Product Strategy': '♟️',
  'Funding & Finance': '💰',
  'Builder Tools': '🛠️',
  'Scaling & Ops': '⚡',
};

interface CategoryTabsProps {
  active: Category | 'All';
  onChange: (cat: Category | 'All') => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => onChange('All')}
        className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
          active === 'All'
            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20'
            : 'text-slate-400 hover:text-white hover:bg-white/5 border border-white/[0.06]'
        }`}
      >
        All
      </motion.button>
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(cat)}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
            active === cat
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20'
              : 'text-slate-400 hover:text-white hover:bg-white/5 border border-white/[0.06]'
          }`}
        >
          <span>{categoryIcons[cat]}</span>
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
