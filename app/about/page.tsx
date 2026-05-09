import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about SidZsol Technologies and the AI & Tech Digest platform. Our mission is to make AI and technology accessible to everyone.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
