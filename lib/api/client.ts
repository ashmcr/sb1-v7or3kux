import { API_BASE_URL, DEFAULT_PER_PAGE } from './config';
import type { PaginatedResponse, ApiError } from './types';

export class ApiError extends Error {
  constructor(public error: ApiError) {
    super(error.message);
    this.name = 'ApiError';
  }
}

async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(data);
  }

  return data;
}

export interface ListingsParams {
  page?: number;
  per_page?: number;
  category?: string;
  tag?: string;
}

export interface GuidesParams {
  page?: number;
  per_page?: number;
}

export async function getListings(params: ListingsParams = {}) {
  const searchParams = new URLSearchParams({
    page: String(params.page || 1),
    per_page: String(params.per_page || DEFAULT_PER_PAGE),
    ...(params.category && { category: params.category }),
    ...(params.tag && { tag: params.tag }),
  });

  return fetchApi<PaginatedResponse<Listing>>(
    `/listings?${searchParams.toString()}`
  );
}

export async function getListing(slug: string) {
  return fetchApi<Listing>(`/listings/${slug}`);
}

export async function getGuides(params: GuidesParams = {}) {
  const searchParams = new URLSearchParams({
    page: String(params.page || 1),
    per_page: String(params.per_page || DEFAULT_PER_PAGE),
  });

  return fetchApi<PaginatedResponse<Guide>>(
    `/guides?${searchParams.toString()}`
  );
}

export async function getGuide(slug: string) {
  return fetchApi<Guide>(`/guides/${slug}`);
}