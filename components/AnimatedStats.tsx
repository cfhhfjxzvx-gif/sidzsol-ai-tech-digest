'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const defaultStats: Stat[] = [
  { value: 6700, suffix: '+', label: 'Active Builders' },
  { value: 120, suffix: '+', label: 'Market Briefings' },
  { value: 50, suffix: 'K+', label: 'Monthly Readers' },
  { value: 24, suffix: '/7', label: 'Founder Intel' },
];

export default function AnimatedStats({ stats = defaultStats }: { stats?: Stat[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-white/[0.05]">
      {stats.map((stat, i) => (
        <div key={stat.label} className="text-center md:text-left">
          <p className="text-3xl md:text-5xl font-bold text-white mb-2 tabular-nums tracking-tight">
            {inView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                delay={i * 0.1}
                separator=","
              />
            ) : '0'}
            <span className="text-slate-500">{stat.suffix}</span>
          </p>
          <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-widest">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
