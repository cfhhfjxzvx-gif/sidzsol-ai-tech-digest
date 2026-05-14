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
  { value: 1250, suffix: '+', label: 'Active Innovators' },
  { value: 40, suffix: '+', label: 'Strategic Briefings' },
  { value: 1800, suffix: '+', label: 'Community Reach' },
  { value: 950, suffix: '+', label: 'Founder Discussions' },
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
            <span className="gradient-text ml-1">{stat.suffix}</span>
          </p>
          <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
