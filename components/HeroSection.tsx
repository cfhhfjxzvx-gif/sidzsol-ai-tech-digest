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
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20">
      <Link href={`/article/${article.slug}`} className="block group relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/[0.08] bg-[#040507] glow-subtle"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              loading="eager"
            />
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-[#040507]/90 to-transparent md:via-[#040507]/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040507]/60 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040507]/40 to-transparent hidden md:block" />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-5xl"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-[0.15em] uppercase bg-white text-black rounded-full">
                  Featured
                </span>
                <span className="text-[11px] md:text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
                {article.title}
              </h1>

              <p className="hidden sm:block text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed line-clamp-2">
                {article.summary}
              </p>
              
              <p className="sm:hidden text-base text-slate-400 mb-6 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-8">
                <div className="flex items-center gap-6 text-xs md:text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="font-medium text-slate-300">{article.source}</span>
                  </div>
                  <span>{formatDate(article.publishedAt)}</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>

              <div className="flex">
                <div className="btn-premium flex items-center gap-2 group/btn">
                  Read Article
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
