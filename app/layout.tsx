import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'SidZsol AI & Tech Digest — Your AI-Powered Tech News Hub',
    template: '%s | SidZsol AI & Tech Digest',
  },
  description:
    'Stay ahead with AI-powered summaries of the latest in artificial intelligence, developer tools, startups, and emerging technology. Curated daily by SidZsol Technologies.',
  keywords: [
    'AI news',
    'tech digest',
    'artificial intelligence',
    'developer tools',
    'startups',
    'technology news',
    'SidZsol',
  ],
  authors: [{ name: 'SidZsol Technologies' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SidZsol AI & Tech Digest',
    title: 'SidZsol AI & Tech Digest — Your AI-Powered Tech News Hub',
    description:
      'AI-powered summaries of the latest in AI, developer tools, startups, and emerging technology.',
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
      <body className="min-h-full flex flex-col">
        {/* Multi-layer animated background */}
        <div className="bg-mesh" aria-hidden="true" />
        <div className="bg-horizon" aria-hidden="true" />

        {/* Noise texture overlay for film grain effect */}
        <div className="noise-overlay" aria-hidden="true" />

        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
