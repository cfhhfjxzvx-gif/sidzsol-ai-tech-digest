import { Metadata } from 'next';
import CommunityPageClient from './CommunityPageClient';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join the SidZsol community on Discord and Telegram. Connect with tech enthusiasts, developers, and AI practitioners.',
};

export default function CommunityPage() {
  return <CommunityPageClient />;
}
