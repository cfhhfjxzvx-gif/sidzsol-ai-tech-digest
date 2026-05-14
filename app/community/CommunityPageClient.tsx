'use client';

import { motion } from 'framer-motion';
import CommunityCTA from '@/components/CommunityCTA';
import AnimatedStats from '@/components/AnimatedStats';
import BackButton from '@/components/BackButton';
import { useEffect, useState } from 'react';

const platforms = [
  { name: 'Discord', desc: 'Real-time discussions and AMAs', url: 'https://discord.gg/sidzsol', icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z', glow: 'glow-blue' },
  { name: 'Telegram', desc: 'Daily news broadcast', url: 'https://t.me/sidzsol', icon: 'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z', glow: 'glow-cyan' },
  { name: 'Twitter / X', desc: 'Quick threads and updates', url: 'https://twitter.com/sidzsol', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', glow: 'glow-purple' },
];

export default function CommunityPageClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pb-16">
      <BackButton />
      {!isMobile && (
        <>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-10 right-0 w-72 h-72 bg-purple-500/[0.05] rounded-full blur-[90px] pointer-events-none" />
        </>
      )}

      <div className="mb-14 sm:mb-20 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: isMobile ? 0.4 : 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] sm:text-xs font-medium mb-4 sm:mb-5">
            Community
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6">Join the <span className="gradient-text">Conversation</span></h1>
          <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2">Connect with builders, founders, and enthusiasts shaping the future of technology.</p>
        </motion.div>
        <AnimatedStats />
      </div>

      <div className="section-divider mb-10 sm:mb-16" />

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`glass rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center group card-glow ${p.glow} relative overflow-hidden`}
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d={p.icon} /></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{p.name}</h3>
              <p className="text-xs sm:text-sm text-slate-400">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <CommunityCTA />
    </div>
  );
}
