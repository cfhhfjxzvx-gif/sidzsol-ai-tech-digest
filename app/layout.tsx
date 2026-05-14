import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VantaBackground from '@/components/VantaBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'SidZsol Founders Digest — Premium Intelligence for Builders',
    template: '%s | SidZsol Founders Digest',
  },
  description:
    'High-quality, founder-focused startup insights, AI business trends, and execution frameworks for ambitious builders. Stay ahead with curated intelligence by SidZsol.',
  keywords: [
    'startup news',
    'founder insights',
    'AI business',
    'startup growth',
    'tech digest',
    'builder tools',
    'entrepreneurship',
    'SidZsol',
  ],
  authors: [{ name: 'SidZsol Technologies' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SidZsol Founders Digest',
    title: 'SidZsol Founders Digest — Premium Intelligence for Builders',
    description:
      'High-quality startup insights, AI business trends, and execution frameworks for ambitious builders.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sidzsol',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-indigo-500/30">
        <VantaBackground />
        {/* Subtle noise texture for a premium tactile feel */}
        <div className="noise-overlay" aria-hidden="true" />
        
        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
