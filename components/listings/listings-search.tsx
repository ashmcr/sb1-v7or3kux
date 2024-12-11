"use client";

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useListings } from '@/lib/api/hooks';
import { useDebounce } from '@/hooks/use-debounce';
import { useEffect, useState } from 'react';

export function ListingsSearch() {
  const { updateParams } = useListings();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    updateParams({ search: debouncedSearch || undefined, page: 1 });
  }, [debouncedSearch, updateParams]);

  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search listings..."
        className="pl-9"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}