"use client";

import { useListings } from '@/lib/api/hooks';
import { ListingCard } from './listing-card';
import { Skeleton } from '@/components/ui/skeleton';

export function FeaturedListings() {
  const { listings, isLoading, error } = useListings({ 
    per_page: 3,
    featured: true 
  });

  if (error) {
    return (
      <div className="text-center text-destructive">
        Failed to load featured listings
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Listings</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square rounded-lg" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            ))
          : listings?.map((listing) => (
              <ListingCard
                key={listing.id}
                id={listing.slug}
                title={listing.title}
                category={listing.category.name}
                imageUrl={listing.featured_image}
              />
            ))}
      </div>
    </section>
  );
}