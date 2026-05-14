'use client';

import { motion } from 'framer-motion';

export default function CommunityCTA({ 
  title = <>Build with those who <br /><span className="gradient-text">understand the craft.</span></>,
  subtitle = "Connect with ambitious builders, share execution frameworks, and grow with a community focused on building the future of technology."
}: { 
  title?: string | React.ReactNode, 
  subtitle?: string 
}) {
  return (
    <section className="section-padding">
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/[0.05] bg-white/[0.01]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 text-xs font-medium mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            6,700+ community members
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight max-w-4xl mx-auto leading-[1.1]">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.gg/sidzsol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium w-full sm:w-auto text-center"
            >
              Join the Community
            </a>
            <a
              href="https://t.me/sidzsol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Join Telegram
            </a>
          </div>
        </div>

        {/* Subtle ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-indigo-500/[0.03] blur-[120px] pointer-events-none" />
      </div>
    </section>
  );
}
