# Curate Glasgow API Documentation

## Overview
The Curate Glasgow API provides access to listings and guides through a RESTful interface. All endpoints return JSON responses and support pagination.

Base URL: `https://your-domain.com/wp-json/curate/v1`

## Authentication
Currently, all endpoints are publicly accessible and do not require authentication.

## Endpoints

### Listings

#### Get All Listings
```
GET /listings
```

Query Parameters:
- `page` (integer, default: 1): Page number
- `per_page` (integer, default: 10): Items per page
- `category` (string, optional): Filter by category slug
- `tag` (string, optional): Filter by tag slug

Response:
```json
{
    "listings": [
        {
            "id": 123,
            "title": "Example Listing",
            "content": "Full content...",
            "slug": "example-listing",
            "featured_image": "https://example.com/image.jpg",
            "featured_image_sizes": {
                "thumbnail": "https://example.com/image-150x150.jpg",
                "medium": "https://example.com/image-300x300.jpg",
                "large": "https://example.com/image-1024x1024.jpg"
            },
            "images": [
                "https://example.com/image-1.jpg",
                "https://example.com/image-2.jpg"
            ],
            "images_sizes": {
                "image_1": {
                    "thumbnail": "...",
                    "medium": "...",
                    "large": "..."
                },
                "image_2": {
                    "thumbnail": "...",
                    "medium": "...",
                    "large": "..."
                }
            },
            "contact": {
                "email": "contact@example.com",
                "website": "https://example.com",
                "instagram": "https://instagram.com/example"
            },
            "category": {
                "id": 1,
                "name": "Shops, Studios & Services",
                "slug": "shops-studios-services"
            },
            "tags": [
                {
                    "id": 2,
                    "name": "Coffee",
                    "slug": "coffee"
                }
            ],
            "meta": {
                "last_modified": "2024-01-20T12:00:00",
                "author": "admin"
            }
        }
    ],
    "total": 50,
    "total_pages": 5
}
```

### Guides

#### Get All Guides
```
GET /guides
```

Query Parameters:
- `page` (integer, default: 1): Page number
- `per_page` (integer, default: 10): Items per page

Response:
```json
{
    "guides": [
        {
            "id": 456,
            "title": "Example Guide",
            "content": "Full content...",
            "slug": "example-guide",
            "featured_image": "https://example.com/guide-image.jpg",
            "linked_listings": [
                {
                    // Full listing object as shown above
                }
            ]
        }
    ],
    "total": 20,
    "total_pages": 2
}
```

## Examples

### Fetch First Page of Listings
```bash
curl https://your-domain.com/wp-json/curate/v1/listings
```

### Fetch Listings by Category
```bash
curl https://your-domain.com/wp-json/curate/v1/listings?category=shops-studios-services
```

### Fetch Listings with Tag
```bash
curl https://your-domain.com/wp-json/curate/v1/listings?tag=coffee
```

### Fetch Second Page of Guides
```bash
curl https://your-domain.com/wp-json/curate/v1/guides?page=2
```

## Error Handling

The API returns standard HTTP status codes:

- 200: Success
- 400: Bad Request (invalid parameters)
- 404: Not Found
- 500: Server Error

Error Response Format:
```json
{
    "code": "error_code",
    "message": "Human readable error message",
    "data": {
        "status": 400
    }
}
```

## Image Formats

Images are returned in the following formats:
- Featured Images: Full size URL
- Additional Images: Full size URLs in array
- All images are optimized with:
  - Maximum dimensions: 2000x2000px
  - JPEG quality: 85%
  - PNG compression: Level 8
  - WebP quality: 85%

## Rate Limiting

Currently, there are no rate limits implemented. However, we recommend:
- Caching responses where possible
- Limiting requests to 60 per minute per IP
- Using the pagination parameters to limit response sizes

## Changelog

### Version 1.0.0
- Initial API release
- Basic listings and guides endpoints
- Category and tag filtering
- Pagination support 

## Image Sizes
Available image sizes:
- thumbnail: 150x150px
- medium: 300x300px
- large: 1024x1024px
- full: Original size (max 2000x2000px)