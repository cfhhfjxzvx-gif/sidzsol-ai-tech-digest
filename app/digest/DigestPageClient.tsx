'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BackButton from '@/components/BackButton';

export default function DigestPageClient() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <BackButton />
      <div className="mb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] gradient-text text-xs font-medium mb-8">
            The Weekly Intelligence
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Briefings for <br />
            <span className="gradient-text">modern builders.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
            Curated startup intelligence, AI business opportunities, and execution frameworks. No noise, just the briefings you need to ship faster.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            {submitted ? (
              <div className="w-full text-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 font-medium">
                Successfully subscribed.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 transition-colors"
                />
                <button type="submit" className="btn-premium whitespace-nowrap">Subscribe</button>
              </>
            )}
          </form>
        </motion.div>
      </div>

      <div className="section-divider mb-16" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-12">Archive</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((issue, i) => (
            <motion.div
              key={issue}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-white/[0.05] group-hover:border-white/[0.1] transition-colors">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 py-0.5 border border-white/[0.05] rounded-sm">
                      Issue #{42 - issue}
                    </span>
                    <span className="text-[11px] font-medium text-slate-600">
                      {new Date(Date.now() - issue * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">
                    {i === 0 ? "One-Person Billion-Dollar Companies & Growth Frameworks" : i === 1 ? "AI Agents for Startups & Pre-Seed Funding Intelligence" : "The Lean AI Founder: Scaling Without Headcount"}
                  </h3>
                </div>
                <button className="btn-secondary !py-2.5 !px-6 text-sm w-full md:w-auto">
                  Read briefing
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
