'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden glow-border"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none hidden sm:block" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none hidden sm:block" />
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">Built for founders who ship</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Weekly startup intelligence, AI business trends, and founder playbooks. No fluff, just signal.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Subscribed! Welcome aboard.
              </motion.div>
            ) : (
              <>
                <div className="relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-md -z-10 opacity-0 transition-opacity duration-300 focus-within:opacity-100 hidden sm:block" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full sm:w-72 px-4 py-3 bg-[#06080d]/80 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:bg-[#06080d] transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gradient px-6 py-3 rounded-xl text-sm font-medium shrink-0"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
