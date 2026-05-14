'use client';

import { motion } from 'framer-motion';
import CommunityCTA from '@/components/CommunityCTA';
import { useEffect, useState } from 'react';

const values = [
  { icon: '🚀', title: 'Founder-Centric', desc: 'Every insight is filtered through the lens of early-stage builders and entrepreneurs.', gradient: 'from-indigo-500/10 to-purple-500/5' },
  { icon: '💡', title: 'Actionable Intelligence', desc: 'We go beyond news to provide practical takeaways and execution frameworks.', gradient: 'from-amber-500/10 to-orange-500/5' },
  { icon: '🤖', title: 'AI-First Analysis', desc: 'Leveraging AI to synthesize complex market trends into high-signal briefings.', gradient: 'from-emerald-500/10 to-teal-500/5' },
  { icon: '📈', title: 'Growth Mindset', desc: 'Focused on scaling, ops efficiency, and building defensible AI products.', gradient: 'from-blue-500/10 to-cyan-500/5' },
];

const roadmap = [
  { phase: 'Phase 1', title: 'Foundation', items: ['Launch website', 'Curated articles', 'Community channels', 'Weekly digest'], done: true },
  { phase: 'Phase 2', title: 'AI Integration', items: ['Claude API summaries', 'NewsAPI integration', 'Personalized feed', 'Search & discovery'], done: false },
  { phase: 'Phase 3', title: 'Scale', items: ['User accounts', 'Bookmarks & reading list', 'Mobile app', 'API for developers'], done: false },
];

const techStack = [
  { name: 'Next.js', color: 'border-white/10' },
  { name: 'TypeScript', color: 'border-blue-500/20' },
  { name: 'Tailwind CSS', color: 'border-cyan-500/20' },
  { name: 'Framer Motion', color: 'border-purple-500/20' },
  { name: 'Claude AI', color: 'border-amber-500/20' },
  { name: 'Vercel', color: 'border-white/10' },
  { name: 'Supabase', color: 'border-emerald-500/20' },
  { name: 'NewsAPI', color: 'border-indigo-500/20' },
];

export default function AboutPageClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12">
      <div className="relative mb-12 sm:mb-16">
        {!isMobile && (
          <>
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-10 right-0 w-56 h-56 bg-purple-500/[0.05] rounded-full blur-[80px] pointer-events-none" />
          </>
        )}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: isMobile ? 0.4 : 0.7 }} className="relative text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] sm:text-xs font-medium mb-4 sm:mb-5">About Us</div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-5 leading-tight">Intelligence for those who{' '}<span className="gradient-text">build the future</span></h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed px-2">SidZsol Founders Digest is a premium intelligence hub for ambitious builders. We cut through the noise to deliver high-signal startup insights, AI business opportunities, and execution frameworks that help you scale faster.</p>
        </motion.div>
      </div>

      <div className="section-divider mb-12 sm:mb-16" />

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
        <h2 className="text-base sm:text-lg font-bold text-white mb-6 sm:mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="glass rounded-xl p-5 sm:p-6 card-glow relative overflow-hidden group">
              <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block relative">{v.icon}</span>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5 sm:mb-2 relative">{v.title}</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed relative">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-12 sm:mb-16 glow-border relative overflow-hidden">
        {!isMobile && <div className="absolute inset-0 grid-pattern opacity-20" />}
        <h2 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-5 relative">Built With</h2>
        <div className="flex flex-wrap gap-2 sm:gap-2.5 relative">
          {techStack.map((tech) => (
            <span key={tech.name} className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium rounded-full bg-white/[0.03] text-slate-300 border ${tech.color}`}>{tech.name}</span>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
        <h2 className="text-base sm:text-lg font-bold text-white mb-6 sm:mb-8 text-center">Product Roadmap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {roadmap.map((phase, i) => (
            <motion.div key={phase.phase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className={`glass rounded-xl p-4 sm:p-5 relative overflow-hidden card-glow ${phase.done ? 'glow-blue' : ''}`}>
              {phase.done && <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-emerald-500/[0.02]" />}
              <div className="flex items-center gap-2 mb-2 sm:mb-3 relative">
                <span className={`px-2 sm:px-2.5 py-0.5 text-[10px] font-bold rounded-md ${phase.done ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-slate-500 border border-white/[0.06]'}`}>{phase.phase}</span>
                {phase.done && <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3 relative">{phase.title}</h3>
              <ul className="space-y-1.5 sm:space-y-2 relative">
                {phase.items.map((item) => (
                  <li key={item} className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${phase.done ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <CommunityCTA />
    </div>
  );
}
