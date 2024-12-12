"use client";

import { useListings } from '@/lib/api/hooks';
import { ListingCard } from '@/components/featured-listings/listing-card';
import { ListingsSkeleton } from './listings-skeleton';
import { Button } from '@/components/ui/button';
import type { Listing } from '@/lib/api/types';

export function ListingsGrid() {
  const {
    listings,
    isLoading,
    total,
    totalPages,
    params,
    updateParams,
    mutate
  } = useListings({ per_page: 12 });

  if (isLoading) {
    return <ListingsSkeleton />;
  }

  const showLoadMore = params.page && params.page < totalPages;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings?.map((listing: Listing) => (
          <ListingCard
            key={listing.id}
            id={listing.slug}
            title={listing.title}
            category={listing.category.name}
            imageUrl={listing.featured_image}
          />
        ))}
      </div>
      {showLoadMore && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() =>
              updateParams({ page: (params.page || 1) + 1 })
            }
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}