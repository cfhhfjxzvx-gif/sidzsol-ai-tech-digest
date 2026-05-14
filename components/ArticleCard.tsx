'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from '@/lib/data';
import type { Article } from '@/lib/types';

export default function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link href={`/article/${article.slug}`} className="block h-full group">
        <div className="glass rounded-2xl h-full flex flex-col overflow-hidden relative card-hover">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Category */}
            <div className="absolute top-4 left-4">
              <span className="px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase bg-white text-black rounded-sm">
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-500 mb-3 uppercase tracking-wider">
              <span>{article.source}</span>
              <span className="w-1 h-1 rounded-full bg-slate-800" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            
            <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-indigo-400 transition-colors">
              {article.title}
            </h3>
            
            <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-6 flex-1">
              {article.summary}
            </p>
            
            <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 pt-4 border-t border-white/[0.03]">
              <span>{article.readTime} min read</span>
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5 text-indigo-400">
                Read insight
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
