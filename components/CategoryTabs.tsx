'use client';

import { categories } from '@/lib/data';
import type { Category } from '@/lib/types';

interface CategoryTabsProps {
  active: Category | 'All';
  onChange: (cat: Category | 'All') => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-1 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
      <button
        onClick={() => onChange('All')}
        className={`shrink-0 px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
          active === 'All'
            ? 'text-white border-indigo-500'
            : 'text-slate-500 border-transparent hover:text-slate-300'
        }`}
      >
        All Briefings
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`shrink-0 px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
            active === cat
              ? 'text-white border-indigo-500'
              : 'text-slate-500 border-transparent hover:text-slate-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
