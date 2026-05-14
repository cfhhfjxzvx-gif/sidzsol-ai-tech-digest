'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getFeaturedArticle, getTrendingArticles } from '@/lib/data';

export default function DigestPageClient() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const featured = getFeaturedArticle();
  const trending = getTrendingArticles().slice(0, 4);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16">
      {!isMobile && (
        <>
          <div className="absolute -top-20 left-[5%] w-72 h-72 bg-indigo-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-10 left-[60%] w-80 h-80 bg-purple-500/[0.05] rounded-full blur-[90px] pointer-events-none" />
        </>
      )}

      <div className="mb-14 sm:mb-20 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: isMobile ? 0.4 : 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] sm:text-xs font-medium mb-4 sm:mb-5"
            {...(!isMobile && {
              animate: { boxShadow: ['0 0 10px rgba(99,102,241,0.1)', '0 0 20px rgba(99,102,241,0.2)', '0 0 10px rgba(99,102,241,0.1)'] },
              transition: { duration: 3, repeat: Infinity }
            })}
          >
            Weekly Digest
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6">The Founder's <br className="hidden sm:block" /><span className="gradient-text">Weekly Briefing</span></h1>
          <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2">Curated startup intelligence, AI business opportunities, and execution frameworks — hand-picked for ambitious builders.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-md mx-auto relative z-10">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl w-full shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Subscribed successfully!
              </motion.div>
            ) : (
              <>
                <div className="relative flex-1">
                  {!isMobile && <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-md -z-10 opacity-0 transition-opacity duration-300 focus-within:opacity-100" />}
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="w-full px-4 py-3 bg-[#06080d]/80 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 transition-all duration-200" />
                </div>
                <button type="submit" className="btn-gradient px-6 py-3 rounded-xl text-sm font-medium shrink-0">Subscribe</button>
              </>
            )}
          </form>
        </motion.div>
      </div>

      <div className="section-divider mb-10 sm:mb-16" />

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 tracking-tight">Recent Issues</h2>
        <div className="space-y-3 sm:space-y-4">
          {[1, 2, 3].map((issue, i) => (
            <motion.div key={issue} initial={{ opacity: 0, y: 20, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: isMobile ? 0.35 : 0.5, ease: [0.22, 1, 0.36, 1] }} {...(!isMobile && { whileHover: { y: -4, scale: 1.01 } })} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 group card-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/[0.05] transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-indigo-500/20">Issue #{42 - issue}</span>
                  <span className="text-[10px] sm:text-xs text-slate-500">{new Date(Date.now() - issue * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{i === 0 ? 'One-Person Billion-Dollar Companies, Cursor\'s Growth Playbook & More' : i === 1 ? 'AI Agents for Startups, Pre-Seed Funding Guide & Builder Tools' : 'The Lean AI Founders Playbook: Scaling Without Headcount'}</h3>
              </div>
              <button className="relative z-10 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm font-medium border border-white/10 bg-white/5 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300 shrink-0 w-full sm:w-auto text-center">Read Issue</button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
