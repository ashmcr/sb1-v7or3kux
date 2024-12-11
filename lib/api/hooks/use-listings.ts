"use client";

import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { getListings, ListingsParams } from '../client';
import { swrConfig } from './config';

export function useListings(initialParams: ListingsParams = {}) {
  const [params, setParams] = useState(initialParams);

  const { data, error, isLoading, mutate } = useSWR(
    [`/listings`, JSON.stringify(params)],
    () => getListings(params),
    swrConfig
  );

  const updateParams = useCallback((newParams: Partial<ListingsParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  }, []);

  return {
    listings: data?.data ?? [],
    total: data?.total ?? 0,
    totalPages: data?.total_pages ?? 0,
    isLoading,
    error,
    mutate,
    params,
    updateParams,
  };
}