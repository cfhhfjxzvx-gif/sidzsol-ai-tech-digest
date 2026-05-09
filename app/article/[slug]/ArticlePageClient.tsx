'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import CommunityCTA from '@/components/CommunityCTA';
import type { Article } from '@/lib/types';

const categoryColors: Record<string, string> = {
  'AI Tools': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'Tech News': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Productivity': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Developer News': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Startups': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'Gadgets': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Content Creation': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export default function ArticlePageClient({
  article,
  relatedArticles,
}: {
  article: Article;
  relatedArticles: Article[];
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 text-xs text-slate-500 mb-6"
      >
        <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
        <span className="text-slate-600">/</span>
        <Link href="/categories" className="hover:text-indigo-400 transition-colors">{article.category}</Link>
        <span className="text-slate-600">/</span>
        <span className="text-slate-400 truncate max-w-[200px]">{article.title}</span>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden mb-8 glow-blue"
      >
        <div className="aspect-[2/1] overflow-hidden">
          <motion.img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#04050a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-transparent" />
      </motion.div>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm ${categoryColors[article.category] || ''}`}>
            {article.category}
          </span>
          <span className="text-xs text-slate-500 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.06]">{article.readTime} min read</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
            <span>{article.source}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span>{formatDate(article.publishedAt)}</span>
        </div>
      </motion.div>

      {/* AI Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="glass rounded-2xl p-6 mb-8 glow-border relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.02]" />
        <div className="relative flex items-center gap-2.5 mb-3">
          <motion.div
            className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"
            animate={{ boxShadow: ['0 0 10px rgba(99,102,241,0.2)', '0 0 20px rgba(99,102,241,0.4)', '0 0 10px rgba(99,102,241,0.2)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </motion.div>
          <span className="text-sm font-bold gradient-text">AI Summary</span>
        </div>
        <p className="relative text-sm text-slate-300 leading-relaxed">{article.aiSummary}</p>
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mb-10"
      >
        <p className="text-slate-300 leading-relaxed text-base">{article.content}</p>
      </motion.div>

      {/* Source Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-3 mb-16"
      >
        <motion.a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-gradient px-6 py-3 rounded-xl text-sm font-semibold text-center"
        >
          <span className="relative z-10">Read Full Article on {article.source} →</span>
        </motion.a>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/"
            className="block px-6 py-3 rounded-xl text-sm font-semibold border border-white/10 text-white hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-300 text-center"
          >
            ← Back to Feed
          </Link>
        </motion.div>
      </motion.div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mb-12">
          <div className="section-divider mb-10" />
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-white mb-6"
          >
            Related Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((a, i) => (
              <ArticleCard key={a.id} article={a} index={i} />
            ))}
          </div>
        </section>
      )}

      <CommunityCTA />
    </div>
  );
}
