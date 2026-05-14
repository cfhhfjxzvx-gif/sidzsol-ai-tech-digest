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
    <section className="section-padding">
      <div className="glass rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Stay sharp on <br />
              <span className="gradient-text">startup intelligence.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Get a weekly briefing on AI market shifts, execution frameworks, and high-signal startup opportunities. No noise, just the essentials.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              {submitted ? (
                <div className="w-full text-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 font-medium">
                  Briefing confirmed. Welcome to the hub.
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="flex-1 lg:w-64 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="btn-premium whitespace-nowrap"
                  >
                    Get Briefing
                  </button>
                </>
              )}
            </form>
            {!submitted && (
              <p className="mt-4 text-center lg:text-left text-xs text-slate-500">
                Weekly insights. No spam. Unsubscribe anytime.
              </p>
            )}
          </div>
        </div>

        {/* Minimal background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/[0.02] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
