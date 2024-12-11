import { ListingsGrid } from '@/components/listings/listings-grid';
import { ListingsSearch } from '@/components/listings/listings-search';
import { ListingsFilter } from '@/components/listings/listings-filter';
import { ListingsSkeleton } from '@/components/listings/listings-skeleton';
import { AsyncBoundary } from '@/components/async-boundary';

export const metadata = {
  title: 'Listings - CurateGlasgow',
  description: 'Discover independent creative businesses in Glasgow.',
};

export default function ListingsPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Listings</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-64 flex-none">
            <AsyncBoundary fallback={<div>Loading filters...</div>}>
              <ListingsFilter />
            </AsyncBoundary>
          </div>
          <div className="flex-1">
            <AsyncBoundary>
              <ListingsSearch />
            </AsyncBoundary>
            <AsyncBoundary fallback={<ListingsSkeleton />}>
              <ListingsGrid />
            </AsyncBoundary>
          </div>
        </div>
      </div>
    </div>
  );