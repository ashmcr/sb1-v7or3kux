export const API_BASE_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://api.curateglasgow.com/wp-json/curate/v1';

export const DEFAULT_PER_PAGE = 10;

export const IMAGE_SIZES = {
  thumbnail: '150x150',
  medium: '300x300',
  large: '1024x1024',
  full: 'full',
} as const;