"use client";

import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { getListings, getGuides, ListingsParams, GuidesParams } from './client';
import type { Listing, Guide } from './types';
import { fetcher } from '@/lib/api/fetcher';

const swrConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export function useListings(initialParams: ListingsParams) {
  const [params, setParams] = useState(initialParams);

  const { data, error, isLoading, mutate } = useSWR(
    `/listings?${new URLSearchParams({
      per_page: params.per_page?.toString() || '12',
      page: params.page?.toString() || '1'
    })}`,
    fetcher
  );

  const updateParams = (newParams: Partial<ListingsParams>) => {
    setParams(prev => ({ ...prev, ...newParams }));
  };

  return {
    listings: data?.listings ?? [],
    total: data?.total ?? 0,
    totalPages: data?.totalPages ?? 0,
    isLoading,
    error,
    mutate,
    params,
    updateParams,
  };
}

export function useGuides(initialParams: GuidesParams = {}) {
  const [params, setParams] = useState(initialParams);

  const { data, error, isLoading, mutate } = useSWR(
    [`/guides`, params],
    () => getGuides(params),
    swrConfig
  );

  const updateParams = useCallback((newParams: Partial<GuidesParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  }, []);

  if (error) {
    throw error;
  }

  return {
    guides: data?.data ?? [],
    total: data?.total ?? 0,
    totalPages: data?.total_pages ?? 0,
    isLoading,
    mutate,
    params,
    updateParams,
  };
}