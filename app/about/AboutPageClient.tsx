'use client';

import { motion } from 'framer-motion';
import CommunityCTA from '@/components/CommunityCTA';
import BackButton from '@/components/BackButton';

const values = [
  { title: 'Founder-First', desc: 'Every briefing is curated specifically for early-stage builders and operators.' },
  { title: 'Actionable Insights', desc: 'We skip the hype to provide execution frameworks and market intelligence.' },
  { title: 'Signal Over Noise', desc: 'High-density content designed for fast, clear understanding of complex shifts.' },
  { title: 'Community Driven', desc: 'A hub for builders who value craft, distribution, and sustainable growth.' },
];

const roadmap = [
  { phase: 'Phase 1', title: 'Intelligence Layer', items: ['Briefing engine', 'Curated insights', 'Founder takeaways'], done: true },
  { phase: 'Phase 2', title: 'Signal Network', items: ['Personalized feed', 'Market signals', 'Builder directory'], done: false },
  { phase: 'Phase 3', title: 'Scale & Ops', items: ['Mobile interface', 'Global intelligence', 'Builder API'], done: false },
];

export default function AboutPageClient() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <BackButton />
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-500 text-xs font-medium mb-8">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Intelligence for the <br />
            <span className="gradient-text">high-output builder.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
            SidZsol Founders Digest is a premium intelligence hub for startup founders and early-stage teams. We cut through the noise to deliver high-signal insights, AI business opportunities, and execution frameworks that help you scale faster.
          </p>
        </motion.div>
      </div>

      <div className="section-divider mb-24" />

      <section className="mb-32">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-12">The Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
              <p className="text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-32">
        <div className="glass rounded-3xl p-8 md:p-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-12">Roadmap</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {roadmap.map((phase) => (
              <div key={phase.phase}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm border ${phase.done ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-white/5 text-slate-500 border-white/10'}`}>
                    {phase.phase}
                  </span>
                  {phase.done && <span className="text-[10px] font-bold text-emerald-500">Active</span>}
                </div>
                <h3 className="text-lg font-bold text-white mb-6">{phase.title}</h3>
                <ul className="space-y-4">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-slate-400 flex items-center gap-3">
                      <span className={`w-1 h-1 rounded-full ${phase.done ? 'bg-indigo-500' : 'bg-slate-700'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommunityCTA 
        title={<>Where creators and founders <br /><span className="gradient-text">grow together.</span></>}
        subtitle="Join an ecosystem of builders shipping real products. Share wins, solve problems, and scale faster with collective intelligence."
      />
    </div>
  );
}
