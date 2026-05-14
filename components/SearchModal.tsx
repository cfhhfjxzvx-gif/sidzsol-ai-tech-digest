'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { searchArticles, formatDate } from '@/lib/data';
import type { Article } from '@/lib/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
    if (q.trim().length > 1) {
      setResults(searchArticles(q));
    } else {
      setResults([]);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      setResults([]);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh]"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl mx-3 sm:mx-4 glass rounded-xl sm:rounded-2xl overflow-hidden glow-blue"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b border-[rgba(99,102,241,0.1)]">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm sm:text-base outline-none"
              />
              <button
                onClick={onClose}
                className="sm:hidden px-2 py-1 text-[10px] text-slate-500 bg-white/5 rounded border border-white/10"
              >
                Close
              </button>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-slate-500 bg-white/5 rounded border border-white/10">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {query.trim().length > 1 && results.length === 0 && (
                <div className="px-4 sm:px-5 py-8 sm:py-12 text-center text-slate-500">
                  <svg className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                  <p className="text-xs sm:text-sm">No results found for &quot;{query}&quot;</p>
                </div>
              )}
              {results.map((article, i) => (
                <Link
                  key={article.id}
                  href={`/article/${article.slug}`}
                  onClick={onClose}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-start gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 hover:bg-white/5 active:bg-white/10 transition-colors border-b border-white/[0.03] last:border-0"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-white font-medium truncate">{article.title}</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">{article.source} · {formatDate(article.publishedAt)}</p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {article.category}
                    </span>
                  </motion.div>
                </Link>
              ))}
              {query.trim().length <= 1 && (
                <div className="px-4 sm:px-5 py-6 sm:py-8 text-center text-slate-500">
                  <p className="text-xs sm:text-sm">Start typing to search articles...</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3 sm:mt-4">
                    {['Startup Growth', 'AI Business', 'Funding', 'Builder Tools', 'Scaling'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleSearch(tag)}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs text-slate-400 bg-white/5 rounded-full hover:bg-white/10 hover:text-white active:bg-white/15 transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
