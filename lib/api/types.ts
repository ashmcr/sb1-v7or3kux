export interface Listing {
  id: number;
  title: string;
  content: string;
  slug: string;
  featured_image: string;
  featured_image_sizes: {
    thumbnail: string;
    medium: string;
    large: string;
  };
  images: string[];
  images_sizes: {
    [key: string]: {
      thumbnail: string;
      medium: string;
      large: string;
    };
  };
  contact: {
    email: string;
    website: string;
    instagram: string;
  };
  category: {
    id: number;
    name: string;
    slug: string;
  };
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  meta: {
    last_modified: string;
    author: string;
  };
}

export interface Guide {
  id: number;
  title: string;
  content: string;
  slug: string;
  featured_image: string;
  linked_listings: Listing[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  total_pages: number;
}

export interface ApiError {
  code: string;
  message: string;
  data: {
    status: number;
  };
}