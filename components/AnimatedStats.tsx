'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const defaultStats: Stat[] = [
  { value: 6700, suffix: '+', label: 'Community Members', icon: '👥' },
  { value: 120, suffix: '+', label: 'Weekly Articles', icon: '📰' },
  { value: 50, suffix: 'K+', label: 'Monthly Reach', icon: '🌍' },
  { value: 24, suffix: '/7', label: 'AI Updates', icon: '🤖' },
];

export default function AnimatedStats({ stats = defaultStats }: { stats?: Stat[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: isMobile ? 0.3 : 0.6 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? i * 0.05 : i * 0.1 }}
          {...(!isMobile && { whileHover: { scale: 1.03, y: -4 } })}
          className="relative glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center overflow-hidden card-glow group"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block">{stat.icon}</span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 tabular-nums">
            {inView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={isMobile ? 1.5 : 2.5}
                delay={i * 0.1}
                separator=","
              />
            ) : '0'}
            <span>{stat.suffix}</span>
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
