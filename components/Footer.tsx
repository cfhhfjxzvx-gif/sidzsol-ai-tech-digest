'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: "Founder's Digest", href: '/digest' },
    { label: 'Categories', href: '/categories' },
    { label: 'Community', href: '/community' },
    { label: 'About', href: '/about' },
  ];
  const cats = ['Startup Growth', 'AI Business', 'Founder Lessons', 'Product Strategy', 'Funding & Finance', 'Builder Tools', 'Scaling & Ops'];

  return (
    <footer className="relative mt-16 sm:mt-24 border-t border-white/[0.04]">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[60px] sm:h-[100px] bg-gradient-to-b from-indigo-500/[0.04] to-transparent blur-2xl hidden sm:block" />

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-indigo-500/15 blur-md" />
                <Image
                  src="/logo.png"
                  alt="SidZsol"
                  width={36}
                  height={36}
                  className="relative z-10 rounded-lg drop-shadow-[0_0_6px_rgba(99,102,241,0.3)]"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">SidZsol</p>
                <p className="text-[10px] text-slate-500 tracking-widest uppercase">Technologies</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
              Premium intelligence hub for builders, delivering high-signal startup insights, AI business trends, and execution frameworks.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-xs sm:text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">{l.label}</Link></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Categories</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {cats.map((c) => (
                <li key={c}><Link href={`/categories?cat=${encodeURIComponent(c)}`} className="text-xs sm:text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">{c}</Link></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Community</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li><a href="https://discord.gg/sidzsol" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">Discord</a></li>
              <li><a href="https://t.me/sidzsol" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">Telegram</a></li>
              <li><a href="https://twitter.com/sidzsol" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">X (Twitter)</a></li>
              <li><a href="https://github.com/sidzsol" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">GitHub</a></li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-slate-500">© {new Date().getFullYear()} SidZsol Technologies. All rights reserved.</p>
          <p className="text-[10px] sm:text-xs text-slate-600">Built with ❤️ by the SidZsol team · Powered by AI</p>
        </div>
      </div>
    </footer>
  );
}
