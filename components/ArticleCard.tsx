'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from '@/lib/data';
import type { Article } from '@/lib/types';
import { useRef, useState, useEffect } from 'react';

export default function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? Math.min(index * 0.05, 0.15) : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link href={`/article/${article.slug}`} className="block h-full group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="glass rounded-2xl h-full flex flex-col overflow-hidden relative card-hover card-glow"
        >
          {/* Mouse tracking spotlight effect — desktop only */}
          {!isMobile && (
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.06), transparent 40%)`,
              }}
            />
          )}

          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <div className="absolute inset-0 bg-slate-800/50 skeleton" />
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 relative z-0"
              loading="lazy"
            />
            
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent opacity-80" />
            
            {/* Category Badge */}
            <span className="absolute top-3 left-3 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-black/40 text-slate-200 border border-white/10 backdrop-blur-md">
              {article.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col relative z-20">
            <h3 className="text-[15px] sm:text-lg font-bold text-white leading-snug mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors duration-300">
              {article.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4 sm:mb-6 flex-1">
              {article.summary}
            </p>
            
            <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-500 pt-3 sm:pt-4 border-t border-white/5 mt-auto">
              <span className="font-medium text-slate-400 group-hover:text-slate-300 transition-colors">{article.source}</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span>{formatDate(article.publishedAt)}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="flex items-center gap-1">
                  <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readTime}m
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
