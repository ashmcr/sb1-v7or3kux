"use client";

import { useListings } from '@/lib/api/hooks';
import { LISTING_CATEGORIES } from '@/lib/constants/categories';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ListingsFilter() {
  const { params, updateParams } = useListings();

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Categories</h3>
        <ScrollArea className="h-[300px]">
          <div className="space-y-2">
            {LISTING_CATEGORIES.map((category) => (
              <Button
                key={category.slug}
                variant={
                  params.category === category.slug ? "secondary" : "ghost"
                }
                className="w-full justify-start"
                onClick={() =>
                  updateParams({
                    category:
                      params.category === category.slug
                        ? undefined
                        : category.slug,
                    page: 1,
                  })
                }
              >
                {category.title}
                <Badge
                  variant={
                    params.category === category.slug
                      ? "default"
                      : "secondary"
                  }
                  className="ml-auto"
                >
                  {/* TODO: Add category counts from API */}
                  0
                </Badge>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}