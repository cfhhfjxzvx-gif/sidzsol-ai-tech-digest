import { Metadata } from 'next';
import { Suspense } from 'react';
import CategoriesPageClient from './CategoriesPageClient';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse AI & tech articles by category. Filter by AI Tools, Tech News, Developer News, Startups, Gadgets, and more.',
};

export default function CategoriesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <div className="flex flex-col items-center gap-4">
          <div className="skeleton w-64 h-10" />
          <div className="skeleton w-96 h-5" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="skeleton h-72 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    }>
      <CategoriesPageClient />
    </Suspense>
  );
}
