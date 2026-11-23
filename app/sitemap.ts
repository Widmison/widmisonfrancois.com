import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://widmisonfrancois.com',
      lastModified: new Date('2026-11-23'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
