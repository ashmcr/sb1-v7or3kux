"use client";

import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { getListings, getGuides, ListingsParams, GuidesParams } from './client';
import type { Listing, Guide } from './types';

const swrConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export function useListings(initialParams: ListingsParams = {}) {
  const [params, setParams] = useState(initialParams);

  const { data, error, isLoading, mutate } = useSWR(
    [`/listings`, params],
    () => getListings(params),
    swrConfig
  );

  const updateParams = useCallback((newParams: Partial<ListingsParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  }, []);

  if (error) {
    throw error;
  }

  return {
    listings: data?.data ?? [],
    total: data?.total ?? 0,
    totalPages: data?.total_pages ?? 0,
    isLoading,
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