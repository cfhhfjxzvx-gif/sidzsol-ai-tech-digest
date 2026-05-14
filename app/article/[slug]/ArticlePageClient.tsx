'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import CommunityCTA from '@/components/CommunityCTA';
import BackButton from '@/components/BackButton';
import type { Article } from '@/lib/types';

export default function ArticlePageClient({
  article,
  relatedArticles,
}: {
  article: Article;
  relatedArticles: Article[];
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <BackButton />
      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase bg-white text-black rounded-sm">
            {article.category}
          </span>
          <span className="text-xs font-medium text-slate-500">{article.readTime} min read</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-6 text-sm text-slate-400 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="font-medium text-slate-300">{article.source}</span>
          </div>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative rounded-3xl overflow-hidden mb-16 aspect-[21/10]"
      >
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-transparent to-transparent opacity-40" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main Content */}
          <div className="prose prose-invert prose-slate max-w-none mb-16">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 font-medium">
              {article.aiSummary}
            </p>
            <div className="h-px bg-white/[0.05] my-12" />
            <p className="text-slate-400 leading-relaxed text-lg">
              {article.content}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-8 py-4 text-center"
            >
              Read full briefing at {article.source}
            </a>
            <Link
              href="/"
              className="btn-secondary px-8 py-4 text-center"
            >
              Back to feed
            </Link>
          </div>
        </motion.div>

        {/* Sidebar Features */}
        <aside className="space-y-8">
          {article.founderTakeaway && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-2xl p-6 border border-indigo-500/10"
            >
              <div className="flex items-center gap-2 mb-4 text-indigo-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest">Founder Takeaway</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                "{article.founderTakeaway}"
              </p>
            </motion.div>
          )}

          <div className="glass rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Related Briefings</h3>
            <div className="space-y-6">
              {relatedArticles.slice(0, 3).map((a) => (
                <Link key={a.id} href={`/article/${a.slug}`} className="block group">
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2">
                    {a.title}
                  </h4>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">{a.source}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="section-divider my-24" />
      
      <CommunityCTA />
    </div>
  );
}
