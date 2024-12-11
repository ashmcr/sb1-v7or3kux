import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GuideCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
}

export function GuideCard({ id, title, excerpt, imageUrl, tags }: GuideCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/9]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <Link href={`/guides/${id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:underline">{title}</h3>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}