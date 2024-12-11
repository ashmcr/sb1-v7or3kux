export const LISTING_CATEGORIES = [
  {
    title: 'Art & Print',
    slug: 'art-print',
    description: 'Art galleries, print studios, and illustration shops',
  },
  {
    title: 'Eat & Drink',
    slug: 'eat-drink',
    description: 'Independent cafes, restaurants, and bars',
  },
  {
    title: 'Clothing',
    slug: 'clothing',
    description: 'Fashion boutiques and vintage clothing stores',
  },
  {
    title: 'Jewellery',
    slug: 'jewellery',
    description: 'Independent jewellers and accessories',
  },
  {
    title: 'Home',
    slug: 'home',
    description: 'Homeware, furniture, and interior design',
  },
  {
    title: 'Plants',
    slug: 'plants',
    description: 'Plant shops and florists',
  },
] as const;

export type ListingCategory = typeof LISTING_CATEGORIES[number]['slug'];