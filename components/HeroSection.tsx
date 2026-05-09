'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from '@/lib/data';
import type { Article } from '@/lib/types';
import { useEffect, useState } from 'react';

export default function HeroSection({ article }: { article: Article }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-16">
      {/* Ambient background glows — hidden on mobile for perf */}
      {!isMobile && (
        <>
          <div className="absolute top-0 left-[5%] w-80 h-80 bg-indigo-500/[0.10] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-[5%] left-[65%] w-96 h-96 bg-purple-600/[0.07] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-[80%] w-64 h-64 bg-blue-500/[0.08] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/[0.08] via-purple-500/[0.04] to-transparent blur-3xl pointer-events-none" />
        </>
      )}

      <Link href={`/article/${article.slug}`} className="block group relative">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: isMobile ? 0.5 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass glow-intense"
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl p-px bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 -z-10" />

          {/* Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Multi-layer gradient overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04050a] via-[#04050a]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04050a]/60 via-transparent to-transparent hidden sm:block" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/15 via-transparent to-purple-900/10 hidden sm:block" />

            {/* Floating glow elements — desktop only */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute top-10 right-10 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500/15 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </>
            )}
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: isMobile ? 0.15 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badges */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-sm">
                  ✨ Featured
                </span>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10 backdrop-blur-sm">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-lg sm:text-3xl lg:text-5xl font-bold text-white leading-[1.2] sm:leading-[1.15] mb-2 sm:mb-4 max-w-3xl group-hover:text-indigo-100 transition-colors duration-500">
                {article.title}
              </h1>
              <p className="text-xs sm:text-base text-slate-300/90 leading-relaxed max-w-2xl mb-3 sm:mb-5 line-clamp-2">
                {article.aiSummary}
              </p>

              {/* Meta + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-sm text-slate-400 flex-wrap">
                  <span>{article.source}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{formatDate(article.publishedAt)}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{article.readTime} min read</span>
                </div>
                {!isMobile && (
                  <motion.span
                    className="hidden sm:inline-flex items-center gap-1.5 text-sm text-indigo-400 font-medium"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Read article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </motion.span>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
