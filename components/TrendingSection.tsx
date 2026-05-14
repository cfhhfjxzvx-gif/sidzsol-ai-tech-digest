'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from '@/lib/data';
import type { Article } from '@/lib/types';
import { useEffect, useState } from 'react';

export default function TrendingSection({ articles }: { articles: Article[] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="relative py-10 sm:py-14">
      {/* Decorative background glow — desktop only */}
      {!isMobile && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />
      )}

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: isMobile ? 0.3 : 0.6 }}
        className="flex items-center gap-3 mb-6 sm:mb-10"
      >
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-white">Hot Takes for Founders</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? Math.min(i * 0.04, 0.12) : i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/article/${article.slug}`} className="block group h-full">
              <div className="glass rounded-xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 h-full relative overflow-hidden card-glow">
                {/* Subtle hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="text-xl sm:text-2xl font-bold text-slate-700 group-hover:text-indigo-500 transition-colors duration-300 shrink-0 w-7 sm:w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 relative">
                  <h3 className="text-[13px] sm:text-sm font-bold text-white leading-snug mb-1.5 sm:mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-500">
                    <span>{article.source}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
