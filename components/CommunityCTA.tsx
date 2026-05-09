'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CommunityCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: isMobile ? 0.4 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] p-[1px] glow-intense"
      >
        {/* Animated border beam — simplified on mobile */}
        <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-500 opacity-50 ${isMobile ? '' : 'animate-[meshMove_8s_linear_infinite]'}`} />
        
        <div className="relative h-full bg-[#06080d]/90 backdrop-blur-xl sm:backdrop-blur-3xl rounded-[calc(2rem-1px)] sm:rounded-[calc(2.5rem-1px)] overflow-hidden">
          {/* Subtle ambient glows — desktop only */}
          {!isMobile && (
            <>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/[0.12] rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/[0.10] rounded-full blur-[80px] pointer-events-none" />
            </>
          )}
          
          {!isMobile && <div className="absolute inset-0 grid-pattern opacity-30" />}
          
          <div className="relative px-5 py-12 sm:px-12 sm:py-24 text-center z-10">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[11px] sm:text-xs font-semibold mb-6 sm:mb-8 backdrop-blur-md"
              {...(!isMobile && {
                animate: { boxShadow: ['0 0 10px rgba(99,102,241,0.2)', '0 0 20px rgba(99,102,241,0.4)', '0 0 10px rgba(99,102,241,0.2)'] },
                transition: { duration: 3, repeat: Infinity }
              })}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              6,700+ community members
            </motion.div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.15]">
              Join the <span className="gradient-text">SidZsol Community</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base md:text-lg leading-relaxed px-2">
              Get daily AI & tech insights, discuss the latest trends, and connect
              with thousands of tech enthusiasts and developers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://discord.gg/sidzsol"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm font-medium flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                </svg>
                Join Discord
              </a>
              <a
                href="https://t.me/sidzsol"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm font-medium flex items-center gap-2 w-full sm:w-auto justify-center overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                {!isMobile && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0088cc]/0 via-[#0088cc]/10 to-[#0088cc]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                )}
                <svg className="w-5 h-5 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="text-white relative z-10">Join Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
