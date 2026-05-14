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
    <section className="relative py-24">
      {/* Section header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-xl font-bold text-white tracking-tight">Hot Takes for Founders</h2>
        <div className="h-px flex-1 bg-white/[0.05] ml-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={`/article/${article.slug}`} className="block group h-full">
              <div className="glass rounded-2xl p-6 flex items-start gap-4 h-full card-hover">
                <span className="text-2xl font-bold text-slate-800 group-hover:text-white transition-colors duration-300 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-indigo-400 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{article.source}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-800" />
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
