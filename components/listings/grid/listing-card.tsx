"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useFavorites } from '@/lib/api/hooks';

interface ListingCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export function ListingCard({
  id,
  title,
  category,
  imageUrl,
}: ListingCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(id);

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm hover:bg-background/75"
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
        >
          <Heart className={`h-5 w-5 ${favorited ? 'fill-current' : ''}`} />
        </Button>
      </div>
      <CardContent className="p-4">
        <Link href={`/listings/${id}`}>
          <h3 className="font-semibold hover:underline">{title}</h3>
        </Link>
        <Badge variant="secondary" className="mt-2">
          {category}
        </Badge>
      </CardContent>
    </Card>
  );
}