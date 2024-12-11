import { Palette, Coffee, Shirt, Gem, Home, Flower2 } from 'lucide-react';
import { CategoryCard } from './category-card';
import { LISTING_CATEGORIES } from '@/lib/constants/categories';

const CATEGORY_ICONS = {
  'art-print': Palette,
  'eat-drink': Coffee,
  'clothing': Shirt,
  'jewellery': Gem,
  'home': Home,
  'plants': Flower2,
} as const;

const CATEGORIES = LISTING_CATEGORIES.map((category) => ({
  title: category.title,
  icon: CATEGORY_ICONS[category.slug],
  href: `/listings/${category.slug}`,
  count: Math.floor(Math.random() * 30), // TODO: Replace with actual counts
}));

export function CategoryGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}