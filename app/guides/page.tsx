import { GuidesGrid } from '@/components/guides/guides-grid';
import { GuidesSkeleton } from '@/components/guides/guides-skeleton';
import { AsyncBoundary } from '@/components/async-boundary';

export const metadata = {
  title: 'Guides - CurateGlasgow',
  description: 'Local guides and recommendations for Glasgow\'s creative scene.',
};

export default function GuidesPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Guides</h1>
        <AsyncBoundary fallback={<GuidesSkeleton />}>
          <GuidesGrid />
        </AsyncBoundary>
      </div>
    </div>
  );