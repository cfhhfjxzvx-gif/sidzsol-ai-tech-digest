import { Metadata } from 'next';
import DigestPageClient from './DigestPageClient';

export const metadata: Metadata = {
  title: 'Weekly Digest',
  description: 'Top AI & tech stories of the week, curated and summarized by SidZsol Technologies.',
};

export default function DigestPage() {
  return <DigestPageClient />;
}
