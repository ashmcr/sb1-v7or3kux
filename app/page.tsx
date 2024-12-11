import { Hero } from '@/components/hero';
import { FeaturedListings } from '@/components/featured-listings';
import { CategoryGrid } from '@/components/category-grid';
import { LatestGuides } from '@/components/latest-guides';
import { Newsletter } from '@/components/newsletter';
import { AsyncBoundary } from '@/components/async-boundary';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <AsyncBoundary>
        <FeaturedListings />
      </AsyncBoundary>
      <CategoryGrid />
      <AsyncBoundary>
        <LatestGuides />
      </AsyncBoundary>
      <Newsletter />
    </div>
  );
}