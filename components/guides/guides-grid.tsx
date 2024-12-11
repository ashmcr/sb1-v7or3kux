"use client";

import { useGuides } from '@/lib/api/hooks';
import { GuideCard } from '@/components/latest-guides/guide-card';
import { GuidesSkeleton } from './guides-skeleton';
import { Button } from '@/components/ui/button';

export function GuidesGrid() {
  const {
    guides,
    isLoading,
    error,
    totalPages,
    params,
    updateParams,
  } = useGuides({ per_page: 6 });

  if (error) {
    return (
      <div className="text-center text-destructive">
        Failed to load guides
      </div>
    );
  }

  if (isLoading) {
    return <GuidesSkeleton />;
  }

  const showLoadMore = params.page && params.page < totalPages;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
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