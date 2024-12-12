export interface Listing {
  id: number;
  slug: string;
  title: string;
  category: {
    name: string;
  };
  featured_image: string;
}

export interface PaginatedResponse<T> {
  listings: T[];
  total: number;
  totalPages: number;
}

export interface ListingsParams {
  page?: number;
  per_page?: number;
  // Add other filter parameters as needed
}

export interface Guide {
  id: number;
  title: string;
  content: string;
  slug: string;
  featured_image: string;
  linked_listings: Listing[];
}

export interface ApiError {
  code: string;
  message: string;
  data: {
    status: number;
  };
}