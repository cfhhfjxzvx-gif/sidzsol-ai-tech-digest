import { Metadata } from 'next';
import DigestPageClient from './DigestPageClient';

export const metadata: Metadata = {
  title: 'Founder\'s Weekly Briefing',
  description: 'Curated startup intelligence, AI business trends, and execution frameworks for ambitious founders and builders.',
};

export default function DigestPage() {
  return <DigestPageClient />;
}
