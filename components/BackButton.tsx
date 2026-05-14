'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: -4 }}
      onClick={() => router.back()}
      className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8"
    >
      <div className="w-8 h-8 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:border-white/10 group-hover:bg-white/10 transition-all">
        <svg 
          className="w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <span className="text-xs font-bold uppercase tracking-widest">Back</span>
    </motion.button>
  );
}
