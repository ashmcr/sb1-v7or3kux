import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  count: number;
}

export function CategoryCard({ title, icon: Icon, href, count }: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:bg-muted/50 transition-colors">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <Icon className="h-8 w-8 mb-4" />
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{count} listings</p>
        </CardContent>
      </Card>
    </Link>
  );
}