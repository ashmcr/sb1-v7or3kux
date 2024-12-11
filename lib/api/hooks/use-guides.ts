"use client";

import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { getGuides, GuidesParams } from '../client';
import { swrConfig } from './config';

export function useGuides(initialParams: GuidesParams = {}) {
  const [params, setParams] = useState(initialParams);

  const { data, error, isLoading, mutate } = useSWR(
    [`/guides`, JSON.stringify(params)],
    () => getGuides(params),
    swrConfig
  );

  const updateParams = useCallback((newParams: Partial<GuidesParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  }, []);

  return {
    guides: data?.data ?? [],
    total: data?.total ?? 0,
    totalPages: data?.total_pages ?? 0,
    isLoading,
    error,
    mutate,
    params,
    updateParams,
  };
}