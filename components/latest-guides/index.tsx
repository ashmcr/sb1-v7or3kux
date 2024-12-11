"use client";

import Link from 'next/link';
import { useGuides } from '@/lib/api/hooks';
import { GuideCard } from './guide-card';
import { Skeleton } from '@/components/ui/skeleton';

export function LatestGuides() {
  const { guides, isLoading, error } = useGuides({ per_page: 2 });

  if (error) {
    return (
      <div className="text-center text-destructive">
        Failed to load latest guides
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest Guides</h2>
        <Link href="/guides" className="text-primary hover:underline">
          View all guides
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading
          ? Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[16/9] rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </div>
            ))
          : guides?.map((guide) => (
              <GuideCard
                key={guide.id}
                id={guide.slug}
                title={guide.title}
                excerpt={guide.content.substring(0, 150) + '...'}
                imageUrl={guide.featured_image}
                tags={guide.linked_listings.map(
                  (listing) => listing.category.name
                )}
              />
            ))}
      </div>
    </section>
  );
}