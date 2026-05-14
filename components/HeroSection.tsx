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
    <section className="relative pt-32 pb-20">
      <Link href={`/article/${article.slug}`} className="block group relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.05] bg-white/[0.02]"
        >
          {/* Image */}
          <div className="relative aspect-[21/9] overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              loading="eager"
            />
            {/* Minimal overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-[#040507]/40 to-transparent" />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-5xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white text-black rounded-full">
                  Featured
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {article.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="font-medium text-slate-300">{article.source}</span>
                </div>
                <span>{formatDate(article.publishedAt)}</span>
                <span>{article.readTime} min read</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
