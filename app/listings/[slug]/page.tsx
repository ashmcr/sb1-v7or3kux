import { notFound } from 'next/navigation';

async function getListings() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/listings`);
  
  if (!res.ok) {
    return [];
  }
  
  const data = await res.json();
  return data.listings || [];
}

async function getListingBySlug(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/listings/${slug}`);
  
  if (!res.ok) {
    return null;
  }
  
  return res.json();
}

// Add this function to generate static paths
export async function generateStaticParams() {
  const listings = await getListings();
  
  return listings.map((listing: { slug: string }) => ({
    slug: listing.slug,
  }));
}

export default async function ListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const listing = await getListingBySlug(params.slug);

  if (!listing) {
    notFound();
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">{listing.title}</h1>
        {/* Add more listing details here */}
      </div>
    </div>
  );
} 